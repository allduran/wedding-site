import { useLang } from '../useLang';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.bigMono}>E&amp;K</p>
        <div className={styles.rule} />
        <nav className={styles.links}>
          {[['#story', t.footer.story], ['#details', t.footer.details], ['#rsvp', t.footer.rsvp]].map(([h, l]) => (
            <a key={h} href={h}>{l}</a>
          ))}
        </nav>
        <p className={styles.copy}>{t.footer.copy}</p>
      </div>
    </footer>
  );
}