"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MapPin, Globe, User, Home as HomeIcon, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

interface CleanHomeViewProps {
  onOpenMap: () => void;
  onOpenRayosX: () => void;
  onOpenBalde: () => void;
  onOpenComunidad: () => void;
}

const CARDS = [
  {
    id: "paca-6",
    title: "Paca #6: La Esperanza",
    subtitle: "Domingo 9:30 AM • Calle 38 # 64A-8",
    tagline: "El ritual del domingo",
    heading: "Ayúdanos a transformar los residuos de la cocina en bosque",
    description:
      "Cada domingo a las 9:30 AM nos reunimos en el parque con nuestros baldes de residuos orgánicos. Mediante la biotecnología de Guillermo Silva, comprimimos la comida en un cubo con hojarasca seca para fermentar al vacío, evitando malos olores y desviando toneladas de basura de La Pradera.",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop",
    thumb1:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=400&auto=format&fit=crop",
    thumb2:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=400&auto=format&fit=crop",
    thumb3:
      "/Imgbase/WhatsApp%20Image%202026-09-04%20at%204.09.34%20PM.jpeg",
  },
  {
    id: "paca-5",
    title: "Paca #5: Guayacán",
    subtitle: "En maduración activa • Día 23",
    tagline: "Fase microbiológica",
    heading: "La vida invisible trabajando bajo nuestros pies",
    description:
      "Esta paca superó la fase térmica inicial de 60°C donde se higienizó todo el material orgánico. Ahora miles de microorganismos, hongos del bosque nativo y larvas recicladoras transforman los residuos en mantillo fértil sin generar una sola gota de lixiviados contaminantes.",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1000&auto=format&fit=crop",
    thumb1:
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=400&auto=format&fit=crop",
    thumb2:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=400&auto=format&fit=crop",
    thumb3:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "paca-2",
    title: "Paca #2: Conquistadores",
    subtitle: "¡Cosecha de abono lista! • 152 kg",
    tagline: "El ciclo cerrado",
    heading: "El oro negro que regresa a las jardineras del barrio",
    description:
      "Tras 6 meses exactos de fermentación e hidratación natural, esta paca se convirtió en 152 kg de mantillo puro de bosque nativo. Los vecinos que aportaron sus baldes pueden reclamar su bolsa de abono para enriquecer sus plantas y huertas caseras.",
    image:
      "https://images.unsplash.com/photo-1511497584788-87676104235f?q=80&w=1000&auto=format&fit=crop",
    thumb1:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=400&auto=format&fit=crop",
    thumb2:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=400&auto=format&fit=crop",
    thumb3:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=400&auto=format&fit=crop",
  },
];

