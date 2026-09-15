"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CleanHomeView } from "@/components/CleanHomeView";
import { PacaRayosX } from "@/components/PacaRayosX";
import { BucketChecker } from "@/components/BucketChecker";
import { ParkMapCard } from "@/components/ParkMapCard";
import { PrintablePosterModal } from "@/components/PrintablePosterModal";
import { GuidedTourModal } from "@/components/GuidedTourModal";
import { ArrowLeft, X } from "lucide-react";

export default function Home() {
  const [activeScreen, setActiveScreen] = useState<"home" | "rayos-x" | "balde" | "comunidad">("home");
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);

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
                onOpenRayosX={() => setActiveScreen("rayos-x")}
                onOpenBalde={() => setActiveScreen("balde")}
                onOpenComunidad={() => setActiveScreen("comunidad")}
                onOpenTour={() => setIsTourOpen(true)}
              />
            </motion.div>
          )}

          {activeScreen === "rayos-x" && (
            <motion.div
              key="screen-rayos-x"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="w-full space-y-4 pb-20"
            >
              <button
                onClick={() => setActiveScreen("home")}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#E3DAC8] text-[#1D3320] text-xs font-bold shadow-xs hover:bg-[#EAE3D5] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Volver al inicio</span>
              </button>
              <PacaRayosX />
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
              <button
                onClick={() => setActiveScreen("home")}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#E3DAC8] text-[#1D3320] text-xs font-bold shadow-xs hover:bg-[#EAE3D5] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Volver al inicio</span>
              </button>
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
    </div>
  );
}
