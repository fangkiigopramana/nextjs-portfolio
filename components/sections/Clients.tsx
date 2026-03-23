const clients = [
  { name: 'Techade\nID', color: 'text-gray-400' },
  { name: 'BAKTI', color: 'text-amber-400' },
  { name: 'Ekspor\nmaja', color: 'text-blue-400' },
  { name: 'Unicorn\nID', color: 'text-gray-400' },
]

export default function Clients() {
  return (
    <section className="py-16 px-5 bg-[#0D0D14]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 reveal">
          <div className="sep mx-auto mb-5" />
          <h2 className="text-3xl font-extrabold">Our Clients</h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 reveal">
          {clients.map((c) => (
            <div
              key={c.name}
              className="w-20 h-20 rounded-full bg-white/5 border border-white/8 flex items-center justify-center hover:border-amber-400/30 transition-colors cursor-default"
            >
              <span className={`${c.color} text-xs font-extrabold text-center leading-tight whitespace-pre-line`}>
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
