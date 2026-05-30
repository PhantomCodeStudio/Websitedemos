import { useState } from 'react';
import Reveal from '../components/RevealOnScroll';
import styles from './Contact.module.css';

const services = [
  'Brand Identity', 'Digital Experience', 'Campaign & Art Direction',
  'Packaging & Print', 'Strategy & Naming', 'Motion & Film',
];

export default function Contact() {
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggle = (s: string) =>
    setSelected((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Left — info */}
          <div className={styles.info}>
            <Reveal className={styles.header}>
              <span className="text-eyebrow" style={{ opacity: .5 }}>Get in touch</span>
              <h1 className={styles.pageTitle}>
                Let's build<br />
                something<br />
                together.
              </h1>
            </Reveal>
            <Reveal delay={1} className={styles.details}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Email</span>
                <a href="mailto:studio@phantom.work" className={styles.detailValue}>
                  studio@phantom.work
                </a>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Phone</span>
                <a href="tel:+12125551234" className={styles.detailValue}>
                  +1 212 555 1234
                </a>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Locations</span>
                <span className={styles.detailValue}>London · New York</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>New work</span>
                <span className={styles.detailValue}>
                  Accepting select projects for Q3 2025
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right — form */}
          <Reveal delay={1} className={styles.formWrap}>
            {submitted ? (
              <div className={styles.success} role="alert">
                <h2 className={styles.successTitle}>Message received.</h2>
                <p className={styles.successSub}>
                  We read every enquiry ourselves. You'll hear from us within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      className={styles.input}
                      placeholder="Your name"
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      className={styles.input}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="company" className={styles.label}>Company / Project</label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    className={styles.input}
                    placeholder="What are you working on?"
                  />
                </div>

                <fieldset className={styles.services}>
                  <legend className={styles.label}>
                    Services (select all that apply)
                  </legend>
                  <div className={styles.serviceGrid}>
                    {services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        className={`${styles.chip} ${selected.includes(s) ? styles.chipActive : ''}`}
                        onClick={() => toggle(s)}
                        aria-pressed={selected.includes(s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div className={styles.field}>
                  <label htmlFor="message" className={styles.label}>Tell us about your project</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className={styles.textarea}
                    placeholder="What are you building, and why does it matter?"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="budget" className={styles.label}>Budget range</label>
                  <select id="budget" name="budget" className={styles.select}>
                    <option value="">Select a range</option>
                    <option value="25-50k">$25k – $50k</option>
                    <option value="50-100k">$50k – $100k</option>
                    <option value="100-250k">$100k – $250k</option>
                    <option value="250k+">$250k+</option>
                  </select>
                </div>

                <button type="submit" className={styles.submit}>
                  Send enquiry →
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </main>
  );
}
