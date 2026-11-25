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
  HeartPulse,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MapPin,
  ChevronRight,
  Eye,
  Microscope,
  Baby,
  HeartHandshake
} from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicInfo";
import { ULTRASOUND_SERVICES, SPECIAL_PROCEDURES } from "@/data/servicesData";
import { DOCTORS_DATA } from "@/data/doctorsData";
import EcgDivider from "@/components/EcgDivider";
import SectionHeading from "@/components/SectionHeading";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ======================================================== */}
      {/* 1. HERO SECTION WITH AUTHENTIC BRAND GUIDE VISUALS */}
      {/* ======================================================== */}
      <section className="relative bg-gradient-to-br from-[#001533] via-[#002047] to-[#082a57] text-white pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
        {/* Decorative Wave & Light Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Dynamic Curved Red Ribbon Motif */}
        <div className="absolute -bottom-10 left-0 right-0 h-16 bg-white rounded-t-[50px] z-10 hidden md:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Tigrinya Tagline Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B61F32] text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg border border-red-400/30">
                <HeartPulse className="w-4 h-4 animate-pulse" />
                <span>3ጂ ንድሕነት ሕክምና ቅድሚያ ይሀብ!</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <p className="text-sm sm:text-base font-bold uppercase tracking-widest text-red-300">
                  Radiance Multispeciality Clinic & Diagnostic Center
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                  Your Health, <br />
                  <span className="text-[#B61F32] bg-white px-2 py-0.5 rounded-lg inline-block my-1 shadow-sm">
                    Our Priority
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-200 font-medium pt-1">
                  Better Health. Brighter Tomorrow.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                Welcome to <strong>3G Diagnostic Imaging & Radiance Clinic</strong>. We provide comprehensive, safe, and precise medical care under one roof—powered by 27+ ultrasound modalities, 24 digital X-rays, specialized fertility fluoroscopy (HSG), and senior consultant radiologist readings in Adi Dero and Bahir Dar.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2.5 bg-[#B61F32] hover:bg-[#911624] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Scan or Visit</span>
                </Link>

                <a
                  href={`tel:${CLINIC_INFO.primaryPhone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl border border-white/20 backdrop-blur-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-red-400" />
                  <span>Call {CLINIC_INFO.primaryPhone}</span>
                </a>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white font-semibold text-sm px-4 py-3 transition-colors"
                >
                  <span>Explore 50+ Services</span>
                  <ArrowRight className="w-4 h-4 text-red-400" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                <div>
                  <p className="text-2xl font-black text-white">27+</p>
                  <p className="text-xs text-slate-300 font-medium">Ultrasound Types</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-white">24+</p>
                  <p className="text-xs text-slate-300 font-medium">Digital X-Ray Views</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-white">Same-Day</p>
                  <p className="text-xs text-slate-300 font-medium">Rapid Reporting</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-white">24/7</p>
                  <p className="text-xs text-slate-300 font-medium">Emergency Triage</p>
                </div>
              </div>
            </div>

            {/* Right Media / Visual Card (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Glow ring */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#B61F32]/30 to-blue-500/20 rounded-3xl filter blur-2xl transform scale-95" />

                {/* Main Visual Frame */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-[#001533]">
                  <div className="relative h-[380px] sm:h-[450px] w-full">
                    <Image
                      src="/images/photo-doctor-hero.jpg"
                      alt="Radiance Clinic Doctor"
                      fill
                      priority
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 450px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001533] via-transparent to-transparent opacity-90" />
                  </div>

                  {/* Overlay Badges */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#002047] p-3 rounded-2xl shadow-lg border border-white/50 max-w-[210px]">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#B61F32] text-white flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold leading-tight">3D/4D Live Imaging</p>
                        <p className="text-[10px] text-slate-500">Expert Fetal Sonography</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 bg-[#001533]/90 backdrop-blur-md border border-white/15 p-4 rounded-2xl text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-red-300">Adi Dero • 3G Imaging Center</p>
                        <p className="text-sm font-bold">Call 03 42 40 90 43</p>
                        <p className="text-[11px] text-slate-300 line-clamp-1">
                          ካብ ላዕለዋይ በሬ ዓዲደሮ ራፈራኤል ሆስፒታል 300 ሜትር
                        </p>
                      </div>
                      <Link
                        href="/contact"
                        className="p-2 rounded-xl bg-[#B61F32] hover:bg-[#911624] text-white transition-colors"
                        aria-label="Directions"
                      >
                        <MapPin className="w-4 h-4" />
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
      {/* 2. QUICK ACCESS CARDS: THE 4 CORE DIAGNOSTIC PILLARS */}
      {/* ======================================================== */}
      <section className="relative z-30 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <Link
            href="/services/ultrasound"
            className="group bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl border-t-4 border-[#B61F32] transition-all transform hover:-translate-y-1.5 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#B61F32] flex items-center justify-center mb-3 group-hover:bg-[#B61F32] group-hover:text-white transition-colors">
                <Activity className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-[#002047] text-base group-hover:text-[#B61F32] transition-colors">
                  3G Ultrasound Suite
                </h3>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-[#B61F32]">
                  27 Scans
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Abdominal, Doppler hemodynamics, 3D/4D fetal scans, MSK, Echo, and FNAC biopsy.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#B61F32]">
              <span>Explore Sonography</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            href="/services/digital-xray"
            className="group bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl border-t-4 border-[#002047] transition-all transform hover:-translate-y-1.5 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#002047] flex items-center justify-center mb-3 group-hover:bg-[#002047] group-hover:text-white transition-colors">
                <Zap className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-[#002047] text-base group-hover:text-[#B61F32] transition-colors">
                  Digital X-Ray
                </h3>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  24 Views
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Low-dose digital skull, sinus, chest (CXR), spine, pelvic, and full extremity views.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#002047]">
              <span>View Anatomical Catalog</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 3 */}
          <Link
            href="/services/digital-xray#special-procedures"
            className="group bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl border-t-4 border-[#B61F32] transition-all transform hover:-translate-y-1.5 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#B61F32] flex items-center justify-center mb-3 group-hover:bg-[#B61F32] group-hover:text-white transition-colors">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-[#002047] text-base group-hover:text-[#B61F32] transition-colors">
                  Special Procedures
                </h3>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-[#B61F32]">
                  Fluoroscopy
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                HSG fertility tubal patency, IVU/IVP kidneys, CUG bladder, Barium swallow & enema.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#B61F32]">
              <span>Infertility & GI Procedures</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 4 */}
          <Link
            href="/services/ct-mri-consultation"
            className="group bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl border-t-4 border-[#002047] transition-all transform hover:-translate-y-1.5 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#002047] flex items-center justify-center mb-3 group-hover:bg-[#002047] group-hover:text-white transition-colors">
                <FileCheck className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-[#002047] text-base group-hover:text-[#B61F32] transition-colors">
                  CT & MRI Reading
                </h3>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Expert Consult
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Senior consultant radiologist second opinions, cross-sectional review, and tele-radiology.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#002047]">
              <span>Second Opinions</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. 3G ULTRASOUND SHOWCASE: 27 MODALITIES */}
      {/* ======================================================== */}
      <section className="py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Ultrasound Center of Excellence"
            title="3G Ultrasound Services:"
            highlightText="27 Precision Modalities"
            subtitle="From obstetric 3D/4D scans and cardiovascular Doppler to neonatal cranial and musculoskeletal sonography, our expert radiologists deliver high diagnostic accuracy."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ULTRASOUND_SERVICES.slice(0, 6).map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#B61F32] uppercase tracking-wider">
                      {srv.tag || "Sonography"}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      ~{srv.durationMinutes} mins
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#002047] group-hover:text-[#B61F32] transition-colors">
                    {srv.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                    {srv.shortDescription}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <p className="text-[11px] font-bold text-slate-700 uppercase">Preparation:</p>
                    <p className="text-xs text-slate-500 mt-0.5">{srv.preparation}</p>
                  </div>
                </div>

                <div className="mt-6 pt-3 flex items-center justify-between">
                  <Link
                    href={`/services/ultrasound#${srv.id}`}
                    className="text-xs font-bold text-[#002047] hover:text-[#B61F32] flex items-center gap-1"
                  >
                    <span>Full Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href={`/book?service=${srv.id}`}
                    className="text-xs font-bold bg-[#B61F32]/10 hover:bg-[#B61F32] text-[#B61F32] hover:text-white px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Book Scan
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA to view all 27 ultrasound types */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white p-4 sm:px-6 sm:py-3 rounded-2xl shadow-md border border-slate-200">
              <span className="text-xs sm:text-sm font-semibold text-slate-700">
                Need MSK, Carotid/Renal Doppler, Neonatal Cranial, or FNAC Biopsy?
              </span>
              <Link
                href="/services/ultrasound"
                className="inline-flex items-center gap-2 bg-[#002047] hover:bg-[#092f61] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-xl transition-colors"
              >
                <span>View All 27 Ultrasound Exams</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. CLINICAL HIGHLIGHT: HSG & SPECIAL PROCEDURES */}
      {/* ======================================================== */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-[#B61F32] text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Specialized Diagnostic Fluoroscopy</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002047] leading-tight">
                Advanced Special Procedures: <br />
                <span className="text-[#B61F32]">HSG, IVU, CUG & Barium Studies</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                When standard imaging requires functional contrast visualization, our experienced radiologists perform specialized fluoroscopic investigations with meticulous patient comfort and rapid turnarounds:
              </p>

              <div className="space-y-3.5">
                {SPECIAL_PROCEDURES.slice(0, 4).map((proc) => (
                  <div key={proc.id} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-[#B61F32] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#002047]">{proc.name}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{proc.shortDescription}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/services/digital-xray#special-procedures"
                  className="inline-flex items-center gap-2 bg-[#B61F32] hover:bg-[#911624] text-white text-sm font-bold px-5 py-3 rounded-xl transition-all shadow-md"
                >
                  <span>Learn About Preparation & Booking</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-100">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/images/photo-ultrasound.jpg"
                    alt="Special Procedure & Ultrasound Examination"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-[#001533] text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-red-300">Fertility & Fluoroscopy Unit</p>
                      <h4 className="text-base font-bold">Compassionate, Patient-Centered Care</h4>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#B61F32] text-white text-xs font-bold">
                      Strict Dignity Protocol
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-2">
                    Our team provides gentle handling, pre-procedure counseling, and immediate clinical discussion with referring physicians.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. WHY CHOOSE RADIANCE (FROM BRAND GUIDELINES) */}
      {/* ======================================================== */}
      <section className="py-20 bg-gradient-to-b from-[#001533] to-[#002047] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Radiance Advantage"
            title="Our Healthcare Philosophy &"
            highlightText="Core Values"
            subtitle="Guided by our official company profile: Delivering safe, accurate, and empathetic medical care to improve community well-being in Bahir Dar and Adi Dero."
            centered
            dark
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Value 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#B61F32] text-white flex items-center justify-center mb-4 shadow-md">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Patient-First Care</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                We put the health, safety, and well-being of our patients at the center of everything we do, offering personalized and respectful service at every visit.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-md">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Quality & Patient Safety</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                We uphold high standards of medical care, rigorous diagnostic calibration, and sterile hygienic clinical environments for all examinations.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center mb-4 shadow-md">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Professional Integrity</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                We act with transparency, honest medical advice, strict patient confidentiality, and unwavering ethical standards across all consultations.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center mb-4 shadow-md">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Modern Innovation</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                We invest in modern imaging systems, digital low-dose radiography, 3D/4D sonography, and automated laboratory diagnostics.
              </p>
            </div>

            {/* Value 5 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-500 text-white flex items-center justify-center mb-4 shadow-md">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Collaborative Teamwork</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Our radiologists, clinical specialists, nurses, and laboratory scientists collaborate closely to deliver cohesive patient care and clear answers.
              </p>
            </div>

            {/* Value 6 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#B61F32] text-white flex items-center justify-center mb-4 shadow-md">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Community Commitment</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Dedicated to improving healthcare accessibility, maternal-fetal health, and preventive check-ups in Adi Dero, Bahir Dar, and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. MODERN CLINIC FACILITIES & VIRTUAL TOUR */}
      {/* ======================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="World-Class Facilities"
            title="State-of-the-Art"
            highlightText="Diagnostic Environments"
            subtitle="Designed for patient comfort, pristine hygiene, and rapid diagnostic workflows."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Facility 1 */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative h-48 w-full bg-slate-100">
                <Image
                  src="/images/photo-reception.jpg"
                  alt="Modern Clinic Reception Desk"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-[#002047] text-sm">Welcoming Reception</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Comfortable patient waiting areas and prompt administrative triage.
                </p>
              </div>
            </div>

            {/* Facility 2 */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative h-48 w-full bg-slate-100">
                <Image
                  src="/images/photo-ultrasound.jpg"
                  alt="3G Ultrasound Suite"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-[#002047] text-sm">Advanced 3G Sonography</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Private exam rooms with multi-probe 3D/4D ultrasound systems.
                </p>
              </div>
            </div>

            {/* Facility 3 */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative h-48 w-full bg-slate-100">
                <Image
                  src="/images/photo-ct-mri.jpg"
                  alt="CT and MRI Suite"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-[#002047] text-sm">CT & MRI Reading Desk</h4>
                <p className="text-xs text-slate-500 mt-1">
                  High-definition PACS diagnostic monitors for subspecialty analysis.
                </p>
              </div>
            </div>

            {/* Facility 4 */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative h-48 w-full bg-slate-100">
                <Image
                  src="/images/photo-lab.jpg"
                  alt="Automated Clinical Laboratory"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-[#002047] text-sm">Automated Diagnostic Lab</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Automated hematology, biochemistry, and hormone analyzers with rapid results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. MEET OUR MEDICAL SPECIALISTS */}
      {/* ======================================================== */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Consultant Team"
            title="Experienced Healthcare"
            highlightText="Professionals"
            subtitle="Led by Senior Consultant Radiologists, specialized sonologists, cardiologists, and pediatricians committed to accurate diagnosis."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DOCTORS_DATA.slice(0, 3).map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 w-full bg-slate-200">
                    <Image
                      src={doc.avatarUrl}
                      alt={doc.name}
                      fill
                      className="object-cover object-top"
                    />
                    {doc.badge && (
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#B61F32] text-white text-[10px] font-bold tracking-wide shadow-md">
                        {doc.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold text-[#002047]">{doc.name}</h3>
                    <p className="text-xs font-semibold text-[#B61F32] mt-0.5">{doc.title}</p>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-3">{doc.bio}</p>

                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-1 text-[11px] text-slate-500">
                      <p>
                        <strong className="text-slate-700">Schedule:</strong> {doc.schedule}
                      </p>
                      <p>
                        <strong className="text-slate-700">Languages:</strong> {doc.languages.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    href={`/book?doctor=${doc.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#002047] hover:bg-[#B61F32] text-white text-xs font-bold py-2.5 rounded-xl transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Request Consultation</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/doctors"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#002047] hover:text-[#B61F32] transition-colors"
            >
              <span>View Full Medical Team & Qualifications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. DUAL LOCATION SPOTLIGHT (ADI DERO & BAHIR DAR) */}
      {/* ======================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Convenient Locations"
            title="Visit Our Centers in"
            highlightText="Adi Dero & Bahir Dar"
            subtitle="Providing accessible diagnostic imaging and multispeciality clinical care with dedicated direct phone lines."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Adi Dero Center */}
            <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-6 sm:p-8 border-2 border-red-100 shadow-md flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B61F32] text-white text-xs font-bold mb-4">
                  <HeartPulse className="w-3.5 h-3.5" />
                  <span>3G Diagnostic Imaging • Adi Dero</span>
                </div>

                <h3 className="text-xl font-extrabold text-[#002047]">
                  3G Diagnostic Imaging Center
                </h3>

                {/* Tigrinya directions emphasized */}
                <div className="mt-4 p-4 rounded-2xl bg-white border border-red-200">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    አድራሻ (Tigrinya Directions):
                  </p>
                  <p className="text-sm font-bold text-[#002047] leading-relaxed">
                    ካብ ላዕለዋይ በሬ ዓዲደሮ ራፈራኤል ሆስፒታል ናብ መስመር ዓዲሹም 300 ሜትር ወሪድ ኢልካ ይርከብ
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    (300 meters down from Upper Gate Adi Dero Raphael Hospital towards Adi Shum)
                  </p>
                  <p className="text-xs font-bold text-[#B61F32] mt-2">
                    3ጂ ንድሕነት ሕክምና ቅድሚያ ይሀብ!
                  </p>
                </div>

                <div className="mt-4 space-y-2 text-xs text-slate-700">
                  <p className="flex items-center gap-2 font-bold text-base text-[#002047]">
                    <Phone className="w-4 h-4 text-[#B61F32]" />
                    <span>03 42 40 90 43</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>Monday – Sunday: 7:30 AM – 8:30 PM (24/7 Emergency On-Call)</span>
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-red-100 flex items-center gap-3">
                <a
                  href="tel:0342409043"
                  className="flex-1 text-center bg-[#B61F32] hover:bg-[#911624] text-white text-xs font-bold py-2.5 rounded-xl transition-colors"
                >
                  Call Adi Dero Direct
                </a>
                <Link
                  href="/contact"
                  className="px-4 py-2.5 border border-slate-300 hover:border-[#002047] text-[#002047] text-xs font-bold rounded-xl transition-colors"
                >
                  Directions
                </Link>
              </div>
            </div>

            {/* Bahir Dar Center */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-6 sm:p-8 border-2 border-blue-100 shadow-md flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#002047] text-white text-xs font-bold mb-4">
                  <Stethoscope className="w-3.5 h-3.5" />
                  <span>Multispeciality Hub • Bahir Dar</span>
                </div>

                <h3 className="text-xl font-extrabold text-[#002047]">
                  Radiance Multispeciality Clinic
                </h3>

                <div className="mt-4 p-4 rounded-2xl bg-white border border-blue-200">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Address:
                  </p>
                  <p className="text-sm font-bold text-[#002047]">
                    Bahir Dar, Kebele 14, Ethiopia
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Multispeciality consultations, laboratory diagnostics, preventive checkups, and radiology.
                  </p>
                  <p className="text-xs font-bold text-[#002047] mt-2">
                    “Better Health. Brighter Tomorrow.”
                  </p>
                </div>

                <div className="mt-4 space-y-2 text-xs text-slate-700">
                  <p className="flex items-center gap-2 font-bold text-base text-[#002047]">
                    <Phone className="w-4 h-4 text-[#B61F32]" />
                    <span>+251 990 084 747 / +251 985 414 949</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>Monday – Saturday: 8:00 AM – 8:00 PM | Sunday: 8:30 AM – 5:00 PM</span>
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-blue-100 flex items-center gap-3">
                <a
                  href="tel:+251990084747"
                  className="flex-1 text-center bg-[#002047] hover:bg-[#092f61] text-white text-xs font-bold py-2.5 rounded-xl transition-colors"
                >
                  Call Bahir Dar Direct
                </a>
                <Link
                  href="/book"
                  className="px-4 py-2.5 border border-slate-300 hover:border-[#002047] text-[#002047] text-xs font-bold rounded-xl transition-colors"
                >
                  Book Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 9. ECG HEARTBEAT ACCENT & FINAL CTA */}
      {/* ======================================================== */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <EcgDivider />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002047] mt-4">
            Ready to Schedule Your Scan or Doctor Consultation?
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto mt-2">
            No long queues. Fast-track appointments, verified preparation instructions, and digital report delivery straight to your phone.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-[#B61F32] hover:bg-[#911624] text-white text-sm font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Online</span>
            </Link>

            <a
              href="tel:0342409043"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#002047] text-sm font-bold px-6 py-3.5 rounded-xl border border-slate-300 shadow-sm transition-all"
            >
              <Phone className="w-4 h-4 text-[#B61F32]" />
              <span>Call 03 42 40 90 43</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
