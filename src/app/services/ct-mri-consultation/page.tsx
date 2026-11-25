import Link from "next/link";
import Image from "next/image";
import {
  FileCheck,
  Phone,
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Upload,
  Brain,
  Activity,
  ArrowRight,
  Eye,
  MessageSquare
} from "lucide-react";
import { CT_MRI_CONSULTATIONS } from "@/data/servicesData";
import { CLINIC_INFO } from "@/data/clinicInfo";
import SectionHeading from "@/components/SectionHeading";
import EcgDivider from "@/components/EcgDivider";

export const metadata = {
  title: "CT Scan & MRI Scan Reading & Radiological Consultations",
  description: "Expert CT & MRI scan interpretation, tele-radiology second opinions, and specialized radiological case reviews by Senior Consultant Radiologists at Radiance Clinic & 3G Diagnostic Imaging."
};

export default function CtMriConsultationPage() {
  const steps = [
    {
      step: "01",
      title: "Submit DICOM Images",
      desc: "Bring your external CD/DVD or share your secure cloud PACS access link with our administrative desk."
    },
    {
      step: "02",
      title: "Subspecialty Assignment",
      desc: "Your scan is assigned to a fellowship-trained radiologist matching the organ system (Neuro, MSK, Body, or Chest)."
    },
    {
      step: "03",
      title: "Rigorous Double-Read",
      desc: "Detailed cross-sectional slice analysis comparing prior studies, contrast enhancement phases, and clinical context."
    },
    {
      step: "04",
      title: "Formal Report & Discussion",
      desc: "Receive an exhaustive written radiological report and direct clinical consultation with your referring physician."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/60 pb-24">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#001533] via-[#002047] to-[#0d2a52] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B61F32] text-white text-xs font-bold tracking-wide">
                <FileCheck className="w-3.5 h-3.5" />
                <span>Senior Consultant Radiologist Interpretation</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                CT Scan & MRI Scan Reading <br />
                <span className="text-emerald-400">& Radiological Consultations</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
                Need a trusted second opinion on a complex brain MRI, thoracic CT, abdominal scan, or spine injury? Our team of fellowship-trained consultant radiologists provides precision cross-sectional interpretation and peer-to-peer physician consultations.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/book?service=ct-scan-reading"
                  className="inline-flex items-center gap-2 bg-[#B61F32] hover:bg-[#911624] text-white text-sm font-bold px-6 py-3 rounded-xl shadow-lg transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Scan Interpretation</span>
                </Link>

                <a
                  href={`tel:${CLINIC_INFO.primaryPhone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-bold px-5 py-3 rounded-xl border border-white/20 transition-all"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call {CLINIC_INFO.primaryPhone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-[#001533]">
                <div className="relative h-64 sm:h-80 w-full">
                  <Image
                    src="/images/photo-ct-mri.jpg"
                    alt="CT and MRI Suite"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001533] via-transparent to-transparent opacity-85" />
                </div>
                <div className="p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-emerald-300">Tele-Radiology Reading Desk</p>
                      <h4 className="text-sm font-bold">Multi-Planar Cross Sectional Analysis</h4>
                    </div>
                    <span className="px-2.5 py-0.5 rounded bg-white/10 text-slate-200 text-xs font-bold">
                      PACS Certified
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-2">
                    Accepting scans from all hospitals and diagnostic imaging centers across Ethiopia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CT_MRI_CONSULTATIONS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 uppercase tracking-wide">
                  {item.tag || "Consultation"}
                </span>

                <h3 className="text-xl font-extrabold text-[#002047] mt-4">
                  {item.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  {item.fullDescription}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                  <p className="text-xs font-bold text-slate-700 uppercase">Clinical Focus:</p>
                  <ul className="space-y-1.5">
                    {item.indications.map((ind, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#B61F32] shrink-0 mt-0.5" />
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <p className="text-[11px] text-slate-400 mb-3">
                  <strong className="text-slate-700">Turnaround:</strong> {item.resultsTurnaround}
                </p>
                <Link
                  href={`/book?service=${item.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#002047] hover:bg-[#B61F32] text-white text-xs font-bold py-3 rounded-xl transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Request Consultation</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Step Process Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <SectionHeading
            badge="Simple Workflow"
            title="How Scan Reading &"
            highlightText="Consultations Work"
            subtitle="Fast, transparent, and rigorous second opinions without requiring patient travel."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {steps.map((st, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 relative">
                <span className="text-3xl font-black text-[#B61F32]/25 block mb-2">
                  {st.step}
                </span>
                <h4 className="font-bold text-[#002047] text-base mb-1.5">{st.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Clinical Callout Banner */}
        <div className="bg-gradient-to-r from-[#002047] via-[#092f61] to-[#002047] rounded-3xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#B61F32] text-white text-xs font-bold">
              Referring Physicians & Clinics
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Collaborative Tele-Radiology Network
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We welcome partnerships with regional hospitals and clinics seeking reliable overnight or same-day tele-radiology reporting.
            </p>
          </div>

          <a
            href="tel:0342409043"
            className="shrink-0 inline-flex items-center gap-2 bg-[#B61F32] hover:bg-[#911624] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Speak with Radiologist</span>
          </a>
        </div>
      </div>
    </div>
  );
}
