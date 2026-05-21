import { useRef } from 'react';
import { useCountdown } from '../hooks/useCountdown';
import styles from './Events.module.css';

function TiltCard({ children, className }) {
  const ref = useRef(null);
  const move = e => {
    const el = ref.current; if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = ((e.clientX - left) / width  - 0.5) * 14;
    const y = ((e.clientY - top)  / height - 0.5) * 10;
    el.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${-y}deg) translateZ(10px)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = ''; };
  return (
    <div ref={ref} className={className} onMouseMove={move} onMouseLeave={reset}
      style={{ transition: 'transform 0.15s ease', willChange: 'transform', cursor: 'default' }}>
      {children}
    </div>
  );
}

function CountdownBlock() {
  const { days, hours, minutes, seconds } = useCountdown('2026-09-14T16:00:00');
  return (
    <div className={`${styles.countdownCard} reveal d3`}>
      <span className={`label-caps ${styles.cardLabel}`} style={{color:'rgba(212,147,90,0.7)'}}>Until we say I do</span>
      <div className={styles.countdownUnits}>
        {[['days',days],['hrs',hours],['min',minutes],['sec',seconds]].map(([l,v],i,a) => (
          <div key={l} className={styles.unit}>
            <span className={styles.unitNum}>{String(v).padStart(2,'0')}</span>
            <span className={styles.unitLabel}>{l}</span>
            {i < a.length-1 && <span className={styles.unitSep}>:</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Events() {
  return (
    <section id="details" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.chapterRow}>
          <span className={`label-caps reveal ${styles.chapter}`}>Logística</span>
          <span className={styles.chapterLine} />
        </div>
        <div className={styles.bento}>
          <div className={`${styles.photoBanner} reveal-scale`}>
            <img src="./photo-laugh.jpg" alt="Erik and Keren laughing" />
            <div className={styles.bannerOverlay} />
            <div className={styles.bannerText}>
              <p className={`label-caps ${styles.bannerLabel}`}>Saturday · 14 September 2025</p>
              <h2 className={styles.bannerHeadline}>The Day</h2>
            </div>
          </div>
          <TiltCard className={`glass ${styles.eventCard} reveal d1`}>
            <div className={styles.eventIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2L2 7v15h20V7L12 2zM8 22V12h8v10"/></svg>
            </div>
            <span className={`label-caps ${styles.cardLabel}`}>Ceremonia</span>
            <h3 className={styles.eventTitle}>Ceremony</h3>
            <div className={styles.copperRule} />
            <p className={styles.eventTime}>Sábado, 14 de Septiembre · 16:00</p>
            <p className={styles.eventVenue}>Capilla del Bosque Antiguo</p>
            <p className={styles.eventAddress}>Sonoma, California</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className={styles.mapLink}>Get Directions →</a>
          </TiltCard>
          <TiltCard className={`glass ${styles.eventCard} reveal d2`}>
            <div className={styles.eventIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>
            </div>
            <span className={`label-caps ${styles.cardLabel}`}>Recepción</span>
            <h3 className={styles.eventTitle}>Reception</h3>
            <div className={styles.copperRule} />
            <p className={styles.eventTime}>Continuación · 19:00</p>
            <p className={styles.eventVenue}>El Invernadero Editorial</p>
            <p className={styles.eventAddress}>456 Oak Ridge, Sonoma</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className={styles.mapLink}>Get Directions →</a>
          </TiltCard>
          <CountdownBlock />
        </div>
      </div>
    </section>
  );
}