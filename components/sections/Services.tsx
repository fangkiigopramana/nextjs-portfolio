const services = [
  {
    title: 'Full Stack Web Development',
    desc: 'Build scalable web applications with Laravel, Next.js, React, and modern databases.',
    icon: (
      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: 'System & IT Support',
    desc: 'Hands-on experience in system maintenance, troubleshooting, and IT operations.',
    icon: (
      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93A10 10 0 0 0 4.93 19.07M4.93 4.93a10 10 0 0 0 14.14 14.14" />
      </svg>
    ),
  },
  {
    title: 'Backend & API Integration',
    desc: 'RESTful APIs, third-party integrations, and robust backend architectures.',
    icon: (
      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />
      </svg>
    ),
  },
  {
    title: 'Automation & Productivity Tools',
    desc: 'Streamline workflows with custom automation scripts and productivity solutions.',
    icon: (
      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m3.64-5.36-.71-.71m12.02 12.02-.71-.71M6.34 17.66l-.71.71m12.02-12.02-.71.71" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section className="py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="service-card reveal rounded-2xl p-6"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center mb-4">
                {s.icon}
              </div>
              <h3 className="font-bold text-sm mb-2">{s.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
