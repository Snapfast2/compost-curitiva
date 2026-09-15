"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  CheckCircle2,
  XCircle,
  Sparkles,
  ChefHat,
  Trees,
  Dog,
  Ban,
  X,
  Lightbulb,
  Apple,
  Sun,
  CircleDot,
  Coffee,
  Egg,
  Utensils,
  Flame,
  Wheat,
  Leaf,
  TreePine,
  Sprout,
  Layers,
  FileText,
  Cat,
  Tag,
  ShoppingBag,
  Trash2,
  FlaskConical,
  Cigarette,
  Droplets,
} from "lucide-react";
import { WASTE_DATABASE, WasteItem } from "@/data/wasteDatabase";

type CategoryFilter = "todos" | "cocina" | "jardin" | "mascotas" | "prohibido";

function getWasteIcon(iconName: string) {
  switch (iconName) {
    case "Apple":
      return <Apple className="w-5 h-5 text-[#5C6B4A]" />;
    case "Sun":
      return <Sun className="w-5 h-5 text-[#B87339]" />;
    case "CircleDot":
      return <CircleDot className="w-5 h-5 text-[#5C6B4A]" />;
    case "Coffee":
      return <Coffee className="w-5 h-5 text-[#915422]" />;
    case "Egg":
      return <Egg className="w-5 h-5 text-[#C4A882]" />;
    case "Utensils":
      return <Utensils className="w-5 h-5 text-[#5C6B4A]" />;
    case "Flame":
      return <Flame className="w-5 h-5 text-[#B87339]" />;
    case "Wheat":
      return <Wheat className="w-5 h-5 text-[#C4A882]" />;
    case "Leaf":
      return <Leaf className="w-5 h-5 text-[#5C6B4A]" />;
    case "TreePine":
      return <TreePine className="w-5 h-5 text-[#3E4B31]" />;
    case "Sprout":
      return <Sprout className="w-5 h-5 text-[#5C6B4A]" />;
    case "Layers":
      return <Layers className="w-5 h-5 text-[#C4A882]" />;
    case "FileText":
      return <FileText className="w-5 h-5 text-[#7A5835]" />;
    case "Dog":
      return <Dog className="w-5 h-5 text-[#5C6B4A]" />;
    case "Cat":
      return <Cat className="w-5 h-5 text-[#5C6B4A]" />;
    case "Tag":
      return <Tag className="w-5 h-5 text-red-600" />;
    case "ShoppingBag":
      return <ShoppingBag className="w-5 h-5 text-red-600" />;
    case "Trash2":
      return <Trash2 className="w-5 h-5 text-red-600" />;
    case "FlaskConical":
      return <FlaskConical className="w-5 h-5 text-red-600" />;
    case "Cigarette":
      return <Cigarette className="w-5 h-5 text-red-600" />;
    case "Droplets":
      return <Droplets className="w-5 h-5 text-red-600" />;
    default:
      return <Leaf className="w-5 h-5 text-[#5C6B4A]" />;
  }
}

