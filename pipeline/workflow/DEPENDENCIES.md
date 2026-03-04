# Dépendances Inter-Étapes

Matrice des inputs/outputs par étape du pipeline.

## Vue d'Ensemble

Le workflow est divisé en **2 phases** :

```
═══════════════════════════════════════════════════════════════════════════════
                        PHASE A : ARCHITECTURE
              (Définit CE QUI sera construit - Markdown uniquement)
═══════════════════════════════════════════════════════════════════════════════

input/brief-client.md
        │
        ▼
┌──────────────────┐
│   A1: Init       │ → output/00-brief.md
└──────────────────┘
        │
        ▼
┌──────────────────┐
│   A2: Brand      │ → output/01-brand/ (7 fichiers)
└──────────────────┘
        │
        ├──────────────────────────────────────┐
        ▼                                      ▼
┌──────────────────┐                  ┌──────────────────┐
│ A3: Art Dir      │                  │   A4: Structure  │
└──────────────────┘                  └──────────────────┘
        │                                      │
        └──────────────┬───────────────────────┘
                       ▼
              ┌──────────────────┐
              │ A5: Wireframes   │ → output/03.5-wireframes/
              └──────────────────┘
                       │
                       ▼
              ┌──────────────────┐
              │ A6: Design Tokens│ → app/globals.css
              └──────────────────┘

═══════════════════════════════════════════════════════════════════════════════
                     PHASE B : DESIGN / VIBE CODING
                   (Construit le site avec frontend-design)
═══════════════════════════════════════════════════════════════════════════════

              ┌──────────────────┐
              │   B1: Layout     │ → components/layout/
              └──────────────────┘
                       │
        ┌──────────────┴──────────────┐
        ▼                              ▼
┌──────────────────┐          ┌──────────────────┐
│   B2: Homepage   │          │   B3: Pages      │
└──────────────────┘          └──────────────────┘
        │                              │
        └──────────────┬───────────────┘
                       ▼
              ┌──────────────────┐
              │   B4: Polish     │
              └──────────────────┘
                       │
                       ▼
              ┌──────────────────┐
              │   B5: Validate   │
              └──────────────────┘
                       │
                       ▼
              ┌──────────────────┐
              │   B6: Deploy     │
              └──────────────────┘
```

## Matrice Détaillée

### Phase A : Architecture

| Étape | Stage | Inputs Requis | Outputs | Dépend de |
|-------|-------|---------------|---------|-----------|
| **A1** | `00-init.md` | `input/brief-client.md` | `output/00-brief.md` | - |
| **A2** | `01-brand.md` | `output/00-brief.md` | `output/01-brand/` (7 fichiers) | A1 |
| **A3** | `01.5-art-direction.md` | `output/01-brand/` (tous) | `output/01.5-art-direction/` (5 fichiers) | A2 |
| **A4** | `03-structure.md` | `output/00-brief.md`, `01-brand/services.md` | `output/03-sitemap.md` | A2 |
| **A5** | `03.5-wireframes.md` | `01-brand/`, `01.5-art-direction/`, `03-sitemap.md` | `output/03.5-wireframes/` | A3, A4 |
| **A6** | `02-design.md` | `01.5-art-direction/`, `03.5-wireframes/` | `app/globals.css` | A3, A5 |

### Phase B : Design / Vibe Coding

| Étape | Stage | Inputs Requis | Outputs | Dépend de |
|-------|-------|---------------|---------|-----------|
| **B1** | `04-layout.md` | `app/globals.css`, `03-sitemap.md` | `components/layout/` | A6 |
| **B2** | `05-homepage.md` | `03.5-wireframes/homepage.md` | `components/sections/`, `app/page.tsx` | B1 |
| **B3** | `06-pages.md` | `03.5-wireframes/*.md` | `app/[pages]/`, `components/pages/` | B1 |
| **B4** | `07-polish.md` | Composants B1-B3 | Animations, SEO | B2, B3 |
| **B5** | `08-validate.md` | Tout `output/`, site assemblé | `output/08-validation.md` | B4 |
| **B6** | `09-deploy.md` | `output/08-validation.md` (PASS) | Production | B5 |

### Note sur le Parallélisme

- **A3 (Art Dir)** et **A4 (Structure)** peuvent démarrer en parallèle après A2
- **B2 (Homepage)** et **B3 (Pages)** peuvent être développés en parallèle après B1
- La progression recommandée reste **linéaire** pour simplifier le suivi

## Règles de Lecture de Contexte

### Pattern "Lazy Context Loading"

Les étapes B2-B3 utilisent un pattern de chargement paresseux du contexte :

1. **Lire d'abord** le wireframe de la page concernée
2. **Résoudre à la demande** les références `fichier.md > clé` vers `01-brand/`
3. **Ne pas pré-charger** tout le dossier brand/

```
Exemple pour Homepage :
1. Lire output/03.5-wireframes/homepage.md
2. Trouver référence "positioning.md > tagline"
3. Lire output/01-brand/positioning.md pour résoudre
4. Continuer avec la section suivante
```

### Exceptions à "Pas de Lecture Croisée"

Certaines pages nécessitent des données d'autres fichiers brand/ :

| Page | Fichier Wireframe | Lectures Croisées Autorisées |
|------|-------------------|------------------------------|
| Contact | `contact.md` | `about.md` (coordonnées : email, téléphone, adresse) |
| About | `about.md` | Aucune |
| Services | `services.md` | Aucune |
| Portfolio | `portfolio.md` | Aucune |
| Homepage | `homepage.md` | Toutes références dans le wireframe |

### Fichiers Toujours Accessibles

Ces fichiers peuvent être lus à **toute étape** sans restriction :

- `app/globals.css` - Design tokens (source unique CSS)
- `output/01.5-art-direction/constraints.md` - Règles de design
- `output/01.5-art-direction/visual-vocabulary.md` - Traductions visuelles
- `CLAUDE.md` - Statut et contexte global

## Composants Partagés

| Composant | Créé à | Utilisé par |
|-----------|--------|-------------|
| `AnimatedSection` | B2-Homepage | B2, B3 (toutes pages) |
| `CtaFinal` | B2-Homepage | B3 (Services, Portfolio, About) |
| `SmoothScrollProvider` | B1-Layout | B1+ (layout global) |
| Skeletons | B2-Homepage | B2, B3 (Suspense) |

## Validation Pré-Étape

Avant de commencer une étape, vérifier :

```bash
# Exemple pour étape B2
✓ output/03.5-wireframes/homepage.md existe
✓ app/globals.css contient les tokens
✓ components/layout/ créé (étape B1)
✓ components/ui/animated-section.tsx existe ou sera créé
```

---

*Template Workflow v1.0*
