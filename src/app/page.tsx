"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CleanHomeView } from "@/components/CleanHomeView";
import { PacaBiotecnologia } from "@/components/PacaBiotecnologia";
import { BucketChecker } from "@/components/BucketChecker";
import { ParkMapCard } from "@/components/ParkMapCard";
import { PrintablePosterModal } from "@/components/PrintablePosterModal";
import { GuidedTourModal } from "@/components/GuidedTourModal";
import { WhatsAppGroupsModal } from "@/components/WhatsAppGroupsModal";
import { ArrowLeft, X, Compass, Home as HomeIcon, Dna, Apple, MessageCircle } from "lucide-react";

export default function Home() {
  const [activeScreen, setActiveScreen] = useState<"home" | "biotecnologia" | "balde" | "comunidad">("home");
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [isCardDetailOpen, setIsCardDetailOpen] = useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  // Check URL params or first visit
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const isFromQR = urlParams.get("from") === "qr" || urlParams.get("tour") === "true";
      const hasSeenTour = localStorage.getItem("paca_tour_seen");

      // Auto-open if coming from QR or first time visitor
      if (isFromQR || !hasSeenTour) {
        setIsTourOpen(true);
      }
    }
  }, []);

  const handleCloseTour = () => {
    setIsTourOpen(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("paca_tour_seen", "true");
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F3EB] text-[#1D3320] flex flex-col justify-between selection:bg-[#2E4A32] selection:text-white">
      {/* Dynamic Main View */}
      <main className="w-full max-w-md mx-auto px-4 py-4 sm:py-6 flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          {activeScreen === "home" && (
            <motion.div
              key="screen-home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full"
            >
              <CleanHomeView
                onOpenMap={() => setIsMapModalOpen(true)}
                onOpenRayosX={() => setActiveScreen("biotecnologia")}
                onOpenBalde={() => setActiveScreen("balde")}
                onOpenComunidad={() => setActiveScreen("comunidad")}
                onOpenTour={() => setIsTourOpen(true)}
                onOpenWhatsApp={() => setIsWhatsAppModalOpen(true)}
                onDetailChange={(isOpen) => setIsCardDetailOpen(isOpen)}
              />
            </motion.div>
          )}

          {activeScreen === "biotecnologia" && (
            <motion.div
              key="screen-biotecnologia"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="w-full space-y-4 pb-20"
            >
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setActiveScreen("home")}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#E3DAC8] text-[#1D3320] text-xs font-bold shadow-xs hover:bg-[#EAE3D5] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Volver al inicio</span>
                </button>
                <button
                  onClick={() => setIsTourOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#EAE3D5] text-[#2E4A32] text-xs font-bold shadow-xs hover:bg-[#DCD3C3] transition-colors"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Ver Tutorial QR</span>
                </button>
              </div>
              <PacaBiotecnologia />
            </motion.div>
          )}

          {activeScreen === "balde" && (
            <motion.div
              key="screen-balde"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="w-full space-y-4 pb-20"
            >
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setActiveScreen("home")}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#E3DAC8] text-[#1D3320] text-xs font-bold shadow-xs hover:bg-[#EAE3D5] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Volver al inicio</span>
                </button>
                <button
                  onClick={() => setIsTourOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#EAE3D5] text-[#2E4A32] text-xs font-bold shadow-xs hover:bg-[#DCD3C3] transition-colors"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Ver Tutorial QR</span>
                </button>
              </div>
              <BucketChecker />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 30-45 Second Guided Story Tour for QR scanners */}
      <GuidedTourModal
        isOpen={isTourOpen}
        onClose={handleCloseTour}
        onComplete={handleCloseTour}
      />

      {/* Map Modal */}
      {isMapModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-5 shadow-2xl border border-[#E3DAC8] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsMapModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#EFE7DA] text-[#7A5835] hover:bg-[#C4A882]/40 z-10"
              aria-label="Cerrar"
            >
              <X className="w-4 h-4" />
            </button>
            <ParkMapCard />
          </div>
        </div>
      )}

      {/* Printable Poster Modal with QR */}
      <PrintablePosterModal
        isOpen={isPosterModalOpen}
        onClose={() => setIsPosterModalOpen(false)}
      />

      {/* Persistent Floating Bottom Navigation Dock (Visible across Home, Rayos X, and Balde) */}
      {!isCardDetailOpen && (
        <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 px-2 py-1.5 rounded-full bg-[#27442A]/95 text-white backdrop-blur-md border border-[#3E6142] shadow-xl shadow-black/25 flex items-center gap-1 sm:gap-1.5">
          {[
            { id: "home" as const, label: "Inicio", icon: HomeIcon },
            { id: "biotecnologia" as const, label: "Biotecnología", icon: Dna },
            { id: "balde" as const, label: "Mi Balde", icon: Apple },
          ].map((tab) => {
            const isActive = activeScreen === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveScreen(tab.id);
                  setIsCardDetailOpen(false);
                }}
                className={`relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  isActive
                    ? "text-white"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
                title={tab.label}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeDockIndicator"
                    className="absolute inset-0 bg-[#3F6342] rounded-full -z-10 shadow-xs border border-white/15"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <Icon className="w-4 h-4 shrink-0" />
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="overflow-hidden whitespace-nowrap text-xs font-bold"
                    >
                      {tab.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            );
          })}

          <div className="w-[1px] h-4 bg-white/20 mx-0.5" />

          <button
            onClick={() => setIsTourOpen(true)}
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            title="Ver Tutorial / Experiencia Guiada"
          >
            <Compass className="w-4 h-4 text-[#C4A882]" />
          </button>

          <button
            onClick={() => setIsWhatsAppModalOpen(true)}
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            title="Grupo de WhatsApp del Barrio"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
          </button>
        </nav>
      )}

      {/* WhatsApp Official Community Group Modal */}
      <WhatsAppGroupsModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
      />
    </div>
  );
}
