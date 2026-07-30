import { Zap } from "lucide-react";

type ModelRowProps = {
  name: string;
  provider: string;
  tokens: string;
  tier: "premium" | "free";
};

function ModelRow({ name, provider, tokens, tier }: ModelRowProps) {
  return (
    <div className="flex justify-between items-center gap-2">
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-[11px] text-white/60 truncate">{name}</span>

        {/* Tier Badge */}
        <span
          className={`text-[9px] px-1.5 py-[1px] rounded-full font-medium
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

const MODELS: ModelRowProps[] = [
  // 🔒 Top New Premium
  { name: "GPT-5.5", provider: "OpenAI", tier: "premium", tokens: "1M" },
  { name: "Claude Opus 4.7", provider: "Anthropic", tier: "premium", tokens: "8.2M" },
  { name: "Gemini 2.5 Pro", provider: "Google", tier: "premium", tokens: "2M" },

  // 🆓 Top New Free
  { name: "GPT-5 Mini", provider: "OpenAI", tier: "free", tokens: "500K" },
  { name: "Claude Haiku 4.5", provider: "Anthropic", tier: "free", tokens: "1.1M" },
  { name: "Gemini 2.5 Flash", provider: "Google", tier: "free", tokens: "1M" },
];

export function HeroTokenCard() {
  return (
    <div className="fixed right-5 bottom-5 hidden lg:block z-20">
      <div
        className="glass rounded-xl w-[272px] p-5 space-y-4"
        role="complementary"
        aria-label="Token usage stats"
      >
        {/* Header row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-white/55" />
            <span className="text-[10px] font-mono text-white/55 uppercase tracking-[0.12em]">
              Token Usage
            </span>
          </div>
          <span className="text-[10px] text-white/35 tracking-wide">28 DAYS</span>
        </div>

        {/* Total */}
        <div className="flex items-baseline gap-1.5">
          <span className="text-[28px] font-bold leading-none text-white">12.5M</span>
          <span className="text-xs text-white/45">tokens</span>
        </div>

        {/* Progress bar */}
        <div className="h-[3px] w-full rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-accent to-violet-500" />
        </div>

        {/* Model rows */}
        <div className="space-y-2 pt-0.5">
          {MODELS.map(m => (
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
