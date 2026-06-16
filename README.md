# Landing — Dra. Fanny Ruth Florentín

Landing pública del consultorio odontológico. Orientada a conversión: formulario de turno + confirmación por WhatsApp.

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env

# Iniciar (requiere backend fr_consultorio en :8000)
npm run dev
```

Abre http://localhost:5173

## Logo

Colocar el logo en `public/logo.jpeg`. Si no existe, se muestra un monograma "FR" temporal.

## Foto de la Dra.

Colocar la foto en `public/dra.jpeg`. Si no existe, se muestra un placeholder hasta que la subas.

## Variables de entorno

| Variable | Valor local | Descripción |
|---|---|---|
| `VITE_API_URL` | `/api` | Base URL de la API (proxy a Django en dev) |

## Deploy (futuro)

- Agregar origen de la landing a `CORS_ALLOWED_ORIGINS` en el backend
- Configurar `VITE_API_URL` con la URL del API en producción
