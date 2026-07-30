"use client";

import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const TOGGLE_HEIGHT = 92;
const TOGGLE_WIDTH = 44;
const INDICATOR_SIZE = 38;
const INDICATOR_OFFSET = 4;
const BUTTON_HEIGHT = 46;

const dayGradient = "linear-gradient(150deg, rgba(251,191,36,0.75) 0%, rgba(245,158,11,0.55) 100%)";
const nightGradient = "linear-gradient(150deg, rgba(139,92,246,0.70) 0%, rgba(99,102,241,0.55) 100%)";
const dayShadow = "0 0 14px 3px rgba(251,191,36,0.55), inset 0 1px 0 rgba(255,255,255,0.22)";
const nightShadow = "0 0 14px 3px rgba(139,92,246,0.55), inset 0 1px 0 rgba(255,255,255,0.22)";

const buttonBase = {
  alignItems: "center",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  display: "flex",
  height: BUTTON_HEIGHT,
  justifyContent: "center",
  left: 0,
  padding: 0,
  position: "absolute" as const,
  right: 0,
  transition: "transform 0.16s cubic-bezier(0.34,1.56,0.64,1)",
  zIndex: 2,
};

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <div
      className="fixed right-5 top-1/2 -translate-y-1/2 z-50"
      role="radiogroup"
      aria-label="Theme mode"
    >
      <div
        style={{
          borderRadius: 999,
          height: TOGGLE_HEIGHT,
          position: "relative",
          width: TOGGLE_WIDTH,
        }}
      >
        <div
          aria-hidden="true"
          className="frosted-bg"
          style={{
            borderRadius: 999,
            inset: 0,
            position: "absolute",
          }}
        />

        <span
          aria-hidden="true"
          style={{
            background: isDark ? nightGradient : dayGradient,
            borderRadius: 999,
            boxShadow: isDark ? nightShadow : dayShadow,
            height: INDICATOR_SIZE,
            left: INDICATOR_OFFSET,
            position: "absolute",
            right: INDICATOR_OFFSET,
            top: isDark ? 50 : 4,
            transition:
              "top 0.46s cubic-bezier(0.34,1.56,0.64,1), background 0.38s ease, box-shadow 0.38s ease",
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
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.15)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        >
          <Sun
            size={17}
            className="transition-[opacity,filter] duration-300 ease-in-out text-white"
            style={{
              filter: !isDark ? "drop-shadow(0 0 5px rgba(251,191,36,1))" : "none",
              opacity: !isDark ? 1 : 0.45,
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
            top: "auto",
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.15)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        >
          <Moon
            className="transition-[opacity,filter] duration-300 ease-in-out text-white"
            size={17}
            style={{
              filter: isDark ? "drop-shadow(0 0 5px rgba(167,139,250,1))" : "none",
              opacity: isDark ? 1 : 0.45,
            }}
          />
        </button>

        <div
          aria-hidden="true"
          style={{
            border: "1px solid rgba(255,255,255,0.20)",
            borderRadius: 999,
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.14), inset 0 -1px 0 rgba(0,0,0,0.18)",
            inset: 0,
            pointerEvents: "none",
            position: "absolute",
            zIndex: 3,
          }}
        />
      </div>
    </div>
  );
}
