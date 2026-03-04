# Étape A1 : Initialisation

> **Phase A : Architecture** - Première étape du pipeline.

## Objectif

Transformer le brief client en document structuré exploitable par les étapes suivantes.

## Input

- `input/brief-client.md` (questionnaire rempli)
- Conversation avec le client (si informations complémentaires)

## Instructions

1. **Lire** le brief client complet
2. **Extraire** les informations essentielles
3. **Identifier** le type de site et les pages nécessaires
4. **Rédiger** le brief structuré selon le template

## Output

Créer `output/00-brief.md` :

```markdown
# Brief Projet : [Nom]

## Client

- **Entreprise** :
- **Secteur** :
- **Contact** :

## Projet

- **Type** : [Landing / Vitrine / E-commerce]
- **Objectif principal** :
- **Cible principale** :

## Pages

- [ ] Accueil
- [ ] Services
- [ ] Portfolio
- [ ] À propos
- [ ] Contact
- [ ] [Autres pages]

## Messages Clés

- **Tagline** : [Phrase d'accroche principale]
- **Proposition de valeur** : [En quoi êtes-vous différent ?]

## Références

- [URL inspiration 1] - [Ce qu'on retient]
- [URL inspiration 2] - [Ce qu'on retient]

## Contraintes

- **Délai** :
- **Budget** :
- **Technique** :

## Notes

[Informations complémentaires importantes]
```

## Validation

- [ ] Nom entreprise défini
- [ ] Type de site identifié
- [ ] Objectif clair et mesurable
- [ ] Cible principale décrite
- [ ] Liste des pages établie
- [ ] Au moins 2 références visuelles

## Prochaine Étape

Une fois `output/00-brief.md` créé → Passer à `stages/01-brand.md`

---

**Version** : 1.0
**Phase** : A1 (Architecture)
**Dépendances** : Aucune
**Produit pour** : A2 (01-Brand), A4 (03-Structure)
