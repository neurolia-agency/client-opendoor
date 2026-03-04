# Moodboard

## Référence Principale : OPENDOOR v1

Le projet v1 définit l'ADN visuel à reproduire et adapter.

- **Source** : Projet précédent (HTML/CSS/JS vanilla)
- **Ce qu'on retient** :
  - Esthétique organique et sereine
  - Tonalité chaude et premium
  - Hiérarchie typographique claire (Serif + Sans-serif)
  - Texture grain subtile omniprésente
  - Formes organiques flottantes
- **Mesures concrètes** :
  - Taille H1 : 72px desktop / 48px mobile
  - Espacement sections : 160px desktop / 96px mobile
  - Border radius : 24px (soft) / 32px (organic) / 100px (pill)
  - Grain texture : opacity 0.04
- **À adapter pour ce projet** :
  - Migration vers Next.js 15+ / Tailwind CSS 4
  - Nouvelle palette Or Miel comme couleur dominante
  - Optimisation Lighthouse > 90

---

## Référence 2 : Sites Premium de Services

### Caractéristiques communes

- **Ce qu'on retient** :
  - Header sticky avec CTA téléphone visible
  - Bouton flottant (FAB) pour l'action principale
  - Badges de réassurance au-dessus de la fold
  - Structure linéaire claire (pas de navigation complexe)
- **Mesures concrètes** :
  - Header height : 64-80px
  - FAB size : 56-64px
  - Badge spacing : 16-24px entre badges
  - Z-index header : 1000 / FAB : 900
- **À adapter pour ce projet** :
  - FAB = Bouton téléphone terracotta
  - Badges = 24h/24, Devis gratuit, Sans dégâts

---

## Référence 3 : Esthétique Artisanale Premium

### Sites d'artisans haut de gamme

- **Ce qu'on retient** :
  - Typographie serif pour l'élégance
  - Espaces généreux (respiration)
  - Palette restreinte et cohérente
  - Photographies authentiques (pas de stock générique)
- **Mesures concrètes** :
  - Ratio typo : 1.5x entre niveaux de heading
  - Max-width contenu : 1200-1400px
  - Padding latéral : 24px mobile / 48px tablet / 80px desktop
  - Line-height body : 1.6-1.8
- **À adapter pour ce projet** :
  - Cormorant Garamond pour les titres
  - Or Miel comme fil conducteur visuel
  - Fond crème doré unifiant

---

## Référence 4 : Sites d'Urgence Rassurante

### Services d'intervention rapide

- **Ce qu'on retient** :
  - Numéro de téléphone surdimensionné
  - Temps d'intervention mis en avant
  - Témoignages visibles rapidement
  - Simplicité de navigation (1 page ou très peu)
- **Mesures concrètes** :
  - Taille numéro téléphone : 24-32px
  - Position : header + hero + footer + FAB
  - Temps lecture hero : < 3 secondes
- **À adapter pour ce projet** :
  - "30 minutes" comme élément de réassurance
  - Click-to-call omniprésent
  - Structure one-page avec ancres

---

## Référence 5 : Design System Organique

### Interfaces à formes douces

- **Ce qu'on retient** :
  - Border radius généreux (pas d'angles vifs)
  - Ombres ultra-douces
  - Animations fluides et ralenties
  - Formes décoratives subtiles
- **Mesures concrètes** :
  - Border radius minimum : 16px
  - Shadow blur : 40-80px
  - Shadow opacity : 0.04-0.10
  - Animation duration : 300-500ms (micro) / 800-1200ms (macro)
  - Easing : ease-out ou cubic-bezier(0.25, 0.1, 0.25, 1)
- **À adapter pour ce projet** :
  - Formes flottantes en Or pâle
  - Mesh gradient animé en background
  - Transitions translateY uniquement

---

## Patterns Communs

| Pattern | Fréquence | Décision |
|---------|-----------|----------|
| Header sticky avec téléphone | 5/5 | ✅ Adopter |
| Bouton flottant (FAB) | 4/5 | ✅ Adopter |
| Texture grain subtile | 3/5 | ✅ Adopter (signature) |
| Typo Serif pour titres | 4/5 | ✅ Adopter |
| Animations scroll reveal | 4/5 | ✅ Adopter |
| Formes décoratives flottantes | 3/5 | ✅ Adopter (signature) |
| Mesh gradient background | 2/5 | ✅ Adopter (signature) |
| Dark mode | 2/5 | ⏸️ Optionnel (v2+) |
| Illustrations 3D | 1/5 | ❌ Rejeter |
| Vidéo hero autoplay | 1/5 | ❌ Rejeter |
| Carousel/Slider | 2/5 | ❌ Rejeter (mauvaise UX mobile) |
| Parallax agressif | 1/5 | ❌ Rejeter (performance) |

---

## Synthèse Visuelle

### L'équation OPENDOOR

```
OPENDOOR = Premium + Accessible + Rassurant

Premium     = Cormorant Garamond + Or Miel + Texture grain
Accessible  = Inter + Click-to-call + Structure claire
Rassurant   = Formes douces + Animations lentes + Espaces généreux
```

### Mots-clés visuels

- Chaleur (Or Miel, Crème doré)
- Sérénité (Espaces, Animations fluides)
- Confiance (Badges, Téléphone visible)
- Qualité (Typo Serif, Textures subtiles)
- Proximité (Zone d'intervention, Réactivité)
