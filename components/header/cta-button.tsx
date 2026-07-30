import Link from "next/link";

export function CtaButton() {
  return (
    <Link
      href="#contact"
      className="inline-flex items-center gap-2 px-4 py-[7px] rounded-full border border-white/22 bg-white/7 text-white text-[13px] font-medium hover:bg-white/12 transition-all duration-200 select-none"
    >
      <span className="w-[7px] h-[7px] rounded-full bg-emerald-400 shrink-0" />
      Let&apos;s talk
    </Link>
  );
}
