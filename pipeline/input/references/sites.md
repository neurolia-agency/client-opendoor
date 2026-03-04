# Références Visuelles - OPENDOOR

## Style Général

Le style Opendoor s'inscrit dans une esthétique **organique, sereine et haut de gamme**. L'objectif est de créer une expérience apaisante qui rassure immédiatement le visiteur en situation de stress.

---

## Palette de Référence

### Couleurs Principales (Backgrounds - teinte dorée)

| Nom | Hex | Usage |
|-----|-----|-------|
| Crème doré | `#FFFBF0` | Background principal |
| Ivoire chaud | `#FAF6E6` | Background alternatif |
| Sable doré | `#F2EBDA` | Surfaces secondaires |
| Sable prononcé | `#E6DDCA` | Bordures, séparateurs |

### Couleur Dominante - Or Miel

| Nom | Hex | Usage |
|-----|-----|-------|
| Or Miel | `#C4A35A` | Accent principal (signature) |
| Or clair | `#D4B87A` | Hover, variantes |
| Or foncé | `#A68940` | Active states |
| Or pâle | `#E8D9A8` | Backgrounds subtils, badges |

### Couleurs Secondaires

| Nom | Hex | Usage |
|-----|-----|-------|
| Ardoise Douce | `#6B7A8A` | Contraste équilibré, icônes |
| Ardoise claire | `#8A97A6` | Hover, éléments désactivés |
| Terracotta Chaud | `#B8845A` | CTAs, boutons d'action |
| Terracotta clair | `#D4A07A` | Hover states |

### Tons Profonds (Bruns chauds)

| Nom | Hex | Usage |
|-----|-----|-------|
| Brun profond | `#2A2418` | Texte principal |
| Brun titre | `#3A3428` | Titres |
| Brun sous-titre | `#4A4438` | Sous-titres |
| Brun secondaire | `#6A6254` | Body text |
| Brun discret | `#9A9284` | Labels, captions |

---

## Typographies

### Police Serif
**Cormorant Garamond** (Google Fonts)
- Weights : 400, 500, 600, 700
- Usage : Titres, headings, éléments d'élégance
- Feeling : Raffiné, intemporel, rassurant

### Police Sans-Serif
**Inter** (Google Fonts)
- Weights : 300, 400, 500, 600
- Usage : Body text, labels, interface
- Feeling : Moderne, lisible, professionnel

---

## Éléments de Design

### Border Radius
- Soft : 24px
- Organic : 32px
- Pill : 100px
- Blob : formes organiques

### Textures
- Grain subtil (opacity 0.04)
- Appliqué sur tout le site pour un effet premium

### Ombres
- Ultra-douces avec teinte chaude
- `--shadow-whisper`: 0 4px 40px rgba(26, 22, 18, 0.04)
- `--shadow-float`: 0 20px 80px rgba(26, 22, 18, 0.10)

### Animations
- Fluides et ralenties (0.5s, 0.8s, 1.2s)
- Reveal on scroll avec Intersection Observer
- Formes décoratives flottantes (cercles, carrés)
- Mesh gradient animé en background

---

## Inspirations Fonctionnelles

### Ce qu'on retient
- Header sticky avec téléphone toujours visible
- Bouton téléphone flottant (FAB) en bas à droite
- Badges de réassurance (24h/24, Devis gratuit, Sans dégâts)
- Formulaire contact simplifié (4 champs max)
- Animations subtiles au scroll

### À reproduire
- Click-to-call immédiat
- Structure claire : Hero → Réassurance → Services → Approche → Zone → Contact
- Dark mode toggle (optionnel)
- Mobile-first responsive

---

## Notes de Design

Le projet précédent utilisait du HTML/CSS/JS vanilla. Pour opendoor_v2, nous utilisons :
- **Next.js 15+** : Framework React
- **Tailwind CSS 4** : Styling utilitaire
- **Motion** : Animations
- **Lenis** : Smooth scroll

L'esthétique reste identique, seule la stack technique évolue.

---

## Patterns Communs Identifiés

| Pattern | Fréquence | À utiliser ? |
|---------|-----------|--------------|
| Texture grain subtile | Signature | Oui |
| Typo Serif pour titres | Signature | Oui |
| Animations scroll | Signature | Oui |
| Dark mode | Optionnel | Optionnel |
| Formes décoratives flottantes | Signature | Oui |
| Mesh gradient background | Signature | Oui |
