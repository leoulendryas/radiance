"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Stethoscope,
  Heart,
  Brain,
  Wind,
  CircleDot,
  Baby,
  Bone,
  FlaskConical,
  Phone,
  Calendar,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { MULTISPECIALITY_SERVICES, LABORATORY_SERVICES } from "@/data/servicesData";
import { CLINIC_INFO } from "@/data/clinicInfo";
import SectionHeading from "@/components/SectionHeading";
import EcgDivider from "@/components/EcgDivider";
import { useLanguage } from "@/context/LanguageContext";

export default function MultispecialityPage() {
  const { t } = useLanguage();

  const checkupPackages = [
    {
      name: "Basic Health Screen",
      price: "Routine",
      desc: "Essential annual vital signs, blood count, fasting blood sugar, and urinalysis.",
      includes: ["CBC with Differential", "Fasting Blood Sugar", "Urinalysis", "Blood Pressure & BMI Check", "Doctor Consultation"]
    },
    {
      name: "Comprehensive Executive Screen",
      price: "Recommended",
      badge: "Most Popular",
      desc: "Complete cardiovascular, metabolic, liver, kidney, and resting 12-lead ECG evaluation.",
      includes: ["Complete Blood Count (CBC)", "Liver Function Tests (LFTs)", "Renal Function Tests (Creatinine/Urea)", "Lipid Profile (Cholesterol/Triglycerides)", "12-Lead ECG Tracing", "Abdominal Ultrasound Review", "Senior Physician Consultation"]
    },
    {
      name: "Maternal & Fetal Wellness Package",
      price: "Prenatal",
      desc: "Dedicated trimester monitoring combining ultrasound scanning with obstetric consultation.",
      includes: ["Prenatal Ultrasound (3D/4D option)", "Blood Group & Rh Typing", "Hemoglobin / Anemia Screen", "Infectious Serology (Hepatitis, HIV)", "OB/GYN Specialist Checkup"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070D18] pb-24 text-slate-800 dark:text-slate-100 transition-colors">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#001229] via-[#002047] to-[#0A2540] text-white py-16 lg:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B61F32] text-white text-xs font-bold tracking-wide">
                <Stethoscope className="w-3.5 h-3.5" />
                <span>Radiance Multispeciality Medical Care</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Specialized Clinics & <br />
                <span className="text-red-400">Automated Diagnostic Laboratory</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
                Beyond diagnostic imaging, Radiance provides coordinated outpatient clinical consultations across cardiology, neurology, maternal care, and pediatrics—supported by our on-site automated clinical pathology lab.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/book?service=multispeciality"
                  className="inline-flex items-center gap-2 bg-[#B61F32] hover:bg-[#911624] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Doctor Consultation</span>
                </Link>

                <a
                  href={`tel:${CLINIC_INFO.primaryPhone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg border border-white/20 transition-all"
                >
                  <Phone className="w-4 h-4 text-red-400" />
                  <span>Call {CLINIC_INFO.primaryPhone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-[#001533]">
                <div className="relative h-64 sm:h-72 w-full">
                  <Image
                    src="/images/photo-consultation.jpg"
                    alt="Doctor Consultation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001533] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-red-300 font-semibold">Bahir Dar & Adi Dero Hubs</p>
                      <h4 className="text-sm font-bold">Personalized, Respectful Care</h4>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                      Coordinated Care
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-2">
                    Direct integration between consulting physicians and on-site ultrasound and laboratory results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        {/* ======================================================== */}
        {/* 1. CLINICAL MULTISPECIALTY DEPARTMENTS */}
        {/* ======================================================== */}
        <section>
          <SectionHeading
            badge="Consultation Specialties"
            title="Outpatient Clinical"
            highlightText="Specialty Departments"
            subtitle="Experienced medical specialists collaborating to treat complex acute and chronic conditions."
          />

          {/* Mobile swipe hint */}
          <div className="md:hidden flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 mb-3 px-0.5">
            <span className="font-semibold uppercase tracking-wider">Clinical Specialties</span>
            <span className="text-[#B61F32] dark:text-red-400 font-medium">Swipe sideways &rarr;</span>
          </div>

          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 pb-3 md:pb-0">
            {MULTISPECIALITY_SERVICES.map((clinic) => (
              <div
                key={clinic.id}
                className="w-[78vw] max-w-[280px] md:w-auto shrink-0 snap-start bg-white dark:bg-[#0A1324] rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-xs hover:border-[#B61F32]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-red-50 dark:bg-red-950/40 text-[#B61F32] flex items-center justify-center mb-3 group-hover:bg-[#B61F32] group-hover:text-white transition-colors">
                    <Stethoscope className="w-4 h-4" />
                  </div>

                  <h3 className="font-bold text-[#002047] dark:text-white text-base group-hover:text-[#B61F32] transition-colors">
                    {clinic.name}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {clinic.fullDescription}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">Focus Areas:</p>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {clinic.indications.map((ind, i) => (
                        <span key={i} className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded">
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    href={`/book?service=${clinic.id}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-[#B61F32] dark:hover:bg-[#B61F32] text-slate-700 dark:text-slate-200 hover:text-white dark:hover:text-white text-xs font-semibold py-2 rounded-lg transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Appointment</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* 2. AUTOMATED MEDICAL LABORATORY */}
        {/* ======================================================== */}
        <section className="bg-white dark:bg-[#0A1324] rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/60 text-[#B61F32] uppercase tracking-wider">
                On-Site Clinical Pathology
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002047] dark:text-white">
                Automated Clinical Laboratory Services
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Our diagnostic laboratory utilizes automated hematology and biochemistry analyzers with daily internal quality controls, delivering accurate results in as little as 30 minutes.
              </p>

              <div className="space-y-3 pt-2">
                {LABORATORY_SERVICES.map((lab) => (
                  <div key={lab.id} className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0E1A30] border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs sm:text-sm font-bold text-[#002047] dark:text-white">{lab.name}</h4>
                      <span className="text-[10px] font-semibold text-[#B61F32] bg-red-50 dark:bg-red-950/40 px-2 py-0.5 rounded">
                        {lab.resultsTurnaround}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{lab.fullDescription}</p>
                    <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
                      <strong>Prep:</strong> {lab.preparation}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800">
                <div className="relative h-72 sm:h-80 w-full">
                  <Image
                    src="/images/photo-lab.jpg"
                    alt="Medical Laboratory Technician"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-[#001533] text-white">
                  <h4 className="text-xs sm:text-sm font-bold">Standardized Diagnostic Controls</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Pre-operative baseline testing, routine diabetes checkups, and infectious serology with same-day digital report access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 3. PREVENTIVE HEALTH CHECKUP PACKAGES */}
        {/* ======================================================== */}
        <section>
          <SectionHeading
            badge="Early Detection"
            title="Comprehensive Preventive"
            highlightText="Health Packages"
            subtitle="Catch potential health risks early with bundled diagnostic panels designed for individuals and families."
            centered
          />

          {/* Mobile swipe hint */}
          <div className="md:hidden flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 mb-3 px-0.5">
            <span className="font-semibold uppercase tracking-wider">Preventive Packages</span>
            <span className="text-[#B61F32] dark:text-red-400 font-medium">Swipe sideways &rarr;</span>
          </div>

          <div className="flex md:grid md:grid-cols-3 gap-5 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 pb-3 md:pb-0">
            {checkupPackages.map((pkg, i) => (
              <div
                key={i}
                className={`w-[84vw] max-w-[320px] md:w-auto shrink-0 snap-start bg-white dark:bg-[#0A1324] rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                  pkg.badge
                    ? "border-[#B61F32] shadow-sm relative"
                    : "border-slate-200/80 dark:border-slate-800/80 shadow-xs"
                }`}
              >
                <div>
                  {pkg.badge && (
                    <span className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#B61F32] text-white text-[10px] font-bold shadow-xs">
                      {pkg.badge}
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-[#002047] dark:text-white">{pkg.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">{pkg.desc}</p>

                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-xs font-bold text-[#002047] dark:text-white uppercase tracking-wider mb-2">
                      Package Includes:
                    </p>
                    <ul className="space-y-1.5">
                      {pkg.includes.map((inc, j) => (
                        <li key={j} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    href={`/book?package=${encodeURIComponent(pkg.name)}`}
                    className={`w-full inline-flex items-center justify-center gap-2 font-semibold text-xs py-2.5 rounded-lg transition-colors ${
                      pkg.badge
                        ? "bg-[#B61F32] hover:bg-[#911624] text-white shadow-xs"
                        : "bg-[#002047] dark:bg-slate-800 hover:bg-[#092f61] text-white"
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Package</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
