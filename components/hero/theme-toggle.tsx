'use client'

import { Sun, Moon } from 'lucide-react'

interface ThemeToggleProps {
  isDark: boolean
  onToggle: () => void
}

const TOGGLE_HEIGHT = 92
const TOGGLE_WIDTH = 44
const INDICATOR_SIZE = 38
const INDICATOR_OFFSET = 4
const BUTTON_HEIGHT = 46

const dayGradient = 'linear-gradient(150deg, rgba(251,191,36,0.75) 0%, rgba(245,158,11,0.55) 100%)'
const nightGradient = 'linear-gradient(150deg, rgba(139,92,246,0.70) 0%, rgba(99,102,241,0.55) 100%)'
const dayShadow = '0 0 14px 3px rgba(251,191,36,0.55), inset 0 1px 0 rgba(255,255,255,0.22)'
const nightShadow = '0 0 14px 3px rgba(139,92,246,0.55), inset 0 1px 0 rgba(255,255,255,0.22)'

const buttonBase = {
  position: 'absolute' as const,
  left: 0,
  right: 0,
  height: BUTTON_HEIGHT,
  zIndex: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  transition: 'transform 0.16s cubic-bezier(0.34,1.56,0.64,1)',
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50" role="radiogroup" aria-label="Theme mode">
      <div
        style={{
          position: 'relative',
          width: TOGGLE_WIDTH,
          height: TOGGLE_HEIGHT,
          borderRadius: 999,
        }}
      >
        <div
          aria-hidden="true"
          className="frosted-bg"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 999,
          }}
        />

        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: INDICATOR_OFFSET,
            right: INDICATOR_OFFSET,
            height: INDICATOR_SIZE,
            borderRadius: 999,
            top: isDark ? 50 : 4,
            background: isDark ? nightGradient : dayGradient,
            boxShadow: isDark ? nightShadow : dayShadow,
            transition: 'top 0.46s cubic-bezier(0.34,1.56,0.64,1), background 0.38s ease, box-shadow 0.38s ease',
            zIndex: 1,
          }}
        />

        <button
          type="button"
          onClick={onToggle}
          role="radio"
          aria-checked={!isDark}
          aria-label="Switch to day mode"
          style={buttonBase}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.15)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <Sun
                      size={17}

            className="transition-[opacity,filter] duration-300 ease-in-out text-white"
            style={{
              opacity: !isDark ? 1 : 0.45,
              filter: !isDark ? 'drop-shadow(0 0 5px rgba(251,191,36,1))' : 'none',
            }}
          />
        </button>

        <button
          type="button"
          onClick={onToggle}
          role="radio"
          aria-checked={isDark}
          aria-label="Switch to night mode"
          style={{
            ...buttonBase,
            bottom: 0,
            top: 'auto',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.15)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <Moon
            className="transition-[opacity,filter] duration-300 ease-in-out text-white"
            size={17}
            style={{
              opacity: isDark ? 1 : 0.45,
              filter: isDark ? 'drop-shadow(0 0 5px rgba(167,139,250,1))' : 'none',
            }}
          />
        </button>

        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 999,
            border: '1px solid rgba(255,255,255,0.20)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.14), inset 0 -1px 0 rgba(0,0,0,0.18)',
            pointerEvents: 'none',
            zIndex: 3,
          }}
        />
      </div>
    </div>
  )
}
