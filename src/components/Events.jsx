import styles from './Events.module.css';

function EventCard({ icon, title, datetime, location, address, mapUrl, delay }) {
  return (
    <div className={`${styles.card} reveal reveal-delay-${delay}`}>
      <div className={styles.cardIcon} aria-hidden="true">{icon}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <span className={styles.divider} />
      <p className={styles.datetime}>{datetime}</p>
      <p className={styles.locationName}>{location}</p>
      <p className={styles.address}>{address}</p>
      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.mapLink}
      >
        View Map ↗
      </a>
    </div>
  );
}

export default function Events() {
  return (
    <section id="events" className={styles.section}>
      {/* Background texture */}
      <div className={styles.bg} />
      <div className="noise-overlay" />

      {/* Floral top right */}
      <svg className={styles.floralTop} viewBox="0 0 180 240" fill="none" aria-hidden="true">
        <path d="M10 230 Q60 160 100 100 Q140 40 170 10" stroke="#b8965a" strokeWidth="1" strokeOpacity="0.3" fill="none"/>
        <path d="M30 230 Q80 170 110 110 Q140 50 160 10" stroke="#b8965a" strokeWidth="0.6" strokeOpacity="0.2" fill="none"/>
        <ellipse cx="100" cy="100" rx="10" ry="16" fill="#b8965a" fillOpacity="0.12" transform="rotate(-30 100 100)"/>
        <ellipse cx="140" cy="50" rx="7" ry="11" fill="#b8965a" fillOpacity="0.1" transform="rotate(-15 140 50)"/>
      </svg>

      <div className={styles.container}>
        <div className={styles.header}>
          <p className="label-caps reveal">Join Us</p>
          <span className="gold-line reveal reveal-delay-1" style={{ marginTop: 12 }} />
          <h2 className={`reveal reveal-delay-2 ${styles.headline}`}>The Celebration</h2>
          <p className={`reveal reveal-delay-3 ${styles.sub}`}>
            Please join us for a day of love and laughter
          </p>
        </div>

        <div className={styles.cards}>
          <EventCard
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            }
            title="The Ceremony"
            datetime="Saturday, September 14, 2024 · 4:00 PM in the Afternoon"
            location="St. Jude's Chapel"
            address="123 Vineyard Lane, Sonoma, CA"
            mapUrl="https://maps.google.com"
            delay="2"
          />
          <EventCard
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
              </svg>
            }
            title="The Reception"
            datetime="6:30 PM until Late · Followed by Dinner & Dancing"
            location="The Golden Estate"
            address="456 Oak Ridge, Sonoma, CA"
            mapUrl="https://maps.google.com"
            delay="3"
          />
        </div>
      </div>
    </section>
  );
}
