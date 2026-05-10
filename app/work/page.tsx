import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import WorkSection from '@/components/sections/WorkSection'
import CTASection from '@/components/sections/CTASection'
import FilmReelMarquee from '@/components/sections/FilmReelMarquee'

export const metadata: Metadata = {
  title: 'Work | Virendra Parmar - Portfolio',
  description: 'Explore the cinematic portfolio of Virendra Parmar - weddings, commercial, music videos, and more.',
}

export default function WorkPage() {
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
              <span className="font-mono text-[10px] tracking-[5px] text-cinema-gold uppercase">Selected Work</span>
              <div className="h-px w-12 bg-cinema-gold opacity-60" />
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-cinema-white tracking-wider">
              Portfolio &{' '}
              <span className="text-gold-shimmer">Reels</span>
            </h1>
            <p className="font-body text-xl text-cinema-gray italic mt-4 max-w-xl mx-auto">
              Every frame tells a story. Explore my body of cinematic work.
            </p>
          </div>
        </section>
        <FilmReelMarquee />

        {/* Instagram Reels Section */}
        <section className="py-20 bg-cinema-dark">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-12 bg-cinema-gold opacity-60" />
                <span className="font-mono text-[10px] tracking-[5px] text-cinema-gold uppercase">Instagram Reels</span>
                <div className="h-px w-12 bg-cinema-gold opacity-60" />
              </div>
              <h2 className="font-display text-3xl text-cinema-white tracking-wider mb-4">
                Latest <span className="text-gold-shimmer">Reels</span>
              </h2>
              <a
                href="https://www.instagram.com/virendra421_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[3px] text-cinema-gold border border-cinema-gold-dark hover:border-cinema-gold px-5 py-3 transition-colors duration-300 uppercase"
              >
                📸 Follow @virendra421_ for Latest Content
                <span>→</span>
              </a>
            </div>

            {/* Reel placeholders (in real project, embed Instagram embeds) */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <a
                  key={i}
                  href="https://www.instagram.com/virendra421_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-[9/16] bg-cinema-card border border-cinema-border overflow-hidden"
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-${
                        [
                          '1519741497674-611481863552',
                          '1492691527719-9d1e07e534b4',
                          '1574717024653-61fd2cf4d44d',
                          '1529636444744-adffc9135a5e',
                          '1511671782779-c97d3d27a1d4',
                          '1558618666-fcd25c85cd64',
                          '1576267423429-569309b31e84',
                          '1460925895917-afdab827c52f',
                        ][i]
                      }?w=400&q=80')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className="absolute inset-0 bg-cinema-black/40 group-hover:bg-cinema-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 border-2 border-cinema-gold bg-cinema-black/60 flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[10px] border-l-cinema-gold border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-cinema-black to-transparent">
                    <div className="font-mono text-[8px] tracking-widest text-cinema-gray">REEL #{i + 1}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <WorkSection limit={100} />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
