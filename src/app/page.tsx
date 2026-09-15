"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { HomeCarouselView } from "@/components/HomeCarouselView";
import { PacaRayosX } from "@/components/PacaRayosX";
import { BucketChecker } from "@/components/BucketChecker";
import { PacaWall } from "@/components/PacaWall";
import { ImpactMetrics } from "@/components/ImpactMetrics";
import { ParkMapCard } from "@/components/ParkMapCard";
import { PacaRhythmTimer } from "@/components/PacaRhythmTimer";
import { FloatingDock, NavTab } from "@/components/FloatingDock";
import { PrintablePosterModal } from "@/components/PrintablePosterModal";

export default function Home() {
  const [currentTab, setCurrentTab] = useState<NavTab>("home");
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F3E8] text-[#1E271D] pb-24 selection:bg-[#B87339] selection:text-white flex flex-col justify-between">
      {/* Top Header */}
      <Header
        onOpenPosterModal={() => setIsPosterModalOpen(true)}
        onOpenMap={() => setIsMapModalOpen(true)}
      />

      {/* Main Screen Content (Controlled by Tabs) */}
      <main className="flex-1 max-w-lg mx-auto w-full px-4 py-4 sm:py-6">
        <AnimatePresence mode="wait">
          {/* TAB 1: INICIO (El layout idéntico a 'Plant a billion trees') */}
          {currentTab === "home" && (
            <motion.div
              key="tab-home"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <HomeCarouselView
                onOpenMap={() => setIsMapModalOpen(true)}
                onNavigateToTab={(tab) => setCurrentTab(tab as NavTab)}
              />
            </motion.div>
          )}

          {/* TAB 2: RAYOS X (Modo Parque / QR) */}
          {currentTab === "rayos-x" && (
            <motion.div
              key="tab-rayos-x"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-6 pt-2"
            >
              <PacaRayosX />
            </motion.div>
          )}

          {/* TAB 3: MI BALDE (Buscador ¿Esto cabe?) */}
          {currentTab === "balde" && (
            <motion.div
              key="tab-balde"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-6 pt-2"
            >
              <BucketChecker />
            </motion.div>
          )}

          {/* TAB 4: COMUNIDAD & IMPACTO */}
          {currentTab === "comunidad" && (
            <motion.div
              key="tab-comunidad"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-8 pt-2"
            >
              <PacaWall />
              <ImpactMetrics />
              <PacaRhythmTimer />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating Bottom Dock (Navegación limpia estilo app nativa) */}
      <FloatingDock activeTab={currentTab} onSelectTab={setCurrentTab} />

      {/* Map Modal */}
      {isMapModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-5 shadow-2xl border border-[#E3DAC8]">
            <button
              onClick={() => setIsMapModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#EFE7DA] text-[#7A5835] hover:bg-[#C4A882]/40"
            >
              ✕
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
