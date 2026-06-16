const API_BASE = import.meta.env.VITE_API_URL || '/api';

export async function crearReserva(datos) {
  const res = await fetch(`${API_BASE}/public/reservas/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
  });

  const body = await res.json().catch(() => ({}));

  if (!res.ok) {
    const mensaje =
      body.detail ||
      body.non_field_errors?.[0] ||
      Object.values(body)
        .flat()
        .find((v) => typeof v === 'string') ||
      'No se pudo reservar el turno. Intentá de nuevo.';
    throw new Error(mensaje);
  }

  return body;
}
