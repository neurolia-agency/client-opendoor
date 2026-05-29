# Prompt : Refonte design OPENDOOR (session autonome multi-agents)

## Contexte

Session en autonomie totale. Projet : `client-opendoor` (site vitrine OPENDOOR, serrurier Narbonne, Next.js 15 + Tailwind 4 + Motion + Lenis). Le site existe déjà et fonctionne. On ne touche **pas** aux fondations (architecture, routing, contenu, SEO, structure des composants). Objectif : **refonte design pur uniquement**.

## Skills imposés

- **Skill de design principal : `impeccable`** (le plus complet de l'environnement, hors `frontend-design`). Utiliser ses sous-commandes (`shape`, `craft`, `audit`, `polish`, `live`). En amont, générer un `DESIGN.md` à partir de `app/globals.css` + `pipeline/output/03-art-direction/constraints.md`, ou positionner `IMPECCABLE_CONTEXT_DIR`, pour qu'`impeccable` travaille sur le bon contexte OPENDOOR.
- **Typographie : `ui-ux-pro-max`** pour revoir les paires typographiques.
- **Référence esthétique** : archétype "Editorial Luxury" (crémes chauds, serif à fort contraste, grain subtil) cohérent avec l'ADN OPENDOOR.

## Étape 1 : Périmètre design

- Redesigner **toutes les cartes** (cards) du site
- Redesigner **tous les boutons**
- Revoir **les paires typographiques** avec `ui-ux-pro-max`
- Conserver l'ADN OPENDOOR (palette doré/ambre/terracotta, serif élégant pour titres, ton chaleureux et rassurant, téléphone visible sans scroll)

## Étape 2 : Orchestration multi-agents

Avant tout déploiement :

1. Décompose le travail en tâches atomiques
2. Classe-les en **tâches séquentielles** (dépendances : ex. design tokens / système de cartes-boutons avant les pages) vs **tâches parallélisables** (ex. pages indépendantes en parallèle)
3. **Crée tous les agents en amont**, chacun avec un prompt précis et cadré (skill à utiliser, périmètre, contraintes, livrable)
4. **Tous les agents utilisent le modèle Opus 4.7**

## Étape 3 : Review finale avant livraison

Une fois le redesign terminé, passe de contrôle complète pour garantir un site livrable :

- **Validation navigateur via Playwright** : parcourir toutes les pages (desktop + mobile)
- **Vérifier que tous les liens fonctionnent** (navigation, boutons, CTA téléphone, liens internes/externes, footer, menu mobile) : aucun lien mort ni route cassée
- Contrôler le **rendu visuel** et la cohérence du design system (cartes, boutons, typographies, états hover/focus)
- Vérifier que le **build passe** (`npm run build`) sans erreur
- **Dernière relecture globale** : cohérence ADN OPENDOOR, lisibilité, responsive
- Produire un **rapport de livraison** synthétique : ce qui a été redesigné, points vérifiés, anomalies éventuelles restantes

## Contraintes de session

- Validation Playwright **uniquement à l'étape 3** (pas après chaque agent)
- **Aucun déploiement** : on s'arrête au site validé en local (pas de `git push`, pas de Vercel)
