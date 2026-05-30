export interface Project {
  slug: string;
  title: string;
  category: string;
  year: number;
  tags: string[];
  summary: string;
  description: string;
  heroColor: string;       // CSS color for placeholder art
  accentColor: string;
  images: string[];        // picsum IDs for now
  featured: boolean;
  index: number;
}

export const projects: Project[] = [
  {
    slug: 'meridian-identity',
    title: 'Meridian',
    category: 'Brand Identity',
    year: 2024,
    tags: ['Brand', 'Identity', 'Type', 'Motion'],
    summary: 'A full identity system for a new-generation architecture consultancy.',
    description: `Meridian came to us as a name and a vision — a practice built on the belief that architecture should serve both precision and feeling. We built the visual language from zero: wordmark, palette, type system, wayfinding, and digital presence. The result is a mark that holds confidence at any scale, from a business card to a 40-meter hoarding.`,
    heroColor: '#1a1a2e',
    accentColor: '#ff3b1f',
    images: ['1015', '1024', '1033'],
    featured: true,
    index: 1,
  },
  {
    slug: 'forma-campaign',
    title: 'Forma',
    category: 'Campaign',
    year: 2024,
    tags: ['Campaign', 'Art Direction', 'Photography'],
    summary: 'Art direction and campaign design for a premium furniture launch.',
    description: `Forma's debut collection demanded imagery that felt earned — earned silence, earned weight, earned presence. We designed every frame with negative space as the primary material, treating the furniture the way a sculptor treats stone: as much about what is removed as what remains. The campaign ran across print, digital, and six flagship windows in four cities.`,
    heroColor: '#2c2416',
    accentColor: '#d4a96a',
    images: ['1011', '1020', '1029'],
    featured: true,
    index: 2,
  },
  {
    slug: 'signal-digital',
    title: 'Signal',
    category: 'Digital',
    year: 2025,
    tags: ['Web', 'Product', 'Motion'],
    summary: 'Website and digital brand system for a fintech infrastructure company.',
    description: `Signal moves money invisibly through half the financial systems in Southeast Asia. Our work was to give that invisible power a face — credible enough for enterprise, clear enough for a first-time founder. We designed a site that treats complexity as confidence, using data density as atmosphere rather than noise.`,
    heroColor: '#0d1f2d',
    accentColor: '#00c2ff',
    images: ['1018', '1027', '1036'],
    featured: true,
    index: 3,
  },
  {
    slug: 'vestige-packaging',
    title: 'Vestige',
    category: 'Packaging',
    year: 2025,
    tags: ['Packaging', 'Brand', 'Print'],
    summary: 'Packaging design for an apothecary brand rooted in traditional craft.',
    description: `Vestige makes remedies the way they were made before mass production — slowly, seasonally, with restraint. The packaging needed to say all of that without saying any of it. We worked through 40 rounds of print proofs to find a paper stock, printing technique, and palette that felt genuinely old, not vintage-costuming.`,
    heroColor: '#2a1f14',
    accentColor: '#c8a96e',
    images: ['1013', '1022', '1031'],
    featured: false,
    index: 4,
  },
  {
    slug: 'arc-brand',
    title: 'Arc',
    category: 'Brand Identity',
    year: 2023,
    tags: ['Brand', 'Identity', 'Strategy'],
    summary: 'Strategic rebrand for a climate technology company at Series B.',
    description: `Arc entered its Series B still carrying the visual language of its seed round — functional, earnest, forgettable. We rebuilt the brand around a central tension: the urgency of the problem versus the precision of the solution. The result is a system that can hold that tension across every investor deck, press moment, and product surface.`,
    heroColor: '#0f2417',
    accentColor: '#2bff6e',
    images: ['1016', '1025', '1034'],
    featured: false,
    index: 5,
  },
  {
    slug: 'nocturne-identity',
    title: 'Nocturne',
    category: 'Brand Identity',
    year: 2023,
    tags: ['Brand', 'Hospitality', 'Interior'],
    summary: 'Brand world for a new generation members\' club in London.',
    description: `Nocturne is for the people who built the city after hours. The brand had to feel like belonging — to something real, earned, without showing off. We created a visual world that operates in shadow: type that emerges from darkness, materials that reward touch, a mark that you wear rather than display.`,
    heroColor: '#0e0c1a',
    accentColor: '#9b7fe8',
    images: ['1010', '1019', '1028'],
    featured: false,
    index: 6,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
