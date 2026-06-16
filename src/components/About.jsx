import RevealSection from './RevealSection';
import './About.css';

export default function About() {
  return (
    <section className="section about-section">
      <div className="container about-grid">
        <RevealSection className="about-content">
          <h2>
            <span className="script-accent">Tu sonrisa,</span> mi compromiso.
          </h2>
          <p className="about-text">
            Tu primera consulta es el comienzo de algo grande. En un espacio pensado para
            transmitir calma y confianza, te acompaño en cada etapa de tu tratamiento con
            dedicación y profesionalismo.
          </p>
        </RevealSection>

        <RevealSection delay={0.1} className="about-image-wrap">
          <div className="about-image-placeholder" role="img" aria-label="Foto del consultorio próximamente">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <span>Foto próximamente</span>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
