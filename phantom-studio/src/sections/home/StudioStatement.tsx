import Reveal from '../../components/RevealOnScroll';
import styles from './StudioStatement.module.css';

export default function StudioStatement() {
  return (
    <section className={styles.section} aria-labelledby="statement-heading">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.labelCol}>
            <Reveal>
              <span className="text-eyebrow" style={{ opacity: .5 }}>What we believe</span>
            </Reveal>
          </div>
          <div className={styles.contentCol}>
            <Reveal delay={1}>
              <p id="statement-heading" className={styles.statement}>
                Most brands are built to impress<br />
                for a moment. We build for the<br />
                <em>long after.</em>
              </p>
            </Reveal>
            <Reveal delay={2} className={styles.bodyText}>
              <p>
                Phantom is a creative studio that moves between strategy, identity, and digital.
                We work with a handful of clients each year — founders who want to mean something,
                companies at inflection points, institutions that need to find their voice again.
              </p>
              <p>
                We don't use the word "brand" to mean logo. We use it to mean the whole felt
                sense of an organisation: what it says, how it looks, what it does, and whether
                any of it is consistent. That consistency, over time, is what we build.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
