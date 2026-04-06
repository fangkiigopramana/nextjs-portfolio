'use client'

import { useScrollReveal } from '@/components/ui/useScrollReveal'

import Navbar    from '@/components/Navbar'
import Hero      from '@/components/sections/Hero'
import Services  from '@/components/sections/Services'
import About     from '@/components/sections/About'
import Portfolio from '@/components/sections/Portfolio'
import Projects  from '@/components/sections/Projects'
import Clients   from '@/components/sections/Clients'
import Contact   from '@/components/sections/Contact'
import Footer    from '@/components/Footer'

export default function Home() {
  useScrollReveal()

  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      {/* <Projects /> */}
      <Clients />
      <Contact />
      <Footer />
    </main>
  )
}
