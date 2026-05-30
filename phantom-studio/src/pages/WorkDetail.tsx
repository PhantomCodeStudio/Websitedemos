import { useParams, Link, Navigate } from 'react-router-dom';
import { getProject, projects } from '../data/projects';
import Reveal from '../components/RevealOnScroll';
import styles from './WorkDetail.module.css';

export default function WorkDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProject(slug ?? '');

  if (!project) return <Navigate to="/work" replace />;

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <main id="main-content" className={styles.page}>
      {/* Hero */}
      <div
        className={styles.hero}
        style={{ background: project.heroColor }}
        aria-label={`${project.title} hero image`}
      >
        <img
          src={`https://picsum.photos/seed/${project.slug}/1600/900`}
          alt={`${project.title} — ${project.category}`}
          className={styles.heroImg}
          loading="eager"
          decoding="async"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroBadge}>
          <span className={styles.badgeCat}>{project.category}</span>
          <span className={styles.badgeYear}>{project.year}</span>
        </div>
      </div>

      <div className={styles.container}>
        {/* Project header */}
        <Reveal className={styles.header}>
          <div className={styles.breadcrumb}>
            <Link to="/work" className={styles.back}>← All work</Link>
          </div>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.summary}>{project.summary}</p>
        </Reveal>

        <div className={styles.body}>
          {/* Metadata sidebar */}
          <Reveal variant="left" className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Category</span>
              <span className={styles.metaValue}>{project.category}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Year</span>
              <span className={styles.metaValue}>{project.year}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Services</span>
              <div className={styles.tags}>
                {project.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Description */}
          <Reveal delay={1} className={styles.desc}>
            <p>{project.description}</p>
          </Reveal>
        </div>

        {/* Image gallery */}
        <div className={styles.gallery}>
          <Reveal variant="scale" className={styles.galleryMain}>
            <img
              src={`https://picsum.photos/seed/${project.slug}-2/1200/800`}
              alt={`${project.title} — detail view 1`}
              className={styles.galleryImg}
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <div className={styles.galleryGrid}>
            {[1, 2].map((n) => (
              <Reveal key={n} variant="scale" delay={(n as 1 | 2)}>
                <img
                  src={`https://picsum.photos/seed/${project.slug}-${n + 2}/800/600`}
                  alt={`${project.title} — detail view ${n + 1}`}
                  className={styles.galleryImg}
                  loading="lazy"
                  decoding="async"
                />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Next project */}
        <Reveal className={styles.nextProject}>
          <span className="text-eyebrow" style={{ opacity: .5 }}>Next project</span>
          <Link to={`/work/${next.slug}`} className={styles.nextLink}>
            <h2 className={styles.nextTitle}>{next.title}</h2>
            <span className={styles.nextCat}>{next.category}</span>
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
