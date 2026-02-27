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
    { value: "4", label: "Líneas de servicio" },
    { value: "24/7", label: "Soporte disponible" },
  ];

  const sistemasWebBeneficios = [
    {
      title: "Gestión de clientes",
      desc: "Centraliza la información de tus clientes y mejora el seguimiento comercial.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
    },
    {
      title: "Control de productos y servicios",
      desc: "Administra tu catálogo completo con inventario y precios en tiempo real.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      ),
    },
    {
      title: "Administración de ventas",
      desc: "Controla cotizaciones, órdenes y facturación desde un solo lugar.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      ),
    },
    {
      title: "Automatización de procesos",
      desc: "Reduce tareas manuales y errores con flujos de trabajo automatizados.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      ),
    },
    {
      title: "Reportes y seguimiento en tiempo real",
      desc: "Toma decisiones informadas con dashboards y métricas actualizadas.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      ),
    },
  ];

  const desarrolloWebBeneficios = [
    {
      title: "Diseño profesional y moderno",
      desc: "Interfaces atractivas que generan confianza y reflejan la identidad de tu marca.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      ),
    },
    {
      title: "Optimización SEO",
      desc: "Tu sitio aparece cuando tus clientes buscan en Google. Posicionamiento orgánico incluido.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      ),
    },
    {
      title: "Adaptado a móviles",
      desc: "100% responsive. Perfecto en celulares, tablets y escritorio.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      ),
    },
    {
      title: "Integración con WhatsApp",
      desc: "Tus clientes te contactan directamente desde tu sitio web con un solo clic.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      ),
    },
    {
      title: "Alto rendimiento",
      desc: "Carga ultrarrápida optimizada para Google y la mejor experiencia de usuario.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
    },
  ];

  const soporteServicios = [
    {
      title: "Limpieza interna profesional",
      desc: "Eliminamos polvo y residuos que afectan el rendimiento y la vida útil de tus equipos.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      ),
    },
    {
      title: "Cambio de pasta térmica",
      desc: "Mejoramos la disipación de calor para evitar sobrecalentamiento y throttling.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
        />
      ),
    },
    {
      title: "Armado de PC gamer",
      desc: "Ensamblamos equipos de alto rendimiento optimizados para gaming y trabajo pesado.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
    },
    {
      title: "Diagnóstico y reparación de notebooks",
      desc: "Identificamos y solucionamos fallas de hardware y software en portátiles.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
      ),
    },
    {
      title: "Optimización de rendimiento",
      desc: "Aceleramos equipos lentos con limpieza de software, actualizaciones y ajustes.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      ),
    },
  ];

  const camarasBeneficios = [
    {
      title: "Instalación profesional",
      desc: "Montaje y configuración completa por técnicos especializados.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
      ),
    },
    {
      title: "Acceso remoto desde celular",
      desc: "Monitorea tu hogar o negocio desde cualquier lugar, en tiempo real.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      ),
    },
    {
      title: "Grabación continua",
      desc: "Almacenamiento local y en la nube para respaldo permanente de video.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      ),
    },
    {
      title: "Mayor protección y tranquilidad",
      desc: "Disuade robos y mantén el control total de tu entorno las 24 horas.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
    },
  ];

  const gpsBeneficios = [
    {
      title: "Seguimiento en tiempo real",
      desc: "Visualiza la ubicación exacta de cada vehículo en un mapa interactivo.",
    },
    {
      title: "Control de rutas",
      desc: "Optimiza recorridos y reduce costos de combustible con análisis de trayectos.",
    },
    {
      title: "Gestión de conductores",
      desc: "Monitorea horarios, velocidad y comportamiento de conducción.",
    },
    {
      title: "Optimización operativa",
      desc: "Reportes automatizados para mejorar la eficiencia de tu flota completa.",
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
              Soluciones tecnológicas en Chile
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
              Tecnología que impulsa y
              <span className="text-brand-orange"> protege tu negocio.</span>
            </h1>

            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Desarrollamos sistemas web, soluciones digitales, soporte
              tecnológico y sistemas de seguridad para empresas y hogares en
              crecimiento.
            </p>

            <div className="mb-12 flex flex-col gap-4 sm:flex-row">
              <a
                href={waUrl(WHATSAPP_MESSAGES.consultoria)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-orange/20 transition-colors hover:bg-brand-orange/90"
              >
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Agenda una consultoría gratuita
              </a>
              <WhatsAppButton
                className="rounded-xl px-8 py-4 text-base"
                message={WHATSAPP_MESSAGES.default}
              >
                Hablar por WhatsApp
              </WhatsAppButton>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
              {[
                "+50 proyectos entregados",
                "Empresa chilena",
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

      {/* ═══════════════════ SISTEMAS WEB EMPRESARIALES ═══════════════════ */}
      <section id="sistemas-web" className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Sistemas a medida
            </p>
            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Sistemas Web a Medida para Empresas
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
              Desarrollamos sistemas personalizados que permiten aumentar ventas,
              optimizar procesos y tener control total del negocio.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sistemasWebBeneficios.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10">
                  <svg
                    className="h-6 w-6 text-brand-orange"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="mb-2 font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <WhatsAppButton
              message={WHATSAPP_MESSAGES.sistemas_web}
              className="rounded-xl px-8 py-4 text-base"
            >
              Solicitar diagnóstico gratuito
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* ═══════════════════ DESARROLLO WEB PROFESIONAL ═══════════════════ */}
      <section id="desarrollo-web" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Desarrollo web
            </p>
            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Sitios Web Estratégicos que Generan Clientes
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
              Diseñamos sitios web modernos, rápidos y optimizados para
              buscadores. Creamos experiencias digitales enfocadas en conversión
              y posicionamiento en Google.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {desarrolloWebBeneficios.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center transition-all duration-300 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10">
                  <svg
                    className="h-6 w-6 text-brand-orange"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="mb-2 font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <WhatsAppButton
              message={WHATSAPP_MESSAGES.desarrollo_web}
              className="rounded-xl px-8 py-4 text-base"
            >
              Quiero mi sitio profesional
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SOPORTE Y MANTENCIÓN TECNOLÓGICA ═══════════════════ */}
      <section id="soporte" className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Soporte técnico
            </p>
            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Soporte Técnico y Optimización de Equipos
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
              Brindamos servicio técnico especializado para empresas y
              particulares. Mantén tus equipos funcionando al máximo rendimiento.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {soporteServicios.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10">
                  <svg
                    className="h-5 w-5 text-brand-orange"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <WhatsAppButton
              message={WHATSAPP_MESSAGES.soporte_tecnico}
              className="rounded-xl px-8 py-4 text-base"
            >
              Consultar por soporte técnico
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CÁMARAS DE SEGURIDAD ═══════════════════ */}
      <section id="camaras" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Seguridad
            </p>
            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Sistemas de Videovigilancia para Hogares y Sectores Rurales
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
              Instalamos cámaras de seguridad con monitoreo en tiempo real y
              soluciones adaptadas a cada entorno, tanto urbano como rural.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            {camarasBeneficios.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-8 text-center transition-all duration-300 hover:shadow-lg"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange/10">
                  <svg
                    className="h-7 w-7 text-brand-orange"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <WhatsAppButton
              message={WHATSAPP_MESSAGES.camaras}
              className="rounded-xl px-8 py-4 text-base"
            >
              Cotizar instalación de cámaras
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* ═══════════════════ PRÓXIMAMENTE: GPS ═══════════════════ */}
      <section id="gps" className="bg-slate-950 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <span className="mb-6 inline-block rounded-full border border-brand-orange/30 bg-brand-orange/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-orange">
              Próximamente
            </span>
            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
              Monitoreo GPS para Flotas
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              Estamos desarrollando un sistema de seguimiento GPS para empresas
              de transporte y flotas de camiones.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
            {gpsBeneficios.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6 transition-all duration-300 hover:border-slate-600"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange/10">
                  <svg
                    className="h-5 w-5 text-brand-orange"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500">
              ¿Te interesa esta solución?{" "}
              <a
                href={waUrl(WHATSAPP_MESSAGES.contacto)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-orange transition-colors hover:underline"
              >
                Déjanos tus datos y te avisamos →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA FINAL ═══════════════════ */}
      <section id="contacto" className="bg-slate-950 py-20 text-white md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="mx-auto mb-8 h-px w-16 bg-brand-orange/40" />

          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Da el primer paso
          </p>

          <h2 className="mb-6 text-3xl font-bold leading-tight md:text-5xl">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400">
            Hablemos y construyamos una solución tecnológica adaptada a tus
            necesidades. Sin compromiso, sin presión.
          </p>

          <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={waUrl(WHATSAPP_MESSAGES.reunion)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-brand-orange/20 transition-colors hover:bg-brand-orange/90"
            >
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Agendar reunión
            </a>
            <WhatsAppButton
              className="rounded-xl px-10 py-4 text-lg"
              message={WHATSAPP_MESSAGES.contacto}
            >
              Hablar por WhatsApp
            </WhatsAppButton>
          </div>

          <p className="text-sm text-slate-500">
            Sin compromiso · Respuesta en menos de 2 horas · Consultoría
            gratuita
          </p>
        </div>
      </section>
    </>
  );
}
