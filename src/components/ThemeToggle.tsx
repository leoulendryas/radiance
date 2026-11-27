"use client";

import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`p-1.5 rounded-lg border transition-all flex items-center justify-center ${
        theme === "dark"
          ? "bg-slate-800/90 border-slate-700 text-amber-300 hover:bg-slate-700 hover:text-amber-200"
          : "bg-slate-100/80 border-slate-200 text-slate-700 hover:bg-slate-200 hover:text-[#002047]"
      } ${className}`}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}
