const MIERCOLES = 3;

export function esMiercoles(fechaStr) {
  const [y, m, d] = fechaStr.split('-').map(Number);
  const fecha = new Date(y, m - 1, d);
  return fecha.getDay() === MIERCOLES;
}

export function hoyLocal() {
  const hoy = new Date();
  const y = hoy.getFullYear();
  const m = String(hoy.getMonth() + 1).padStart(2, '0');
  const d = String(hoy.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function proximosMiercoles(cantidad = 8) {
  const opciones = [];
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  const cursor = new Date(hoy);
  while (cursor.getDay() !== MIERCOLES) {
    cursor.setDate(cursor.getDate() + 1);
  }

  while (opciones.length < cantidad) {
    if (cursor >= hoy) {
      const y = cursor.getFullYear();
      const m = String(cursor.getMonth() + 1).padStart(2, '0');
      const d = String(cursor.getDate()).padStart(2, '0');
      opciones.push({
        value: `${y}-${m}-${d}`,
        label: formatearFecha(`${y}-${m}-${d}`),
      });
    }
    cursor.setDate(cursor.getDate() + 7);
  }

  return opciones;
}

export function formatearFecha(fechaStr) {
  const [y, m, d] = fechaStr.split('-').map(Number);
  const fecha = new Date(y, m - 1, d);
  return fecha.toLocaleDateString('es-AR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function formatearFechaCorta(fechaStr) {
  const [y, m, d] = fechaStr.split('-').map(Number);
  const fecha = new Date(y, m - 1, d);
  return fecha.toLocaleDateString('es-AR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
}
