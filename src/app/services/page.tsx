"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  Activity,
  Zap,
  Sparkles,
  FileCheck,
  Stethoscope,
  FlaskConical,
  Clock,
  ArrowRight,
  Calendar,
  AlertCircle
} from "lucide-react";
import { ALL_SERVICES } from "@/data/servicesData";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { t } = useLanguage();

  const categories = [
    { id: "all", label: "All Services (50+)", icon: Sparkles },
    { id: "ultrasound", label: "3G Ultrasound (27)", icon: Activity },
    { id: "xray", label: "Digital X-Ray (24)", icon: Zap },
    { id: "special-procedure", label: "Special Procedures (5)", icon: Sparkles },
    { id: "ct-mri", label: "CT & MRI Reading", icon: FileCheck },
    { id: "multispeciality", label: "Specialty Clinics", icon: Stethoscope },
    { id: "laboratory", label: "Diagnostic Lab", icon: FlaskConical },
  ];

  const filteredServices = useMemo(() => {
    return ALL_SERVICES.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.shortDescription.toLowerCase().includes(q) ||
        item.fullDescription.toLowerCase().includes(q) ||
        item.indications.some((ind) => ind.toLowerCase().includes(q)) ||
        item.preparation.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#FBFCFE] dark:bg-[#050B14] pb-24 transition-colors">
      {/* Page Header */}
      <div className="bg-[#00142E] dark:bg-[#030812] text-white py-12 sm:py-16 border-b border-white/5 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-2.5 py-1 rounded-md bg-[#B61F32] text-white text-[11px] font-semibold uppercase tracking-wider">
              Diagnostic & Clinical Directory
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Medical & Diagnostic Services
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Explore our complete directory of 27 ultrasound modalities, 24 digital X-rays, specialized contrast studies (HSG, IVU, Barium), CT/MRI readings, and clinical consultations.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Search & Filter Bar */}
        <div className="bg-white dark:bg-[#0A1324] rounded-2xl shadow-xs p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 transition-colors">
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search scans, organs, or symptoms (Doppler, HSG, Knee, Chest)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 focus:outline-none focus:ring-1 focus:ring-[#B61F32] text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-200/60 dark:bg-slate-800 px-1.5 py-0.5 rounded"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium w-full md:w-auto text-right">
              Showing <span className="text-[#B61F32] dark:text-red-400 font-bold">{filteredServices.length}</span> of {ALL_SERVICES.length} examinations
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-3.5 mt-3.5 border-t border-slate-100 dark:border-slate-800/60 pb-1 scrollbar-none">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    isSelected
                      ? "bg-[#B61F32] text-white shadow-xs"
                      : "bg-slate-100/80 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:bg-slate-200/70 dark:hover:bg-slate-800"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Specialized Hub Banners */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/services/ultrasound"
            className="p-4 rounded-xl bg-white dark:bg-[#0A1324] border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex items-center justify-between group"
          >
            <div>
              <span className="text-[10px] font-bold text-[#B61F32] dark:text-red-400 uppercase tracking-wider block">Specialized Center</span>
              <h4 className="font-bold text-sm text-[#002047] dark:text-white group-hover:text-[#B61F32] dark:group-hover:text-red-400 transition-colors">3G Ultrasound Hub</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">All 27 sonography modalities</p>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#B61F32] transition-colors" />
          </Link>

          <Link
            href="/services/digital-xray"
            className="p-4 rounded-xl bg-white dark:bg-[#0A1324] border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex items-center justify-between group"
          >
            <div>
              <span className="text-[10px] font-bold text-[#B61F32] dark:text-red-400 uppercase tracking-wider block">Fluoroscopy & Radiography</span>
              <h4 className="font-bold text-sm text-[#002047] dark:text-white group-hover:text-[#B61F32] dark:group-hover:text-red-400 transition-colors">Digital X-Ray & HSG</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">24 skeletal views + 5 contrast studies</p>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#B61F32] transition-colors" />
          </Link>

          <Link
            href="/services/ct-mri-consultation"
            className="p-4 rounded-xl bg-white dark:bg-[#0A1324] border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex items-center justify-between group"
          >
            <div>
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">Subspecialty Consult</span>
              <h4 className="font-bold text-sm text-[#002047] dark:text-white group-hover:text-emerald-600 transition-colors">CT & MRI Second Opinions</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Consultant radiologist reviews</p>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="mt-8">
          {filteredServices.length === 0 ? (
            <div className="text-center py-14 bg-white dark:bg-[#0A1324] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-8">
              <AlertCircle className="w-10 h-10 text-slate-400 mx-auto mb-2.5" />
              <h3 className="text-base font-bold text-[#002047] dark:text-white">No matching examinations found</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
                No examination matches &quot;{searchQuery}&quot;. Please check your keywords or contact our clinical desk.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-3.5 px-3.5 py-1.5 bg-[#B61F32] text-white text-xs font-semibold rounded-lg"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white dark:bg-[#0A1324] rounded-2xl border border-slate-200/80 dark:border-slate-800/80 p-5 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                        {service.category.replace("-", " ")}
                      </span>
                      {service.tag && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-red-50 dark:bg-red-950/40 text-[#B61F32] dark:text-red-400">
                          {service.tag}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-[#002047] dark:text-white leading-snug">
                      {service.name}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    <div className="mt-3.5 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/60">
                      <p className="text-[10px] font-bold text-[#002047] dark:text-slate-300 uppercase">Preparation:</p>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 line-clamp-2">
                        {service.preparation}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{service.durationMinutes} min</span>
                    </span>

                    <Link
                      href={`/book?service=${service.id}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold bg-[#B61F32] hover:bg-[#8F1726] text-white px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <Calendar className="w-3 h-3" />
                      <span>Book Exam</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
