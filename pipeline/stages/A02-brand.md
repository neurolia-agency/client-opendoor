# Étape A2 : Brand (Identité de marque)

> **Phase A : Architecture** - Définition de l'identité complète.

## Objectif

Définir l'identité complète de la marque pour guider tout le contenu et le design.

## Input

- `output/00-brief.md`

## Instructions

Créer **7 fichiers** dans `output/01-brand/` :

### 1. about.md (Identité)

```markdown
# À Propos

## Nom
[Nom de l'entreprise]

## Slogan
[Phrase d'accroche courte - max 10 mots]

## Mission
[Pourquoi l'entreprise existe - 1 phrase]

## Vision
[Où elle veut aller - 1 phrase]

## Valeurs
1. **[Valeur 1]** : [Explication courte]
2. **[Valeur 2]** : [Explication courte]
3. **[Valeur 3]** : [Explication courte]

## Chiffres Clés
- [X] années d'expérience
- [X] clients satisfaits
- [X] projets réalisés

## Contact
- **Email** :
- **Téléphone** :
- **Adresse** :
```

### 2. services.md (Offre)

```markdown
# Services

## Service 1 : [Nom]
- **Tagline** : [Phrase d'accroche]
- **Description** : [2-3 phrases]
- **Pour qui** : [Cible]
- **Inclus** :
  - [Élément 1]
  - [Élément 2]
- **Tarif** : [Prix ou "Sur devis"]
- **Délai** : [Estimation]

## Service 2 : [Nom]
[Même structure]

## Service 3 : [Nom]
[Même structure]
```

### 3. positioning.md (Arguments)

```markdown
# Positionnement

## Tagline
[Phrase d'accroche principale - max 10 mots]

## Baseline
[Développement - max 20 mots]

## 3 Arguments de Vente (USPs)
1. **[Argument 1]** : [Preuve/détail]
2. **[Argument 2]** : [Preuve/détail]
3. **[Argument 3]** : [Preuve/détail]

## CTA Principal
- **Texte** : [Ex: "Demander un devis"]
- **Action** : [/contact]

## CTA Secondaire
- **Texte** : [Ex: "Découvrir nos services"]
- **Action** : [/services ou scroll]

## Différenciation
[Qu'est-ce qui vous rend unique vs concurrents ?]

## Messages par Section
- **Hero** : "[Message Hero]"
- **Services** : "[Message Services]"
- **Portfolio** : "[Message Portfolio]"
- **Contact** : "[Message Contact]"
```

### 4. tone.md (Ton)

```markdown
# Ton de Communication

## Tutoiement/Vouvoiement
[Vouvoiement] - [Justification]

## Niveau de Formalité
[X/5] - [Description]

## Personnalité
- **[Adjectif 1]** : [Exemple de phrase]
- **[Adjectif 2]** : [Exemple de phrase]
- **[Adjectif 3]** : [Exemple de phrase]

## Mots à Utiliser
- [Mot 1]
- [Mot 2]
- [Mot 3]

## Mots à Éviter
- [Mot 1]
- [Mot 2]

## Exemples de Phrases
- **Bien** : "[Exemple conforme]"
- **À éviter** : "[Exemple non conforme]"
```

### 5. personas.md (Cible)

```markdown
# Personas

## Persona Principal : [Prénom]

### Profil
- **Âge** : [Tranche]
- **Profession** :
- **Situation** :

### Problème
[Quel problème cherche-t-il à résoudre ?]

### Objectif
[Qu'est-ce qu'il veut accomplir ?]

### Freins
[Qu'est-ce qui l'empêche d'agir ?]

### Message Clé
[La phrase qui va le convaincre]

## Persona Secondaire : [Prénom]
[Même structure si pertinent]
```

### 6. colors.md (Couleurs)

```markdown
# Palette de Couleurs

## Couleur Primaire
- **Nom** : [Ex: Terracotta]
- **HEX** : #[code]
- **OKLCH** : oklch([L] [C] [H])
- **Usage** : Accents, CTAs, éléments signature

## Couleur Secondaire
- **HEX** : #[code]
- **Usage** : Éléments secondaires

## Neutrals
- **Background** : #[code]
- **Foreground** : #[code]
- **Muted** : #[code]

## Sémantique
- **Succès** : #10b981
- **Erreur** : #ef4444
- **Warning** : #f59e0b

## Variables CSS
```css
:root {
  --color-primary: oklch([L] [C] [H]);
  --color-background: oklch([L] [C] [H]);
  --color-foreground: oklch([L] [C] [H]);
  /* ... */
}
```
```

### 7. typography.md (Typographie)

```markdown
# Typographie

## Police Principale
- **Nom** : [Inter / Poppins / etc.]
- **Source** : Google Fonts
- **Fallback** : sans-serif

## Échelle de Tailles

| Élément | Desktop | Mobile | Weight | Line-height |
|---------|---------|--------|--------|-------------|
| H1 | 72px | 48px | 700 | 1.1 |
| H2 | 48px | 32px | 600 | 1.2 |
| H3 | 32px | 24px | 600 | 1.3 |
| H4 | 24px | 20px | 500 | 1.4 |
| Body | 18px | 16px | 400 | 1.6 |
| Small | 14px | 14px | 400 | 1.5 |

## Variables CSS
```css
:root {
  --font-family: '[Font]', sans-serif;
  --font-size-h1: clamp(3rem, 8vw, 4.5rem);
  --font-size-h2: clamp(2rem, 5vw, 3rem);
  /* ... */
}
```
```

## Output

```
output/01-brand/
├── about.md
├── services.md
├── positioning.md
├── tone.md
├── personas.md
├── colors.md
└── typography.md
```

## Validation

- [ ] 7 fichiers créés
- [ ] Aucun placeholder `[texte]` restant
- [ ] Couleurs en format HEX et OKLCH
- [ ] Variables CSS définies
- [ ] Messages par section définis
- [ ] Ton cohérent avec la cible

## Prochaine Étape

Une fois `output/01-brand/` complet → Passer à `stages/01.5-art-direction.md`

---

**Version** : 1.0
**Phase** : A2 (Architecture)
**Dépendances** : A1 (00-Init)
**Produit pour** : A3 (01.5-Art Direction), A4 (03-Structure), A5 (03.5-Wireframes)
