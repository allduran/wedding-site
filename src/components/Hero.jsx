import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

// Inline SVG floral as decorative element
function FloralLeft() {
  return (
    <svg className={styles.floralLeft} viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M100 280 Q60 220 40 160 Q20 100 60 60 Q80 40 100 50" stroke="#b8965a" strokeWidth="0.8" strokeOpacity="0.4" fill="none"/>
      <path d="M100 280 Q140 220 160 160 Q180 100 140 60 Q120 40 100 50" stroke="#b8965a" strokeWidth="0.8" strokeOpacity="0.4" fill="none"/>
      <ellipse cx="100" cy="50" rx="12" ry="18" fill="#b8965a" fillOpacity="0.15" stroke="#b8965a" strokeWidth="0.6" strokeOpacity="0.5"/>
      <ellipse cx="55" cy="110" rx="8" ry="13" fill="#b8965a" fillOpacity="0.1" stroke="#b8965a" strokeWidth="0.6" strokeOpacity="0.4" transform="rotate(-20 55 110)"/>
      <ellipse cx="145" cy="110" rx="8" ry="13" fill="#b8965a" fillOpacity="0.1" stroke="#b8965a" strokeWidth="0.6" strokeOpacity="0.4" transform="rotate(20 145 110)"/>
      <circle cx="100" cy="50" r="4" fill="#b8965a" fillOpacity="0.35"/>
      <path d="M70 170 Q80 155 100 160 Q120 155 130 170" stroke="#b8965a" strokeWidth="0.6" strokeOpacity="0.35" fill="none"/>
    </svg>
  );
}

export default function Hero() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!parallaxRef.current) return;
      const y = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${y * 0.35}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg} ref={parallaxRef}>
        {/* Gradient backdrop simulating the olive grove atmosphere */}
        <div className={styles.gradientOverlay} />
      </div>
      <div className="noise-overlay" />

      <FloralLeft />

      <div className={styles.content}>
        <p className={`label-caps ${styles.saveTheDate}`}>Save the Date</p>
        <div className={styles.goldenRule} />

        <h1 className={styles.names}>
          <span className={styles.name1}>Elena</span>
          <span className={styles.ampersand}>&amp;</span>
          <span className={styles.name2}>Julian</span>
        </h1>

        <p className={styles.date}>September 14, 2024</p>
        <p className={styles.location}>Sonoma, California</p>

        <a href="#rsvp" className={styles.cta}>
          RSVP Now
        </a>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
