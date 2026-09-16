"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dna,
  Layers,
  HelpCircle,
  Award,
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
  ChevronDown,
  Calendar,
} from "lucide-react";

type BiotechTab = "anatomia" | "faq";

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

const FAQS_DATA = [
  {
    id: "faq-1",
    question: "¿Por qué huele a bosque húmedo y no a basura podrida?",
    answer:
      "La basura huele mal en la calle porque se pudre al aire libre con agua estancada y bacterias putrefactivas. En la paca ocurre lo opuesto: al prensar y pisar con fuerza, expulsamos el oxígeno y sellamos la humedad. Esto genera una fermentación alcohólica (anaeróbica) guiada por hongos y levaduras benéficas. El resultado químico huele exactamente a sotobosque y tierra mojada.",
    tag: "Ciencia del Olfato",
    icon: Wind,
  },
  {
    id: "faq-2",
    question: "¿Por qué no atrae moscas, cucarachas ni ratones?",
    answer:
      "Por dos factores de diseño: primero, el 'Nido Lateral' de 20 cm de hojas secas comprimidas crea una muralla física impenetrable; los animales no pueden oler ni ver la comida del centro. Segundo, el núcleo alcanza 60°C de calor natural en las primeras 24 horas, una temperatura donde ninguna larva de mosca ni parásito puede eclosionar.",
    tag: "Cero Plagas",
    icon: ShieldCheck,
  },
  {
    id: "faq-3",
    question: "¿De verdad se pueden echar carnes, huesos y comida cocinada?",
    answer:
      "¡Sí, absolutamente! A diferencia del compostaje tradicional de lombrices (lombricompuesto), en la paca Silva sí se reciben carnes, lácteos, huesos pequeños, grasa y comida condimentada. La fase térmica a 60°C higieniza todo y los microorganismos termófilos procesan las proteínas animales sin dificultad.",
    tag: "Aporte Completo",
    icon: Utensils,
  },
  {
    id: "faq-4",
    question: "¿Por qué alcanza 60°C sin fuego ni electricidad?",
    answer:
      "Es energía biológica pura. Al confinar 250 kg de materia orgánica rica en nitrógeno con 250 kg de hojas secas ricas en carbono, miles de millones de bacterias termófilas se reproducen aceleradamente. Su metabolismo colectivo libera calor intenso que queda atrapado por la densidad del bloque, como una caldera viva.",
    tag: "Calor Biológico",
    icon: Flame,
  },
  {
    id: "faq-5",
    question: "¿Cuánto tarda en convertirse en abono y cómo se reparte?",
    answer:
      "Tarda 6 meses exactos. Durante ese tiempo, la paca se convierte en jardinera en el parque. A los 6 meses, la comunidad se reúne a 'cosechar la paca': se desarma el bloque y se extraen unos 250 kg de humus negro, esponjoso y fértil. Se usa para los árboles y jardineras del parque, y los vecinos que aportaron baldes llevan tierra viva para sus plantas.",
    tag: "Cosecha & Ciclo",
    icon: Clock,
  },
  {
    id: "faq-6",
    question: "¿Quién inventó esta tecnología y por qué nació en Medellín?",
    answer:
      "Fue creada en 1989 por Guillermo Silva Pérez, tecnólogo forestal de Medellín. Silva estudió cómo la selva amazónica procesa toneladas de materia orgánica sin pudrirse ni oler mal. Diseñó el molde de madera de 1 metro cúbico y la técnica del nido prensado como solución comunitaria para los barrios de la ciudad, convirtiéndose en un modelo de biotecnología urbana reconocido internacionalmente.",
    tag: "Historia Paisa",
    icon: Award,
  },
];

