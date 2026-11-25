export default function EcgDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center my-6 ${className}`} aria-hidden="true">
      <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent flex-1 max-w-xs"></div>
      <div className="mx-4 flex items-center gap-1.5 text-[#002047]">
        <svg
          viewBox="0 0 160 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-28 text-[#002047]"
        >
          {/* ECG Line */}
          <path
            d="M0 18 H35 L42 18 L48 6 L54 30 L60 14 L65 22 L70 18 H90"
            stroke="#002047"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Medical Cross in Heart */}
          <g transform="translate(92, 4)">
            <path
              d="M14 4.5 C10 0, 0 3, 0 14 C0 22, 14 30, 14 30 C14 30, 28 22, 28 14 C28 3, 18 0, 14 4.5 Z"
              fill="#B61F32"
            />
            {/* White cross inside heart */}
            <rect x="12" y="8" width="4" height="12" rx="1" fill="#FFFFFF" />
            <rect x="8" y="12" width="12" height="4" rx="1" fill="#FFFFFF" />
          </g>
          {/* Trailing ECG Line */}
          <path
            d="M125 18 H135 L140 10 L146 26 L150 18 H160"
            stroke="#B61F32"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent flex-1 max-w-xs"></div>
    </div>
  );
}
