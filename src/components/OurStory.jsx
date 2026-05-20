import styles from './OurStory.module.css';

function Polaroid({ src, alt, caption, rotate, delay }) {
  return (
    <div className={`${styles.polaroid} reveal-scale ${delay}`} style={{ '--rot': rotate }}>
      <div className={styles.polaroidImg}>
        <img src={src} alt={alt} />
      </div>
      {caption && <p className={styles.polaroidCaption}>{caption}</p>}
    </div>
  );
}

function FloralDivider() {
  return (
    <div className={styles.floralDivider}>
      <span className={styles.divLine} />
      <svg viewBox="0 0 60 30" fill="none" width="60" aria-hidden="true">
        <circle cx="30" cy="15" r="5" fill="#8a9e75" fillOpacity="0.6"/>
        <circle cx="15" cy="15" r="3" fill="#8a9e75" fillOpacity="0.4"/>
        <circle cx="45" cy="15" r="3" fill="#8a9e75" fillOpacity="0.4"/>
        <circle cx="6"  cy="15" r="2" fill="#8a9e75" fillOpacity="0.25"/>
        <circle cx="54" cy="15" r="2" fill="#8a9e75" fillOpacity="0.25"/>
      </svg>
      <span className={styles.divLine} />
    </div>
  );
}

export default function OurStory() {
  return (
    <section id="our-story" className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <p className={`label-caps reveal ${styles.eyebrow}`}>Our Story</p>
          <FloralDivider />
          <h2 className={`reveal d1 ${styles.headline}`}>How It Began</h2>
        </div>

        <div className={styles.grid}>
          {/* Left: polaroid stack */}
          <div className={styles.photoStack}>
            <Polaroid src="./photo-bridge.jpg" alt="Keren and Erik on a bridge" caption="The walk we'll never forget" rotate="-3deg" delay="d1" />
            <Polaroid src="./photo-hands.jpg" alt="Hands with rings" caption="She said yes ✦" rotate="2.5deg" delay="d3" />
          </div>

          {/* Right: story text */}
          <div className={styles.storyText}>
            <p className={`reveal d1 ${styles.body}`}>
              It started with one look — the kind that makes the rest of the room disappear.
              Keren and Erik found each other not by chance, but by that quiet pull that happens
              when two people are simply ready for the same thing.
            </p>
            <p className={`reveal d2 ${styles.body}`}>
              Through late nights and early mornings, through ordinary Tuesdays and extraordinary
              adventures, they built something rare: a love that is both tender and steady.
              The kind you build a life on.
            </p>
            <p className={`reveal d3 ${styles.pullQuote}`}>
              "The best love story is the one we're still writing."
            </p>
            <p className={`reveal d4 ${styles.sig}`}>— and now, a wedding.</p>
          </div>
        </div>

        {/* Full-width close photo */}
        <div className={`${styles.fullPhoto} reveal-scale d2`}>
          <img src="./photo-close.jpg" alt="Keren and Erik close together" />
          <div className={styles.fullPhotoOverlay} />
          <div className={styles.fullPhotoCaption}>
            <span className="label-caps" style={{color:'rgba(255,255,255,0.6)'}}>Together</span>
          </div>
        </div>

      </div>
    </section>
  );
}
