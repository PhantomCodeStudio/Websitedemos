import Reveal from '../components/RevealOnScroll';
import Marquee from '../components/Marquee';
import { Link } from 'react-router-dom';
import styles from './Studio.module.css';

const team = [
  {
    name: 'Cassian Voss',
    role: 'Founder & Creative Director',
    bio: 'Fifteen years across brand, editorial, and digital. Previously CD at [PLACEHOLDER AGENCY] and creative lead at [PLACEHOLDER COMPANY].',
    imgSeed: 'cassian',
  },
  {
    name: 'Nora Lind',
    role: 'Design Director',
    bio: 'Nora leads identity and print. Her work has been recognised by D&AD, The One Club, and Type Directors Club.',
    imgSeed: 'nora',
  },
  {
    name: 'Rafael Mota',
    role: 'Head of Digital',
    bio: 'Full-stack design engineering. Rafael bridges design and code, leading all web and product work.',
    imgSeed: 'rafael',
  },
  {
    name: 'Elowen Park',
    role: 'Strategy & Brand',
    bio: 'Brand strategy, research, and naming. Elowen has led naming and positioning for 40+ companies across 12 countries.',
    imgSeed: 'elowen',
  },
];

const clients = [
  'Meridian Architecture', 'Forma Objects', 'Signal Payments', 'Vestige Apothecary',
  'Arc Climate', 'Nocturne Club', 'Orion Capital', 'Sable Fashion',
  'Tenet Media', 'Faro Technologies', 'Luma Creative', 'Pier Hotels',
];

const values = [
  {
    title: 'Restraint',
    body: 'We remove before we add. Every element earns its place or it leaves.',
  },
  {
    title: 'Consistency',
    body: 'The work we\'re proudest of isn\'t the most spectacular — it\'s the most consistent.',
  },
  {
    title: 'Longevity',
    body: 'We design for the second year, and the fifth. Not for the launch week.',
  },
  {
    title: 'Collaboration',
    body: 'We\'re not a vendor. We work with clients the way a co-founder works with a founder.',
  },
];

export default function Studio() {
  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <Reveal className={styles.header}>
          <span className="text-eyebrow" style={{ opacity: .5 }}>About us</span>
          <h1 className={styles.pageTitle}>
            A studio built on the<br />
            conviction that most<br />
            brands talk too much.
          </h1>
        </Reveal>

        {/* Intro */}
        <div className={styles.intro}>
          <Reveal variant="left" className={styles.introLabel}>
            <span className="text-eyebrow" style={{ opacity: .5 }}>Our story</span>
          </Reveal>
          <Reveal delay={1} className={styles.introBody}>
            <p>
              Phantom was founded in London in 2018 with a single conviction: that the best brands
              are the ones that know what to leave out. We've spent seven years proving it, working
              with founders, companies, and institutions across four continents.
            </p>
            <p>
              We are a small studio by intention. Four permanent staff, a tight network of
              collaborators, and a deliberate cap on how many projects we take on each year.
              The constraint is the quality control.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Full-width studio image */}
      <Reveal variant="scale" className={styles.studioImage}>
        <img
          src="https://picsum.photos/seed/phantom-studio/1600/800"
          alt="Phantom Studio workspace"
          className={styles.studioImg}
          loading="lazy"
          decoding="async"
        />
      </Reveal>

      <div className={styles.container}>
        {/* Values */}
        <section className={styles.valuesSection} aria-labelledby="values-heading">
          <Reveal>
            <h2 id="values-heading" className={styles.sectionTitle}>
              What we stand for
            </h2>
          </Reveal>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2 === 0 ? 0 : 1) as 0 | 1} className={styles.valueItem}>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueBody}>{v.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className={styles.teamSection} aria-labelledby="team-heading">
          <Reveal className={styles.sectionHeader}>
            <span className="text-eyebrow" style={{ opacity: .5 }}>The team</span>
            <h2 id="team-heading" className={styles.sectionTitle}>People behind the work</h2>
          </Reveal>
          <div className={styles.teamGrid}>
            {team.map((member, i) => (
              <Reveal key={member.name} delay={(i % 2 === 0 ? 0 : 1) as 0 | 1} className={styles.teamCard}>
                <div className={styles.teamThumb}>
                  <img
                    src={`https://picsum.photos/seed/${member.imgSeed}/600/700`}
                    alt={member.name}
                    className={styles.teamImg}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className={styles.teamInfo}>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <p className={styles.teamRole}>{member.role}</p>
                  <p className={styles.teamBio}>{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Clients */}
        <section className={styles.clientsSection} aria-labelledby="clients-heading">
          <Reveal>
            <h2 id="clients-heading" className={styles.sectionTitle}>
              Clients &amp; collaborators
            </h2>
          </Reveal>
          <div className={styles.clientGrid} role="list" aria-label="Client list">
            {clients.map((c) => (
              <span key={c} className={styles.clientItem} role="listitem">{c}</span>
            ))}
          </div>
        </section>
      </div>

      {/* Marquee */}
      <Marquee
        items={['Phantom Studio', 'London', 'New York', 'Est. 2018', 'Brand · Identity · Digital']}
        speed={45}
        inverted
      />

      {/* CTA */}
      <div className={styles.cta}>
        <div className={styles.container}>
          <Reveal className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>
              We're selective about the work we take on.<br />
              That selectivity is why the work is good.
            </h2>
            <Link to="/contact" className={styles.ctaBtn}>
              Talk to us →
            </Link>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
