# Direction Artistique - OPENDOOR

Guide de vision visuelle pour la création du design system et des interfaces.

---

## ADN Visuel

| Aspect | Valeur |
|--------|--------|
| **Couleur signature** | Or Miel `#C4A35A` (oklch 0.72 0.11 85) |
| **Couleur action** | Terracotta `#B8845A` (oklch 0.62 0.10 55) |
| **Couleur équilibre** | Ardoise `#6B7A8A` (oklch 0.52 0.03 240) |
| **Background** | Crème doré `#FFFBF0` (teinte jaune subtile) |
| **Texte** | Brun profond `#2A2418` (jamais noir pur) |
| **Forme signature** | Organiques, radius 24-32px |
| **Mouvement** | Fluide, 300-800ms, ease-out |
| **Structure** | Hero → Réassurance → Services → Approche → Zone → Contact |
| **Espace sections** | 160px desktop / 96px mobile |
| **Radius** | Soft 24px / Organic 32px / Pill 100px |
| **Typographies** | Cormorant Garamond (titres) + Inter (body) |
| **Texture** | Grain subtil (opacity 0.04) |

---

## Test Rapide "Est-ce OPENDOOR ?"

- [ ] Palette crème doré / or miel / terracotta visible ?
- [ ] Typographie Serif élégante (Cormorant) pour les titres ?
- [ ] Texture grain subtile présente ?
- [ ] Téléphone visible sans scroll ?
- [ ] Ton apaisant et rassurant ?
- [ ] Formes organiques (radius ≥ 12px) ?
- [ ] Animations fluides (≥ 300ms) ?
- [ ] Espace généreux entre sections ?

**→ 8/8 = Conforme | 6-7/8 = Revoir | < 6/8 = Refaire**

---

## Fichiers

| Fichier | Usage | Consommateur |
|---------|-------|--------------|
| `moodboard.md` | Références analysées avec mesures | Inspiration, validation |
| `visual-vocabulary.md` | Termes → valeurs CSS précises | A6 (Design Tokens) |
| `constraints.md` | Règles ON FAIT / ON NE FAIT PAS | B1-B4 (Frontend) |
| `emotion-map.md` | Émotion cible par section | A5 (Wireframes), B2-B3 |

---

## Usage par Étape

### A6 - Design Tokens (`app/globals.css`)

1. Ouvrir `visual-vocabulary.md`
2. Implémenter chaque valeur en CSS custom properties
3. Respecter les noms et valeurs exactes

### B1-B3 - Frontend (composants, pages)

1. Avant de coder : lire `constraints.md`
2. Pendant le dev : valider contre le Test Rapide
3. En cas de doute : consulter `emotion-map.md` pour l'intention

### Validation

1. Comparer le rendu au `moodboard.md`
2. Exécuter le Test Rapide (8 critères)
3. Vérifier les contraintes dans `constraints.md`

---

## Équation Visuelle

```
OPENDOOR = Premium + Accessible + Rassurant

Premium     = Cormorant Garamond + Or Miel + Texture grain
Accessible  = Inter + Click-to-call + Structure claire
Rassurant   = Formes douces + Animations lentes + Espaces généreux
```

---

## Palette Résumée

```
Backgrounds          Accents               Textes
─────────────        ─────────────         ─────────────
#FFFBF0 Crème doré   #C4A35A Or Miel       #2A2418 Principal
#FAF6E6 Ivoire       #B8845A Terracotta    #6A6254 Secondaire
#F2EBDA Sable        #6B7A8A Ardoise       #9A9284 Discret
#E6DDCA Bordure
```

---

## Liens avec les Valeurs de Marque

| Valeur Marque | Traduction Visuelle |
|---------------|---------------------|
| Empathie Active | Couleurs chaudes, espaces généreux, animations lentes |
| Transparence Radicale | Structure claire, hiérarchie évidente, texte lisible |
| Bienveillance Exigeante | Finitions soignées, texture grain, typography premium |
| Santé Relationnelle | Ton visuel chaleureux, pas d'agressivité, équilibre |

---

*Dernière mise à jour : 31 janvier 2026*
*Phase : A3 (Architecture)*
*Dépendances : A2 (01-Brand)*
*Produit pour : A4 (Structure), A5 (Wireframes), A6 (Design Tokens)*
