import { COMPANY } from "../config/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/50 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <h3 className="mb-3 text-lg font-semibold text-white">
              {COMPANY.name}
            </h3>
            <p className="text-sm leading-relaxed">
              {COMPANY.description}. Tecnología que impulsa y protege tu
              negocio.
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
                  href="#sistemas-web"
                  className="transition-colors hover:text-white"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#soporte"
                  className="transition-colors hover:text-white"
                >
                  Soporte
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
              Servicios
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#sistemas-web"
                  className="transition-colors hover:text-white"
                >
                  Sistemas Web Empresariales
                </a>
              </li>
              <li>
                <a
                  href="#desarrollo-web"
                  className="transition-colors hover:text-white"
                >
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a
                  href="#soporte"
                  className="transition-colors hover:text-white"
                >
                  Soporte Técnico
                </a>
              </li>
              <li>
                <a
                  href="#camaras"
                  className="transition-colors hover:text-white"
                >
                  Cámaras de Seguridad
                </a>
              </li>
              <li>
                <a
                  href="#gps"
                  className="transition-colors hover:text-white"
                >
                  GPS para Flotas
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
          <p>Soluciones tecnológicas integrales en Chile.</p>
        </div>
      </div>
    </footer>
  );
}
