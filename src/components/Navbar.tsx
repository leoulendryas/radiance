"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Activity,
  Zap,
  FileCheck,
  Stethoscope,
  PhoneCall,
  Calendar,
  Sparkles
} from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicInfo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    {
      label: "Diagnostic & Clinical Services",
      href: "/services",
      isDropdown: true,
      children: [
        {
          name: "All Services Directory",
          href: "/services",
          desc: "Complete 50+ scan & consultation catalog",
          icon: Sparkles
        },
        {
          name: "3G Ultrasound Center",
          href: "/services/ultrasound",
          desc: "27 sonography modalities (Doppler, 3D/4D, MSK)",
          icon: Activity,
          badge: "27 Services"
        },
        {
          name: "Digital X-Ray & Special Procedures",
          href: "/services/digital-xray",
          desc: "24 digital x-ray views + HSG, IVU, Barium",
          icon: Zap,
          badge: "29 Services"
        },
        {
          name: "CT & MRI Scan Reading",
          href: "/services/ct-mri-consultation",
          desc: "Second opinions & radiological consults",
          icon: FileCheck
        },
        {
          name: "Multispeciality Clinics & Lab",
          href: "/services/multispeciality",
          desc: "Cardiology, OB/GYN, Pediatrics, Ortho & Lab",
          icon: Stethoscope
        }
      ]
    },
    { label: "About Radiance", href: "/about" },
    { label: "Our Doctors", href: "/doctors" },
    { label: "Patient Guide & Prep", href: "/patients" },
    { label: "Locations & Contact", href: "/contact" }
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-1.5"
          : "bg-white py-2 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-9 w-40 sm:h-10 sm:w-48 transition-transform group-hover:scale-102">
              <Image
                src="/images/logo.png"
                alt="Radiance Multispeciality Clinic & 3G Diagnostic Imaging"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 180px, 220px"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.isDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                        isActive
                          ? "text-[#B61F32] bg-red-50/60"
                          : "text-slate-700 hover:text-[#002047] hover:bg-slate-50"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          servicesDropdown ? "rotate-180 text-[#B61F32]" : "text-slate-400"
                        }`}
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    {servicesDropdown && (
                      <div className="absolute left-0 top-full mt-1 w-96 rounded-2xl bg-white shadow-2xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="px-3 py-2 mb-1 bg-slate-50 rounded-xl border border-slate-100">
                          <p className="text-xs font-bold text-[#002047] uppercase tracking-wider">
                            Comprehensive Diagnostic Hub
                          </p>
                          <p className="text-[11px] text-slate-500">
                            3G Imaging + Multispeciality Medical Services
                          </p>
                        </div>
                        {link.children?.map((child) => {
                          const Icon = child.icon;
                          const isChildActive = pathname === child.href;
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                                isChildActive
                                  ? "bg-red-50/80 text-[#002047]"
                                  : "hover:bg-slate-50 text-slate-700 hover:text-[#002047]"
                              }`}
                            >
                              <div
                                className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                                  isChildActive
                                    ? "bg-[#B61F32] text-white"
                                    : "bg-slate-100 text-[#002047] group-hover:bg-[#002047] group-hover:text-white"
                                }`}
                              >
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-1">
                                  <span className="text-xs font-bold truncate">
                                    {child.name}
                                  </span>
                                  {child.badge && (
                                    <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-[#B61F32]/10 text-[#B61F32]">
                                      {child.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-slate-500 leading-snug line-clamp-1">
                                  {child.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? "text-[#B61F32] bg-red-50/60"
                      : "text-slate-700 hover:text-[#002047] hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href={`tel:${CLINIC_INFO.primaryPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002047] hover:text-[#B61F32] px-3 py-1.5 rounded-lg border border-slate-200 hover:border-[#B61F32]/30 transition-all h-9"
              title="Direct Line to 3G Diagnostic Imaging"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#B61F32]" />
              <span className="tracking-wide">{CLINIC_INFO.primaryPhone}</span>
            </a>

            <Link
              href="/book"
              className="inline-flex items-center gap-1.5 bg-[#B61F32] hover:bg-[#911624] text-white text-xs font-bold px-3.5 py-1.5 rounded-lg shadow-sm hover:shadow transition-all h-9"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${CLINIC_INFO.primaryPhone.replace(/\s+/g, "")}`}
              className="p-2 rounded-lg bg-red-50 text-[#B61F32] hover:bg-red-100 transition-colors"
              aria-label="Call clinic"
            >
              <PhoneCall className="w-5 h-5" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto shadow-xl">
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              className={`p-3 rounded-xl font-bold text-sm ${
                pathname === "/" ? "bg-red-50 text-[#B61F32]" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            <div className="py-2 border-y border-slate-100 my-1">
              <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Diagnostic & Clinical Services
              </p>
              <div className="space-y-1">
                <Link
                  href="/services"
                  className={`flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold ${
                    pathname === "/services" ? "bg-red-50 text-[#B61F32]" : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span>All Services Directory</span>
                  <span className="text-[10px] text-slate-400">50+ Services</span>
                </Link>
                <Link
                  href="/services/ultrasound"
                  className={`flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold ${
                    pathname === "/services/ultrasound" ? "bg-red-50 text-[#B61F32]" : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-[#B61F32]" />
                    3G Ultrasound Center
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-red-100 text-[#B61F32] text-[10px]">27 Scans</span>
                </Link>
                <Link
                  href="/services/digital-xray"
                  className={`flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold ${
                    pathname === "/services/digital-xray" ? "bg-red-50 text-[#B61F32]" : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-[#002047]" />
                    Digital X-Ray & Procedures (HSG/IVU)
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px]">29 Views</span>
                </Link>
                <Link
                  href="/services/ct-mri-consultation"
                  className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-semibold ${
                    pathname === "/services/ct-mri-consultation" ? "bg-red-50 text-[#B61F32]" : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <FileCheck className="w-3.5 h-3.5 text-[#002047]" />
                  <span>CT & MRI Scan Reading</span>
                </Link>
                <Link
                  href="/services/multispeciality"
                  className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-semibold ${
                    pathname === "/services/multispeciality" ? "bg-red-50 text-[#B61F32]" : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <Stethoscope className="w-3.5 h-3.5 text-[#002047]" />
                  <span>Multispeciality Clinics & Lab</span>
                </Link>
              </div>
            </div>

            <Link
              href="/about"
              className={`p-3 rounded-xl font-bold text-sm ${
                pathname === "/about" ? "bg-red-50 text-[#B61F32]" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              About Radiance & 3G
            </Link>

            <Link
              href="/doctors"
              className={`p-3 rounded-xl font-bold text-sm ${
                pathname === "/doctors" ? "bg-red-50 text-[#B61F32]" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Our Medical Specialists
            </Link>

            <Link
              href="/patients"
              className={`p-3 rounded-xl font-bold text-sm ${
                pathname === "/patients" ? "bg-red-50 text-[#B61F32]" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Patient Preparation & Guide
            </Link>

            <Link
              href="/contact"
              className={`p-3 rounded-xl font-bold text-sm ${
                pathname === "/contact" ? "bg-red-50 text-[#B61F32]" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Locations & Contact
            </Link>

            {/* Mobile Actions */}
            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="/book"
                className="w-full text-center bg-[#B61F32] text-white font-bold py-3 rounded-xl text-sm shadow-md"
              >
                Book Appointment / Scan
              </Link>
              <a
                href={`tel:${CLINIC_INFO.primaryPhone.replace(/\s+/g, "")}`}
                className="w-full flex items-center justify-center gap-2 border border-slate-300 text-[#002047] font-bold py-2.5 rounded-xl text-sm"
              >
                <PhoneCall className="w-4 h-4 text-[#B61F32]" />
                <span>Call {CLINIC_INFO.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
