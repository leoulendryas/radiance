"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  HeartPulse,
  ChevronRight,
  ShieldCheck,
  ArrowUpRight
} from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicInfo";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#001026] dark:bg-[#03060C] text-slate-300 pt-14 pb-8 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upper Highlight Card */}
        <div className="bg-[#00193B] dark:bg-[#071124] rounded-2xl p-6 sm:p-8 border border-white/10 dark:border-slate-800/80 mb-12 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-[#B61F32] text-white text-xs font-semibold tracking-wide">
                <HeartPulse className="w-3.5 h-3.5" />
                <span>{t.tagline}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {t.motto}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
                {t.subMotto} — Serving our community in Adi Dero and Bahir Dar with advanced 3D/4D ultrasound, digital radiography, specialized fluoroscopy (HSG), and consultant second opinions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${CLINIC_INFO.phone1.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 bg-[#B61F32] hover:bg-[#8F1726] text-white px-4 py-2.5 rounded-xl font-semibold text-xs transition-colors shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {CLINIC_INFO.phone1}</span>
              </a>
              <Link
                href="/book"
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/15 text-white px-4 py-2.5 rounded-xl font-semibold text-xs border border-white/15 transition-colors"
              >
                <span>{t.nav.book}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10 dark:border-slate-800/80">
          {/* Column 1: Brand */}
          <div className="space-y-3.5">
            <Link href="/" className="inline-block relative h-10 w-44">
              <Image
                src="/images/logo-white.png"
                alt="Radiance & 3G Diagnostic Imaging"
                fill
                className="object-contain object-left"
              />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footer.aboutDesc}
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t.footer.safetyCertified}</span>
            </div>
          </div>

          {/* Column 2: 3G Imaging */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3.5">
              {t.footer.imagingTitle}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/services/ultrasound" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#B61F32]" />
                  <span>{t.nav.ultrasound}</span>
                </Link>
              </li>
              <li>
                <Link href="/services/ultrasound" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#B61F32]" />
                  <span>Duplex Doppler (Renal, Carotid, Venous)</span>
                </Link>
              </li>
              <li>
                <Link href="/services/ultrasound" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#B61F32]" />
                  <span>Echocardiography & 12-Lead ECG</span>
                </Link>
              </li>
              <li>
                <Link href="/services/digital-xray" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#B61F32]" />
                  <span>{t.nav.xray}</span>
                </Link>
              </li>
              <li>
                <Link href="/services/digital-xray#special-procedures" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#B61F32]" />
                  <span>HSG (Hysterosalpingography)</span>
                </Link>
              </li>
              <li>
                <Link href="/services/ct-mri-consultation" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#B61F32]" />
                  <span>{t.nav.ctMri}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3.5">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/services/multispeciality" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#B61F32]" />
                  <span>{t.nav.multispeciality}</span>
                </Link>
              </li>
              <li>
                <Link href="/patients" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#B61F32]" />
                  <span>{t.nav.patients}</span>
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#B61F32]" />
                  <span>{t.nav.doctors}</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#B61F32]" />
                  <span>{t.nav.about}</span>
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#B61F32]" />
                  <span>{t.nav.book}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Locations */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3.5">
              {t.footer.centersTitle}
            </h4>

            {/* Adi Dero */}
            <div className="bg-white/5 dark:bg-slate-900/40 p-3 rounded-xl border border-white/5 space-y-1">
              <p className="text-[11px] font-bold text-red-300">
                {t.branches.adiDeroTitle}
              </p>
              <p className="text-xs text-slate-300 leading-snug">
                {t.branches.adiDeroAddress}
              </p>
              <p className="text-xs font-mono text-white pt-0.5">
                {CLINIC_INFO.phone1}
              </p>
            </div>

            {/* Bahir Dar */}
            <div className="bg-white/5 dark:bg-slate-900/40 p-3 rounded-xl border border-white/5 space-y-1">
              <p className="text-[11px] font-bold text-slate-200">
                {t.branches.bahirDarTitle}
              </p>
              <p className="text-xs text-slate-300">
                {t.branches.bahirDarAddress}
              </p>
              <p className="text-xs font-mono text-white pt-0.5">
                {CLINIC_INFO.phone2}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/patients" className="hover:text-white transition-colors">{t.footer.privacy}</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">{t.footer.directions}</Link>
            <span>•</span>
            <Link href="/book" className="text-red-400 hover:text-red-300 font-medium transition-colors">{t.footer.onlineBooking}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
