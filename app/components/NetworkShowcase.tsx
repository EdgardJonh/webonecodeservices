import React from "react";

export default function NetworkShowcase() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 sm:h-full md:flex-row md:items-stretch">
        {/* Lado izquierdo: tarjetas conectadas */}
        <div className="relative w-full max-w-xl h-full overflow-visible rounded-3xl bg-gradient-to-br from-brand-gray/10 via-white to-brand-light/20 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
          {/* Líneas punteadas */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 400 400"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#D64218" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#605D5C" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <path
              d="M40 60 C 120 20, 200 40, 280 70"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
            />
            <path
              d="M70 170 C 150 200, 230 200, 320 160"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
            />
            <path
              d="M90 110 C 150 90, 220 100, 300 120"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
            />
          </svg>

          {/* Tarjetas (algunas mitad dentro / mitad fuera del contenedor) */}
          <div className="relative  h-[380px] min-h-[380px]">
            <NetworkCard
              label="Sitio web"
              role="Empresa principal"
              className="absolute left-[-1px] top-[79px] z-10"
              style={{ left: -1, top: 79 }}
            />
            <NetworkCard
              label="Landing campañas"
              role="Anuncios y tráfico pagado"
              className="absolute left-[116px] top-[157px] z-20"
              style={{ left: 116, top: 157 }}
            />
            <NetworkCard
              label="Tienda online"
              role="Ventas y catálogo"
              className="absolute left-[35px] top-[277px] z-10 "
              style={{ left: 35, top: 277 }}
            />
            <NetworkCard
              label="Sistema interno"
              role="Gestión de clientes"
              className="absolute left-[199px] top-[-46px] z-20"
              style={{ left: 199, top: -46 }}

            />
          </div>
        </div>

        {/* Lado derecho: texto descriptivo */}
        <div className="w-full max-w-xl text-center md:text-left">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            ONECODESERVICES
          </p>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
            Conecta todos los puntos
          </h2>
          <p className="mb-6 text-base leading-relaxed text-slate-600 md:text-lg">
            Integramos tu página web, landing pages, tienda online y sistemas
            internos para que todo tu ecosistema digital trabaje unido,
            automatizado y enfocado en generar más ventas.
          </p>
          <ul className="mb-8 space-y-2 text-sm text-slate-600">
            <li className="flex items-start justify-center gap-2 md:justify-start">
              <span className="mt-[6px] h-2 w-2 rounded-full bg-brand-orange" />
              <span>Arquitectura pensada para escalar tu negocio.</span>
            </li>
            <li className="flex items-start justify-center gap-2 md:justify-start">
              <span className="mt-[6px] h-2 w-2 rounded-full bg-brand-gray" />
              <span>Conexiones claras entre cada punto de contacto.</span>
            </li>
            <li className="flex items-start justify-center gap-2 md:justify-start">
              <span className="mt-[6px] h-2 w-2 rounded-full bg-brand-dark" />
              <span>Control total de leads, clientes y ventas en un solo lugar.</span>
            </li>
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start sm:gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800"
            >
              Ver cómo podemos integrarte
            </a>
            <p className="text-xs text-slate-500">
              Sin compromiso. Analizamos tu caso y te recomendamos la mejor
              estructura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

interface NetworkCardProps {
  label: string;
  role: string;
  className?: string;
  style?: React.CSSProperties;
}

function NetworkCard({ label, role, className = "", style }: NetworkCardProps) {
  return (
    <div
      className={`flex max-w-xs items-center justify-between rounded-2xl bg-brand-dark/95 px-4 py-3 shadow-[0_14px_40px_rgba(15,23,42,0.6)] backdrop-blur-sm ${className}`}
      style={style}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md">
          <span className="h-5 w-5 rounded-full bg-gradient-to-br from-brand-orange to-brand-dark" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{label}</p>
          <p className="text-[11px] text-slate-300">{role}</p>
        </div>
      </div>
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-orange/10">
        <span className="h-2.5 w-2.5 rounded-full bg-brand-orange" />
      </div>
    </div>
  );
}

