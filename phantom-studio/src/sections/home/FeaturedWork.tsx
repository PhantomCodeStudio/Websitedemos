import { Link } from 'react-router-dom';
import { getFeaturedProjects } from '../../data/projects';
import Reveal from '../../components/RevealOnScroll';
import { padIndex } from '../../lib/utils';
import styles from './FeaturedWork.module.css';

export default function FeaturedWork() {
  const projects = getFeaturedProjects();

  return (
    <section className={styles.section} aria-labelledby="work-heading">
      <div className={styles.container}>
        <Reveal className={styles.header}>
          <div className={styles.headerLeft}>
            <span className="text-eyebrow" style={{ opacity: .5 }}>Selected Work</span>
          </div>
          <Link to="/work" className={styles.viewAll}>
            View all work →
          </Link>
        </Reveal>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <Reveal
              key={project.slug}
              delay={(i % 2 === 0 ? 0 : 2) as 0 | 2}
              className={styles.item}
            >
              <Link to={`/work/${project.slug}`} className={styles.card} aria-label={project.title}>
                {/* Placeholder image block */}
                <div
                  className={styles.thumb}
                  style={{ background: project.heroColor }}
                  role="img"
                  aria-label={`${project.title} project thumbnail`}
                >
                  <img
                    src={`https://picsum.photos/seed/${project.slug}/900/600`}
                    alt={`${project.title} — ${project.category}`}
                    className={styles.thumbImg}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className={styles.thumbOverlay}>
                    <span className={styles.viewLabel}>View case study</span>
                  </div>
                </div>
                <div className={styles.meta}>
                  <div className={styles.metaLeft}>
                    <span className={styles.index}>{padIndex(i + 1)}</span>
                    <div>
                      <h3 className={styles.title}>{project.title}</h3>
                      <p className={styles.category}>{project.category}</p>
                    </div>
                  </div>
                  <span className={styles.year}>{project.year}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
