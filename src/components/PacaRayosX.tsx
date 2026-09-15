"use client";

import React, { useState } from "react";
import {
  Layers,
  Sparkles,
  Info,
  CheckCircle2,
  Wind,
  ShieldCheck,
  Flame,
  TreePine,
} from "lucide-react";

interface LayerInfo {
  id: string;
  name: string;
  badge: string;
  height: string;
  color: string;
  bgColor: string;
  borderColor: string;
  materials: string;
  functionDesc: string;
  silvaSecret: string;
  icon: string;
}

const PACA_LAYERS: LayerInfo[] = [
  {
    id: "layer-4",
    name: "Capa 4: Techo Prensado & Jardinera",
    badge: "Superficie",
    height: "20 cm",
    color: "text-[#3E4B31]",
    bgColor: "bg-[#9CAF88]/30",
    borderColor: "border-[#9CAF88]",
    materials: "Hojarasca seca comprimida, tierra de bosque y plantas florales.",
    functionDesc: "Sella herméticamente la paca contra la lluvia directa, evita escape de gases y sirve como huerta o jardinera desde el primer mes.",
    silvaSecret: "«Al mes la paca se cubre de vegetación natural. Las raíces de las flores aceleran la descomposición sana y decoran el parque.»",
    icon: "🌸",
  },
  {
    id: "layer-3",
    name: "Capa 3: Núcleo de Desperdicios Orgánicos",
    badge: "El Centro",
    height: "Centro (hasta 40 cm)",
    color: "text-[#915422]",
    bgColor: "bg-[#B87339]/25",
    borderColor: "border-[#B87339]",
    materials: "Cáscaras de frutas, verduras, comida cocida, carnes, huesos pequeños, café y estiércol acondicionado.",
    functionDesc: "Aquí ocurre la fermentación alcohólica anaeróbica. Al estar compactado al vacío y sin aire, los microorganismos transforman la comida en humus fértil en vez de podrirse.",
    silvaSecret: "«En una paca de 1 m³ entran 250 kg de comida y 250 kg de hojas. Se alcanzan hasta 60°C en el centro, higienizando todo en menos de 24 horas.»",
    icon: "🍲",
  },
  {
    id: "layer-2",
    name: "Capa 2: El Nido Perimetral de Hojas",
    badge: "Bordes Protectores",
    height: "15 a 20 cm de ancho",
    color: "text-[#5C6B4A]",
    bgColor: "bg-[#5C6B4A]/25",
    borderColor: "border-[#5C6B4A]",
    materials: "Hojarasca seca o verde arrimada contra las tablas del molde.",
    functionDesc: "Crea una muralla protectora que envuelve los alimentos para que ningún desperdicio quede expuesto a la vista, ni a perros, ratones o moscas.",
    silvaSecret: "«El nido es el secreto de la limpieza. Cuando retiras el cajón de madera, solo se ven hojas secas y no la comida del centro.»",
    icon: "🍂",
  },
  {
    id: "layer-1",
    name: "Capa 1: Cama Basal de Ramas (Drenaje)",
    badge: "Base del Suelo",
    height: "10 cm",
    color: "text-[#7A5835]",
    bgColor: "bg-[#C4A882]/30",
    borderColor: "border-[#C4A882]",
    materials: "Palos, ramas gruesas y chamizas asentadas en el piso en un solo sentido.",
    functionDesc: "Aísla la paca del exceso de humedad del suelo, permite el ingreso de macroorganismos del suelo (lombrices, escarabajos) y drena cualquier exceso de agua.",
    silvaSecret: "«Paso 1 del manual: ramas bien acomodadas al suelo natural. A los 6 meses algunas ramas aún tendrán consistencia y pasan como semilla a la siguiente paca.»",
    icon: "🪵",
  },
];

