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

export type VisualReference = keyof typeof visualReferenceSystem;

export function getVisualReference(key: VisualReference) {
  return visualReferenceSystem[key];
}
