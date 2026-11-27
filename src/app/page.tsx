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
  Users,
  Star,
  ExternalLink,
  Building2,
  HeartHandshake
} from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicInfo";
import { ULTRASOUND_SERVICES, SPECIAL_PROCEDURES } from "@/data/servicesData";
import { DOCTORS_DATA } from "@/data/doctorsData";
import { TESTIMONIALS_DATA } from "@/data/testimonialsData";
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
      {/* 04. ABOUT THE CLINIC (HERITAGE & PURPOSE) */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-[#070D18] border-y border-slate-200/60 dark:border-slate-800/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-red-50 dark:bg-red-950/40 text-[#B61F32] dark:text-red-400 border border-red-200/50 dark:border-red-900/40 uppercase tracking-wider">
                04 • About the Clinic
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#002047] dark:text-white leading-tight">
                Better Health. Brighter Tomorrow. <br />
                <span className="text-[#B61F32] dark:text-red-400">Radiance Clinic & 3G Diagnostic Imaging</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Radiance Multispeciality Clinic and 3G Diagnostic Imaging Center was established with a singular mission: to provide accessible, reliable, and compassionate healthcare to our community.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Operating high-precision imaging hubs in Adi Dero and Bahir Dar, our centers bring together senior fellowship-trained radiologists, modern 3D/4D ultrasound systems, digital radiography, and an automated pathology lab.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-[#002047] dark:bg-slate-800 hover:bg-[#092f61] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors"
                >
                  <span>Read Full Clinic Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/doctors"
                  className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors"
                >
                  <Users className="w-3.5 h-3.5 text-[#B61F32]" />
                  <span>Clinical Leadership</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-md bg-white dark:bg-[#0A1324]">
                <div className="relative h-72 sm:h-80 w-full">
                  <Image
                    src="/images/photo-building.jpg"
                    alt="Radiance Modern Medical Center"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-[#001533] text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs text-red-300 font-semibold">Flagship Facilities</p>
                    <h4 className="text-xs sm:text-sm font-bold">Adi Dero & Bahir Dar Healthcare Hubs</h4>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#B61F32] text-white text-[10px] font-bold">
                    Safe & Modern
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 05. WHY CHOOSE US? (CORE VALUES & STANDARDS) */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#050B14] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="05 • Why Choose Us?"
            title="The Radiance Standard:"
            highlightText="Why Patients Trust Us"
            subtitle="Guided by our healthcare philosophy: high standards of diagnostic accuracy, patient safety, and compassionate clinical care."
            centered
          />

          {/* Mobile swipe hint */}
          <div className="md:hidden flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 mb-3 px-0.5">
            <span className="font-semibold uppercase tracking-wider">Why Choose Us</span>
            <span className="text-[#B61F32] dark:text-red-400 font-medium">Swipe sideways &rarr;</span>
          </div>

          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 pb-3 md:pb-0">
            <div className="w-[78vw] max-w-[270px] md:w-auto shrink-0 snap-start p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-[#0A1324] border border-slate-200/80 dark:border-slate-800/80">
              <div className="w-9 h-9 rounded-lg bg-red-50 dark:bg-red-950/40 text-[#B61F32] dark:text-red-400 flex items-center justify-center mb-3.5">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-[#002047] dark:text-white">Patient-First Care</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                Prioritizing patient comfort, clear communication, gentle scan handling, and dignity at every step.
              </p>
            </div>

            <div className="w-[78vw] max-w-[270px] md:w-auto shrink-0 snap-start p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-[#0A1324] border border-slate-200/80 dark:border-slate-800/80">
              <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-[#002047] dark:text-blue-400 flex items-center justify-center mb-3.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-[#002047] dark:text-white">Quality & Safety</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                Strict acoustic transducer hygiene, ALARA low-radiation X-ray protocols, and daily calibration controls.
              </p>
            </div>

            <div className="w-[78vw] max-w-[270px] md:w-auto shrink-0 snap-start p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-[#0A1324] border border-slate-200/80 dark:border-slate-800/80">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-[#002047] dark:text-white">Modern Technology</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                High-frequency linear and 3D/4D matrix transducers, digital flat-panel X-rays, and automated analyzers.
              </p>
            </div>

            <div className="w-[78vw] max-w-[270px] md:w-auto shrink-0 snap-start p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-[#0A1324] border border-slate-200/80 dark:border-slate-800/80">
              <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3.5">
                <Award className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-[#002047] dark:text-white">Clinical Integrity</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                Honest recommendations, transparent second opinions, and reliable written radiological reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 06. MEET OUR DOCTORS */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 bg-slate-100/60 dark:bg-[#070F1E] border-y border-slate-200/60 dark:border-slate-800/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <SectionHeading
              badge="06 • Clinical Leadership"
              title="Meet Our Doctors &"
              highlightText="Consultant Radiologists"
              subtitle="Fellowship-trained medical specialists dedicated to diagnostic accuracy and patient well-being."
            />
            <Link
              href="/doctors"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B61F32] dark:text-red-400 hover:underline shrink-0"
            >
              <span>View All Medical Specialists</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile swipe hint */}
          <div className="md:hidden flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 mb-3 px-0.5">
            <span className="font-semibold uppercase tracking-wider">Medical Team</span>
            <span className="text-[#B61F32] dark:text-red-400 font-medium">Swipe profiles &rarr;</span>
          </div>

          <div className="flex md:grid md:grid-cols-3 gap-5 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 pb-3 md:pb-0">
            {DOCTORS_DATA.map((doc) => (
              <div
                key={doc.id}
                className="w-[84vw] max-w-[320px] md:w-auto shrink-0 snap-start bg-white dark:bg-[#0A1324] rounded-2xl overflow-hidden shadow-xs hover:border-[#B61F32]/50 transition-all border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 w-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
                    <Image
                      src={doc.avatarUrl}
                      alt={doc.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    {doc.badge && (
                      <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-[#B61F32] text-white text-[10px] font-bold shadow-xs">
                        {doc.badge}
                      </span>
                    )}
                    <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                      <span className="text-[10px] font-bold text-red-300 uppercase tracking-wider block">
                        {doc.specialty}
                      </span>
                      <h3 className="text-base font-bold">{doc.name}</h3>
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <p className="text-xs font-semibold text-[#002047] dark:text-red-400">{doc.title}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">{doc.bio}</p>
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
                      <p className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-slate-400 shrink-0" />
                        <span>{doc.schedule}</span>
                      </p>
                      <p className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-red-500 shrink-0" />
                        <span>{doc.location}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <Link
                    href={`/book?doctor=${doc.id}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-[#B61F32] dark:hover:bg-[#B61F32] text-[#002047] dark:text-white hover:text-white text-xs font-semibold py-2 rounded-lg transition-colors"
                  >
                    <Calendar className="w-3 h-3" />
                    <span>Book Consultation</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 07. MEDICAL FACILITIES & DIAGNOSTIC TECHNOLOGY */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#050B14] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="07 • Modern Infrastructure"
            title="Medical Facilities &"
            highlightText="Diagnostic Technology"
            subtitle="Advanced clinical imaging environments designed for patient safety, sterile comfort, and diagnostic clarity."
            centered
          />

          {/* Mobile swipe hint */}
          <div className="md:hidden flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 mb-3 px-0.5">
            <span className="font-semibold uppercase tracking-wider">Facility Tour</span>
            <span className="text-[#B61F32] dark:text-red-400 font-medium">Swipe sideways &rarr;</span>
          </div>

          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 pb-3 md:pb-0">
            {/* Facility 1 */}
            <div className="w-[80vw] max-w-[290px] md:w-auto shrink-0 snap-start bg-slate-50 dark:bg-[#0A1324] rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between">
              <div className="relative h-48 w-full bg-slate-200 dark:bg-slate-900">
                <Image
                  src="/images/photo-ultrasound.jpg"
                  alt="3D/4D Ultrasound Suite"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-1">
                <span className="text-[10px] font-bold uppercase text-[#B61F32] dark:text-red-400">Precision Imaging</span>
                <h4 className="text-sm font-bold text-[#002047] dark:text-white">3G Ultrasound Suite</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  High-frequency matrix probes with real-time 3D/4D fetal surface rendering and color Doppler hemodynamics.
                </p>
              </div>
            </div>

            {/* Facility 2 */}
            <div className="w-[80vw] max-w-[290px] md:w-auto shrink-0 snap-start bg-slate-50 dark:bg-[#0A1324] rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between">
              <div className="relative h-48 w-full bg-slate-200 dark:bg-slate-900">
                <Image
                  src="/images/photo-ct-mri.jpg"
                  alt="Digital Radiography Suite"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-1">
                <span className="text-[10px] font-bold uppercase text-blue-600 dark:text-blue-400">Radiology Suite</span>
                <h4 className="text-sm font-bold text-[#002047] dark:text-white">Digital X-Ray Suite</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Flat-panel digital detectors providing instantaneous high-contrast bone views with minimal radiation exposure.
                </p>
              </div>
            </div>

            {/* Facility 3 */}
            <div className="w-[80vw] max-w-[290px] md:w-auto shrink-0 snap-start bg-slate-50 dark:bg-[#0A1324] rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between">
              <div className="relative h-48 w-full bg-slate-200 dark:bg-slate-900">
                <Image
                  src="/images/photo-lab.jpg"
                  alt="Automated Pathology Laboratory"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-1">
                <span className="text-[10px] font-bold uppercase text-emerald-600 dark:text-emerald-400">Rapid Pathology</span>
                <h4 className="text-sm font-bold text-[#002047] dark:text-white">Clinical Pathology Lab</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Automated biochemistry and hematology analyzers with same-day digital result delivery in 30 minutes.
                </p>
              </div>
            </div>

            {/* Facility 4 */}
            <div className="w-[80vw] max-w-[290px] md:w-auto shrink-0 snap-start bg-slate-50 dark:bg-[#0A1324] rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between">
              <div className="relative h-48 w-full bg-slate-200 dark:bg-slate-900">
                <Image
                  src="/images/photo-reception.jpg"
                  alt="Patient Triage & Front Desk"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-1">
                <span className="text-[10px] font-bold uppercase text-amber-600 dark:text-amber-400">Patient Care</span>
                <h4 className="text-sm font-bold text-[#002047] dark:text-white">Reception & Consultation</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Spacious, welcoming waiting area, private doctor consultation suites, and 24/7 emergency triage desks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 08. PATIENT TESTIMONIALS (VERIFIED) */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 bg-slate-100/60 dark:bg-[#070F1E] border-y border-slate-200/60 dark:border-slate-800/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="08 • Patient Reviews"
            title="Patient Testimonials"
            highlightText="(Verified Experiences)"
            subtitle="Read what patients across Adi Dero, Bahir Dar, and the region say about our diagnostic accuracy and care."
            centered
          />

          {/* Mobile swipe hint */}
          <div className="md:hidden flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 mb-3 px-0.5">
            <span className="font-semibold uppercase tracking-wider">Verified Reviews</span>
            <span className="text-[#B61F32] dark:text-red-400 font-medium">Swipe sideways &rarr;</span>
          </div>

          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 pb-3 md:pb-0">
            {TESTIMONIALS_DATA.map((rev) => (
              <div
                key={rev.id}
                className="w-[80vw] max-w-[290px] md:w-auto shrink-0 snap-start p-5 rounded-2xl bg-white dark:bg-[#0A1324] border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    {rev.verified && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                        Verified
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed italic">
                    &quot;{rev.comment}&quot;
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                  <h4 className="font-bold text-[#002047] dark:text-white">{rev.name}</h4>
                  <p className="text-[11px] text-[#B61F32] dark:text-red-400 font-medium">{rev.service}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{rev.location} • {rev.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 09. BRANCHES & GOOGLE MAPS */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeading
          badge="09 • Branches & Google Maps"
          title="Visit Our Diagnostic Hubs in"
          highlightText="Adi Dero & Bahir Dar"
          subtitle="Direct phone lines, verified Google Maps directions, and coordinated patient care across both facilities."
          centered
        />

        {/* Mobile swipe hint */}
        <div className="md:hidden flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 mb-3 px-0.5">
          <span className="font-semibold uppercase tracking-wider">Our Clinic Hubs</span>
          <span className="text-[#B61F32] dark:text-red-400 font-medium">Swipe sideways &rarr;</span>
        </div>

        <div className="flex md:grid md:grid-cols-2 gap-5 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 pb-3 md:pb-0">
          {/* Adi Dero */}
          <div className="w-[86vw] max-w-[360px] md:w-auto shrink-0 snap-start p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0A1324] border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[11px] font-bold text-[#B61F32] dark:text-red-400 uppercase tracking-wider block">
                Branch 1 • Flagship Diagnostic Center
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#002047] dark:text-white">
                {t.branches.adiDeroTitle}
              </h3>

              {/* Embedded Google Map Preview */}
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 h-44 w-full bg-slate-100 dark:bg-slate-900 relative">
                <iframe
                  title="3G Diagnostic Imaging Adi Dero Map"
                  src="https://maps.google.com/maps?q=Adi+Dero+Raphael+Hospital&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  Location & Directions:
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                  {t.branches.adiDeroAddress}
                </p>
                <p className="text-[11px] font-semibold text-[#B61F32] dark:text-red-400 mt-1.5">
                  {t.branches.adiDeroTagline}
                </p>
              </div>

              <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
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

            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap items-center gap-2.5">
              <a
                href={`tel:${CLINIC_INFO.phone1.replace(/\s+/g, "")}`}
                className="flex-1 text-center bg-[#B61F32] hover:bg-[#8F1726] text-white text-xs font-semibold py-2.5 rounded-lg transition-colors"
              >
                Call {CLINIC_INFO.phone1}
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Adi+Dero+Raphael+Hospital"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60 rounded-lg transition-colors inline-flex items-center gap-1.5"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <Link
                href="/book?branch=adi-dero"
                className="px-3.5 py-2.5 bg-[#002047] dark:bg-slate-800 text-white text-xs font-semibold rounded-lg hover:bg-[#092f61] transition-colors"
              >
                Book
              </Link>
            </div>
          </div>

          {/* Bahir Dar */}
          <div className="w-[86vw] max-w-[360px] md:w-auto shrink-0 snap-start p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0A1324] border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[11px] font-bold text-[#002047] dark:text-slate-400 uppercase tracking-wider block">
                Branch 2 • Multispeciality Medical Hub
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#002047] dark:text-white">
                {t.branches.bahirDarTitle}
              </h3>

              {/* Embedded Google Map Preview */}
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 h-44 w-full bg-slate-100 dark:bg-slate-900 relative">
                <iframe
                  title="Radiance Multispeciality Bahir Dar Map"
                  src="https://maps.google.com/maps?q=Bahir+Dar+Kebele+14+Ethiopia&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  Location & Address:
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                  {t.branches.bahirDarAddress}
                </p>
                <p className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 mt-1.5">
                  {t.branches.bahirDarTagline}
                </p>
              </div>

              <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
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

            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap items-center gap-2.5">
              <a
                href={`tel:${CLINIC_INFO.phone2.replace(/\s+/g, "")}`}
                className="flex-1 text-center bg-[#002047] dark:bg-slate-800 hover:bg-[#092f61] text-white text-xs font-semibold py-2.5 rounded-lg transition-colors"
              >
                Call {CLINIC_INFO.phone2}
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Bahir+Dar+Kebele+14+Ethiopia"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60 rounded-lg transition-colors inline-flex items-center gap-1.5"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <Link
                href="/book?branch=bahir-dar"
                className="px-3.5 py-2.5 bg-[#B61F32] hover:bg-[#8F1726] text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Book
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 10. APPOINTMENT & CONTACT (FAST SCHEDULING & EMERGENCY) */}
      {/* ======================================================== */}
      <section className="py-14 bg-gradient-to-br from-[#00142E] via-[#002047] to-[#0A2540] text-white border-t border-white/10 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <EcgDivider />
          <span className="inline-block px-3 py-1 rounded-full bg-[#B61F32] text-white text-xs font-bold uppercase tracking-wider">
            10 • Appointment & Direct Contact
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Schedule an Ultrasound, Digital X-Ray or Doctor Consultation
          </h2>
          <p className="text-slate-200 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Fast online appointment booking, clear preparation checklists, seasoned consultant radiologists, and same-day digital report delivery to your mobile phone.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-[#B61F32] hover:bg-[#8F1726] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl shadow-md transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Online</span>
            </Link>

            <a
              href={`tel:${CLINIC_INFO.phone1.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl border border-white/20 transition-all"
            >
              <Phone className="w-4 h-4 text-red-400" />
              <span className="font-mono">{CLINIC_INFO.phone1}</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl border border-white/20 transition-all"
            >
              <MapPin className="w-4 h-4 text-red-400" />
              <span>Contact Locations</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
