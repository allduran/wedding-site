import { useState } from 'react';
import styles from './RSVP.module.css';

export default function RSVP() {
  const [form, setForm] = useState({ name:'', email:'', attending:'Confirmar', guests:'1', dietary:'' });
  const [sent, setSent] = useState(false);
  const change = e => setForm(f => ({...f, [e.target.name]: e.target.value}));
  const submit = e => { e.preventDefault(); setSent(true); };

  return (
    <section id="rsvp" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.chapterRow}>
          <span className={`label-caps reveal ${styles.chapter}`}>Confirmación</span>
          <span className={styles.chapterLine} />
        </div>

        <div className={styles.bento}>

          {/* Photo side */}
          <div className={`${styles.photoSide} reveal-scale`}>
            <img src="./photo-together.jpg" alt="Erik and Keren" />
            <div className={styles.photoOverlay} />
            <div className={styles.photoCaption}>
              <p className={styles.captionNames}>Erik &amp; Keren</p>
              <p className={`label-caps ${styles.captionDate}`}>14 · IX · 2025</p>
            </div>
          </div>

          {/* Dark form panel */}
          <div className={`${styles.formPanel} reveal-right d1`}>
            <span className={`label-caps ${styles.formLabel}`}>Confirmación</span>
            <h2 className={styles.formHeadline}>¿Nos<br/>Acompañas?</h2>

            {sent ? (
              <div className={styles.thanks}>
                <p className={styles.thanksIcon}>✦</p>
                <p className={styles.thanksTitle}>¡Gracias!</p>
                <p className={styles.thanksSub}>Hemos recibido tu confirmación.</p>
              </div>
            ) : (
              <form onSubmit={submit} className={styles.form}>
                <div className={styles.field}>
                  <label className={`label-caps ${styles.fieldLabel}`}>Nombre Completo</label>
                  <input type="text" name="name" value={form.name} onChange={change} required placeholder="Tu respuesta" className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label className={`label-caps ${styles.fieldLabel}`}>Email</label>
                  <input type="email" name="email" value={form.email} onChange={change} required placeholder="tu@email.com" className={styles.input} />
                </div>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={`label-caps ${styles.fieldLabel}`}>Asistencia</label>
                    <select name="attending" value={form.attending} onChange={change} className={styles.input}>
                      <option>Confirmar</option>
                      <option>Declinar</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label className={`label-caps ${styles.fieldLabel}`}>Invitados</label>
                    <input type="number" name="guests" value={form.guests} onChange={change} min="1" max="6" className={styles.input} />
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={`label-caps ${styles.fieldLabel}`}>Necesidades Dietéticas</label>
                  <input type="text" name="dietary" value={form.dietary} onChange={change} placeholder="Opcional" className={styles.input} />
                </div>
                <button type="submit" className={styles.btn}>Enviar Confirmación</button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}