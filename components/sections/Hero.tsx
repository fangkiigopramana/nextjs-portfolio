export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-medium tracking-widest uppercase mb-6 bg-amber-400/10 border border-amber-400/20 px-4 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          Available for collaboration
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.08] mb-5">
          Hi there 👋<br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-500">
            I&apos;m Fangki
          </span>
        </h1>

        <p className="text-gray-400 text-base md:text-lg max-w-xs mx-auto mb-10 leading-relaxed text-center">
          Enhancing digital experiences that are smooth,
          scalable, and made to impress.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="#portfolio"
            className="bg-amber-400 hover:bg-amber-300 text-black font-semibold px-7 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-amber-400/25 text-sm"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-white/15 hover:border-amber-400/40 text-white font-medium px-7 py-3 rounded-full transition-all text-sm hover:bg-white/5"
          >
            Contact Me
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-sm mx-auto">
          {[
            { value: '2+', label: 'Years Exp' },
            { value: '5+', label: 'Projects' },
            { value: '4+', label: 'Clients' },
          ].map((stat, i) => (
            <div key={stat.label} className={`text-center${i === 1 ? ' border-x border-white/8' : ''}`}>
              <div className="text-2xl font-extrabold text-amber-400" style={{ fontFamily: "'Syne', sans-serif" }}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 text-xs">
        <span>scroll</span>
        <div className="w-px h-10 bg-linear-to-b from-gray-600 to-transparent animate-bounce" />
      </div>
    </section>
  )
}
