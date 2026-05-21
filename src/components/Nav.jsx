import { useState, useEffect } from 'react';
import styles from './Nav.module.css';
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo}>E&amp;K</a>
      <ul className={`${styles.links} ${open ? styles.open : ''}`}>
        {[['#story','Our Story'],['#details','Event Details'],['#rsvp','RSVP']].map(([h,l]) => (
          <li key={h}><a href={h} onClick={() => setOpen(false)}>{l}</a></li>
        ))}
      </ul>
      <a href="#rsvp" className={styles.cta}>Contact</a>
      <button className={styles.burger} onClick={() => setOpen(v=>!v)} aria-label="menu">
        <span/><span/><span/>
      </button>
    </nav>
  );
}