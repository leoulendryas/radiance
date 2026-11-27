"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  Phone,
  Calendar,
  Clock,
  Waves,
  Info,
  CheckCircle2
} from "lucide-react";
import { ULTRASOUND_SERVICES } from "@/data/servicesData";
import { CLINIC_INFO } from "@/data/clinicInfo";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/SectionHeading";

export default function UltrasoundPage() {
  const { t } = useLanguage();

  const groups = [
    {
      title: "Maternal, Fetal & 3D/4D Volumetric Sonography",
      badge: "Maternal & Fetal",
      desc: "Comprehensive prenatal care from first-trimester viability to advanced 3D/4D surface rendering and high-risk Doppler surveillance.",
      ids: ["obstetric-us", "3d-4d-us", "pregnancy-doppler", "bpp-us"]
    },
    {
      title: "Abdominal, Pelvic & Specialized Cavity Sonography",
      badge: "Abdominal & Pelvic",
      desc: "High-resolution organ exploration with high-contrast tissue harmonic imaging.",
      ids: ["abdominal-us", "abdominopelvic-us", "pelvic-us", "tvs-us", "trus-us"]
    },
    {
      title: "Advanced Duplex Color & Spectral Doppler",
      badge: "Vascular Doppler",
      desc: "Hemodynamic velocity analysis for renal, carotid, and peripheral extremity blood flow.",
      ids: ["renal-arteries-doppler", "carotid-doppler", "venous-doppler", "arterial-doppler"]
    },
    {
      title: "Musculoskeletal (MSK), Nerve & Bone Ultrasound",
      badge: "MSK & Ortho",
      desc: "Dynamic real-time evaluation of joints, peripheral nerves, tendons, and fractures.",
      ids: ["msk-us", "nerve-us", "tendon-ligament-us", "bone-fracture-us"]
    },
    {
      title: "Pediatric & Neonatal Neuro-Sonography",
      badge: "Neonatal & Pediatrics",
      desc: "Gentle non-invasive screening through the anterior fontanelle and infant hip joint sockets.",
      ids: ["cranial-us", "spinal-us", "ddh-hip-us"]
    },
    {
      title: "Small Parts, Ocular & Interventional Sonography",
      badge: "Targeted & FNAC",
      desc: "TI-RADS and BI-RADS risk classification with real-time ultrasound-guided needle aspiration.",
      ids: ["thyroid-us", "breast-us", "scrotal-us", "ocular-us", "fnac-us"]
    },
    {
      title: "Cardiovascular Diagnostics & Electrophysiology",
      badge: "Cardiovascular",
      desc: "Transthoracic echocardiography and 12-lead electrical rhythm recordings.",
      ids: ["ecg-service", "echocardiography"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBFCFE] dark:bg-[#050B14] pb-24 transition-colors">
      {/* Hero */}
      <section className="bg-[#00142E] dark:bg-[#030812] text-white py-12 lg:py-18 border-b border-white/5 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#B61F32] text-white text-[11px] font-semibold uppercase tracking-wider">
                <Activity className="w-3.5 h-3.5" />
                <span>3G Diagnostic Imaging • Ultrasound Hub</span>
              </span>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                3G Ultrasound Services: <br />
                <span className="text-red-400">27 Precision Modalities</span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                Operated by specialized consultant radiologists and sonologists in Adi Dero and Bahir Dar. We offer full-spectrum sonography featuring live 3D/4D fetal motion, hemodynamic vascular Doppler, dynamic MSK, pediatric hip screening, and ultrasound-guided FNAC biopsy.
              </p>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 max-w-lg">
                <p className="text-[11px] font-semibold text-slate-300">
                  {t.tagline}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/book?service=ultrasound"
                  className="inline-flex items-center gap-2 bg-[#B61F32] hover:bg-[#8F1726] text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Ultrasound Scan</span>
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

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-[#001026]">
                <div className="relative h-64 sm:h-72 w-full">
                  <Image
                    src="/images/photo-ultrasound.jpg"
                    alt="3G Ultrasound Suite"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-4 text-xs text-slate-300 border-t border-white/10">
                  <p className="font-semibold text-white">Live 3D/4D Volumetric Imaging</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Radiation-free acoustic sonography for maternal and family wellness.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Quick Reference Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-5 relative z-10">
        <div className="bg-white dark:bg-[#0A1324] rounded-2xl shadow-xs border border-slate-200/80 dark:border-slate-800 p-4 flex md:grid md:grid-cols-3 gap-3 md:gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar transition-colors">
          <div className="w-[76vw] max-w-[280px] md:w-auto shrink-0 snap-start flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50">
            <Info className="w-4 h-4 text-[#B61F32] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-[#002047] dark:text-white uppercase">Abdominal Scans</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Fast 6 to 8 hours prior. Reduces stomach gas for clear organ views.
              </p>
            </div>
          </div>

          <div className="w-[76vw] max-w-[280px] md:w-auto shrink-0 snap-start flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50">
            <Waves className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-[#002047] dark:text-white uppercase">Pelvic & Early Pregnancy</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Drink 3-4 glasses of water 1 hour before scan; maintain a full bladder.
              </p>
            </div>
          </div>

          <div className="w-[76vw] max-w-[280px] md:w-auto shrink-0 snap-start flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50">
            <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-[#002047] dark:text-white uppercase">Same-Day Reporting</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                High-resolution printed sonograms with formal written reports within 1-2 hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* All 27 Modalities by Category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        {groups.map((group, idx) => {
          const groupServices = ULTRASOUND_SERVICES.filter((s) =>
            group.ids.includes(s.id)
          );

          return (
            <div key={idx} className="bg-white dark:bg-[#0A1324] rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 transition-colors">
              <div className="mb-5 pb-3 border-b border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-50 dark:bg-red-950/40 text-[#B61F32] dark:text-red-400 uppercase tracking-wider">
                    {group.badge}
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-[#002047] dark:text-white mt-1">
                    {group.title}
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 max-w-2xl">
                    {group.desc}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="sm:hidden text-[10px] text-[#B61F32] dark:text-red-400 font-medium">Swipe scans &rarr;</span>
                  <span className="text-xs font-semibold text-slate-400 font-mono">
                    {groupServices.length} Scans
                  </span>
                </div>
              </div>

              <div className="flex md:grid md:grid-cols-2 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 pb-2 md:pb-0">
                {groupServices.map((srv) => (
                  <div
                    key={srv.id}
                    id={srv.id}
                    className="w-[84vw] max-w-[320px] md:w-auto shrink-0 snap-start p-4 rounded-xl bg-slate-50/60 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-sm text-[#002047] dark:text-white">
                          {srv.name}
                        </h3>
                        {srv.tag && (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                            {srv.tag}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                        {srv.fullDescription}
                      </p>

                      <div className="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-800/60 text-xs">
                        <p className="text-slate-500 dark:text-slate-400">
                          <strong className="text-slate-700 dark:text-slate-300">Prep: </strong>
                          {srv.preparation}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-2.5 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400 font-mono">
                        ~{srv.durationMinutes} min
                      </span>

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
            </div>
          );
        })}

        {/* Custom Non-Specified Requests */}
        <div className="bg-[#00142E] dark:bg-[#030812] rounded-2xl p-6 sm:p-8 text-white border border-white/10 transition-colors">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="space-y-1.5 max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-300">
                Custom Requisitions
              </span>
              <h3 className="text-lg sm:text-xl font-bold">
                Plus All Other Non-Specified Ultrasound Examinations
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Have a specialized requisition from your doctor? Our sonography suite accommodates custom acoustic protocols and targeted multi-transducer scans.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <a
                href={`tel:${CLINIC_INFO.phone1.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-1.5 bg-[#B61F32] hover:bg-[#8F1726] text-white font-semibold text-xs px-4 py-2.5 rounded-xl transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {CLINIC_INFO.phone1}</span>
              </a>
              <Link
                href="/book"
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs px-4 py-2.5 rounded-xl border border-white/15 transition-colors"
              >
                <span>Book Appointment</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
