"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  Scale,
  Droplets,
  Sprout,
  Users,
  Building2,
  Leaf,
  ShieldAlert,
} from "lucide-react";
import { PARK_SUMMARY } from "@/data/pacasData";

export function ImpactMetrics() {
  const [householdMembers, setHouseholdMembers] = useState<number>(3);

  // Guillermo Silva's manual: una persona produce 2 a 3 kg/semana (~2.5 kg)
  const weeklyWasteKg = householdMembers * 2.5;
  const yearlyWasteKg = Math.round(weeklyWasteKg * 52);
  // ~30% yield in final compost
  const yearlyCompostKg = Math.round(yearlyWasteKg * 0.3);
  // ~0.65 L of leachate prevented per kg of food in open dump
  const yearlyLeachateLiters = Math.round(yearlyWasteKg * 0.65);

  return (
    <section id="impacto" className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5ECE0] text-[#3E4B31] text-xs font-bold uppercase tracking-wider mb-2">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Impacto Colectivo en Medellín</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#233321] tracking-tight">
            El Aporte del Parque de las Pacas
          </h3>
          <p className="text-sm text-[#5C6B4A] mt-1 max-w-xl">
            Cifras reales de lo que la comunidad de Conquistadores y Laureles ha evitado enviar al colapsado relleno sanitario La Pradera.
          </p>
        </div>
      </div>

      {/* 3 Metric Pills (Inspired directly by Image 3 Stat Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Metric 1 */}
        <div className="p-5 sm:p-6 rounded-3xl bg-white border border-[#E3DAC8] shadow-xs flex flex-col justify-between gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C6B4A]">
              Orgánicos Rescatados
            </span>
            <span className="p-2 rounded-xl bg-[#E5ECE0] text-[#3E4B31]">
              <Scale className="w-4 h-4" />
            </span>
          </div>
          <div className="mt-1">
            <span className="text-3xl sm:text-4xl font-black text-[#233321]">
              {PARK_SUMMARY.totalOrganicDivertedKg.toLocaleString()}
            </span>
            <span className="text-sm font-bold text-[#5C6B4A] ml-1.5">kg</span>
          </div>
          <p className="text-xs text-[#7A5835]">
            No viajaron en camiones a Donmatías ni saturaron La Pradera.
          </p>
        </div>

        {/* Metric 2 */}
        <div className="p-5 sm:p-6 rounded-3xl bg-white border border-[#E3DAC8] shadow-xs flex flex-col justify-between gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B87339]">
              Abono Cosechado
            </span>
            <span className="p-2 rounded-xl bg-[#EFE7DA] text-[#915422]">
              <Sprout className="w-4 h-4" />
            </span>
          </div>
          <div className="mt-1">
            <span className="text-3xl sm:text-4xl font-black text-[#B87339]">
              {PARK_SUMMARY.totalCompostHarvestedKg.toLocaleString()}
            </span>
            <span className="text-sm font-bold text-[#915422] ml-1.5">kg</span>
          </div>
          <p className="text-xs text-[#7A5835]">
            Mantillo fértil devuelto a jardineras y plantas de los vecinos.
          </p>
        </div>

        {/* Metric 3 */}
        <div className="p-5 sm:p-6 rounded-3xl bg-white border border-[#E3DAC8] shadow-xs flex flex-col justify-between gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#3E4B31]">
              Lixiviados Prevenidos
            </span>
            <span className="p-2 rounded-xl bg-[#E5ECE0] text-[#3E4B31]">
              <Droplets className="w-4 h-4" />
            </span>
          </div>
          <div className="mt-1">
            <span className="text-3xl sm:text-4xl font-black text-[#3E4B31]">
              {PARK_SUMMARY.litersLeachatePrevented.toLocaleString()}
            </span>
            <span className="text-sm font-bold text-[#5C6B4A] ml-1.5">litros</span>
          </div>
          <p className="text-xs text-[#7A5835]">
            Líquidos tóxicos que no contaminaron quebradas ni aguas subterráneas.
          </p>
        </div>
      </div>

      {/* Bento Grid: Context La Pradera + Household Calculator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Medellín & La Pradera context (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-[#233321] text-white border border-[#3E4B31] shadow-xs flex flex-col justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9CAF88] uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 text-[#B87339]" />
              <span>Emergencia Sanitaria en Medellín</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              ¿Por qué compostar en el parque salva la ciudad?
            </h4>
            <p className="text-xs text-[#E5ECE0]/85 leading-relaxed">
              El relleno <strong>La Pradera</strong> recibe más de 3.000 toneladas diarias de basura del Valle de Aburrá. Más del <strong>50% del peso es materia orgánica</strong> que al pudrirse genera metano y lixiviados altamente contaminantes.
            </p>
            <p className="text-xs text-[#E5ECE0]/85 leading-relaxed">
              Al tratar los residuos en nuestro parque con pacas Silva, ahorramos transporte en camiones y creamos suelos vivos para la comunidad.
            </p>
          </div>

          <div className="pt-3 border-t border-[#3E4B31] flex items-center justify-between text-xs text-[#9CAF88]">
            <span>34 familias activas</span>
            <span>8 pacas históricas</span>
          </div>
        </div>

        {/* Right: Personal Calculator (7 cols) */}
        <div className="lg:col-span-7 p-6 rounded-3xl bg-white border border-[#E3DAC8] shadow-xs flex flex-col justify-between gap-5">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B87339]">
                Calculadora Personal
              </span>
              <span className="text-xs text-[#5C6B4A]">
                Basado en 2.5 kg/persona/semana
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-[#233321]">
              ¿Cuánto puede aportar tu hogar al año?
            </h4>
          </div>

          {/* Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#5C6B4A] font-medium">Personas en tu casa:</span>
              <span className="font-extrabold text-base text-[#233321] px-3 py-0.5 rounded-full bg-[#E5ECE0]">
                {householdMembers} {householdMembers === 1 ? "persona" : "personas"}
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={8}
              value={householdMembers}
              onChange={(e) => setHouseholdMembers(Number(e.target.value))}
              className="w-full accent-[#B87339] h-2 bg-[#EFE7DA] rounded-lg cursor-pointer"
            />
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-3 gap-2.5 text-center">
            <div className="p-3 rounded-2xl bg-[#F8F3E8] border border-[#E3DAC8]">
              <span className="block text-xl sm:text-2xl font-black text-[#233321]">
                {yearlyWasteKg}
              </span>
              <span className="text-[11px] font-bold text-[#5C6B4A]">kg orgánicos/año</span>
            </div>

            <div className="p-3 rounded-2xl bg-[#EFE7DA]/50 border border-[#C4A882]/40">
              <span className="block text-xl sm:text-2xl font-black text-[#B87339]">
                {yearlyCompostKg}
              </span>
              <span className="text-[11px] font-bold text-[#915422]">kg abono fértil</span>
            </div>

            <div className="p-3 rounded-2xl bg-[#E5ECE0]/50 border border-[#9CAF88]/40">
              <span className="block text-xl sm:text-2xl font-black text-[#3E4B31]">
                {yearlyLeachateLiters}
              </span>
              <span className="text-[11px] font-bold text-[#3E4B31]">L lixiviados evitados</span>
            </div>
          </div>

          <p className="text-xs text-[#7A5835] italic">
            ¡Con solo bajar un balde cada domingo a las 9:30 AM transformas los residuos de tu cocina en vida para el barrio!
          </p>
        </div>
      </div>
    </section>
  );
}
