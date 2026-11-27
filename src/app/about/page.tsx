"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Users,
  Target,
  Sparkles,
  HeartPulse,
  HeartHandshake,
  ArrowRight,
  Compass
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  const valueIcons = [
    { icon: Users, color: "bg-[#B61F32]" },
    { icon: ShieldCheck, color: "bg-blue-600" },
    { icon: Award, color: "bg-amber-500" },
    { icon: Sparkles, color: "bg-emerald-600" },
    { icon: HeartHandshake, color: "bg-indigo-600" },
    { icon: HeartPulse, color: "bg-[#B61F32]" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070D18] pb-24 text-slate-800 dark:text-slate-100 transition-colors">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-[#001229] via-[#002047] to-[#0A2540] text-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B61F32]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B61F32] text-white text-xs font-bold uppercase tracking-wider">
              {t.aboutPage.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {t.aboutPage.title} <br />
              <span className="text-red-400">{t.aboutPage.highlight}</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {t.aboutPage.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 space-y-14">
        {/* Story Section with Building Photo */}
        <section className="bg-white dark:bg-[#0A1324] rounded-2xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold text-[#B61F32] uppercase tracking-wider">
                {t.aboutPage.storyBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002047] dark:text-white leading-tight">
                {t.aboutPage.storyTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.aboutPage.storyP1}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.aboutPage.storyP2}
              </p>

              {/* Milestones timeline */}
              <div className="space-y-3.5 pt-2">
                {t.aboutPage.milestones.map((m, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#002047] dark:bg-slate-800 text-white flex items-center justify-center shrink-0 text-xs font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#002047] dark:text-white">{m.title}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800">
                <div className="relative h-72 sm:h-84 w-full">
                  <Image
                    src="/images/photo-building.jpg"
                    alt="Radiance Clinic Modern Facility Exterior"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-[#001533] text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-red-300 font-semibold">{t.branchesSection.highlight}</p>
                      <h4 className="text-xs sm:text-sm font-bold">{t.aboutPage.infrastructureTitle}</h4>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#B61F32] text-white text-[10px] font-bold">
                      {t.aboutSection.safeModernBadge}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vision */}
          <div className="bg-white dark:bg-[#0A1324] rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-xs relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-[#002047] dark:bg-slate-800 text-white flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-red-400" />
            </div>
            <span className="text-xs font-bold text-[#B61F32] uppercase tracking-wider">
              {t.aboutPage.visionBadge}
            </span>
            <h3 className="text-xl font-extrabold text-[#002047] dark:text-white mt-1">{t.aboutPage.visionTitle}</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed">
              {t.aboutPage.visionDesc}
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white dark:bg-[#0A1324] rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-xs relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-[#B61F32] text-white flex items-center justify-center mb-4">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs font-bold text-[#002047] dark:text-slate-300 uppercase tracking-wider">
              {t.aboutPage.missionBadge}
            </span>
            <h3 className="text-xl font-extrabold text-[#002047] dark:text-white mt-1">{t.aboutPage.missionTitle}</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed">
              {t.aboutPage.missionDesc}
            </p>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="bg-white dark:bg-[#0A1324] rounded-2xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
          <SectionHeading
            badge={t.aboutPage.valuesBadge}
            title={t.aboutPage.valuesTitle}
            highlightText={t.aboutPage.valuesHighlight}
            subtitle={t.aboutPage.valuesSubtitle}
            centered
          />

          {/* Mobile swipe hint */}
          <div className="md:hidden flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 mb-3 px-0.5 mt-6">
            <span className="font-semibold uppercase tracking-wider">{t.aboutPage.valuesBadge}</span>
            <span className="text-[#B61F32] dark:text-red-400 font-medium">{t.aboutSection.storyBtn ? "Swipe sideways →" : ""}</span>
          </div>

          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-2 md:mt-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 pb-3 md:pb-0">
            {t.aboutPage.values.map((v, i) => {
              const iconData = valueIcons[i] || valueIcons[0];
              const Icon = iconData.icon;
              return (
                <div key={i} className="w-[78vw] max-w-[270px] md:w-auto shrink-0 snap-start p-5 rounded-xl bg-slate-50 dark:bg-[#0E1A30] border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className={`w-10 h-10 rounded-lg ${iconData.color} text-white flex items-center justify-center mb-3 shadow-xs`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-[#002047] dark:text-white text-sm">{v.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Healthcare Philosophy */}
        <section className="bg-gradient-to-r from-[#001229] via-[#002047] to-[#0A2540] rounded-2xl p-8 sm:p-10 text-white shadow-lg border border-slate-800">
          <div className="max-w-3xl space-y-3">
            <span className="px-3 py-1 rounded-full bg-[#B61F32] text-white text-xs font-bold uppercase tracking-wider">
              {t.aboutPage.philosophyBadge}
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
              {t.aboutPage.philosophyQuote}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.aboutPage.philosophyDesc}
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <Link
                href="/doctors"
                className="inline-flex items-center gap-2 bg-[#B61F32] hover:bg-[#911624] text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-lg transition-all shadow-xs"
              >
                <span>{t.aboutPage.teamBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-lg border border-white/20 transition-all"
              >
                <span>{t.aboutPage.locationsBtn}</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
