# Website Workflow Template

Template de workflow pour la création de sites web avec Claude Code.

## Concept

Ce workflow est divisé en **2 phases** :

### Phase A : Architecture (Markdown uniquement)
Définit **CE QUI** sera construit avant d'écrire une ligne de code.

```
A1-Init → A2-Brand → A3-Art Direction → A4-Structure → A5-Wireframes → A6-Design Tokens
```

### Phase B : Design / Vibe Coding
Construit le site avec **itérations créatives** via `/frontend-design`.

```
B1-Layout → B2-Homepage → B3-Pages → B4-Polish → B5-Validate → B6-Deploy
```

## Démarrage Rapide

### 1. Copier le template

```bash
cp -r website-workflow-template/ mon-nouveau-projet/
cd mon-nouveau-projet/
```

### 2. Personnaliser CLAUDE.md

Remplacer les placeholders `[NOM_PROJET]`, `[CLIENT]`, etc.

### 3. Remplir le brief client

```bash
# Éditer avec le client
input/brief-client.md
```

### 4. Initialiser Next.js

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false
npm install motion lenis react-hook-form @hookform/resolvers zod sonner lucide-react
```

### 5. Exécuter le workflow

```bash
# Phase A - Une étape à la fois
/apex -a -s exécuter étape 00-init depuis stages/00-init.md

# Phase B - Utiliser frontend-design pour chaque composant
/frontend-design
```

## Structure

```
template/
├── CLAUDE.md                    # Source unique statut pipeline
├── README.md                    # Ce fichier
│
├── input/                       # Données client
│   ├── README.md
│   ├── brief-client.md          # Questionnaire à remplir
│   ├── assets/
│   ├── references/
│   │   └── sites.md
│   ├── content/
│   └── typographies/
│
├── stages/                      # Instructions par étape
│   ├── 00-init.md               # A1
│   ├── 01-brand.md              # A2
│   ├── 01.5-art-direction.md    # A3
│   ├── 03-structure.md          # A4
│   ├── 03.5-wireframes.md       # A5
│   ├── 02-design.md             # A6
│   ├── 04-layout.md             # B1
│   ├── 05-homepage.md           # B2
│   ├── 06-pages.md              # B3
│   ├── 07-polish.md             # B4
│   ├── 08-validate.md           # B5
│   └── 09-deploy.md             # B6
│
├── pipeline_workflow/
│   ├── README.md
│   ├── DESIGN_STACK.md          # Stack technique
│   └── DEPENDENCIES.md          # Matrice dépendances
│
├── output/                      # Outputs générés (vide au départ)
│   ├── 01-brand/
│   ├── 01.5-art-direction/
│   └── 03.5-wireframes/
│
└── archive/                     # Fichiers obsolètes
    └── MANIFEST.md
```

## Flux de Travail

### Phase A : Architecture

| Étape | Stage | Output | Durée typique |
|-------|-------|--------|---------------|
| A1 | 00-init.md | 00-brief.md | 30 min |
| A2 | 01-brand.md | 01-brand/ (7 fichiers) | 2-3h |
| A3 | 01.5-art-direction.md | 01.5-art-direction/ (5 fichiers) | 2-3h |
| A4 | 03-structure.md | 03-sitemap.md | 1h |
| A5 | 03.5-wireframes.md | 03.5-wireframes/ (5 fichiers) | 2h |
| A6 | 02-design.md | app/globals.css | 1h |

### Phase B : Design / Vibe Coding

| Étape | Stage | Output |
|-------|-------|--------|
| B1 | 04-layout.md | components/layout/ |
| B2 | 05-homepage.md | components/sections/, app/page.tsx |
| B3 | 06-pages.md | app/[pages]/, components/pages/ |
| B4 | 07-polish.md | Animations, SEO |
| B5 | 08-validate.md | output/08-validation.md |
| B6 | 09-deploy.md | Production |

## Règles Clés

### Phase A
- **Output = Markdown** uniquement
- Ne pas écrire de code
- Valider chaque étape avant de passer à la suivante

### Phase B
- **Toujours utiliser `/frontend-design`** pour les composants UI
- Itérer visuellement dans le navigateur
- Valider contre `constraints.md` à chaque composant

## Stack Technique

- **Framework** : Next.js 15+
- **Styling** : Tailwind CSS 4
- **Animations** : Motion + Lenis
- **Forms** : react-hook-form + zod
- **UI** : shadcn/ui (Input, Textarea uniquement)

## Commandes

```bash
# Phase A
/apex -a -s exécuter étape [XX]-[nom] depuis stages/[XX]-[nom].md

# Phase B
/frontend-design

# Serveur dev
npm run dev

# Build production
npm run build
```

## Personnalisation

### Ajouter une page

1. Ajouter dans `output/03-sitemap.md`
2. Créer wireframe dans `output/03.5-wireframes/[page].md`
3. Créer la page en Phase B avec `/frontend-design`

### Modifier le design system

1. Modifier `output/01.5-art-direction/constraints.md`
2. Mettre à jour `app/globals.css`
3. Ré-générer les composants avec `/frontend-design`

---

**Version** : 1.0
**Basé sur** : Workflow Neurolia v2
