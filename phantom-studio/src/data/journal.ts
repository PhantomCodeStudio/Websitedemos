export interface JournalPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  body: string;
  heroColor: string;
}

export const journalPosts: JournalPost[] = [
  {
    slug: 'on-restraint',
    title: 'On Restraint',
    category: 'Craft',
    date: '2025-04-12',
    readTime: '6 min',
    excerpt: 'The best design decisions are often the ones no one notices. A short essay on the discipline of leaving things out.',
    body: `Every project we take on begins with subtraction. Before we design anything, we spend time removing — assumptions, clichés, borrowed solutions, habits. What is left after that process is something closer to the actual problem.

Restraint is not minimalism. Minimalism can be its own kind of decoration — surfaces bare not because there is nothing to say, but because bare surfaces have become fashionable. Restraint is different: it is the discipline of letting the work speak at the volume it actually needs.

We think about this most when we are choosing type. Display type at 14 pixels is not restrained — it is timid. Display type at 180 pixels in a context that earns it is restrained — it says exactly one thing, loudly, and then stops. The question is always: what does this element need to communicate, and what is the minimum it takes to communicate that clearly?

The same applies to motion. We animate because something has changed, not because movement signals sophistication. Every animation in our work passes a single test: if it were removed, would the communication be worse? If not, it goes.

This is harder than it sounds. Addition is easy and feels like progress. Removal feels like risk — like we might have forgotten something, left something unresolved. The clients who trust us most are the ones who have learned to read absence as intention.`,
    heroColor: '#1a1410',
  },
  {
    slug: 'designing-for-trust',
    title: 'Designing for Trust',
    category: 'Strategy',
    date: '2025-03-03',
    readTime: '8 min',
    excerpt: 'What signals trust in a brand, and why most companies mistake competence for credibility.',
    body: `Trust is not communicated through polish. It is communicated through consistency — through the accumulation of small, kept promises that build a picture of reliability over time. This is why a beautifully designed brand can feel hollow within weeks of launch, and why some of the most trusted brands in the world operate with visual systems that look almost boring.

When we work on a brand's visual identity, we spend a disproportionate amount of time on what we call the friction surfaces — the confirmation email, the error state, the invoice, the out-of-stock notice. These are the moments when a brand is not performing for a camera. They are the moments that actually build trust, because they are the moments when expectations are tested.

A brand that handles its friction surfaces with the same care as its launch campaign is a brand worth trusting. The customer — even if they never articulate it — feels the difference.`,
    heroColor: '#101a1f',
  },
  {
    slug: 'the-brief-is-the-work',
    title: 'The Brief is the Work',
    category: 'Process',
    date: '2025-01-20',
    readTime: '5 min',
    excerpt: 'How we approach the briefing process, and why the quality of a brief almost always predicts the quality of what follows.',
    body: `We have never produced our best work against a bad brief. This sounds obvious, but it has a practical consequence: we spend as much time working on the brief as we do on the work itself.

A brief is not a list of deliverables. A brief is a shared model of reality — shared between the client and the studio. It contains an honest account of where the client is, where they want to be, and what is actually standing in the way. It contains the constraints that matter and is explicit about the constraints that are negotiable. It answers the question: what would winning look like?

Most briefs we receive don't do any of this. They describe symptoms (our brand feels old) without diagnosing causes (our brand was designed for a different customer in a different market). They list deliverables (new website, new logo) without describing outcomes (we want customers to feel X when they encounter us). They impose constraints that are actually assumptions (it must be blue — because it has always been blue).

Our briefing process is designed to surface all of this. It is sometimes uncomfortable. Clients occasionally push back on the questions. But the projects that follow from a genuinely good brief are the ones that end up on this site.`,
    heroColor: '#1f1a10',
  },
];

export function getPost(slug: string): JournalPost | undefined {
  return journalPosts.find((p) => p.slug === slug);
}
