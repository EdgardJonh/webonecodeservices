import WhatsAppButton from "./WhatsAppButton";
import { WHATSAPP_MESSAGES } from "../config/constants";

export default function ServicesSection() {
    const plans = [
        {
            name: "Plan Start",
            price: "$75.000",
            features: [
                "Página Web de hasta 4 Secciones de contenido",
                "Optimizado para Convertir Visitas en Clientes",
                "Hosting y Dominio Web Profesional",
            ],
            plazo: "5 Días Hábiles",
            highlight: false,
        },
        {
            name: "Plan Pro",
            price: "$150.000",
            features: [
                "Página Web de hasta 7 Secciones de contenido",
                "Optimizado para Convertir Visitas en Clientes",
                "Hosting y Dominio Web Profesional",
            ],
            plazo: "7 Días Hábiles",
            highlight: false,
        },
        {
            name: "Plan Plus",
            price: "$250.000",
            features: [
                "Página Web de hasta 10 Secciones de contenido",
                "Optimizado para Convertir Visitas en Clientes",
                "Hosting y Dominio Web Profesional",
            ],
            plazo: "10 Días Hábiles",
            highlight: true,
        },
        {
            name: "Plan Store",
            price: "$350.000",
            features: [
                "Tienda Online de productos",
                "Integración de pagos con WebPay Plus",
                "Optimizado para Convertir Visitas en Clientes",
                "Hosting y Dominio Web Profesional",
            ],
            plazo: "10 Días Hábiles",
            highlight: false,
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">
                        Nuestros Servicios
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Elige el plan perfecto para tu negocio. Todos incluyen diseño
                        profesional y soporte continuo.
                    </p>
                </div>

                {/* Plans Grid */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 relative ${plan.highlight ? "border-2 border-brand-orange" : ""
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-brand-orange text-white px-4 py-1 rounded-full text-sm font-semibold">
                                        Más elegido
                                    </span>
                                </div>
                            )}

                            {/* Nombre del plan */}
                            <h3 className="text-2xl font-bold text-[#0a1628] mb-4">{plan.name}</h3>

                            {/* Precio destacado */}
                            <div className="mb-2">
                                <div className="text-4xl font-bold text-brand-orange">{plan.price}</div>
                                <p className="text-sm text-gray-600 mt-1">+ IVA | Pago único</p>
                            </div>

                            {/* Plazo de entrega con ícono */}
                            <div className="flex items-center gap-2 mb-6 text-gray-700">
                                <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="font-semibold">Plazo: {plan.plazo}</span>
                            </div>

                            {/* Lista de características */}
                            <ul className="space-y-3 mb-6">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start">
                                        <svg className="w-5 h-5 text-brand-orange mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Botón CTA */}
                            <WhatsAppButton
                                variant="primary"
                                className="w-full justify-center"
                                message={`Hola, me interesa el ${plan.name}`}
                            >
                                ¿Conversemos?
                            </WhatsAppButton>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
                    <h2 className="text-2xl font-bold text-[#0a1628] mb-4">
                        ¿No estás seguro qué plan elegir?
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Contáctanos y te ayudaremos a encontrar la solución perfecta para tu
                        negocio. Todas las cotizaciones son sin compromiso.
                    </p>
                    <WhatsAppButton variant="secondary">
                        Hablar con un experto
                    </WhatsAppButton>
                </div>
            </div>
        </div>
    );
}
