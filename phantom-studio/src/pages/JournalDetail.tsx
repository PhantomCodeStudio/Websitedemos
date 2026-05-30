import { useParams, Link, Navigate } from 'react-router-dom';
import { getPost, journalPosts } from '../data/journal';
import Reveal from '../components/RevealOnScroll';
import styles from './JournalDetail.module.css';

export default function JournalDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPost(slug ?? '');

  if (!post) return <Navigate to="/journal" replace />;

  const currentIndex = journalPosts.findIndex((p) => p.slug === slug);
  const next = journalPosts[(currentIndex + 1) % journalPosts.length];

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.container}>
        <Reveal className={styles.header}>
          <Link to="/journal" className={styles.back}>← Journal</Link>
          <div className={styles.meta}>
            <span className={styles.category}>{post.category}</span>
            <span className={styles.divider} aria-hidden="true">·</span>
            <span className={styles.readTime}>{post.readTime} read</span>
            <span className={styles.divider} aria-hidden="true">·</span>
            <time dateTime={post.date} className={styles.date}>
              {new Date(post.date).toLocaleDateString('en-GB', {
                day: 'numeric', month: 'long', year: 'numeric'
              })}
            </time>
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.excerpt}>{post.excerpt}</p>
        </Reveal>

        {/* Hero colour block */}
        <Reveal variant="scale" className={styles.hero} style={{ background: post.heroColor }}>
          <></>
        </Reveal>

        {/* Body */}
        <div className={styles.body}>
          <Reveal delay={1} className={styles.bodyInner}>
            {post.body.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </Reveal>
        </div>

        {/* Next post */}
        <Reveal className={styles.next}>
          <span className="text-eyebrow" style={{ opacity: .5 }}>Next</span>
          <Link to={`/journal/${next.slug}`} className={styles.nextLink}>
            <span className={styles.nextCat}>{next.category}</span>
            <h2 className={styles.nextTitle}>{next.title}</h2>
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
