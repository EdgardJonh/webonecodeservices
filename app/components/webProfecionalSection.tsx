import WhatsAppButton from "./WhatsAppButton";
import { sistemasWebBeneficios } from "../data/beneficios";
import { WHATSAPP_MESSAGES } from "../config/constants";

export default function webProfecionalSection(){
  
    return(
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
                    {sistemasWebBeneficios.map((item, i) => (
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
                            <path
                              strokeLinecap={item.iconPath.strokeLinecap}
                              strokeLinejoin={item.iconPath.strokeLinejoin}
                              strokeWidth={item.iconPath.strokeWidth}
                              d={item.iconPath.d}
                            />
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
    )
}