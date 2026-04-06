import Image from 'next/image'

const clients = [
  { name: 'Techade\nID', image: '/images/clients/logo-techade.png', color: 'text-gray-400' },
  { name: 'BAKTI', image: '/images/clients/logo-bakti.png', color: 'text-amber-400' },
  { name: 'Eksporinaja', image: '/images/clients/logo-eksporinaja.webp', color: 'text-amber-400' },
  { name: 'Unicorn Indonesia', image: '/images/clients/logo-uniconindonesia.png', color: 'text-gray-400' },
]

export default function Clients() {
  return (
    <section className="py-16 px-5 bg-[#0D0D14]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 reveal">
          <div className="sep mx-auto mb-5" />
          <h4 className="text-2xl font-extrabold">People & Companies I have Collaborated With</h4>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 reveal">
          {clients.map((c) => (
            <div
              key={c.name}
              className="w-50 h-50 rounded-full bg-white border border-white/8 flex items-center justify-center hover:border-amber-400/30 transition-colors cursor-default"
            >
              <Image 
                src={c.image} 
                alt={c.name} 
                width={90} 
                height={90}
                className="w-32 h-32 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
