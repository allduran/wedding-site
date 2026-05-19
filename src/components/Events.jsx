import styles from './Events.module.css';

function EventCard({ number, title, time, location, address, mapUrl }) {
  return (
    <div className={styles.card}>
      <span className={styles.number}>{number}</span>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <span className={`gold-rule ${styles.cardRule}`} />
        <p className={styles.time}>{time}</p>
        <p className={styles.locationName}>{location}</p>
        <p className={styles.address}>{address}</p>
        <a href={mapUrl} target="_blank" rel="noopener noreferrer" className={styles.mapLink}>
          Get Directions ↗
        </a>
      </div>
    </div>
  );
}

export default function Events() {
  return (
    <section id="events" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={`label-caps reveal ${styles.eyebrow}`}>The Day</p>
          <h2 className={`reveal d1 ${styles.headline}`}>Join Us</h2>
          <p className={`reveal d2 ${styles.sub}`}>Saturday, September 14, 2025 · Sonoma, California</p>
        </div>

        <div className={styles.cards}>
          <div className="reveal d1">
            <EventCard
              number="I"
              title="Ceremony"
              time="4:00 in the Afternoon"
              location="St. Jude's Chapel"
              address="123 Vineyard Lane, Sonoma, CA"
              mapUrl="https://maps.google.com"
            />
          </div>
          <div className={styles.dividerV} />
          <div className="reveal d3">
            <EventCard
              number="II"
              title="Reception"
              time="6:30 PM · Dinner & Dancing"
              location="The Golden Estate"
              address="456 Oak Ridge, Sonoma, CA"
              mapUrl="https://maps.google.com"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
