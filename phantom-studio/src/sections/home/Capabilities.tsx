import Reveal from '../../components/RevealOnScroll';
import styles from './Capabilities.module.css';
import { padIndex } from '../../lib/utils';

const capabilities = [
  {
    title: 'Brand Strategy',
    description: 'Positioning, naming, narrative, and the why behind everything else.',
    tags: ['Positioning', 'Naming', 'Narrative', 'Research'],
  },
  {
    title: 'Identity Design',
    description: 'Marks, systems, type, colour, and the full range of a visual language.',
    tags: ['Logo', 'Type System', 'Colour', 'Guidelines'],
  },
  {
    title: 'Digital Experience',
    description: 'Websites and products built for longevity — technically clean, deliberately designed.',
    tags: ['Web Design', 'Development', 'Motion', 'UX'],
  },
  {
    title: 'Campaign & Art Direction',
    description: 'Ideas that earn attention without demanding it. Content, campaigns, editorial.',
    tags: ['Art Direction', 'Photography', 'Print', 'Social'],
  },
  {
    title: 'Packaging & Print',
    description: 'Tactile design for the physical world — packaging, publications, print systems.',
    tags: ['Packaging', 'Editorial', 'Print Production'],
  },
  {
    title: 'Motion & Film',
    description: 'Brand motion, title sequences, and short films for clients who want to move.',
    tags: ['Brand Motion', 'Film', 'Animation'],
  },
];

export default function Capabilities() {
  return (
    <section className={styles.section} aria-labelledby="capabilities-heading">
      <div className={styles.container}>
        <Reveal className={styles.header}>
          <span className="text-eyebrow" style={{ opacity: .5 }}>Capabilities</span>
          <h2 id="capabilities-heading" className={styles.sectionTitle}>
            What we do
          </h2>
        </Reveal>

        <div className={styles.list} role="list">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={(i < 3 ? 0 : 1) as 0 | 1} className={styles.item} as="article">
              <div className={styles.itemTop}>
                <span className={styles.num}>{padIndex(i + 1)}</span>
                <h3 className={styles.title}>{cap.title}</h3>
              </div>
              <p className={styles.desc}>{cap.description}</p>
              <div className={styles.tags} aria-label="Related services">
                {cap.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
