import RevealSection from './RevealSection';
import './Services.css';

const services = [
  {
    id: 'ortodoncia',
    title: 'Ortodoncia',
    description: 'Alineación y corrección de la mordida para una sonrisa armónica y funcional.',
    accent: 'sage',
    featured: true,
    icon: (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M8 14c0-4 3-7 8-7s8 3 8 7" />
        <path d="M6 18h20" />
        <path d="M10 18v4M14 18v4M18 18v4M22 18v4" />
      </svg>
    ),
  },
  {
    id: 'estetica',
    title: 'Estética dental',
    description: 'Tratamientos para realzar la apariencia y luminosidad de tu sonrisa.',
    accent: 'rose',
    featured: false,
    icon: (
      <svg width="36" height="36" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M10 14c0-3 2.5-6 6-6s6 3 6 6" />
        <path d="M8 18c0 6 4 10 8 10s8-4 8-10" />
        <path d="M20 10l2-2M24 12l2-1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'general',
    title: 'Odontología general',
    description: 'Prevención, diagnóstico y tratamiento integral de tu salud bucal.',
    accent: 'sage',
    featured: false,
    icon: (
      <svg width="36" height="36" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M10 14c0-3 2.5-6 6-6s6 3 6 6" />
        <path d="M8 18c0 6 4 10 8 10s8-4 8-10" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="section services-section">
      <div className="container">
        <RevealSection className="services-header">
          <h2>Atención integral para tu sonrisa</h2>
          <p className="services-intro">
            Cada tratamiento se adapta a tus necesidades, con un enfoque cercano y profesional.
          </p>
        </RevealSection>

        <ul className="services-bento">
          {services.map((service, i) => (
            <RevealSection
              key={service.id}
              delay={i * 0.08}
              className={`services-bento-cell${service.featured ? ' services-bento-cell--featured' : ''}`}
            >
              <li className={`service-tile service-tile--${service.accent}`}>
                <div className="service-tile-icon" aria-hidden="true">
                  {service.icon}
                </div>
                <div className="service-tile-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </li>
            </RevealSection>
          ))}
        </ul>
      </div>
    </section>
  );
}
