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
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
  }, [pathname]);

  const serviceItems = [
    {
      name: t.nav.servicesCatalog,
      href: "/services",
      desc: t.nav.catalogDesc,
      icon: Sparkles
    },
    {
      name: t.nav.ultrasound,
      href: "/services/ultrasound",
      desc: t.nav.usDesc,
      icon: Activity,
      badge: "27 Scans"
    },
    {
      name: t.nav.xray,
      href: "/services/digital-xray",
      desc: t.nav.xrayDesc,
      icon: Zap,
      badge: "29 Views"
    },
    {
      name: t.nav.ctMri,
      href: "/services/ct-mri-consultation",
      desc: t.nav.ctDesc,
      icon: FileCheck
    },
    {
      name: t.nav.multispeciality,
      href: "/services/multispeciality",
      desc: t.nav.multiDesc,
      icon: Stethoscope
    }
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 dark:bg-[#070F1E]/95 backdrop-blur-md shadow-xs py-2 border-b border-slate-200/80 dark:border-slate-800"
          : "bg-white dark:bg-[#050B14] py-2.5 border-b border-slate-100 dark:border-slate-800/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-9 w-38 sm:h-10 sm:w-44 transition-opacity group-hover:opacity-90">
              <Image
                src={theme === "dark" ? "/images/logo-white.png" : "/images/logo.png"}
                alt="Radiance & 3G Diagnostic Imaging"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 150px, 180px"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                pathname === "/"
                  ? "text-[#B61F32] dark:text-red-400 bg-red-50/70 dark:bg-red-950/30"
                  : "text-slate-600 dark:text-slate-300 hover:text-[#002047] dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50"
              }`}
            >
              {t.nav.home}
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link
                href="/services"
                className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  pathname.startsWith("/services")
                    ? "text-[#B61F32] dark:text-red-400 bg-red-50/70 dark:bg-red-950/30"
                    : "text-slate-600 dark:text-slate-300 hover:text-[#002047] dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50"
                }`}
              >
                <span>{t.nav.services}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdown ? "rotate-180 text-[#B61F32] dark:text-red-400" : "text-slate-400"
                  }`}
                />
              </Link>

              {servicesDropdown && (
                <div className="absolute left-0 top-full mt-1 w-88 rounded-2xl bg-white dark:bg-[#0B1528] shadow-xl border border-slate-200/80 dark:border-slate-800 p-2 z-50">
                  {serviceItems.map((child) => {
                    const Icon = child.icon;
                    const isChildActive = pathname === child.href;
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`flex items-start gap-3 p-2.5 rounded-xl transition-colors ${
                          isChildActive
                            ? "bg-red-50/80 dark:bg-red-950/40 text-[#002047] dark:text-white"
                            : "hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                            isChildActive
                              ? "bg-[#B61F32] text-white"
                              : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
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
                              <span className="px-1.5 py-0.5 text-[10px] font-semibold rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                                {child.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-1">
                            {child.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                pathname === "/about"
                  ? "text-[#B61F32] dark:text-red-400 bg-red-50/70 dark:bg-red-950/30"
                  : "text-slate-600 dark:text-slate-300 hover:text-[#002047] dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50"
              }`}
            >
              {t.nav.about}
            </Link>

            <Link
              href="/doctors"
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                pathname === "/doctors"
                  ? "text-[#B61F32] dark:text-red-400 bg-red-50/70 dark:bg-red-950/30"
                  : "text-slate-600 dark:text-slate-300 hover:text-[#002047] dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50"
              }`}
            >
              {t.nav.doctors}
            </Link>

            <Link
              href="/patients"
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                pathname === "/patients"
                  ? "text-[#B61F32] dark:text-red-400 bg-red-50/70 dark:bg-red-950/30"
                  : "text-slate-600 dark:text-slate-300 hover:text-[#002047] dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50"
              }`}
            >
              {t.nav.patients}
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                pathname === "/contact"
                  ? "text-[#B61F32] dark:text-red-400 bg-red-50/70 dark:bg-red-950/30"
                  : "text-slate-600 dark:text-slate-300 hover:text-[#002047] dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50"
              }`}
            >
              {t.nav.contact}
            </Link>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href={`tel:${CLINIC_INFO.phone1.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002047] dark:text-slate-200 hover:text-[#B61F32] dark:hover:text-red-400 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all h-9 bg-white dark:bg-slate-900/60"
              title="Call Direct"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#B61F32] dark:text-red-400" />
              <span className="tracking-wide font-mono text-[11px]">{CLINIC_INFO.phone1}</span>
            </a>

            <Link
              href="/book"
              className="inline-flex items-center gap-1.5 bg-[#B61F32] hover:bg-[#8F1726] text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg shadow-xs hover:shadow transition-all h-9"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.nav.book}</span>
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageToggle />
            <ThemeToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-[#070F1E] px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto shadow-xl">
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              className={`p-2.5 rounded-xl font-semibold text-xs ${
                pathname === "/" ? "bg-red-50 dark:bg-red-950/40 text-[#B61F32] dark:text-red-400" : "text-slate-800 dark:text-slate-200"
              }`}
            >
              {t.nav.home}
            </Link>

            <div className="py-2 border-y border-slate-100 dark:border-slate-800 my-1 space-y-1">
              <p className="px-2.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                {t.nav.services}
              </p>
              {serviceItems.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="flex items-center justify-between p-2 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                >
                  <span>{s.name}</span>
                  {s.badge && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                      {s.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>

            <Link
              href="/about"
              className={`p-2.5 rounded-xl font-semibold text-xs ${
                pathname === "/about" ? "bg-red-50 dark:bg-red-950/40 text-[#B61F32] dark:text-red-400" : "text-slate-800 dark:text-slate-200"
              }`}
            >
              {t.nav.about}
            </Link>

            <Link
              href="/doctors"
              className={`p-2.5 rounded-xl font-semibold text-xs ${
                pathname === "/doctors" ? "bg-red-50 dark:bg-red-950/40 text-[#B61F32] dark:text-red-400" : "text-slate-800 dark:text-slate-200"
              }`}
            >
              {t.nav.doctors}
            </Link>

            <Link
              href="/patients"
              className={`p-2.5 rounded-xl font-semibold text-xs ${
                pathname === "/patients" ? "bg-red-50 dark:bg-red-950/40 text-[#B61F32] dark:text-red-400" : "text-slate-800 dark:text-slate-200"
              }`}
            >
              {t.nav.patients}
            </Link>

            <Link
              href="/contact"
              className={`p-2.5 rounded-xl font-semibold text-xs ${
                pathname === "/contact" ? "bg-red-50 dark:bg-red-950/40 text-[#B61F32] dark:text-red-400" : "text-slate-800 dark:text-slate-200"
              }`}
            >
              {t.nav.contact}
            </Link>

            {/* Mobile Actions */}
            <div className="pt-3 mt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
              <Link
                href="/book"
                className="w-full text-center bg-[#B61F32] text-white font-semibold py-2.5 rounded-xl text-xs shadow-xs"
              >
                {t.nav.book}
              </Link>
              <a
                href={`tel:${CLINIC_INFO.phone1.replace(/\s+/g, "")}`}
                className="w-full flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-semibold py-2 rounded-xl text-xs"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#B61F32]" />
                <span className="font-mono">{CLINIC_INFO.phone1}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
