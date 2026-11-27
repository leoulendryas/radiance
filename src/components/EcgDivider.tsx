export default function EcgDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center my-8 ${className}`} aria-hidden="true">
      <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1 max-w-xs transition-colors" />
      <div className="mx-4 flex items-center text-[#002047] dark:text-slate-400">
        <svg
          viewBox="0 0 120 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-24 text-slate-400 dark:text-slate-600"
        >
          <path
            d="M0 14 H30 L36 14 L42 4 L48 24 L54 10 L58 18 L62 14 H74"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M80 6 C76 2, 70 4, 70 12 C70 18, 80 23, 80 23 C80 23, 90 18, 90 12 C90 4, 84 2, 80 6 Z"
            fill="#B61F32"
          />
          <path
            d="M88 14 H98 L104 8 L108 20 L112 14 H120"
            stroke="#B61F32"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1 max-w-xs transition-colors" />
    </div>
  );
}
