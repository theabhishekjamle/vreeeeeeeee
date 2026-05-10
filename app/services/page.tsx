import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import ServicesSection from '@/components/sections/ServicesSection'
import CTASection from '@/components/sections/CTASection'
import FilmReelMarquee from '@/components/sections/FilmReelMarquee'

export const metadata: Metadata = {
  title: 'Services | Virendra Parmar - Video Production',
  description: 'Professional video shooting, editing, After Effects, and cinematic production services by Virendra Parmar.',
}

export default function ServicesPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <section className="pt-40 pb-20 relative bg-cinema-dark">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-cinema-gold opacity-60" />
              <span className="font-mono text-[10px] tracking-[5px] text-cinema-gold uppercase">What I Offer</span>
              <div className="h-px w-12 bg-cinema-gold opacity-60" />
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-cinema-white tracking-wider">
              My <span className="text-gold-shimmer">Services</span>
            </h1>
            <p className="font-body text-xl text-cinema-gray italic mt-4 max-w-xl mx-auto">
              Complete cinematic production from concept to final cut.
            </p>
          </div>
        </section>
        <FilmReelMarquee />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
