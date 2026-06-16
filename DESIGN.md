# DESIGN — Dra. Fanny Ruth Florentín

## Theme

Calm medical-clean. Off-white base, sage green brand, dusty rose accents. Generous whitespace, serif headlines, sans body.

## Color palette (OKLCH-aligned hex)

| Token | Hex | Uso |
|---|---|---|
| `--ink` | `#3d3d3d` | Texto principal (≥4.5:1 sobre cream) |
| `--ink-muted` | `#5c5c5c` | Texto secundario |
| `--sage` | `#708d63` | Marca, iconos, CTAs secundarios |
| `--sage-dark` | `#5a7350` | Hover sage |
| `--rose` | `#d989b5` | Acentos, horario, CTA primario |
| `--rose-light` | `#f3dfe8` | Fondos suaves rosa |
| `--cream` | `#f9f9f7` | Fondo página |
| `--surface` | `#fdfcfa` | Superficies elevadas |
| `--border` | `#e8e4df` | Divisores |

## Typography

- **Display:** Source Serif 4 — headings h1–h3
- **Body/UI:** Source Sans 3 — párrafos, labels, inputs
- **Accent script:** Pinyon Script — solo "Dra." y slogan (micro-uso)

## Components

- **Buttons:** min-height 48px, border-radius 999px (pill) o 12px (form)
- **Inputs:** min-height 48px, 16px font (evita zoom iOS), border 1px `--border`
- **Sections:** max-width 1100px, padding horizontal 1.25rem mobile / 2rem desktop

## Motion

- Scroll reveal: opacity + translateY(12px), 400ms ease-out, once
- `prefers-reduced-motion: reduce` → sin transform, solo opacity o instant
- Botones: `:active { transform: scale(0.97) }`
- Sin animación por keystroke en formulario

## Layout breakpoints

- Mobile: default (< 640px)
- Tablet: 640px+
- Desktop: 1024px+ (contenido centrado)

## Diales (design-taste-frontend)

- DESIGN_VARIANCE: 5
- MOTION_INTENSITY: 4
- VISUAL_DENSITY: 3
