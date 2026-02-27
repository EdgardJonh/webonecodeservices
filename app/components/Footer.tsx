import { COMPANY } from "../config/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/50 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-semibold text-white">
              {COMPANY.name}
            </h3>
            <p className="text-sm leading-relaxed">
              {COMPANY.description}. Sitios web y sistemas que ayudan a tu
              empresa a conseguir más clientes.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#inicio"
                  className="transition-colors hover:text-white"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="transition-colors hover:text-white"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#proceso"
                  className="transition-colors hover:text-white"
                >
                  Proceso
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="transition-colors hover:text-white"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Contacto
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="transition-colors hover:text-white"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li>WhatsApp · Disponible 24/7</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800/50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-slate-600 md:flex-row">
          <p>
            © {year} {COMPANY.name}. Todos los derechos reservados.
          </p>
          <p>Diseñado para convertir visitantes en clientes.</p>
        </div>
      </div>
    </footer>
  );
}
