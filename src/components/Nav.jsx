import { useState, useEffect } from 'react';
import styles from './Nav.module.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo}>Keren <em>&amp;</em> Erik</a>
      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {['Our Story','Events','RSVP'].map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase().replace(' ','-')}`} onClick={() => setMenuOpen(false)}>{l}</a>
          </li>
        ))}
        <li><a href="#rsvp" className={styles.cta} onClick={() => setMenuOpen(false)}>RSVP</a></li>
      </ul>
      <button className={styles.burger} onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}
