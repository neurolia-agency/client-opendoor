import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

// Schéma aligné sur le formulaire (components/pages/contact/contact-dual.tsx)
const schema = z.object({
  nom: z.string().min(2),
  telephone: z.string().min(10),
  email: z.string().email().optional().or(z.literal('')),
  message: z.string().min(10),
})

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Requête invalide' }, { status: 400 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Données du formulaire invalides' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY manquante : email non envoyé')
    return NextResponse.json({ error: 'Service email non configuré' }, { status: 500 })
  }

  const to = process.env.CONTACT_TO_EMAIL || 'gustiez.joris@neurolia.work'
  // Tant que le domaine n'est pas vérifié dans Resend, on garde l'expéditeur partagé onboarding@resend.dev.
  const from = process.env.CONTACT_FROM_EMAIL || 'OPENDOOR <onboarding@resend.dev>'

  const { nom, telephone, email, message } = parsed.data
  const resend = new Resend(apiKey)

  const lignesEmail = email && email.length > 0 ? email : 'Non renseigné'

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email && email.length > 0 ? email : undefined,
      subject: `Nouvelle demande de contact : ${nom}`,
      text: [
        'Nouvelle demande via le formulaire du site OPENDOOR.',
        '',
        `Nom : ${nom}`,
        `Téléphone : ${telephone}`,
        `Email : ${lignesEmail}`,
        '',
        'Message :',
        message,
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; color: #2A2418; line-height: 1.6;">
          <h2 style="color: #B45309;">Nouvelle demande de contact</h2>
          <p>Reçue via le formulaire du site OPENDOOR.</p>
          <table style="border-collapse: collapse;">
            <tr><td style="padding: 4px 16px 4px 0;"><strong>Nom</strong></td><td>${nom}</td></tr>
            <tr><td style="padding: 4px 16px 4px 0;"><strong>Téléphone</strong></td><td>${telephone}</td></tr>
            <tr><td style="padding: 4px 16px 4px 0;"><strong>Email</strong></td><td>${lignesEmail}</td></tr>
          </table>
          <p style="margin-top: 16px;"><strong>Message :</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    })

    if (error) {
      console.error('[contact] Erreur Resend :', error)
      return NextResponse.json({ error: "L'envoi a échoué" }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] Exception :', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
