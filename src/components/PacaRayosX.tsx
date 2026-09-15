"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Eye,
  Box,
  Thermometer,
  Flame,
  Sparkles,
  Leaf,
  TreePine,
  Flower2,
  Utensils,
  ShieldCheck,
  Wind,
  CheckCircle2,
  Clock,
  Scale,
  Bug,
  Coffee,
  Apple,
  Beef,
  Sprout,
  Quote,
} from "lucide-react";

interface LayerDetail {
  id: string;
  name: string;
  badge: string;
  thickness: string;
  accentColor: string;
  bgLight: string;
  borderLight: string;
  icon: any;
  chips: { label: string; icon: any }[];
  biologyHighlight: string;
  keyFunctions: string[];
  silvaQuote: string;
  statsLabel: string;
  statsValue: string;
}

const PACA_LAYERS_DATA: LayerDetail[] = [
  {
    id: "layer-4",
    name: "Techo Prensado & Jardinera",
    badge: "Capa Superior",
    thickness: "20 cm",
    accentColor: "text-[#2E4A32]",
    bgLight: "bg-[#4D7850]/15",
    borderLight: "border-[#4D7850]/40",
    icon: Flower2,
    chips: [
      { label: "Hojarasca seca prensada", icon: Leaf },
      { label: "Tierra fértil de bosque", icon: Sprout },
      { label: "Flores y plantas vivas", icon: Flower2 },
      { label: "Semillas nativas", icon: Sparkles },
    ],
    biologyHighlight: "Sello hermético superior que convierte la paca en una jardinera florecida.",
    keyFunctions: [
      "Protege el interior del impacto de la lluvia torrencial.",
      "Evita el escape de cualquier vapor o gas hacia la atmósfera.",
      "Las raíces vivas de las flores aceleran la descomposición sana.",
    ],
    silvaQuote: "«Al mes la paca se cubre de vegetación natural. Las raíces de las flores aceleran la descomposición sana y decoran el parque.»",
    statsLabel: "Huerta Activa",
    statsValue: "Desde el mes 1",
  },
  {
    id: "layer-3",
    name: "Núcleo de Fermentación Orgánica",
    badge: "El Corazón (Centro)",
    thickness: "40 cm",
    accentColor: "text-[#915422]",
    bgLight: "bg-[#B87339]/15",
    borderLight: "border-[#B87339]/40",
    icon: Flame,
    chips: [
      { label: "Cáscaras y frutas", icon: Apple },
      { label: "Comida cocinada", icon: Utensils },
      { label: "Carnes y huesos", icon: Beef },
      { label: "Borra de café", icon: Coffee },
      { label: "Servilletas de papel", icon: Leaf },
    ],
    biologyHighlight: "Digestión anaeróbica termófila: sin oxígeno, el calor higieniza todo.",
    keyFunctions: [
      "Alcanza 60°C de temperatura biológica sin fuego ni electricidad.",
      "Mata bacterias patógenas, parásitos y semillas invasoras en 24 horas.",
      "Ocurre fermentación alcohólica (como el vino o la cerveza) en vez de putrefacción.",
    ],
    silvaQuote: "«En 1 m³ entran 250 kg de comida y 250 kg de hojas. Se alcanzan 60°C en el centro, higienizando todo en menos de 24 horas.»",
    statsLabel: "Temperatura",
    statsValue: "Hasta 60°C",
  },
  {
    id: "layer-2",
    name: "Nido Perimetral de Hojas",
    badge: "Muralla Protectora",
    thickness: "15 a 20 cm",
    accentColor: "text-[#4D7850]",
    bgLight: "bg-[#5C6B4A]/15",
    borderLight: "border-[#5C6B4A]/40",
    icon: ShieldCheck,
    chips: [
      { label: "Hojarasca seca compactada", icon: Leaf },
      { label: "Chamizas medianas", icon: TreePine },
      { label: "Pasto y ramas secas", icon: Sprout },
    ],
    biologyHighlight: "Barrera física y biológica que aísla los alimentos del exterior.",
    keyFunctions: [
      "Envuelve los residuos para que ningún alimento quede visible.",
      "Impide la entrada de perros, roedores, moscas y zancudos.",
      "Al retirar el molde de madera, la paca queda con aspecto de bloque de hojas secas.",
    ],
    silvaQuote: "«El nido es el secreto de la limpieza. Cuando retiras el cajón de madera, solo se ven hojas secas y no la comida del centro.»",
    statsLabel: "Protección",
    statsValue: "100% Hermético",
  },
  {
    id: "layer-1",
    name: "Cama Basal de Drenaje",
    badge: "Base del Suelo",
    thickness: "10 cm",
    accentColor: "text-[#7A5835]",
    bgLight: "bg-[#C4A882]/20",
    borderLight: "border-[#C4A882]/50",
    icon: TreePine,
    chips: [
      { label: "Troncos y ramas gruesas", icon: TreePine },
      { label: "Chamizas leñosas", icon: Leaf },
      { label: "Suelo vivo del parque", icon: Bug },
    ],
    biologyHighlight: "Colchón de drenaje y puente biológico directo con el suelo.",
    keyFunctions: [
      "Aísla la paca del exceso de agua y humedad del suelo.",
      "Permite el libre ingreso de lombrices nativas y escarabajos aliados.",
      "A los 6 meses, las ramas resistentes pasan como semilla fértil a la siguiente paca.",
    ],
    silvaQuote: "«Paso 1 del manual: ramas bien acomodadas al suelo natural. A los 6 meses algunas ramas aún tendrán consistencia y pasan como semilla a la siguiente paca.»",
    statsLabel: "Drenaje",
    statsValue: "Flujo Natural",
  },
];

