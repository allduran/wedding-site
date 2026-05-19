import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const imgRef = useRef(null);
  useEffect(() => {
    const fn = () => {
      if (imgRef.current) imgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.imgWrap} ref={imgRef}>
        <img src="./photo-bridge.jpg" alt="Keren and Erik on a bridge" className={styles.img} />
      </div>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={`label-caps ${styles.eyebrow}`}>We're getting married</p>
        <span className={`gold-rule ${styles.rule}`} />
        <h1 className={styles.names}>
          <span className={styles.n1}>Keren</span>
          <span className={styles.amp}>&amp;</span>
          <span className={styles.n2}>Erik</span>
        </h1>
        <p className={styles.date}>September 14 · 2025</p>
        <a href="#rsvp" className={styles.cta}>RSVP</a>
      </div>

      {/* Scroll hint */}
      <div className={styles.scroll}>
        <span className={styles.scrollLine} />
        <span className="label-caps" style={{color:'rgba(255,255,255,0.4)', fontSize:9}}>Scroll</span>
      </div>
    </section>
  );
}
