# DESIGN.md — OPENDOOR (système de refonte)

> Source de vérité unique du redesign. Tous les agents lisent ce fichier AVANT toute édition.
> Périmètre : **design pur**. On ne touche jamais à : architecture, routing, contenu/copy, SEO, structure des composants, props, logique. On change uniquement l'apparence (typo, cartes, boutons, ombres, couleurs, espaces décoratifs).
> Règle absolue : aucun tiret cadratin `—` nulle part. Pas de blanc pur `#fff`, pas de noir pur `#000`.

---

## 1. Direction (archétype Editorial Luxury chaud)

Le site a dérivé vers un look « sans gras uppercase » (Ubuntu 900 majuscules) qui crie et contredit l'ADN. On le ramène vers l'élégance éditoriale chaude : **grand serif à fort contraste** pour les titres, **Inter** pour le corps, **majuscules réservées aux labels courts**. Crèmes ambrés, ombres teintées chaud, grain subtil, mouvement lent.

---

## 2. Typographie (NOUVEAU — décision validée via ui-ux-pro-max)

Paire retenue : **Cormorant Garamond (titres) + Inter (corps)** — archétype « Classic Elegant / Luxury Serif » (high-contrast serif + sans neutre lisible). Conforme à l'ADN verrouillé.

**Suppression d'Ubuntu** : la font Ubuntu est retirée (import `layout.tsx` + rôle `--font-display`). Le rôle display pointe désormais vers Cormorant.

Rôles :
| Rôle | Font | Usage |
|------|------|-------|
| Display / titres d'impact (h1, hero, gros titres de section) | **Cormorant Garamond**, weight 500-600 | Élégant, PAS en majuscules, leading serré |
| h2–h4 | Cormorant Garamond 500-600 | inchangé (déjà serif) |
| Accent / emphase | Cormorant Garamond *italic* | un mot ou groupe mis en valeur dans un titre |
| Corps, listes, paragraphes | Inter 400-500 | inchangé |
| Labels / eyebrows / stats / boutons / nav | Inter 500-600 | uppercase autorisé UNIQUEMENT si ≤ 3 mots (ex : « 24/7 », « URGENCE 24H/24 ») |

**Règle de conversion des titres (à appliquer partout) :**
- Tout titre actuellement en `fontFamily: 'var(--font-display)'` **+** `textTransform: 'uppercase'` : retirer le `textTransform: 'uppercase'`, garder `var(--font-display)` (qui est maintenant Cormorant). Le titre devient un grand serif élégant en casse normale (capitale initiale + minuscules).
- Ajuster `fontWeight` à 500 ou 600 (Cormorant a besoin de plus de graisse que le sans pour le même poids visuel).
- `letterSpacing` : passer de `-0.02em` (réglage sans) à `-0.01em` ou `0` (le serif ne se condense pas).
- `lineHeight` titres : 1.05–1.15.
- **Exception eyebrow/label** : les courts surtitres type « 24/7 », « Ce que nous faisons », badges, restent en Inter (sans), uppercase, tracking large `0.12–0.15em`, petite taille. Ne PAS les passer en serif.

