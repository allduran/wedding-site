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

        {/* Bento grid */}
        <div className={styles.bento}>

          {/* Large story card */}
          <TiltCard className={`glass ${styles.storyCard} ${styles.reveal} ${styles.d1}`}>
            <span className={`label-caps ${styles.cardLabel}`}>Nuestra Historia</span>
            <h2 className={styles.headline}>
              El Comienzo de<br/>Algo Eterno
            </h2>
            <p className={styles.body}>
              Lo que nació como una bonita coincidencia se ha convertido en nuestro proyecto más importante. El viaje continúa y no podíamos imaginar dar este paso sin las personas que más queremos a nuestro lado.
            </p>
            <p className={styles.body} style={{opacity: 0.7}}>
              Erik y Keren invitan a sus seres más cercanos a ser parte de este próximo capítulo de sus vidas.
            </p>
          </TiltCard>

          {/* Photo 1 — hands */}
          <TiltCard className={`${styles.photo1} ${styles.revealScale} ${styles.d2}`}>
            <img src="./photo-hands.jpg" alt="Manos con anillos" />
            <div className={styles.photoSheen} />
          </TiltCard>

          {/* Photo 2 — bridge */}
          <TiltCard className={`${styles.photo2} ${styles.revealScale} ${styles.d3}`}>
            <img src="./photo-bridge.jpg" alt="En el puente" />
            <div className={styles.photoSheen} />
          </TiltCard>

          {/* Date stat card — Ahora expandido a lo ancho */}
<TiltCard className={`glass ${styles.dateCard} ${styles.reveal} ${styles.d3}`}>
  <div>
    <span className={`label-caps ${styles.cardLabel}`}>Reserva la fecha</span>
    <p className={styles.dateLabel}>Septiembre · 2026</p>
  </div>
  
  <p className={styles.bigNum}>19</p>
  
  <div className={styles.copperRule} />
  
  <p className={styles.dateSub}>Yonkers, NY</p>
</TiltCard>

        </div>
      </div>
    </section>
  );
}
