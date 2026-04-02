"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";
import { COMPANY, WHATSAPP_MESSAGES } from "../config/constants";

interface Slide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: "sistemas-web",
    title: "Sistemas Web\nEmpresariales",
    subtitle: "Plataformas a medida",
    description:
      "Desarrollamos sistemas personalizados que permiten aumentar ventas, optimizar procesos y tener control total de tu negocio desde cualquier lugar.",
    image: "/images/hero/desarolladores.png",
  },
  {
    id: "desarrollo-web",
    title: "Desarrollo Web\nProfesional",
    subtitle: "Sitios que convierten",
    description:
      "Diseñamos sitios web modernos, rápidos y optimizados para Google. Experiencias digitales enfocadas en conversión y posicionamiento orgánico.",
    image: "/images/hero/software.png",
  },
  {
    id: "soporte",
    title: "Soporte\nTécnico",
    subtitle: "Equipos al máximo",
    description:
      "Servicio técnico especializado para empresas y particulares. Limpieza, reparación, armado de equipos y optimización de rendimiento.",
    image: "/images/hero/tecnico.png",
  },
  // {
  //   id: "seguridad",
  //   title: "Seguridad\ny Cámaras",
  //   subtitle: "Videovigilancia inteligente",
  //   description:
  //     "Instalamos cámaras de seguridad con monitoreo en tiempo real y acceso remoto. Soluciones para hogares, empresas y sectores rurales.",
  //   image: "/images/hero/camara.png",
  // },
  // {
  //   id: "gps",
  //   title: "GPS para\nFlotas",
  //   subtitle: "Próximamente",
  //   description:
  //     "Sistema de seguimiento GPS en tiempo real para empresas de transporte. Control de rutas, conductores y optimización operativa.",
  //   image: "/images/hero/gps.png",
  // },
];

function waUrl(msg: string) {
  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(msg)}`;
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  const active = slides[activeIndex];

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const handleImageError = useCallback((id: string) => {
    setImageErrors((prev) => new Set(prev).add(id));
  }, []);

  const padNum = (n: number) => String(n).padStart(2, "0");

  return (
    <section
      id="inicio"
      className="relative min-h-svh overflow-hidden bg-[#0B1120] text-white"
    >
      {/* ── Background image with fade ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          {!imageErrors.has(active.id) ? (
            <Image
              src={active.image}
              alt={active.title.replace("\n", " ")}
              fill
              className="object-cover"
              priority={activeIndex === 0}
              quality={85}
              onError={() => handleImageError(active.id)}
            />
          ) : null}
        </motion.div>
      </AnimatePresence>

      {/* ── Overlays ── */}
      <div className="absolute inset-0 z-1 bg-linear-to-r from-[#0B1120] via-[#0B1120]/85 to-[#0B1120]/40" />
      <div className="absolute inset-0 z-1 bg-linear-to-t from-[#0B1120] via-transparent to-[#0B1120]/60" />
      <div className="absolute inset-0 z-1 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.08),transparent_60%)]" />

      {/* ── Content ── */}
      <div className="relative z-10 flex min-h-svh flex-col justify-between px-4 pb-8 pt-24 md:px-8 lg:px-12">
        {/* ── Upper: Text content ── */}
        <div className="mx-auto w-full max-w-7xl flex-1 flex flex-col justify-center">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400"
            >
              {COMPANY.name}
            </motion.p>

            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${active.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="mb-6 whitespace-pre-line text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl xl:text-7xl"
              >
                {active.title}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${active.id}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 }}
                className="mb-10 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg"
              >
                {active.description}
              </motion.p>
            </AnimatePresence>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href={waUrl(WHATSAPP_MESSAGES.consultoria)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-500 hover:shadow-blue-500/30"
              >
                <svg
                  className="h-4 w-4"
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
                className="rounded-xl px-7 py-3.5 text-sm"
                message={WHATSAPP_MESSAGES.default}
              >
                Hablar por WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>

        {/* ── Lower: Cards + indicator ── */}
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex items-end justify-between gap-6">
            {/* Cards row */}
            <div className="flex-1 overflow-x-auto pb-2 scrollbar-hide md:overflow-visible">
              <div className="flex gap-3 md:gap-4" style={{ minWidth: "max-content" }}>
                {slides.map((slide, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => goTo(i)}
                      className={`group relative flex w-40 shrink-0 flex-col overflow-hidden rounded-xl border text-left transition-all duration-300 md:w-48 lg:w-56 ${
                        isActive
                          ? "border-blue-500/40 bg-white/10 shadow-[0_0_24px_rgba(59,130,246,0.2)] backdrop-blur-lg"
                          : "border-white/6 bg-white/3 backdrop-blur-sm hover:border-white/10 hover:bg-white/6"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeCardIndicator"
                          className="absolute -top-px left-4 right-4 h-[2px] rounded-full bg-blue-500 z-10"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}

                      <div className="relative h-20 w-full overflow-hidden md:h-24">
                        {!imageErrors.has(slide.id) ? (
                          <Image
                            src={slide.image}
                            alt={slide.title.replace("\n", " ")}
                            fill
                            className={`object-cover transition-all duration-500 ${
                              isActive
                                ? "scale-105 brightness-90"
                                : "scale-100 brightness-50 group-hover:brightness-75 group-hover:scale-105"
                            }`}
                            sizes="(max-width: 768px) 160px, 224px"
                            onError={() => handleImageError(slide.id)}
                          />
                        ) : null}
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                        <span
                          className={`absolute bottom-2 left-3 text-[10px] font-semibold uppercase tracking-widest ${
                            isActive ? "text-blue-400" : "text-slate-400"
                          }`}
                        >
                          {padNum(i + 1)}
                        </span>
                      </div>

                      <div className="p-3 pt-2">
                        <span
                          className={`mb-1 block text-sm font-semibold leading-tight ${
                            isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                          }`}
                        >
                          {slide.title.replace("\n", " ")}
                        </span>
                        <span
                          className={`text-xs leading-snug ${
                            isActive ? "text-slate-300" : "text-slate-500"
                          }`}
                        >
                          {slide.subtitle}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Indicator + nav */}
            <div className="hidden shrink-0 flex-col items-end gap-3 md:flex">
              <span className="font-mono text-sm text-slate-500">
                <span className="text-2xl font-bold text-white">
                  {padNum(activeIndex + 1)}
                </span>{" "}
                / {padNum(slides.length)}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={goPrev}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all hover:border-white/20 hover:text-white"
                  aria-label="Anterior"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={goNext}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all hover:border-white/20 hover:text-white"
                  aria-label="Siguiente"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
