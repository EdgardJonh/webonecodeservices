import WhatsAppButton from "../components/WhatsAppButton";
import { COMPANY, WHATSAPP_MESSAGES } from "../config/constants";

export const metadata = {
  title: "Servicios - OneCodeServices",
  description:
    "Planes de desarrollo web estratégico para empresas. Desde presencia online profesional hasta webs que venden las 24 horas.",
};

export default function Servicios() {
  const planes = [
    {
      name: "Web Presencia",
      price: "$120.000",
      desc: "Para negocios que necesitan estar en internet de forma profesional.",
      features: [
        "Diseño profesional personalizado",
        "Optimización básica para Google (SEO)",
        "100% adaptada a celulares y tablets",
        "Formulario de contacto + WhatsApp",
        "Hosting y dominio incluido por 1 año",
      ],
      plazo: "5 días hábiles",
      popular: false,
      message: WHATSAPP_MESSAGES.plan_presencia,
    },
    {
      name: "Web Conversión",
      price: "$250.000",
      desc: "Para negocios que quieren generar leads y contactos desde su web.",
      features: [
        "Todo lo del plan anterior",
        "Diseño enfocado en conversión",
        "Múltiples llamados a la acción estratégicos",
        "Integración con Google Analytics",
        "Chat de WhatsApp integrado",
        "Hasta 7 secciones de contenido",
      ],
      plazo: "7 días hábiles",
      popular: true,
      message: WHATSAPP_MESSAGES.plan_conversion,
    },
    {
      name: "Web Premium",
      price: "$350.000",
      desc: "Para negocios que quieren una web que venda las 24 horas.",
      features: [
        "Todo lo del plan anterior",
        "Estrategia de contenido personalizada",
        "Landing pages para campañas",
        "Optimización avanzada de velocidad",
        "Soporte prioritario por 3 meses",
        "Hasta 10 secciones de contenido",
      ],
      plazo: "10 días hábiles",
      popular: false,
      message: WHATSAPP_MESSAGES.plan_premium,
    },
    {
      name: "Tienda Online",
      price: "$385.000",
      desc: "Para negocios que quieren vender productos en línea.",
      features: [
        "Tienda online completa y profesional",
        "Integración de pagos con WebPay Plus",
        "Catálogo y gestión de productos",
        "Optimización para Google (SEO)",
        "100% adaptada a celulares",
        "Hosting y dominio incluido por 1 año",
      ],
      plazo: "10 días hábiles",
      popular: false,
      message: WHATSAPP_MESSAGES.plan_tienda,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Nuestros planes
          </p>
          <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Elige el plan que tu negocio necesita
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-500">
            Todos incluyen diseño profesional, optimización SEO, hosting,
            dominio y soporte. Sin letra chica.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {planes.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border p-6 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-brand-orange bg-brand-orange/[0.03] shadow-lg ring-1 ring-brand-orange/20"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-brand-orange px-4 py-1 text-xs font-semibold text-white shadow-sm">
                    Más elegido
                  </span>
                </div>
              )}

              <h3 className="mb-1 text-xl font-bold text-slate-900">
                {plan.name}
              </h3>
              <p className="mb-4 text-xs text-slate-500">{plan.desc}</p>

              <div className="mb-1">
                <span className="text-3xl font-bold text-slate-900">
                  {plan.price}
                </span>
              </div>
              <p className="mb-6 text-xs text-slate-400">+ IVA · Pago único</p>

              <div className="mb-6 flex items-center gap-2 border-b border-slate-100 pb-6 text-xs text-slate-500">
                <svg
                  className="h-4 w-4 text-brand-orange"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Entrega en {plan.plazo}
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, fi) => (
                  <li
                    key={fi}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500"
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
                variant={plan.popular ? "primary" : "secondary"}
                className="w-full justify-center rounded-xl"
                message={plan.message}
              >
                Quiero este plan
              </WhatsAppButton>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm md:p-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            ¿No estás seguro qué plan elegir?
          </h2>
          <p className="mb-6 text-slate-500">
            Contáctanos y te ayudaremos a encontrar la solución perfecta para tu
            negocio. Todas las cotizaciones son sin compromiso.
          </p>
          <WhatsAppButton
            message={WHATSAPP_MESSAGES.experto}
          >
            Hablar con un experto
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
