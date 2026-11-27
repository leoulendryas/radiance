interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightText?: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  highlightText,
  subtitle,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 sm:mb-14 ${centered ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}`}>
      {badge && (
        <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wider uppercase bg-red-50 dark:bg-red-950/40 text-[#B61F32] dark:text-red-400 border border-red-200/50 dark:border-red-900/40 mb-3">
          {badge}
        </span>
      )}

      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#002047] dark:text-white leading-tight">
        {title}{" "}
        {highlightText && (
          <span className="text-[#B61F32] dark:text-red-400">{highlightText}</span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
