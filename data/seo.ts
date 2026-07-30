import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Dev - Full-Stack AI Engineer',
  description:
    'Modern software, built to think, shipped end-to-end. Designing and building AI-native products.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { color: '#fafaf9', media: '(prefers-color-scheme: light)' },
    { color: '#1c1917', media: '(prefers-color-scheme: dark)' },
  ],
}
