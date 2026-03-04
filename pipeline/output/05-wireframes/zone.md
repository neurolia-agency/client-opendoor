# Zone d'Intervention - Wireframe

**Route** : /zone
**Objectif** : Rassurer sur la couverture géographique et la proximité

---

## Section 1 : Hero Page

**Contenu** :
- H1 : "Zone d'Intervention"
- Baseline : `positioning.md > messages > zone` (partie après le tiret)

**Layout** : Hero compact, titre centré.
**Interaction** : Fade-in au load.
**Style** : Typographie Cormorant. Fond Crème doré.

---

## Section 2 : Carte Interactive

**Contenu** :
- Carte centrée sur Narbonne
- Coordonnées : `about.md > contact > zone` (43.1842°N, 3.0030°E)
- Rayon : 50 km matérialisé
- Marqueurs : Toutes les villes couvertes

**Layout** : Carte pleine largeur ou 2/3 de l'écran. Aspect ratio 16:9 ou 4:3.
**Interaction** : Hover sur marqueurs pour voir le nom de la ville. Zoom/pan désactivé ou limité.
**Style** : Style carte personnalisé (tons crème/or/ardoise). Pas de style Google Maps par défaut.
**Technique** : Mapbox ou Leaflet avec style custom, ou illustration statique si budget limité.

---

## Section 3 : Villes Couvertes (grid)

**Contenu** :
- H2 : "12 villes couvertes"
- Liste :
  - Narbonne (ville principale, highlight)
  - Narbonne-Plage
  - Gruissan
  - Port-la-Nouvelle
  - Sigean
  - Leucate
  - Coursan
  - Cuxac-d'Aude
  - Lézignan-Corbières
  - Béziers
  - Capestang
  - Sérignan

**Layout** : Grid 3-4 colonnes desktop, 2 colonnes tablette, 1 colonne mobile.
**Interaction** : Hover highlight sur chaque ville (couleur Or Miel).
**Style** : Narbonne mise en avant (badge "Siège" ou taille plus grande). Pills ou cards simples.

---

## Section 4 : Infos Pratiques

**Contenu** :
- Disponibilité : `about.md > chiffres > disponibilite`
- Délai : `about.md > chiffres > intervention`
- Téléphone : `about.md > contact > telephone`

**Layout** : 3 blocs horizontaux (icône + chiffre + label). Centré.
**Interaction** : Fade-in staggered au scroll.
**Style** : Icônes simples, chiffres en Cormorant grande taille. Fond légèrement teinté.

---

## Section 5 : CTA Contact

**Contenu** :
- Titre : "Vous êtes dans notre zone ?"
- Sous-titre : "Nous intervenons en moins de 30 minutes"
- CTA principal : `positioning.md > cta_principal > texte` → tel:0789081857

**Layout** : Pleine largeur, fond Terracotta.
**Interaction** : Pulse subtil sur bouton téléphone.
**Style** : Cohérent avec autres pages. Un seul CTA (téléphone).

---

**Sections totales** : 5
**Source** : `03-sitemap.md > pages > zone`
