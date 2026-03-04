# Palette de Couleurs

## Couleur Primaire

- **Nom** : Or Miel
- **HEX** : #C4A35A
- **OKLCH** : oklch(0.72 0.11 85)
- **Usage** : Accent principal, éléments signature, badges de réassurance, highlights, liens

### Variantes

- **Or clair** : #D4B87A — oklch(0.78 0.10 85) — Hover, focus states
- **Or foncé** : #A68940 — oklch(0.62 0.12 85) — Active states, texte sur fond clair
- **Or pâle** : #E8D9A8 — oklch(0.87 0.08 90) — Backgrounds subtils, badges légers

## Couleur Secondaire

- **Nom** : Ardoise Douce
- **HEX** : #6B7A8A
- **OKLCH** : oklch(0.52 0.03 240)
- **Usage** : Contraste équilibré, éléments secondaires, icônes, texte d'interface

### Variantes

- **Ardoise claire** : #8A97A6 — oklch(0.64 0.03 240) — Hover, éléments désactivés
- **Ardoise foncée** : #4A5766 — oklch(0.40 0.03 240) — Active states

## Couleur d'Accent

- **Nom** : Terracotta Chaud
- **HEX** : #B8845A
- **OKLCH** : oklch(0.62 0.10 55)
- **Usage** : CTAs principaux, boutons d'action, éléments d'urgence (téléphone)

### Variantes

- **Terracotta clair** : #D4A07A — oklch(0.72 0.09 55) — Hover states
- **Terracotta foncé** : #966A42 — oklch(0.52 0.10 55) — Active states

## Neutrals

### Backgrounds (teinte dorée)

- **Crème doré** : #FFFBF0 — oklch(0.99 0.02 95) — Background principal
- **Ivoire chaud** : #FAF6E6 — oklch(0.97 0.03 90) — Background alternatif
- **Sable doré** : #F2EBDA — oklch(0.94 0.04 85) — Surfaces secondaires, cards
- **Sable prononcé** : #E6DDCA — oklch(0.89 0.04 80) — Bordures, séparateurs

### Textes (tons bruns chauds)

- **Brun profond** : #2A2418 — oklch(0.18 0.02 70) — Texte principal, titres importants
- **Brun titre** : #3A3428 — oklch(0.25 0.02 70) — Titres
- **Brun sous-titre** : #4A4438 — oklch(0.32 0.02 70) — Sous-titres
- **Brun secondaire** : #6A6254 — oklch(0.44 0.02 65) — Body text, paragraphes
- **Brun discret** : #9A9284 — oklch(0.62 0.02 65) — Labels, captions, placeholders

## Sémantique

- **Succès** : #5A9A6A — oklch(0.62 0.10 145) — Confirmations, validations (vert olive harmonieux)
- **Erreur** : #C45A5A — oklch(0.55 0.14 20) — Erreurs, alertes critiques
- **Warning** : #C4A35A — oklch(0.72 0.11 85) — Avertissements (utilise la primaire)
- **Info** : #6B7A8A — oklch(0.52 0.03 240) — Informations (utilise la secondaire)

## Variables CSS

```css
:root {
  /* Couleur primaire - Or Miel */
  --color-primary: oklch(0.72 0.11 85);
  --color-primary-light: oklch(0.78 0.10 85);
  --color-primary-dark: oklch(0.62 0.12 85);
  --color-primary-pale: oklch(0.87 0.08 90);

  /* Couleur secondaire - Ardoise Douce */
  --color-secondary: oklch(0.52 0.03 240);
  --color-secondary-light: oklch(0.64 0.03 240);
  --color-secondary-dark: oklch(0.40 0.03 240);

  /* Couleur d'accent - Terracotta Chaud */
  --color-accent: oklch(0.62 0.10 55);
  --color-accent-light: oklch(0.72 0.09 55);
  --color-accent-dark: oklch(0.52 0.10 55);

  /* Backgrounds - teinte dorée */
  --color-background: oklch(0.99 0.02 95);
  --color-background-alt: oklch(0.97 0.03 90);
  --color-surface: oklch(0.94 0.04 85);
  --color-border: oklch(0.89 0.04 80);

  /* Textes - tons bruns chauds */
  --color-foreground: oklch(0.18 0.02 70);
  --color-foreground-heading: oklch(0.25 0.02 70);
  --color-foreground-subheading: oklch(0.32 0.02 70);
  --color-foreground-muted: oklch(0.44 0.02 65);
  --color-foreground-subtle: oklch(0.62 0.02 65);

  /* Sémantique */
  --color-success: oklch(0.62 0.10 145);
  --color-error: oklch(0.55 0.14 20);
  --color-warning: oklch(0.72 0.11 85);
  --color-info: oklch(0.52 0.03 240);
}
```

## Harmonie Colorimétrique

Cette palette suit le principe **complémentaire divisé** (split-complementary) :

```
        Jaune/Or (85°)
           ▲
          /|\
         / | \
        /  |  \
       /   |   \
Terracotta |  Ardoise
   (55°)   |   (240°)
```

- **Or Miel (85°)** : Couleur dominante, évoque la confiance, la qualité, la chaleur
- **Terracotta (55°)** : Analogique chaud, pour l'action et l'urgence
- **Ardoise (240°)** : Complémentaire adouci, apporte équilibre et professionnalisme

## Notes d'Usage

- **Or Miel** est la signature visuelle — présent dans les badges, highlights, éléments de réassurance
- **Terracotta** réservé aux CTAs et éléments d'action (bouton téléphone, "Appelez-nous")
- **Ardoise** pour les éléments d'interface secondaires, icônes, texte technique
- **Crème doré** crée un fond chaleureux et premium — unifie l'ensemble
- **Bruns chauds** assurent la lisibilité tout en restant dans la tonalité chaude
- Le grain subtil (opacity 0.04) renforce l'aspect premium
- Le jaune n'est jamais "criard" grâce à une saturation modérée (chroma 0.11)
- Contraste WCAG AA respecté entre textes et backgrounds
