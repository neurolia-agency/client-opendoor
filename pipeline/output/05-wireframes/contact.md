# Contact - Wireframe

**Route** : /contact
**Objectif** : Faciliter la prise de contact (téléphone prioritaire, formulaire secondaire)

---

## Section 1 : Hero Page

**Contenu** :
- H1 : "Contactez-nous"
- Baseline : `positioning.md > messages > contact` (partie après le tiret)

**Layout** : Hero compact, titre centré.
**Interaction** : Fade-in au load.
**Style** : Typographie Cormorant. Fond Crème doré.

---

## Section 2 : Bloc Téléphone (prioritaire)

**Contenu** :
- Titre : "Pour une urgence, appelez directement"
- Numéro : `about.md > contact > telephone`
- CTA : Bouton click-to-call
- Disponibilité : "Disponible 24h/24, 7j/7"

**Layout** : Section highlight, fond Terracotta ou Or Miel. Centré, grande taille.
**Interaction** : Bouton avec pulse animation pour attirer l'attention. Hover scale.
**Style** : Numéro en très grande taille (3rem+). Cormorant. Contraste maximum.
**Mobile** : Occupe 50%+ de l'écran au load.

---

## Section 3 : Formulaire de Contact

**Contenu** :
- Titre : "Ou laissez-nous un message"
- Champ 1 : Nom (required, placeholder "Votre nom")
- Champ 2 : Téléphone (required, placeholder "Votre numéro")
- Champ 3 : Email (optional, placeholder "Votre email")
- Champ 4 : Message (textarea, required, placeholder "Décrivez votre besoin...")
- Bouton : "Envoyer ma demande"

**Layout** : Formulaire 1 colonne, max-width 500px. Centré ou aligné gauche dans une grid 2 colonnes.
**Interaction** : Focus states visibles (border Or Miel). Validation inline. Loading state sur submit.
**Style** : Inputs avec radius 12px. Labels au-dessus ou placeholder flottant. Bouton Terracotta.
**Accessibilité** : Labels associés, messages d'erreur clairs, focus visible.

---

## Section 4 : Coordonnées

**Contenu** :
- Téléphone : `about.md > contact > telephone`
- Zone : `about.md > contact > zone`
- Disponibilité : `about.md > contact > disponibilite`

**Layout** : 3 items en ligne ou stack sur mobile. Icônes + texte.
**Interaction** : Téléphone cliquable (click-to-call).
**Style** : Fond Crème doré. Icônes Or Miel. Section finale sobre.

---

**Sections totales** : 4
**Source** : `03-sitemap.md > pages > contact`
