import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

function WaxSeal({ color = '#5a7248', letter = 'K&E', size = 64 }) {
  return (
    <div className={styles.waxSeal} style={{ width: size, height: size, background: color }}>
      <span className={styles.waxLetter}>{letter}</span>
      {/* Decorative ridges */}
      <div className={styles.waxRing} />
    </div>
  );
}

function FloralSvg({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Stems */}
      <path d="M100 170 Q85 140 70 110 Q55 80 60 50" stroke="#6b7f58" strokeWidth="1.2" fill="none" strokeOpacity="0.7"/>
      <path d="M100 170 Q115 140 130 110 Q145 80 140 50" stroke="#6b7f58" strokeWidth="1.2" fill="none" strokeOpacity="0.7"/>
      <path d="M100 170 Q100 130 100 90" stroke="#6b7f58" strokeWidth="1" fill="none" strokeOpacity="0.5"/>
      {/* Leaves */}
      <ellipse cx="80" cy="120" rx="14" ry="7" fill="#8a9e75" fillOpacity="0.5" transform="rotate(-30 80 120)"/>
      <ellipse cx="120" cy="115" rx="14" ry="7" fill="#8a9e75" fillOpacity="0.5" transform="rotate(30 120 115)"/>
      <ellipse cx="95" cy="140" rx="10" ry="5" fill="#8a9e75" fillOpacity="0.4" transform="rotate(-15 95 140)"/>
      {/* Flowers */}
      {[
        { cx:60, cy:48 }, { cx:140, cy:48 }, { cx:100, cy:88 },
        { cx:78, cy:72 }, { cx:122, cy:72 }
      ].map(({cx,cy},i) => (
        <g key={i}>
          {[0,60,120,180,240,300].map(a => (
            <ellipse key={a} cx={cx} cy={cy} rx="9" ry="5"
              fill="white" fillOpacity="0.9" stroke="#c8d5bc" strokeWidth="0.5"
              transform={`rotate(${a} ${cx} ${cy})`}/>
          ))}
          <circle cx={cx} cy={cy} r="4.5" fill="#f0e8d0"/>
          <circle cx={cx} cy={cy} r="2" fill="#d4b483" fillOpacity="0.8"/>
        </g>
      ))}
    </svg>
  );
}

export default function Hero() {
  const [opened, setOpened] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setOpened(true), 800);
    const t2 = setTimeout(() => setCardVisible(true), 1600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      {/* Background */}
      <div className={styles.bg} />

      <div className={styles.scene}>
        {/* Envelope */}
        <div className={`${styles.envelope} ${opened ? styles.envelopeOpen : ''}`}>
          {/* Envelope body */}
          <div className={styles.envBody}>
            <div className={styles.envLeft} />
            <div className={styles.envRight} />
            <div className={styles.envBottom} />
            {/* Flap */}
            <div className={`${styles.envFlap} ${opened ? styles.envFlapOpen : ''}`}>
              <div className={styles.envFlapInner} />
            </div>
            {/* Wax seal on flap */}
            {!opened && (
              <div className={styles.sealOnFlap}>
                <WaxSeal color="#5a7248" letter="K&E" size={52} />
              </div>
            )}
          </div>

          {/* Photo inside envelope */}
          <div className={`${styles.envPhoto} ${opened ? styles.envPhotoRisen : ''}`}>
            <div className={styles.polaroidInEnv}>
              <img src="./photo-close.jpg" alt="Keren and Erik" />
            </div>
          </div>
        </div>

        {/* Invitation card — rises from envelope */}
        <div className={`${styles.card} ${cardVisible ? styles.cardVisible : ''}`}>
          <FloralSvg className={styles.floralTop} />

          <div className={styles.cardInner}>
            <p className={`label-caps ${styles.cardEyebrow}`}>Together with their families</p>
            <p className={styles.cardSub}>Celebrate with us the wedding of</p>

            <h1 className={styles.cardNames}>
              <span className={styles.scriptName}>Keren</span>
              <span className={styles.cardAmp}>&amp;</span>
              <span className={styles.scriptName}>Erik</span>
            </h1>

            <div className={styles.cardDivider} />

            <div className={styles.cardDate}>
              <p className={styles.cardDay}>Saturday</p>
              <p className={styles.cardDayNum}>14</p>
              <p className={styles.cardMonthYear}>September · 2025</p>
            </div>

            <div className={styles.cardDivider} />

            <p className={styles.cardLocation}>Sonoma, California</p>
            <p className={styles.cardLocationSub}>4:00 in the Afternoon</p>

            <a href="#rsvp" className={styles.cardCta}>RSVP</a>
          </div>

          <FloralSvg className={styles.floralBottom} />
        </div>
      </div>

      {/* Scroll hint */}
      <div className={`${styles.scrollHint} ${cardVisible ? styles.scrollHintVisible : ''}`}>
        <span className={styles.scrollLine} />
        <span className="label-caps" style={{color:'var(--sage-mid)', fontSize:9}}>scroll</span>
      </div>
    </section>
  );
}
