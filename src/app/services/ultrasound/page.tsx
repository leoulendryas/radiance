import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  Phone,
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
  HeartPulse,
  Baby,
  Waves,
  Microscope,
  Stethoscope,
  Info
} from "lucide-react";
import { ULTRASOUND_SERVICES } from "@/data/servicesData";
import { CLINIC_INFO } from "@/data/clinicInfo";
import SectionHeading from "@/components/SectionHeading";
import EcgDivider from "@/components/EcgDivider";

export const metadata = {
  title: "3G Ultrasound Services (27 Modalities)",
  description: "Advanced 3G Diagnostic Imaging Ultrasound suite: 3D/4D Fetal, Duplex Doppler (Renal, Carotid, Venous), MSK, Neonatal Cranial, Echocardiography and Ultrasound Guided FNAC in Adi Dero and Bahir Dar."
};

export default function UltrasoundPage() {
  const groups = [
    {
      title: "Maternal, Fetal & 3D/4D Volumetric Sonography",
      badge: "Maternal & Child Health",
      desc: "Comprehensive prenatal care from first-trimester viability to advanced 3D/4D surface rendering and high-risk Doppler surveillance.",
      ids: ["obstetric-us", "3d-4d-us", "pregnancy-doppler", "bpp-us"]
    },
    {
      title: "Abdominal, Pelvic & Specialized Cavity Sonography",
      badge: "Internal Medicine & GI",
      desc: "High-resolution organ exploration with high-contrast tissue harmonic imaging.",
      ids: ["abdominal-us", "abdominopelvic-us", "pelvic-us", "tvs-us", "trus-us"]
    },
    {
      title: "Advanced Duplex Color & Spectral Doppler",
      badge: "Hemodynamics & Vascular",
      desc: "Quantifies vascular velocities, plaque burdens, and renovascular hypertension.",
      ids: ["renal-arteries-doppler", "carotid-doppler", "venous-doppler", "arterial-doppler"]
    },
    {
      title: "Musculoskeletal (MSK), Nerve & Bone Ultrasound",
      badge: "Orthopedics & Sports Medicine",
      desc: "Real-time dynamic visualization of joint tendons, peripheral nerves, and fracture cortical disruptions.",
      ids: ["msk-us", "nerve-us", "tendon-ligament-us", "bone-fracture-us"]
    },
    {
      title: "Pediatric & Neonatal Neuro-Sonography",
      badge: "Neonatal & Pediatrics",
      desc: "Gentle non-invasive screening through fontanelle and cartilaginous hip sockets.",
      ids: ["cranial-us", "spinal-us", "ddh-hip-us"]
    },
    {
      title: "Small Parts, Ocular & Interventional Sonography",
      badge: "Head, Neck & Targeted",
      desc: "Sub-millimeter classification (TI-RADS, BI-RADS) and guided needle precision.",
      ids: ["thyroid-us", "breast-us", "scrotal-us", "ocular-us", "fnac-us"]
    },
    {
      title: "Cardiac Diagnostics & Electrophysiology",
      badge: "Cardiovascular Suite",
      desc: "Structural and electrical evaluation of cardiac chambers and coronary rhythms.",
      ids: ["ecg-service", "echocardiography"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/60 pb-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#001533] via-[#002047] to-[#092f61] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B61F32] text-white text-xs font-bold tracking-wide shadow-md">
                <Activity className="w-3.5 h-3.5" />
                <span>3G Diagnostic Imaging • Dedicated Sonography Hub</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                3G Ultrasound Services: <br />
                <span className="text-red-400">27 Advanced Modalities</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
                Operated by specialized consultant radiologists and sonologists in Adi Dero and Bahir Dar. We offer full-spectrum sonography featuring live 3D/4D fetal motion, hemodynamic vascular Doppler, dynamic MSK, pediatric hip screening, and ultrasound-guided FNAC biopsy.
              </p>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 max-w-xl">
                <p className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
                  Official Motto & Commitment:
                </p>
                <p className="text-sm font-bold text-white">
                  3ጂ ንድሕነት ሕክምና ቅድሚያ ይሀብ! (3G Gives Priority to Healthcare Safety!)
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/book?service=ultrasound"
                  className="inline-flex items-center gap-2 bg-[#B61F32] hover:bg-[#911624] text-white text-sm font-bold px-6 py-3 rounded-xl shadow-lg transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Ultrasound Scan</span>
                </Link>

                <a
                  href={`tel:${CLINIC_INFO.primaryPhone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-bold px-5 py-3 rounded-xl border border-white/20 transition-all"
                >
                  <Phone className="w-4 h-4 text-red-400" />
                  <span>Call 03 42 40 90 43</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-[#001533]">
                <div className="relative h-72 sm:h-84 w-full">
                  <Image
                    src="/images/photo-ultrasound.jpg"
                    alt="3G Ultrasound Suite"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001533] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-red-300 font-semibold">Live 3D/4D Volumetric Imaging</p>
                      <h4 className="text-sm font-bold">State-of-the-Art Acoustic Resolution</h4>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                      Zero Radiation
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-2">
                    Safe for all trimesters, pediatric patients, and routine surveillance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Quick Reference Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50">
            <Info className="w-5 h-5 text-[#B61F32] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-[#002047] uppercase">Abdominal & Doppler Scans</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Fast for 6 to 8 hours prior. Reduces stomach and intestinal gas for crystal-clear images.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50">
            <Waves className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-[#002047] uppercase">Pelvic & Early Pregnancy</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Drink 3-4 glasses of water 1 hour prior; do not void until the examination is complete.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50">
            <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-[#002047] uppercase">Same-Day Reporting</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Printed sonograms with comprehensive formal radiological interpretation within 1-2 hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* All 27 Ultrasound Modalities by Clinical Category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        {groups.map((group, idx) => {
          const groupServices = ULTRASOUND_SERVICES.filter((s) =>
            group.ids.includes(s.id)
          );

          return (
            <div key={idx} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="mb-6 pb-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-red-100 text-[#B61F32] uppercase tracking-wide">
                    {group.badge}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#002047] mt-1.5">
                    {group.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-3xl">
                    {group.desc}
                  </p>
                </div>
                <span className="text-xs font-bold text-slate-400">
                  {groupServices.length} Examinations
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {groupServices.map((srv) => (
                  <div
                    key={srv.id}
                    id={srv.id}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#B61F32]/40 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-[#002047] text-base">
                          {srv.name}
                        </h3>
                        {srv.tag && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#B61F32] text-white">
                            {srv.tag}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {srv.fullDescription}
                      </p>

                      <div className="mt-4 pt-3 border-t border-slate-200/60">
                        <p className="text-[11px] font-bold text-slate-700 uppercase">
                          Preparation Checklist:
                        </p>
                        <p className="text-xs text-slate-600 mt-0.5">{srv.preparation}</p>
                      </div>

                      <div className="mt-2 text-[11px] text-slate-500">
                        <strong className="text-slate-700">Turnaround:</strong> {srv.resultsTurnaround}
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>~{srv.durationMinutes} mins</span>
                      </span>

                      <Link
                        href={`/book?service=${srv.id}`}
                        className="text-xs font-bold bg-[#B61F32] hover:bg-[#911624] text-white px-3.5 py-1.5 rounded-lg transition-colors shadow-xs"
                      >
                        Book This Scan
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Plus All Other Non-Specified Ultrasound Examinations */}
        <div className="bg-gradient-to-r from-[#002047] to-[#092f61] rounded-3xl p-8 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <span className="px-2.5 py-1 rounded bg-[#B61F32] text-white text-[11px] font-bold uppercase">
                Custom Clinical Requisitions
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">
                Plus All Other Non-Specified Ultrasound Examinations
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Have a specialized request from your physician that is not explicitly listed? Our diagnostic imaging suite accommodates custom clinical protocols with tailored acoustic probe configurations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="tel:0342409043"
                className="inline-flex items-center justify-center gap-2 bg-[#B61F32] hover:bg-[#911624] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Consult Radiologist (03 42 40 90 43)</span>
              </a>
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl border border-white/20 transition-all"
              >
                <span>Upload Requisition</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
