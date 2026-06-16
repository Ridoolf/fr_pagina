import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { scrollToTurno } from '../hooks/useInViewReveal';
import WhatsAppButton from './WhatsAppButton';
import './Hero.css';

const MAPS_URL = 'https://maps.google.com/?q=Centro+Médico+Alas+San+Luis+2740+CABA';
const words = ['Nueva', 'ciudad,', 'misma', 'pasión.'];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [fotoLista, setFotoLista] = useState(true);

  return (
    <section className="hero section">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
      </div>

      <div className="container hero-grid">
        <div className="hero-main">
          <p className="hero-badge">¡Nueva apertura!</p>
          <h1 className="hero-title">
            {words.map((word, i) => (
              <motion.span
                key={word}
                className="hero-word"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : {
                        duration: 0.45,
                        ease: [0.25, 1, 0.5, 1],
                        delay: 0.1 + i * 0.08,
                      }
                }
              >
                {word}{' '}
              </motion.span>
            ))}
          </h1>
          <p className="hero-subtitle">
            Después de mucho trabajo y sueños, comienza una nueva etapa. Ahora también voy a estar
            atendiendo en <strong>Buenos Aires</strong>.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary" onClick={scrollToTurno}>
              Reservá tu turno
            </button>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Ver ubicación
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo-frame">
            {!fotoLista ? (
              <div className="hero-photo-placeholder" role="img" aria-label="Foto de la Dra. próximamente">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
                <span>Foto próximamente</span>
              </div>
            ) : (
              <img
                src="/dra.jpeg"
                alt="Dra. Fanny Ruth Florentín"
                className="hero-photo"
                onError={() => setFotoLista(false)}
              />
            )}
          </div>
          <p className="hero-photo-caption">
            <span className="script-accent">Dra.</span> Fanny Ruth Florentín
          </p>
        </div>
      </div>

      <div className="hero-consult">
        <div className="container">
          <div className="hero-consult-grid">
            <div className="consult-block">
              <p className="consult-label">Ubicación</p>
              <p className="consult-value">
                Centro Médico Alas
                <br />
                San Luis 2740, Balvanera
              </p>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="consult-link">
                Cómo llegar →
              </a>
            </div>

            <div className="consult-block consult-block--featured">
              <p className="consult-label">Horario</p>
              <p className="consult-schedule">Miércoles</p>
              <p className="consult-time">11:00 a 14:00 h</p>
            </div>

            <div className="consult-block">
              <p className="consult-label">Turnos</p>
              <p className="consult-value">Confirmación por WhatsApp</p>
              <WhatsAppButton variant="inline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
