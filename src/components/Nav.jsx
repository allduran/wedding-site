import { useState, useEffect } from 'react';
import { useLang } from '../useLang';
import styles from './Nav.module.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, t, toggle } = useLang();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#hero" className={styles.logo}>E&amp;K</a>

        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {/* Close button inside menu */}
          <li className={styles.closeItem}>
            <button className={styles.closeBtn} onClick={close} aria-label="Close menu">✕</button>
          </li>
          {[
            ['#story',   t.nav.story],
            ['#details', t.nav.details],
            ['#rsvp',    t.nav.rsvp],
          ].map(([h, l]) => (
            <li key={h}>
              <a href={h} onClick={close}>{l}</a>
            </li>
          ))}
          {/* Lang toggle inside mobile menu too */}
          <li className={styles.langItem}>
            <button className={styles.langBtnMobile} onClick={() => { toggle(); close(); }}>
              {lang === 'en' ? 'Español' : 'English'}
            </button>
          </li>
        </ul>

        {/* Overlay */}
        {open && <div className={styles.overlay} onClick={close} />}

        <div className={styles.actions}>
          <button className={styles.langBtn} onClick={toggle} aria-label="Change language">
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
          <a href="#rsvp" className={styles.cta}>{t.nav.contact}</a>
        </div>

        <button className={styles.burger} onClick={() => setOpen(v => !v)} aria-label="menu">
          <span /><span /><span />
        </button>
      </nav>
    </>
  );
}