"use client";

import Link from "next/link";
import { Phone, Clock, MapPin, ShieldCheck, HeartPulse } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicInfo";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

export default function TopBar() {
  const { t } = useLanguage();

  return (
    <div className="bg-[#001229] dark:bg-[#03070E] text-slate-300 text-[11px] border-b border-white/10 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Left: Tagline */}
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#B61F32]/90 text-white font-medium text-[11px] tracking-wide">
              <HeartPulse className="w-3 h-3" />
              <span>{t.tagline}</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400 text-[11px]">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>Accurate Diagnostics • Advanced Technology</span>
            </span>
          </div>

          {/* Right: Phone, Hours & Controls */}
          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>{t.common.hours}</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`tel:${CLINIC_INFO.phone1.replace(/\s+/g, "")}`}
                className="flex items-center gap-1.5 font-medium text-white hover:text-red-300 transition-colors bg-white/10 dark:bg-slate-800/80 px-2 py-0.5 rounded text-[11px]"
                title="Call 3G & Radiance Direct"
              >
                <Phone className="w-3 h-3 text-red-400" />
                <span className="tracking-wide font-mono text-[10px] sm:text-[11px]">{CLINIC_INFO.phone1}</span>
              </a>

              <a
                href={`tel:${CLINIC_INFO.phone2.replace(/\s+/g, "")}`}
                className="hidden xl:flex items-center gap-1.5 font-medium text-slate-300 hover:text-white transition-colors bg-white/5 dark:bg-slate-800/50 px-2 py-0.5 rounded text-[11px]"
                title="Alternate Line"
              >
                <span className="tracking-wide font-mono text-[11px]">{CLINIC_INFO.phone2}</span>
              </a>
            </div>

            <div className="flex items-center gap-1.5 border-l border-white/10 dark:border-slate-800 pl-2 sm:pl-3">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
