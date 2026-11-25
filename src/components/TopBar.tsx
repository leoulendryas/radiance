import Link from "next/link";
import { Phone, Clock, MapPin, ShieldCheck, HeartPulse } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicInfo";

export default function TopBar() {
  return (
    <div className="bg-[#001533] text-white text-xs border-b border-white/10 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Left: Tigrinya Motto & Trust Badge */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#B61F32] font-semibold text-[11px] tracking-wide text-white shadow-sm">
              <HeartPulse className="w-3.5 h-3.5 animate-pulse" />
              <span>3ጂ ንድሕነት ሕክምና ቅድሚያ ይሀብ!</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Accurate Diagnostics • Advanced Technology</span>
            </span>
          </div>

          {/* Right: Phone, Hours & Quick Emergency */}
          <div className="flex items-center gap-4 text-[11px] ml-auto">
            <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#B61F32]" />
              <span>Mon-Sun: 7:30 AM - 8:30 PM | 24/7 Emergency</span>
            </div>

            <a
              href={`tel:${CLINIC_INFO.primaryPhone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 font-bold text-white hover:text-red-300 transition-colors bg-white/10 hover:bg-white/15 px-2.5 py-1 rounded"
              title="Call 3G Diagnostic Imaging direct"
            >
              <Phone className="w-3.5 h-3.5 text-[#B61F32]" />
              <span className="tracking-wide">{CLINIC_INFO.primaryPhone}</span>
            </a>

            <Link
              href="/contact"
              className="hidden lg:flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-red-400" />
              <span>Adi Dero & Bahir Dar</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
