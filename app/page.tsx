import WhatsAppButton from "./components/WhatsAppButton";
import HeroBackground from "./components/HeroBackground";
import { COMPANY, WHATSAPP_MESSAGES } from "./config/constants";

function waUrl(msg: string) {
  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(msg)}`;
}

export default function Home() {
  const stats = [
    { value: "+50", label: "Proyectos entregados" },
    { value: "98%", label: "Clientes satisfechos" },
    { value: "7 días", label: "Entrega promedio" },
    { value: "+200%", label: "Más contactos" },
  ];

  const proceso = [
    {
      step: "01",
      title: "Diagnóstico",
      desc: "Analizamos tu negocio, tu competencia y tus objetivos para crear una estrategia digital a medida.",
    },
    {
      step: "02",
      title: "Diseño estratégico",
      desc: "Diseñamos cada pantalla pensando en guiar al visitante hacia la acción: contactarte, cotizar o comprar.",
    },
    {
      step: "03",
      title: "Desarrollo",
      desc: "Construimos tu web con tecnología moderna, rápida y optimizada para Google.",
    },
    {
      step: "04",
      title: "Lanzamiento",
      desc: "Tu web sale al aire y empiezas a recibir clientes. Te acompañamos para optimizar resultados.",
    },
  ];

  const planes = [
    {
      name: "Plan Start",
      price: "$75.000",
      desc: "Para negocios que necesitan estar en internet de forma profesional.",
      features: [
        "Diseño profesional personalizado",
        "100% adaptada a celulares y tablets",
        "Formulario de contacto + WhatsApp",
        "Hosting y dominio incluido por 1 año",
      ],
      plazo: "5 días hábiles",
      popular: false,
      message: WHATSAPP_MESSAGES.plan_presencia,
    },
    {
      name: "Web Presencia",
      price: "$220.000",
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
      price: "$390.000",
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
      price: "$680.000",
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
      price: "$790.000",
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

  const testimonios = [
    {
      name: "Carolina M.",
      role: "Dueña de estudio de pilates",
      text: "Desde que lanzamos la nueva web, recibimos el triple de consultas por WhatsApp. La inversión se pagó en el primer mes.",
    },
    {
      name: "Roberto S.",
      role: "Gerente de empresa de servicios",
      text: "Antes teníamos una web que nadie encontraba. Ahora aparecemos en Google y los clientes llegan solos. Excelente trabajo.",
    },
    {
      name: "María José L.",
      role: "Fundadora de tienda online",
      text: "El proceso fue súper rápido y profesional. En una semana teníamos la tienda funcionando con pagos integrados.",
    },
  ];

  const faqs = [
    {
      q: "¿Cuánto tiempo tarda la entrega de mi web?",
      a: "Dependiendo del plan, entre 5 y 10 días hábiles. Trabajamos con plazos claros y te mantenemos informado en cada paso del proceso.",
    },
    {
      q: "¿Necesito saber de tecnología para manejar mi web?",
      a: "No. Tu web será autoadministrable con un panel simple e intuitivo. Además, te entregamos un tutorial personalizado y soporte para que nunca te quedes sin ayuda.",
    },
    {
      q: "¿Qué incluye el hosting y dominio?",
      a: "Incluimos hosting profesional de alta velocidad y tu dominio .cl o .com por 1 año completo. Después del primer año, la renovación tiene un costo mínimo.",
    },
    {
      q: "¿Puedo actualizar el contenido de mi web después?",
      a: "Sí. Todas nuestras webs son autoadministrables. Puedes cambiar textos, imágenes y contenido cuando quieras, sin depender de nadie.",
    },
    {
      q: "¿Cómo es el proceso de pago?",
      a: "Trabajamos con un 50% de anticipo para comenzar y 50% contra entrega. Aceptamos transferencia bancaria y otros medios de pago.",
    },
    {
      q: "¿Qué pasa si no me gusta el diseño?",
      a: "Incluimos rondas de revisión en todos los planes. Trabajamos contigo hasta que el resultado te deje 100% conforme. Tu satisfacción es nuestra prioridad.",
    },
    {
      q: "¿Hacen mantenimiento después de la entrega?",
      a: "Sí. Ofrecemos planes de mantenimiento mensual opcionales. Además, el plan Premium incluye 3 meses de soporte prioritario.",
    },
  ];

  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section
        id="inicio"
        className="relative overflow-hidden bg-slate-950 text-white"
      >
        <HeroBackground />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-brand-orange/10 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Desarrollo web estratégico en Chile
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
              Tu web debería ser
              <span className="text-brand-orange"> tu mejor vendedor.</span>
            </h1>

            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Diseñamos sitios web que no solo se ven bien — generan confianza,
              capturan leads y convierten visitantes en clientes reales para tu
              negocio.
            </p>

            <div className="mb-12 flex flex-col gap-4 sm:flex-row">
              <a
                href={waUrl(WHATSAPP_MESSAGES.diagnostico)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/20 transition-colors hover:bg-[#20BA5A]"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Solicita tu diagnóstico gratuito
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-8 py-4 text-base font-semibold text-slate-300 transition-all hover:border-slate-500 hover:bg-white/5"
              >
                Ver planes y precios
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
              {[
                "+50 proyectos entregados",
                "Entrega en 7 días",
                "Garantía de satisfacción",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-emerald-400"
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
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TRUST BAR ═══════════════════ */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-bold text-slate-900 md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ PROBLEMA ═══════════════════ */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
              El problema
            </p>
            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Si tu web no te genera clientes, es un gasto, no una inversión.
            </h2>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-red-50">
                <svg
                  className="h-5 w-5 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-slate-900">
                  No apareces en Google
                </h3>
                <p className="text-sm text-slate-500">
                  Tus clientes te buscan pero encuentran a tu competencia.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-red-50">
                <svg
                  className="h-5 w-5 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-slate-900">
                  Tu web no funciona en celular
                </h3>
                <p className="text-sm text-slate-500">
                  El 70% del tráfico es móvil. Si tu web no se adapta, pierdes
                  clientes.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-red-50">
                <svg
                  className="h-5 w-5 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-slate-900">
                  Los visitantes no te contactan
                </h3>
                <p className="text-sm text-slate-500">
                  Llegan a tu web pero se van sin hacer nada. No hay claridad ni
                  llamados a la acción.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-red-50">
                <svg
                  className="h-5 w-5 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-slate-900">
                  Inviertes en ads sin resultados
                </h3>
                <p className="text-sm text-slate-500">
                  Pagas publicidad que lleva tráfico a una web que no convierte.
                </p>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-12 max-w-2xl text-center text-slate-500">
            No es culpa tuya. La mayoría de las webs están diseñadas para{" "}
            <span className="font-medium text-slate-900">verse bonitas</span>,
            no para{" "}
            <span className="font-semibold text-brand-orange">vender</span>.
          </p>
        </div>
      </section>

      {/* ═══════════════════ SOLUCIÓN ═══════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
              La solución
            </p>
            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              No construimos páginas web.
              <br />
              Construimos máquinas de conversión.
            </h2>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange/10">
                <svg
                  className="h-7 w-7 text-brand-orange"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                Diseño enfocado en conversión
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                Cada elemento tiene un propósito: guiar al visitante hacia la
                acción que importa para tu negocio.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange/10">
                <svg
                  className="h-7 w-7 text-brand-orange"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                Optimizado para Google
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                Tu web aparece cuando tus clientes te buscan. SEO técnico
                incluido en cada proyecto.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange/10">
                <svg
                  className="h-7 w-7 text-brand-orange"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                Velocidad que impresiona
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                Carga en menos de 3 segundos. Los visitantes no esperan, y
                Google lo premia.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange/10">
                <svg
                  className="h-7 w-7 text-brand-orange"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                Perfecta en cualquier pantalla
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                Diseño 100% responsive. Porque tus clientes navegan desde el
                celular.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ PROCESO ═══════════════════ */}
      <section id="proceso" className="bg-slate-950 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Cómo funciona
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              De la idea al lanzamiento en 4 pasos
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {proceso.map((item, i) => (
              <div key={i} className="relative text-center">
                <span className="mb-4 block text-5xl font-bold text-brand-orange/20">
                  {item.step}
                </span>
                <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {item.desc}
                </p>
                {i < proceso.length - 1 && (
                  <div className="absolute -right-4 top-8 hidden w-8 text-slate-700 md:block">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href={waUrl(WHATSAPP_MESSAGES.diagnostico)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/20 transition-colors hover:bg-[#20BA5A]"
            >
              Comienza con tu diagnóstico gratuito →
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICIOS ═══════════════════ */}
      <section id="servicios" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Planes
            </p>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Elige el plan que tu negocio necesita
            </h2>
            <p className="mx-auto max-w-2xl text-slate-500">
              Todos incluyen diseño profesional, optimización SEO, hosting,
              dominio y soporte. Sin letra chica.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                <p className="mb-6 text-xs text-slate-400">
                  + IVA · Pago único
                </p>

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

          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500">
              ¿No sabes cuál elegir?{" "}
              <a
                href={waUrl(WHATSAPP_MESSAGES.experto)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-orange hover:underline"
              >
                Habla con un experto →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TESTIMONIOS ═══════════════════ */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Testimonios
            </p>
            <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonios.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <svg
                      key={si}
                      className="h-5 w-5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ GARANTÍA ═══════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50">
            <svg
              className="h-8 w-8 text-emerald-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Tu satisfacción o trabajamos hasta lograrlo
          </h2>

          <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-slate-500">
            No te pedimos que confíes ciegamente. Incluimos rondas de revisión
            en cada proyecto y no paramos hasta que el resultado te deje 100%
            conforme. Sin cargos adicionales, sin letra chica.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
            {[
              "Rondas de revisión incluidas",
              "Sin cargos ocultos",
              "Soporte post-entrega",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-emerald-500"
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
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ FAQ ═══════════════════ */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Preguntas frecuentes
            </p>
            <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Resolvemos tus dudas
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <summary className="flex items-center justify-between p-6">
                  <span className="pr-4 text-sm font-semibold text-slate-900">
                    {faq.q}
                  </span>
                  <span className="faq-icon flex-shrink-0 text-brand-orange transition-transform duration-200">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm leading-relaxed text-slate-500">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA FINAL ═══════════════════ */}
      <section id="contacto" className="bg-slate-950 py-20 text-white md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Da el primer paso
          </p>

          <h2 className="mb-6 text-3xl font-bold leading-tight md:text-5xl">
            Cada día sin una web que convierta, son clientes que pierdes.
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400">
            Agenda una llamada de 15 minutos. Sin compromiso, sin presión. Solo
            una conversación para entender cómo podemos ayudar a tu negocio a
            crecer.
          </p>

          <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={waUrl(WHATSAPP_MESSAGES.diagnostico)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-emerald-500/20 transition-colors hover:bg-[#20BA5A]"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Agendar mi llamada gratuita
            </a>
          </div>

          <p className="text-sm text-slate-500">
            Sin compromiso · Respuesta en menos de 2 horas · Diagnóstico
            gratuito
          </p>
        </div>
      </section>
    </>
  );
}
