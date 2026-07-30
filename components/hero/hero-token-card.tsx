import { Zap } from "lucide-react";
import { type ModelData, models, tokenCard } from "@/data/models";

function ModelRow({ name, provider, tokens, tier }: ModelData) {
  return (
    <div className="flex justify-between items-center gap-2">
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-[11px] text-white/60 truncate">{name}</span>
        <span
          className={`text-[9px] px-1.5 py-px rounded-full font-medium
            ${
              tier === "premium"
                ? "bg-amber-400/15 text-amber-300 border border-amber-400/30"
                : "bg-emerald-400/15 text-emerald-300 border border-emerald-400/30"
            }`}
        >
          {tier === "premium" ? "PRO" : "FREE"}
        </span>
      </div>
      <span className="text-[11px] text-white/35">{provider}</span>
      <span className="text-[11px] font-medium text-white">{tokens}</span>
    </div>
  );
}

export function HeroTokenCard() {
  return (
    <div className="fixed right-5 bottom-5 hidden lg:block z-20">
      <div
        className="glass rounded-xl w-68 p-5 space-y-4"
        role="complementary"
        aria-label="Token usage stats"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-white/55" />
            <span className="text-[10px] font-mono text-white/55 uppercase tracking-[0.12em]">
              Token Usage
            </span>
          </div>
          <span className="text-[10px] text-white/35 tracking-wide">{tokenCard.period}</span>
        </div>

        <div className="flex items-baseline gap-1.5">
          <span className="text-[28px] font-bold leading-none text-white">{tokenCard.totalTokens}</span>
          <span className="text-xs text-white/45">tokens</span>
        </div>

        <div className="h-0.75 w-full rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-linear-to-r from-accent to-violet-500"
            style={{ width: `${tokenCard.progress}%` }}
          />
        </div>

        <div className="space-y-2 pt-0.5">
          {models.map(m => (
            <ModelRow
              key={m.name}
              {...m}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
