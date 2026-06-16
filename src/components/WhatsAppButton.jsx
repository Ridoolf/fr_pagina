import { getWhatsAppLink } from '../utils/whatsapp';
import WhatsAppIcon from './WhatsAppIcon';
import './WhatsAppButton.css';

export default function WhatsAppButton({
  url,
  label = 'Enviar mensaje',
  variant = 'solid',
  className = '',
}) {
  const href = url || getWhatsAppLink();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-btn whatsapp-btn--${variant} ${className}`.trim()}
      aria-label={`${label} por WhatsApp`}
    >
      <WhatsAppIcon size={variant === 'inline' ? 16 : 18} />
      <span>{label}</span>
    </a>
  );
}
