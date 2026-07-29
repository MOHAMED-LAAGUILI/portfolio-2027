'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from './theme-provider'

export function Hero() {
  const [isNight, setIsNight] = useState(false)
  const [currentTime, setCurrentTime] = useState('')
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }))
    }
    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background Videos Container */}
      <div className="absolute inset-0 z-0">
        {/* Day Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            isNight ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <source src="/hero-background-video.mp4" type="video/mp4" />
        </video>

        {/* Night Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            isNight ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <source src="/hero-night-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Top spacer */}
        <div />

        {/* Main Content - Left aligned */}
        <div className="flex-1 flex items-center">
          <div className="max-w-2xl space-y-6">
            <p className="text-xs sm:text-sm font-sans text-white/80 uppercase tracking-[0.2em]">
              Full-Stack &middot; AI-First Engineer
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sans text-white leading-[1.1] tracking-tight">
              Modern software,<br />
              built to think,<br />
              shipped end-to-end.
            </h1>

            <p className="text-base sm:text-lg text-white/70 max-w-lg leading-relaxed">
              I&apos;m CodeBucks, a full-stack engineer designing and shipping AI-native products from the inference layer to the last interaction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/50 transition-all hover:scale-105"
              >
                View selected work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L1 10m0 0l6 6m10-6v12m0 0l6-6m0 0l-6-6" />
                </svg>
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm text-white font-medium hover:bg-white/10 transition-all"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between text-xs text-white/50">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Available for new work &middot; Q3 2026</span>
          </div>

        
        </div>
      </div>

      {/* Token Usage Card - Flush right corner */}
      <div className="fixed right-5 bottom-5 hidden lg:block z-20">
        <div className="glass rounded-l-xl w-72 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-xs font-mono text-white/60 uppercase tracking-wider">
                Token Usage
              </span>
            </div>
            <span className="text-xs text-white/40">28 DAYS</span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-white">12.5M</span>
            <span className="text-sm text-white/50">tokens</span>
          </div>

          <div className="space-y-2.5 pt-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-white/60">Opus 4.7</span>
              <span className="text-xs text-white/40">Anthropic</span>
              <span className="text-xs font-medium text-white">8.2M</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs text-white/60">Sonnet 4.6</span>
              <span className="text-xs text-white/40">Anthropic</span>
              <span className="text-xs font-medium text-white">2.4M</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs text-white/60">Haiku 4.5</span>
              <span className="text-xs text-white/40">Anthropic</span>
              <span className="text-xs font-medium text-white">1.1M</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs text-white/60">GPT-5</span>
              <span className="text-xs text-white/40">OpenAI</span>
              <span className="text-xs font-medium text-white">730K</span>
            </div>
          </div>

          <div className="flex justify-between items-center pt-3 border-t border-white/10">
            <span className="text-xs text-white/40">Updated 9h ago</span>
            <Link href="#" className="text-xs text-accent hover:text-accent/80 transition-colors flex items-center gap-1">
              See breakdown
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L1 10m0 0l6 6m10-6v12m0 0l6-6m0 0l-6-6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Theme Toggle - Right edge */}
      <button
        onClick={() => { toggleTheme(); setIsNight(!isNight) }}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 w-10 h-20 rounded-l-full bg-black/30 backdrop-blur-sm border border-white/10 border-r-0 flex items-center justify-center hover:bg-black/50 transition-all duration-200"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m6.08 0l4.24-4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m6.08 0l4.24 4.24" stroke="currentColor" fill="none" strokeWidth="2"/>
          </svg>
        ) : (
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>
    </section>
  )
}
