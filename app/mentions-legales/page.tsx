import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales | OPENDOOR - Serrurier Narbonne',
  description:
    "Mentions légales du site OPENDOOR, serrurier à Narbonne : éditeur, hébergeur, assurance, protection des données personnelles et médiation de la consommation.",
  robots: { index: true, follow: true },
}

/**
 * Champs à compléter avec les informations légales réelles du client.
 * Tant qu'un champ vaut TODO, il s'affiche en surbrillance pour ne pas être oublié avant la mise en ligne.
 */
const TODO = '[À compléter]'

const editeur = {
  exploitant: 'Aurélien Eugène',
  nomCommercial: 'OPENDOOR',
  formeJuridique: 'Entrepreneur individuel (EI)',
  capital: 'Sans objet (entreprise individuelle)',
  adresse: '7 Impasse des Cyprès, Bâtiment E, 11100 Narbonne',
  telephone: '07 89 08 18 57',
  email: '1.aurelien.eugene@gmail.com',
  siret: '853 647 436 00023',
  immatriculation: 'Registre National des Entreprises (RNE), SIREN 853 647 436',
  tva: TODO, // n° TVA intracommunautaire si assujetti, sinon « TVA non applicable, art. 293 B du CGI »
  directeurPublication: 'Aurélien Eugène',
}

const assurance = {
  assureur: TODO, // nom de la compagnie d'assurance
  contrat: TODO, // n° de contrat
  zone: 'Narbonne et ses environs (rayon de 50 km)',
}

const mediateur = TODO // nom et coordonnées du médiateur de la consommation auquel l'entreprise adhère

function Champ({ children }: { children: string }) {
  if (children === TODO) {
    return (
      <span
        style={{
          backgroundColor: 'rgba(217, 119, 6, 0.14)',
          color: 'var(--primary-dark)',
          padding: '0.05em 0.4em',
          borderRadius: '0.35rem',
          fontWeight: 600,
        }}
      >
        {TODO}
      </span>
    )
  }
  return <>{children}</>
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.5rem',
          fontWeight: 600,
          color: 'var(--foreground)',
          marginBottom: '0.75rem',
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h2>
      <div style={{ color: 'var(--muted-foreground)', lineHeight: 1.7, fontSize: '1rem' }}>
        {children}
      </div>
    </section>
  )
}

