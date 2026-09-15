"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Navigation, ExternalLink, Clock, Sparkles } from "lucide-react";
import { PARK_SUMMARY } from "@/data/pacasData";

export function ParkMapCard() {
  return (
    <section id="ubicacion" className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5ECE0] text-[#3E4B31] text-xs font-bold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Punto de Encuentro</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#233321] tracking-tight">
            El Parque de las Pacas
          </h3>
          <p className="text-sm text-[#5C6B4A] mt-1 max-w-xl">
            Nos vemos en la zona verde de la <strong>Calle 38 # 64A-8</strong>, barrio Conquistadores, cerca de la Transversal 39 y Carrera 64A.
          </p>
        </div>
      </div>

      {/* Map Card */}
      <div className="p-5 sm:p-6 rounded-3xl bg-white border border-[#E3DAC8] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Real Map Image Preview from Imgbase (5 cols) */}
        <div className="lg:col-span-5 relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-[#E3DAC8] shadow-inner bg-[#EFE7DA]">
          <Image
            src="/Imgbase/WhatsApp%20Image%202026-09-04%20at%204.09.34%20PM.jpeg"
            alt="Mapa del Parque de las Pacas en Calle 38 # 64A-8"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#233321]/90 text-white text-xs font-bold backdrop-blur-xs flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#9CAF88] animate-ping" />
            <span>Zona Verde Activa</span>
          </div>
        </div>

        {/* Location Details & Navigation CTAs (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-5">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#B87339] uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>Todos los domingos a las 9:30 AM</span>
            </div>

            <h4 className="text-xl sm:text-2xl font-black text-[#233321]">
              Calle 38 # 64A-8, Medellín
            </h4>

            <p className="text-sm text-[#5C6B4A] leading-relaxed">
              Fácil acceso desde la Carrera 64, Transversal 39 y Parques del Río. El parque cuenta con amplia zona de sombra, árboles nativos y espacio para los niños y mascotas.
            </p>

            <div className="p-3.5 rounded-2xl bg-[#F8F3E8] border border-[#E3DAC8] text-xs text-[#7A5835] space-y-1">
              <p>
                👟 <strong>Recomendación:</strong> Ven con calzado cómodo para saltar sobre la paca (tenis o botas).
              </p>
              <p>
                🪣 <strong>Aseo de baldes:</strong> En el parque tenemos punto de agua para enjuagar tu balde antes de regresar a casa.
              </p>
            </div>
          </div>

          {/* Navigation Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://maps.google.com/?q=Calle+38+%23+64A-8,+Medellin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[150px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#5C6B4A] hover:bg-[#3E4B31] text-white font-bold text-xs sm:text-sm transition-all shadow-xs"
            >
              <Navigation className="w-4 h-4" />
              <span>Abrir en Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>

            <a
              href="https://waze.com/ul?q=Calle+38+%23+64A-8,+Medellin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#EFE7DA] hover:bg-[#C4A882]/40 text-[#915422] font-bold text-xs sm:text-sm border border-[#C4A882]/30 transition-all"
            >
              <span>Abrir en Waze</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
