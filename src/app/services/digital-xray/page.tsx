"use client";

import Link from "next/link";
import {
  Zap,
  Phone,
  Calendar,
  ShieldCheck,
  Clock,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { DIGITAL_XRAY_SERVICES, SPECIAL_PROCEDURES } from "@/data/servicesData";
import { CLINIC_INFO } from "@/data/clinicInfo";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/SectionHeading";

export default function DigitalXrayPage() {
  const { t } = useLanguage();

  const xrayRegions = [
    {
      region: "Head, Neck & Spine",
      badge: "Axial & Cranial",
      ids: ["xray-skull", "xray-sinus", "xray-facial", "xray-neck", "xray-cervical"]
    },
    {
      region: "Chest, Abdomen & Pelvis",
      badge: "Thoracic & Core",
      ids: ["xray-cxr", "xray-axr", "xray-kub", "xray-pelvis"]
    },
    {
      region: "Upper Extremities & Joints",
      badge: "Upper Limbs",
      ids: ["xray-clavicle", "xray-shoulder", "xray-arm", "xray-elbow", "xray-forearm", "xray-wrist", "xray-hand", "xray-digits"]
    },
    {
      region: "Lower Extremities & Joints",
      badge: "Lower Limbs",
      ids: ["xray-hip", "xray-thigh", "xray-knee", "xray-leg", "xray-ankle", "xray-calcaneus", "xray-foot"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBFCFE] dark:bg-[#050B14] pb-24 transition-colors">
      {/* Hero Header */}
      <section className="bg-[#00142E] dark:bg-[#030812] text-white py-12 lg:py-18 border-b border-white/5 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#B61F32] text-white text-[11px] font-semibold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              <span>Digital Radiography & Fluoroscopy</span>
            </span>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
              Digital X-Ray & <br />
              <span className="text-red-400">Special Fluoroscopy Procedures</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Equipped with digital flat-panel detector systems minimizing radiation dose while generating high-definition skeletal contrast. We perform 24 skeletal examinations alongside specialized contrast studies including HSG for infertility, IVU, CUG, and Barium studies.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/book?service=xray"
                className="inline-flex items-center gap-2 bg-[#B61F32] hover:bg-[#8F1726] text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book X-Ray or Procedure</span>
              </Link>
              <a
                href={`tel:${CLINIC_INFO.phone1.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold px-4 py-2.5 rounded-xl border border-white/15 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-red-400" />
                <span className="font-mono">{CLINIC_INFO.phone1}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Safety standards strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-5 relative z-10">
        <div className="bg-white dark:bg-[#0A1324] rounded-2xl shadow-xs border border-slate-200/80 dark:border-slate-800 p-4 grid grid-cols-1 md:grid-cols-3 gap-4 transition-colors">
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-[#002047] dark:text-white uppercase">ALARA Safety Standards</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Strict minimal radiation protocols with certified lead shielding.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50">
            <Zap className="w-4 h-4 text-[#B61F32] dark:text-red-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-[#002047] dark:text-white uppercase">Instant Digital Processing</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Digital flat-panel exposures rendered in seconds with film print & DICOM output.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50">
            <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-[#002047] dark:text-white uppercase">Stat Trauma Reporting</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Immediate review for fractures, dislocations, and acute chest presentations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        {/* Special Procedures Section */}
        <section id="special-procedures" className="bg-white dark:bg-[#0A1324] rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 transition-colors">
          <div className="max-w-2xl mb-6">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-50 dark:bg-red-950/40 text-[#B61F32] dark:text-red-400 uppercase tracking-wider">
              Specialized Contrast Studies
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#002047] dark:text-white mt-1.5">
              Special Procedures: HSG, IVU, CUG & Barium Series
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              Performed by experienced consultant radiologists for fertility evaluations, urinary tract imaging, and gastrointestinal studies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {SPECIAL_PROCEDURES.map((proc) => (
              <div
                key={proc.id}
                id={proc.id}
                className="p-5 rounded-xl bg-slate-50/60 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-semibold text-[#B61F32] dark:text-red-400 uppercase tracking-wider">
                      {proc.tag || "Fluoroscopy"}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      ~{proc.durationMinutes} min
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#002047] dark:text-white">{proc.name}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                    {proc.fullDescription}
                  </p>

                  <div className="mt-3.5 p-3 rounded-lg bg-white dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs">
                    <p className="font-semibold text-[#002047] dark:text-slate-200 text-[11px] uppercase">
                      Preparation & Clinical Protocol:
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      {proc.preparation}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">{proc.resultsTurnaround}</span>
                  <Link
                    href={`/book?service=${proc.id}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold bg-[#B61F32] hover:bg-[#8F1726] text-white px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <Calendar className="w-3 h-3" />
                    <span>Book Procedure</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 24 Digital Skeletal Views */}
        <section className="space-y-8">
          <SectionHeading
            badge="Digital Skeletal Views"
            title="All 24 Digital X-Ray Services:"
            highlightText="Anatomical Directory"
            subtitle="Full-body digital radiography catalog for fracture detection, joint evaluation, and thoracic screening."
          />

          <div className="space-y-6">
            {xrayRegions.map((regionGroup, idx) => {
              const regionServices = DIGITAL_XRAY_SERVICES.filter((x) =>
                regionGroup.ids.includes(x.id)
              );

              return (
                <div key={idx} className="bg-white dark:bg-[#0A1324] rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800 transition-colors">
                  <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-slate-100 dark:border-slate-800/80">
                    <div>
                      <span className="text-[10px] font-bold text-[#B61F32] dark:text-red-400 uppercase tracking-wider">
                        {regionGroup.badge}
                      </span>
                      <h3 className="text-base font-bold text-[#002047] dark:text-white mt-0.5">
                        {regionGroup.region}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {regionServices.length} Views
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {regionServices.map((srv) => (
                      <div
                        key={srv.id}
                        id={srv.id}
                        className="p-3.5 rounded-xl bg-slate-50/60 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-start justify-between">
                            <h4 className="font-semibold text-xs sm:text-sm text-[#002047] dark:text-white">{srv.name}</h4>
                            {srv.featured && (
                              <span className="px-1.5 py-0.5 rounded bg-red-50 dark:bg-red-950/40 text-[#B61F32] dark:text-red-400 text-[10px] font-semibold">
                                Primary
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                            {srv.shortDescription}
                          </p>
                        </div>

                        <div className="mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                          <span className="text-[11px] text-slate-400 font-mono">~10 min</span>
                          <Link
                            href={`/book?service=${srv.id}`}
                            className="text-xs font-semibold text-[#002047] dark:text-slate-300 hover:text-[#B61F32] dark:hover:text-red-400 flex items-center gap-0.5"
                          >
                            <span>Book</span>
                            <ChevronRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Emergency X-Ray Banner */}
        <div className="bg-[#00142E] dark:bg-[#030812] rounded-2xl p-6 sm:p-8 text-white border border-white/10 flex flex-col md:flex-row items-center justify-between gap-5 transition-colors">
          <div className="space-y-1.5 max-w-xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-300">
              Trauma & Acute Triage
            </span>
            <h3 className="text-lg sm:text-xl font-bold">
              Emergency X-Ray & Fracture Diagnostics
            </h3>
            <p className="text-xs text-slate-300">
              Immediate triage and rapid reporting for fractures, foreign bodies, and acute respiratory presentations in Adi Dero and Bahir Dar.
            </p>
          </div>

          <a
            href={`tel:${CLINIC_INFO.phone1.replace(/\s+/g, "")}`}
            className="shrink-0 inline-flex items-center gap-2 bg-[#B61F32] hover:bg-[#8F1726] text-white px-5 py-2.5 rounded-xl font-semibold text-xs shadow-xs transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call {CLINIC_INFO.phone1}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
