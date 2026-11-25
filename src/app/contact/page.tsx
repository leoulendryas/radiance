"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  HeartPulse,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
  Calendar
} from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicInfo";
import SectionHeading from "@/components/SectionHeading";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "adi-dero",
    serviceInterest: "ultrasound",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50/60 pb-24">
      {/* Page Header */}
      <div className="bg-[#002047] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B61F32] text-white text-xs font-bold uppercase tracking-wider">
              Locations & Assistance
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Contact & Clinic Locations
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              We operate two dedicated centers in Adi Dero and Bahir Dar. Reach out via direct phone, submit an appointment request, or visit our front desk.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 space-y-12">
        {/* Dual Location Detailed Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Location 1: Adi Dero 3G */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-red-100 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-full pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B61F32] text-white text-xs font-bold tracking-wide mb-4">
                <HeartPulse className="w-3.5 h-3.5" />
                <span>3G Diagnostic Imaging • Adi Dero</span>
              </div>

              <h2 className="text-2xl font-extrabold text-[#002047]">
                3G Diagnostic Imaging Center
              </h2>

              <p className="text-xs text-slate-500 mt-1">
                Specialized Ultrasound, Digital X-Ray & Contrast Procedures
              </p>

              {/* Tigrinya directions box */}
              <div className="mt-5 p-4 rounded-2xl bg-red-50/70 border border-red-200">
                <p className="text-xs font-bold text-red-900 uppercase tracking-wide mb-1">
                  አድራሻ (Tigrinya Directions):
                </p>
                <p className="text-sm font-bold text-[#002047] leading-relaxed">
                  ካብ ላዕለዋይ በሬ ዓዲደሮ ራፈራኤል ሆስፒታል ናብ መስመር ዓዲሹም 300 ሜትር ወሪድ ኢልካ ይርከብ
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  (300 meters down from Upper Gate Adi Dero Raphael Hospital toward Adi Shum road)
                </p>
                <p className="text-xs font-bold text-[#B61F32] mt-2">
                  3ጂ ንድሕነት ሕክምና ቅድሚያ ይሀብ!
                </p>
              </div>

              <div className="mt-5 space-y-3 text-xs text-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-[#B61F32] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Primary Telephone</span>
                    <a href="tel:0342409043" className="text-base font-bold text-[#002047] hover:text-[#B61F32]">
                      03 42 40 90 43
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Opening Hours</span>
                    <span className="font-medium text-slate-700">Monday – Sunday: 7:30 AM – 8:30 PM (24/7 Emergency Support)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <a
                href="tel:0342409043"
                className="flex-1 text-center bg-[#B61F32] hover:bg-[#911624] text-white text-xs font-bold py-3 rounded-xl transition-colors shadow-xs"
              >
                Call 03 42 40 90 43
              </a>
              <Link
                href="/book?branch=adi-dero"
                className="flex-1 text-center bg-[#002047] hover:bg-[#092f61] text-white text-xs font-bold py-3 rounded-xl transition-colors"
              >
                Book Scan in Adi Dero
              </Link>
            </div>
          </div>

          {/* Location 2: Bahir Dar Radiance */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-blue-100 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#002047] text-white text-xs font-bold tracking-wide mb-4">
                <Building2 className="w-3.5 h-3.5 text-red-400" />
                <span>Multispeciality Medical Hub • Bahir Dar</span>
              </div>

              <h2 className="text-2xl font-extrabold text-[#002047]">
                Radiance Multispeciality Clinic
              </h2>

              <p className="text-xs text-slate-500 mt-1">
                Clinical Consultations, Pathology Lab & Diagnostic Radiology
              </p>

              <div className="mt-5 p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
                <p className="text-xs font-bold text-blue-900 uppercase tracking-wide mb-1">
                  Clinic Location:
                </p>
                <p className="text-sm font-bold text-[#002047]">
                  Bahir Dar, Kebele 14, Ethiopia
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  Convenient access for families, maternal consultations, and outpatient lab sampling.
                </p>
                <p className="text-xs font-bold text-[#002047] mt-2">
                  “Better Health. Brighter Tomorrow.”
                </p>
              </div>

              <div className="mt-5 space-y-3 text-xs text-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#002047] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#B61F32]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Direct Mobile Lines</span>
                    <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-[#002047]">
                      <a href="tel:+251990084747" className="hover:text-[#B61F32]">+251 990 084 747</a>
                      <span>•</span>
                      <a href="tel:+251985414949" className="hover:text-[#B61F32]">+251 985 414 949</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#B61F32]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Email Inquiries</span>
                    <a href="mailto:info@radianceclinic.com" className="font-semibold text-slate-700 hover:text-[#B61F32]">
                      info@radianceclinic.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Hours</span>
                    <span className="font-medium text-slate-700">Mon – Sat: 8:00 AM – 8:00 PM | Sun: 8:30 AM – 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <a
                href="tel:+251990084747"
                className="flex-1 text-center bg-[#002047] hover:bg-[#092f61] text-white text-xs font-bold py-3 rounded-xl transition-colors shadow-xs"
              >
                Call Bahir Dar
              </a>
              <Link
                href="/book?branch=bahir-dar"
                className="flex-1 text-center bg-[#B61F32] hover:bg-[#911624] text-white text-xs font-bold py-3 rounded-xl transition-colors"
              >
                Book in Bahir Dar
              </Link>
            </div>
          </div>
        </div>

        {/* Message Form & Emergency Guidance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-[#002047] mb-2">Send Us an Inquiry</h3>
            <p className="text-xs text-slate-500 mb-6">
              Our clinical care coordinators typically respond within 1-2 hours during working hours.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-emerald-900 text-base">Inquiry Received</h4>
                <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                  Thank you, {formData.name}. Our patient reception team will contact you at {formData.phone} shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-bold text-emerald-800 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Almaz Bekele"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#B61F32]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="09... or 03..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#B61F32]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Preferred Clinic Center
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#B61F32]"
                    >
                      <option value="adi-dero">3G Diagnostic Imaging (Adi Dero)</option>
                      <option value="bahir-dar">Radiance Multispeciality (Bahir Dar)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Service of Interest
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#B61F32]"
                    >
                      <option value="ultrasound">3G Ultrasound (3D/4D, Doppler)</option>
                      <option value="xray">Digital X-Ray (24 Views)</option>
                      <option value="special">Special Procedure (HSG, IVU, Barium)</option>
                      <option value="ct-mri">CT / MRI Scan Reading</option>
                      <option value="clinic">Doctor Consultation</option>
                      <option value="lab">Laboratory Blood Testing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Message / Questions
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your requisition or preferred date..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#B61F32]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B61F32] hover:bg-[#911624] text-white text-xs font-bold px-6 py-3 rounded-xl transition-all shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Emergency Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#001533] text-white p-6 sm:p-8 rounded-3xl border border-white/10 shadow-lg space-y-4">
              <span className="px-3 py-1 rounded-full bg-red-600 text-white text-[11px] font-bold uppercase tracking-wide">
                24/7 Acute Triage
              </span>
              <h3 className="text-xl font-bold">Emergency Ultrasound & X-Ray</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                For acute abdominal emergencies, suspected testicular torsion, deep vein thrombosis (DVT), acute fractures, or severe respiratory distress, our imaging center operates round-the-clock emergency on-call sonographers.
              </p>

              <div className="pt-2">
                <a
                  href="tel:0342409043"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#B61F32] hover:bg-[#911624] text-white font-bold text-sm py-3 rounded-xl shadow-md transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Emergency Line: 03 42 40 90 43</span>
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <h4 className="text-sm font-bold text-[#002047]">Referring Physician Inquiries</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clinicians wishing to coordinate urgent tele-radiology readings or discuss anomalous ultrasound findings may request a direct transfer to our Senior Consultant Radiologist.
              </p>
              <div className="pt-1 flex items-center gap-2 text-xs font-bold text-[#002047]">
                <Phone className="w-3.5 h-3.5 text-[#B61F32]" />
                <span>+251 990 084 747 / +251 985 414 949</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
