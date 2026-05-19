import styles from './OurStory.module.css';

// Decorative photo frame component
function PhotoFrame({ src, alt, className }) {
  return (
    <div className={`${styles.frame} ${className || ''}`}>
      <div className={styles.frameInner}>
        <img src={src} alt={alt} loading="lazy" />
      </div>
    </div>
  );
}

// Placeholder gradient images when no real photos
function PhotoPlaceholder({ gradient, label, className }) {
  return (
    <div className={`${styles.frame} ${className || ''}`}>
      <div className={styles.frameInner}>
        <div className={styles.placeholder} style={{ background: gradient }}>
          <span>{label}</span>
        </div>
      </div>
    </div>
  );
}

export default function OurStory() {
  return (
    <section id="our-story" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textCol}>
          <p className={`label-caps reveal`}>Our Story</p>
          <span className="gold-line-left reveal reveal-delay-1" />

          <h2 className={`reveal reveal-delay-2 ${styles.headline}`}>
            A chance encounter<br />became everything
          </h2>

          <p className={`reveal reveal-delay-3 ${styles.body}`}>
            It began with a shared umbrella on a rainy afternoon in Paris. Elena was lost near the Tuileries, and Julian was just in time with a kind smile and a map. What started as a chance encounter blossomed into a journey across continents, bound by a mutual love for old books, slow jazz, and quiet mornings by the sea.
          </p>
          <p className={`reveal reveal-delay-4 ${styles.body}`}>
            From the rugged cliffs of Amalfi to the cobblestone streets of their favorite neighborhood in Brooklyn, every step has led them to this moment. We invite you to join us as we begin our most beautiful chapter yet.
          </p>

          <div className={`reveal reveal-delay-5 ${styles.signature}`}>
            <span>with love,</span>
            <span className={styles.sigNames}>Elena &amp; Julian</span>
          </div>
        </div>

        <div className={styles.photoCol}>
          <PhotoPlaceholder
            gradient="linear-gradient(135deg, #c9b99a 0%, #a08060 100%)"
            label="Elena & Julian"
            className={`reveal-scale reveal-delay-1 ${styles.photo1}`}
          />
          <PhotoPlaceholder
            gradient="linear-gradient(135deg, #8fa880 0%, #6b8a5e 100%)"
            label="Paris, 2022"
            className={`reveal-scale reveal-delay-3 ${styles.photo2}`}
          />
          {/* Decorative corner floral */}
          <svg className={styles.floralCorner} viewBox="0 0 120 120" fill="none" aria-hidden="true">
            <path d="M10 110 Q30 70 60 50 Q90 30 110 10" stroke="#b8965a" strokeWidth="0.8" strokeOpacity="0.35" fill="none"/>
            <path d="M10 110 Q50 90 70 60 Q90 30 110 10" stroke="#b8965a" strokeWidth="0.6" strokeOpacity="0.25" fill="none"/>
            <circle cx="60" cy="50" r="5" fill="#b8965a" fillOpacity="0.2"/>
            <circle cx="85" cy="30" r="3" fill="#b8965a" fillOpacity="0.2"/>
            <circle cx="35" cy="80" r="3" fill="#b8965a" fillOpacity="0.15"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
