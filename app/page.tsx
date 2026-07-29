import { Hero } from '@/components/hero'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
          <div className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <span className="font-semibold text-base text-white">CodeBucks</span>
            <span className="text-accent text-lg leading-none">&bull;</span>
          </Link>

          

          <div className="flex items-center gap-3">
            {/* CTA Button */}
            <Link
              href="#contact"
              className="sm:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/10 transition-all duration-200"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Let&apos;s talk
            </Link>

      
          </div>
        </div>

        
      </div>
    </div>
      <Hero />
    </main>
  )
}
