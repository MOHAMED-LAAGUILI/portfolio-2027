import { ChevronDown } from "lucide-react";

export function HeroBottomBar() {
  return (
    <div className="flex items-center justify-between text-[11px] text-white/50 pb-1">
      <div className="flex items-center gap-2">
        <span className="w-[7px] h-[7px] rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.7)]" />
        <span className="tracking-wide">Available for new work &middot; Q3 2026</span>
      </div>
    </div>
  );
}
