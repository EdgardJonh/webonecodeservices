# OneCodeServices — Tu Web, Tu Mejor Vendedor

Sitio web corporativo de **OneCodeServices**, una empresa chilena dedicada al **diseño y desarrollo de sitios web estratégicos** orientados a la conversión de visitantes en clientes reales.

## Sobre el sitio

OneCodeServices ofrece soluciones web profesionales para negocios y emprendedores en Chile. El sitio presenta:

- **Planes de desarrollo web** adaptados a distintas necesidades: desde presencia online básica hasta tiendas online con integración de pagos (WebPay Plus).
- **Enfoque en conversión**: cada web se diseña con estrategias de UX que guían al visitante hacia acciones concretas (contactar, cotizar, comprar).
- **Optimización SEO** incluida en todos los planes para posicionamiento en Google.
- **Diseño responsive** 100% adaptado a celulares y tablets.
- **Integración con WhatsApp** como canal principal de contacto y ventas.

### Secciones principales

| Sección | Descripción |
|---------|-------------|
| Hero | Propuesta de valor y llamado a la acción principal |
| Problema | Identifica los dolores comunes de negocios sin web efectiva |
| Solución | Presenta las ventajas del servicio (conversión, SEO, velocidad, responsive) |
| Proceso | Flujo de trabajo en 4 pasos: Diagnóstico → Diseño → Desarrollo → Lanzamiento |
| Planes | 5 planes con precios (Start, Presencia, Conversión, Premium, Tienda Online) |
| Testimonios | Casos de éxito de clientes |
| Garantía | Compromiso de satisfacción con rondas de revisión incluidas |
| FAQ | Preguntas frecuentes sobre plazos, pagos, hosting y soporte |

## Stack tecnológico

- **Framework**: [Next.js](https://nextjs.org) 16 (App Router)
- **UI**: [React](https://react.dev) 19
- **Estilos**: [Tailwind CSS](https://tailwindcss.com) 4
- **Lenguaje**: TypeScript
- **Fuentes**: Geist (via `next/font`)

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el sitio.

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera la build de producción |
| `npm run start` | Inicia el servidor de producción |
| `npm run lint` | Ejecuta el linter (ESLint) |

## Estructura del proyecto

```
app/
├── components/       # Componentes reutilizables (Header, Footer, WhatsAppButton, HeroBackground)
├── config/           # Constantes y configuración (datos de empresa, mensajes de WhatsApp)
├── servicios/        # Página de servicios y planes
├── globals.css       # Estilos globales
├── layout.tsx        # Layout principal con Header, Footer y botón flotante de WhatsApp
└── page.tsx          # Página de inicio (landing page principal)
```

## Contacto

- **Email**: contacto@onecodeservices.com
- **WhatsApp**: +56 9 9297 7211
