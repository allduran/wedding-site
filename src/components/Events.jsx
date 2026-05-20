import styles from './Events.module.css';

function WaxSeal({ label, size = 72 }) {
  return (
    <div className={styles.waxSeal} style={{ width: size, height: size }}>
      <div className={styles.waxRing} />
      <span className={styles.waxText}>{label}</span>
    </div>
  );
}

function EventCard({ seal, title, time, location, address, mapUrl, delay }) {
  return (
    <div className={`${styles.card} reveal-scale ${delay}`}>
      <div className={styles.cardSeal}><WaxSeal label={seal} /></div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.cardRule} />
      <p className={styles.time}>{time}</p>
      <p className={styles.locationName}>{location}</p>
      <p className={styles.address}>{address}</p>
      <a href={mapUrl} target="_blank" rel="noopener noreferrer" className={styles.mapLink}>
        Get Directions ↗
      </a>
    </div>
  );
}

export default function Events() {
  return (
    <section id="events" className={styles.section}>
      {/* Sage header band */}
      <div className={styles.band}>
        <p className={`label-caps reveal ${styles.bandEyebrow}`}>You are invited</p>
        <h2 className={`reveal d1 ${styles.bandHeadline}`}>The Details</h2>
        <p className={`reveal d2 ${styles.bandSub}`}>Saturday · September 14, 2025 · Sonoma, California</p>
      </div>

      {/* Cards on ivory */}
      <div className={styles.cardsWrap}>
        <div className={styles.cards}>
          <EventCard
            seal="I" title="Ceremony"
            time="4:00 in the Afternoon"
            location="St. Jude's Chapel"
            address="123 Vineyard Lane, Sonoma, CA"
            mapUrl="https://maps.google.com"
            delay="d1"
          />
          <div className={styles.cardsDivider} />
          <EventCard
            seal="II" title="Reception"
            time="6:30 PM · Dinner & Dancing"
            location="The Golden Estate"
            address="456 Oak Ridge, Sonoma, CA"
            mapUrl="https://maps.google.com"
            delay="d3"
          />
        </div>
      </div>
    </section>
  );
}
