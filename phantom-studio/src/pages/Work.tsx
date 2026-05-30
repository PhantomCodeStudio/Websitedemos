import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import Reveal from '../components/RevealOnScroll';
import { padIndex } from '../lib/utils';
import styles from './Work.module.css';

export default function Work() {
  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.container}>
        {/* Page header */}
        <Reveal className={styles.header}>
          <div className={styles.headerMeta}>
            <span className="text-eyebrow" style={{ opacity: .5 }}>
              Selected Work — {projects.length} Projects
            </span>
          </div>
          <h1 className={styles.pageTitle}>Our Work</h1>
        </Reveal>

        {/* Project grid */}
        <div className={styles.list}>
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3 === 0 ? 0 : i % 3 === 1 ? 1 : 2) as 0 | 1 | 2}>
              <Link to={`/work/${project.slug}`} className={styles.item}>
                <div
                  className={styles.thumb}
                  style={{ background: project.heroColor }}
                >
                  <img
                    src={`https://picsum.photos/seed/${project.slug}/800/500`}
                    alt={`${project.title} — ${project.category}`}
                    className={styles.thumbImg}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className={styles.thumbOverlay}>
                    <span className={styles.viewLabel}>View case study</span>
                  </div>
                </div>
                <div className={styles.itemMeta}>
                  <span className={styles.itemIndex}>{padIndex(i + 1)}</span>
                  <div className={styles.itemInfo}>
                    <h2 className={styles.itemTitle}>{project.title}</h2>
                    <p className={styles.itemCat}>{project.category} — {project.year}</p>
                  </div>
                  <div className={styles.tags}>
                    {project.tags.slice(0, 3).map((t) => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
