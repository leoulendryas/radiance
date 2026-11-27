"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Phone,
  Clock,
  Languages,
  GraduationCap,
  MapPin
} from "lucide-react";
import { DOCTORS_DATA } from "@/data/doctorsData";
import { CLINIC_INFO } from "@/data/clinicInfo";
import { useLanguage } from "@/context/LanguageContext";

export default function DoctorsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070D18] pb-24 text-slate-800 dark:text-slate-100 transition-colors">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#001229] via-[#002047] to-[#0A2540] text-white py-14 sm:py-18 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B61F32] text-white text-xs font-bold uppercase tracking-wider">
              {t.doctorsPage.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {t.doctorsPage.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {t.doctorsPage.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 space-y-12">
        {/* Mobile swipe hint */}
        <div className="md:hidden flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 -mb-9 px-0.5">
          <span className="font-semibold uppercase tracking-wider">{t.doctorsPage.badge}</span>
          <span className="text-[#B61F32] dark:text-red-400 font-medium">{t.doctorsPage.swipeHint}</span>
        </div>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 pb-3 md:pb-0 pt-2 md:pt-0">
          {DOCTORS_DATA.map((doc) => (
            <div
              key={doc.id}
              className="w-[84vw] max-w-[320px] md:w-auto shrink-0 snap-start bg-white dark:bg-[#0A1324] rounded-2xl overflow-hidden shadow-xs hover:border-[#B61F32]/50 transition-all border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between group"
            >
              <div>
                {/* Image & Badge */}
                <div className="relative h-60 w-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
                  <Image
                    src={doc.avatarUrl}
                    alt={doc.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                  {doc.badge && (
                    <span className="absolute top-3.5 right-3.5 px-2.5 py-0.5 rounded-full bg-[#B61F32] text-white text-[11px] font-bold shadow-xs">
                      {doc.badge}
                    </span>
                  )}

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold text-red-300 uppercase tracking-wider block">
                      {doc.specialty}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold">{doc.name}</h3>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 space-y-3.5">
                  <p className="text-xs font-semibold text-[#002047] dark:text-red-400">{doc.title}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{doc.bio}</p>

                  <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                    <div className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                      <GraduationCap className="w-4 h-4 text-[#B61F32] shrink-0 mt-0.5" />
                      <span>{doc.qualifications.join(" • ")}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{doc.schedule}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <Languages className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{t.doctorsPage.languagesLabel}{doc.languages.join(", ")}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{doc.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="p-5 pt-0">
                <Link
                  href={`/book?doctor=${doc.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#002047] dark:bg-slate-800 hover:bg-[#B61F32] dark:hover:bg-[#B61F32] text-white text-xs font-semibold py-2.5 rounded-lg transition-colors shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{t.doctorsPage.bookConsultationWith(doc.name.split(" ")[1] || doc.name)}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Multidisciplinary Banner */}
        <div className="bg-gradient-to-r from-[#001229] via-[#002047] to-[#0A2540] rounded-2xl p-6 sm:p-8 text-white shadow-md border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="px-2.5 py-0.5 rounded-full bg-[#B61F32] text-white text-xs font-bold">
              {t.doctorsPage.collaborativeBadge}
            </span>
            <h3 className="text-lg sm:text-xl font-bold">
              {t.doctorsPage.collaborativeTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.doctorsPage.collaborativeDesc}
            </p>
          </div>

          <a
            href={`tel:${CLINIC_INFO.primaryPhone.replace(/\s+/g, "")}`}
            className="shrink-0 inline-flex items-center gap-2 bg-[#B61F32] hover:bg-[#911624] text-white px-5 py-2.5 rounded-lg font-semibold text-xs sm:text-sm shadow-xs transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>{t.doctorsPage.callDoctorBtn} ({CLINIC_INFO.primaryPhone})</span>
          </a>
        </div>
      </div>
    </div>
  );
}
