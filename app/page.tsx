import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import HeroSection from '@/components/sections/HeroSection'
import FilmReelMarquee from '@/components/sections/FilmReelMarquee'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import WorkSection from '@/components/sections/WorkSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <FilmReelMarquee />
        <AboutSection />
        <ServicesSection />
        <WorkSection limit={6} />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
