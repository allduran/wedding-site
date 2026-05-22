import styles from './Footer.module.css';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.bigMono}>E&amp;K</p>
        <div className={styles.rule} />
        <nav className={styles.links}>
          {[['#story','Nuestra Historia'],['#details','Detalles del Evento'],['#rsvp','Confirmación']].map(([h,l]) => (
            <a key={h} href={h}>{l}</a>
          ))}
        </nav>
        <p className={styles.copy}>© 2026 Erik &amp; Keren</p>
      </div>
    </footer>
  );
}
