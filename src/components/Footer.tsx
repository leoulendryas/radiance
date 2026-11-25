import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  HeartPulse,
  ChevronRight,
  ShieldAlert,
  ArrowUpRight
} from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicInfo";

export default function Footer() {
  return (
    <footer className="bg-[#001533] text-white pt-16 pb-8 border-t-4 border-[#B61F32]">
      {/* Upper Highlight Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-[#002047] via-[#092f61] to-[#002047] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#B61F32]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B61F32] text-white text-xs font-bold tracking-wide mb-3">
                <HeartPulse className="w-3.5 h-3.5" />
                <span>3ጂ ንድሕነት ሕክምና ቅድሚያ ይሀብ!</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Accurate Medical Imaging & Multispeciality Care You Can Trust
              </h3>
              <p className="text-slate-300 text-sm mt-1 max-w-2xl">
                Serving our community in Adi Dero and Bahir Dar with advanced 3D/4D ultrasound, digital X-rays, specialized contrast studies, and expert clinical consultations.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <a
                href={`tel:${CLINIC_INFO.primaryPhone.replace(/\s+/g, "")}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#B61F32] hover:bg-[#911624] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-md transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call {CLINIC_INFO.primaryPhone}</span>
              </a>
              <Link
                href="/book"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-xl font-bold text-sm border border-white/20 transition-all"
              >
                <span>Book Appointment</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Slogan */}
          <div className="space-y-4">
            <Link href="/" className="inline-block relative h-12 w-48">
              <Image
                src="/images/logo-white.png"
                alt="Radiance Clinic Logo"
                fill
                className="object-contain object-left"
              />
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed">
              Radiance Multispeciality Clinic & 3G Diagnostic Imaging is a patient-centered healthcare institution committed to high standards of medical care, precision diagnostics, and compassion.
            </p>

            <div className="pt-2">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Official Motto
              </p>
              <p className="text-sm font-semibold text-white">
                “Better Health. Brighter Tomorrow.”
              </p>
              <p className="text-xs text-red-300 font-medium mt-0.5">
                Your Health, Our Priority
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-300 bg-white/5 p-3 rounded-xl border border-white/10">
              <ShieldAlert className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Certified Radiation Safety & Hygienic Sonography Protocols</span>
            </div>
          </div>

          {/* Column 2: Diagnostic Imaging Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-red-400 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#B61F32] rounded-full"></span>
              3G Diagnostic Imaging
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/services/ultrasound" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-red-400" />
                  <span>3D/4D Fetal & Obstetric Ultrasound</span>
                </Link>
              </li>
              <li>
                <Link href="/services/ultrasound" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-red-400" />
                  <span>Duplex Doppler (Renal, Carotid, Venous)</span>
                </Link>
              </li>
              <li>
                <Link href="/services/ultrasound" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-red-400" />
                  <span>Echocardiography & 12-Lead ECG</span>
                </Link>
              </li>
              <li>
                <Link href="/services/digital-xray" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-red-400" />
                  <span>24 Full-Body Digital X-Ray Views</span>
                </Link>
              </li>
              <li>
                <Link href="/services/digital-xray" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-red-400" />
                  <span>HSG (Hysterosalpingography) for Infertility</span>
                </Link>
              </li>
              <li>
                <Link href="/services/digital-xray" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-red-400" />
                  <span>IVU/IVP, CUG & Barium Contrast Studies</span>
                </Link>
              </li>
              <li>
                <Link href="/services/ct-mri-consultation" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-red-400" />
                  <span>CT & MRI Tele-Radiology Reading</span>
                </Link>
              </li>
              <li>
                <Link href="/services/ultrasound" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-red-400" />
                  <span>Ultrasound-Guided FNAC Biopsy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Multispeciality & Patient Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-red-400 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#B61F32] rounded-full"></span>
              Clinical Clinics & Patients
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/services/multispeciality" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-red-400" />
                  <span>Cardiology & Hypertension Care</span>
                </Link>
              </li>
              <li>
                <Link href="/services/multispeciality" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-red-400" />
                  <span>Neurology, Pulmonology & Orthopedics</span>
                </Link>
              </li>
              <li>
                <Link href="/services/multispeciality" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-red-400" />
                  <span>Obstetrics & Women&apos;s Health</span>
                </Link>
              </li>
              <li>
                <Link href="/services/multispeciality" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-red-400" />
                  <span>Automated Medical Laboratory Panels</span>
                </Link>
              </li>
              <li>
                <Link href="/patients" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-red-400" />
                  <span>Scan Preparation Guidelines (Fasting/Bladder)</span>
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-red-400" />
                  <span>Meet Our Consultant Radiologists & Specialists</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-red-400" />
                  <span>Our Vision, Mission & Core Values</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Both Center Addresses & Contacts */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-red-400 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#B61F32] rounded-full"></span>
              Clinic Addresses & Contacts
            </h4>

            {/* Branch 1: Adi Dero 3G */}
            <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-1.5">
              <p className="text-[11px] font-bold text-red-300 uppercase tracking-wide">
                Branch 1: 3G Diagnostic Imaging
              </p>
              <p className="text-xs text-white font-medium">
                ካብ ላዕለዋይ በሬ ዓዲደሮ ራፈራኤል ሆስፒታል ናብ መስመር ዓዲሹም 300 ሜትር ወሪድ ኢልካ ይርከብ
              </p>
              <p className="text-[11px] text-slate-300">
                (300m down from Upper Gate Adi Dero Raphael Hospital toward Adi Shum)
              </p>
              <div className="pt-1 flex items-center gap-1 text-xs font-bold text-amber-300">
                <Phone className="w-3.5 h-3.5 text-[#B61F32]" />
                <a href="tel:0342409043" className="hover:underline">
                  03 42 40 90 43
                </a>
              </div>
            </div>

            {/* Branch 2: Bahir Dar */}
            <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-1.5">
              <p className="text-[11px] font-bold text-red-300 uppercase tracking-wide">
                Branch 2: Radiance Multispeciality
              </p>
              <p className="text-xs text-white">
                Bahir Dar, Kebele 14, Ethiopia
              </p>
              <div className="flex flex-col gap-0.5 text-xs text-slate-300">
                <a href="tel:+251990084747" className="hover:text-white flex items-center gap-1">
                  <Phone className="w-3 h-3 text-[#B61F32]" />
                  <span>+251 990 084 747</span>
                </a>
                <a href="tel:+251985414949" className="hover:text-white flex items-center gap-1">
                  <Phone className="w-3 h-3 text-[#B61F32]" />
                  <span>+251 985 414 949</span>
                </a>
                <a href="mailto:info@radianceclinic.com" className="hover:text-white flex items-center gap-1 mt-0.5">
                  <Mail className="w-3 h-3 text-[#B61F32]" />
                  <span>info@radianceclinic.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & emergency warning */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © 2026 Radiance Multispeciality Clinic and 3G Diagnostic Imaging Center. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/patients" className="hover:text-white transition-colors">
              Patient Rights & Privacy
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Find Directions
            </Link>
            <span>•</span>
            <Link href="/book" className="text-red-400 hover:text-red-300 font-semibold transition-colors">
              Online Appointment
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
