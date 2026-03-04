# Public - Assets (Source Unique)

Ce dossier est la **source unique** pour tous les assets du site OPENDOOR.

## Structure

```
public/
├── README.md              # Ce fichier
├── logo.svg               # Logo principal (optimisé)
├── favicon.ico            # Favicon (à générer)
├── favicon.svg            # Favicon SVG (à générer)
├── apple-touch-icon.png   # Icon iOS 180x180 (à générer)
├── og-image.jpg           # Image OpenGraph 1200x630 (à générer)
│
├── images/                # Images optimisées pour production
│   ├── hero.jpg
│   └── nous-sommes-la.png
│
├── textures/              # Textures de fond optimisées
│   ├── grain.jpg
│   └── papier.jpg
│
└── _raw/                  # Assets bruts client (archive)
    ├── images/            # Originaux non optimisés
    ├── logo/              # Logo formats originaux
    └── textures/          # Textures originales
```

## Organisation

| Dossier | Contenu | Usage |
|---------|---------|-------|
| `./` (racine) | Logo, favicons, OG image | Meta, header |
| `images/` | Images optimisées | Composants, sections |
| `textures/` | Textures optimisées | Backgrounds CSS |
| `_raw/` | Originaux client | Archive, ne pas utiliser directement |

## Règles

1. **Ne jamais référencer `_raw/`** dans le code - c'est une archive
2. **Optimiser avant d'ajouter** dans `images/` ou `textures/`
3. **Nommer en kebab-case** sans accents ni espaces
4. **Taille max** : 500 KB par fichier (sauf cas exceptionnel)

## Utilisation dans le code

```tsx
// Logo
<Image src="/logo.svg" alt="OPENDOOR" />

// Images
<Image src="/images/hero.jpg" alt="..." />

// Textures (CSS)
background-image: url('/textures/grain.jpg');
```

## Workflow ajout d'asset

1. Client fournit fichier → placer dans `_raw/[type]/`
2. Optimiser (compression, resize si nécessaire)
3. Placer version optimisée dans `images/` ou `textures/`
4. Utiliser la version optimisée dans le code

## Checklist production

- [ ] Favicon généré (ico + svg + apple-touch-icon)
- [ ] Image OG générée (1200x630)
- [ ] Toutes images < 500 KB
- [ ] `nous-sommes-la.png` optimisé (actuellement 8.6 MB ⚠️)
- [ ] Noms en kebab-case
