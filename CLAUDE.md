# OPENDOOR V2 - Site Web

Site vitrine pour OPENDOOR, serrurier à Narbonne disponible 24h/24.

## Statut Pipeline

Le workflow est divisé en **2 phases** :

### Phase A : Architecture (définit CE QUI sera construit)

| Étape | Status | Output |
|-------|--------|--------|
| A01-Init | ✅ | `pipeline/output/01-brief.md` |
| A02-Brand | ✅ | `pipeline/output/02-brand/` (7 fichiers) |
| A03-Art Direction | ✅ | `pipeline/output/03-art-direction/` (5 fichiers) |
| A04-Structure | ✅ | `pipeline/output/04-sitemap.md` |
| A05-Wireframes | ✅ | `pipeline/output/05-wireframes/` (6 fichiers) |
| A06-Design Tokens | ✅ | `app/globals.css` (source unique) |

### Phase B : Design / Vibe Coding (construit le site)

| Étape | Status | Output |
|-------|--------|--------|
| B01-Layout | ✅ | `components/layout/` |
| B02-Homepage | ✅ | `components/sections/` + `app/page.tsx` |
| B03-Pages | ✅ | `app/[pages]/` + `components/pages/` |
| B04-Polish | ✅ | Animations + SEO + Images |
| B05-Validate | ⬜ | `pipeline/output/validation.md` |
| B06-Deploy | ⬜ | Production |

### B04-Polish - Détails

**SEO :**
- `app/sitemap.ts` - Génère `/sitemap.xml`
- `app/robots.ts` - Génère `/robots.txt`
- JSON-LD LocalBusiness dans `app/layout.tsx`
- Metadata sur toutes les pages

**Accessibilité :**
- Skip to content link dans `app/layout.tsx`

**Images :**
- Hero : `/images/hero-bg.webp` (244 Ko, 2752×1536)

**Animations :**
- Smooth scroll Lenis configuré
- `whileInView` sur toutes les sections
- Transitions ≥ 300ms conformes aux contraintes

### Correspondance fichiers stages/

| Phase | Fichier stage |
|-------|---------------|
| A01 | `pipeline/stages/A01-init.md` |
| A02 | `pipeline/stages/A02-brand.md` |
| A03 | `pipeline/stages/A03-art-direction.md` |
| A04 | `pipeline/stages/A04-structure.md` |
| A05 | `pipeline/stages/A05-wireframes.md` |
| A06 | `pipeline/stages/A06-design-tokens.md` |
| B01 | `pipeline/stages/B01-layout.md` |
| B02 | `pipeline/stages/B02-homepage.md` |
| B03 | `pipeline/stages/B03-pages.md` |
| B04 | `pipeline/stages/B04-polish.md` |
| B05 | `pipeline/stages/B05-validate.md` |
| B06 | `pipeline/stages/B06-deploy.md` |

## Sources de Vérité

| Domaine | Source unique |
|---------|---------------|
| Pipeline status | Ce fichier (CLAUDE.md) |
| Données client | `pipeline/input/` (brief, assets, références) |
| Contraintes design | `pipeline/output/03-art-direction/constraints.md` |
| Valeurs CSS | `app/globals.css` |
| Vocabulaire visuel | `pipeline/output/03-art-direction/visual-vocabulary.md` |
| Contenu brand | `pipeline/output/02-brand/` |
| Wireframes | `pipeline/output/05-wireframes/` |
| Stack technique | `pipeline/workflow/DESIGN_STACK.md` |
| Dépendances étapes | `pipeline/workflow/DEPENDENCIES.md` |

## Contexte Projet

- **Client** : OPENDOOR
- **Type** : Site vitrine (conversion téléphone)
- **Tagline** : "On s'occupe de tout."
- **Téléphone** : 07 89 08 18 57
- **Zone** : Narbonne + 50 km
- **Stack** : Next.js 15+ + Tailwind CSS 4 + Motion + Lenis

## ADN Visuel (pré-rempli depuis v1)

| Aspect | Valeur |
|--------|--------|
| Couleur signature | Orange Ambré `#D97706` + Jaune Doré `#EAB308` + Brun Chaud |
| Forme signature | Organiques, radius doux (24-32px) |
| Mouvement | Fluide, ralenti (0.5s-1.2s) |
| Structure | Hero → Réassurance → Services → Approche → Zone → Contact |
| Espace sections | Généreux (4rem-8rem) |
| Radius | Soft 24px / Organic 32px / Pill 100px |
| Typographies | Cormorant Garamond (titres) + Inter (body) |
| Texture | Grain subtil sur sections (pas sur images) |
| Hero | Image background plein écran + overlay 55-60% |

### Test Rapide "Est-ce OPENDOOR ?"

- [ ] Palette crème doré/or miel/terracotta visible ?
- [ ] Typographie Serif élégante pour titres ?
- [ ] Téléphone visible sans scroll ?
- [ ] Ton apaisant et rassurant ?
- [ ] Image humaine présente (Hero) ?

