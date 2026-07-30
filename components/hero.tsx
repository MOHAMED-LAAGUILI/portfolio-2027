'use client'

import { useTheme } from './theme-provider'
import { HeroBackground } from './hero/hero-background'
import { HeroContent } from './hero/hero-content'
import { HeroBottomBar } from './hero/hero-bottom-bar'
import { HeroTokenCard } from './hero/hero-token-card'
import { ThemeToggle } from './hero/theme-toggle'
import { MusicToggle } from './hero/music-toggle'

export function Hero() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <section className="relative h-screen w-full overflow-hidden">

      <HeroBackground isNight={isDark} />

      <div className="relative z-10 h-full flex flex-col justify-between max-w-7xl pl-8 sm:pl-12 lg:pl-52 py-20">
        <HeroContent />

        <HeroBottomBar />
      </div>

      <HeroTokenCard />

      <MusicToggle />
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

    </section>
  )
}

