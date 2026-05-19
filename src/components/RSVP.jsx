import { useState } from 'react';
import styles from './RSVP.module.css';

export default function RSVP() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    attending: '',
    dietary: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: connect to your backend / Formspree / Netlify Forms
    console.log('RSVP submitted:', form);
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className="label-caps reveal">RSVP</p>
          <span className="gold-line reveal reveal-delay-1" style={{ marginTop: 12 }} />
          <h2 className={`reveal reveal-delay-2 ${styles.headline}`}>Kindly Respond</h2>
          <p className={`reveal reveal-delay-3 ${styles.sub}`}>
            Please kindly respond by August 1st, 2024
          </p>
        </div>

        {submitted ? (
          <div className={`${styles.thanks} reveal`}>
            <div className={styles.thanksIcon}>✦</div>
            <h3>Thank you!</h3>
            <p>We've received your response and can't wait to celebrate with you.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={`${styles.form} reveal reveal-delay-2`}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Your Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Elena Rodriguez"
                  className={styles.input}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.fieldLabel}>Will You Be Attending?</label>
              <div className={styles.radioGroup}>
                {['Joyfully Accept', 'Regretfully Decline'].map((opt) => (
                  <label key={opt} className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="attending"
                      value={opt}
                      checked={form.attending === opt}
                      onChange={handleChange}
                      className={styles.radio}
                    />
                    <span className={styles.radioCustom} />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.fieldLabel}>Dietary Requirements</label>
              <input
                type="text"
                name="dietary"
                value={form.dietary}
                onChange={handleChange}
                placeholder="Vegetarian, gluten-free, etc."
                className={styles.input}
              />
            </div>

            <button type="submit" className={styles.submit}>
              Submit Response
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