→ 5/5 = Conforme | < 4/5 = Revoir

## Flux de Contexte

### Phase A : Architecture

```
A01-Init      : pipeline/input/brief-client.md → pipeline/output/01-brief.md
A02-Brand     : 01-brief.md → pipeline/output/02-brand/ (7 fichiers stratégie)
A03-Art Dir   : 02-brand/ → pipeline/output/03-art-direction/ (5 fichiers vision)
A04-Structure : 01-brief.md + 02-brand/services.md → pipeline/output/04-sitemap.md
A05-Wireframes: 02-brand/ + 04-sitemap.md → pipeline/output/05-wireframes/ (contenu pages)
A06-Design    : art-direction/ + wireframes/ → app/globals.css (tokens CSS)
```

### Phase B : Design / Vibe Coding

**Utiliser `/frontend-design` pour tout développement UI.**

```
Pour chaque composant/section :
1. Lire wireframe spécifique
2. Résoudre références `fichier.md > clé` vers brand/ à la demande
3. Invoquer /frontend-design avec le brief
4. Réviser visuellement dans le navigateur
5. Itérer jusqu'à satisfaction (re-invoquer /frontend-design si besoin)
6. Valider contre constraints.md

Exception : Page Contact peut lire about.md pour coordonnées.
Voir pipeline/workflow/DEPENDENCIES.md pour détails.
```

**Règle** : Ne jamais écrire de CSS/composants UI manuellement en Phase B. Toujours passer par `/frontend-design`.

## Règles de Passation

1. Lire `pipeline/stages/[AXX|BXX]-nom.md` pour les instructions
2. Lire les outputs des étapes précédentes
3. Produire l'output spécifié
4. Ne JAMAIS modifier les outputs précédents
5. Mettre à jour ce fichier après complétion

## Commandes

```bash
# Serveur
npm run dev

# Exécuter une étape Phase A
/apex -a -s exécuter étape [AXX]-[nom] depuis pipeline/stages/[AXX]-[nom].md

# Phase B - Vibe coding
/frontend-design

# Prochaine étape (Phase B - Vibe Coding)
/frontend-design
```

## Structure

```
opendoor-v2/
├── CLAUDE.md                    # Ce fichier (source unique statut)
├── pipeline/
│   ├── input/                   # Données client (brief, assets)
│   ├── stages/                  # Instructions par étape (A01-A06, B01-B06)
│   ├── workflow/                # DEPENDENCIES.md, DESIGN_STACK.md
│   ├── output/                  # Artifacts générés (01-brief, 02-brand, etc.)
│   └── archive/                 # Fichiers obsolètes
├── app/
│   ├── globals.css              # SOURCE UNIQUE tokens CSS
│   ├── layout.tsx               # Layout + JSON-LD + Skip to content
│   ├── sitemap.ts               # Génère /sitemap.xml
│   ├── robots.ts                # Génère /robots.txt
│   ├── page.tsx                 # Homepage
│   ├── services/page.tsx
│   ├── approche/page.tsx
│   ├── zone/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/                  # Header, Footer, MobileMenu
│   ├── sections/                # Hero, Reassurance, ServicesPreview, etc.
│   ├── pages/                   # Composants spécifiques par page
│   └── smooth-scroll-provider.tsx
└── public/
    └── images/
        ├── hero-bg.webp         # Background Hero (244 Ko)
        ├── hero.png             # Original non compressé
        └── ...
```

## Messages Clés (pré-remplis depuis v1)

| Section | Message |
|---------|---------|
| Hero | "On s'occupe de tout." |
| Services | "Nous sommes là pour vous" |
| Approche | "Notre façon de travailler" |
| Contact | "Contactez-nous" |

## Contraintes

- **Performance** : Lighthouse > 90
- **Responsive** : Mobile-first (80%+ trafic mobile)
- **Accessibilité** : WCAG AA
- **Ton** : Vouvoiement, professionnel mais chaleureux
- **Objectif principal** : Appels téléphoniques (urgences)

## Images - Spécifications

### Existantes
| Image | Fichier | Dimensions | Poids |
|-------|---------|------------|-------|
| Hero background | `/images/hero-bg.webp` | 2752×1536 | 244 Ko |

### À créer (optionnel)
| Section | Image suggérée | Format | Dimensions |
|---------|----------------|--------|------------|
| ServicesPreview | 3 images services (urgence, installation, entretien) | WebP | 600×400 |
| ApprochePreview | Portrait serrurier | WebP | 800×1000 |
| ZonePreview | Vue aérienne Narbonne ou carte stylisée | WebP | 800×800 |
| CtaFinal | Serrurier en action (background) | WebP | 1920×600 |

**Compression** : Utiliser `cwebp -q 82 -m 6` pour convertir PNG/JPG en WebP.

---

*Dernière mise à jour : 5 février 2026 (B04-Polish + Hero image)*
