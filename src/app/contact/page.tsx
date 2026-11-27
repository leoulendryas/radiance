"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  Clock,
  HeartPulse,
  Send,
  CheckCircle2,
  Building2
} from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicInfo";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "adi-dero",
    serviceInterest: "ultrasound",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Failed to send contact inquiry:", err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070D18] pb-24 text-slate-800 dark:text-slate-100 transition-colors">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#001229] via-[#002047] to-[#0A2540] text-white py-14 sm:py-18 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B61F32] text-white text-xs font-bold uppercase tracking-wider">
              {t.contactPage.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {t.contactPage.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {t.contactPage.description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 space-y-12">
        {/* Mobile swipe hint */}
        <div className="lg:hidden flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 -mb-9 px-0.5">
          <span className="font-semibold uppercase tracking-wider">{t.contactPage.title}</span>
          <span className="text-[#B61F32] dark:text-red-400 font-medium">{t.contactPage.swipeHint}</span>
        </div>

        {/* Dual Location Detailed Cards */}
        <div className="flex lg:grid lg:grid-cols-2 gap-4 lg:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0 pb-3 lg:pb-0 pt-2 lg:pt-0">
          {/* Location 1: Adi Dero 3G */}
          <div className="w-[86vw] max-w-[360px] lg:w-auto shrink-0 snap-start bg-white dark:bg-[#0A1324] rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B61F32] text-white text-xs font-bold tracking-wide mb-3">
                <HeartPulse className="w-3.5 h-3.5" />
                <span>{t.branches.adiDeroTitle}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-[#002047] dark:text-white">
                {t.branches.adiDeroTitle}
              </h2>

              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {t.branches.adiDeroTagline}
              </p>

              {/* Localized directions box */}
              <div className="mt-4 p-4 rounded-xl bg-red-50/60 dark:bg-red-950/20 border border-red-200/70 dark:border-red-900/40">
                <p className="text-[11px] font-bold text-[#B61F32] uppercase tracking-wide mb-1">
                  {t.common.addressLabel}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-[#002047] dark:text-slate-200 leading-relaxed">
                  {t.branches.adiDeroAddress}
                </p>
                <p className="text-[11px] font-bold text-[#B61F32] mt-2">
                  {t.branches.adiDeroMotto}
                </p>
              </div>

              <div className="mt-5 space-y-3 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-950/40 text-[#B61F32] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">{t.contactPage.primaryPhoneLabel}</span>
                    <div className="flex flex-wrap items-center gap-2">
                      <a href={`tel:${CLINIC_INFO.primaryPhone.replace(/\s+/g, "")}`} className="text-sm font-bold text-[#002047] dark:text-white hover:text-[#B61F32]">
                        {CLINIC_INFO.primaryPhone}
                      </a>
                      <span className="text-slate-400">•</span>
                      <a href={`tel:${CLINIC_INFO.alternatePhone1.replace(/\s+/g, "")}`} className="text-sm font-bold text-[#002047] dark:text-white hover:text-[#B61F32]">
                        {CLINIC_INFO.alternatePhone1}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">{t.contactPage.hoursLabel}</span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">{t.branches.adiDeroHours}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${CLINIC_INFO.primaryPhone.replace(/\s+/g, "")}`}
                className="flex-1 text-center bg-[#B61F32] hover:bg-[#911624] text-white text-xs font-semibold py-2.5 rounded-lg transition-colors shadow-xs"
              >
                {t.contactPage.callBranch1}
              </a>
              <Link
                href="/book?branch=adi-dero"
                className="flex-1 text-center bg-[#002047] dark:bg-slate-800 hover:bg-[#092f61] text-white text-xs font-semibold py-2.5 rounded-lg transition-colors"
              >
                {t.contactPage.bookBranch1}
              </Link>
            </div>
          </div>

          {/* Location 2: Bahir Dar Radiance */}
          <div className="w-[86vw] max-w-[360px] lg:w-auto shrink-0 snap-start bg-white dark:bg-[#0A1324] rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#002047] dark:bg-slate-800 text-white text-xs font-bold tracking-wide mb-3">
                <Building2 className="w-3.5 h-3.5 text-red-400" />
                <span>{t.branches.bahirDarTitle}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-[#002047] dark:text-white">
                {t.branches.bahirDarTitle}
              </h2>

              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {t.branches.bahirDarTagline}
              </p>

              <div className="mt-4 p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/70 dark:border-blue-900/40">
                <p className="text-[11px] font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wide mb-1">
                  {t.common.addressLabel}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-[#002047] dark:text-slate-200 leading-relaxed">
                  {t.branches.bahirDarAddress}
                </p>
                <p className="text-[11px] font-bold text-[#002047] dark:text-slate-300 mt-2">
                  {t.branches.bahirDarMotto}
                </p>
              </div>

              <div className="mt-5 space-y-3 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-[#002047] dark:text-blue-300 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#B61F32]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">{t.contactPage.mobileLinesLabel}</span>
                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-bold text-[#002047] dark:text-white">
                      <a href={`tel:${CLINIC_INFO.primaryPhone.replace(/\s+/g, "")}`} className="hover:text-[#B61F32]">{CLINIC_INFO.primaryPhone}</a>
                      <span className="text-slate-400">•</span>
                      <a href={`tel:${CLINIC_INFO.alternatePhone1.replace(/\s+/g, "")}`} className="hover:text-[#B61F32]">{CLINIC_INFO.alternatePhone1}</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#B61F32]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">{t.contactPage.emailLabel}</span>
                    <a href={`mailto:${CLINIC_INFO.email}`} className="font-semibold text-slate-700 dark:text-slate-300 hover:text-[#B61F32]">
                      {CLINIC_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">{t.contactPage.hoursLabel}</span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">{t.branches.bahirDarHours}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${CLINIC_INFO.primaryPhone.replace(/\s+/g, "")}`}
                className="flex-1 text-center bg-[#002047] dark:bg-slate-800 hover:bg-[#092f61] text-white text-xs font-semibold py-2.5 rounded-lg transition-colors shadow-xs"
              >
                {t.contactPage.callBranch2}
              </a>
              <Link
                href="/book?branch=bahir-dar"
                className="flex-1 text-center bg-[#B61F32] hover:bg-[#911624] text-white text-xs font-semibold py-2.5 rounded-lg transition-colors"
              >
                {t.contactPage.bookBranch2}
              </Link>
            </div>
          </div>
        </div>

        {/* Message Form & Emergency Guidance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#0A1324] rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
            <h3 className="text-lg sm:text-xl font-bold text-[#002047] dark:text-white mb-1">{t.contactPage.formTitle}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
              {t.contactPage.formDesc}
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-emerald-900 dark:text-emerald-200 text-sm">{t.contactPage.successTitle}</h4>
                <p className="text-xs text-emerald-700 dark:text-emerald-300 max-w-sm mx-auto leading-relaxed">
                  {t.contactPage.successDesc(formData.name, formData.phone)}
                </p>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/251990084747?text=${encodeURIComponent(
                      `Hello 3G Diagnostic Imaging & Radiance Clinic!\n` +
                      `Name: ${formData.name}\n` +
                      `Phone: ${formData.phone}\n` +
                      `Location: ${formData.location}\n` +
                      `Inquiry about: ${formData.serviceInterest}\n` +
                      `Message: ${formData.message}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold px-4 py-2 rounded-lg shadow-xs transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{t.contactPage.alsoWhatsAppBtn}</span>
                  </a>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="block mx-auto text-xs font-semibold text-emerald-800 dark:text-emerald-300 underline pt-1"
                >
                  {t.contactPage.sendAnotherBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {t.contactPage.fullNameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Almaz Bekele"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0E1A30] text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B61F32]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {t.contactPage.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+251 9..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0E1A30] text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B61F32]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {t.contactPage.clinicLabel}
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0E1A30] text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B61F32]"
                    >
                      <option value="adi-dero">{t.branches.adiDeroTitle}</option>
                      <option value="bahir-dar">{t.branches.bahirDarTitle}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {t.contactPage.serviceLabel}
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0E1A30] text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B61F32]"
                    >
                      <option value="ultrasound">{t.nav.ultrasound}</option>
                      <option value="xray">{t.nav.xray}</option>
                      <option value="special">Special Fluoroscopy (HSG, IVU)</option>
                      <option value="ct-mri">{t.nav.ctMri}</option>
                      <option value="clinic">{t.nav.multispeciality}</option>
                      <option value="lab">Diagnostic Lab</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t.contactPage.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your requisition or preferred date..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0E1A30] text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B61F32]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B61F32] hover:bg-[#911624] text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-all shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t.contactPage.sendBtn}</span>
                </button>
              </form>
            )}
          </div>

          {/* Emergency Information */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-[#001533] text-white p-6 rounded-2xl border border-white/10 shadow-md space-y-3">
              <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-wide">
                {t.contactPage.emergencyBadge}
              </span>
              <h3 className="text-lg font-bold">{t.contactPage.emergencyTitle}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.contactPage.emergencyDesc}
              </p>

              <div className="pt-2">
                <a
                  href={`tel:${CLINIC_INFO.primaryPhone.replace(/\s+/g, "")}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#B61F32] hover:bg-[#911624] text-white font-semibold text-xs sm:text-sm py-2.5 rounded-lg shadow-xs transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t.contactPage.callEmergencyBtn}: {CLINIC_INFO.primaryPhone}</span>
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-[#0A1324] p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-2.5">
              <h4 className="text-xs sm:text-sm font-bold text-[#002047] dark:text-white">{t.contactPage.referringTitle}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.contactPage.referringDesc}
              </p>
              <div className="pt-1 flex items-center gap-2 text-xs font-bold text-[#002047] dark:text-slate-200">
                <Phone className="w-3.5 h-3.5 text-[#B61F32]" />
                <span>{CLINIC_INFO.primaryPhone} / {CLINIC_INFO.alternatePhone1}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
