import { scrollToTurno } from '../hooks/useInViewReveal';
import './Header.css';

function LogoMark() {
  return (
    <div className="logo-mark" aria-hidden="true">
      <span className="logo-f">F</span>
      <span className="logo-r">R</span>
    </div>
  );
}

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="header-brand" aria-label="Inicio">
          <div className="header-logo-wrap">
            <img
              src="/logo.jpeg"
              alt=""
              className="header-logo"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.add('visible');
              }}
            />
            <LogoMark />
          </div>
          <div className="header-brand-text">
            <p className="header-title-line">
              <span className="header-dra script-accent">Dra.</span>
              <span className="header-name">Fanny Ruth Florentín</span>
            </p>
            <p className="header-specialty">Odontología & Ortodoncia</p>
          </div>
        </a>
        <button type="button" className="btn btn-primary header-cta" onClick={scrollToTurno}>
          Reservar turno
        </button>
      </div>
    </header>
  );
}
