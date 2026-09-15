"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ChevronLeft, Sparkles, CheckCircle2, MessageCircle, MapPin, Wind, Leaf } from "lucide-react";
import confetti from "canvas-confetti";

interface GuidedTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

const TOUR_STEPS = [
  {
    step: 1,
    eyebrow: "Paso 1 de 4 • El Asombro",
    title: "Estás frente a una Paca Digestora Silva.",
    subtitle:
      "Aunque por fuera parece una jardinera de hojas secas, aquí adentro hay media tonelada de comida fermentando para convertirse en tierra viva.",
    highlight: "Media tonelada de residuos sin una sola gota de químicos.",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop",
    actionLabel: "Descubrir el secreto",
  },
  {
    step: 2,
    eyebrow: "Paso 2 de 4 • El Reto del Olfato",
    title: "Acércate y huélela tú mismo.",
    subtitle:
      "¿Huele a basurero podrido... o huele a tierra de bosque húmedo? Al prensar y pisar la paca, expulsamos todo el aire.",
    highlight:
      "Sin oxígeno no hay pudrición ni moscas: la comida se fermenta igual que el vino o el queso.",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1000&auto=format&fit=crop",
    actionLabel: "¿Qué hay adentro?",
  },
  {
    step: 3,
    eyebrow: "Paso 3 de 4 • La Arquitectura Biológica",
    title: "Un corte transversal debajo de las hojas.",
    subtitle:
      "Arriba crecen flores. En los bordes, un nido de hojarasca que aísla todo. En el centro, los residuos de cocina. En el fondo, ramas que dejan respirar al suelo.",
    highlight:
      "Biotecnología 100% colombiana, creada en Medellín por el maestro Guillermo Silva.",
    image:
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1000&auto=format&fit=crop",
    actionLabel: "¿Cómo puedo participar?",
  },
  {
    step: 4,
    eyebrow: "Paso 4 de 4 • El Encuentro del Barrio",
    title: "Cada domingo a las 9:30 AM nos reunimos aquí.",
    subtitle:
      "Los vecinos traemos un balde con los restos de cocina de la semana, pisamos juntos al ritmo de la música y evitamos que los residuos colapsen el relleno La Pradera.",
    highlight:
      "¡Trae tu balde este domingo a la Calle 38 # 64A-8!",
    image:
      "https://images.unsplash.com/photo-1511497584788-87676104235f?q=80&w=1000&auto=format&fit=crop",
    actionLabel: "Explorar toda la web",
  },
];

export function GuidedTourModal({ isOpen, onClose, onComplete }: GuidedTourModalProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [hasPledged, setHasPledged] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCurrentStepIndex(0);
      setHasPledged(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentStep = TOUR_STEPS[currentStepIndex];
  const isLastStep = currentStepIndex === TOUR_STEPS.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      onComplete();
    } else {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handlePledgeBucket = () => {
    setHasPledged(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#2E4A32", "#6E8B6B", "#C4A882", "#F8F3E8"],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-sm sm:max-w-md h-[90vh] max-h-[720px] rounded-[36px] overflow-hidden bg-[#1B311E] text-white shadow-2xl flex flex-col justify-between border border-white/10"
      >
        {/* Full-Bleed Background Photograph */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.step}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={currentStep.image}
              alt={currentStep.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/75 z-10" />
          </motion.div>
        </AnimatePresence>

        {/* Top Bar: 4 Progress Segments (Like Stories) + Skip Button */}
        <div className="relative z-20 pt-5 px-5 space-y-3">
          <div className="grid grid-cols-4 gap-1.5">
            {TOUR_STEPS.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 rounded-full transition-all duration-300 ${
                  idx <= currentStepIndex ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center justify-between text-xs pt-1">
            <span className="text-white/75 font-semibold text-[11px] tracking-wide">
              {currentStep.eyebrow}
            </span>

            {/* Always visible Skip button */}
            <button
              onClick={onClose}
              className="flex items-center gap-1 text-[11px] font-bold px-3 py-1 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md transition-colors"
            >
              <span>Saltar al inicio</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Middle / Bottom Content Area with Slide Animation */}
        <div className="relative z-20 px-6 pb-6 space-y-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.step}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              <h2 className="text-2xl sm:text-[28px] font-black tracking-tight text-white leading-tight">
                {currentStep.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#E5ECE0]/90 leading-relaxed font-normal">
                {currentStep.subtitle}
              </p>

              {/* Highlight Pill */}
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white/95 font-medium leading-snug flex items-center gap-1.5">
                <Leaf className="w-3.5 h-3.5 text-[#9CAF88] shrink-0" />
                <span>{currentStep.highlight}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Action Row */}
          <div className="space-y-2.5 pt-2">
            {/* If last step, show pledge button first */}
            {isLastStep && (
              <button
                onClick={handlePledgeBucket}
                disabled={hasPledged}
                className={`w-full py-3.5 rounded-full font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md ${
                  hasPledged
                    ? "bg-[#6E8B6B] text-white"
                    : "bg-[#B87339] hover:bg-[#965B27] text-white shadow-[#B87339]/30"
                }`}
              >
                {hasPledged ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Balde confirmado para el domingo</span>
                  </>
                ) : (
                  <span>Llevaré mi balde este domingo</span>
                )}
              </button>
            )}

            {/* Navigation Buttons: Previous / Next */}
            <div className="flex items-center gap-2">
              {currentStepIndex > 0 && (
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white flex items-center justify-center shrink-0 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}

              <button
                onClick={handleNext}
                className="flex-1 py-3.5 rounded-full bg-[#2E4A32] hover:bg-[#203623] text-white font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>{currentStep.actionLabel}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