export function PacaRayosX() {
  const [selectedLayerId, setSelectedLayerId] = useState<string>("layer-3");
  const [smellTested, setSmellTested] = useState<boolean>(false);

  const activeLayer = PACA_LAYERS.find((l) => l.id === selectedLayerId) || PACA_LAYERS[1];

  return (
    <section id="rayos-x" className="space-y-6">
      {/* Header section with badge */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5ECE0] text-[#3E4B31] text-xs font-bold uppercase tracking-wider mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Modo Parque • Biotecnología Silva</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#233321] tracking-tight">
            Rayos X: ¿Qué hay dentro de una Paca?
          </h3>
          <p className="text-sm text-[#5C6B4A] mt-1 max-w-xl">
            Toca cualquiera de las capas del cubo para descubrir la ingeniería biológica que inventó Guillermo Silva en Medellín.
          </p>
        </div>
      </div>

      {/* Main Interactive Diagram & Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: The Visual Paca Cube (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-5 border border-[#E3DAC8] shadow-sm flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs font-semibold text-[#5C6B4A] pb-2 border-b border-[#E3DAC8]/60">
            <span>Corte Transversal (1 m³)</span>
            <span>Toca para inspeccionar</span>
          </div>

          {/* Interactive Stacked Layers */}
          <div className="flex flex-col gap-2.5">
            {PACA_LAYERS.map((layer) => {
              const isSelected = layer.id === selectedLayerId;
              return (
                <button
                  key={layer.id}
                  onClick={() => setSelectedLayerId(layer.id)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                    layer.bgColor
                  } ${
                    isSelected
                      ? `${layer.borderColor} border-2 ring-2 ring-[#B87339]/30 scale-[1.02] shadow-sm`
                      : "border-transparent opacity-85 hover:opacity-100 hover:scale-[1.01]"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl sm:text-2xl">{layer.icon}</span>
                    <div>
                      <p className={`text-xs font-bold ${layer.color}`}>
                        {layer.name}
                      </p>
                      <p className="text-[11px] text-[#5C6B4A]">
                        {layer.materials.split(",")[0]}
                      </p>
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isSelected ? "bg-[#233321] text-white" : "bg-white/80 text-[#5C6B4A]"}`}>
                    {layer.height}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Golden Rule Note */}
          <div className="mt-2 p-3 rounded-2xl bg-[#F8F3E8] border border-[#E3DAC8] text-xs text-[#5C6B4A] flex items-start gap-2">
            <Info className="w-4 h-4 text-[#B87339] shrink-0 mt-0.5" />
            <p>
              <strong>Regla 1:1 de Silva:</strong> 50% residuos de cocina compactados en el centro + 50% hojarasca seca en bordes y cobertura.
            </p>
          </div>
        </div>

        {/* Right: Layer Details & Guillermo Silva Wisdom (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="bg-white rounded-3xl p-6 border border-[#E3DAC8] shadow-sm space-y-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{activeLayer.icon}</span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B87339]">
                    {activeLayer.badge}
                  </span>
                  <h4 className="text-lg sm:text-xl font-extrabold text-[#233321]">
                    {activeLayer.name}
                  </h4>
                </div>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#E5ECE0] text-[#3E4B31]">
                Espesor: {activeLayer.height}
              </span>
            </div>

            <div className="space-y-2 text-sm text-[#233321]/90 leading-relaxed">
              <p>
                <strong className="text-[#5C6B4A]">Materiales:</strong> {activeLayer.materials}
              </p>
              <p>
                <strong className="text-[#5C6B4A]">Función biológica:</strong> {activeLayer.functionDesc}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8F3E8] border-l-4 border-[#B87339] text-xs sm:text-sm text-[#7A5835] italic leading-relaxed">
              {activeLayer.silvaSecret}
            </div>
          </div>

          {/* El Reto del Olfato Card (Inspired by Pinterest clean cards) */}
          <div className="bg-[#233321] text-[#F8F3E8] rounded-3xl p-5 sm:p-6 border border-[#3E4B31] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-bold text-[#9CAF88] uppercase tracking-wider">
                <Wind className="w-3.5 h-3.5 text-[#9CAF88]" />
                <span>El Mito del Mal Olor</span>
              </div>
              <h5 className="text-base sm:text-lg font-bold text-white">
                ¿Por qué una paca con comida huele a bosque?
              </h5>
              <p className="text-xs text-[#E5ECE0]/80 max-w-md">
                El mal olor en la basura surge cuando la comida se pudre con exceso de aire y agua estancada. Al prensar y pisar la paca, se limita el oxígeno y ocurre <strong>fermentación alcohólica</strong>.
              </p>
            </div>

            <button
              onClick={() => setSmellTested(!smellTested)}
              className="shrink-0 px-4 py-2.5 rounded-full bg-[#5C6B4A] hover:bg-[#3E4B31] text-white font-bold text-xs transition-all flex items-center gap-1.5 shadow-xs"
            >
              <TreePine className="w-4 h-4 text-[#9CAF88]" />
              <span>{smellTested ? "Huele a bosque húmedo 🌲" : "Hacer el reto del olfato"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
