# Wireframes - OPENDOOR

Source unique de contenu pour les étapes B1-B3.

## Fichiers

| Fichier | Route | Sections |
|---------|-------|----------|
| homepage.md | / | 6 sections |
| services.md | /services | 5 sections |
| approche.md | /approche | 6 sections |
| zone.md | /zone | 5 sections |
| contact.md | /contact | 4 sections |

## Principe

Les wireframes référencent les fichiers brand sans dupliquer :

```
positioning.md > tagline
services.md > service_1 > tagline
about.md > valeurs[0-3]
```

**Règle** : Ne JAMAIS copier le texte, toujours utiliser la notation `fichier.md > clé`.

## Notation des Références

| Notation | Signification |
|----------|---------------|
| `fichier.md > clé` | Valeur à récupérer dans le fichier brand/ |
| `fichier.md > array[0-2]` | Premiers éléments d'une liste |
| `→ /route` | Destination du lien/CTA |
| `→ tel:0789081857` | Lien téléphone click-to-call |

## Usage Phase B

| Étape | Lire |
|-------|------|
| B1-Layout | `03-sitemap.md` uniquement |
| B2-Homepage | `homepage.md` uniquement |
| B3-Pages | Le wireframe de chaque page |

**Important** : Toujours valider contre `01.5-art-direction/constraints.md`

## Contraintes Rappelées

- Téléphone visible sans scroll
- Border radius minimum 12px
- Animations ≥ 300ms
- Espacement sections ≥ 120px desktop / 80px mobile
- Palette : Crème doré + Or miel + Terracotta

---

**Version** : 1.0
**Phase** : A5 (Architecture)
**Date** : 31 janvier 2026
