import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.floralRow}>
          <span className={styles.divLine} />
          <svg viewBox="0 0 60 30" fill="none" width="60" aria-hidden="true">
            <circle cx="30" cy="15" r="5" fill="#8a9e75" fillOpacity="0.5"/>
            <circle cx="15" cy="15" r="3" fill="#8a9e75" fillOpacity="0.35"/>
            <circle cx="45" cy="15" r="3" fill="#8a9e75" fillOpacity="0.35"/>
            <circle cx="6"  cy="15" r="2" fill="#8a9e75" fillOpacity="0.2"/>
            <circle cx="54" cy="15" r="2" fill="#8a9e75" fillOpacity="0.2"/>
          </svg>
          <span className={styles.divLine} />
        </div>
        <p className={styles.names}>Keren <em>&amp;</em> Erik</p>
        <p className={styles.date}>September 14, 2025 · Sonoma, California</p>
        <nav className={styles.links}>
          {['Our Story','Events','RSVP'].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(' ','-')}`}>{l}</a>
          ))}
        </nav>
        <p className={styles.copy}>Made with love, for love.</p>
      </div>
    </footer>
  );
}
