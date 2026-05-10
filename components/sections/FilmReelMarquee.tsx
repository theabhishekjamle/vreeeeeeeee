'use client'
import { motion } from 'framer-motion'

const reelItems = [
  '🎬 Cinematic Films',
  '✨ After Effects',
  '✂️ Premiere Pro',
  '💍 Wedding Films',
  '🚁 Aerial Drone',
  '🎨 Color Grading',
  '📱 Instagram Reels',
  '🏢 Corporate Videos',
  '🎵 Music Videos',
  '⚡ Motion Graphics',
]

export default function FilmReelMarquee() {
  const doubled = [...reelItems, ...reelItems]

  return (
    <div className="relative overflow-hidden bg-cinema-black py-6 border-y border-cinema-border">
      {/* Top film strip */}
      <div className="flex gap-1 mb-4 overflow-hidden opacity-30">
        {Array.from({ length: 60 }).map((_, i) => (
          <div key={i} className="flex-shrink-0 w-6 h-4 bg-cinema-card border border-cinema-border rounded-sm" />
        ))}
      </div>

      {/* Marquee content */}
      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="flex gap-8 flex-shrink-0 whitespace-nowrap"
        >
          {doubled.map((item, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="font-display text-sm tracking-widest text-cinema-gold uppercase">
                {item}
              </span>
              <span className="text-cinema-border text-xl">◆</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom film strip */}
      <div className="flex gap-1 mt-4 overflow-hidden opacity-30">
        {Array.from({ length: 60 }).map((_, i) => (
          <div key={i} className="flex-shrink-0 w-6 h-4 bg-cinema-card border border-cinema-border rounded-sm" />
        ))}
      </div>

      {/* Gradient fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cinema-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cinema-black to-transparent z-10 pointer-events-none" />
    </div>
  )
}
