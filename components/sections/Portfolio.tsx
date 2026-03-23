'use client'

import Image from 'next/image'
import { useState } from 'react'

type Portfolio = {
  title: string
  company: string
  desc: string
  image: string
  tag: string
  tagColor: string
  detail?: string
  tech?: string[]
  link?: string
}

const allPortfolios: Portfolio[] = [
  {
    title: 'Company Profile',
    company: 'Unicorn Indonesia',
    desc: 'Corporate profile site with dynamic service sections, career pages, and admin panel.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    tag: 'Landing Page',
    tagColor: 'bg-amber-400 text-black',
    detail: 'A full-featured company profile built with Laravel & Blade. Includes dynamic service pages, career listings managed via Filament admin panel, and SEO-optimized pages.',
    tech: ['Laravel', 'Blade', 'Filament', 'Tailwind CSS'],
    link: '#',
  },
  {
    title: 'HRIS Software',
    company: 'PT. Bakti Transindo',
    desc: 'HR system to manage employee data, payroll, and attendance efficiently.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    tag: 'Web App',
    tagColor: 'bg-blue-500 text-white',
    detail: 'A comprehensive HRIS platform handling employee records, payroll computation, attendance tracking, and leave management with role-based access control.',
    tech: ['Laravel', 'Livewire', 'PostgreSQL', 'Tailwind CSS'],
    link: '#',
  },
  {
    title: 'Company Profile Ekspormaja',
    company: 'Ekspormaja',
    desc: 'WordPress-based profile site with advanced catalog features and business contact integration.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
    tag: 'Landing Page',
    tagColor: 'bg-amber-400 text-black',
    detail: 'A polished WordPress company profile with a custom product catalog, WhatsApp business integration, and a contact form connected to email notifications.',
    tech: ['WordPress', 'Elementor', 'PHP', 'MySQL'],
    link: '#',
  },
  {
    title: 'Hospital Management System',
    company: 'SIMRS Project',
    desc: 'Full-featured hospital system with queue management, patient records, and billing.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
    tag: 'Web App',
    tagColor: 'bg-green-500 text-white',
    detail: 'A Next.js App Router hospital system with modules for queue management (text-to-speech), patient record management, clinic scheduling, and role-based user access.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth', 'Tailwind CSS'],
    link: '#',
  },
  {
    title: 'Network Monitor Tool',
    company: 'Internal Tool',
    desc: 'Browser-based real-time network monitoring dashboard with alert notifications.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    tag: 'Tool',
    tagColor: 'bg-purple-500 text-white',
    detail: 'A standalone HTML/JS dashboard that monitors network device statuses in real-time using ping checks, with visual alerts and localStorage-based configuration.',
    tech: ['HTML', 'JavaScript', 'Tailwind CSS', 'localStorage'],
    link: '#',
  },
  {
    title: 'PromptVault',
    company: 'Personal Project',
    desc: 'A curated prompt gallery app with category filtering and local persistence.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
    tag: 'Tool',
    tagColor: 'bg-purple-500 text-white',
    detail: 'A browser-based prompt management app seeded from a JSON file on first load. Supports categorization, search, copy-to-clipboard, and full CRUD via localStorage.',
    tech: ['HTML', 'JavaScript', 'Tailwind CSS', 'localStorage'],
    link: '#',
  },
]

const INITIAL_COUNT = 3
const LOAD_MORE_COUNT = 3

export default function Portfolio() {
  const [visible, setVisible] = useState(INITIAL_COUNT)
  const [selected, setSelected] = useState<Portfolio | null>(null)

  const showMore = () => setVisible((v) => Math.min(v + LOAD_MORE_COUNT, allPortfolios.length))
  const hasMore = visible < allPortfolios.length

  return (
    <section id="portfolio" className="py-20 px-5 bg-[#0D0D14]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="sep mx-auto mb-5" />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Portfolio Showcase</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Explore my journey through projects, certifications, and technical expertise. Each section
            represents a reflection in my continuous learning path.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPortfolios.slice(0, visible).map((p, i) => (
            <div
              key={p.title}
              className="portfolio-card reveal rounded-2xl"
              style={{ transitionDelay: `${(i % LOAD_MORE_COUNT) * 0.1}s` }}
            >
              <div className="relative aspect-video">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                <div className="overlay absolute inset-0 flex items-center justify-center rounded-t-2xl">
                  <button
                    onClick={() => setSelected(p)}
                    className="bg-amber-400 text-black text-xs font-bold px-4 py-2 rounded-full"
                  >
                    View Project
                  </button>
                </div>
              </div>
              <div className="p-2">
                <span className={`text-xs mb-3 bg-white/5 border border-white/10 text-gray-300 px-3 py-1 ${p.tagColor} rounded-md font-bold`}>
                  {p.tag}
                </span>
                <h3 className="font-bold text-sm mt-3 mb-1">{p.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{p.desc}</p>
                <button
                  onClick={() => setSelected(p)}
                  className="inline-flex items-center gap-1 text-amber-400 text-xs font-medium mt-4 hover:gap-2 transition-all"
                >
                  View More
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load more */}
        {hasMore && (
          <div className="text-center mt-12 reveal">
            <button
              onClick={showMore}
              className="inline-flex items-center gap-2 border border-white/15 hover:border-amber-400/40 text-white px-7 py-3 rounded-full text-sm font-medium transition-all hover:bg-white/5"
            >
              See More Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* ── Popup Modal ── */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-[#16161f] border border-white/10 rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative aspect-video">
              <Image src={selected.image} alt={selected.title} className="w-full h-full object-cover" width={300} height={300} />
              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="text-xs text-gray-500 mb-1">{selected.company}</div>
              <span className={`text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-lg ${selected.tagColor} mt-3`}>
                {selected.tag}
              </span>
              <h3 className="text-xl font-extrabold">{selected.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{selected.detail}</p>

              {/* Tech stack */}
              {selected.tech && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.tech.map((t) => (
                    <span key={t} className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>
              )}


              <a href={selected.link ?? '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-bold px-6 py-2.5 rounded-full text-sm transition-all">
                Visit Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}