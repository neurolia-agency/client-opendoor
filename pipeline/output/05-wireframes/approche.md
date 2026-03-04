# Approche - Wireframe

**Route** : /approche
**Objectif** : Créer la confiance en expliquant la méthode de travail et les valeurs

---

## Section 1 : Hero Page

**Contenu** :
- H1 : "Notre Approche"
- Baseline : `positioning.md > messages > approche` (partie après le tiret)

**Layout** : Hero compact, titre centré. Fond Crème doré avec texture grain.
**Interaction** : Fade-in au load.
**Style** : Typographie Cormorant dominante. Pas d'image.

---

## Section 2 : Mission

**Contenu** :
- H2 : "Notre mission"
- Texte : `about.md > mission`

**Layout** : Texte large, centré ou légèrement décalé. Citation mise en avant.
**Interaction** : Fade-in au scroll.
**Style** : Texte en Cormorant italique ou mise en forme citation. Grande taille (1.5rem+).

---

## Section 3 : Vision

**Contenu** :
- H2 : "Notre vision"
- Texte : `about.md > vision`

**Layout** : Même structure que mission.
**Interaction** : Fade-in au scroll.
**Style** : Cohérent avec mission. Fond légèrement différencié (Or Miel très subtil).

---

## Section 4 : Valeurs (4 cartes)

**Contenu** :
- H2 : "Nos valeurs"
- Valeur 1 : `about.md > valeurs[0] > nom` + `about.md > valeurs[0] > description`
- Valeur 2 : `about.md > valeurs[1] > nom` + `about.md > valeurs[1] > description`
- Valeur 3 : `about.md > valeurs[2] > nom` + `about.md > valeurs[2] > description`
- Valeur 4 : `about.md > valeurs[3] > nom` + `about.md > valeurs[3] > description`

**Layout** : Grid 2x2 desktop, stack sur mobile. Cards avec titre + description.
**Interaction** : Hover translateY(-4px) sur cards. Apparition staggered au scroll.
**Style** : Cards fond blanc cassé, border Or Miel subtil. Radius 24px. Icônes optionnelles.

---

## Section 5 : Différenciation

**Contenu** :
- H2 : "Ce qui nous distingue"
- Texte : `positioning.md > differenciation`

**Layout** : Section highlight, fond Ardoise clair. Texte large centré.
**Interaction** : Fade-in au scroll.
**Style** : Mise en avant visuelle, comme un témoignage ou manifeste.

---

## Section 6 : CTA Contact

**Contenu** :
- Titre : "Prêt à nous faire confiance ?"
- CTA principal : `positioning.md > cta_principal > texte` → tel:0789081857
- CTA secondaire : `positioning.md > cta_secondaire > texte` → /contact

**Layout** : Pleine largeur, fond Terracotta.
**Interaction** : Hover sur boutons.
**Style** : Cohérent avec autres pages.

---

**Sections totales** : 6
**Source** : `03-sitemap.md > pages > approche`
