import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styles from './Nav.module.css';
import { cn } from '../../lib/utils';

const links = [
  { to: '/work',    label: 'Work' },
  { to: '/studio',  label: 'Studio' },
  { to: '/journal', label: 'Journal' },
  { to: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close overlay on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Trap scroll & focus when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Scroll detection
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) setOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open]);

  return (
    <>
      <header
        className={cn(styles.header, scrolled && styles.scrolled, open && styles.menuOpen)}
        role="banner"
      >
        <nav className={cn(styles.nav, 'container')} aria-label="Primary navigation">
          <Link to="/" className={styles.logo} aria-label="Phantom Studio — Home">
            Phantom
          </Link>

          {/* Desktop links */}
          <ul className={styles.desktopLinks} role="list">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) => cn(styles.link, isActive && styles.active)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className={styles.actions}>
            <Link to="/contact" className={cn(styles.ctaBtn)}>
              Start a project
            </Link>
            <button
              className={cn(styles.menuBtn, open && styles.menuBtnOpen)}
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              <span className={styles.bar} />
              <span className={styles.bar} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        ref={overlayRef}
        className={cn(styles.overlay, open && styles.overlayOpen)}
        aria-hidden={!open}
        role="dialog"
        aria-label="Navigation menu"
      >
        <div className={cn(styles.overlayInner, 'container')}>
          <nav aria-label="Mobile navigation">
            <ul className={styles.overlayLinks} role="list">
              {links.map(({ to, label }, i) => (
                <li key={to} style={{ '--i': i } as React.CSSProperties}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => cn(styles.overlayLink, isActive && styles.active)}
                    tabIndex={open ? 0 : -1}
                  >
                    <span className={styles.overlayLinkNum}>0{i + 1}</span>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.overlayFooter}>
            <Link
              to="/contact"
              className={cn(styles.overlayCtaBtn)}
              tabIndex={open ? 0 : -1}
            >
              Start a project →
            </Link>
            <p className={styles.overlayContact}>studio@phantom.work</p>
          </div>
        </div>
      </div>
    </>
  );
}
