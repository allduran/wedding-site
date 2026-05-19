import { useCountdown } from '../hooks/useCountdown';
import styles from './Countdown.module.css';

function Unit({ value, label, delay }) {
  return (
    <div className={`${styles.unit} reveal reveal-delay-${delay}`}>
      <span className={styles.number}>{String(value).padStart(2, '0')}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown('2024-09-14T16:00:00');

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={`label-caps reveal ${styles.eyebrow}`}>Counting Down</p>

        <div className={styles.timer}>
          <Unit value={days} label="Days" delay="1" />
          <span className={`${styles.sep} reveal`}>·</span>
          <Unit value={hours} label="Hours" delay="2" />
          <span className={`${styles.sep} reveal`}>·</span>
          <Unit value={minutes} label="Minutes" delay="3" />
          <span className={`${styles.sep} reveal`}>·</span>
          <Unit value={seconds} label="Seconds" delay="4" />
        </div>
      </div>
    </section>
  );
}