export function BucketChecker() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("todos");

  const filteredItems = useMemo(() => {
    return WASTE_DATABASE.filter((item) => {
      const matchesCategory =
        selectedCategory === "todos" || item.category === selectedCategory;
      const matchesSearch =
        searchTerm.trim() === "" ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.silvaAdvice.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section id="mi-balde" className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE7DA] text-[#915422] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Separación Consciente en Casa</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#233321] tracking-tight">
            ¿Esto cabe en mi balde?
          </h3>
          <p className="text-sm text-[#5C6B4A] mt-1 max-w-xl">
            Escribe cualquier residuo para saber si es apto según el manual de Guillermo Silva.
          </p>
        </div>
      </div>

      {/* Search Input Bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#5C6B4A]">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Busca: carne, aguacate, cítricos, popó de perro, huesos, café..."
          className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-white border border-[#E3DAC8] text-[#233321] placeholder-[#5C6B4A]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#B87339] focus:border-transparent transition-all shadow-xs"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#5C6B4A] hover:text-[#233321]"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        <button
          onClick={() => setSelectedCategory("todos")}
          className={`shrink-0 text-xs font-bold px-4 py-2 rounded-full transition-all ${
            selectedCategory === "todos"
              ? "bg-[#233321] text-white shadow-xs"
              : "bg-white text-[#5C6B4A] border border-[#E3DAC8] hover:bg-[#E5ECE0]"
          }`}
        >
          Todos ({WASTE_DATABASE.length})
        </button>
        <button
          onClick={() => setSelectedCategory("cocina")}
          className={`shrink-0 flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full transition-all ${
            selectedCategory === "cocina"
              ? "bg-[#5C6B4A] text-white shadow-xs"
              : "bg-white text-[#5C6B4A] border border-[#E3DAC8] hover:bg-[#E5ECE0]"
          }`}
        >
          <ChefHat className="w-3.5 h-3.5" />
          <span>Cocina</span>
        </button>
        <button
          onClick={() => setSelectedCategory("jardin")}
          className={`shrink-0 flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full transition-all ${
            selectedCategory === "jardin"
              ? "bg-[#5C6B4A] text-white shadow-xs"
              : "bg-white text-[#5C6B4A] border border-[#E3DAC8] hover:bg-[#E5ECE0]"
          }`}
        >
          <Trees className="w-3.5 h-3.5" />
          <span>Jardín & Secos</span>
        </button>
        <button
          onClick={() => setSelectedCategory("mascotas")}
          className={`shrink-0 flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full transition-all ${
            selectedCategory === "mascotas"
              ? "bg-[#5C6B4A] text-white shadow-xs"
              : "bg-white text-[#5C6B4A] border border-[#E3DAC8] hover:bg-[#E5ECE0]"
          }`}
        >
          <Dog className="w-3.5 h-3.5" />
          <span>Mascotas</span>
        </button>
        <button
          onClick={() => setSelectedCategory("prohibido")}
          className={`shrink-0 flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full transition-all ${
            selectedCategory === "prohibido"
              ? "bg-[#915422] text-white shadow-xs"
              : "bg-white text-[#915422] border border-[#E3DAC8] hover:bg-[#EFE7DA]"
          }`}
        >
          <Ban className="w-3.5 h-3.5" />
          <span>Prohibidos</span>
        </button>
      </div>

      {/* Waste Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`p-4 sm:p-5 rounded-3xl bg-white border transition-all hover:shadow-md flex flex-col justify-between gap-3 ${
              item.allowed
                ? "border-[#E3DAC8] hover:border-[#5C6B4A]/50"
                : "border-red-200 bg-red-50/20"
            }`}
          >
            <div>
              {/* Card Top: Lucide Icon & Status Badge */}
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="p-2.5 rounded-2xl bg-[#F8F3E8] border border-[#E3DAC8]">
                  {getWasteIcon(item.iconName)}
                </div>

                {item.allowed ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#E5ECE0] text-[#3E4B31] text-xs font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5C6B4A]" />
                    <span>Permitido</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold">
                    <XCircle className="w-3.5 h-3.5 text-red-600" />
                    <span>No permitido</span>
                  </span>
                )}
              </div>

              {/* Title & Tag */}
              <h4 className="font-bold text-sm sm:text-base text-[#233321] leading-snug">
                {item.name}
              </h4>
              <span className="inline-block mt-1 text-[11px] font-semibold text-[#B87339] bg-[#EFE7DA]/60 px-2 py-0.5 rounded-md">
                {item.tag}
              </span>

              {/* Silva Advice */}
              <p className="mt-2.5 text-xs text-[#5C6B4A] leading-relaxed">
                {item.silvaAdvice}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center p-8 bg-white rounded-3xl border border-[#E3DAC8] text-[#5C6B4A]">
          <p className="text-sm font-semibold">
            No encontramos &ldquo;{searchTerm}&rdquo; en la lista.
          </p>
          <p className="text-xs mt-1 text-[#C4A882]">
            Regla de Guillermo Silva: si es materia orgánica natural vegetal o animal, va a la paca. Solo evita plásticos y químicos.
          </p>
        </div>
      )}

      {/* Quick Bucket Care Protocol Card */}
      <div className="p-5 sm:p-6 rounded-3xl bg-[#EFE7DA]/50 border border-[#C4A882]/40 space-y-3">
        <div className="flex items-center gap-2 text-[#915422]">
          <Lightbulb className="w-5 h-5 text-[#B87339]" />
          <h4 className="font-bold text-sm sm:text-base">
            Las 4 Reglas de Oro para tu Balde en Casa:
          </h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs text-[#7A5835]">
          <div className="p-3 bg-white rounded-2xl border border-[#E3DAC8]">
            <strong className="block text-[#233321] mb-1">1. Tapa Hermética:</strong>
            Mantenlo tapado siempre para que no entren mosquitas ni salga olor.
          </div>
          <div className="p-3 bg-white rounded-2xl border border-[#E3DAC8]">
            <strong className="block text-[#233321] mb-1">2. Escurrir Caldos:</strong>
            Cuela los líquidos de sopas en el sifón; el balde debe ir húmedo, no encharcado.
          </div>
          <div className="p-3 bg-white rounded-2xl border border-[#E3DAC8]">
            <strong className="block text-[#233321] mb-1">3. Cama de Aserrín:</strong>
            Pon un poco de viruta, aserrín o papel al fondo del balde para facilitar el aseo.
          </div>
          <div className="p-3 bg-white rounded-2xl border border-[#E3DAC8]">
            <strong className="block text-[#233321] mb-1">4. Domingo 9:30 AM:</strong>
            Llévalo al Parque de las Pacas (Cl 38 # 64A-8) para vaciarlo y lavarlo con agua.
          </div>
        </div>
      </div>
    </section>
  );
}
