'use client'

import { useEffect, useRef, useState } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const onScroll = () => {
      let current = ''
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 100) {
          current = s.id
        }
      })
      if (current) setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-bold text-lg" style={{ fontFamily: "'Syne', sans-serif" }}>
          Fangki<span className="text-amber-400">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">

          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors pb-1 border-b-2 ${active === l.href.slice(1)
                  ? 'text-white border-amber-400'
                  : 'text-gray-400 border-transparent hover:text-white'
                }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black text-sm font-semibold px-5 py-2 rounded-full transition-colors"
        >
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden text-gray-300 hover:text-white p-1"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div ref={menuRef} className="md:hidden flex flex-col px-5 pb-5 gap-4 bg-[#0A0A0F]/95 border-t border-white/5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-sm py-1"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex w-fit bg-amber-400 hover:bg-amber-300 text-black text-sm font-semibold px-5 py-2 rounded-full transition-colors mt-1"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}
