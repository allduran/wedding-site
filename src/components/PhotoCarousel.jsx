import { useEffect, useState } from 'react';
import { useLang } from '../useLang';
import styles from './PhotoCarousel.module.css';

const photos = [
  { src: '/photo-together.jpg', ratio: '5152 / 7728', orientation: 'portrait' },
  { src: '/photo-laugh.jpg', ratio: '3146 / 4719', orientation: 'portrait' },
  { src: '/photo-hands.jpg', ratio: '7728 / 5152', orientation: 'landscape' },
  { src: '/photo-close.jpg', ratio: '5152 / 7728', orientation: 'portrait' },
  { src: '/photo-bridge.jpg', ratio: '7728 / 5152', orientation: 'landscape' },
  { src: '/photo-bridge2.jpg', ratio: '3051 / 4576', orientation: 'portrait' },
  { src: '/photo-carousel1.jpg', ratio: '3127 / 2085', orientation: 'landscape' },
  { src: '/photo-carousel2.jpg', ratio: '4549 / 6824', orientation: 'portrait' },
  { src: '/photo-carousel3.jpg', ratio: '3257 / 2171', orientation: 'landscape' },
];

export default function PhotoCarousel() {
  const [active, setActive] = useState(0);
  const { t } = useLang();

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive(index => (index === photos.length - 1 ? 0 : index + 1));
    }, 2000);

    return () => window.clearInterval(timer);
  }, []);

  const showPrevious = () => {
    setActive(index => (index === 0 ? photos.length - 1 : index - 1));
  };

  const showNext = () => {
    setActive(index => (index === photos.length - 1 ? 0 : index + 1));
  };

  const getSlideClass = index => {
    if (index === active) return styles.activeSlide;
    if (index === (active === 0 ? photos.length - 1 : active - 1)) return styles.previousSlide;
    if (index === (active === photos.length - 1 ? 0 : active + 1)) return styles.nextSlide;
    return styles.hiddenSlide;
  };

  return (
    <section id="album" className={styles.section} aria-label={t.gallery.label}>
      <div className={styles.container}>
        <span className={`label-caps reveal ${styles.label}`}>
          {t.gallery.label}
        </span>
        <div className={`reveal d1 ${styles.frame}`}>
          {photos.map((photo, index) => (
            <figure
              className={`${styles.slide} ${styles[photo.orientation]} ${getSlideClass(index)}`}
              key={photo.src}
              style={{ aspectRatio: photo.ratio }}
            >
              <img
                src={photo.src}
                alt={`${t.gallery.photoAlt} ${index + 1}`}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </figure>
          ))}

          <button
            className={`${styles.control} ${styles.previous}`}
            type="button"
            onClick={showPrevious}
            aria-label={t.gallery.previous}
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            className={`${styles.control} ${styles.next}`}
            type="button"
            onClick={showNext}
            aria-label={t.gallery.next}
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>

        <div className={`reveal d2 ${styles.dots}`} aria-label={t.gallery.dots}>
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              className={`${styles.dot} ${index === active ? styles.activeDot : ''}`}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`${t.gallery.goTo} ${index + 1}`}
              aria-current={index === active ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
