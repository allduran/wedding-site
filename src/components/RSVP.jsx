import { useState } from 'react';
import styles from './RSVP.module.css';

export default function RSVP() {
  // Eliminado 'dietary' del estado inicial
  const [form, setForm] = useState({ name: '', email: '', attending: 'Confirmar', guests: '1' });
  const [sent, setSent] = useState(false);

  const change = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  
  const submit = async e => {
  e.preventDefault();

  try {
    const formData = new FormData();

    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('attending', form.attending);
    formData.append('guests', form.guests);

    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbyj2s1Hap1koAPFzuxYS1q5LHvlBaZNJlofyatNYufveZiPEbRW_tnQt64lknOpHUncnQ/exec',
      {
        method: 'POST',
        body: formData,
      }
    );

    const data = await response.json();

    if (data.success) {
      setSent(true);
    } else {
      alert('Error enviando formulario');
    }

  } catch (err) {
    console.error(err);
    alert('Error de conexión');
  }
};
  const filled = value => String(value).trim() !== '';

  return (
    <section id="rsvp" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.chapterRow}>
          <span className={`label-caps reveal ${styles.chapter}`}>Confirmación</span>
          <span className={styles.chapterLine} />
        </div>

        <div className={styles.bento}>
          <div className={`${styles.photoSide} reveal-scale`}>
            <img src="./photo-together.jpg" alt="Erik y Keren" />
            <div className={styles.photoOverlay} />
            <div className={styles.photoCaption}>
              <p className={styles.captionNames}>Erik &amp; Keren</p>
              <p className={`label-caps ${styles.captionDate}`}>19 · IX · 2026</p>
            </div>
          </div>

          <div className={`${styles.formPanel} reveal-right d1`}>
            <span className={`label-caps ${styles.formLabel}`}>Confirmación</span>
            <h2 className={styles.formHeadline}>¿Nos<br />Acompañas?</h2>

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
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={change}
                    required
                    placeholder="Tu respuesta"
                    className={`${styles.input} ${filled(form.name) ? styles.filled : ''}`}
                  />
                </div>
                
                <div className={styles.field}>
                  <label className={`label-caps ${styles.fieldLabel}`}>Correo</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={change}
                    required
                    placeholder="tu@email.com"
                    className={`${styles.input} ${filled(form.email) ? styles.filled : ''}`}
                  />
                </div>
                
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={`label-caps ${styles.fieldLabel}`}>Asistencia</label>
                    <select
                      name="attending"
                      value={form.attending}
                      onChange={change}
                      className={`${styles.input} ${styles.selectInput} ${styles.filled}`}
                    >
                      <option>Confirmar</option>
                      <option>Declinar</option>
                    </select>
                  </div>
                  
                  <div className={styles.field}>
                    <label className={`label-caps ${styles.fieldLabel}`}>Invitados</label>
                    <input
                      type="number"
                      name="guests"
                      value={form.guests}
                      onChange={change}
                      min="1"
                      max="6"
                      className={`${styles.input} ${filled(form.guests) ? styles.filled : ''}`}
                    />
                  </div>
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