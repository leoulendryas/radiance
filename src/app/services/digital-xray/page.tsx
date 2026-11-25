import Link from "next/link";
import {
  Zap,
  Phone,
  Calendar,
  ShieldAlert,
  Clock,
  Sparkles,
  FileText,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Info
} from "lucide-react";
import { DIGITAL_XRAY_SERVICES, SPECIAL_PROCEDURES } from "@/data/servicesData";
import { CLINIC_INFO } from "@/data/clinicInfo";
import SectionHeading from "@/components/SectionHeading";
import EcgDivider from "@/components/EcgDivider";

export const metadata = {
  title: "Digital X-Ray & Special Procedures (HSG, IVU, Barium)",
  description: "24 Full-body digital X-ray services and 5 advanced contrast fluoroscopy procedures including HSG for infertility, IVU/IVP, CUG, Barium Swallow and Barium Enema at 3G Diagnostic Imaging."
};

export default function DigitalXrayPage() {
  const xrayRegions = [
    {
      region: "Head, Neck & Spine",
      badge: "Cranial & Axial",
      ids: ["xray-skull", "xray-sinus", "xray-facial", "xray-neck", "xray-cervical"]
    },
    {
      region: "Chest, Abdomen & Pelvis",
      badge: "Thoracic & Core",
      ids: ["xray-cxr", "xray-axr", "xray-kub", "xray-pelvis"]
    },
    {
      region: "Upper Extremities & Joints",
      badge: "Shoulder, Arm & Hand",
      ids: ["xray-clavicle", "xray-shoulder", "xray-arm", "xray-elbow", "xray-forearm", "xray-wrist", "xray-hand", "xray-digits"]
    },
    {
      region: "Lower Extremities & Joints",
      badge: "Hip, Knee, Ankle & Foot",
      ids: ["xray-hip", "xray-thigh", "xray-knee", "xray-leg", "xray-ankle", "xray-calcaneus", "xray-foot"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/60 pb-24">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#001533] via-[#002047] to-[#12284c] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B61F32] text-white text-xs font-bold tracking-wide">
              <Zap className="w-3.5 h-3.5" />
              <span>3G Diagnostic Imaging • High-Definition Digital Radiography</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Digital X-Ray & <br />
              <span className="text-red-400">Special Fluoroscopy Procedures</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Equipped with digital flat-panel detector systems minimizing radiation dose while generating sub-millimeter bony and soft tissue contrast. We perform 24 skeletal x-ray examinations alongside advanced contrast studies like HSG, IVU, CUG, and Barium studies.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/book?service=xray"
                className="inline-flex items-center gap-2 bg-[#B61F32] hover:bg-[#911624] text-white text-sm font-bold px-6 py-3 rounded-xl shadow-lg transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book X-Ray or Procedure</span>
              </Link>
              <a
                href={`tel:${CLINIC_INFO.primaryPhone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-bold px-5 py-3 rounded-xl border border-white/20 transition-all"
              >
                <Phone className="w-4 h-4 text-red-400" />
                <span>Call {CLINIC_INFO.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Radiation Safety Standards Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50">
            <ShieldAlert className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-[#002047] uppercase">ALARA Safety Standards</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Strict &apos;As Low As Reasonably Achievable&apos; dose protocols with lead thyroid and gonadal shielding.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50">
            <Zap className="w-5 h-5 text-[#B61F32] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-[#002047] uppercase">Instant Digital Processing</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Exposures rendered in under 10 seconds. Film prints and high-res digital DICOM files provided.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50">
            <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-[#002047] uppercase">Stat Trauma Reporting</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Immediate preliminary review for fractures, dislocations, and acute chest presentations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        {/* ======================================================== */}
        {/* 1. SPECIAL PROCEDURES (HSG, IVU, CUG, BARIUM) */}
        {/* ======================================================== */}
        <section id="special-procedures" className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-red-100 shadow-xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#B61F32] text-white uppercase tracking-wider">
              Specialized Contrast Fluoroscopy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002047] mt-3">
              Special Procedures: HSG, IVU, CUG & Barium Series
            </h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Performed under the direct supervision of experienced consultant radiologists for fertility evaluations, renal excretion assessments, and gastrointestinal motility studies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {SPECIAL_PROCEDURES.map((proc) => (
              <div
                key={proc.id}
                id={proc.id}
                className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-xs hover:border-[#B61F32] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#B61F32] uppercase tracking-wider">
                      {proc.tag || "Fluoroscopic Procedure"}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      Duration: ~{proc.durationMinutes} mins
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-[#002047]">{proc.name}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {proc.fullDescription}
                  </p>

                  <div className="mt-4 p-3.5 rounded-xl bg-red-50/70 border border-red-100">
                    <p className="text-[11px] font-bold text-[#B61F32] uppercase">
                      Patient Preparation & Clinical Protocol:
                    </p>
                    <p className="text-xs text-slate-700 mt-1 leading-relaxed font-medium">
                      {proc.preparation}
                    </p>
                  </div>

                  <div className="mt-3">
                    <p className="text-[11px] font-bold text-slate-700 uppercase">Key Clinical Indications:</p>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {proc.indications.map((ind, i) => (
                        <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md font-medium">
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    {proc.resultsTurnaround}
                  </span>
                  <Link
                    href={`/book?service=${proc.id}`}
                    className="inline-flex items-center gap-1.5 bg-[#B61F32] hover:bg-[#911624] text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-xs"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Schedule Procedure</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* 2. ALL 24 DIGITAL X-RAY EXAMINATIONS BY BODY REGION */}
        {/* ======================================================== */}
        <section className="space-y-10">
          <SectionHeading
            badge="Digital Skeletal Radiography"
            title="All 24 Digital X-Ray Services:"
            highlightText="Anatomical Index"
            subtitle="Explore our comprehensive skeletal catalog from head to toe, designed for fracture detection, joint arthritis, and acute chest assessment."
          />

          <div className="space-y-10">
            {xrayRegions.map((regionGroup, idx) => {
              const regionServices = DIGITAL_XRAY_SERVICES.filter((x) =>
                regionGroup.ids.includes(x.id)
              );

              return (
                <div key={idx} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                  <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
                    <div>
                      <span className="text-xs font-bold text-[#B61F32] uppercase tracking-wider">
                        {regionGroup.badge}
                      </span>
                      <h3 className="text-xl font-bold text-[#002047] mt-1">
                        {regionGroup.region}
                      </h3>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {regionServices.length} Views
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {regionServices.map((srv) => (
                      <div
                        key={srv.id}
                        id={srv.id}
                        className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-300 transition-colors flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-start justify-between">
                            <h4 className="font-bold text-sm text-[#002047]">{srv.name}</h4>
                            {srv.featured && (
                              <span className="px-1.5 py-0.5 rounded bg-red-100 text-[#B61F32] text-[10px] font-bold">
                                Essential
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 mt-1.5 line-clamp-2">
                            {srv.shortDescription}
                          </p>
                          <div className="mt-2.5 text-[11px] text-slate-400">
                            <strong>Prep:</strong> {srv.preparation}
                          </div>
                        </div>

                        <div className="mt-4 pt-2 border-t border-slate-200/60 flex items-center justify-between">
                          <span className="text-[11px] text-slate-400">~10 mins</span>
                          <Link
                            href={`/book?service=${srv.id}`}
                            className="text-xs font-bold text-[#002047] hover:text-[#B61F32] flex items-center gap-1"
                          >
                            <span>Book</span>
                            <ChevronRight className="w-3.5 h-3.5" />
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

        {/* Emergency X-Ray & Trauma Banner */}
        <div className="bg-[#002047] rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white text-xs font-bold">
              Emergency Trauma Radiography
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Acute Fractures, Dislocation or Foreign Body?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Our digital x-ray units in Adi Dero and Bahir Dar provide immediate triage and stat reporting for traumatic emergencies.
            </p>
          </div>

          <a
            href="tel:0342409043"
            className="shrink-0 inline-flex items-center gap-2 bg-[#B61F32] hover:bg-[#911624] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Emergency Line: 03 42 40 90 43</span>
          </a>
        </div>
      </div>
    </div>
  );
}