**Hero (`components/sections/hero.tsx`)** — cas signature, à retraiter :
- « 24/7 » : garde le rôle label (Inter, gras, peut rester tel quel ou devenir un eyebrow tracké). Petit, au-dessus du titre.
- « INTERVENTION EXPRESS. » actuellement Inter 900 uppercase scale-x 0.85 : le remplacer par **Cormorant Garamond, weight 600, casse normale** (« Intervention express. »), grande taille fluide, leading serré (~0.95–1.0). Retirer le `scale-x-[0.85]` et l'uppercase. On peut mettre un mot en *italic* Cormorant pour le contraste éditorial (ex : « Intervention *express*. »). Garder les ombres portées chaudes pour la lisibilité sur le dégradé.
- Conserver intégralement : layout, image cutout, animations, le CTA téléphone (juste l'aligner au nouveau système bouton, voir §4).

Échelle (garder les tokens `--font-size-*` existants, ils sont fluides et corrects). Contraste de graisse ≥ 1.25 entre niveaux.

---

## 3. Cartes (NOUVEAU système unifié)

Objectif : une famille de cartes cohérente, chaude, premium. On garde les noms de classes existants (`.card`, `.card-glass`, `.card-glass-dark`) et on redessine leur style dans `globals.css`. Les cartes construites en inline dans les composants doivent **converger vers le même vocabulaire** (mêmes radius / ombres / bordures), idéalement en adoptant la classe, sinon en alignant les valeurs inline.

### Correctifs de tokens (globals.css)
- `--card` : **n'est plus `#ffffff`**. Nouvelle valeur ivoire chaud : `oklch(0.992 0.006 78)`.
- Nouvelles ombres **teintées chaud** (remplacent l'usage du noir neutre sur les cartes claires) :
  - `--shadow-card: 0 1px 2px rgba(74, 52, 28, 0.05), 0 8px 24px rgba(74, 52, 28, 0.07);`
  - `--shadow-card-hover: 0 2px 6px rgba(74, 52, 28, 0.06), 0 18px 48px rgba(74, 52, 28, 0.12);`
  - (garder `--shadow-glow*` ambrés existants pour les accents)
- Bordure hairline chaude réutilisable : `oklch(0.88 0.025 70 / 0.6)`.

### `.card` (surface claire sur fond crème)
```
background: var(--card);
border-radius: var(--radius-lg);           /* 24px */
padding: 1.75rem;
border: 1px solid oklch(0.88 0.025 70 / 0.6);
box-shadow: var(--shadow-card);
transition: transform var(--transition-standard), box-shadow var(--transition-standard), border-color var(--transition-standard);
```
hover : `transform: translateY(-4px); box-shadow: var(--shadow-card-hover); border-color: oklch(0.80 0.06 65 / 0.7);`

### `.card-glass-dark` (sur dégradés sombres chauds — ex services-preview)
Raffiner l'existant (le glass sur fond sombre chaud est intentionnel et on-brand, on le garde mais on l'élève) :
```
background: rgba(255, 251, 240, 0.045);
border-radius: var(--radius-xl);            /* 32px pour les grandes cartes média */
border: 1px solid rgba(255, 251, 240, 0.10);
box-shadow: 0 4px 24px rgba(20, 12, 4, 0.25), inset 0 1px 0 rgba(255, 251, 240, 0.06);
backdrop-filter: blur(12px);
```
hover : `transform: translateY(-6px); border-color: <accent ambré de la carte ou rgba(255,251,240,0.18)>; box-shadow: 0 20px 60px <accent/18>, inset 0 1px 0 rgba(255,251,240,0.08);`

### `.card-glass` (glass sur fond clair) : aligner bordure ambrée subtile + ombre chaude douce, même radius famille.

### Règles anti-slop cartes (impeccable)
- **Pas de side-stripe border** (bordure colorée gauche/droite > 1px en accent). Si présent, le retirer : bordure pleine ou fond teinté à la place.
- Éviter la **grille de cartes identiques icône+titre+texte** monotone : varier subtilement (taille, une carte mise en avant, rythme de l'espace) quand c'est possible **sans toucher à la structure/au contenu**. À minima : ombres et bordures cohérentes, pas de carte dans une carte.
- Pas de glassmorphism décoratif gratuit sur fond clair : sur crème, préférer `.card` solide ivoire. Le glass est réservé aux fonds sombres chauds.
- Radius : cartes 24px (`--radius-lg`), grandes cartes média/images 32px (`--radius-xl`). Jamais d'angle droit.

---

## 4. Boutons (NOUVEAU vocabulaire unifié)

On garde les noms de classes (`.btn-primary`, `.btn-primary-light`, `.btn-secondary`, `.btn-outline`) — **redessinés dans globals.css** — et on aligne les CTAs inline dessus. Sémantique claire :

| Classe | Emphase | Style | Sur quel fond |
|--------|---------|-------|---------------|
| `.btn-primary` | Haute (action principale, ex appel) | **Plein ambre** `--primary`, texte blanc, glow chaud, hover lift+scale | clair ET sombre (plein, lisible partout) |
| `.btn-primary-light` | Moyenne | Fond ambré très clair `rgba(217,119,6,0.08)`, texte `--primary-dark`, bordure hairline ambrée, hover tint+glow | clair |
| `.btn-outline` | Basse | Transparent, bordure chaude, texte `--foreground`, hover tint ambré léger | clair |
| `.btn-on-dark` (NOUVEAU) | Moyenne sur sombre | Transparent, bordure `rgba(255,251,240,0.22)`, texte crème, hover tint crème | sombre |

Specs communes : `font-family: var(--font-body)`, `font-weight: 600`, `padding: 0.875rem 1.75rem`, `border-radius: var(--radius-md)` (12px, conforme contrainte boutons 12-24px), `transition: all var(--transition-standard)` (≥300ms), `inline-flex items-center justify-center gap-...`. Touch target ≥ 44px de haut. Hover : lift subtil (`translateY(-2px)` ou `scale(1.02)`) + ombre/glow, jamais < 200ms.

**`.btn-primary` redessiné (plein ambre)** :
```
background-color: var(--primary);
color: var(--primary-foreground);
box-shadow: var(--shadow-glow);
```
hover : `background-color: var(--primary-light); box-shadow: var(--shadow-glow-strong); transform: scale(1.02);`

**CTA téléphone hero** (inline, crème sur dégradé) : le garder mais l'aligner au vocabulaire (radius-md, glow chaud, hover scale 1.02-1.04, pastille ronde ambrée avec icône Phone conservée). C'est la signature, rester proche de l'existant en harmonisant ombres/radius.

**CTA inline « Voir tous nos services »** et équivalents sur fond sombre : adopter le style `.btn-on-dark`.

Vérification par agent : pour chaque usage de `.btn-primary` sur fond clair vs sombre, vérifier le contraste (le plein ambre + texte blanc passe partout). Si un bouton outline est sur fond sombre, utiliser `.btn-on-dark`.

---

## 5. Couleur, mouvement, grain (garder l'existant, vérifier conformité)

- Palette ambre/terracotta/crème inchangée. Chroma ≤ 0.18 (OKLCH). Terracotta/ambre = actions.
- Or miel présent dans chaque section (badge, lien, icône, trait) ~15-20% de la surface colorée.
- Grain SVG subtil (opacity ~0.04) sur les sections, jamais sur les images.
- Transitions ≥ 300ms, reveals 500-800ms, easing `cubic-bezier(0.16,1,0.3,1)` ou ease-out. Hover cartes : `translateY(-4px)`.
- Aucune nouvelle font décorative. Uniquement Cormorant + Inter.

---

## 6. Checklist de conformité (chaque composant après édition)

- [ ] Titres en Cormorant (serif), pas en Ubuntu/sans uppercase (sauf labels courts ≤3 mots)
- [ ] Aucune majuscule sur > 3 mots
- [ ] Cartes : radius famille (24/32), ombre chaude, bordure hairline chaude, hover lift ≥300ms, pas de side-stripe, pas de blanc pur
- [ ] Boutons : classe du vocabulaire §4, contraste OK sur le fond, radius-md, touch ≥44px
- [ ] Téléphone toujours visible/lisible
- [ ] Ton apaisant (rien ne crie)
- [ ] Aucun tiret cadratin, aucun `#fff`/`#000` introduit
- [ ] Contenu, structure, props, routing, SEO : INCHANGÉS