export function PacaRayosX() {
  const [viewMode, setViewMode] = useState<"xray" | "exterior">("xray");
  const [selectedLayerId, setSelectedLayerId] = useState<string>("layer-3");
  const [smellTested, setSmellTested] = useState<boolean>(false);

  const activeLayer = PACA_LAYERS_DATA.find((l) => l.id === selectedLayerId) || PACA_LAYERS_DATA[1];

  return (
    <section id="rayos-x" className="space-y-6">
      {/* Header & Controls */}
      <div className="bg-white rounded-3xl p-5 border border-[#E3DAC8] shadow-xs space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5ECE0] text-[#2E4A32] text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Biotecnología Urbana • Guillermo Silva</span>
          </div>

          {/* View Switcher: Rayos X vs Exterior */}
          <div className="inline-flex p-1 rounded-full bg-[#F5EFE4] border border-[#E3DAC8]">
            <button
              onClick={() => setViewMode("xray")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                viewMode === "xray"
                  ? "bg-[#2E4A32] text-white shadow-xs"
                  : "text-[#7A5835] hover:text-[#1D3320]"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Rayos X (Interior)</span>
            </button>
            <button
              onClick={() => setViewMode("exterior")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                viewMode === "exterior"
                  ? "bg-[#2E4A32] text-white shadow-xs"
                  : "text-[#7A5835] hover:text-[#1D3320]"
              }`}
            >
              <Box className="w-3.5 h-3.5" />
              <span>Vista Parque</span>
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-black text-[#1D3320] tracking-tight">
            Anatomía de una Paca de 1 m³
          </h3>
          <p className="text-xs sm:text-sm text-[#5C6B4A]">
            Toca las capas del dibujo para inspeccionar cómo 250 kg de comida se transforman en tierra viva sin olores ni plagas.
          </p>
        </div>

        {/* 4 Key Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-[#E3DAC8]/70">
          <div className="bg-[#F8F5EE] rounded-2xl p-2.5 border border-[#E3DAC8] flex items-center gap-2">
            <div className="p-2 rounded-xl bg-[#B87339]/15 text-[#915422]">
              <Thermometer className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-black text-[#1D3320]">60°C</p>
              <p className="text-[10px] text-[#7A5835] font-semibold">Higienización térmica</p>
            </div>
          </div>

          <div className="bg-[#F8F5EE] rounded-2xl p-2.5 border border-[#E3DAC8] flex items-center gap-2">
            <div className="p-2 rounded-xl bg-[#2E4A32]/15 text-[#2E4A32]">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-black text-[#1D3320]">50% / 50%</p>
              <p className="text-[10px] text-[#7A5835] font-semibold">Hojas vs Comida</p>
            </div>
          </div>

          <div className="bg-[#F8F5EE] rounded-2xl p-2.5 border border-[#E3DAC8] flex items-center gap-2">
            <div className="p-2 rounded-xl bg-[#4D7850]/15 text-[#4D7850]">
              <Box className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-black text-[#1D3320]">500 kg</p>
              <p className="text-[10px] text-[#7A5835] font-semibold">Por metro cúbico</p>
            </div>
          </div>

          <div className="bg-[#F8F5EE] rounded-2xl p-2.5 border border-[#E3DAC8] flex items-center gap-2">
            <div className="p-2 rounded-xl bg-[#7A5835]/15 text-[#7A5835]">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-black text-[#1D3320]">6 Meses</p>
              <p className="text-[10px] text-[#7A5835] font-semibold">Cosecha de humus</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Diagram & Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left Column: The Illustrated Paca Cube (Interactive SVG Cutaway) */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-4 sm:p-5 border border-[#E3DAC8] shadow-sm space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-[#5C6B4A]">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#B87339]" />
              {viewMode === "xray" ? "Corte Transversal Interactivo" : "Paca Lista en el Parque"}
            </span>
            <span className="text-[11px] text-[#7A5835] font-semibold">
              {viewMode === "xray" ? "Toca una capa para verla" : "100% Limpia y sin moscas"}
            </span>
          </div>

          {/* Illustrated SVG Cube */}
          <div className="relative w-full aspect-[4/3.5] rounded-2xl bg-gradient-to-b from-[#EAE3D5] to-[#DFD5C2] border border-[#D5C9B3] p-2 flex items-center justify-center overflow-hidden">
            {viewMode === "xray" ? (
              <svg
                viewBox="0 0 360 300"
                className="w-full h-full select-none"
                style={{ filter: "drop-shadow(0 8px 16px rgba(35, 51, 33, 0.12))" }}
              >
                {/* Ground Base */}
                <rect x="20" y="270" width="320" height="24" rx="6" fill="#8B6F4E" opacity="0.4" />
                <path d="M 20 270 Q 180 273 340 270" stroke="#705335" strokeWidth="2" strokeDasharray="4 4" />

                {/* Layer 1: Cama Basal (Bottom) */}
                <g
                  onClick={() => setSelectedLayerId("layer-1")}
                  className="cursor-pointer group transition-all"
                >
                  <rect
                    x="40"
                    y="226"
                    width="280"
                    height="40"
                    rx="8"
                    fill={selectedLayerId === "layer-1" ? "#B8966E" : "#CDB596"}
                    stroke={selectedLayerId === "layer-1" ? "#7A5835" : "#B09575"}
                    strokeWidth={selectedLayerId === "layer-1" ? "3" : "1.5"}
                    className="transition-colors"
                  />
                  {/* Logs/branches pattern */}
                  <line x1="55" y1="240" x2="305" y2="240" stroke="#8A6540" strokeWidth="3" strokeLinecap="round" />
                  <line x1="65" y1="252" x2="295" y2="252" stroke="#8A6540" strokeWidth="3" strokeLinecap="round" />
                  <line x1="75" y1="234" x2="160" y2="234" stroke="#664627" strokeWidth="2" strokeLinecap="round" />
                  <line x1="200" y1="234" x2="285" y2="234" stroke="#664627" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Text Badge Layer 1 */}
                  <rect x="90" y="238" width="180" height="18" rx="9" fill="#2E4A32" opacity={selectedLayerId === "layer-1" ? 0.95 : 0.8} />
                  <text x="180" y="250" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">
                    Capa 1: Cama Basal (10 cm)
                  </text>
                </g>

                {/* Layer 2: Nido Perimetral (Walls left and right) */}
                <g
                  onClick={() => setSelectedLayerId("layer-2")}
                  className="cursor-pointer group transition-all"
                >
                  {/* Left Wall */}
                  <rect
                    x="40"
                    y="76"
                    width="55"
                    height="148"
                    rx="6"
                    fill={selectedLayerId === "layer-2" ? "#7A8C66" : "#8F9F7D"}
                    stroke={selectedLayerId === "layer-2" ? "#3E4B31" : "#6E7E5A"}
                    strokeWidth={selectedLayerId === "layer-2" ? "3" : "1.5"}
                    className="transition-colors"
                  />
                  {/* Right Wall */}
                  <rect
                    x="265"
                    y="76"
                    width="55"
                    height="148"
                    rx="6"
                    fill={selectedLayerId === "layer-2" ? "#7A8C66" : "#8F9F7D"}
                    stroke={selectedLayerId === "layer-2" ? "#3E4B31" : "#6E7E5A"}
                    strokeWidth={selectedLayerId === "layer-2" ? "3" : "1.5"}
                    className="transition-colors"
                  />

                  {/* Leaf hatch markings */}
                  <path d="M 50 95 L 75 110 M 60 140 L 80 155 M 52 180 L 78 195" stroke="#465835" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M 280 95 L 305 110 M 275 140 L 300 155 M 278 180 L 302 195" stroke="#465835" strokeWidth="1.5" strokeLinecap="round" />

                  {/* Vertical Labels on walls */}
                  <text x="67" y="154" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="bold" transform="rotate(-90 67 154)">
                    Nido Lateral
                  </text>
                  <text x="292" y="154" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="bold" transform="rotate(90 292 154)">
                    Hojas Secas
                  </text>
                </g>

                {/* Layer 3: Núcleo Orgánico (Center core) */}
                <g
                  onClick={() => setSelectedLayerId("layer-3")}
                  className="cursor-pointer group transition-all"
                >
                  <rect
                    x="98"
                    y="76"
                    width="164"
                    height="148"
                    rx="8"
                    fill={selectedLayerId === "layer-3" ? "#C67C3E" : "#D48B4F"}
                    stroke={selectedLayerId === "layer-3" ? "#824316" : "#B36E35"}
                    strokeWidth={selectedLayerId === "layer-3" ? "3.5" : "1.5"}
                    className="transition-colors"
                  />

                  {/* Heat glow pulses & food silhouettes */}
                  <circle cx="180" cy="150" r="48" fill="#FFC876" opacity="0.35" />
                  <circle cx="180" cy="150" r="28" fill="#FFB042" opacity="0.45" />

                  {/* Heat wave trails */}
                  <path d="M 155 105 Q 160 95 155 85" stroke="#824316" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
                  <path d="M 180 102 Q 185 92 180 82" stroke="#824316" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
                  <path d="M 205 105 Q 210 95 205 85" stroke="#824316" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />

                  {/* Center Badge: 60°C */}
                  <rect x="125" y="132" width="110" height="34" rx="17" fill="#1D3320" />
                  <text x="180" y="146" textAnchor="middle" fill="#FF9E40" fontSize="11" fontWeight="900">
                    60°C • NÚCLEO
                  </text>
                  <text x="180" y="159" textAnchor="middle" fill="#E5ECE0" fontSize="8" fontWeight="bold">
                    250 kg de Orgánicos
                  </text>
                </g>

                {/* Layer 4: Techo Jardinera (Top) */}
                <g
                  onClick={() => setSelectedLayerId("layer-4")}
                  className="cursor-pointer group transition-all"
                >
                  <rect
                    x="40"
                    y="32"
                    width="280"
                    height="42"
                    rx="8"
                    fill={selectedLayerId === "layer-4" ? "#3A5C3D" : "#4A704E"}
                    stroke={selectedLayerId === "layer-4" ? "#1D3320" : "#2E4A32"}
                    strokeWidth={selectedLayerId === "layer-4" ? "3" : "1.5"}
                    className="transition-colors"
                  />

                  {/* Sprouting Flowers & Plants on Top */}
                  <path d="M 60 32 Q 55 15 70 12 Q 78 24 64 32" fill="#588C5C" stroke="#233321" strokeWidth="1" />
                  <circle cx="70" cy="12" r="4" fill="#FFCF56" />

                  <path d="M 130 32 Q 135 10 145 8 Q 152 20 134 32" fill="#588C5C" stroke="#233321" strokeWidth="1" />
                  <circle cx="145" cy="8" r="4" fill="#FF6B6B" />

                  <path d="M 220 32 Q 215 12 230 10 Q 238 22 224 32" fill="#588C5C" stroke="#233321" strokeWidth="1" />
                  <circle cx="230" cy="10" r="4" fill="#9C6BFF" />

                  <path d="M 290 32 Q 295 16 305 14 Q 312 26 294 32" fill="#588C5C" stroke="#233321" strokeWidth="1" />
                  <circle cx="305" cy="14" r="4" fill="#FFCF56" />

                  {/* Techo Text Badge */}
                  <rect x="95" y="44" width="170" height="18" rx="9" fill="#1D3320" opacity={selectedLayerId === "layer-4" ? 0.95 : 0.8} />
                  <text x="180" y="56" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">
                    Capa 4: Techo Prensado & Flores (20 cm)
                  </text>
                </g>
              </svg>
            ) : (
              /* Vista Parque (Exterior Cube) */
              <div className="relative w-full h-full flex flex-col items-center justify-center p-3 select-none">
                <div className="relative w-56 sm:w-64 aspect-square rounded-2xl bg-gradient-to-b from-[#8F9F7D] to-[#6E7E5A] border-4 border-[#3E4B31] shadow-xl p-4 flex flex-col justify-between overflow-hidden">
                  {/* Top Garden vegetation */}
                  <div className="absolute top-0 left-0 right-0 h-10 bg-[#4A704E] flex items-center justify-around px-3 border-b-2 border-[#2E4A32]">
                    <div className="flex items-center gap-1 text-[11px] font-bold text-white">
                      <Flower2 className="w-4 h-4 text-yellow-300" />
                      <span>Jardinera Viva</span>
                    </div>
                    <Sprout className="w-4 h-4 text-emerald-300" />
                  </div>

                  {/* Center Clean Exterior */}
                  <div className="my-auto text-center space-y-1.5 pt-6">
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1D3320]/80 text-white text-[11px] font-bold">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>100% Hermética</span>
                    </div>
                    <p className="text-xs font-bold text-[#1D3320]">
                      Solo se ven hojas secas comprimidas
                    </p>
                    <p className="text-[10px] text-[#2E4A32]/90 leading-tight">
                      La comida queda oculta en el centro a 60°C sin acceso a moscas ni perros.
                    </p>
                  </div>

                  {/* Bottom Wooden Marker */}
                  <div className="bg-[#5C4228] text-amber-100 text-[10px] font-bold py-1 px-3 rounded-lg text-center border border-amber-900/40">
                    Paca Silva • 1 m³ • Cosecha en 6 meses
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Layer Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pt-1">
            {PACA_LAYERS_DATA.map((layer) => {
              const isSelected = layer.id === selectedLayerId;
              const Icon = layer.icon;
              return (
                <button
                  key={layer.id}
                  onClick={() => {
                    setSelectedLayerId(layer.id);
                    setViewMode("xray");
                  }}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl text-center border transition-all ${
                    isSelected
                      ? "bg-[#2E4A32] text-white border-[#2E4A32] shadow-xs scale-[1.02]"
                      : "bg-[#F8F5EE] text-[#5C6B4A] border-[#E3DAC8] hover:bg-[#EAE3D5]"
                  }`}
                >
                  <Icon className={`w-4 h-4 mb-1 ${isSelected ? "text-[#E5ECE0]" : "text-[#7A5835]"}`} />
                  <span className="text-[10px] font-bold leading-tight line-clamp-1">{layer.badge}</span>
                  <span className={`text-[9px] font-semibold ${isSelected ? "text-white/80" : "text-[#7A5835]/80"}`}>
                    {layer.thickness}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Visual Breakdown Card (No heavy blocks of text) */}
        <div className="lg:col-span-6 space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLayer.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl p-5 sm:p-6 border border-[#E3DAC8] shadow-sm space-y-4"
            >
              {/* Card Header with Badges */}
              <div className="flex items-start justify-between gap-3 border-b border-[#E3DAC8]/60 pb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-2xl ${activeLayer.bgLight} border ${activeLayer.borderLight}`}>
                    <activeLayer.icon className={`w-6 h-6 ${activeLayer.accentColor}`} />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#B87339]">
                      {activeLayer.badge}
                    </span>
                    <h4 className="text-base sm:text-lg font-black text-[#1D3320]">
                      {activeLayer.name}
                    </h4>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-[#E5ECE0] text-[#2E4A32] text-xs font-bold">
                    {activeLayer.thickness}
                  </span>
                  <p className="text-[10px] text-[#7A5835] font-semibold mt-0.5">
                    {activeLayer.statsLabel}: <strong>{activeLayer.statsValue}</strong>
                  </p>
                </div>
              </div>

              {/* Biological Highlight Pill */}
              <div className="p-3 rounded-2xl bg-[#F5EFE4] border border-[#E3DAC8] flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#B87339] shrink-0" />
                <p className="text-xs font-bold text-[#1D3320]">
                  {activeLayer.biologyHighlight}
                </p>
              </div>

              {/* Material Chips Section */}
              <div className="space-y-2">
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#7A5835]">
                  ¿Qué entra en esta capa?
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {activeLayer.chips.map((chip, idx) => {
                    const ChipIcon = chip.icon;
                    return (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F8F5EE] border border-[#E3DAC8] text-xs font-bold text-[#2E4A32] shadow-2xs"
                      >
                        <ChipIcon className="w-3.5 h-3.5 text-[#7A5835]" />
                        <span>{chip.label}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Key Functions List */}
              <div className="space-y-1.5 pt-1">
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#7A5835]">
                  ¿Por qué es indispensable?
                </p>
                <ul className="space-y-1.5">
                  {activeLayer.keyFunctions.map((fn, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#2E4A32]/90 leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4D7850] shrink-0 mt-0.5" />
                      <span>{fn}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Guillermo Silva Wisdom Quote */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#F8F5EE] to-[#F2EDE1] border-l-4 border-[#B87339] border-y border-r border-[#E3DAC8] text-xs text-[#7A5835] italic leading-relaxed flex items-start gap-2">
                <Quote className="w-4 h-4 text-[#B87339] shrink-0 mt-0.5 opacity-80" />
                <span>{activeLayer.silvaQuote}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* El Reto del Olfato Interactive Card */}
          <div className="bg-[#1D3320] text-white rounded-3xl p-4 sm:p-5 border border-[#2E4A32] shadow-sm space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-white/10">
                  <Wind className="w-4 h-4 text-[#A8BE9A]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#A8BE9A] uppercase tracking-wider">
                    Biotecnología del Olfato
                  </span>
                  <h5 className="text-sm sm:text-base font-bold text-white">
                    ¿Por qué huele a bosque y no a basura?
                  </h5>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#E5ECE0]/85 leading-relaxed">
              La basura huele mal en la calle cuando la comida se pudre con aire y agua estancada. Al pisar la paca, se sella el oxígeno y ocurre <strong>fermentación alcohólica</strong> (como el buen vino).
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#A8BE9A]">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Cero lixiviados contaminantes</span>
              </div>

              <button
                onClick={() => setSmellTested(!smellTested)}
                className={`w-full sm:w-auto px-4 py-2 rounded-full font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-xs ${
                  smellTested
                    ? "bg-[#4D7850] text-white"
                    : "bg-[#F5EFE4] hover:bg-white text-[#1D3320]"
                }`}
              >
                <TreePine className="w-3.5 h-3.5 text-[#7A5835]" />
                <span>{smellTested ? "Huele a bosque húmedo" : "Hacer el reto del olfato"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
