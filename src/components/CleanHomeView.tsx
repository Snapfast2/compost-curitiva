"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MapPin, Globe, User, Home as HomeIcon, CheckCircle2, Compass, MessageCircle } from "lucide-react";
import confetti from "canvas-confetti";

interface CleanHomeViewProps {
  onOpenMap: () => void;
  onOpenRayosX: () => void;
  onOpenBalde: () => void;
  onOpenComunidad: () => void;
  onOpenTour?: () => void;
  onOpenWhatsApp?: () => void;
  onDetailChange?: (isOpen: boolean) => void;
}

const CARDS = [
  {
    id: "paca-342",
    title: "Paca #342: Próximo Domingo",
    subtitle: "Domingo 9:30 AM • Calle 38 # 64A-8",
    tagline: "Hito comunitario • +341 pacas",
    heading: "La paca que construiremos juntos este domingo",
    description:
      "El pasado 13 de septiembre alcanzamos la paca #341 en el Parque de las Pacas. Este domingo a las 9:30 AM fabricaremos juntos la #342. Trae tu balde con cáscaras y sobras de cocina para prensarlas con hojarasca seca, evitando malos olores y desviando toneladas de basura de La Pradera.",
    image: "/community/comunidad-grupo.jpg",
    thumb1: "/community/domingo-actividad.jpg",
    thumb2: "/community/pisado-pison.jpg",
    thumb3: "/community/molde-silva.jpg",
  },
  {
    id: "paca-341",
    title: "Paca #341: Recién Prensada",
    subtitle: "13 de Septiembre • 2 días activa",
    tagline: "Fase térmica activa (60°C)",
    heading: "La última paca del parque higienizándose al calor natural",
    description:
      "Armada el domingo 13 de septiembre por los vecinos del barrio. Dentro del cubo, los microorganismos fermentadores elevan la temperatura hasta 60°C de forma natural, destruyendo cualquier patógeno e iniciando la descomposición biológica sin moscas ni malos olores.",
    image: "/community/pisado-vecina.jpg",
    thumb1: "/community/reunion-arboles.jpg",
    thumb2: "/community/paca-ensamblada.jpg",
    thumb3: "/community/pisado-pison.jpg",
  },
  {
    id: "cosecha-abono",
    title: "Cosecha de Abono Vivo",
    subtitle: "+50 Toneladas cosechadas en el barrio",
    tagline: "El ciclo cerrado",
    heading: "El oro negro que regresa a las jardineras y la huerta",
    description:
      "A lo largo de más de 341 pacas construidas en el barrio, hemos producido más de 50 toneladas de mantillo vivo. Los vecinos que traen su balde pueden llevar periódicamente abono para sus plantas, árboles del parque y la huerta comunitaria.",
    image: "/community/tierra-cosecha.jpg",
    thumb1: "/community/huerta-bancal.jpg",
    thumb2: "/community/huerta-vecinos.jpg",
    thumb3: "/community/comunidad-grupo.jpg",
  },
];

export function CleanHomeView({
  onOpenMap,
  onOpenRayosX,
  onOpenBalde,
  onOpenComunidad,
  onOpenTour,
  onOpenWhatsApp,
  onDetailChange,
}: CleanHomeViewProps) {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState<(typeof CARDS)[0] | null>(null);
  const [hasPledged, setHasPledged] = useState(false);

  const activeCard = CARDS[activeCardIndex];

  const handleSelectCard = (card: (typeof CARDS)[0] | null) => {
    setSelectedCard(card);
    onDetailChange?.(card !== null);
  };

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
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E2ECE0] text-[#244327] text-[10px] font-bold border border-[#CFDFCC]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  <span>341 pacas construidas</span>
                </div>
                {onOpenTour && (
                  <button
                    onClick={onOpenTour}
                    className="inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1 rounded-full bg-[#EAE3D5] text-[#2E4A32] hover:bg-[#DCD3C3] border border-[#D8CEBD] transition-all shadow-2xs"
                  >
                    <Compass className="w-3.5 h-3.5 text-[#2E4A32]" />
                    <span>Ver Tutorial</span>
                  </button>
                )}
              </div>
              <h1 className="text-3xl sm:text-[34px] font-extrabold text-[#1B311E] tracking-tight leading-[1.15]">
                Parque de<br />las Pacas
              </h1>
              <div className="flex items-center justify-between pt-5 pb-1">
                <h2 className="text-[15px] font-semibold text-[#3B543E]">
                  Pacas activas & Cosecha
                </h2>
                <button
                  onClick={onOpenWhatsApp}
                  className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#167035] border border-[#25D366]/30 transition-colors"
                >
                  <MessageCircle className="w-3 h-3 text-[#25D366]" />
                  <span>Grupo WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Main Photo Card Carousel (Exact geometry from image) */}
            <div className="relative mt-1">
              <motion.div
                key={activeCard.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleSelectCard(activeCard)}
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
                      handleSelectCard(activeCard);
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

              {/* Top Navigation Bar inside Detail */}
              <div className="relative z-20 flex items-center justify-between">
                <button
                  onClick={() => handleSelectCard(null)}
                  className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/50 transition-colors"
                  aria-label="Volver"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                {onOpenTour && (
                  <button
                    onClick={onOpenTour}
                    className="px-3.5 py-1.5 rounded-full bg-black/30 backdrop-blur-md text-white/95 hover:text-white text-xs font-semibold flex items-center gap-1.5 hover:bg-black/50 transition-colors border border-white/20"
                  >
                    <Compass className="w-3.5 h-3.5 text-[#E5ECE0]" />
                    <span>Tutorial QR</span>
                  </button>
                )}
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
              <div className="pt-2 space-y-2">
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
                      <span>Balde confirmado para el domingo</span>
                    </>
                  ) : (
                    <span>Llevar mi balde este domingo</span>
                  )}
                </button>

                <button
                  onClick={onOpenWhatsApp}
                  className="w-full py-3 rounded-full bg-[#E5ECE0] hover:bg-[#D6E3D0] text-[#27442A] text-xs font-bold transition-colors flex items-center justify-center gap-2 border border-[#C4D8C1]"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Unirse al WhatsApp del barrio</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
