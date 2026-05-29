import { useEffect, useRef, useState } from 'react';
import { useLang } from '../useLang';
import styles from './Hero.module.css';

export default function Hero() {
  const imgRef  = useRef(null);
  const textRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const { t } = useLang();

  useEffect(() => { setTimeout(() => setLoaded(true), 80); }, []);

  useEffect(() => {
    const fn = () => {
      const y = window.scrollY;
      if (imgRef.current)  imgRef.current.style.transform  = `scale(${loaded?1:1.1}) translateY(${y*0.3}px)`;
      if (textRef.current) textRef.current.style.transform = `translateY(${y*0.15}px)`;
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, [loaded]);

  const handleMouseMove = e => {
    if (!textRef.current) return;
    const { left, top, width, height } = textRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width  - 0.5) * 12;
    const y = ((e.clientY - top)  / height - 0.5) * 8;
    textRef.current.style.textShadow = `${x*2}px ${y*2}px 40px rgba(184,115,51,0.3)`;
  };

  return (
    <section id="hero" className={styles.hero} onMouseMove={handleMouseMove}>
      <div className={styles.imgWrap}>
        <img ref={imgRef} src="./photo-close.jpg" alt="Erik y Keren"
          className={`${styles.img} ${loaded ? styles.imgLoaded : ''}`} />
        <div className={styles.overlay} />
        <div className={styles.vignette} />
      </div>
      <div className={styles.content} ref={textRef}>
        <h1 className={styles.names}>Erik &amp; Keren</h1>
        <div className={styles.metaRow}>
          <span className={styles.metaDot} />
          <p className={styles.meta}>{t.hero.date}</p>
          <span className={styles.metaDot} />
          <p className={styles.meta}>Yonkers, NY</p>
          <span className={styles.metaDot} />
        </div>
        <a href="#rsvp" className={styles.heroCta}>{t.hero.cta}</a>
      </div>
      <div className={styles.scrollHint}>
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>{t.hero.scroll}</span>
      </div>
    </section>
  );
}