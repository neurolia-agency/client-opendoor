# Contraintes Design

Règles non-négociables pour garantir la cohérence visuelle OPENDOOR.

---

## ON FAIT (obligatoire)

### Couleurs & Identité

1. **Or Miel comme signature visuelle**
   - Présent dans chaque section (badges, highlights, liens, icônes)
   - Représente 15-20% de la surface colorée visible
   - Justification : Couleur dominante demandée, évoque confiance et qualité

2. **Fond Crème doré unifiant**
   - Background principal : #FFFBF0
   - Teinte jaune subtile présente partout
   - Justification : Crée chaleur et cohérence, jamais de blanc pur

3. **Terracotta réservé aux actions**
   - Uniquement pour CTAs principaux et bouton téléphone
   - Crée un contraste d'attention
   - Justification : Hiérarchie visuelle claire, action = terracotta

### Typographie

4. **Cormorant Garamond pour tous les titres**
   - H1 à H4 exclusivement en Cormorant
   - Weight 500-600 pour équilibre élégance/lisibilité
   - Justification : Signature typographique premium et rassurante

5. **Inter pour tout le contenu courant**
   - Body, labels, boutons, interface
   - Weight 400 par défaut, 500-600 pour emphase
   - Justification : Lisibilité optimale, professionnalisme

6. **Taille minimum 16px pour le body mobile**
   - Jamais de texte plus petit sur mobile
   - Justification : Accessibilité, lisibilité sur écrans tactiles

### Formes & Espace

7. **Border radius minimum 12px**
   - Aucun angle droit sur les éléments interactifs
   - Cards : 24px / Images : 32px / Boutons : 12-24px
   - Justification : Esthétique organique apaisante

8. **Espacement généreux entre sections**
   - Minimum 120px desktop / 80px mobile
   - Recommandé 160px desktop / 96px mobile
   - Justification : Respiration visuelle, lecture sereine

9. **Téléphone visible sans scroll**
   - Dans le header sticky ET above the fold
   - Click-to-call fonctionnel sur mobile
   - Justification : Objectif principal = générer des appels

### Interactions

10. **Animations fluides et ralenties**
    - Minimum 300ms pour les transitions
    - 500-800ms pour les apparitions au scroll
    - Easing : ease-out ou cubic-bezier doux
    - Justification : Impression de calme, pas de stress

11. **Hover avec translateY(-4px)**
    - Mouvement vertical subtil sur cards et liens
    - Jamais de changement brusque de couleur seul
    - Justification : Feedback physique doux

12. **Texture grain sur tout le site**
    - Overlay SVG à 0.04 opacity
    - Justification : Signature visuelle premium

---

## ON NE FAIT PAS (interdit)

### Couleurs

1. **Pas de blanc pur (#FFFFFF)**
   - Toujours utiliser Crème doré (#FFFBF0) ou variantes
   - Pourquoi : Casse la chaleur de la palette, trop froid

2. **Pas de noir pur (#000000)**
   - Utiliser Brun profond (#2A2418) pour les textes
   - Pourquoi : Trop dur, crée de l'anxiété

3. **Pas de couleurs saturées/vives**
   - Chroma maximum 0.15 en OKLCH
   - Pourquoi : Agressif, contraire au ton apaisant

### Typographie

4. **Pas de tout-majuscules sur plus de 3 mots**
   - Réservé aux labels courts (URGENCE, 24H/24)
   - Pourquoi : Crie, anxiogène

5. **Pas de texte centré pour les paragraphes**
   - Alignement gauche pour tout le body text
   - Pourquoi : Mauvaise lisibilité sur les longs textes

6. **Pas de fonts décoratives supplémentaires**
   - Uniquement Cormorant + Inter
   - Pourquoi : Cohérence, performance

### Formes & Layout

7. **Pas d'angles droits (border-radius: 0)**
   - Minimum 8px même sur les plus petits éléments
   - Pourquoi : Esthétique organique obligatoire

8. **Pas de carrousel/slider**
   - Préférer grilles statiques ou scroll horizontal natif
   - Pourquoi : Mauvaise UX mobile, freine la conversion

9. **Pas de parallax agressif**
   - Maximum translateY de 50px sur le scroll
   - Pourquoi : Performance, accessibilité, nausée

### Interactions

10. **Pas d'animations < 200ms**
    - Transitions trop rapides = stress
    - Pourquoi : Contraire au ton calme et rassurant

11. **Pas de popups intrusifs**
    - Pas de modal au chargement
    - Pourquoi : Agresse l'utilisateur déjà stressé

12. **Pas de vidéo autoplay avec son**
    - Si vidéo, toujours muette par défaut
    - Pourquoi : Intrusif, consomme data mobile

### Contenu

13. **Pas de stock photos génériques**
    - Préférer illustrations ou photos authentiques
    - Pourquoi : Confiance, authenticité

14. **Pas de jargon technique non expliqué**
    - Si terme technique, toujours accompagné d'explication
    - Pourquoi : Ton accessible, pas condescendant

---

## Test Rapide "Est-ce OPENDOOR ?"

Checklist de validation pour chaque composant/page :

- [ ] Palette crème doré / or miel / terracotta visible ?
- [ ] Typographie Serif élégante (Cormorant) pour les titres ?
- [ ] Texture grain subtile présente ?
- [ ] Téléphone visible sans scroll (header ou hero) ?
- [ ] Ton apaisant et rassurant (pas d'urgence criée) ?
- [ ] Formes organiques (radius ≥ 12px) ?
- [ ] Animations fluides (≥ 300ms) ?
- [ ] Espace généreux entre sections (≥ 120px) ?

**Scoring :**
- 8/8 = ✅ Conforme OPENDOOR
- 6-7/8 = ⚠️ Revoir les points manquants
- < 6/8 = ❌ Non conforme, refaire

---

## Exceptions Autorisées

| Exception | Contexte | Condition |
|-----------|----------|-----------|
| Rouge erreur | Formulaires | Uniquement pour erreurs de validation |
| Angles droits | Lignes séparatrices | Uniquement lignes 1px horizontales |
| Texte < 16px | Labels de formulaire | Minimum 14px, jamais moins |
| Animation rapide | Micro-interactions | 200ms max pour icônes/checkboxes |