export default function MentionsLegalesPage() {
  return (
    <main>
      <section style={{ backgroundColor: 'var(--background)' }}>
        <div className="container-custom" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
          <div className="container-text" style={{ marginInline: 'auto' }}>

            <p className="overline" style={{ marginBottom: '1rem' }}>
              Informations légales
            </p>
            <h1 style={{ marginBottom: '0.75rem' }}>Mentions légales</h1>
            <p style={{ color: 'var(--muted-foreground)', marginBottom: '3rem', fontSize: '0.9375rem' }}>
              Dernière mise à jour : 29 mai 2026
            </p>

            <Section title="Éditeur du site">
              <p>
                Le présent site est édité par <strong style={{ color: 'var(--foreground)' }}>{editeur.exploitant}</strong>,
                entrepreneur individuel exerçant sous le nom commercial{' '}
                <strong style={{ color: 'var(--foreground)' }}>{editeur.nomCommercial}</strong>.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <li>Forme juridique : <Champ>{editeur.formeJuridique}</Champ></li>
                <li>Capital social : <Champ>{editeur.capital}</Champ></li>
                <li>Adresse : <Champ>{editeur.adresse}</Champ></li>
                <li>Téléphone : <a href="tel:+33789081857" style={{ color: 'var(--primary)' }}>{editeur.telephone}</a></li>
                <li>Email : <Champ>{editeur.email}</Champ></li>
                <li>SIRET : <Champ>{editeur.siret}</Champ></li>
                <li>Immatriculation au Registre National des Entreprises (RNE) : <Champ>{editeur.immatriculation}</Champ></li>
                <li>Numéro de TVA intracommunautaire : <Champ>{editeur.tva}</Champ></li>
                <li>Directeur de la publication : <Champ>{editeur.directeurPublication}</Champ></li>
              </ul>
            </Section>

            <Section title="Assurance professionnelle">
              <p>
                Dans le cadre de son activité de serrurerie, l&apos;entreprise est couverte par une assurance de
                responsabilité civile professionnelle et décennale.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <li>Compagnie d&apos;assurance : <Champ>{assurance.assureur}</Champ></li>
                <li>Numéro de contrat : <Champ>{assurance.contrat}</Champ></li>
                <li>Zone géographique de couverture : {assurance.zone}</li>
              </ul>
            </Section>

            <Section title="Hébergeur du site">
              <p>
                Le site est hébergé par <strong style={{ color: 'var(--foreground)' }}>Vercel Inc.</strong>
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <li>340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</li>
                <li>Site : <a href="https://vercel.com" style={{ color: 'var(--primary)' }}>vercel.com</a></li>
              </ul>
            </Section>

            <Section title="Conception et réalisation">
              <p>
                Conception, design et développement du site :{' '}
                <a href="https://neurolia.work" style={{ color: 'var(--primary)' }}>Neurolia</a>.
              </p>
            </Section>

            <Section title="Propriété intellectuelle">
              <p>
                L&apos;ensemble des éléments du site (textes, images, logo, charte graphique, structure) est protégé par
                le droit de la propriété intellectuelle. Toute reproduction, représentation, modification, publication ou
                adaptation de tout ou partie de ces éléments, quel que soit le moyen ou le procédé utilisé, est interdite
                sans autorisation écrite préalable de l&apos;éditeur. Toute exploitation non autorisée est susceptible de
                constituer une contrefaçon.
              </p>
            </Section>

            <Section title="Protection des données personnelles">
              <p>
                Conformément au Règlement général sur la protection des données (RGPD) et à la loi « Informatique et
                Libertés » du 6 janvier 1978 modifiée, vous disposez de droits sur les données vous concernant.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                Le formulaire de contact collecte les données suivantes : nom, numéro de téléphone, adresse email
                (facultative) et contenu de votre message. Ces données sont utilisées uniquement pour répondre à votre
                demande et assurer le suivi de la relation. Elles ne sont ni cédées ni vendues à des tiers et sont
                conservées pour la durée nécessaire au traitement de votre demande, puis archivées ou supprimées
                conformément aux obligations légales.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, d&apos;opposition, de
                limitation et de portabilité de vos données. Pour exercer ces droits, contactez-nous à l&apos;adresse{' '}
                <Champ>{editeur.email}</Champ>. Vous pouvez également introduire une réclamation auprès de la CNIL
                (<a href="https://www.cnil.fr" style={{ color: 'var(--primary)' }}>www.cnil.fr</a>).
              </p>
            </Section>

            <Section title="Cookies">
              <p>
                Ce site ne dépose pas de cookie de suivi ni d&apos;outil de mesure d&apos;audience à des fins
                publicitaires ou statistiques. Seuls les éléments techniques strictement nécessaires au bon
                fonctionnement du site peuvent être utilisés. Aucun consentement préalable n&apos;est donc requis.
              </p>
            </Section>

            <Section title="Liens hypertextes">
              <p>
                Le site peut contenir des liens vers d&apos;autres sites. L&apos;éditeur n&apos;exerce aucun contrôle sur
                ces sites et décline toute responsabilité quant à leur contenu ou à l&apos;usage qui pourrait en être fait.
              </p>
            </Section>

            <Section title="Médiation de la consommation">
              <p>
                Conformément à l&apos;article L.612-1 du Code de la consommation, tout consommateur a le droit de recourir
                gratuitement à un médiateur de la consommation en vue de la résolution amiable d&apos;un litige qui
                l&apos;oppose à un professionnel. Le médiateur de la consommation auquel l&apos;entreprise adhère est :{' '}
                <Champ>{mediateur}</Champ>. Ce recours n&apos;est possible qu&apos;après avoir tenté de résoudre le litige
                directement auprès de l&apos;entreprise par une réclamation écrite.
              </p>
            </Section>

            <Section title="Droit applicable">
              <p>
                Le présent site et ses mentions légales sont soumis au droit français. En cas de litige et à défaut de
                résolution amiable, les tribunaux français sont seuls compétents.
              </p>
            </Section>

          </div>
        </div>
      </section>
    </main>
  )
}
