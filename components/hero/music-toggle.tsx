'use client'

import { useEffect, useRef, useState } from 'react'
import { Music, VolumeX } from 'lucide-react'

const AUDIO_SRC = '/forest-jungle-relaxation.mp3'

export function MusicToggle() {
  const [playing, setPlaying] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio(AUDIO_SRC)
    audio.loop = true
    audio.volume = 0.5
    audioRef.current = audio
    audio.play().catch(() => setPlaying(false))

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [])

  const handleToggle = () => {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      audio.pause()
    } else {
      audio.play().catch(() => {})
    }
    setPlaying(!playing)
  }

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50" style={{ marginTop: -70 }}>
      <button
        type="button"
        onClick={handleToggle}
        aria-label={playing ? 'Stop background music' : 'Play background music'}
        className="flex items-center justify-center w-11 h-11 rounded-full frosted-bg cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95"
        style={{ border: '1px solid rgba(255,255,255,0.20)' }}
      >
        {playing ? (
          <Music className="text-white" size={16} />
        ) : (
          <VolumeX className="text-white/50" size={16} />
        )}
      </button>
    </div>
  )
}
