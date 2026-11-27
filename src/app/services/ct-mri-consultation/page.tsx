"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FileCheck,
  Phone,
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { CT_MRI_CONSULTATIONS } from "@/data/servicesData";
import { CLINIC_INFO } from "@/data/clinicInfo";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/SectionHeading";

export default function CtMriConsultationPage() {
  const { t } = useLanguage();

  const steps = [
    {
      step: "01",
      title: "Submit DICOM Images",
      desc: "Provide external CD/DVD discs or share a cloud PACS image link at our reception desk."
    },
    {
      step: "02",
      title: "Subspecialty Assignment",
      desc: "Your scan is assigned to a fellowship-trained radiologist matching the specific organ system."
    },
    {
      step: "03",
      title: "Cross-Sectional Reading",
      desc: "Slice-by-slice multi-planar review comparing prior examinations and clinical history."
    },
    {
      step: "04",
      title: "Formal Report & Consultation",
      desc: "Receive an exhaustive written radiological report and direct discussion with your physician."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBFCFE] dark:bg-[#050B14] pb-24 transition-colors">
      {/* Hero Header */}
      <section className="bg-[#00142E] dark:bg-[#030812] text-white py-12 lg:py-18 border-b border-white/5 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#B61F32] text-white text-[11px] font-semibold uppercase tracking-wider">
                <FileCheck className="w-3.5 h-3.5" />
                <span>Senior Consultant Radiologist Interpretation</span>
              </span>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                CT Scan & MRI Scan Reading <br />
                <span className="text-emerald-400">& Radiological Consultations</span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                Need a trusted second opinion on a complex brain MRI, thoracic CT, abdominal scan, or spine injury? Our team of fellowship-trained consultant radiologists provides precision cross-sectional interpretation and peer-to-peer physician consultations.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/book?service=ct-scan-reading"
                  className="inline-flex items-center gap-2 bg-[#B61F32] hover:bg-[#8F1726] text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Request Scan Interpretation</span>
                </Link>

                <a
                  href={`tel:${CLINIC_INFO.phone1.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold px-4 py-2.5 rounded-xl border border-white/15 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-mono">{CLINIC_INFO.phone1}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-[#001026]">
                <div className="relative h-60 sm:h-72 w-full">
                  <Image
                    src="/images/photo-ct-mri.jpg"
                    alt="CT and MRI Suite"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-xs text-slate-300 border-t border-white/10">
                  <p className="font-semibold text-white">Tele-Radiology Reading Desk</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Accepting DICOM series from hospitals across Ethiopia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CT_MRI_CONSULTATIONS.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#0A1324] rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                  {item.tag || "Consultation"}
                </span>

                <h3 className="text-base font-bold text-[#002047] dark:text-white mt-3">
                  {item.name}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {item.fullDescription}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5">
                  <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase">Focus:</p>
                  <ul className="space-y-1">
                    {item.indications.slice(0, 3).map((ind, i) => (
                      <li key={i} className="text-xs text-slate-500 dark:text-slate-400 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B61F32] shrink-0 mt-0.5" />
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <p className="text-[11px] text-slate-400 font-mono mb-3">
                  Turnaround: {item.resultsTurnaround}
                </p>
                <Link
                  href={`/book?service=${item.id}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#002047] dark:bg-slate-800 hover:bg-[#B61F32] text-white text-xs font-semibold py-2.5 rounded-xl transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Request Consultation</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Step Process Section */}
        <div className="bg-white dark:bg-[#0A1324] rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 transition-colors">
          <SectionHeading
            badge="Workflow"
            title="How Scan Reading &"
            highlightText="Consultations Work"
            subtitle="Fast, transparent, and rigorous second opinions without requiring patient travel."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {steps.map((st, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-50/60 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60">
                <span className="text-xs font-bold text-[#B61F32] dark:text-red-400 font-mono block mb-1">
                  {st.step}
                </span>
                <h4 className="font-bold text-[#002047] dark:text-white text-xs sm:text-sm mb-1">{st.title}</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Clinical Callout */}
        <div className="bg-[#00142E] dark:bg-[#030812] rounded-2xl p-6 sm:p-8 text-white border border-white/10 flex flex-col md:flex-row items-center justify-between gap-5 transition-colors">
          <div className="space-y-1.5 max-w-xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
              Referring Clinicians & Hospitals
            </span>
            <h3 className="text-lg sm:text-xl font-bold">
              Collaborative Tele-Radiology Network
            </h3>
            <p className="text-xs text-slate-300">
              We partner with regional healthcare providers for dependable same-day cross-sectional reads and direct case discussions.
            </p>
          </div>

          <a
            href={`tel:${CLINIC_INFO.phone1.replace(/\s+/g, "")}`}
            className="shrink-0 inline-flex items-center gap-2 bg-[#B61F32] hover:bg-[#8F1726] text-white px-5 py-2.5 rounded-xl font-semibold text-xs shadow-xs transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Consult Radiologist ({CLINIC_INFO.phone1})</span>
          </a>
        </div>
      </div>
    </div>
  );
}
