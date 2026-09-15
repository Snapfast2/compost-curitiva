"use client";

import React from "react";
import { Sparkles, QrCode, MapPin, MessageCircle } from "lucide-react";

interface HeaderProps {
  onOpenPosterModal: () => void;
  onOpenMap: () => void;
}

export function Header({ onOpenPosterModal, onOpenMap }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#F8F3E8]/90 backdrop-blur-md border-b border-[#E3DAC8] transition-all">
      <div className="max-w-4xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        {/* Brand & Location */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#5C6B4A] flex items-center justify-center text-white shadow-sm shadow-[#5C6B4A]/30">
            <span className="text-xl">🌱</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-base sm:text-lg font-bold tracking-tight text-[#233321]">
                Paca Viva
              </h1>
              <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#E5ECE0] text-[#3E4B31]">
                Comunitario
              </span>
            </div>
            <button
              onClick={onOpenMap}
              className="flex items-center gap-1 text-xs text-[#5C6B4A] hover:text-[#3E4B31] transition-colors"
            >
              <MapPin className="w-3 h-3" />
              <span>Parque de las Pacas • Cl 38 # 64A-8</span>
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenPosterModal}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full bg-[#EFE7DA] text-[#915422] hover:bg-[#B87339] hover:text-white transition-all shadow-xs"
            title="Generar cartel con QR para imprimir"
          >
            <QrCode className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Cartel QR</span>
          </button>

          <a
            href="https://chat.whatsapp.com/sample-compost-vecinos-1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full bg-[#5C6B4A] text-white hover:bg-[#3E4B31] transition-all shadow-sm shadow-[#5C6B4A]/25"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
