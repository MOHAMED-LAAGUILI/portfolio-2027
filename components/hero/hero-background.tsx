'use client'

// Toggles between the day and night background videos.
// Accepts `isNight` as a prop so the parent owns the state.

interface HeroBackgroundProps {
  isNight: boolean
}

export function HeroBackground({ isNight }: HeroBackgroundProps) {
  return (
    <div className="absolute inset-0 z-0">
      {/* Day video */}
      <video
        autoPlay muted loop playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
          isNight ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <source src="/hero-background-video.mp4" type="video/mp4" />
      </video>

      {/* Night video */}
      <video
        autoPlay muted loop playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
          isNight ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <source src="/hero-night-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay 1 — left→right gradient (text readability) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />

      {/* Overlay 2 — top-left radial shadow spot */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 60% at 0% 0%, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.38) 38%, transparent 72%)',
          pointerEvents: 'none',
        }}
      />

      {/* Overlay 3 — bottom fade (grounds the bottom bar) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 28%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
