import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={`gold-rule ${styles.rule}`} />
      <div className={styles.inner}>
        <p className={styles.names}>Keren <em>&amp;</em> Erik</p>
        <p className={styles.date}>September 14, 2025 · Sonoma, CA</p>
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
