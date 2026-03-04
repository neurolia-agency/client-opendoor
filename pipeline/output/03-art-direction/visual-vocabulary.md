# Vocabulaire Visuel

Dictionnaire de traduction entre termes de design et valeurs CSS précises.

---

## Espacements

| Terme | Valeur | Usage |
|-------|--------|-------|
| "whitespace généreux" | 160px (10rem) | Entre sections (desktop) |
| "whitespace mobile" | 96px (6rem) | Entre sections (mobile) |
| "padding section" | 80px (5rem) top/bottom | Intérieur des sections |
| "padding section mobile" | 48px (3rem) top/bottom | Intérieur sections mobile |
| "espace respiration" | 40-60px (2.5-3.75rem) | Entre groupes d'éléments |
| "gap composant" | 24px (1.5rem) | Entre éléments d'un groupe |
| "gap serré" | 16px (1rem) | Entre éléments liés |
| "micro-gap" | 8px (0.5rem) | Entre icône et texte |
| "marge latérale" | clamp(24px, 5vw, 80px) | Padding conteneur |
| "max-width contenu" | 1280px | Largeur max du contenu |
| "max-width texte" | 680px | Largeur max paragraphes |

---

## Typographie

| Terme | Valeur | Usage |
|-------|--------|-------|
| "typo massive" | clamp(3rem, 6vw + 1rem, 4.5rem) | H1 Hero uniquement |
| "titre section" | clamp(2.25rem, 4vw + 0.5rem, 3rem) | H2 sections |
| "sous-titre" | clamp(1.75rem, 3vw + 0.5rem, 2.25rem) | H3 |
| "hiérarchie marquée" | ratio 1.5x entre niveaux | Tous les headings |
| "corps confortable" | clamp(1rem, 0.5vw + 0.875rem, 1.125rem) | Body text |
| "corps large" | clamp(1.125rem, 0.5vw + 1rem, 1.25rem) | Intro, lead |
| "texte discret" | 0.875rem (14px) | Captions, labels |
| "line-height aéré" | 1.7 | Body text |
| "line-height titre" | 1.1-1.2 | Headings |
| "letter-spacing titre" | -0.02em | Gros titres |

---

## Transitions & Animations

| Terme | Valeur | Usage |
|-------|--------|-------|
| "hover subtil" | translateY(-4px), 300ms ease-out | Cards, liens |
| "hover bouton" | scale(1.02), 200ms ease-out | Boutons |
| "apparition douce" | opacity 0→1 + translateY(20px→0), 500ms ease-out | Sections au scroll |
| "apparition rapide" | opacity 0→1, 300ms ease-out | Éléments UI |
| "transition standard" | 300ms ease-out | Changements d'état |
| "transition lente" | 500ms ease-out | Changements majeurs |
| "animation macro" | 800-1200ms cubic-bezier(0.25, 0.1, 0.25, 1) | Reveal sections |
| "flottement décoratif" | translateY(±10px), 4-6s ease-in-out infinite | Formes background |
| "easing standard" | ease-out | Tous les éléments |
| "easing organique" | cubic-bezier(0.25, 0.1, 0.25, 1) | Animations longues |

---

## Couleurs (référence)

| Terme | Valeur | Usage |
|-------|--------|-------|
| "accent signature" | oklch(0.72 0.11 85) / #C4A35A | Or Miel - highlights |
| "accent action" | oklch(0.62 0.10 55) / #B8845A | Terracotta - CTAs |
| "accent neutre" | oklch(0.52 0.03 240) / #6B7A8A | Ardoise - secondaire |
| "fond principal" | oklch(0.99 0.02 95) / #FFFBF0 | Crème doré |
| "fond alternatif" | oklch(0.97 0.03 90) / #FAF6E6 | Ivoire chaud |
| "surface card" | oklch(0.94 0.04 85) / #F2EBDA | Sable doré |
| "bordure subtile" | oklch(0.89 0.04 80) / #E6DDCA | Séparateurs |
| "texte principal" | oklch(0.18 0.02 70) / #2A2418 | Brun profond |
| "texte secondaire" | oklch(0.44 0.02 65) / #6A6254 | Brun secondaire |
| "présence couleur" | 15-20% de la surface | Ratio Or Miel visible |

---

## Formes & Radius

| Terme | Valeur | Usage |
|-------|--------|-------|
| "radius soft" | 24px (1.5rem) | Cards, boutons larges |
| "radius organic" | 32px (2rem) | Sections, images |
| "radius pill" | 100px ou 9999px | Badges, tags, boutons pill |
| "radius input" | 12px (0.75rem) | Champs de formulaire |
| "radius subtle" | 8px (0.5rem) | Petits éléments |
| "angles arrondis" | Jamais 0px sauf lignes | Tous les éléments |
| "forme blob" | border-radius: 60% 40% 30% 70% / 60% 30% 70% 40% | Décorations |

---

## Ombres

| Terme | Valeur | Usage |
|-------|--------|-------|
| "ombre whisper" | 0 4px 40px rgba(42, 36, 24, 0.04) | Hover léger |
| "ombre float" | 0 20px 80px rgba(42, 36, 24, 0.08) | Cards élevées |
| "ombre subtle" | 0 2px 20px rgba(42, 36, 24, 0.04) | État par défaut |
| "ombre FAB" | 0 8px 32px rgba(184, 132, 90, 0.25) | Bouton flottant |
| "teinte ombre" | rgba(42, 36, 24, x) | Toujours brun chaud |

---

## Layout

| Terme | Valeur | Usage |
|-------|--------|-------|
| "grille standard" | 12 colonnes, gap 24px | Layout principal |
| "grille mobile" | 4 colonnes, gap 16px | Mobile |
| "conteneur" | max-width: 1280px, margin: 0 auto | Wrapper principal |
| "full-bleed" | width: 100vw, margin-left: calc(-50vw + 50%) | Sections pleine largeur |
| "sticky header" | position: sticky, top: 0, z-index: 1000 | Navigation |
| "FAB position" | position: fixed, bottom: 24px, right: 24px | Bouton flottant |

---

## Breakpoints

| Terme | Valeur | Usage |
|-------|--------|-------|
| "mobile" | < 640px | Smartphones |
| "tablet" | 640px - 1024px | Tablettes |
| "desktop" | > 1024px | Ordinateurs |
| "large" | > 1280px | Grands écrans |

---

## Textures

| Terme | Valeur | Usage |
|-------|--------|-------|
| "grain subtil" | background-image: url(grain.svg), opacity: 0.04 | Overlay global |
| "grain prononcé" | opacity: 0.06 | Sections mises en avant |
| "mesh gradient" | radial-gradient multiples | Background hero |
