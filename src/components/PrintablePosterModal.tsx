"use client";

import React, { useRef } from "react";
import { X, Printer, QrCode, Sparkles, MapPin, Clock, Download } from "lucide-react";

interface PrintablePosterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrintablePosterModal({ isOpen, onClose }: PrintablePosterModalProps) {
  const posterRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E3DAC8] my-8 space-y-6">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E3DAC8]">
          <div className="flex items-center gap-2 text-[#5C6B4A]">
            <QrCode className="w-5 h-5 text-[#B87339]" />
            <h3 className="font-extrabold text-base sm:text-lg text-[#233321]">
              Cartel Oficial para Imprimir & Plastificar
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#B87339] text-white text-xs font-bold hover:bg-[#915422] transition-colors shadow-xs"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#EFE7DA] text-[#7A5835] hover:bg-[#C4A882]/40 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* The Printable Poster Area (printable on A4) */}
        <div
          ref={posterRef}
          id="printable-poster"
          className="p-6 sm:p-8 rounded-2xl bg-[#FCFAF6] border-2 border-dashed border-[#5C6B4A] flex flex-col items-center text-center space-y-5"
        >
          {/* Poster Header */}
          <div className="space-y-1">
            <span className="text-xs font-black uppercase tracking-widest text-[#B87339] px-3 py-1 rounded-full bg-[#EFE7DA]">
              Biotecnología Guillermo Silva • Medellín
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#233321] tracking-tight uppercase mt-2">
              Parque de las Pacas
            </h2>
            <p className="text-sm font-semibold text-[#5C6B4A]">
              Compost Comunitario entre Vecinos • Conquistadores
            </p>
          </div>

          {/* Slogan */}
          <div className="p-3.5 rounded-xl bg-[#233321] text-white w-full max-w-md">
            <p className="text-xs sm:text-sm font-bold leading-snug">
              «Aquí no botamos los residuos: fabricamos tierra viva para el barrio sin moscas ni malos olores»
            </p>
          </div>

          {/* Visual QR Section */}
          <div className="p-4 rounded-2xl bg-white border-2 border-[#5C6B4A] shadow-sm flex flex-col items-center gap-2">
            {/* SVG QR Code Illustration */}
            <div className="w-40 h-40 sm:w-48 sm:h-48 relative flex items-center justify-center bg-[#F8F3E8] p-2 rounded-xl">
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#233321]">
                {/* SVG QR Pattern representation */}
                <rect width="100" height="100" fill="#F8F3E8" rx="8" />
                {/* Top-left marker */}
                <rect x="8" y="8" width="28" height="28" fill="#233321" rx="4" />
                <rect x="14" y="14" width="16" height="16" fill="#F8F3E8" />
                <rect x="18" y="18" width="8" height="8" fill="#233321" />

                {/* Top-right marker */}
                <rect x="64" y="8" width="28" height="28" fill="#233321" rx="4" />
                <rect x="70" y="14" width="16" height="16" fill="#F8F3E8" />
                <rect x="74" y="18" width="8" height="8" fill="#233321" />

                {/* Bottom-left marker */}
                <rect x="8" y="64" width="28" height="28" fill="#233321" rx="4" />
                <rect x="14" y="70" width="16" height="16" fill="#F8F3E8" />
                <rect x="18" y="74" width="8" height="8" fill="#233321" />

                {/* Center eco icon badge */}
                <circle cx="50" cy="50" r="12" fill="#5C6B4A" />
                <text x="50" y="55" fontSize="11" textAnchor="middle" fill="#FFFFFF">🌱</text>

                {/* Pixel modules */}
                <rect x="42" y="12" width="6" height="6" fill="#233321" />
                <rect x="52" y="12" width="6" height="12" fill="#233321" />
                <rect x="42" y="24" width="16" height="6" fill="#233321" />
                <rect x="12" y="42" width="6" height="14" fill="#233321" />
                <rect x="24" y="42" width="12" height="6" fill="#233321" />
                <rect x="22" y="52" width="6" height="6" fill="#233321" />
                <rect x="68" y="42" width="8" height="6" fill="#233321" />
                <rect x="80" y="42" width="10" height="12" fill="#233321" />
                <rect x="68" y="52" width="8" height="10" fill="#233321" />
                <rect x="42" y="68" width="14" height="6" fill="#233321" />
                <rect x="52" y="78" width="6" height="12" fill="#233321" />
                <rect x="42" y="84" width="6" height="6" fill="#233321" />
                <rect x="68" y="68" width="22" height="6" fill="#233321" />
                <rect x="68" y="78" width="8" height="12" fill="#233321" />
                <rect x="82" y="84" width="8" height="6" fill="#233321" />
              </svg>
            </div>
            <span className="text-xs font-black text-[#5C6B4A] uppercase tracking-wider">
              ¡Escanea con tu celular para aprender más!
            </span>
          </div>

          {/* Meeting Details */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-md text-left">
            <div className="p-3 bg-white rounded-xl border border-[#E3DAC8]">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#B87339] mb-1">
                <Clock className="w-3.5 h-3.5" />
                <span>¿Cuándo?</span>
              </div>
              <p className="text-xs font-black text-[#233321]">
                Todos los domingos
              </p>
              <p className="text-xs text-[#5C6B4A]">
                9:30 AM en punto
              </p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-[#E3DAC8]">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#B87339] mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>¿Dónde?</span>
              </div>
              <p className="text-xs font-black text-[#233321]">
                Calle 38 # 64A-8
              </p>
              <p className="text-xs text-[#5C6B4A]">
                Parque de las Pacas
              </p>
            </div>
          </div>

          {/* Golden Rules Footer */}
          <div className="w-full text-xs text-[#7A5835] space-y-1 border-t border-[#E3DAC8] pt-3">
            <p>
              ✅ <strong>SÍ traer:</strong> Cáscaras, comida cocida, carnes, huesos pequeños, café, servilletas.
            </p>
            <p>
              🚫 <strong>NO traer:</strong> Bolsas plásticas, stickers de frutas, vidrios ni químicos.
            </p>
          </div>
        </div>

        {/* Helper text */}
        <p className="text-xs text-center text-[#5C6B4A]">
          Consejo: Puedes imprimirlo a color en tamaño carta, plastificarlo y colocarlo con una amarra plástica en el poste o árbol junto a la paca activa.
        </p>
      </div>
    </div>
  );
}
