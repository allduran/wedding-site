import { useRef, useState, useEffect } from 'react';
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
    <div 
      ref={ref} 
      className={className}
      onMouseMove={handleMove} 
      onMouseLeave={reset}
      style={{ transition: 'transform 0.15s ease, box-shadow 0.15s ease', willChange: 'transform' }}
    >
      {children}
    </div>
  );
}

export default function OurStory() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Deja de observar una vez que ya se mostró
        }
      },
      { threshold: 0.15 } // Se activa cuando se ve el 15% de la sección
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Añadimos la clase animActive si la sección es visible
  const animationClass = isVisible ? styles.animActive : '';

  return (
    <section id="story" ref={sectionRef} className={`${styles.section} ${animationClass}`}>
      <div className={styles.container}>

        {/* Chapter label */}
        <div className={styles.chapterRow}>
          <span className={`label-caps ${styles.chapter}`}>Chapter I</span>
          <span className={styles.chapterLine} />
        </div>

        {/* Bento grid */}
        <div className={styles.bento}>

          {/* Large story card */}
          <TiltCard className={`glass ${styles.storyCard} ${styles.reveal} ${styles.d1}`}>
            <span className={`label-caps ${styles.cardLabel}`}>Nuestra Historia</span>
            <h2 className={styles.headline}>
              Un Archivo<br/>de Momentos
            </h2>
            <p className={styles.body}>
              Lo que comenzó como un encuentro casual se transformó en una narrativa compartida de crecimiento, viajes y una conexión inquebrantable. Este no es solo un evento — es el registro de una promesa.
            </p>
            <p className={styles.body} style={{opacity: 0.7}}>
              Diseñado con la intención de la permanencia. Erik y Keren invitan a sus seres más cercanos a ser parte de este próximo volumen editorial en sus vidas.
            </p>
            <div className={styles.cardFooter}>
              <span className={`label-caps ${styles.readMore}`}>Leer más</span>
              <span className={styles.arrow}>→</span>
            </div>
          </TiltCard>

          {/* Photo 1 — hands */}
          <div className={`${styles.photo1} ${styles.revealScale} ${styles.d2}`}>
            <img src="./photo-hands.jpg" alt="Hands with rings" />
            <div className={styles.photoSheen} />
          </div>

          {/* Photo 2 — bridge */}
          <div className={`${styles.photo2} ${styles.revealScale} ${styles.d3}`}>
            <img src="./photo-bridge.jpg" alt="On the bridge" />
            <div className={styles.photoSheen} />
          </div>

          {/* Date stat card — Ahora expandido a lo ancho */}
<TiltCard className={`glass ${styles.dateCard} ${styles.reveal} ${styles.d3}`}>
  <div>
    <span className={`label-caps ${styles.cardLabel}`}>Save the Date</span>
    <p className={styles.dateLabel}>September · 2025</p>
  </div>
  
  <p className={styles.bigNum}>14</p>
  
  <div className={styles.copperRule} />
  
  <p className={styles.dateSub}>Sonoma, California</p>
</TiltCard>

        </div>
      </div>
    </section>
  );
}