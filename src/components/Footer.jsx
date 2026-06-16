import WhatsAppButton from './WhatsAppButton';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="footer-script script-accent">Tu sonrisa, mi compromiso.</p>
          <p className="footer-name">
            <span className="script-accent">Dra.</span> Fanny Ruth Florentín
          </p>
          <p className="footer-specialty">Odontología & Ortodoncia</p>
        </div>

        <div className="footer-contact">
          <p>Centro Médico Alas — San Luis 2740, CABA</p>
          <p>Miércoles 11:00 a 14:00 h</p>
          <WhatsAppButton variant="footer" />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Dra. Fanny Ruth Florentín</p>
        </div>
      </div>
    </footer>
  );
}
