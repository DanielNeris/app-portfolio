import { Hero } from '@/components/sections/hero'
import { Projects } from '@/components/sections/projects'
import { About } from '@/components/sections/about'
import { Experience } from '@/components/sections/experience'
import { Skills } from '@/components/sections/skills'
import { Education } from '@/components/sections/education'
import { Certifications } from '@/components/sections/certifications'
import { Languages } from '@/components/sections/languages'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Certifications />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