export function PacaBiotecnologia() {
  const [activeTab, setActiveTab] = useState<BiotechTab>("anatomia");
  const [viewMode, setViewMode] = useState<"xray" | "exterior">("xray");
  const [selectedLayerId, setSelectedLayerId] = useState<string>("layer-3");
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");

  const activeLayer = PACA_LAYERS_DATA.find((l) => l.id === selectedLayerId) || PACA_LAYERS_DATA[1];

  return (
    <div className="space-y-5">
      {/* 2 Big Prominent Tabs at the very top */}
      <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-[#EAE3D5] border border-[#DCD3C3] shadow-xs">
        <button
          onClick={() => setActiveTab("anatomia")}
          className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-black transition-all ${
            activeTab === "anatomia"
              ? "bg-[#2E4A32] text-white shadow-md shadow-[#2E4A32]/25 scale-[1.01]"
              : "text-[#5C6B4A] hover:text-[#1D3320] hover:bg-white/50"
          }`}
        >
          <Layers className="w-4 h-4 shrink-0" />
          <span className="whitespace-nowrap">Anatomía del Cubo</span>
        </button>

        <button
          onClick={() => setActiveTab("faq")}
          className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-black transition-all ${
            activeTab === "faq"
              ? "bg-[#2E4A32] text-white shadow-md shadow-[#2E4A32]/25 scale-[1.01]"
              : "text-[#5C6B4A] hover:text-[#1D3320] hover:bg-white/50"
          }`}
        >
          <HelpCircle className="w-4 h-4 shrink-0" />
          <span className="whitespace-nowrap">Mitos & Dudas</span>
        </button>
      </div>

      {/* Header Info Banner */}
      <div className="bg-white rounded-3xl p-5 border border-[#E3DAC8] shadow-xs space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5ECE0] text-[#2E4A32] text-xs font-bold uppercase tracking-wider">
            <Dna className="w-3.5 h-3.5" />
            <span>Biotecnología Silva • Medellín</span>
          </div>

          <span className="text-xs font-bold text-[#7A5835] bg-[#F8F5EE] px-3 py-1 rounded-full border border-[#E3DAC8]">
            341 pacas en Conquistadores
          </span>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-black text-[#1D3320] tracking-tight">
            {activeTab === "anatomia" ? "Anatomía de una Paca de 1 m³" : "Mitos y Preguntas Frecuentes"}
          </h2>
          <p className="text-xs sm:text-sm text-[#5C6B4A]">
            {activeTab === "anatomia"
              ? "Toca las capas del corte transversal para descubrir la ingeniería que digiere 250 kg de comida sin olores."
              : "Respuestas claras con base biológica a las dudas y temores más comunes de los vecinos."}
          </p>
        </div>
      </div>

      {/* TAB 1: ANATOMÍA DEL CUBO */}
      {activeTab === "anatomia" && (
        <div className="space-y-4">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div className="bg-white rounded-2xl p-2.5 border border-[#E3DAC8] flex items-center gap-2 shadow-2xs">
              <div className="p-2 rounded-xl bg-[#B87339]/15 text-[#915422]">
                <Thermometer className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-black text-[#1D3320]">60°C</p>
                <p className="text-[10px] text-[#7A5835] font-semibold">Higienización térmica</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-2.5 border border-[#E3DAC8] flex items-center gap-2 shadow-2xs">
              <div className="p-2 rounded-xl bg-[#2E4A32]/15 text-[#2E4A32]">
                <Scale className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-black text-[#1D3320]">50% / 50%</p>
                <p className="text-[10px] text-[#7A5835] font-semibold">Hojas vs Comida</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-2.5 border border-[#E3DAC8] flex items-center gap-2 shadow-2xs">
              <div className="p-2 rounded-xl bg-[#4D7850]/15 text-[#4D7850]">
                <Box className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-black text-[#1D3320]">500 kg</p>
                <p className="text-[10px] text-[#7A5835] font-semibold">Por metro cúbico</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-2.5 border border-[#E3DAC8] flex items-center gap-2 shadow-2xs">
              <div className="p-2 rounded-xl bg-[#7A5835]/15 text-[#7A5835]">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-black text-[#1D3320]">6 Meses</p>
                <p className="text-[10px] text-[#7A5835] font-semibold">Cosecha de humus</p>
              </div>
            </div>
          </div>

          {/* Illustrated SVG Cube with Switch */}
          <div className="bg-white rounded-3xl p-4 sm:p-5 border border-[#E3DAC8] shadow-sm space-y-3">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-bold text-[#5C6B4A] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#B87339]" />
                {viewMode === "xray" ? "Corte Transversal del Cubo" : "Aspecto en el Parque"}
              </span>

              {/* View Switcher: Corte vs Exterior */}
              <div className="inline-flex p-1 rounded-full bg-[#F5EFE4] border border-[#E3DAC8]">
                <button
                  onClick={() => setViewMode("xray")}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                    viewMode === "xray"
                      ? "bg-[#2E4A32] text-white shadow-xs"
                      : "text-[#7A5835] hover:text-[#1D3320]"
                  }`}
                >
                  <Eye className="w-3 h-3" />
                  <span>Corte</span>
                </button>
                <button
                  onClick={() => setViewMode("exterior")}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                    viewMode === "exterior"
                      ? "bg-[#2E4A32] text-white shadow-xs"
                      : "text-[#7A5835] hover:text-[#1D3320]"
                  }`}
                >
                  <Box className="w-3 h-3" />
                  <span>Exterior</span>
                </button>
              </div>
            </div>

            {/* Visual SVG Cube */}
            <div className="relative w-full aspect-[4/3.3] rounded-2xl bg-gradient-to-b from-[#EAE3D5] to-[#DFD5C2] border border-[#D5C9B3] p-2 flex items-center justify-center overflow-hidden">
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
                    <line x1="55" y1="240" x2="305" y2="240" stroke="#8A6540" strokeWidth="3" strokeLinecap="round" />
                    <line x1="65" y1="252" x2="295" y2="252" stroke="#8A6540" strokeWidth="3" strokeLinecap="round" />
                    
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

                    <circle cx="180" cy="150" r="48" fill="#FFC876" opacity="0.35" />
                    <circle cx="180" cy="150" r="28" fill="#FFB042" opacity="0.45" />

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

                    <circle cx="70" cy="14" r="4" fill="#FFCF56" />
                    <circle cx="145" cy="10" r="4" fill="#FF6B6B" />
                    <circle cx="230" cy="12" r="4" fill="#9C6BFF" />
                    <circle cx="305" cy="14" r="4" fill="#FFCF56" />

                    <rect x="95" y="44" width="170" height="18" rx="9" fill="#1D3320" opacity={selectedLayerId === "layer-4" ? 0.95 : 0.8} />
                    <text x="180" y="56" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">
                      Capa 4: Techo & Flores (20 cm)
                    </text>
                  </g>
                </svg>
              ) : (
                /* Vista Exterior */
                <div className="relative w-full h-full flex flex-col items-center justify-center p-3 select-none">
                  <div className="relative w-52 sm:w-60 aspect-square rounded-2xl bg-gradient-to-b from-[#8F9F7D] to-[#6E7E5A] border-4 border-[#3E4B31] shadow-xl p-4 flex flex-col justify-between overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-10 bg-[#4A704E] flex items-center justify-around px-3 border-b-2 border-[#2E4A32]">
                      <div className="flex items-center gap-1 text-[11px] font-bold text-white">
                        <Flower2 className="w-4 h-4 text-yellow-300" />
                        <span>Jardinera Viva</span>
                      </div>
                      <Sprout className="w-4 h-4 text-emerald-300" />
                    </div>

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

                    <div className="bg-[#5C4228] text-amber-100 text-[10px] font-bold py-1 px-3 rounded-lg text-center border border-amber-900/40">
                      Paca Silva • 1 m³ • Cosecha en 6 meses
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Layer Selection Buttons */}
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

          {/* Focused Layer Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLayer.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="bg-white rounded-3xl p-5 border border-[#E3DAC8] shadow-sm space-y-4"
            >
              <div className="flex items-start justify-between gap-3 border-b border-[#E3DAC8]/60 pb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-2xl ${activeLayer.bgLight} border ${activeLayer.borderLight}`}>
                    <activeLayer.icon className={`w-6 h-6 ${activeLayer.accentColor}`} />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#B87339]">
                      {activeLayer.badge}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-[#1D3320]">
                      {activeLayer.name}
                    </h3>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-[#E5ECE0] text-[#2E4A32] text-xs font-bold shrink-0">
                  {activeLayer.thickness}
                </span>
              </div>

              {/* What goes here */}
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
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F8F5EE] border border-[#E3DAC8] text-xs font-bold text-[#2E4A32]"
                      >
                        <ChipIcon className="w-3.5 h-3.5 text-[#7A5835]" />
                        <span>{chip.label}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Functions */}
              <div className="space-y-1.5">
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#7A5835]">
                  ¿Cómo funciona?
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

              {/* Silva Quote */}
              <div className="p-3.5 rounded-2xl bg-[#F8F5EE] border-l-4 border-[#B87339] border-y border-r border-[#E3DAC8] text-xs text-[#7A5835] italic leading-relaxed flex items-start gap-2">
                <Quote className="w-4 h-4 text-[#B87339] shrink-0 mt-0.5 opacity-80" />
                <span>{activeLayer.silvaQuote}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Tribute Card to Guillermo Silva with authentic portrait photo */}
          <div className="bg-white rounded-3xl p-5 border border-[#E3DAC8] shadow-sm space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#2E4A32] shrink-0 shadow-md">
                <img
                  src="/community/guillermo-silva.jpg"
                  alt="Guillermo Silva Pérez"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-[#B87339]">
                  <Award className="w-3 h-3" />
                  <span>El Creador (Medellín, 1989)</span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-[#1D3320] leading-tight">
                  Guillermo Silva Pérez
                </h3>
                <p className="text-xs text-[#5C6B4A] font-medium">
                  Tecnólogo Forestal • Inventor de la Paca Digestora
                </p>
              </div>
            </div>

            <p className="text-xs text-[#2E4A32]/90 leading-relaxed">
              Guillermo Silva diseñó este método al observar cómo el suelo de los bosques andinos descompone toneladas de materia vegetal y animal sin emitir olores ni proliferar plagas. Comprendió que la clave de la naturaleza no es ventilar la basura, sino <strong>prensarla sin aire</strong> junto a abundante hojarasca seca.
            </p>

            {/* Impact Counter in Conquistadores */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#E3DAC8]/70">
              <div className="p-2.5 rounded-2xl bg-[#F8F5EE] border border-[#E3DAC8] text-center">
                <p className="text-lg font-black text-[#2E4A32]">341</p>
                <p className="text-[10px] text-[#7A5835] font-bold">Pacas armadas</p>
              </div>
              <div className="p-2.5 rounded-2xl bg-[#F8F5EE] border border-[#E3DAC8] text-center">
                <p className="text-lg font-black text-[#2E4A32]">~170 Ton</p>
                <p className="text-[10px] text-[#7A5835] font-bold">Desviadas</p>
              </div>
              <div className="p-2.5 rounded-2xl bg-[#F8F5EE] border border-[#E3DAC8] text-center">
                <p className="text-lg font-black text-[#2E4A32]">~85 Ton</p>
                <p className="text-[10px] text-[#7A5835] font-bold">Humus vivo</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: MITOS & PREGUNTAS FRECUENTES (Human, practical, direct) */}
      {activeTab === "faq" && (
        <div className="space-y-3">
          <div className="bg-[#2E4A32] text-white rounded-3xl p-5 border border-[#3E6142] shadow-xs space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold text-[#A8BE9A] uppercase tracking-wider">
              <HelpCircle className="w-4 h-4 text-[#A8BE9A]" />
              <span>Dudas Vecinales Frecuentes</span>
            </div>
            <h3 className="text-lg font-black">
              Respuestas claras a los temores de compostar en el parque
            </h3>
            <p className="text-xs text-[#E5ECE0]/85 leading-relaxed">
              Toca cada pregunta para descubrir la ciencia y la experiencia real detrás de las 341 pacas del barrio.
            </p>
          </div>

          <div className="space-y-2.5">
            {FAQS_DATA.map((faq) => {
              const isOpen = openFaqId === faq.id;
              const FaqIcon = faq.icon;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#E3DAC8] shadow-2xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full text-left p-4 flex items-center justify-between gap-3 hover:bg-[#F8F5EE]/60 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[#F5EFE4] text-[#7A5835] shrink-0">
                        <FaqIcon className="w-4 h-4 text-[#2E4A32]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#B87339]">
                          {faq.tag}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-[#1D3320] leading-snug">
                          {faq.question}
                        </h4>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-[#7A5835] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#2E4A32]" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-4 pb-4 pt-1 text-xs text-[#2E4A32]/90 leading-relaxed border-t border-[#E3DAC8]/50 bg-[#FBF9F5]">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Guillermo Quote in FAQ */}
          <div className="p-4 rounded-3xl bg-white border border-[#E3DAC8] flex items-center gap-3.5 shadow-2xs">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-[#2E4A32] shrink-0">
              <img
                src="/community/guillermo-silva.jpg"
                alt="Guillermo Silva"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <p className="text-xs text-[#7A5835] italic leading-snug">
              «La basura no existe en la naturaleza; la inventó el ser humano cuando mezcló la comida con el plástico.»
              <span className="block font-bold not-italic text-[#1D3320] mt-0.5">— Guillermo Silva Pérez</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
