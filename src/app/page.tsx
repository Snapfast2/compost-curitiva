"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { SundayHero } from "@/components/SundayHero";
import { PacaRayosX } from "@/components/PacaRayosX";
import { BucketChecker } from "@/components/BucketChecker";
import { PacaWall } from "@/components/PacaWall";
import { ImpactMetrics } from "@/components/ImpactMetrics";
import { ParkMapCard } from "@/components/ParkMapCard";
import { PacaRhythmTimer } from "@/components/PacaRhythmTimer";
import { FloatingDock } from "@/components/FloatingDock";
import { PrintablePosterModal } from "@/components/PrintablePosterModal";
import { Heart, Sprout, Trees, MessageCircle, ExternalLink } from "lucide-react";
import { PARK_SUMMARY } from "@/data/pacasData";

export default function Home() {
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);

  const handleScrollToMap = () => {
    const el = document.getElementById("ubicacion");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8F3E8] text-[#1E271D] pb-24 selection:bg-[#B87339] selection:text-white">
      {/* Sticky Header */}
      <Header
        onOpenPosterModal={() => setIsPosterModalOpen(true)}
        onOpenMap={handleScrollToMap}
      />

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 py-6 sm:py-8 space-y-12 sm:space-y-16">
        {/* 1. Sunday Hero & Live Countdown */}
        <div id="domingo">
          <SundayHero onOpenMap={handleScrollToMap} />
        </div>

        {/* 2. Rhythm Trample Timer (Guillermo Silva 3 min dance) */}
        <PacaRhythmTimer />

        {/* 3. Interactive Rayos X (Park QR Experience) */}
        <PacaRayosX />

        {/* 4. Bucket Checker ("¿Esto va al balde?") */}
        <BucketChecker />

        {/* 5. Pacas Wall (Active Pacas & Harvest Timeline) */}
        <PacaWall />

        {/* 6. Impact Metrics & Household Calculator */}
        <ImpactMetrics />

        {/* 7. Park Map & Location Details */}
        <ParkMapCard />

        {/* Community Tribute & Philosophy Footer */}
        <footer className="pt-8 border-t border-[#E3DAC8] text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B87339]">
            <Sprout className="w-4 h-4" />
            <span>Biotecnología Limpia 100% Colombiana</span>
          </div>

          <p className="text-xs sm:text-sm text-[#5C6B4A] max-w-xl mx-auto leading-relaxed">
            Inspirado en la vida y obra del maestro <strong>Guillermo Silva Pérez</strong> (El Mago del Bosque Urbano). Desarrollado para empoderar la iniciativa comunitaria de Mauricio y los vecinos del Parque de las Pacas en Medellín.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#7A5835] pt-2">
            <a
              href="https://believe.earth/es/guillermo-silva-el-mago-del-bosque-urbano/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#233321] transition-colors inline-flex items-center gap-1"
            >
              <span>Artículo sobre Guillermo Silva</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <a
              href={PARK_SUMMARY.whatsappGroup1Url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#233321] transition-colors inline-flex items-center gap-1"
            >
              <MessageCircle className="w-3 h-3 text-[#5C6B4A]" />
              <span>Unirse al Grupo de WhatsApp</span>
            </a>
          </div>

          <div className="pt-4 text-[11px] text-[#C4A882]">
            Parque de las Pacas • Conquistadores, Calle 38 # 64A-8 • Medellín, Colombia
          </div>
        </footer>
      </main>

      {/* Mobile Floating Dock */}
      <FloatingDock />

      {/* Printable Poster Modal with QR */}
      <PrintablePosterModal
        isOpen={isPosterModalOpen}
        onClose={() => setIsPosterModalOpen(false)}
      />
    </div>
  );
}
