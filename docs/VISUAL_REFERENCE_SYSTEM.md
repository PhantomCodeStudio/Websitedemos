# Visual Reference System

A comprehensive visual design system for component styling and aesthetic direction.

```typescript
export const visualReferenceSystem = {
  "abstract-tech": {
    description:
      "Circuit boards, chip layouts, data maps, waveform systems, computational grids, pixel fragments, technical diagrams.",
    bestFor: ["AI", "software", "Phantom OS", "data", "creative tech", "spatial products"],
    useAs: ["hero background", "interface texture", "motion layer", "technical visual system"],
    risk: "Can become noisy if typography is not clean.",
  },

  "dark-academia": {
    description:
      "Gothic typography, antique paper, museum catalogues, religious architecture, old portraits, poetic darkness.",
    bestFor: ["galleries", "artists", "literature", "fashion", "music", "heritage brands"],
    useAs: ["editorial mood", "typography system", "archive sections", "campaign pages"],
    risk: "Can feel too heavy for normal corporate websites.",
  },

  "numbers": {
    description:
      "Oversized numeric typography, Swiss number systems, calendars, indexes, data-led layout.",
    bestFor: ["case studies", "statistics", "timelines", "indexes", "reports", "product metrics"],
    useAs: ["section numbering", "hero type", "timeline", "case-study system"],
    risk: "Needs strong spacing or it becomes cluttered.",
  },

  "art-deco": {
    description:
      "1920s luxury geometry, stylized figures, theatrical posters, ornamental borders, elegant display type.",
    bestFor: ["luxury", "hotels", "restaurants", "fashion", "events", "galleries"],
    useAs: ["logo/type direction", "hero poster", "ornamental dividers", "premium brand motif"],
    risk: "Can become fake-vintage if overused.",
  },

  "retro-gorpcore": {
    description:
      "Old outdoor catalogues, climbing ads, mountain photography, utilitarian layouts, gear culture.",
    bestFor: ["outdoor", "streetwear", "sports", "adventure", "lifestyle brands"],
    useAs: ["editorial product pages", "catalogue layouts", "image grids", "rugged typography"],
    risk: "Not suitable for every tech or corporate site.",
  },

  "adventure-pulp": {
    description:
      "Pulp covers, western/adventure posters, dramatic characters, bold red/yellow/black palettes.",
    bestFor: ["music", "entertainment", "film", "artist sites", "campaign pages"],
    useAs: ["poster system", "hero illustration direction", "campaign visual language"],
    risk: "Very niche. Use with intent.",
  },

  "iridescent-holographic": {
    description:
      "Rainbow refraction, oil-slick gradients, chrome light, spectral surfaces, liquid glass.",
    bestFor: ["creative tech", "AI", "Phantom Code", "immersive websites"],
    useAs: ["rare signature accent", "hero object", "transition glow", "premium futuristic detail"],
    risk: "Do not use everywhere. It must feel special.",
  },

  "science-archive": {
    description:
      "Scientific diagrams, old lab illustrations, charts, maps, textbook systems, measurement graphics.",
    bestFor: ["research", "AI", "engineering", "education", "biotech", "institutions"],
    useAs: ["technical credibility layer", "diagram sections", "background details"],
    risk: "Can feel cold if not paired with strong brand typography.",
  },

  "swiss-functional": {
    description:
      "Grid-based modernist design, strict alignment, bold geometry, minimal color, high clarity.",
    bestFor: ["business", "corporate", "architecture", "institutions", "product sites"],
    useAs: ["base layout system", "navigation", "case studies", "typographic hierarchy"],
    risk: "Can become too plain unless paired with a creative accent.",
  },
} as const;
```

## System Overview

This visual reference system provides a comprehensive set of design aesthetic frameworks that can be applied to components and interfaces.

### How to Use

Each visual reference includes:

- **description** — Visual and aesthetic characteristics
- **bestFor** — Industries, brands, and project types that benefit from this style
- **useAs** — Specific application areas within interfaces
- **risk** — Common pitfalls and when to avoid this approach

### Reference Styles

### 1. Abstract-Tech
**Best for:** AI projects, software, Phantom OS, technical products

Ideal for creating a computational, technical aesthetic with circuit board patterns, data visualizations, and technical grids.

### 2. Dark-Academia
**Best for:** Galleries, artists, cultural institutions

Creates a sophisticated, literary aesthetic with gothic elements and museum-quality presentation.

### 3. Numbers
**Best for:** Data-driven products, case studies, reports

Uses oversized typography and numeric systems for bold, metrics-focused layouts.

### 4. Art-Deco
**Best for:** Luxury brands, premium experiences

Brings 1920s elegance with geometric forms and ornamental details.

### 5. Retro-Gorpcore
**Best for:** Outdoor, adventure, streetwear brands

Uses vintage outdoor catalogue aesthetics and utilitarian design language.

### 6. Adventure-Pulp
**Best for:** Entertainment, music, film projects

Creates bold, dramatic visual language with strong color palettes.

### 7. Iridescent-Holographic
**Best for:** Creative tech, AI, immersive experiences

Adds premium, futuristic detail with spectral and chromatic effects.

### 8. Science-Archive
**Best for:** Research, biotech, educational institutions

Establishes technical credibility with scientific diagrams and measurement graphics.

### 9. Swiss-Functional
**Best for:** Corporate, business, architectural projects

Provides clean, grid-based modernist foundation for clarity and structure.

## Integration with Components

Apply visual references to component systems by:

1. **Visual Direction** — Use the aesthetic as design direction for all components
2. **Texture & Pattern** — Incorporate visual elements into backgrounds and accents
3. **Typography** — Select typefaces that align with the aesthetic
4. **Color Palette** — Choose colors that support the visual language
5. **Motion & Animation** — Design animations that fit the aesthetic personality

## Brand Application

Select a primary visual reference that aligns with your brand identity:

- **Primary** — Main aesthetic for core branding
- **Secondary** — Complementary style for specific sections
- **Accent** — Special visual for emphasis or premium features

## Examples

### Phantom Code + Abstract-Tech
Combines computational aesthetics with clean component design for a technical product interface.

### Creative Tech + Iridescent-Holographic
Uses holographic accents sparingly for premium, futuristic feel in AI applications.

### AI Research + Science-Archive
Pairs scientific diagrams with modern interface design for credible, technical presence.

---

Use this system as a reference when designing and styling components across the Accessible Component System.
