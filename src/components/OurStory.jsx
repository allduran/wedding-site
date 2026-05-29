import { useRef, useState, useEffect } from 'react';
import { useLang } from '../useLang';
import styles from './OurStory.module.css';

function TiltCard({ children, className }) {
  const ref = useRef(null);
  const handleMove = e => {
    const el = ref.current; if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = ((e.clientX - left) / width  - 0.5) * 16;
    const y = ((e.clientY - top)  / height - 0.5) * 12;
    el.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${-y}deg) translateZ(12px)`;
    el.style.boxShadow = `${-x*2}px ${y*2}px 48px rgba(6,16,14,0.18), 0 24px 64px rgba(6,16,14,0.10)`;
  };
  const reset = () => {
    const el = ref.current; if (!el) return;
    el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0)';
    el.style.boxShadow = '';
  };
  return (
    <div ref={ref} className={className} onMouseMove={handleMove} onMouseLeave={reset}
      style={{ transition: 'transform 0.15s ease, box-shadow 0.15s ease', willChange: 'transform' }}>
      {children}
    </div>
  );
}

export default function OurStory() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const anim = isVisible ? styles.animActive : '';

  return (
    <section id="story" ref={sectionRef} className={`${styles.section} ${anim}`}>
      <div className={styles.container}>
        <div className={styles.bento}>

          <TiltCard className={`glass ${styles.storyCard} ${styles.reveal} ${styles.d1}`}>
            <span className={`label-caps ${styles.cardLabel}`}>{t.story.label}</span>
            <h2 className={styles.headline}>
              {t.story.headline.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br/>}</span>
              ))}
            </h2>
            <p className={styles.body}>{t.story.body1}</p>
            <p className={styles.body} style={{opacity:0.7}}>{t.story.body2}</p>
          </TiltCard>

          <TiltCard className={`${styles.photo1} ${styles.revealScale} ${styles.d2}`}>
            <img src="./photo-hands.jpg" alt="Manos con anillos" />
            <div className={styles.photoSheen} />
          </TiltCard>

          <TiltCard className={`${styles.photo2} ${styles.revealScale} ${styles.d3}`}>
            <img src="./photo-bridge.jpg" alt="En el puente" />
            <div className={styles.photoSheen} />
          </TiltCard>

          <TiltCard className={`glass ${styles.dateCard} ${styles.reveal} ${styles.d3}`}>
            <div>
              <span className={`label-caps ${styles.cardLabel}`}>{t.story.saveTheDate}</span>
              <p className={styles.dateLabel}>{t.story.monthYear}</p>
            </div>
            <p className={styles.bigNum}>19</p>
            <div className={styles.copperRule} />
            <p className={styles.dateSub}>{t.story.location}</p>
          </TiltCard>

        </div>
      </div>
    </section>
  );
}