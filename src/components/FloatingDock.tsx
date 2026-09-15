"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  Layers,
  Sparkles,
  Sprout,
  TrendingUp,
  MapPin,
} from "lucide-react";

interface DockItem {
  id: string;
  label: string;
  icon: any;
  targetId: string;
}

const DOCK_ITEMS: DockItem[] = [
  { id: "domingo", label: "Domingo", icon: Calendar, targetId: "domingo" },
  { id: "rayos-x", label: "Rayos X", icon: Layers, targetId: "rayos-x" },
  { id: "mi-balde", label: "Mi Balde", icon: Sparkles, targetId: "mi-balde" },
  { id: "muro", label: "Pacas", icon: Sprout, targetId: "muro-pacas" },
  { id: "impacto", label: "Impacto", icon: TrendingUp, targetId: "impacto" },
];

export function FloatingDock() {
  const [activeTab, setActiveTab] = useState("domingo");

  const scrollToSection = (targetId: string, id: string) => {
    setActiveTab(id);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 px-2.5 py-1.5 rounded-full bg-[#233321]/95 text-white backdrop-blur-md border border-[#3E4B31] shadow-xl shadow-black/25 flex items-center gap-1 sm:gap-2">
      {DOCK_ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.targetId, item.id)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold transition-all ${
              isActive
                ? "bg-[#5C6B4A] text-white shadow-xs"
                : "text-[#E5ECE0]/80 hover:text-white hover:bg-[#3E4B31]/50"
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            <span className="hidden xs:inline sm:inline">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
