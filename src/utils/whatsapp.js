const _p = ['54', '11', '57', '22', '64', '54'];

function whatsappNumber() {
  return _p.join('');
}

export function getWhatsAppLink(text) {
  const base = `https://wa.me/${whatsappNumber()}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function buildWhatsAppUrl({ nombre, apellido, dni, telefono, motivo, fecha, hora_inicio }) {
  const mensaje = [
    'Hola Dra. Florentín, quiero confirmar mi turno.',
    `Soy ${nombre} ${apellido}, DNI ${dni}.`,
    `Fecha: ${fecha} a las ${hora_inicio}.`,
    `Motivo: ${motivo}.`,
    `Tel: ${telefono}.`,
  ].join(' ');

  return getWhatsAppLink(mensaje);
}

export const WHATSAPP_LINK = getWhatsAppLink();
