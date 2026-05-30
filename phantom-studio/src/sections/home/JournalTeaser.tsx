import { Link } from 'react-router-dom';
import { journalPosts } from '../../data/journal';
import Reveal from '../../components/RevealOnScroll';
import styles from './JournalTeaser.module.css';

export default function JournalTeaser() {
  const posts = journalPosts.slice(0, 3);

  return (
    <section className={styles.section} aria-labelledby="journal-heading">
      <div className={styles.container}>
        <Reveal className={styles.header}>
          <span className="text-eyebrow" style={{ opacity: .5 }}>Journal</span>
          <div className={styles.headerRight}>
            <h2 id="journal-heading" className={styles.sectionTitle}>
              Thinking out loud
            </h2>
            <Link to="/journal" className={styles.viewAll}>
              All writing →
            </Link>
          </div>
        </Reveal>

        <div className={styles.posts}>
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={(i as 0 | 1 | 2)}>
              <Link to={`/journal/${post.slug}`} className={styles.post}>
                <div className={styles.postMeta}>
                  <span className={styles.category}>{post.category}</span>
                  <span className={styles.readTime}>{post.readTime} read</span>
                </div>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <div className={styles.postFooter}>
                  <span className={styles.date}>
                    {new Date(post.date).toLocaleDateString('en-GB', {
                      day: 'numeric', month: 'long', year: 'numeric'
                    })}
                  </span>
                  <span className={styles.arrow}>→</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
