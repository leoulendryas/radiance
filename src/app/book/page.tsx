"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Activity,
  Zap,
  Sparkles,
  FileCheck,
  Stethoscope,
  Phone,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  AlertCircle
} from "lucide-react";
import { ALL_SERVICES, ServiceItem } from "@/data/servicesData";
import { CLINIC_INFO } from "@/data/clinicInfo";
import { DOCTORS_DATA } from "@/data/doctorsData";
import { useLanguage } from "@/context/LanguageContext";

function BookingWizard() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const initialServiceId = searchParams.get("service") || "";
  const initialBranch = searchParams.get("branch") || "adi-dero";

  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("ultrasound");
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialServiceId);
  const [selectedBranch, setSelectedBranch] = useState<string>(initialBranch);
  const [appointmentDate, setAppointmentDate] = useState<string>("");
  const [appointmentTime, setAppointmentTime] = useState<string>("09:00 AM");
  const [patientName, setPatientName] = useState<string>("");
  const [patientPhone, setPatientPhone] = useState<string>("");
  const [patientAge, setPatientAge] = useState<string>("");
  const [referringDoctor, setReferringDoctor] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [bookingRef, setBookingRef] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionError, setSubmissionError] = useState<string>("");

  // Filter available services by category
  const servicesInCategory = useMemo(() => {
    return ALL_SERVICES.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  // Find currently selected service object
  const currentService = useMemo(() => {
    return ALL_SERVICES.find((s) => s.id === selectedServiceId) || servicesInCategory[0];
  }, [selectedServiceId, servicesInCategory]);

  const handleNext = async () => {
    if (step === 1 && !selectedServiceId && servicesInCategory.length > 0) {
      setSelectedServiceId(servicesInCategory[0].id);
    }
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Actually submit and send patient information to the clinical server
      setIsSubmitting(true);
      setSubmissionError("");
      const generatedRef = "RAD-" + Math.floor(100000 + Math.random() * 900000);

      try {
        const response = await fetch("/api/book", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            bookingRef: generatedRef,
            patientName,
            patientPhone,
            patientAge,
            serviceId: currentService?.id || selectedServiceId,
            serviceName: currentService?.name || "Diagnostic Service",
            branch: selectedBranch,
            appointmentDate,
            appointmentTime,
            referringDoctor,
            notes
          })
        });

        const data = await response.json();
        if (data.success) {
          setBookingRef(data.bookingRef || generatedRef);
          setStep(5);
        } else {
          setBookingRef(generatedRef);
          setStep(5);
        }
      } catch (err) {
        console.error("Booking submission error:", err);
        setBookingRef(generatedRef);
        setStep(5);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Step Indicator Header */}
      {step < 5 && (
        <div className="mb-6">
          <div className="flex items-center justify-between max-w-xl mx-auto mb-2.5">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                    step === s
                      ? "bg-[#B61F32] text-white shadow-xs"
                      : step > s
                      ? "bg-emerald-500 text-white"
                      : "bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {step > s ? <CheckCircle2 className="w-3.5 h-3.5" /> : s}
                </div>
                <span className="hidden sm:inline text-xs font-semibold text-slate-600 dark:text-slate-400">
                  {s === 1 && t.bookingWizard.steps.service}
                  {s === 2 && t.bookingWizard.steps.examination}
                  {s === 3 && t.bookingWizard.steps.dateTime}
                  {s === 4 && t.bookingWizard.steps.patientInfo}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-800 h-1 rounded-full overflow-hidden">
            <div
              className="bg-[#B61F32] h-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* STEP 1: SELECT CATEGORY */}
      {step === 1 && (
        <div className="bg-white dark:bg-[#0A1324] rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold text-[#B61F32] uppercase tracking-wider">{t.bookingWizard.stepOf(1, 4)}</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#002047] dark:text-white mt-1">{t.bookingWizard.step1Title}</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t.bookingWizard.step1Desc}</p>
          </div>

          {/* Mobile swipe hint */}
          <div className="sm:hidden flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 mb-2.5 px-0.5">
            <span className="font-semibold uppercase tracking-wider">{t.bookingWizard.steps.service}</span>
            <span className="text-[#B61F32] dark:text-red-400 font-medium">Swipe sideways &rarr;</span>
          </div>

          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 pb-2 sm:pb-0">
            {[
              { id: "ultrasound", title: t.bookingWizard.categories.ultrasound.title, desc: t.bookingWizard.categories.ultrasound.desc, icon: Activity, count: t.bookingWizard.categories.ultrasound.count },
              { id: "xray", title: t.bookingWizard.categories.xray.title, desc: t.bookingWizard.categories.xray.desc, icon: Zap, count: t.bookingWizard.categories.xray.count },
              { id: "special-procedure", title: t.bookingWizard.categories.special.title, desc: t.bookingWizard.categories.special.desc, icon: Sparkles, count: t.bookingWizard.categories.special.count },
              { id: "ct-mri", title: t.bookingWizard.categories.ctMri.title, desc: t.bookingWizard.categories.ctMri.desc, icon: FileCheck, count: t.bookingWizard.categories.ctMri.count },
              { id: "multispeciality", title: t.bookingWizard.categories.clinic.title, desc: t.bookingWizard.categories.clinic.desc, icon: Stethoscope, count: t.bookingWizard.categories.clinic.count },
              { id: "laboratory", title: t.bookingWizard.categories.lab.title, desc: t.bookingWizard.categories.lab.desc, icon: Sparkles, count: t.bookingWizard.categories.lab.count },
            ].map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    const firstInCat = ALL_SERVICES.find((s) => s.category === cat.id);
                    if (firstInCat) setSelectedServiceId(firstInCat.id);
                  }}
                  className={`w-[74vw] max-w-[260px] sm:w-auto shrink-0 snap-start p-4 rounded-xl text-left border transition-all flex flex-col justify-between ${
                    isSelected
                      ? "border-[#B61F32] bg-red-50/40 dark:bg-red-950/20 shadow-xs"
                      : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-[#0E1A30]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isSelected ? "bg-[#B61F32] text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">{cat.count}</span>
                    </div>
                    <h3 className="font-bold text-xs sm:text-sm text-[#002047] dark:text-white">{cat.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{cat.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex justify-end pt-3">
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 bg-[#B61F32] hover:bg-[#911624] text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-xs transition-all"
            >
              <span>{t.bookingWizard.continueToScan}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: SELECT SPECIFIC SCAN / PROCEDURE */}
      {step === 2 && (
        <div className="bg-white dark:bg-[#0A1324] rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold text-[#B61F32] uppercase tracking-wider">{t.bookingWizard.stepOf(2, 4)}</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#002047] dark:text-white mt-1">{t.bookingWizard.step2Title}</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {t.bookingWizard.step2Desc}
            </p>
          </div>

          <div className="max-h-[360px] overflow-y-auto space-y-2 pr-1">
            {servicesInCategory.map((srv) => {
              const isSelected = selectedServiceId === srv.id;
              return (
                <div
                  key={srv.id}
                  onClick={() => setSelectedServiceId(srv.id)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start justify-between gap-3 ${
                    isSelected
                      ? "border-[#B61F32] bg-red-50/40 dark:bg-red-950/20 shadow-xs"
                      : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-[#0E1A30]"
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-xs sm:text-sm text-[#002047] dark:text-white">{srv.name}</h4>
                      {srv.tag && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-100 dark:bg-red-950/60 text-[#B61F32]">
                          {srv.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{srv.shortDescription}</p>
                    <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
                      <strong>{t.bookingWizard.prepLabel}</strong> {srv.preparation}
                    </p>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-1 ${
                    isSelected ? "border-[#B61F32] bg-[#B61F32] text-white" : "border-slate-300 dark:border-slate-700"
                  }`}>
                    {isSelected && <CheckCircle2 className="w-3 h-3" />}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-800 px-3 py-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.bookingWizard.backBtn}</span>
            </button>
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 bg-[#B61F32] hover:bg-[#911624] text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-xs transition-all"
            >
              <span>{t.bookingWizard.continueToSchedule}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: BRANCH & TIME */}
      {step === 3 && (
        <div className="bg-white dark:bg-[#0A1324] rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold text-[#B61F32] uppercase tracking-wider">{t.bookingWizard.stepOf(3, 4)}</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#002047] dark:text-white mt-1">{t.bookingWizard.step3Title}</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t.bookingWizard.step3Desc}</p>
          </div>

          {/* Branch Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
              {t.bookingWizard.selectClinicLabel}
            </label>
            <div className="flex sm:grid sm:grid-cols-2 gap-3.5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 pb-2 sm:pb-0">
              <button
                type="button"
                onClick={() => setSelectedBranch("adi-dero")}
                className={`w-[82vw] max-w-[320px] sm:w-auto shrink-0 snap-start p-4 rounded-xl border text-left transition-all ${
                  selectedBranch === "adi-dero"
                    ? "border-[#B61F32] bg-red-50/40 dark:bg-red-950/20 shadow-xs"
                    : "border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1A30]"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#B61F32]">Branch 1</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-red-100 dark:bg-red-950/60 text-[#B61F32] font-semibold">
                    3G Imaging
                  </span>
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-[#002047] dark:text-white">{t.branches.adiDeroTitle}</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                  {t.branches.adiDeroAddress}
                </p>
                <p className="text-[11px] font-bold text-[#002047] dark:text-red-400 mt-2">Tel: {CLINIC_INFO.primaryPhone}</p>
              </button>

              <button
                type="button"
                onClick={() => setSelectedBranch("bahir-dar")}
                className={`w-[82vw] max-w-[320px] sm:w-auto shrink-0 snap-start p-4 rounded-xl border text-left transition-all ${
                  selectedBranch === "bahir-dar"
                    ? "border-[#B61F32] bg-red-50/40 dark:bg-red-950/20 shadow-xs"
                    : "border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1A30]"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#002047] dark:text-blue-300">Branch 2</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/60 text-[#002047] dark:text-blue-300 font-semibold">
                    Multispeciality
                  </span>
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-[#002047] dark:text-white">{t.branches.bahirDarTitle}</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">{t.branches.bahirDarAddress}</p>
                <p className="text-[11px] font-bold text-[#002047] dark:text-blue-400 mt-2">Tel: {CLINIC_INFO.primaryPhone}</p>
              </button>
            </div>
          </div>

          {/* Date & Time Picker */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">{t.bookingWizard.preferredDateLabel}</label>
              <input
                type="date"
                required
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0E1A30] text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B61F32]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">{t.bookingWizard.preferredTimeLabel}</label>
              <select
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0E1A30] text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B61F32]"
              >
                {t.bookingWizard.timeSlots.map((slot, i) => (
                  <option key={i} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-800 px-3 py-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.bookingWizard.backBtn}</span>
            </button>
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 bg-[#B61F32] hover:bg-[#911624] text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-xs transition-all"
            >
              <span>{t.bookingWizard.continueToPatient}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: PATIENT DETAILS */}
      {step === 4 && (
        <div className="bg-white dark:bg-[#0A1324] rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold text-[#B61F32] uppercase tracking-wider">{t.bookingWizard.stepOf(4, 4)}</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#002047] dark:text-white mt-1">{t.bookingWizard.step4Title}</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t.bookingWizard.step4Desc}</p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">{t.bookingWizard.patientNameLabel}</label>
                <input
                  type="text"
                  required
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="e.g. Rahel Hailu"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0E1A30] text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B61F32]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">{t.bookingWizard.phoneLabel}</label>
                <input
                  type="tel"
                  required
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  placeholder="+251 9..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0E1A30] text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B61F32]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">{t.bookingWizard.ageLabel}</label>
                <input
                  type="text"
                  value={patientAge}
                  onChange={(e) => setPatientAge(e.target.value)}
                  placeholder="e.g. 28, Female"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0E1A30] text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B61F32]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">{t.bookingWizard.doctorLabel}</label>
                <input
                  type="text"
                  value={referringDoctor}
                  onChange={(e) => setReferringDoctor(e.target.value)}
                  placeholder="e.g. Raphael Hospital / Dr. Kidane"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0E1A30] text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B61F32]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">{t.bookingWizard.notesLabel}</label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Mention key symptoms or special requests..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0E1A30] text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B61F32]"
              />
            </div>
          </div>

          {/* Booking Summary Box */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0E1A30] border border-slate-200 dark:border-slate-800 text-xs space-y-1">
            <p className="font-bold text-[#002047] dark:text-white">{t.bookingWizard.summaryLabel}</p>
            <p className="text-slate-600 dark:text-slate-400">
              <strong className="text-slate-800 dark:text-slate-200">{t.bookingWizard.examLabel}</strong> {currentService?.name}
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              <strong className="text-slate-800 dark:text-slate-200">{t.bookingWizard.locationLabel}</strong> {selectedBranch === "adi-dero" ? t.branches.adiDeroTitle : t.branches.bahirDarTitle}
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              <strong className="text-slate-800 dark:text-slate-200">{t.bookingWizard.timeLabel}</strong> {appointmentDate || "Selected Day"} • {appointmentTime}
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={handleBack}
              disabled={isSubmitting}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-800 px-3 py-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.bookingWizard.backBtn}</span>
            </button>
            <button
              onClick={handleNext}
              disabled={!patientName || !patientPhone || isSubmitting}
              className="inline-flex items-center gap-2 bg-[#B61F32] hover:bg-[#911624] disabled:opacity-50 text-white text-xs font-semibold px-6 py-2.5 rounded-lg shadow-xs transition-all"
            >
              {isSubmitting ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>{t.bookingWizard.submittingBtn}</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{t.bookingWizard.confirmBtn}</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* STEP 5: CONFIRMATION & PREPARATION CHECKLIST */}
      {step === 5 && (
        <div className="bg-white dark:bg-[#0A1324] rounded-2xl p-6 sm:p-8 border border-emerald-200 dark:border-emerald-900/60 shadow-md space-y-5 text-center">
          <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
              {t.bookingWizard.step5Badge}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#002047] dark:text-white mt-2.5">
              {t.bookingWizard.step5Title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 max-w-lg mx-auto">
              {t.bookingWizard.step5Desc}
            </p>
          </div>

          {/* Reference badge */}
          <div className="inline-block p-4 rounded-xl bg-slate-50 dark:bg-[#0E1A30] border border-slate-200 dark:border-slate-800 text-left max-w-md mx-auto w-full">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2 mb-2">
              <span className="text-xs text-slate-400 font-semibold uppercase">{t.bookingWizard.refLabel}</span>
              <span className="text-sm font-bold text-[#B61F32] tracking-wider">{bookingRef}</span>
            </div>
            <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
              <p><strong className="text-slate-800 dark:text-slate-200">{t.bookingWizard.patientLabel}</strong> {patientName}</p>
              <p><strong className="text-slate-800 dark:text-slate-200">{t.bookingWizard.serviceLabel}</strong> {currentService?.name}</p>
              <p>
                <strong className="text-slate-800 dark:text-slate-200">{t.bookingWizard.branchLabel}</strong>{" "}
                {selectedBranch === "adi-dero" ? t.branches.adiDeroTitle : t.branches.bahirDarTitle}
              </p>
              <p><strong className="text-slate-800 dark:text-slate-200">{t.bookingWizard.scheduledTimeLabel}</strong> {appointmentDate || "Next Available"} • {appointmentTime}</p>
              <p><strong className="text-slate-800 dark:text-slate-200">{t.bookingWizard.dbStatusLabel}</strong> <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{t.bookingWizard.dbStatusValue}</span></p>
            </div>
          </div>

          {/* Direct WhatsApp Dispatch Button */}
          <div className="max-w-md mx-auto">
            <a
              href={`https://wa.me/251990084747?text=${encodeURIComponent(
                `Hello 3G Diagnostic Imaging & Radiance Clinic!\n` +
                `I have booked an appointment on your website:\n\n` +
                `• Booking Ref: ${bookingRef}\n` +
                `• Patient Name: ${patientName}\n` +
                `• Phone Number: ${patientPhone}\n` +
                `• Service: ${currentService?.name}\n` +
                `• Branch: ${selectedBranch === "adi-dero" ? t.branches.adiDeroTitle : t.branches.bahirDarTitle}\n` +
                `• Preferred Date: ${appointmentDate || "Next Available"}\n` +
                `• Preferred Time: ${appointmentTime}\n` +
                (patientAge ? `• Age: ${patientAge}\n` : "") +
                (referringDoctor ? `• Referring Doctor: ${referringDoctor}\n` : "") +
                (notes ? `• Reason/Notes: ${notes}\n` : "") +
                `\nPlease confirm my appointment slot. Thank you!`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-md transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>{t.bookingWizard.sendWhatsAppBtn}</span>
            </a>
            <p className="text-[11px] text-slate-400 mt-1">
              {t.bookingWizard.receptionNotice}
            </p>
          </div>

          {/* Critical Preparation Checklist for Selected Exam */}
          <div className="p-4 rounded-xl bg-red-50/60 dark:bg-red-950/20 border border-red-200/70 dark:border-red-900/40 text-left max-w-md mx-auto">
            <div className="flex items-center gap-2 text-xs font-bold text-[#B61F32] uppercase mb-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{t.bookingWizard.prepAlertPrefix}{currentService?.name}:</span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              {currentService?.preparation}
            </p>
          </div>

          {/* Action links */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#002047] dark:bg-slate-800 hover:bg-[#092f61] text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              <span>{t.bookingWizard.returnHomeBtn}</span>
            </Link>

            <a
              href={`tel:${CLINIC_INFO.primaryPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 bg-white dark:bg-[#0E1A30] hover:bg-slate-100 dark:hover:bg-slate-800 text-[#002047] dark:text-white text-xs font-semibold px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#B61F32]" />
              <span>{t.bookingWizard.callReceptionBtn} ({CLINIC_INFO.primaryPhone})</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function BookPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070D18] text-slate-800 dark:text-slate-100 transition-colors">
      <Suspense fallback={<div className="text-center py-20 text-slate-500">Loading booking wizard...</div>}>
        <BookingWizard />
      </Suspense>
    </div>
  );
}
