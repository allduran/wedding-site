import { useLang } from "../useLang";
import styles from "./Registry.module.css";

const GIFT_LIST_URL = "https://www.amazon.com/wedding/registry";

export default function Registry() {
  const { t } = useLang();

  return (
    <section id="registry" className={styles.section}>
      <div className={styles.container}>
        <span className={`label-caps reveal ${styles.label}`}>
          {t.registry.label}
        </span>
        <h2 className={`reveal d1 ${styles.headline}`}>
          {t.registry.headline}
        </h2>
        <p className={`reveal d2 ${styles.text}`}>{t.registry.text}</p>
        <a
          className={`reveal d3 ${styles.link}`}
          href={GIFT_LIST_URL}
          target="_blank"
          rel="noreferrer"
        >
          {t.registry.link}
        </a>
      </div>
    </section>
  );
}
