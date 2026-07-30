import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function HeroContent() {
  return (
    <div className="flex-1 flex items-center">
      <div className="max-w-2xl space-y-6">
        {/* Eyebrow label */}
        <p className="text-xs sm:text-sm font-sans text-white/80 uppercase tracking-[0.2em]">
          Full-Stack &middot; AI-First Engineer
        </p>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white leading-[1.08] tracking-[-0.02em]">
          Modern software,
          <br />
          built to think,
          <br />
          shipped end-to-end.
        </h1>

        {/* Body copy */}
        <p className="text-[15px] sm:text-base text-white/68 max-w-[430px] leading-relaxed">
          I&apos;m Dev, a full-stack engineer designing and shipping AI-native products from the inference
          layer to the last interaction.
        </p>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link
            href="#work"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:brightness-110 hover:shadow-lg hover:shadow-accent/40 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            View selected work
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-3 sm:py-2.5 rounded-lg border border-white/18 bg-white/5 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/10 transition-all duration-200"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
