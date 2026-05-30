import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

export default function Hero() {
  const wordRef = useRef<HTMLSpanElement>(null);

  // Subtle parallax on scroll
  useEffect(() => {
    const el = wordRef.current;
    if (!el) return;

    const handler = () => {
      const y = window.scrollY;
      el.style.transform = `translateY(${y * 0.18}px)`;
    };

    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <span className="text-eyebrow">Creative Studio — Est. 2018</span>
          <span className={styles.divider} aria-hidden="true" />
          <span className="text-eyebrow">London · New York</span>
        </div>

        <h1 className={styles.headline}>
          <span className={styles.lineWrap}>
            <span ref={wordRef} className={styles.displayLine}>
              We build<br />
              brands&nbsp;&amp;<br />
              experiences
            </span>
          </span>
          <span className={styles.sub}>that don't disappear.</span>
        </h1>

        <div className={styles.bottom}>
          <p className={styles.descriptor}>
            Phantom is a brand and experience studio for founders,<br className={styles.br} />
            companies, and institutions building things that matter.
          </p>
          <div className={styles.actions}>
            <Link to="/work" className={styles.workBtn}>
              See our work
              <span className={styles.arrow} aria-hidden="true">↓</span>
            </Link>
            <Link to="/contact" className={styles.contactLink}>
              Start a project →
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className="text-eyebrow">Scroll</span>
      </div>
    </section>
  );
}
