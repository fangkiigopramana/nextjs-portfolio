import Image from "next/image"

const skills = ['Laravel', 'Next.js', 'React', 'PostgreSQL', 'Tailwind CSS', 'Node.js', 'Filament', 'Prisma']

export default function About() {
  return (
    <section id="about" className="py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="reveal relative">
            <div className="relative z-10 rounded-2xl overflow-hidden max-w-sm mx-auto md:mx-0" style={{ aspectRatio: '4/5' }}>
              <Image
                src="/about-me.webp"
                alt="Fangki"
                width={500}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-amber-400/20 rounded-2xl pointer-events-none" />
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-6 right-0 md:right-6 z-20 bg-[#0A0A0F] border border-white/10 rounded-2xl px-5 py-3 shadow-2xl">
              <div className="text-xs text-gray-500 mb-0.5">Stack</div>
              <div className="flex gap-2 items-center text-xs font-semibold">
                <span className="text-amber-400">Laravel</span>
                <span className="text-gray-600">·</span>
                <span className="text-blue-400">Next.js</span>
                <span className="text-gray-600">·</span>
                <span className="text-green-400">SQL</span>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-amber-400/15 rounded-xl pointer-events-none" />
          </div>

          {/* Text */}
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="sep mb-5" />
            <h2 className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight">About Me</h2>
            <p className="text-gray-400 text-sm leading-7 mb-4">
              Hello, I&apos;m Fangki Igo Pramana — a passionate Full Stack Web Developer and IT doer with
              hands-on experience building scalable web applications. I work extensively with Laravel,
              Next.js, SQL databases, and have practical experience in system maintenance, automation,
              and IT support.
            </p>
            <p className="text-gray-400 text-sm leading-7 mb-8">
              With a strong focus on continuous learning, I actively explore new technologies such as AI
              integration tools, cloud services, and digital tools that make development more efficient.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="tag bg-white/5 border border-white/10 text-gray-300 px-3 py-1.5 rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>

            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-semibold px-6 py-3 rounded-full transition-all text-sm"
            >
              See My Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
