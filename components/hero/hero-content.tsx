import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { heroContent } from "@/data/hero";

export function HeroContent() {
  return (
    <div className="flex-1 flex items-center">
      <div className="max-w-2xl space-y-6">
        <p className="text-xs sm:text-sm font-sans text-white/80 uppercase tracking-[0.2em]">
          {heroContent.eyebrow}
        </p>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white leading-[1.08] tracking-[-0.02em]">
          {heroContent.heading.map((line, i) => (
            <span key={i}>
              {line}
              {i < heroContent.heading.length - 1 && <br />}
            </span>
          ))}
        </h1>

        <p className="text-[15px] sm:text-base text-white/68 max-w-107.5 leading-relaxed">
          {heroContent.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          {heroContent.ctas.map(cta =>
            cta.primary ? (
              <Link
                key={cta.href}
                href={cta.href}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:brightness-110 hover:shadow-lg hover:shadow-accent/40 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                {cta.label}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            ) : (
              <Link
                key={cta.href}
                href={cta.href}
                className="inline-flex items-center justify-center px-5 py-3 sm:py-2.5 rounded-lg border border-white/18 bg-white/5 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/10 transition-all duration-200"
              >
                {cta.label}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}
