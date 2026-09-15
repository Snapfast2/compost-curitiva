"use client";

import React, { useState } from "react";
import { X, MessageCircle, ExternalLink, Copy, Check } from "lucide-react";
import { PARK_SUMMARY } from "@/data/pacasData";

interface WhatsAppGroupsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WhatsAppGroupsModal({ isOpen, onClose }: WhatsAppGroupsModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyInvite = () => {
    const text = `*¡Hola vecinos! Este domingo hacemos la Paca Digestora Silva #342*\n\nNos encontramos en el Parque de las Pacas (*Calle 38 # 64A-8*, Conquistadores) este *domingo a las 9:30 AM*.\n\nLleva tu balde con cáscaras y sobras de cocina para transformarlos en abono fértil sin olores ni moscas.\n\n¡Más de 341 pacas construidas en el barrio! Únete a la comunidad aquí:\nhttps://compost-curitiva.vercel.app`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs select-none">
      <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-[#E3DAC8] space-y-5 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#EFE7DA] text-[#7A5835] hover:bg-[#C4A882]/40 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="space-y-1 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5ECE0] text-[#2E4A32] text-xs font-bold">
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Comunidad de WhatsApp</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#1D3320]">
            Grupos del Barrio
          </h3>
          <p className="text-xs text-[#5C6B4A] leading-relaxed">
            Tenemos dos grupos porque el primero se llena por el límite de participantes de WhatsApp. En ambos compartimos los avisos y convocatorias de cada domingo.
          </p>
        </div>

        {/* Group Cards */}
        <div className="space-y-3">
          {/* Grupo 1 */}
          <div className="p-4 rounded-2xl bg-[#F7F3EB] border border-[#E3DAC8] flex items-center justify-between gap-3">
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                <h4 className="text-sm font-bold text-[#1D3320]">
                  Grupo #1: Paca Parque
                </h4>
              </div>
              <p className="text-[11px] text-[#7A5835]">
                Comunidad fundadora y avisos dominicales
              </p>
            </div>

            <a
              href={PARK_SUMMARY.whatsappGroup1Url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20BA5C] text-white text-xs font-bold shadow-xs transition-all shrink-0 active:scale-95"
            >
              <span>Unirme</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Grupo 2 */}
          <div className="p-4 rounded-2xl bg-[#F7F3EB] border border-[#E3DAC8] flex items-center justify-between gap-3">
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                <h4 className="text-sm font-bold text-[#1D3320]">
                  Grupo #2: Paca Parque
                </h4>
              </div>
              <p className="text-[11px] text-[#7A5835]">
                Para nuevos vecinos y nuevos participantes
              </p>
            </div>

            <a
              href={PARK_SUMMARY.whatsappGroup2Url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20BA5C] text-white text-xs font-bold shadow-xs transition-all shrink-0 active:scale-95"
            >
              <span>Unirme</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Copy invite for building chats */}
        <div className="pt-2 border-t border-[#E3DAC8] space-y-2">
          <p className="text-[11px] text-[#7A5835] font-medium">
            ¿Quieres invitar a los vecinos de tu edificio?
          </p>
          <button
            onClick={copyInvite}
            className="w-full py-3 px-4 rounded-2xl bg-[#EAE3D5] hover:bg-[#DDD3C2] text-[#2E4A32] text-xs font-bold flex items-center justify-center gap-2 transition-colors border border-[#D8CEBD]"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-700" />
                <span>¡Mensaje copiado para WhatsApp!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copiar texto de invitación para tu edificio</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
