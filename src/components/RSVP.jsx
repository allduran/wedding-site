import { useState } from 'react';
import styles from './RSVP.module.css';

export default function RSVP() {
  const [form, setForm] = useState({ name:'', email:'', attending:'', guests:'1', dietary:'' });
  const [submitted, setSubmitted] = useState(false);

  const change = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = e => {
    e.preventDefault();
    console.log('RSVP:', form);
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <img src="./photo-bridge.jpg" alt="" className={styles.sideImg} aria-hidden="true" />
          <div className={styles.sideOverlay} />
          <div className={styles.sideText}>
            <p className={`label-caps ${styles.sideEyebrow}`}>Kindly respond by</p>
            <p className={styles.sideDate}>August 1, 2025</p>
          </div>
        </div>

        <div className={styles.right}>
          <p className={`label-caps reveal ${styles.eyebrow}`}>You're Invited</p>
          <h2 className={`reveal d1 ${styles.headline}`}>Will you<br/>join us?</h2>
          <span className={`gold-rule reveal d2 ${styles.rule}`} />

          {submitted ? (
            <div className={`${styles.thanks} reveal`}>
              <div className={styles.thanksSymbol}>✦</div>
              <h3>We can't wait to see you.</h3>
              <p>Your response has been received. Thank you.</p>
            </div>
          ) : (
            <form onSubmit={submit} className={`${styles.form} reveal d2`}>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Full Name</label>
                <input type="text" name="name" value={form.name} onChange={change} required placeholder="Your name" className={styles.input} />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Email</label>
                <input type="email" name="email" value={form.email} onChange={change} required placeholder="your@email.com" className={styles.input} />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Attendance</label>
                <div className={styles.radios}>
                  {['Joyfully Accept', 'Regretfully Decline'].map(opt => (
                    <label key={opt} className={styles.radio}>
                      <input type="radio" name="attending" value={opt} checked={form.attending===opt} onChange={change} />
                      <span className={styles.radioBox} />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.fieldLabel}>Guests</label>
                  <select name="guests" value={form.guests} onChange={change} className={styles.input}>
                    {[1,2,3,4].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div className={styles.field}>
                  <label className={styles.fieldLabel}>Dietary Needs</label>
                  <input type="text" name="dietary" value={form.dietary} onChange={change} placeholder="Optional" className={styles.input} />
                </div>
              </div>
              <button type="submit" className={styles.btn}>Send Response</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
