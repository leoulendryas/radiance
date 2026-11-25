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

export const metadata = {
  title: "Multispeciality Clinics & Laboratory Services",
  description: "Specialized clinical consultations across Cardiology, Neurology, OB/GYN, Pediatrics, and automated diagnostic laboratory panels at Radiance Multispeciality Clinic."
};

export default function MultispecialityPage() {
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
    <div className="min-h-screen bg-slate-50/60 pb-24">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#001533] via-[#002047] to-[#1a3862] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B61F32] text-white text-xs font-bold tracking-wide">
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
                  className="inline-flex items-center gap-2 bg-[#B61F32] hover:bg-[#911624] text-white text-sm font-bold px-6 py-3 rounded-xl shadow-lg transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Doctor Consultation</span>
                </Link>

                <a
                  href={`tel:${CLINIC_INFO.alternatePhone1.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-bold px-5 py-3 rounded-xl border border-white/20 transition-all"
                >
                  <Phone className="w-4 h-4 text-red-400" />
                  <span>Call {CLINIC_INFO.alternatePhone1}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-[#001533]">
                <div className="relative h-64 sm:h-80 w-full">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MULTISPECIALITY_SERVICES.map((clinic) => (
              <div
                key={clinic.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#B61F32] flex items-center justify-center mb-3 group-hover:bg-[#B61F32] group-hover:text-white transition-colors">
                    <Stethoscope className="w-5 h-5" />
                  </div>

                  <h3 className="font-extrabold text-[#002047] text-base group-hover:text-[#B61F32] transition-colors">
                    {clinic.name}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {clinic.fullDescription}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <p className="text-[10px] font-bold text-slate-500 uppercase">Focus Areas:</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {clinic.indications.map((ind, i) => (
                        <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100">
                  <Link
                    href={`/book?service=${clinic.id}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-[#B61F32] text-slate-700 hover:text-white text-xs font-bold py-2 rounded-xl transition-colors"
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
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-100 text-[#B61F32] uppercase tracking-wider">
                On-Site Clinical Pathology
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002047]">
                Automated Clinical Laboratory Services
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our diagnostic laboratory utilizes automated hematology and biochemistry analyzers with daily internal quality controls, delivering accurate results in as little as 30 minutes.
              </p>

              <div className="space-y-4 pt-2">
                {LABORATORY_SERVICES.map((lab) => (
                  <div key={lab.id} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-[#002047]">{lab.name}</h4>
                      <span className="text-[11px] font-semibold text-[#B61F32] bg-red-50 px-2 py-0.5 rounded">
                        {lab.resultsTurnaround}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{lab.fullDescription}</p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      <strong>Prep:</strong> {lab.preparation}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/images/photo-lab.jpg"
                    alt="Medical Laboratory Technician"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 bg-[#001533] text-white">
                  <h4 className="text-sm font-bold">Standardized Diagnostic Controls</h4>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {checkupPackages.map((pkg, i) => (
              <div
                key={i}
                className={`bg-white rounded-3xl p-6 sm:p-8 border-2 transition-all flex flex-col justify-between ${
                  pkg.badge
                    ? "border-[#B61F32] shadow-xl relative"
                    : "border-slate-200 shadow-sm hover:shadow-md"
                }`}
              >
                <div>
                  {pkg.badge && (
                    <span className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-[#B61F32] text-white text-[11px] font-bold shadow-md">
                      {pkg.badge}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-[#002047]">{pkg.name}</h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">{pkg.desc}</p>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <p className="text-xs font-bold text-[#002047] uppercase tracking-wider mb-2">
                      Package Includes:
                    </p>
                    <ul className="space-y-2">
                      {pkg.includes.map((inc, j) => (
                        <li key={j} className="text-xs text-slate-600 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <Link
                    href={`/book?package=${encodeURIComponent(pkg.name)}`}
                    className={`w-full inline-flex items-center justify-center gap-2 font-bold text-xs py-3 rounded-xl transition-colors ${
                      pkg.badge
                        ? "bg-[#B61F32] hover:bg-[#911624] text-white shadow-md"
                        : "bg-[#002047] hover:bg-[#092f61] text-white"
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
