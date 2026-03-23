import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fangki Portfolio',
  description: 'Full Stack Web Developer — Laravel, Next.js, React',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}