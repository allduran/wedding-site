import { useState } from 'react';
import { useLang } from '../useLang';
import styles from './RSVP.module.css';

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbyj2s1Hap1koAPFzuxYS1q5LHvlBaZNJlofyatNYufveZiPEbRW_tnQt64lknOpHUncnQ/exec';

export default function RSVP() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: '', email: '', attending: '', guests: '1' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const change = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const filled = v => String(v).trim() !== '';

  const confirmVal = t.rsvp.confirm;
  const declineVal = t.rsvp.decline;

  const submit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('name',      form.name);
      formData.append('email',     form.email);
      formData.append('attending', form.attending || confirmVal);
      formData.append('guests',    form.guests);

      const response = await fetch(SHEET_URL, { method: 'POST', body: formData });
      const data = await response.json();

      if (data.success) {
        setSent(true);
      } else {
        alert(t.rsvp.errorMsg);
      }
    } catch (err) {
      console.error(err);
      alert(t.rsvp.errorConn);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rsvp" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.chapterRow}>
          <span className={`label-caps reveal ${styles.chapter}`}>{t.rsvp.chapter}</span>
          <span className={styles.chapterLine} />
        </div>

        <div className={styles.bento}>
          <div className={`${styles.photoSide} reveal-scale`}>
            <img src="./photo-together.jpg" alt="Erik y Keren" />
            <div className={styles.photoOverlay} />
            <div className={styles.photoCaption}>
              <p className={styles.captionNames}>Erik &amp; Keren</p>
              <p className={`label-caps ${styles.captionDate}`}>{t.rsvp.captionDate}</p>
            </div>
          </div>

          <div className={`${styles.formPanel} reveal-right d1`}>
            <span className={`label-caps ${styles.formLabel}`}>{t.rsvp.label}</span>
            <h2 className={styles.formHeadline}>
              {t.rsvp.headline.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h2>

            {sent ? (
              <div className={styles.thanks}>
                <p className={styles.thanksIcon}>✦</p>
                <p className={styles.thanksTitle}>{t.rsvp.thanksTitle}</p>
                <p className={styles.thanksSub}>{t.rsvp.thanksSub}</p>
              </div>
            ) : (
              <form onSubmit={submit} className={styles.form}>
                <div className={styles.field}>
                  <label className={`label-caps ${styles.fieldLabel}`}>{t.rsvp.nameLabel}</label>
                  <input type="text" name="name" value={form.name} onChange={change} required
                    placeholder={t.rsvp.namePlaceholder}
                    className={`${styles.input} ${filled(form.name) ? styles.filled : ''}`} />
                </div>

                <div className={styles.field}>
                  <label className={`label-caps ${styles.fieldLabel}`}>{t.rsvp.emailLabel}</label>
                  <input type="email" name="email" value={form.email} onChange={change} required
                    placeholder={t.rsvp.emailPlaceholder}
                    className={`${styles.input} ${filled(form.email) ? styles.filled : ''}`} />
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={`label-caps ${styles.fieldLabel}`}>{t.rsvp.attendanceLabel}</label>
                    <select name="attending" value={form.attending || confirmVal} onChange={change}
                      className={`${styles.input} ${styles.selectInput} ${styles.filled}`}>
                      <option value={confirmVal}>{confirmVal}</option>
                      <option value={declineVal}>{declineVal}</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label className={`label-caps ${styles.fieldLabel}`}>{t.rsvp.guestsLabel}</label>
                    <input type="number" name="guests" value={form.guests} onChange={change}
                      min="1" max="6"
                      className={`${styles.input} ${filled(form.guests) ? styles.filled : ''}`} />
                  </div>
                </div>

                <button type="submit" className={styles.btn} disabled={loading}>
                  {loading ? '...' : t.rsvp.submitBtn}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}