export function CleanHomeView({
  onOpenMap,
  onOpenRayosX,
  onOpenBalde,
  onOpenComunidad,
}: CleanHomeViewProps) {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState<(typeof CARDS)[0] | null>(null);
  const [hasPledged, setHasPledged] = useState(false);

  const activeCard = CARDS[activeCardIndex];

  const handlePledge = () => {
    if (!hasPledged) {
      setHasPledged(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.8 },
        colors: ["#2D4C30", "#6E8B6B", "#C4A882", "#E8DFD1"],
      });
    }
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md mx-auto min-h-[92vh] flex flex-col justify-between select-none">
      <AnimatePresence mode="wait">
        {!selectedCard ? (
          /* ========================================================= */
          /* PANTALLA 1: IDÉNTICA AL TELÉFONO IZQUIERDO DE TU REFERENCIA */
          /* ========================================================= */
          <motion.div
            key="home-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col justify-between flex-1 pt-2 pb-24"
          >
            {/* Top Typography Header */}
            <div className="space-y-1 pt-2 px-1">
              <p className="text-[11px] uppercase tracking-wider font-semibold text-[#5F7B61]">
                Biotecnología limpia • Medellín
              </p>
              <h1 className="text-3xl sm:text-[34px] font-extrabold text-[#1B311E] tracking-tight leading-[1.15]">
                Parque de<br />las Pacas
              </h1>
              <h2 className="text-[15px] font-semibold text-[#3B543E] pt-5 pb-1">
                Nuestras pacas activas
              </h2>
            </div>

            {/* Main Photo Card Carousel (Exact geometry from image) */}
            <div className="relative mt-1">
              <motion.div
                key={activeCard.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedCard(activeCard)}
                className="group relative cursor-pointer overflow-hidden rounded-[34px] aspect-[3.7/4.8] shadow-lg shadow-black/15 flex flex-col justify-end p-6 border border-black/5"
              >
                {/* Full-Bleed High-Res Photograph */}
                <Image
                  src={activeCard.image}
                  alt={activeCard.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Vignette Overlay for Crisp White Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-10" />

                {/* Card Interior Text (Left aligned) */}
                <div className="relative z-20 space-y-1 pr-24">
                  <h3 className="text-2xl sm:text-[26px] font-extrabold text-white tracking-tight leading-tight">
                    {activeCard.title}
                  </h3>
                  <p className="text-[12px] text-white/80 font-normal leading-snug">
                    {activeCard.subtitle}
                  </p>
                </div>

                {/* Floating Embedded Pill Button (Bottom Right - Exactly like 'Plant your tree') */}
                <div className="absolute bottom-5 right-5 z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCard(activeCard);
                    }}
                    className="px-4 py-2.5 rounded-full bg-[#2E4A32] hover:bg-[#203623] text-white text-[12px] font-bold shadow-md shadow-black/30 transition-transform active:scale-95"
                  >
                    Llevar mi balde
                  </button>
                </div>
              </motion.div>

              {/* Next Peeking Card Hint (Visual Carousel indication) */}
              <div
                onClick={() =>
                  setActiveCardIndex((prev) => (prev + 1) % CARDS.length)
                }
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-5 h-72 rounded-l-2xl bg-black/15 backdrop-blur-xs cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                title="Siguiente paca"
              />

              {/* 4 Pagination Dots below the card */}
              <div className="flex items-center justify-center gap-2 pt-4">
                {CARDS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCardIndex(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      activeCardIndex === idx
                        ? "w-2.5 h-2.5 bg-[#2E4A32]"
                        : "w-2 h-2 bg-[#BDCEBE]"
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          /* ========================================================= */
          /* PANTALLA 2: IDÉNTICA AL TELÉFONO DERECHO DE TU REFERENCIA  */
          /* ========================================================= */
          <motion.div
            key="detail-screen"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 35 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            className="flex flex-col min-h-[90vh] justify-between pb-6"
          >
            {/* Top Photo Section with Navigation & Floating Pill */}
            <div className="relative w-full aspect-[4/3.8] rounded-[34px] overflow-hidden p-6 flex flex-col justify-between shadow-md">
              {/* High-Res Photography */}
              <Image
                src={selectedCard.image}
                alt={selectedCard.title}
                fill
                priority
                className="object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />

              {/* Top Navigation Row: Back Button */}
              <div className="relative z-20 flex items-center justify-between">
                <button
                  onClick={() => setSelectedCard(null)}
                  className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/50 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              </div>

              {/* Photo Bottom Info & Floating Map Button */}
              <div className="relative z-20 flex items-end justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-[11px] text-white/80 font-medium tracking-wide">
                    {selectedCard.tagline}
                  </p>
                  <h2 className="text-2xl sm:text-[28px] font-black text-white leading-tight">
                    {selectedCard.title}
                  </h2>
                  {/* Dots inside detail */}
                  <div className="flex items-center gap-1.5 pt-1.5">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                  </div>
                </div>

                {/* Floating Map Pill Button (Overlapping nicely on right side) */}
                <button
                  onClick={onOpenMap}
                  className="px-4 py-2 rounded-full bg-[#6E8B6B] hover:bg-[#5C7859] text-white text-xs font-bold shadow-md transition-colors shrink-0"
                >
                  Explorar mapa
                </button>
              </div>
            </div>

            {/* Bottom Solid White Sheet (Curved top, clean typography) */}
            <div className="bg-white rounded-[34px] p-6 sm:p-7 shadow-lg border border-[#E8DFD1] space-y-5 -mt-6 relative z-30">
              {/* Heading */}
              <h3 className="text-lg sm:text-[19px] font-extrabold text-[#1B311E] leading-snug">
                {selectedCard.heading}
              </h3>

              {/* Paragraph Copy */}
              <p className="text-xs sm:text-[13px] text-[#4F6851] leading-relaxed">
                {selectedCard.description}
              </p>

              {/* 3 Real Thumbnail Photographs in a Row (Exactly like the 3 squares in the image) */}
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-black/5 bg-[#EAE3D5]">
                  <Image
                    src={selectedCard.thumb1}
                    alt="Paca Comunitaria"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-black/5 bg-[#EAE3D5]">
                  <Image
                    src={selectedCard.thumb2}
                    alt="Tierra y Abono"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-black/5 bg-[#EAE3D5]">
                  <Image
                    src={selectedCard.thumb3}
                    alt="Mapa Parque"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Bottom Large CTA Pill Button (Centered full width inside sheet) */}
              <div className="pt-2">
                <button
                  onClick={handlePledge}
                  disabled={hasPledged}
                  className={`w-full py-4 rounded-full font-extrabold text-sm transition-all shadow-md flex items-center justify-center gap-2 ${
                    hasPledged
                      ? "bg-[#456A49] text-white cursor-default"
                      : "bg-[#27442A] hover:bg-[#1A311D] text-white active:scale-98 shadow-[#27442A]/30"
                  }`}
                >
                  {hasPledged ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-[#A1C9A5]" />
                      <span>¡Balde confirmado para el domingo! 🎉</span>
                    </>
                  ) : (
                    <span>Llevar mi balde este domingo</span>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Bottom Navigation Dock (Like in reference) */}
      {!selectedCard && (
        <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 px-3 py-2 rounded-full bg-[#27442A]/95 text-white backdrop-blur-md border border-[#3E6142] shadow-xl shadow-black/25 flex items-center gap-3">
          <button
            onClick={() => setSelectedCard(null)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#3F6342] text-white text-xs font-bold shadow-xs"
          >
            <HomeIcon className="w-3.5 h-3.5" />
            <span>Inicio</span>
          </button>

          <button
            onClick={onOpenRayosX}
            className="p-2 rounded-full text-white/80 hover:text-white transition-colors"
            title="Rayos X Paca"
          >
            <Globe className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenBalde}
            className="p-2 rounded-full text-white/80 hover:text-white transition-colors"
            title="Guía del Balde"
          >
            <User className="w-4 h-4" />
          </button>
        </nav>
      )}
    </div>
  );
}
