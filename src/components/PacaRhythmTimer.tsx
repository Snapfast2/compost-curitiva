"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { Music, Play, Pause, RotateCcw, Sparkles, Footprints } from "lucide-react";

const PLAYLIST_IDEAS = [
  { title: "La Pollera Colorá", artist: "Cumbia Colombiana", bpm: "Ritmo perfecto para saltar" },
  { title: "La Tierra del Olvido", artist: "Carlos Vives", bpm: "Conexión con la naturaleza" },
  { title: "El Pescador", artist: "Totó La Momposina", bpm: "Prensado rítmico alegre" },
  { title: "Eye of the Tiger", artist: "Survivor", bpm: "¡Para los más enérgicos!" },
];

export function PacaRhythmTimer() {
  const TOTAL_SECONDS = 180; // 3 minutes
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [isActive, setIsActive] = useState(false);
  const [selectedSongIndex, setSelectedSongIndex] = useState(0);

  useEffect(() => {
    let interval: any = null;
    if (isActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0 && isActive) {
      setIsActive(false);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#5C6B4A", "#B87339", "#9CAF88", "#C4A882"],
      });
    }
    return () => clearInterval(interval);
  }, [isActive, secondsLeft]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSecondsLeft(TOTAL_SECONDS);
  };

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const progressPercent = ((TOTAL_SECONDS - secondsLeft) / TOTAL_SECONDS) * 100;

  return (
    <section id="ritmo" className="space-y-4">
      <div className="p-6 rounded-3xl bg-[#233321] text-white border border-[#3E4B31] shadow-md flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Left Info */}
        <div className="space-y-2 text-center lg:text-left max-w-md">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3E4B31] text-[#9CAF88] text-xs font-bold uppercase tracking-wider">
            <Music className="w-3.5 h-3.5 text-[#B87339]" />
            <span>El Baile del Prensado</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-black text-white">
            «¿Para qué gimnasio si hay pacas?»
          </h4>
          <p className="text-xs text-[#E5ECE0]/80 leading-relaxed">
            Guillermo Silva enseña que el prensado óptimo dura <strong>3 minutos por tanda</strong> al son de una buena canción. El peso de tu cuerpo compacta los residuos y saca el aire.
          </p>
          <p className="text-xs text-[#9CAF88] font-medium">
            Canción sugerida: <strong className="text-white">{PLAYLIST_IDEAS[selectedSongIndex].title}</strong> — {PLAYLIST_IDEAS[selectedSongIndex].artist}
          </p>
        </div>

        {/* Right: Circular / Digital Timer */}
        <div className="flex flex-col sm:flex-row items-center gap-5">
          {/* Circular Countdown Display */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="54"
                stroke="#3E4B31"
                strokeWidth="8"
                fill="transparent"
              />
              <circle
                cx="64"
                cy="64"
                r="54"
                stroke="#B87339"
                strokeWidth="8"
                strokeDasharray={339.292}
                strokeDashoffset={339.292 - (339.292 * progressPercent) / 100}
                strokeLinecap="round"
                fill="transparent"
                className="transition-all duration-500"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-black tracking-tight text-white font-mono">
                {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
              </span>
              <span className="text-[10px] text-[#9CAF88] uppercase tracking-wider font-bold">
                {isActive ? "¡Pisando! 👟" : secondsLeft === 0 ? "¡Listo! 🎉" : "3 Minutos"}
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col gap-2">
            <button
              onClick={toggleTimer}
              className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#B87339] hover:bg-[#915422] text-white font-bold text-xs sm:text-sm transition-all shadow-xs"
            >
              {isActive ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span>Pausar</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>{secondsLeft === 0 ? "Comenzar otra tanda" : "Iniciar 3 minutos"}</span>
                </>
              )}
            </button>

            <button
              onClick={resetTimer}
              className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-[#3E4B31] hover:bg-[#5C6B4A] text-[#E5ECE0] text-xs font-semibold transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reiniciar</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
