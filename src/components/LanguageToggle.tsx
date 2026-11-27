"use client";

import { useLanguage, Language } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  const options: { id: Language; label: string; title: string }[] = [
    { id: "en", label: "EN", title: "English" },
    { id: "ti", label: "ትግ", title: "ትግርኛ (Tigrinya)" },
    { id: "am", label: "አማ", title: "አማርኛ (Amharic)" },
  ];

  return (
    <div
      className={`inline-flex items-center p-0.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/70 text-[11px] font-semibold ${className}`}
    >
      <div className="pl-1.5 pr-1 text-slate-400 dark:text-slate-500 hidden sm:block">
        <Globe className="w-3 h-3" />
      </div>
      {options.map((opt) => {
        const isActive = language === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => setLanguage(opt.id)}
            title={opt.title}
            className={`px-2 py-1 rounded-md transition-all ${
              isActive
                ? "bg-white dark:bg-slate-800 text-[#B61F32] dark:text-red-400 font-bold shadow-xs"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
