# Étape A3 : Direction Artistique

> **Phase A : Architecture** - Traduction de la stratégie en vision visuelle.

## Objectif

Transformer la stratégie de marque (A2-Brand) en **vision visuelle concrète** avant la création du design system. Cette étape comble le fossé entre "ce qu'on dit" et "comment ça doit se voir".

## Input

- `output/01-brand/` (tous les fichiers)
- `input/references/sites.md`

## Output

```
output/01.5-art-direction/
├── moodboard.md          # Références visuelles annotées
├── visual-vocabulary.md  # Lexique visuel propre au projet
├── constraints.md        # Parti-pris radicaux (faire / ne pas faire)
├── emotion-map.md        # Émotion cible par section/page
└── README.md             # Index et guide d'utilisation
```

## Instructions

### 1. Moodboard (moodboard.md)

Analyser **5-7 références visuelles** en détail :

```markdown
# Moodboard

## Référence 1 : [Nom du site]

- **URL** : https://...
- **Ce qu'on retient** :
  - [Élément visuel 1]
  - [Élément visuel 2]
  - [Élément visuel 3]
- **Mesures concrètes** :
  - Taille H1 : ~[X]px
  - Espacement sections : ~[X]px
  - Ratio images : [X:Y]
- **À adapter pour ce projet** :
  - [Comment transposer]

## Référence 2 : [Nom]
[Même structure...]

## Patterns Communs

| Pattern | Fréquence | Décision |
|---------|-----------|----------|
| [Ex: Dark mode] | 4/5 | ✅ Adopter |
| [Ex: Animations scroll] | 3/5 | ✅ Adopter |
| [Ex: Illustrations 3D] | 1/5 | ❌ Rejeter |
```

### 2. Vocabulaire Visuel (visual-vocabulary.md)

Créer un dictionnaire de traduction entre termes vagues et valeurs précises :

```markdown
# Vocabulaire Visuel

## Espacements

| Terme | Valeur | Usage |
|-------|--------|-------|
| "whitespace généreux" | 160px | Entre sections (desktop) |
| "padding confortable" | 96px | Entre sections (mobile) |
| "espace respiration" | 40-60px | Marges internes |

## Typographie

| Terme | Valeur | Usage |
|-------|--------|-------|
| "typo massive" | clamp(72px, 12vw, 140px) | H1 Hero |
| "hiérarchie marquée" | ratio 1.5x entre niveaux | Titres |

## Transitions

| Terme | Valeur | Usage |
|-------|--------|-------|
| "hover subtil" | translateY(-4px), 300ms ease-out | Liens, cards |
| "apparition douce" | opacity + translateY(20px), 400ms | Sections |

## Couleurs

| Terme | Valeur | Usage |
|-------|--------|-------|
| "accent discret" | 5-10% de surface | Couleur signature |
| "fond neutre" | oklch(0.98 0 0) | Background principal |

## Formes

| Terme | Valeur | Usage |
|-------|--------|-------|
| "angles vifs" | border-radius: 0 | Tous éléments sauf inputs |
| "inputs doux" | border-radius: 2-4px | Formulaires |
```

### 3. Contraintes (constraints.md)

Définir des règles **non-négociables** :

```markdown
# Contraintes Design

## ON FAIT (obligatoire)

1. **[Règle 1]** : [Valeur précise]
   - Justification : [Lien avec valeur marque ou référence]

2. **[Règle 2]** : [Valeur précise]
   - Justification : [...]

[8-12 règles minimum]

## ON NE FAIT PAS (interdit)

1. **[Anti-pattern 1]**
   - Pourquoi : [Justification]

2. **[Anti-pattern 2]**
   - Pourquoi : [...]

[8-12 règles minimum]

## Test Rapide "Est-ce [NOM_PROJET] ?"

- [ ] [Critère 1] ?
- [ ] [Critère 2] ?
- [ ] [Critère 3] ?
- [ ] [Critère 4] ?
- [ ] [Critère 5] ?

→ 5/5 = Conforme | < 4/5 = Revoir
```

### 4. Carte des Émotions (emotion-map.md)

Pour chaque page/section, définir l'émotion cible :

```markdown
# Carte des Émotions

## Homepage

### Hero
- **Émotion primaire** : [Ex: Confiance immédiate]
- **Tension visuelle** : [Ex: Calme vs Énergie du CTA]
- **Élément signature** : [Ex: Typo massive, espace vide]

### Services
- **Émotion primaire** : [Ex: Clarté, compréhension]
- **Tension visuelle** : [...]
- **Élément signature** : [...]

[Continuer pour chaque section...]

## Pages Secondaires

### Services
- **Émotion globale** : [...]

### Contact
- **Émotion globale** : [...]
```

### 5. README (README.md)

Index et guide d'utilisation :

```markdown
# Direction Artistique - [NOM_PROJET]

## ADN Visuel

| Aspect | Valeur |
|--------|--------|
| Couleur signature | [Couleur] ([Code]) |
| Forme signature | [Description] |
| Mouvement | [Type, durée, easing] |
| Structure | [Symétrique/Asymétrique] |
| Espace sections | [Desktop], [Mobile] |
| Radius | [Valeur] |

## Test Rapide

[Copier depuis constraints.md]

## Fichiers

| Fichier | Usage |
|---------|-------|
| moodboard.md | Références analysées |
| visual-vocabulary.md | Traductions visuelles |
| constraints.md | Règles strictes |
| emotion-map.md | Émotions par section |

## Usage

- **A6 (Design Tokens)** : Implémenter les valeurs de visual-vocabulary.md
- **B1-B3 (Frontend)** : Valider chaque composant contre constraints.md
```

## Règles de Rédaction

### Être Spécifique

❌ "Utiliser des titres grands"
✅ "H1 = minimum 15% de la hauteur viewport sur desktop"

❌ "Espacement généreux entre sections"
✅ "Minimum 160px entre sections, jamais en dessous de 120px"

❌ "Animations subtiles"
✅ "Transitions = translate uniquement, 300-400ms, ease-out"

### Justifier Chaque Choix

Chaque contrainte doit être liée à :
- Une valeur de marque (depuis 01-brand/)
- Ou au positionnement
- Ou à une référence visuelle analysée

## Validation

- [ ] 5+ références analysées avec mesures concrètes
- [ ] Vocabulaire visuel couvre : spacing, typo, transitions, couleurs, formes
- [ ] 8+ règles "ON FAIT"
- [ ] 8+ règles "ON NE FAIT PAS"
- [ ] Chaque page a une émotion primaire définie
- [ ] Chaque section homepage a un élément signature
- [ ] Aucun terme vague sans définition précise
- [ ] Tous les choix sont justifiés

## Prochaine Étape

Une fois `output/01.5-art-direction/` complet → Passer à `stages/03-structure.md`

---

**Version** : 1.0
**Phase** : A3 (Architecture)
**Dépendances** : A2 (01-Brand)
**Produit pour** : A4 (03-Structure), A5 (03.5-Wireframes), A6 (02-Design)
