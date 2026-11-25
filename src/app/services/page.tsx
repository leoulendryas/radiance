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
  Filter,
  CheckCircle2,
  Calendar,
  AlertCircle
} from "lucide-react";
import { ALL_SERVICES, ServiceItem } from "@/data/servicesData";
import SectionHeading from "@/components/SectionHeading";

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Services (50+)", icon: Sparkles },
    { id: "ultrasound", label: "3G Ultrasound (27)", icon: Activity },
    { id: "xray", label: "Digital X-Ray (24)", icon: Zap },
    { id: "special-procedure", label: "Special Procedures (5)", icon: Sparkles },
    { id: "ct-mri", label: "CT & MRI Reading", icon: FileCheck },
    { id: "multispeciality", label: "Multispeciality Clinics", icon: Stethoscope },
    { id: "laboratory", label: "Diagnostic Laboratory", icon: FlaskConical },
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
    <div className="min-h-screen bg-slate-50/60 pb-24">
      {/* Page Header */}
      <div className="bg-[#002047] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B61F32]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B61F32] text-white text-xs font-bold uppercase tracking-wider mb-4">
              Comprehensive Medical Catalog
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Diagnostic & Clinical Services
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore our complete suite of 27 ultrasound scans, 24 digital X-rays, fluoroscopic special procedures (HSG, IVU, Barium), CT/MRI scan readings, and multispeciality clinical consultations in Adi Dero and Bahir Dar.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 border border-slate-200">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search scans, organs, or symptoms (e.g. Doppler, HSG, Knee, Chest)..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#B61F32] text-sm text-slate-800 placeholder-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Filter Counts */}
            <div className="text-xs text-slate-500 font-semibold w-full md:w-auto text-right">
              Showing <span className="text-[#B61F32] font-bold">{filteredServices.length}</span> of {ALL_SERVICES.length} total examinations
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-4 border-t border-slate-100 pb-1 scrollbar-none">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    isSelected
                      ? "bg-[#B61F32] text-white shadow-md"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
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
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/services/ultrasound"
            className="p-4 rounded-2xl bg-gradient-to-r from-[#002047] to-[#0d3164] text-white flex items-center justify-between hover:shadow-lg transition-shadow"
          >
            <div>
              <p className="text-[11px] font-bold text-red-300 uppercase">Dedicated Hub</p>
              <h4 className="font-bold text-sm">3G Ultrasound Center</h4>
              <p className="text-xs text-slate-300">27 sonography modalities & 4D scans</p>
            </div>
            <ArrowRight className="w-5 h-5 text-red-400" />
          </Link>

          <Link
            href="/services/digital-xray"
            className="p-4 rounded-2xl bg-gradient-to-r from-[#B61F32] to-[#911624] text-white flex items-center justify-between hover:shadow-lg transition-shadow"
          >
            <div>
              <p className="text-[11px] font-bold text-red-200 uppercase">Specialized Fluoroscopy</p>
              <h4 className="font-bold text-sm">Digital X-Ray & HSG Unit</h4>
              <p className="text-xs text-red-100">24 skeletal views + 5 contrast studies</p>
            </div>
            <ArrowRight className="w-5 h-5 text-white" />
          </Link>

          <Link
            href="/services/ct-mri-consultation"
            className="p-4 rounded-2xl bg-gradient-to-r from-slate-800 to-[#002047] text-white flex items-center justify-between hover:shadow-lg transition-shadow"
          >
            <div>
              <p className="text-[11px] font-bold text-emerald-300 uppercase">Subspecialty Reading</p>
              <h4 className="font-bold text-sm">CT & MRI Second Opinions</h4>
              <p className="text-xs text-slate-300">Senior consultant radiologist reviews</p>
            </div>
            <ArrowRight className="w-5 h-5 text-emerald-400" />
          </Link>
        </div>

        {/* Services List / Grid */}
        <div className="mt-10">
          {filteredServices.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
              <AlertCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#002047]">No matching services found</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                We couldn&apos;t find an examination matching &quot;{searchQuery}&quot;. Please check your spelling or contact our clinic helpline for non-specified examinations.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-4 px-4 py-2 bg-[#B61F32] text-white text-xs font-bold rounded-xl"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Badge & Category */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#002047]/5 text-[#002047] uppercase tracking-wide">
                        {service.category.replace("-", " ")}
                      </span>
                      {service.tag && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-[#B61F32]">
                          {service.tag}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-[#002047] group-hover:text-[#B61F32] transition-colors leading-snug">
                      {service.name}
                    </h3>

                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Indications bullets */}
                    {service.indications && service.indications.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Common Indications:
                        </p>
                        <ul className="space-y-1">
                          {service.indications.slice(0, 3).map((ind, i) => (
                            <li key={i} className="text-xs text-slate-500 flex items-start gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-[#B61F32] mt-1.5 shrink-0" />
                              <span className="line-clamp-1">{ind}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Preparation requirement */}
                    <div className="mt-3.5 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <p className="text-[10px] font-bold text-[#002047] uppercase">Patient Preparation:</p>
                      <p className="text-xs text-slate-600 mt-0.5 line-clamp-2">
                        {service.preparation}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{service.durationMinutes} mins</span>
                    </span>

                    <Link
                      href={`/book?service=${service.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#B61F32] hover:bg-[#911624] text-white px-3.5 py-1.5 rounded-lg transition-colors shadow-xs"
                    >
                      <Calendar className="w-3.5 h-3.5" />
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
