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
  const { days, hours, minutes, seconds } = useCountdown('2026-09-19T15:00:00');
  return (
    <div className={styles.countdownCard}>
      <span className={`label-caps ${styles.cardLabel}`} style={{color:'rgba(212,147,90,0.7)'}}>Hasta el gran día</span>
      <div className={styles.countdownUnits}>
        {[['días',days],['hrs',hours],['min',minutes],['seg',seconds]].map(([l,v],i,a) => (
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
          <span className={`label-caps reveal ${styles.chapter}`}>Detalles</span>
          <span className={styles.chapterLine} />
        </div>
        <div className={styles.bento}>
          <div className={`${styles.photoBanner} reveal-scale`}>
            <img src="./photo-laugh.jpg" alt="Erik y Keren riendo" />
            <div className={styles.bannerOverlay} />
            <div className={styles.bannerText}>
              <p className={`label-caps ${styles.bannerLabel}`}>Sábado · 19 Septiembre 2026</p>
              <h2 className={styles.bannerHeadline}>El Día</h2>
            </div>
          </div>
          <TiltCard className={`glass ${styles.eventCard} reveal d1`}>
            <div className={styles.eventIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 4v16" />
                <path d="M9 7h6" />
                <path d="M5 11l7-5 7 5" />
                <path d="M6 11v9h12v-9" />
                <path d="M9 20v-5h6v5" />
              </svg>
            </div>
            <span className={`label-caps ${styles.cardLabel}`}>Ceremonia</span>
            <h3 className={styles.eventTitle}>Ceremonia</h3>
            <div className={styles.copperRule} />
            <p className={styles.eventTime}>Sábado, 19 de Septiembre · 3:00 PM - 4:00 PM</p>
            <p className={styles.eventVenue}>Ceremonia</p>
            <p className={styles.eventAddress}>112 Radford St, Yonkers, NY 10705</p>
            <a href="https://www.google.com/maps/search/?api=1&query=112+Radford+St,+Yonkers,+NY+10705" target="_blank" rel="noopener noreferrer" className={styles.mapLink}>Cómo llegar →</a>
          </TiltCard>
          <TiltCard className={`glass ${styles.eventCard} reveal d2`}>
            <div className={styles.eventIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 4l6 2" />
                <path d="M14.5 6H9.5" />
                <path d="M9 6c0 2.4.7 4 1.5 5.4.5.8 1 1.6 1.5 2.6.5-1 1-1.8 1.5-2.6.8-1.4 1.5-3 1.5-5.4" />
                <path d="M12 14v5" />
                <path d="M9 19h6" />
              </svg>
            </div>
            <span className={`label-caps ${styles.cardLabel}`}>Recepción</span>
            <h3 className={styles.eventTitle}>Recepción</h3>
            <div className={styles.copperRule} />
            <p className={styles.eventTime}>Cocktail · 4:00 PM - 5:00 PM</p>
            <p className={styles.eventTime}>Recepción · 5:30 PM</p>
            <p className={styles.eventVenue}>Recepción</p>
            <p className={styles.eventAddress}>112 Radford St, Yonkers, NY 10705</p>
            <a href="https://www.google.com/maps/search/?api=1&query=112+Radford+St,+Yonkers,+NY+10705" target="_blank" rel="noopener noreferrer" className={styles.mapLink}>Cómo llegar →</a>
          </TiltCard>
          <CountdownBlock />
        </div>
      </div>
    </section>
  );
}
