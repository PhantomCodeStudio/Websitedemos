import { Link } from 'react-router-dom';
import Reveal from '../../components/RevealOnScroll';
import styles from './HomeCTA.module.css';

export default function HomeCTA() {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className={styles.container}>
        <Reveal className={styles.inner}>
          <div className={styles.content}>
            <span className="text-eyebrow" style={{ color: 'rgba(243,241,236,.4)' }}>
              Let's work together
            </span>
            <h2 id="cta-heading" className={styles.headline}>
              Have something<br />
              worth building?
            </h2>
            <p className={styles.sub}>
              We take on a small number of projects each year.
              Tell us what you're working on.
            </p>
          </div>
          <div className={styles.actions}>
            <Link to="/contact" className={styles.primaryBtn}>
              Start a conversation →
            </Link>
            <a href="mailto:studio@phantom.work" className={styles.emailLink}>
              studio@phantom.work
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
