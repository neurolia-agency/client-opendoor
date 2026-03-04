# Typographie

## Police Principale (Titres)

- **Nom** : Cormorant Garamond
- **Source** : Google Fonts
- **Weights** : 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **Fallback** : Georgia, 'Times New Roman', serif
- **Usage** : Titres, headings, éléments d'élégance, citations
- **Feeling** : Raffiné, intemporel, rassurant, premium

## Police Secondaire (Corps)

- **Nom** : Inter
- **Source** : Google Fonts
- **Weights** : 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold)
- **Fallback** : system-ui, -apple-system, sans-serif
- **Usage** : Body text, labels, interface, boutons
- **Feeling** : Moderne, lisible, professionnel, accessible

## Échelle de Tailles

| Élément | Desktop | Mobile | Weight | Line-height | Font |
|---------|---------|--------|--------|-------------|------|
| H1 | 72px | 48px | 600 | 1.1 | Cormorant |
| H2 | 48px | 36px | 600 | 1.2 | Cormorant |
| H3 | 36px | 28px | 500 | 1.3 | Cormorant |
| H4 | 28px | 22px | 500 | 1.4 | Cormorant |
| H5 | 22px | 18px | 500 | 1.4 | Inter |
| H6 | 18px | 16px | 600 | 1.4 | Inter |
| Body | 18px | 16px | 400 | 1.7 | Inter |
| Body Large | 20px | 18px | 400 | 1.6 | Inter |
| Small | 14px | 14px | 400 | 1.5 | Inter |
| Caption | 12px | 12px | 400 | 1.4 | Inter |

## Variables CSS

```css
:root {
  /* Familles */
  --font-heading: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;

  /* Tailles fluides (clamp) */
  --font-size-h1: clamp(3rem, 6vw + 1rem, 4.5rem);
  --font-size-h2: clamp(2.25rem, 4vw + 0.5rem, 3rem);
  --font-size-h3: clamp(1.75rem, 3vw + 0.5rem, 2.25rem);
  --font-size-h4: clamp(1.375rem, 2vw + 0.5rem, 1.75rem);
  --font-size-h5: clamp(1.125rem, 1.5vw + 0.5rem, 1.375rem);
  --font-size-h6: clamp(1rem, 1vw + 0.5rem, 1.125rem);
  --font-size-body: clamp(1rem, 0.5vw + 0.875rem, 1.125rem);
  --font-size-body-lg: clamp(1.125rem, 0.5vw + 1rem, 1.25rem);
  --font-size-small: 0.875rem;
  --font-size-caption: 0.75rem;

  /* Poids */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Line heights */
  --line-height-tight: 1.1;
  --line-height-snug: 1.2;
  --line-height-normal: 1.4;
  --line-height-relaxed: 1.6;
  --line-height-loose: 1.7;

  /* Letter spacing */
  --letter-spacing-tight: -0.02em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.02em;
  --letter-spacing-wider: 0.05em;
}
```

## Import Google Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

## Notes d'Usage

- **Cormorant Garamond** apporte l'élégance et le raffinement — réservé aux titres
- **Inter** assure la lisibilité optimale — utilisé pour tout le contenu courant
- Le contraste entre serif (titres) et sans-serif (corps) crée une hiérarchie claire
- Line-height généreuse (1.7) pour le body améliore la lisibilité et l'aspect aéré
- Éviter les tailles trop petites sur mobile (minimum 16px pour le body)
- Letter-spacing légèrement négatif sur les gros titres pour plus de cohésion
