import { useState } from 'react';
import styles from './RSVP.module.css';

function WaxSeal({ label, color }) {
  return (
    <div className={styles.waxSeal} style={{ background: color }}>
      <div className={styles.waxRing} />
      <span className={styles.waxText}>{label}</span>
    </div>
  );
}

export default function RSVP() {
  const [form, setForm] = useState({ name:'', email:'', attending:'', guests:'1', dietary:'' });
  const [submitted, setSubmitted] = useState(false);
  const change = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const submit = e => { e.preventDefault(); console.log('RSVP:', form); setSubmitted(true); };

  return (
    <section id="rsvp" className={styles.section}>
      <div className={styles.container}>

        {/* Decorative envelope flap top */}
        <div className={styles.envelopeTop}>
          <div className={styles.envelopeFlap} />
          <div className={styles.sealWrap}>
            <WaxSeal label="RSVP" color="#c8bfa8" />
          </div>
        </div>

        <div className={styles.envelopeBody}>
          <div className={styles.header}>
            <p className={`label-caps reveal ${styles.eyebrow}`}>Kindly Reply</p>
            <h2 className={`reveal d1 ${styles.headline}`}>Will you join us?</h2>
            <p className={`reveal d2 ${styles.sub}`}>Please respond by August 1st, 2025</p>
          </div>

          {submitted ? (
            <div className={`${styles.thanks} reveal`}>
              <WaxSeal label="✦" color="#5a7248" />
              <h3 className={styles.thanksTitle}>We can't wait to see you.</h3>
              <p className={styles.thanksSub}>Your response has been received. Thank you.</p>
            </div>
          ) : (
            <form onSubmit={submit} className={`${styles.form} reveal d2`}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.fieldLabel}>Full Name</label>
                  <input type="text" name="name" value={form.name} onChange={change} required placeholder="Your name" className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label className={styles.fieldLabel}>Email</label>
                  <input type="email" name="email" value={form.email} onChange={change} required placeholder="your@email.com" className={styles.input} />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.fieldLabel}>Will you attend?</label>
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
                  <label className={styles.fieldLabel}>Number of Guests</label>
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

        {/* Envelope bottom flaps */}
        <div className={styles.envelopeBottom}>
          <div className={styles.envLeft} />
          <div className={styles.envRight} />
          <div className={styles.envBottomFlap} />
        </div>
      </div>
    </section>
  );
}
