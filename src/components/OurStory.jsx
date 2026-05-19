import styles from './OurStory.module.css';

export default function OurStory() {
  return (
    <section id="our-story" className={styles.section}>

      {/* Full-bleed close-up photo panel */}
      <div className={`${styles.photoPanel} reveal-scale`}>
        <img src="./photo-close.jpg" alt="Keren and Erik close together" />
        <div className={styles.photoPanelOverlay} />
        <div className={styles.photoPanelText}>
          <p className={`label-caps ${styles.panelLabel}`}>Our Story</p>
          <h2 className={styles.panelQuote}>"From the moment we met,<br/>forever felt near."</h2>
        </div>
      </div>

      {/* Story text — offset grid */}
      <div className={styles.storyGrid}>
        <div className={styles.storyLeft}>
          <span className={`gold-rule reveal ${styles.ruleLeft}`} />
        </div>
        <div className={styles.storyRight}>
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
          <p className={`reveal d3 ${styles.sig}`}>— and now, a wedding.</p>
        </div>
      </div>

      {/* Hands photo — full bleed */}
      <div className={`${styles.handsWrap} reveal-scale`}>
        <img src="./photo-hands.jpg" alt="Keren and Erik holding hands, engagement rings visible" />
        <div className={styles.handsCaption}>
          <span className={`label-caps ${styles.captionText}`}>Forever starts here</span>
        </div>
      </div>

    </section>
  );
}
