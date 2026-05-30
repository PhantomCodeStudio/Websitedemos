import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import WorkDetail from './pages/WorkDetail';
import Studio from './pages/Studio';
import Journal from './pages/Journal';
import JournalDetail from './pages/JournalDetail';
import Contact from './pages/Contact';
import { initLenis, destroyLenis } from './lib/lenis';
import { destroyRevealObserver } from './lib/reveal';
import styles from './App.module.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    initLenis();
    return () => {
      destroyLenis();
      destroyRevealObserver();
    };
  }, []);

  return (
    <div className={styles.app}>
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <ScrollToTop />
      <Nav />
      <div
        className={styles.pageWrap}
        key={location.pathname}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<WorkDetail />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:slug" element={<JournalDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
