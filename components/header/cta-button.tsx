import Link from "next/link";
import { navLinks } from "@/data/links";

export function CtaButton() {
  return (
    <Link
      href={navLinks.cta.href}
      className="inline-flex items-center gap-2 px-4 py-1.75 rounded-full border border-white/22 bg-white/7 text-white text-[13px] font-medium hover:bg-white/12 transition-all duration-200 select-none"
    >
      <span className="w-1.75 h-1.75 rounded-full bg-emerald-400 shrink-0" />
      {navLinks.cta.label}
    </Link>
  );
}
