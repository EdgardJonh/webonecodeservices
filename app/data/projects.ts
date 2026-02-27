export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  type: "web" | "sistema";
  technologies?: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Sitio Web Empresarial",
    description:
      "Página web moderna y responsive para empresa de servicios. Incluye diseño profesional, formularios de contacto y optimización SEO.",
    image: "/images/projects/project1.jpg", // Reemplazar con imagen real
    url: "https://ejemplo1.com",
    type: "web",
    technologies: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    id: "2",
    title: "Sistema de Gestión",
    description:
      "Sistema completo de gestión empresarial con panel de administración, gestión de usuarios y reportes en tiempo real.",
    image: "/images/projects/project2.jpg", // Reemplazar con imagen real
    url: "https://ejemplo2.com",
    type: "sistema",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "3",
    title: "E-commerce Profesional",
    description:
      "Tienda en línea completa con carrito de compras, pasarela de pagos integrada y panel de administración de productos.",
    image: "/images/projects/project3.jpg", // Reemplazar con imagen real
    url: "https://ejemplo3.com",
    type: "web",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    id: "4",
    title: "Sistema CRM",
    description:
      "Sistema de gestión de relaciones con clientes con seguimiento de leads, pipeline de ventas y automatizaciones.",
    image: "/images/projects/project4.jpg", // Reemplazar con imagen real
    url: "https://ejemplo4.com",
    type: "sistema",
    technologies: ["Vue.js", "Laravel", "MySQL"],
  },
  {
    id: "5",
    title: "Landing Page de Alto Rendimiento",
    description:
      "Landing page optimizada para conversión con diseño atractivo, formularios optimizados y integración con herramientas de marketing.",
    image: "/images/projects/project5.jpg", // Reemplazar con imagen real
    url: "https://ejemplo5.com",
    type: "web",
    technologies: ["React", "TypeScript", "Framer Motion"],
  },
  {
    id: "6",
    title: "Sistema de Inventario",
    description:
      "Sistema completo de gestión de inventario con control de stock, alertas automáticas y reportes detallados.",
    image: "/images/projects/project6.jpg", // Reemplazar con imagen real
    url: "https://ejemplo6.com",
    type: "sistema",
    technologies: ["Angular", "Node.js", "MongoDB"],
  },
];
