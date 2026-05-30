import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const nav = [
  { to: '/work',    label: 'Work' },
  { to: '/studio',  label: 'Studio' },
  { to: '/journal', label: 'Journal' },
  { to: '/contact', label: 'Contact' },
];

const social = [
  { href: '#', label: 'Instagram' },
  { href: '#', label: 'LinkedIn' },
  { href: '#', label: 'X / Twitter' },
];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>Phantom</Link>
            <p className={styles.tagline}>
              We design things that<br />outlast the moment.
            </p>
          </div>
          <nav className={styles.footerNav} aria-label="Footer navigation">
            <div className={styles.navCol}>
              <p className={styles.navLabel}>Studio</p>
              <ul role="list">
                {nav.map(({ to, label }) => (
                  <li key={to}><Link to={to} className={styles.navLink}>{label}</Link></li>
                ))}
              </ul>
            </div>
            <div className={styles.navCol}>
              <p className={styles.navLabel}>Follow</p>
              <ul role="list">
                {social.map(({ href, label }) => (
                  <li key={label}>
                    <a href={href} className={styles.navLink} target="_blank" rel="noopener noreferrer">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.navCol}>
              <p className={styles.navLabel}>Contact</p>
              <ul role="list">
                <li><a href="mailto:studio@phantom.work" className={styles.navLink}>studio@phantom.work</a></li>
                <li><a href="tel:+12125551234" className={styles.navLink}>+1 212 555 1234</a></li>
                <li className={styles.navMuted}>London · New York</li>
              </ul>
            </div>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.legal}>
            © {new Date().getFullYear()} Phantom Studio. All rights reserved.
          </p>
          <p className={styles.legal}>
            <Link to="/contact">Start a project →</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
