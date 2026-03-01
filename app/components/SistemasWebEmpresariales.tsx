import WhatsAppButton from "./WhatsAppButton";
import { WHATSAPP_MESSAGES } from "../config/constants";

export default function SistemasWebEmpresariales({ sistemasWebBeneficios }: { sistemasWebBeneficios: { title: string; desc: string; icon: React.ReactNode }[] }) {
    return (
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
    )
}