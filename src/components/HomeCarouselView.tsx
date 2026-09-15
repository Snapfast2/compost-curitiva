"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Sparkles,
  Users,
  ChevronRight,
  ExternalLink,
  MessageCircle,
  Calendar,
  Flower2,
  CheckCircle2,
  Sprout,
  Award,
} from "lucide-react";
import confetti from "canvas-confetti";
import { PACAS_DATA, PacaRecord, PARK_SUMMARY } from "@/data/pacasData";

interface HomeCarouselViewProps {
  onOpenMap: () => void;
  onNavigateToTab: (tab: string) => void;
}

export function HomeCarouselView({ onOpenMap, onNavigateToTab }: HomeCarouselViewProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [detailPaca, setDetailPaca] = useState<PacaRecord | null>(null);
  const [hasPledged, setHasPledged] = useState(false);

  const currentPaca = PACAS_DATA[activeSlide];

  const handlePledge = () => {
    if (!hasPledged) {
      setHasPledged(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#5C6B4A", "#9CAF88", "#B87339", "#C4A882"],
      });
    }
  };

  return (
    <div className="relative min-h-[85vh] flex flex-col justify-between">
      <AnimatePresence mode="wait">
        {!detailPaca ? (
          /* ============================================================ */
          /* PANTALLA 1: LAYOUT INICIAL DE LA REFERENCIA (Plant a billion) */
          /* ============================================================ */
          <motion.div
            key="carousel-screen"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-6 pt-2 pb-6"
          >
            {/* Top Eyebrow & Main Title */}
            <div className="space-y-1.5 px-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#5C6B4A]">
                Biotecnología limpia • Medellín
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#233321] tracking-tight leading-[1.1]">
                Parque de<br />las Pacas
              </h1>
              <p className="text-sm font-semibold text-[#5C6B4A] pt-2">
                Nuestras jornadas & pacas activas
              </p>
            </div>

            {/* Main Carousel Card (Inspirada exactamente en la tarjeta del monito) */}
            <div className="relative">
              <motion.div
                key={currentPaca.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                onClick={() => setDetailPaca(currentPaca)}
                className="group relative cursor-pointer overflow-hidden rounded-[36px] bg-[#233321] text-white shadow-xl shadow-[#233321]/20 border border-[#3E4B31] aspect-[4/5] sm:aspect-[4/4.5] flex flex-col justify-between p-6 sm:p-8"
              >
                {/* Background Artwork & Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#162215] via-[#233321]/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(#5C6B4A_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

                {/* Subtle Decorative Leaves Silhouette */}
                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#5C6B4A]/30 blur-2xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-[#B87339]/30 blur-2xl pointer-events-none" />

                {/* Card Top: Tag & Meeting Time */}
                <div className="relative z-20 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-white">
                    <span className="w-2 h-2 rounded-full bg-[#9CAF88] animate-pulse" />
                    {currentPaca.tag}
                  </span>

                  <span className="text-xs text-[#E5ECE0] font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#B87339]" />
                    <span>Dom 9:30 AM</span>
                  </span>
                </div>

                {/* Card Center: Visual Focus */}
                <div className="relative z-20 my-auto text-center space-y-2">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-3xl bg-[#5C6B4A]/40 border border-[#9CAF88]/30 flex items-center justify-center text-[#E5ECE0] shadow-inner shadow-black/30 group-hover:scale-105 transition-transform duration-300">
                    {activeSlide === 0 ? <Sparkles className="w-8 h-8 text-[#C4A882]" /> : activeSlide === 4 ? <Award className="w-8 h-8 text-[#C4A882]" /> : <Sprout className="w-8 h-8 text-[#9CAF88]" />}
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#9CAF88] font-bold">
                    <Flower2 className="w-3.5 h-3.5" />
                    <span>{currentPaca.floraTop}</span>
                  </div>
                </div>

                {/* Card Bottom: Titles & Floating Pill Button */}
                <div className="relative z-20 flex items-end justify-between gap-4 pt-4">
                  <div className="space-y-1 max-w-[65%]">
                    <p className="text-xs font-semibold text-[#9CAF88]">
                      Parque de las Pacas • Cl 38 # 64A-8
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                      {currentPaca.name}
                    </h3>
                    <p className="text-xs text-[#E5ECE0]/80 line-clamp-1">
                      {currentPaca.notes}
                    </p>
                  </div>

                  {/* Floating Pill Button (Like 'Plant your tree' in the image) */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setDetailPaca(currentPaca);
                    }}
                    className="shrink-0 px-4 py-3 rounded-full bg-[#5C6B4A] hover:bg-[#3E4B31] text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-black/30 transition-all transform active:scale-95 flex items-center gap-1.5"
                  >
                    <span>Ver detalles</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>

              {/* Dots Pagination below the card (Like '• • • •' in the image) */}
              <div className="flex items-center justify-center gap-2 pt-4">
                {PACAS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      activeSlide === idx
                        ? "w-7 h-2 bg-[#5C6B4A]"
                        : "w-2 h-2 bg-[#C4A882]/50 hover:bg-[#5C6B4A]/60"
                    }`}
                    aria-label={`Ir a paca ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Quick Call to Action Bar */}
            <div className="p-4 rounded-3xl bg-white border border-[#E3DAC8] shadow-xs flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-[#EFE7DA] text-[#B87339] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#B87339]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#233321]">
                    Calle 38 # 64A-8, Medellín
                  </p>
                  <p className="text-[11px] text-[#5C6B4A]">
                    Nos reunimos todos los domingos 9:30 AM
                  </p>
                </div>
              </div>
              <button
                onClick={onOpenMap}
                className="px-3.5 py-2 rounded-full bg-[#E5ECE0] text-[#3E4B31] hover:bg-[#5C6B4A] hover:text-white transition-all text-xs font-bold shrink-0"
              >
                Ver mapa
              </button>
            </div>
          </motion.div>
        ) : (
          /* ============================================================ */
          /* PANTALLA 2: HOJA DE DETALLE DESLIZANTE (Detail Sheet Layout)  */
          /* ============================================================ */
          <motion.div
            key="detail-screen"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative space-y-4 pt-1"
          >
            {/* Top Back Navigation Bar */}
            <div className="flex items-center justify-between px-1">
              <button
                onClick={() => setDetailPaca(null)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#233321] border border-[#E3DAC8] hover:bg-[#EFE7DA] text-xs font-bold transition-all shadow-xs"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Volver</span>
              </button>

              <button
                onClick={onOpenMap}
                className="px-4 py-1.5 rounded-full bg-[#5C6B4A] text-white text-xs font-bold hover:bg-[#3E4B31] transition-all shadow-xs"
              >
                Explorar mapa
              </button>
            </div>

            {/* Hero Visual Area of the Selected Paca */}
            <div className="relative rounded-[32px] overflow-hidden bg-[#233321] text-white p-6 sm:p-8 min-h-[220px] flex flex-col justify-end border border-[#3E4B31] shadow-md">
              <div className="absolute top-4 right-4 opacity-80">
                <Sprout className="w-10 h-10 text-[#9CAF88]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#9CAF88]">
                {detailPaca.tag}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                {detailPaca.name}
              </h2>
              <p className="text-xs text-[#E5ECE0]/85 mt-1">
                Inicio: {detailPaca.startDate} • Cosecha estimada: {detailPaca.harvestDate}
              </p>
            </div>

            {/* Sliding White Sheet (La hoja blanca que sube en la foto) */}
            <div className="p-6 sm:p-8 rounded-[36px] bg-white border border-[#E3DAC8] shadow-md space-y-6">
              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#233321] leading-tight">
                  Ayúdanos a transformar los residuos de la cocina en vida
                </h3>
                <p className="text-xs sm:text-sm text-[#5C6B4A] leading-relaxed">
                  En el Parque de las Pacas aplicamos la biotecnología de <strong>Guillermo Silva</strong>. Prensamos 250 kg de restos de cocina con 250 kg de hojarasca para fermentar sin moscas ni pudrición.
                </p>
              </div>

              {/* Progress and Stats */}
              <div className="grid grid-cols-3 gap-2.5 p-4 rounded-2xl bg-[#F8F3E8] border border-[#E3DAC8]">
                <div className="text-center">
                  <span className="block text-lg sm:text-xl font-black text-[#233321]">
                    {detailPaca.daysElapsed}
                  </span>
                  <span className="text-[10px] font-bold text-[#5C6B4A] uppercase">
                    Días activos
                  </span>
                </div>
                <div className="text-center border-x border-[#E3DAC8]">
                  <span className="block text-lg sm:text-xl font-black text-[#B87339]">
                    ~{detailPaca.projectedCompostKg} kg
                  </span>
                  <span className="text-[10px] font-bold text-[#915422] uppercase">
                    Abono fértil
                  </span>
                </div>
                <div className="text-center">
                  <span className="block text-lg sm:text-xl font-black text-[#3E4B31]">
                    0%
                  </span>
                  <span className="text-[10px] font-bold text-[#3E4B31] uppercase">
                    Mal Olor
                  </span>
                </div>
              </div>

              {/* Mini Gallery Thumbnails (Like the 3 square photos in the image) */}
              <div className="space-y-2">
                <p className="text-xs font-bold text-[#233321]">
                  Registro fotográfico & comunidad:
                </p>
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="relative rounded-2xl overflow-hidden aspect-square border border-[#E3DAC8] bg-[#EFE7DA] flex items-center justify-center text-center p-2 text-[11px] font-bold text-[#7A5835]">
                    <span>Prensado Comunitario</span>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden aspect-square border border-[#E3DAC8] bg-[#E5ECE0] flex items-center justify-center text-center p-2 text-[11px] font-bold text-[#3E4B31]">
                    <span>Nido de Hojarasca</span>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden aspect-square border border-[#E3DAC8] bg-[#EFE7DA] flex items-center justify-center text-center p-2 text-[11px] font-bold text-[#915422]">
                    <span>Humus Fértil</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={handlePledge}
                  disabled={hasPledged}
                  className={`w-full py-4 rounded-full font-extrabold text-sm sm:text-base transition-all shadow-md flex items-center justify-center gap-2 ${
                    hasPledged
                      ? "bg-[#5C6B4A] text-white"
                      : "bg-[#B87339] hover:bg-[#915422] text-white shadow-[#B87339]/30"
                  }`}
                >
                  {hasPledged ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-[#9CAF88]" />
                      <span>¡Balde confirmado para este domingo!</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-white" />
                      <span>Llevaré mi balde este domingo 9:30 AM</span>
                    </>
                  )}
                </button>

                <a
                  href={PARK_SUMMARY.whatsappGroup1Url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-[#E5ECE0] hover:bg-[#5C6B4A] text-[#3E4B31] hover:text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Unirme al grupo de WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
