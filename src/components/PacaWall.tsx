"use client";

import React, { useState } from "react";
import {
  Calendar,
  Sparkles,
  Flower2,
  Users,
  CheckCircle2,
  Clock,
  Sprout,
  Share2,
} from "lucide-react";
import { PACAS_DATA, PacaRecord } from "@/data/pacasData";

export function PacaWall() {
  const [selectedPaca, setSelectedPaca] = useState<PacaRecord>(PACAS_DATA[0]);

  return (
    <section id="muro-pacas" className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5ECE0] text-[#3E4B31] text-xs font-bold uppercase tracking-wider mb-2">
            <Sprout className="w-3.5 h-3.5" />
            <span>Trazabilidad Comunitaria</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#233321] tracking-tight">
            Muro de Pacas del Parque
          </h3>
          <p className="text-sm text-[#5C6B4A] mt-1 max-w-xl">
            Cada paca es un ser vivo que tarda 6 meses en convertirse en abono fértil. Conoce el estado de las pacas activas en la Calle 38 # 64A-8.
          </p>
        </div>
      </div>

      {/* Pacas Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PACAS_DATA.map((paca) => {
          const progressPercent = Math.min(
            100,
            Math.round((paca.daysElapsed / paca.totalDays) * 100)
          );

          const isReady = paca.status === "cosecha-lista";
          const isNext = paca.status === "en-construccion";

          return (
            <div
              key={paca.id}
              className={`p-5 rounded-3xl bg-white border transition-all flex flex-col justify-between gap-4 shadow-xs hover:shadow-md ${
                isReady
                  ? "border-[#B87339] ring-2 ring-[#B87339]/20"
                  : isNext
                  ? "border-[#5C6B4A] bg-[#E5ECE0]/20"
                  : "border-[#E3DAC8]"
              }`}
            >
              <div className="space-y-3">
                {/* Header Tag & Status */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                      isReady
                        ? "bg-[#B87339] text-white"
                        : isNext
                        ? "bg-[#233321] text-white"
                        : "bg-[#E5ECE0] text-[#3E4B31]"
                    }`}
                  >
                    {paca.tag}
                  </span>

                  <span className="text-xs font-bold text-[#5C6B4A]">
                    {paca.daysElapsed} / {paca.totalDays} días
                  </span>
                </div>

                {/* Paca Name & Flora */}
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#233321]">
                    {paca.name}
                  </h4>
                  <div className="flex items-center gap-1.5 mt-1 text-xs text-[#5C6B4A]">
                    <Flower2 className="w-3.5 h-3.5 text-[#B87339]" />
                    <span>Siembra: {paca.floraTop}</span>
                  </div>
                </div>

                {/* Progress Bar (0 to 6 months) */}
                <div className="space-y-1">
                  <div className="w-full h-2.5 bg-[#EFE7DA] rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 rounded-full ${
                        isReady ? "bg-[#B87339]" : "bg-[#5C6B4A]"
                      }`}
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#7A5835]">
                    <span>Armado: {paca.startDate}</span>
                    <span>Cosecha: {paca.harvestDate}</span>
                  </div>
                </div>

                {/* Notes */}
                <p className="text-xs text-[#233321]/80 leading-relaxed bg-[#F8F3E8] p-3 rounded-2xl border border-[#E3DAC8]/70">
                  {paca.notes}
                </p>
              </div>

              {/* Godparents & Projected Yield */}
              <div className="pt-3 border-t border-[#E3DAC8]/60 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#5C6B4A]">Abono proyectado:</span>
                  <strong className="text-[#233321] font-bold">
                    ~{paca.projectedCompostKg} kg de humus
                  </strong>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-[#7A5835]">
                  <Users className="w-3.5 h-3.5 text-[#5C6B4A]" />
                  <span className="truncate">
                    Padrinos: {paca.godparents.join(", ")}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
