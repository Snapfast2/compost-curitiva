"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Users,
  Copy,
  Check,
  MessageCircle,
  Share2,
  Sparkles,
} from "lucide-react";
import { PARK_SUMMARY } from "@/data/pacasData";

export function SundayHero({ onOpenMap }: { onOpenMap: () => void }) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const [hasPledged, setHasPledged] = useState(false);
  const [pledgeCount, setPledgeCount] = useState(24);
  const [copiedInvite, setCopiedInvite] = useState(false);

  // Calculate time to next Sunday 9:30 AM
  useEffect(() => {
    function calculateCountdown() {
      const now = new Date();
      const target = new Date();

      // Find next Sunday (0 is Sunday)
      const dayOfWeek = now.getDay();
      const daysUntilSunday = (7 - dayOfWeek) % 7;

      target.setDate(now.getDate() + daysUntilSunday);
      target.setHours(9, 30, 0, 0);

      // If it's already Sunday past 9:30 AM, target next Sunday
      if (now.getTime() > target.getTime()) {
        target.setDate(target.getDate() + 7);
      }

      const diff = Math.max(0, target.getTime() - now.getTime());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handlePledgeBucket = () => {
    if (!hasPledged) {
      setHasPledged(true);
      setPledgeCount((prev) => prev + 1);

      // Launch joyful eco confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#5C6B4A", "#9CAF88", "#B87339", "#C4A882", "#F8F3E8"],
      });
    }
  };

  const copyWhatsAppInvite = () => {
    const text = `🌿 *¡Hola vecinos! Este domingo hay Paca Digestora Silva* 🪣\n\nNos reunimos en el Parque de las Pacas (*Calle 38 # 64A-8*, Conquistadores) este *domingo a las 9:30 AM*.\n\nLleva tu balde con residuos de cocina (cáscaras, café, sobras cocidas, carnes bien escurridas) para transformarlos en abono vivo sin olores ni moscas.\n\n¡Cero basura al relleno La Pradera! ¿Quién se suma? ✨`;

    navigator.clipboard.writeText(text).then(() => {
      setCopiedInvite(true);
      setTimeout(() => setCopiedInvite(false), 3000);
    });
  };

  return (
    <section className="relative overflow-hidden rounded-3xl sm:rounded-4xl bg-[#233321] text-[#F8F3E8] p-6 sm:p-8 shadow-xl shadow-[#233321]/20 border border-[#3E4B31]">
      {/* Subtle organic gradient overlay */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#5C6B4A]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-[#B87339]/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-6">
        {/* Top Tag & Status */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3E4B31]/70 border border-[#5C6B4A]/40 text-xs font-semibold text-[#E5ECE0]">
            <span className="w-2 h-2 rounded-full bg-[#9CAF88] animate-pulse" />
            <span>El Ritual Dominical del Barrio</span>
          </div>

          <button
            onClick={onOpenMap}
            className="flex items-center gap-1.5 text-xs text-[#E5ECE0]/80 hover:text-white transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-[#B87339]" />
            <span>Calle 38 # 64A-8</span>
          </button>
        </div>

        {/* Hero Title & Description */}
        <div className="space-y-2 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Próximo Domingo de Paca
          </h2>
          <p className="text-sm sm:text-base text-[#E5ECE0]/85 leading-relaxed">
            Cada domingo a las <strong className="text-white">9:30 AM</strong> nos reunimos con nuestros baldes en el parque para fabricar tierra fértil con la técnica del maestro Guillermo Silva. ¡Sin olores y sin moscas!
          </p>
        </div>

        {/* Countdown Timer Row (Inspired by Image 3 Stat Pills) */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md">
          <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#162215]/80 border border-[#3E4B31]">
            <span className="text-2xl sm:text-3xl font-black text-white">
              {timeLeft.days}
            </span>
            <span className="text-[11px] font-medium text-[#9CAF88] uppercase tracking-wider">
              Días
            </span>
          </div>
          <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#162215]/80 border border-[#3E4B31]">
            <span className="text-2xl sm:text-3xl font-black text-white">
              {timeLeft.hours}
            </span>
            <span className="text-[11px] font-medium text-[#9CAF88] uppercase tracking-wider">
              Horas
            </span>
          </div>
          <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#162215]/80 border border-[#3E4B31]">
            <span className="text-2xl sm:text-3xl font-black text-white">
              {timeLeft.minutes}
            </span>
            <span className="text-[11px] font-medium text-[#9CAF88] uppercase tracking-wider">
              Min
            </span>
          </div>
          <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#162215]/80 border border-[#3E4B31]">
            <span className="text-2xl sm:text-3xl font-black text-[#B87339]">
              {timeLeft.seconds}
            </span>
            <span className="text-[11px] font-medium text-[#9CAF88] uppercase tracking-wider">
              Seg
            </span>
          </div>
        </div>

        {/* Attendance Action & Counter (Inspired by Image 4 CTA & Image 3) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
          <button
            onClick={handlePledgeBucket}
            disabled={hasPledged}
            className={`flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all transform active:scale-95 shadow-md ${
              hasPledged
                ? "bg-[#5C6B4A] text-white cursor-default"
                : "bg-[#B87339] text-white hover:bg-[#915422] shadow-[#B87339]/30"
            }`}
          >
            {hasPledged ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-[#9CAF88]" />
                <span>¡Balde confirmado para el domingo! 🎉</span>
              </>
            ) : (
              <>
                <span className="text-lg">🪣</span>
                <span>¡Llevaré mi balde este domingo!</span>
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#162215]/60 border border-[#3E4B31] text-xs sm:text-sm text-[#E5ECE0]">
            <Users className="w-4 h-4 text-[#9CAF88]" />
            <span>
              <strong className="text-white font-bold">{pledgeCount}</strong> vecinos confirmados
            </span>
          </div>
        </div>

        {/* WhatsApp Groups & Invite Generator Row */}
        <div className="pt-2 border-t border-[#3E4B31]/70 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-[#E5ECE0]/70 font-medium">Grupos del barrio:</span>
            <a
              href={PARK_SUMMARY.whatsappGroup1Url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#3E4B31] hover:bg-[#5C6B4A] text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Grupo #1</span>
            </a>
            <a
              href={PARK_SUMMARY.whatsappGroup2Url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#3E4B31] hover:bg-[#5C6B4A] text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Grupo #2</span>
            </a>
          </div>

          <button
            onClick={copyWhatsAppInvite}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#C4A882]/20 hover:bg-[#C4A882]/30 text-[#C4A882] hover:text-[#F8F3E8] border border-[#C4A882]/30 transition-all font-medium"
            title="Copiar texto listo para pegar en el grupo de tu edificio"
          >
            {copiedInvite ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#9CAF88]" />
                <span>¡Copiado para WhatsApp!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar invitación para tu edificio</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
