"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  CheckCircle2,
  RefreshCw,
  Search,
  Filter,
  User,
  Stethoscope,
  ArrowLeft,
  ExternalLink
} from "lucide-react";
import { AppointmentRecord } from "@/app/api/book/route";
import { CLINIC_INFO } from "@/data/clinicInfo";

export default function AdminAppointmentsPage() {
  const [appointments, setAppointments] = useState<AppointmentRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterBranch, setFilterBranch] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/book");
      const data = await res.json();
      if (data.success && Array.isArray(data.appointments)) {
        setAppointments(data.appointments);
      }
    } catch (err) {
      console.error("Failed to load appointments:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const filtered = appointments.filter((apt) => {
    const matchesBranch = filterBranch === "all" || apt.branch === filterBranch;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      apt.patientName.toLowerCase().includes(q) ||
      apt.patientPhone.includes(q) ||
      apt.bookingRef.toLowerCase().includes(q) ||
      apt.serviceName.toLowerCase().includes(q);
    return matchesBranch && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070D18] py-8 sm:py-12 text-slate-800 dark:text-slate-100 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 mb-2 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Public Site</span>
            </Link>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#002047] dark:text-white">
              Clinical Appointments Registry
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Live database of patient bookings received across Adi Dero & Bahir Dar centers.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchAppointments}
              className="inline-flex items-center gap-1.5 bg-white dark:bg-[#0A1324] border border-slate-200 dark:border-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-200 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all shadow-xs"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin text-[#B61F32]" : ""}`} />
              <span>Refresh</span>
            </button>
            <Link
              href="/book"
              className="inline-flex items-center gap-1.5 bg-[#B61F32] hover:bg-[#8F1726] text-white px-4 py-2 rounded-xl text-xs font-semibold transition-all shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>New Booking</span>
            </Link>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white dark:bg-[#0A1324] rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-xs mb-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by patient, phone, or Ref #..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B61F32]"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
            <span className="text-xs font-semibold text-slate-400 shrink-0">Branch:</span>
            <button
              onClick={() => setFilterBranch("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                filterBranch === "all"
                  ? "bg-[#002047] dark:bg-slate-700 text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              }`}
            >
              All Hubs ({appointments.length})
            </button>
            <button
              onClick={() => setFilterBranch("adi-dero")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                filterBranch === "adi-dero"
                  ? "bg-[#B61F32] text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              }`}
            >
              Adi Dero
            </button>
            <button
              onClick={() => setFilterBranch("bahir-dar")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                filterBranch === "bahir-dar"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              }`}
            >
              Bahir Dar
            </button>
          </div>
        </div>

        {/* Appointments List */}
        {loading ? (
          <div className="py-20 text-center text-xs text-slate-400">
            <RefreshCw className="w-6 h-6 animate-spin mx-auto text-[#B61F32] mb-2" />
            <p>Loading clinical bookings...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="bg-white dark:bg-[#0A1324] rounded-2xl p-12 text-center border border-slate-200/80 dark:border-slate-800 space-y-3">
            <Calendar className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="font-bold text-base text-[#002047] dark:text-white">No Bookings Found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              {searchQuery || filterBranch !== "all"
                ? "No appointments match your search or filter criteria."
                : "No patient appointments have been registered yet. Test the booking flow at /book."}
            </p>
          </div>
        ) : (
          <div className="space-y-3.5">
            {filtered.map((apt) => (
              <div
                key={apt.id}
                className="bg-white dark:bg-[#0A1324] rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-red-50 dark:bg-red-950/40 text-[#B61F32] dark:text-red-400 border border-red-200/50 dark:border-red-900/40">
                      {apt.bookingRef}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                        apt.branch === "adi-dero"
                          ? "bg-red-100 dark:bg-red-950/60 text-[#B61F32]"
                          : "bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300"
                      }`}
                    >
                      {apt.branch === "adi-dero" ? "3G Adi Dero" : "Bahir Dar"}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {new Date(apt.createdAt).toLocaleString()}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-base font-bold text-[#002047] dark:text-white">
                      {apt.patientName}
                    </h3>
                    {apt.patientAge && (
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        ({apt.patientAge})
                      </span>
                    )}
                  </div>

                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {apt.serviceName}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#B61F32]" />
                      <strong>Date:</strong> {apt.appointmentDate}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <strong>Slot:</strong> {apt.appointmentTime}
                    </span>
                    {apt.referringDoctor && (
                      <span className="flex items-center gap-1.5">
                        <Stethoscope className="w-3.5 h-3.5 text-blue-500" />
                        <strong>Ref:</strong> {apt.referringDoctor}
                      </span>
                    )}
                  </div>

                  {apt.notes && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 p-2 rounded-lg border border-slate-100 dark:border-slate-800 mt-1">
                      <strong>Notes:</strong> {apt.notes}
                    </p>
                  )}
                </div>

                {/* Direct Action Buttons for Reception */}
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 pt-2 md:pt-0 w-full md:w-auto shrink-0">
                  <a
                    href={`tel:${apt.patientPhone.replace(/\s+/g, "")}`}
                    className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 bg-[#002047] dark:bg-slate-800 hover:bg-[#092f61] text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Patient</span>
                  </a>

                  <a
                    href={`https://wa.me/${apt.patientPhone.replace(/\D/g, "")}?text=${encodeURIComponent(
                      `Hello ${apt.patientName}, this is 3G Diagnostic Imaging & Radiance Clinic regarding your appointment ${apt.bookingRef} for ${apt.serviceName}. Your schedule on ${apt.appointmentDate} at ${apt.appointmentTime} is confirmed.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
