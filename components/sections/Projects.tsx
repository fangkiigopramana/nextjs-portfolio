const images = [
  { src: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&q=80', alt: 'Project 1', tall: true },
  { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80', alt: 'Project 2' },
  { src: 'https://images.unsplash.com/photo-1490750967868-88df5691cc2f?w=600&q=80', alt: 'Project 3' },
  { src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80', alt: 'Project 4' },
  { src: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80', alt: 'Project 5' },
  { src: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80', alt: 'Project 6' },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="sep mx-auto mb-5" />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Our Projects</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Here are some projects I&apos;ve worked on, ranging from internal systems to public-facing websites.
          </p>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 reveal">
          {images.map((img, i) => (
            <div
              key={img.alt}
              className={`img-wrap${img.tall ? ' md:row-span-2' : ''}`}
              style={{ aspectRatio: img.tall ? undefined : '4/3' }}
            >
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
