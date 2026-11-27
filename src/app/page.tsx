"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  Zap,
  FileCheck,
  Stethoscope,
  Phone,
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MapPin,
  ChevronRight,
  HeartPulse,
  Award,
  Users
} from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicInfo";
import { ULTRASOUND_SERVICES, SPECIAL_PROCEDURES } from "@/data/servicesData";
import { DOCTORS_DATA } from "@/data/doctorsData";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import EcgDivider from "@/components/EcgDivider";

export default function HomePage() {
  const { t, language } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      {/* ======================================================== */}
      {/* 1. HERO SECTION: MINIMALIST, REFINED & AIRY */}
      {/* ======================================================== */}
      <section className="relative bg-[#00142E] dark:bg-[#030812] text-white pt-12 pb-20 lg:pt-18 lg:pb-24 border-b border-white/5 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B61F32] text-white font-medium text-xs tracking-wide">
                <HeartPulse className="w-3.5 h-3.5" />
                <span>{t.hero.badge}</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                  {t.hero.titleLine1}{" "}
                  <span className="text-red-400 font-extrabold">{t.hero.titleHighlight}</span>
                </h1>
                <p className="text-base sm:text-lg text-slate-300 font-medium">
                  {t.motto}
                </p>
              </div>

              <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                {t.hero.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 bg-[#B61F32] hover:bg-[#8F1726] text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-xs transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t.hero.bookCta}</span>
                </Link>

                <a
                  href={`tel:${CLINIC_INFO.phone1.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl border border-white/15 transition-all"
                >
                  <Phone className="w-4 h-4 text-red-400" />
                  <span className="font-mono">{CLINIC_INFO.phone1}</span>
                </a>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white font-medium text-xs sm:text-sm px-3 py-2 transition-colors"
                >
                  <span>{t.hero.exploreCta}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-red-400" />
                </Link>
              </div>

              {/* Stats Bar */}
              <div className="pt-6 sm:pt-8 border-t border-white/10 flex sm:grid sm:grid-cols-4 gap-4 sm:gap-6 text-left overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
                {CLINIC_INFO.stats.map((st, i) => (
                  <div key={i} className="min-w-[120px] sm:min-w-0 shrink-0">
                    <p className="text-xl sm:text-2xl font-bold text-white font-mono">{st.value}</p>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 whitespace-nowrap sm:whitespace-normal">{st.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Media Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#001026] shadow-xl">
                  <div className="relative h-[340px] sm:h-[400px] w-full">
                    <Image
                      src="/images/photo-doctor-hero.jpg"
                      alt="Radiance Clinic Senior Doctor"
                      fill
                      priority
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 420px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001026] via-transparent to-transparent opacity-70" />
                  </div>

                  <div className="p-4 bg-[#001026] text-white border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-red-300">{t.branches.adiDeroTitle}</p>
                        <p className="text-xs text-slate-300 font-mono mt-0.5">{CLINIC_INFO.phone1}</p>
                      </div>
                      <Link
                        href="/contact"
                        className="text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1"
                      >
                        <span>{t.common.directions}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. CORE PILLARS: MINIMALIST CARDS */}
      {/* ======================================================== */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Mobile swipe hint */}
        <div className="sm:hidden flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 mb-2.5 px-0.5">
          <span className="font-semibold uppercase tracking-wider">Core Clinical Pillars</span>
          <span className="text-[#B61F32] dark:text-red-400 font-medium">Swipe sideways &rarr;</span>
        </div>

        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 pb-3 sm:pb-0">
          {/* Card 1 */}
          <Link
            href="/services/ultrasound"
            className="w-[82vw] max-w-[300px] sm:w-auto shrink-0 snap-start group p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0A1324] border border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/40 text-[#B61F32] dark:text-red-400 flex items-center justify-center mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm sm:text-base text-[#002047] dark:text-white group-hover:text-[#B61F32] dark:group-hover:text-red-400 transition-colors">
                  3G Ultrasound Suite
                </h3>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  27 Scans
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Abdominal, vascular Doppler, 3D/4D fetal scans, MSK, pediatric hip screening, and echocardiography.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs font-semibold text-[#B61F32] dark:text-red-400">
              <span>View Ultrasound</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            href="/services/digital-xray"
            className="w-[82vw] max-w-[300px] sm:w-auto shrink-0 snap-start group p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0A1324] border border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-[#002047] dark:text-blue-400 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm sm:text-base text-[#002047] dark:text-white group-hover:text-[#B61F32] dark:group-hover:text-red-400 transition-colors">
                  Digital X-Ray
                </h3>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  24 Views
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                High-definition digital skeletal imaging for chest, skull, spine, pelvis, and limbs with minimal radiation.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs font-semibold text-[#002047] dark:text-slate-300">
              <span>Skeletal Catalog</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

          {/* Card 3 */}
          <Link
            href="/services/digital-xray#special-procedures"
            className="w-[82vw] max-w-[300px] sm:w-auto shrink-0 snap-start group p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0A1324] border border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/40 text-[#B61F32] dark:text-red-400 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm sm:text-base text-[#002047] dark:text-white group-hover:text-[#B61F32] dark:group-hover:text-red-400 transition-colors">
                  Special Procedures
                </h3>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  Fluoroscopy
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                HSG fertility tubal patency evaluation, IVU/IVP urinary studies, CUG, and Barium swallow/enema.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs font-semibold text-[#B61F32] dark:text-red-400">
              <span>Fertility & GI</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

          {/* Card 4 */}
          <Link
            href="/services/ct-mri-consultation"
            className="w-[82vw] max-w-[300px] sm:w-auto shrink-0 snap-start group p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0A1324] border border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                <FileCheck className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm sm:text-base text-[#002047] dark:text-white group-hover:text-[#B61F32] dark:group-hover:text-red-400 transition-colors">
                  CT & MRI Reading
                </h3>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  Second Opinions
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Subspecialty tele-radiology interpretation and case discussions with Senior Consultant Radiologists.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs font-semibold text-[#002047] dark:text-slate-300">
              <span>Request Review</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. 3G ULTRASOUND SERVICES: 27 MODALITIES OVERVIEW */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 bg-slate-100/60 dark:bg-[#070F1E] border-y border-slate-200/60 dark:border-slate-800/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Diagnostic Sonography"
            title="3G Ultrasound Services:"
            highlightText="27 Precision Modalities"
            subtitle="From obstetric 3D/4D scans and vascular Doppler to neonatal neuro-sonography and guided FNAC biopsy."
            centered
          />

          {/* Mobile swipe hint */}
          <div className="md:hidden flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 mb-3 px-0.5">
            <span className="font-semibold uppercase tracking-wider">Precision Modalities</span>
            <span className="text-[#B61F32] dark:text-red-400 font-medium">Swipe sideways &rarr;</span>
          </div>

          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 pb-3 md:pb-0">
            {ULTRASOUND_SERVICES.slice(0, 6).map((srv) => (
              <div
                key={srv.id}
                className="w-[82vw] max-w-[320px] md:w-auto shrink-0 snap-start bg-white dark:bg-[#0A1324] rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#B61F32] dark:text-red-400">
                      {srv.tag || "Sonography"}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      ~{srv.durationMinutes} min
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#002047] dark:text-white">
                    {srv.name}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {srv.shortDescription}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 text-xs text-slate-500 dark:text-slate-400">
                    <strong className="text-slate-700 dark:text-slate-300">Prep: </strong>
                    <span>{srv.preparation}</span>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                  <Link
                    href={`/services/ultrasound#${srv.id}`}
                    className="text-xs font-semibold text-[#002047] dark:text-slate-300 hover:text-[#B61F32] dark:hover:text-red-400 flex items-center gap-1"
                  >
                    <span>Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/book?service=${srv.id}`}
                    className="text-xs font-semibold bg-[#B61F32] hover:bg-[#8F1726] text-white px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Book Scan
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services/ultrasound"
              className="inline-flex items-center gap-2 bg-[#002047] dark:bg-slate-800 hover:bg-[#001838] dark:hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
            >
              <span>Explore All 27 Ultrasound Modalities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. CLINICAL FOCUS: HSG & SPECIAL PROCEDURES */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-red-50 dark:bg-red-950/40 text-[#B61F32] dark:text-red-400 border border-red-200/50 dark:border-red-900/40 uppercase tracking-wider">
              Specialized Fluoroscopy
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#002047] dark:text-white leading-tight">
              Special Procedures: <br />
              <span className="text-[#B61F32] dark:text-red-400">HSG, IVU, CUG & Barium Series</span>
            </h2>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              When standard non-contrast imaging requires functional visualization, our radiologists perform fluoroscopic investigations with patient dignity, comfort, and immediate report turnaround.
            </p>

            <div className="space-y-3 pt-1">
              {SPECIAL_PROCEDURES.slice(0, 3).map((proc) => (
                <div key={proc.id} className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0A1324] border border-slate-200/70 dark:border-slate-800/80">
                  <h4 className="text-xs font-bold text-[#002047] dark:text-white">{proc.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">{proc.shortDescription}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/services/digital-xray#special-procedures"
                className="inline-flex items-center gap-2 bg-[#B61F32] hover:bg-[#8F1726] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors"
              >
                <span>Preparation & Procedure Guides</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm bg-white dark:bg-[#0A1324]">
              <div className="relative h-72 sm:h-80 w-full">
                <Image
                  src="/images/photo-ultrasound.jpg"
                  alt="Special Procedure & Sonography Suite"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="text-sm font-bold text-[#002047] dark:text-white">Gentle, Dignified Patient Handling</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Private exam environments, compassionate clinical team, and direct coordination with your referring physician.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. WHY RADIANCE & CORE VALUES (CLEAN & NON-AI) */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 bg-slate-100/60 dark:bg-[#070F1E] border-y border-slate-200/60 dark:border-slate-800/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Radiance Standard"
            title="Our Healthcare Philosophy &"
            highlightText="Core Values"
            subtitle="Guided by our company profile: high standards of diagnostic accuracy, patient safety, and compassionate care."
            centered
          />

          {/* Mobile swipe hint */}
          <div className="md:hidden flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 mb-3 px-0.5">
            <span className="font-semibold uppercase tracking-wider">Healthcare Philosophy</span>
            <span className="text-[#B61F32] dark:text-red-400 font-medium">Swipe sideways &rarr;</span>
          </div>

          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 pb-3 md:pb-0">
            <div className="w-[78vw] max-w-[270px] md:w-auto shrink-0 snap-start p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0A1324] border border-slate-200/80 dark:border-slate-800/80">
              <div className="w-9 h-9 rounded-lg bg-red-50 dark:bg-red-950/40 text-[#B61F32] dark:text-red-400 flex items-center justify-center mb-3.5">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-[#002047] dark:text-white">Patient-First Care</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                Prioritizing patient comfort, clear communication, and personalized dignity at every step of diagnosis.
              </p>
            </div>

            <div className="w-[78vw] max-w-[270px] md:w-auto shrink-0 snap-start p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0A1324] border border-slate-200/80 dark:border-slate-800/80">
              <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-[#002047] dark:text-blue-400 flex items-center justify-center mb-3.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-[#002047] dark:text-white">Quality & Safety</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                Strict acoustic transducer hygiene, ALARA radiation safety, and daily laboratory calibration controls.
              </p>
            </div>

            <div className="w-[78vw] max-w-[270px] md:w-auto shrink-0 snap-start p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0A1324] border border-slate-200/80 dark:border-slate-800/80">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-[#002047] dark:text-white">Modern Technology</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                High-frequency linear and 3D/4D matrix transducers, digital flat-panel X-rays, and automated analyzers.
              </p>
            </div>

            <div className="w-[78vw] max-w-[270px] md:w-auto shrink-0 snap-start p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0A1324] border border-slate-200/80 dark:border-slate-800/80">
              <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3.5">
                <Award className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-[#002047] dark:text-white">Clinical Integrity</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                Honest clinical recommendations, transparent second opinions, and reliable written radiological reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. DUAL LOCATION DIRECTORY */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeading
          badge="Our Locations"
          title="Visit Our Diagnostic Centers in"
          highlightText="Adi Dero & Bahir Dar"
          subtitle="Direct phone lines and coordinated patient care across both facilities."
          centered
        />

        {/* Mobile swipe hint */}
        <div className="md:hidden flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 mb-3 px-0.5">
          <span className="font-semibold uppercase tracking-wider">Our Clinic Hubs</span>
          <span className="text-[#B61F32] dark:text-red-400 font-medium">Swipe sideways &rarr;</span>
        </div>

        <div className="flex md:grid md:grid-cols-2 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 pb-3 md:pb-0">
          {/* Adi Dero */}
          <div className="w-[86vw] max-w-[360px] md:w-auto shrink-0 snap-start p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0A1324] border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold text-[#B61F32] dark:text-red-400 uppercase tracking-wider block mb-1">
                Branch 1 • Diagnostic Imaging
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#002047] dark:text-white">
                {t.branches.adiDeroTitle}
              </h3>

              <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  Address & Directions:
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                  {t.branches.adiDeroAddress}
                </p>
                <p className="text-[11px] font-semibold text-[#B61F32] dark:text-red-400 mt-2">
                  {t.branches.adiDeroTagline}
                </p>
              </div>

              <div className="mt-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                <p className="flex items-center gap-2 font-mono font-bold text-slate-900 dark:text-white text-sm">
                  <Phone className="w-3.5 h-3.5 text-[#B61F32]" />
                  <span>{CLINIC_INFO.phone1}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Mon - Sun: 7:30 AM - 8:30 PM (24/7 Emergency Support)</span>
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-3">
              <a
                href={`tel:${CLINIC_INFO.phone1.replace(/\s+/g, "")}`}
                className="flex-1 text-center bg-[#B61F32] hover:bg-[#8F1726] text-white text-xs font-semibold py-2.5 rounded-xl transition-colors"
              >
                Call {CLINIC_INFO.phone1}
              </a>
              <Link
                href="/book?branch=adi-dero"
                className="px-4 py-2.5 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60 rounded-xl transition-colors"
              >
                Book in Adi Dero
              </Link>
            </div>
          </div>

          {/* Bahir Dar */}
          <div className="w-[86vw] max-w-[360px] md:w-auto shrink-0 snap-start p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0A1324] border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold text-[#002047] dark:text-slate-400 uppercase tracking-wider block mb-1">
                Branch 2 • Multispeciality Medical Hub
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#002047] dark:text-white">
                {t.branches.bahirDarTitle}
              </h3>

              <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  Address:
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                  {t.branches.bahirDarAddress}
                </p>
                <p className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 mt-2">
                  {t.branches.bahirDarTagline}
                </p>
              </div>

              <div className="mt-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                <p className="flex items-center gap-2 font-mono font-bold text-slate-900 dark:text-white text-sm">
                  <Phone className="w-3.5 h-3.5 text-[#B61F32]" />
                  <span>{CLINIC_INFO.phone2}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Mon - Sat: 8:00 AM - 8:00 PM | Sun: 8:30 AM - 5:00 PM</span>
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-3">
              <a
                href={`tel:${CLINIC_INFO.phone2.replace(/\s+/g, "")}`}
                className="flex-1 text-center bg-[#002047] dark:bg-slate-800 hover:bg-[#001838] dark:hover:bg-slate-700 text-white text-xs font-semibold py-2.5 rounded-xl transition-colors"
              >
                Call {CLINIC_INFO.phone2}
              </a>
              <Link
                href="/book?branch=bahir-dar"
                className="px-4 py-2.5 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60 rounded-xl transition-colors"
              >
                Book in Bahir Dar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. BOTTOM CTA */}
      {/* ======================================================== */}
      <section className="py-12 bg-slate-50 dark:bg-[#070F1E] border-t border-slate-200/60 dark:border-slate-800/80 transition-colors">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <EcgDivider />
          <h2 className="text-xl sm:text-2xl font-bold text-[#002047] dark:text-white mt-3">
            Schedule an Ultrasound, Digital X-Ray or Doctor Consultation
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1.5">
            Verified scan preparation instructions, experienced radiologists, and same-day digital reports.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-[#B61F32] hover:bg-[#8F1726] text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-xs transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment Online</span>
            </Link>

            <a
              href={`tel:${CLINIC_INFO.phone1.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-[#002047] dark:text-slate-200 text-xs font-semibold px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B61F32]" />
              <span className="font-mono">{CLINIC_INFO.phone1}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
