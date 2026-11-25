interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightText?: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  highlightText,
  subtitle,
  centered = false,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 sm:mb-14 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3.5 ${
          dark
            ? "bg-[#B61F32]/20 text-red-300 border border-red-500/30"
            : "bg-[#B61F32]/10 text-[#B61F32] border border-[#B61F32]/20"
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#B61F32] animate-ping" />
          <span>{badge}</span>
        </div>
      )}

      <div className={`flex items-start gap-3 ${centered ? "justify-center" : ""}`}>
        {!centered && (
          <div className="w-1.5 h-10 bg-[#B61F32] rounded-full mt-1 shrink-0 hidden sm:block" />
        )}
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
          dark ? "text-white" : "text-[#002047]"
        }`}>
          {title}{" "}
          {highlightText && (
            <span className="text-[#B61F32] relative inline-block">
              {highlightText}
              <svg
                className="absolute -bottom-1.5 left-0 w-full h-2 text-[#B61F32]/30"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M0 6 Q50 12, 100 6"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          )}
        </h2>
      </div>

      {subtitle && (
        <p className={`mt-3.5 text-base sm:text-lg leading-relaxed ${
          dark ? "text-slate-300" : "text-slate-600"
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
