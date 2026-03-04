'use client'

import { motion } from 'motion/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Phone, Send, Loader2, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const formSchema = z.object({
  nom: z.string().min(2, 'Veuillez entrer votre nom'),
  telephone: z.string().min(10, 'Veuillez entrer un numéro valide'),
  email: z.string().email('Email invalide').optional().or(z.literal('')),
  message: z.string().min(10, 'Veuillez décrire votre besoin (min. 10 caractères)'),
})

type FormData = z.infer<typeof formSchema>

export default function ContactDual() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log('Form data:', data)
    toast.success('Message envoyé !', {
      description: 'Nous vous recontacterons dans les plus brefs délais.',
    })
    reset()
    setIsSubmitting(false)
  }

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* ─────────────────────────────────────────
              LEFT COLUMN — Phone (urgence)
              ───────────────────────────────────────── */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Sticky wrapper for desktop */}
            <div className="lg:sticky lg:top-32">
              {/* Number label */}
              <span
                className="block mb-2"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: 'var(--primary)',
                }}
              >
                01
              </span>

              <h2
                className="mb-3"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.75rem, 3vw + 0.5rem, 2.5rem)',
                  fontWeight: 500,
                  lineHeight: 1.15,
                  color: 'var(--foreground)',
                }}
              >
                Appelez-nous
              </h2>

              <p
                className="mb-8"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.65,
                  color: 'var(--muted-foreground)',
                  maxWidth: '24rem',
                }}
              >
                Pour une urgence ou un besoin immédiat, le plus rapide est de nous appeler directement.
              </p>

              {/* Phone card — warm gradient, prominent */}
              <motion.a
                href="tel:0789081857"
                className="group block"
                style={{
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="relative px-8 py-10 lg:px-10 lg:py-12"
                  style={{
                    background: `
                      linear-gradient(160deg,
                        oklch(0.68 0.16 58) 0%,
                        oklch(0.58 0.17 52) 50%,
                        oklch(0.50 0.15 46) 100%
                      )
                    `,
                  }}
                >
                  {/* Radial glow */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `
                        radial-gradient(ellipse 70% 60% at 30% 20%,
                          oklch(0.82 0.12 60 / 0.2) 0%,
                          transparent 60%
                        )
                      `,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Phone icon circle */}
                    <div
                      className="w-14 h-14 flex items-center justify-center rounded-full mb-6 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
                      style={{
                        background: 'rgba(255, 251, 240, 0.95)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.12)',
                      }}
                    >
                      <Phone className="w-6 h-6" style={{ color: 'oklch(0.55 0.16 55)' }} strokeWidth={2.2} />
                    </div>

                    {/* Phone number */}
                    <span
                      className="block mb-2"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2rem, 5vw + 0.5rem, 3rem)',
                        fontWeight: 700,
                        color: 'white',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.1,
                      }}
                    >
                      07 89 08 18 57
                    </span>

                    {/* Label */}
                    <span
                      className="block mb-8"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        color: 'rgba(255, 255, 255, 0.6)',
                      }}
                    >
                      Disponible 24h/24, 7j/7
                    </span>

                    {/* CTA within card */}
                    <span
                      className="inline-flex items-center gap-2"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: 600,
                        fontSize: '0.9375rem',
                        color: 'white',
                        borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
                        paddingBottom: '2px',
                        transition: 'border-color 300ms ease-out',
                      }}
                    >
                      Appeler maintenant
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
                    </span>
                  </div>
                </div>
              </motion.a>

              {/* Trust items below phone card */}
              <div className="mt-8 flex flex-col gap-4">
                {[
                  { text: 'Réponse immédiate', detail: 'Pas de boîte vocale' },
                  { text: 'Devis gratuit', detail: 'Avant toute intervention' },
                  { text: 'Sans engagement', detail: 'Vous décidez librement' },
                ].map((item, i) => (
                  <motion.div
                    key={item.text}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Dot */}
                    <div
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: 'var(--primary)' }}
                    />
                    <div>
                      <span
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontWeight: 600,
                          fontSize: '0.875rem',
                          color: 'var(--foreground)',
                        }}
                      >
                        {item.text}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.875rem',
                          color: 'var(--muted-foreground)',
                          marginLeft: '0.5rem',
                        }}
                      >
                        — {item.detail}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ─────────────────────────────────────────
              RIGHT COLUMN — Form (non-urgent)
              ───────────────────────────────────────── */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Number label */}
            <span
              className="block mb-2"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: 'var(--primary)',
              }}
            >
              02
            </span>

            <h2
              className="mb-3"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.75rem, 3vw + 0.5rem, 2.5rem)',
                fontWeight: 500,
                lineHeight: 1.15,
                color: 'var(--foreground)',
              }}
            >
              Laissez-nous un message
            </h2>

            <p
              className="mb-10"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                lineHeight: 1.65,
                color: 'var(--muted-foreground)',
                maxWidth: '28rem',
              }}
            >
              Pour un devis, un renseignement ou un projet d'installation. Nous vous recontacterons rapidement.
            </p>

            {/* Form card */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div
                className="p-8 lg:p-10"
                style={{
                  backgroundColor: 'var(--card)',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: 'var(--shadow-subtle)',
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Nom */}
                  <div>
                    <label
                      htmlFor="nom"
                      style={{
                        display: 'block',
                        marginBottom: '0.5rem',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: 'var(--foreground)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      Nom <span style={{ color: 'var(--primary)' }}>*</span>
                    </label>
                    <input
                      id="nom"
                      type="text"
                      placeholder="Votre nom"
                      {...register('nom')}
                      className="input"
                      style={{
                        borderColor: errors.nom ? 'var(--destructive)' : undefined,
                      }}
                    />
                    {errors.nom && (
                      <p style={{ marginTop: '0.375rem', fontSize: '0.8125rem', color: 'var(--destructive)' }}>
                        {errors.nom.message}
                      </p>
                    )}
                  </div>

                  {/* Téléphone */}
                  <div>
                    <label
                      htmlFor="telephone"
                      style={{
                        display: 'block',
                        marginBottom: '0.5rem',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: 'var(--foreground)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      Téléphone <span style={{ color: 'var(--primary)' }}>*</span>
                    </label>
                    <input
                      id="telephone"
                      type="tel"
                      placeholder="Votre numéro"
                      {...register('telephone')}
                      className="input"
                      style={{
                        borderColor: errors.telephone ? 'var(--destructive)' : undefined,
                      }}
                    />
                    {errors.telephone && (
                      <p style={{ marginTop: '0.375rem', fontSize: '0.8125rem', color: 'var(--destructive)' }}>
                        {errors.telephone.message}
                      </p>
                    )}
                  </div>

                  {/* Email — full width */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      style={{
                        display: 'block',
                        marginBottom: '0.5rem',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: 'var(--foreground)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      Email{' '}
                      <span style={{ fontWeight: 400, color: 'var(--muted-foreground)' }}>(optionnel)</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Votre email"
                      {...register('email')}
                      className="input"
                      style={{
                        borderColor: errors.email ? 'var(--destructive)' : undefined,
                      }}
                    />
                    {errors.email && (
                      <p style={{ marginTop: '0.375rem', fontSize: '0.8125rem', color: 'var(--destructive)' }}>
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Message — full width */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      style={{
                        display: 'block',
                        marginBottom: '0.5rem',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: 'var(--foreground)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      Message <span style={{ color: 'var(--primary)' }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Décrivez votre besoin : type de serrure, urgence, budget..."
                      {...register('message')}
                      className="input"
                      style={{
                        resize: 'vertical' as const,
                        minHeight: '140px',
                        borderColor: errors.message ? 'var(--destructive)' : undefined,
                      }}
                    />
                    {errors.message && (
                      <p style={{ marginTop: '0.375rem', fontSize: '0.8125rem', color: 'var(--destructive)' }}>
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit */}
                <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-3"
                    style={{
                      padding: '1rem 2.5rem',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      background: isSubmitting
                        ? 'var(--muted)'
                        : 'linear-gradient(135deg, oklch(0.70 0.16 60) 0%, oklch(0.65 0.17 55) 100%)',
                      color: 'white',
                      borderRadius: 'var(--radius-md)',
                      border: 'none',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      transition: 'all 200ms ease-out',
                      boxShadow: isSubmitting ? 'none' : '0 4px 16px rgba(217, 119, 6, 0.25)',
                    }}
                    whileHover={!isSubmitting ? { scale: 1.02, boxShadow: '0 6px 24px rgba(217, 119, 6, 0.3)' } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" strokeWidth={2} />
                        <span>Envoyer ma demande</span>
                      </>
                    )}
                  </motion.button>

                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8125rem',
                      color: 'var(--muted-foreground)',
                      lineHeight: 1.4,
                    }}
                  >
                    Réponse sous 2h en moyenne.
                  </p>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
