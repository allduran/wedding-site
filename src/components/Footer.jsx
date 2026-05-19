import styles from './Footer.module.css';

export default function Footer() {
  const links = ['Travel Info', 'Gift Registry', 'Contact Us'];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.names}>
          <span>Elena</span>
          <span className={styles.amp}>&amp;</span>
          <span>Julian</span>
        </div>

        <span className="gold-line" style={{ marginBottom: 28 }} />

        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l}>
              <a href="#rsvp">{l}</a>
            </li>
          ))}
        </ul>

        <p className={styles.copy}>
          © 2024 Elena &amp; Julian · Handcrafted with love
        </p>
      </div>
    </footer>
  );
}
