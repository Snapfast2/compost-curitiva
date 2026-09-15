"use client";

import React from "react";
import { Home, Layers, Sparkles, Sprout } from "lucide-react";

export type NavTab = "home" | "rayos-x" | "balde" | "comunidad";

interface FloatingDockProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

interface DockItem {
  id: NavTab;
  label: string;
  icon: any;
}

const DOCK_ITEMS: DockItem[] = [
  { id: "home", label: "Inicio", icon: Home },
  { id: "rayos-x", label: "Rayos X", icon: Layers },
  { id: "balde", label: "Mi Balde", icon: Sparkles },
  { id: "comunidad", label: "Comunidad", icon: Sprout },
];

export function FloatingDock({ activeTab, onSelectTab }: FloatingDockProps) {
  return (
    <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 px-3 py-2 rounded-full bg-[#233321]/95 text-white backdrop-blur-md border border-[#3E4B31] shadow-2xl shadow-black/30 flex items-center gap-1.5 sm:gap-3">
      {DOCK_ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onSelectTab(item.id)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold transition-all ${
              isActive
                ? "bg-[#5C6B4A] text-white shadow-md shadow-black/20"
                : "text-[#E5ECE0]/75 hover:text-white hover:bg-[#3E4B31]/60"
            }`}
          >
            <Icon className="w-4 h-4" />
            <span className="inline">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
