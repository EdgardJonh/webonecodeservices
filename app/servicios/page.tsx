import WhatsAppButton from "../components/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "../config/constants";

export const metadata = {
  title: "Servicios - OneCodeServices",
  description:
    "Sistemas web empresariales, desarrollo web profesional, soporte técnico, cámaras de seguridad y GPS para flotas. Soluciones tecnológicas integrales en Chile.",
};

const servicios = [
  {
    title: "Sistemas Web Empresariales",
    desc: "Desarrollamos sistemas personalizados que permiten aumentar ventas, optimizar procesos y tener control total del negocio.",
    features: [
      "Gestión de clientes",
      "Control de productos y servicios",
      "Administración de ventas",
      "Automatización de procesos",
      "Reportes en tiempo real",
    ],
    message: WHATSAPP_MESSAGES.sistemas_web,
    cta: "Consultar por sistemas web",
    anchor: "sistemas-web",
  },
  {
    title: "Desarrollo Web Profesional",
    desc: "Sitios web modernos, rápidos y optimizados para buscadores. Experiencias digitales enfocadas en conversión y posicionamiento en Google.",
    features: [
      "Diseño profesional y moderno",
      "Optimización SEO",
      "100% adaptado a móviles",
      "Integración con WhatsApp",
      "Alto rendimiento",
    ],
    message: WHATSAPP_MESSAGES.desarrollo_web,
    cta: "Quiero mi sitio profesional",
    anchor: "desarrollo-web",
  },
  {
    title: "Soporte Técnico y Optimización",
    desc: "Servicio técnico especializado para empresas y particulares. Mantén tus equipos funcionando al máximo rendimiento.",
    features: [
      "Limpieza interna profesional",
      "Cambio de pasta térmica",
      "Armado de PC gamer",
      "Diagnóstico y reparación de notebooks",
      "Optimización de rendimiento",
    ],
    message: WHATSAPP_MESSAGES.soporte_tecnico,
    cta: "Consultar por soporte técnico",
    anchor: "soporte",
  },
  {
    title: "Cámaras de Seguridad",
    desc: "Instalamos cámaras de seguridad con monitoreo en tiempo real y soluciones adaptadas a hogares y sectores rurales.",
    features: [
      "Instalación profesional",
      "Acceso remoto desde celular",
      "Grabación continua",
      "Mayor protección y tranquilidad",
    ],
    message: WHATSAPP_MESSAGES.camaras,
    cta: "Cotizar instalación",
    anchor: "camaras",
  },
];

export default function Servicios() {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Nuestros servicios
          </p>
          <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Soluciones tecnológicas para tu negocio
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-500">
            Desde sistemas web empresariales hasta seguridad física. Todo lo que
            tu empresa necesita para crecer y protegerse.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {servicios.map((servicio, i) => (
            <div
              key={i}
              id={servicio.anchor}
              className="rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:shadow-xl"
            >
              <h2 className="mb-3 text-2xl font-bold text-slate-900">
                {servicio.title}
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-slate-500">
                {servicio.desc}
              </p>

              <ul className="mb-8 space-y-3">
                {servicio.features.map((feature, fi) => (
                  <li
                    key={fi}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <WhatsAppButton
                className="w-full justify-center rounded-xl"
                message={servicio.message}
              >
                {servicio.cta}
              </WhatsAppButton>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm md:p-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            ¿No estás seguro qué necesitas?
          </h2>
          <p className="mb-6 text-slate-500">
            Contáctanos y te ayudaremos a encontrar la solución tecnológica
            perfecta para tu negocio. Todas las consultas son sin compromiso.
          </p>
          <WhatsAppButton message={WHATSAPP_MESSAGES.contacto}>
            Hablar con un experto
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
