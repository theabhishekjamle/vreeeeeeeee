import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import AboutSection from '@/components/sections/AboutSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'
import FilmReelMarquee from '@/components/sections/FilmReelMarquee'

export const metadata: Metadata = {
  title: 'About | Virendra Parmar - Cinematographer',
  description: 'Learn about Virendra Parmar, a passionate cinematographer and video editor from Jabalpur with 5+ years of experience.',
}

export default function AboutPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-40 pb-20 relative bg-cinema-dark">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-cinema-gold opacity-60" />
              <span className="font-mono text-[10px] tracking-[5px] text-cinema-gold uppercase">The Filmmaker</span>
              <div className="h-px w-12 bg-cinema-gold opacity-60" />
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-cinema-white tracking-wider">
              About <span className="text-gold-shimmer">Virendra</span>
            </h1>
          </div>
        </section>
        <FilmReelMarquee />
        <AboutSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
