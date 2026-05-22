import { useCountdown } from '../hooks/useCountdown';
import styles from './Countdown.module.css';

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown('2026-09-19T15:00:00');
  const units = [
    { v: days, l: 'Días' }, { v: hours, l: 'Horas' },
    { v: minutes, l: 'Min' }, { v: seconds, l: 'Seg' },
  ];
  return (
    <div className={styles.bar}>
      <p className={`label-caps ${styles.label}`}>Hasta el gran día</p>
      <div className={styles.units}>
        {units.map(({ v, l }, i) => (
          <div key={l} className={styles.unit}>
            <span className={styles.num}>{String(v).padStart(2,'0')}</span>
            <span className={styles.uLabel}>{l}</span>
            {i < 3 && <span className={styles.dot}>·</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
