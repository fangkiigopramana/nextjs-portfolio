const footerLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
]

const footerServices = ['Web Development', 'IT Support', 'API Integration', 'Automation']

const socialIcons = [
  {
    href: '#',
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.932z" />
      </svg>
    ),
  },
  {
    href: '#',
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    href: '#',
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#0D0D14] border-t border-white/5 py-10 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="font-bold text-xl mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
              Fangki<span className="text-amber-400">.</span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              Building digital experiences that are smooth, scalable, and made to impress. Based in Indonesia.
            </p>
            {/* <div className="flex gap-3 mt-4">
              {socialIcons.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-amber-400/10 flex items-center justify-center text-gray-500 hover:text-amber-400 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div> */}
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <div className="text-gray-300 font-semibold mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
                Quick Links
              </div>
              <ul className="space-y-2">
                {footerLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-gray-500 hover:text-amber-400 transition-colors text-xs">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-gray-300 font-semibold mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
                Services
              </div>
              <ul className="space-y-2">
                {footerServices.map((s) => (
                  <li key={s}>
                    <span className="text-gray-500 text-xs">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">© {new Date().getFullYear()} Fangki Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
