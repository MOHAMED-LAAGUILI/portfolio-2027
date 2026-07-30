"use client";

import { HeroBackground } from "./hero/hero-background";
import { HeroBottomBar } from "./hero/hero-bottom-bar";
import { HeroContent } from "./hero/hero-content";
import { HeroTokenCard } from "./hero/hero-token-card";
import { MusicToggle } from "./hero/music-toggle";
import { ThemeToggle } from "./hero/theme-toggle";
import { useTheme } from "./theme-provider";

export function Hero() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <HeroBackground isNight={isDark} />

      <div className="relative z-10 h-full flex flex-col justify-between max-w-7xl px-8 sm:px-12 lg:px-52 py-20">
        <HeroContent />

        <HeroBottomBar />
      </div>

      <HeroTokenCard />

      <MusicToggle />
      <ThemeToggle
        isDark={isDark}
        onToggle={toggleTheme}
      />
    </section>
  );
}
