# Homepage - Wireframe

**Route** : /
**Objectif** : Convertir immédiatement en appels téléphoniques (urgences) ou demandes de devis (non-urgences)

---

## Section 1 : Hero

**Contenu** :
- H1 : `positioning.md > tagline`
- Baseline : `positioning.md > baseline`
- CTA principal : `positioning.md > cta_principal > texte` → tel:0789081857
- CTA secondaire : `positioning.md > cta_secondaire > texte` → /contact

**Layout** : Plein écran, centré, typographie dominante. Image de fond subtile (serrurier professionnel) ou texture.
**Interaction** : Fade-in staggered au load (titre → baseline → CTAs). Durée 800ms.
**Mobile** : CTAs empilés, téléphone en premier.

---

## Section 2 : Réassurance (badges)

**Contenu** :
- Badge 1 : "24h/24 - 7j/7"
- Badge 2 : "Devis gratuit"
- Badge 3 : "Sans dégâts privilégié"
- Badge 4 : "Intervention < 30 min"

**Layout** : 4 badges horizontaux (2x2 sur mobile). Fond légèrement teinté Or Miel.
**Interaction** : Apparition fade-in au scroll, staggered 100ms entre chaque.
**Style** : Icônes simples + texte court. Border radius 100px (pill).

---

## Section 3 : Services (aperçu)

**Contenu** :
- Titre : `positioning.md > messages > services`
- Card 1 : `services.md > service_1 > tagline` + description courte
- Card 2 : `services.md > service_2 > tagline` + description courte
- Card 3 : `services.md > service_3 > tagline` + description courte
- Lien : "Voir tous nos services" → /services

**Layout** : Titre centré + grid 3 colonnes (1 col mobile).
**Interaction** : Hover translateY(-4px) + ombre portée sur cards.
**Style** : Cards avec icône, titre tagline, description courte. Radius 24px.

---

## Section 4 : Approche (aperçu)

**Contenu** :
- Titre : `positioning.md > messages > approche`
- Valeur 1 : `about.md > valeurs[0] > nom`
- Valeur 2 : `about.md > valeurs[1] > nom`
- Valeur 3 : `about.md > valeurs[2] > nom`
- Valeur 4 : `about.md > valeurs[3] > nom`
- Lien : "En savoir plus sur notre approche" → /approche

**Layout** : Titre + 4 éléments en ligne (2x2 mobile). Style épuré, texte seul ou avec icônes subtiles.
**Interaction** : Fade-in au scroll.
**Style** : Typographie Cormorant pour les noms de valeurs, Inter pour le reste.

---

## Section 5 : Zone d'intervention (aperçu)

**Contenu** :
- Titre : `positioning.md > messages > zone`
- Visuel : Carte simplifiée ou illustration zone
- Villes : "Narbonne, Béziers, Gruissan, Lézignan-Corbières..."
- Lien : "Voir toutes les villes couvertes" → /zone

**Layout** : 2 colonnes (visuel + texte) ou empilé sur mobile.
**Interaction** : Fade-in visuel au scroll.
**Style** : Fond légèrement différencié (Ardoise très clair ou Or Miel subtil).

---

## Section 6 : CTA Final

**Contenu** :
- Titre : "Une urgence ? Nous sommes disponibles maintenant."
- Sous-titre : "Appelez-nous 24h/24, 7j/7"
- CTA principal : "07 89 08 18 57" → tel:0789081857
- CTA secondaire : "Demander un devis" → /contact

**Layout** : Pleine largeur, fond Terracotta ou accent. Centré.
**Interaction** : Bouton téléphone avec pulse subtil pour attirer l'attention.
**Style** : Contraste fort, texte clair sur fond sombre. Radius 24px pour la section.

---

**Sections totales** : 6
**Source** : `03-sitemap.md > pages > accueil`
