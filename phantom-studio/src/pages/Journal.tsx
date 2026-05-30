import { Link } from 'react-router-dom';
import { journalPosts } from '../data/journal';
import Reveal from '../components/RevealOnScroll';
import styles from './Journal.module.css';

export default function Journal() {
  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.container}>
        <Reveal className={styles.header}>
          <span className="text-eyebrow" style={{ opacity: .5 }}>
            Journal — {journalPosts.length} essays
          </span>
          <h1 className={styles.pageTitle}>Thinking out loud</h1>
          <p className={styles.sub}>
            Notes on craft, strategy, and the strange business of making things look right.
          </p>
        </Reveal>

        <div className={styles.posts}>
          {journalPosts.map((post, i) => (
            <Reveal key={post.slug} delay={(i < 3 ? i : 0) as 0 | 1 | 2}>
              <Link to={`/journal/${post.slug}`} className={styles.post}>
                <div
                  className={styles.postThumb}
                  style={{ background: post.heroColor }}
                  aria-hidden="true"
                />
                <div className={styles.postContent}>
                  <div className={styles.postMeta}>
                    <span className={styles.category}>{post.category}</span>
                    <span className={styles.readTime}>{post.readTime}</span>
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <div className={styles.postFooter}>
                    <span className={styles.date}>
                      {new Date(post.date).toLocaleDateString('en-GB', {
                        day: 'numeric', month: 'long', year: 'numeric'
                      })}
                    </span>
                    <span className={styles.arrow}>Read →</span>
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
