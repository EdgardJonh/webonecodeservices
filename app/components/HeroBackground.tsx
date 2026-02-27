"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroBackground() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="absolute inset-0 z-0">
      {!imageError ? (
        <Image
          src="/images/hero/fondo3.png" // Imagen de fondo del hero
          alt="Fondo hero"
          fill
          className="object-cover"
          priority
          quality={90}
          onError={() => setImageError(true)}
        />
      ) : null}
      {/* Overlay oscuro para mejorar legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand-darker/85 to-brand-dark/90"></div>
    </div>
  );
}
