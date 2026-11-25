import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Phone,
  Clock,
  Languages,
  Award,
  GraduationCap,
  MapPin,
  CheckCircle2,
  Stethoscope
} from "lucide-react";
import { DOCTORS_DATA } from "@/data/doctorsData";
import { CLINIC_INFO } from "@/data/clinicInfo";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Consultant Radiologists & Medical Specialists",
  description: "Meet our experienced team of Consultant Radiologists, specialized sonologists, cardiologists, and pediatricians at Radiance Clinic and 3G Diagnostic Imaging."
};

export default function DoctorsPage() {
  return (
    <div className="min-h-screen bg-slate-50/60 pb-24">
      {/* Page Header */}
      <div className="bg-[#002047] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B61F32] text-white text-xs font-bold uppercase tracking-wider">
              Clinical Leadership
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Medical Professionals & Healthcare Team
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              A dedicated team of skilled, fellowship-trained radiologists and compassionate specialists committed to your health and well-being in Adi Dero and Bahir Dar.
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS_DATA.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-200 flex flex-col justify-between group"
            >
              <div>
                {/* Image & Badge */}
                <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={doc.avatarUrl}
                    alt={doc.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {doc.badge && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#B61F32] text-white text-xs font-bold shadow-md">
                      {doc.badge}
                    </span>
                  )}

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] font-bold text-red-300 uppercase tracking-wider block">
                      {doc.specialty}
                    </span>
                    <h3 className="text-lg font-bold">{doc.name}</h3>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <p className="text-xs font-semibold text-[#002047]">{doc.title}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{doc.bio}</p>

                  <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                    <div className="flex items-start gap-2 text-slate-600">
                      <GraduationCap className="w-4 h-4 text-[#B61F32] shrink-0 mt-0.5" />
                      <span>{doc.qualifications.join(" • ")}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{doc.schedule}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600">
                      <Languages className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>Languages: {doc.languages.join(", ")}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{doc.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="p-6 pt-0">
                <Link
                  href={`/book?doctor=${doc.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#002047] hover:bg-[#B61F32] text-white text-xs font-bold py-3 rounded-xl transition-colors shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Consultation With {doc.name.split(" ")[1]}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Multidisciplinary Banner */}
        <div className="bg-gradient-to-r from-[#001533] via-[#002047] to-[#092f61] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="px-2.5 py-0.5 rounded-full bg-[#B61F32] text-white text-xs font-bold">
              Collaborative Diagnostics
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Direct Clinician-to-Radiologist Case Reviews
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We work closely with referring clinicians across the region. Bring your requisition slip or contact our radiologist directly to coordinate urgent scans or patient case discussions.
            </p>
          </div>

          <a
            href={`tel:${CLINIC_INFO.primaryPhone.replace(/\s+/g, "")}`}
            className="shrink-0 inline-flex items-center gap-2 bg-[#B61F32] hover:bg-[#911624] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Call Radiologist ({CLINIC_INFO.primaryPhone})</span>
          </a>
        </div>
      </div>
    </div>
  );
}
