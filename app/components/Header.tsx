"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { COMPANY, WHATSAPP_MESSAGES } from "../config/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sistemas-web", label: "Servicios" },
    { href: "#soporte", label: "Soporte" },
    { href: "#camaras", label: "Seguridad" },
    { href: "#contacto", label: "Contacto" },
  ];

  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGES.consultoria)}`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/95 text-white backdrop-blur-md">
      <nav className="mx-auto max-w-6xl px-4 py-3.5">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-white shadow-md">
              <Image
                src="/images/logo/Logo elegante de OneCode.png"
                alt={COMPANY.name}
                width={64}
                height={64}
                className="h-full w-full scale-110 object-contain transition-transform duration-300 ease-in-out group-hover:scale-[1.35]"
                priority
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              OneCode <span className="text-teal-400">Services</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-brand-orange px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-orange/90"
            >
              Agenda tu llamada
            </a>
          </div>

          <button
            className="p-2 text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menú"
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="flex flex-col gap-4 border-t border-slate-800 pt-4 pb-4 mt-4 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-1 text-slate-300 transition-colors hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-brand-orange px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-orange/90"
              onClick={() => setIsMenuOpen(false)}
            >
              Agenda tu llamada
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
