import Link from 'next/link'
import { Zap, ArrowUpRight } from 'lucide-react'

interface ModelRowProps {
  name: string
  provider: string
  tokens: string
}

function ModelRow({ name, provider, tokens }: ModelRowProps) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-[11px] text-white/60">{name}</span>
      <span className="text-[11px] text-white/35">{provider}</span>
      <span className="text-[11px] font-medium text-white">{tokens}</span>
    </div>
  )
}

const MODELS: ModelRowProps[] = [
  { name: 'Opus 4.7',   provider: 'Anthropic', tokens: '8.2M'  },
  { name: 'Sonnet 4.6', provider: 'Anthropic', tokens: '2.4M'  },
  { name: 'Haiku 4.5',  provider: 'Anthropic', tokens: '1.1M'  },
  { name: 'GPT-5',      provider: 'OpenAI',    tokens: '730K'  },
]

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
          {MODELS.map((m) => (
            <ModelRow key={m.name} {...m} />
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-2 border-t border-white/8">
          <span className="text-[10px] text-white/35">Updated 9h ago</span>
          <Link
            href="#"
            className="text-[11px] text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
          >
            See breakdown
            <ArrowUpRight className="w-2.5 h-2.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
