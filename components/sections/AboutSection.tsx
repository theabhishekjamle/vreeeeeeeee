'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { tools } from '@/lib/data'

function useCountUp(target: number, shouldStart: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!shouldStart) return
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [shouldStart, target])
  return count
}

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.3, triggerOnce: true })
  const { ref: contentRef, inView: contentInView } = useInView({ threshold: 0.1, triggerOnce: true })

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  const stats = [
    { value: 150, suffix: '+', label: 'Projects Completed', desc: 'Across diverse genres' },
    { value: 5, suffix: '+', label: 'Years Experience', desc: 'In cinematography' },
    { value: 50, suffix: '+', label: 'Happy Clients', desc: 'From across India' },
    { value: 100, suffix: '%', label: 'Client Satisfaction', desc: 'Always delivered' },
  ]

  return (
    <section className="py-32 relative bg-cinema-dark overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cinema-gold-dark to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 40 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center justify-center gap-4 mb-20"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cinema-gold-dark opacity-40" />
          <span className="font-mono text-[10px] tracking-[6px] text-cinema-gold uppercase">About Me</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cinema-gold-dark opacity-40" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Parallax Image Block */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <motion.div style={{ y: imgY }} className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1606741965509-717a8de76e43?w=800&q=80"
                  alt="Virendra Parmar - Cinematographer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cinema-black/60 via-transparent to-transparent" />
              </div>
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-cinema-gold opacity-60" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-cinema-gold opacity-60" />
              {/* Gold badge */}
              <div className="absolute bottom-8 -right-6 bg-cinema-gold text-cinema-black px-6 py-4 font-display text-sm tracking-widest">
                DIRECTOR
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-cinema-white tracking-wider leading-tight mb-6">
              The{' '}
              <span className="text-gold-shimmer">Vision</span>{' '}
              Behind the Lens
            </h2>
            <div className="space-y-4 font-body text-cinema-gray text-lg leading-relaxed">
              <p>
                I'm <span className="text-cinema-white font-semibold">Virendra Parmar</span>, a passionate cinematographer and video editor based in Jabalpur with over 5 years of experience crafting visual stories that transcend the ordinary.
              </p>
              <p>
                My journey began with a simple camera and an unquenchable thirst to capture life's most precious moments. Today, I blend technical mastery with artistic vision to create cinematic experiences that leave audiences breathless.
              </p>
              <p>
                Specializing in <span className="text-cinema-gold">wedding films</span>, <span className="text-cinema-gold">commercial productions</span>, and <span className="text-cinema-gold">motion graphics</span>, I bring Adobe After Effects and Premiere Pro workflows to life with advanced cinematic techniques.
              </p>
            </div>

            {/* Signature line */}
            <div className="mt-10 flex items-center gap-6">
              <div className="h-px w-12 bg-cinema-gold opacity-60" />
              <div>
                <div className="font-display text-2xl text-cinema-gold tracking-widest">Virendra</div>
                <div className="font-mono text-[9px] tracking-[4px] text-cinema-gray uppercase">Cinematographer & Editor</div>
              </div>
            </div>

            {/* Social link */}
            <div className="mt-8">
              <a
                href="https://www.instagram.com/virendra421_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[3px] text-cinema-gray hover:text-cinema-gold transition-colors duration-300 uppercase border border-cinema-border hover:border-cinema-gold px-4 py-3"
              >
                <span className="text-cinema-gold">📸</span>
                @virendra421_ on Instagram
                <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} inView={statsInView} />
          ))}
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <div className="font-mono text-[10px] tracking-[5px] text-cinema-gold uppercase">
              Tools & Technology
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={contentInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.05 }}
                whileHover={{ scale: 1.05, borderColor: '#C9A84C' }}
                className="flex items-center gap-2 px-4 py-3 bg-cinema-card border border-cinema-border"
              >
                <span className="text-lg">{tool.icon}</span>
                <div>
                  <div className="font-mono text-[9px] text-cinema-white tracking-widest">{tool.name}</div>
                  <div className="font-mono text-[8px] text-cinema-gray tracking-widest">{tool.category}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function StatCard({ value, suffix, label, desc, index, inView }: any) {
  const count = useCountUp(value, inView)
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7 }}
      className="bg-cinema-card border border-cinema-border p-6 text-center group hover:border-cinema-gold-dark transition-colors duration-300"
    >
      <div className="font-display text-4xl md:text-5xl text-cinema-gold leading-none">
        {count}{suffix}
      </div>
      <div className="font-display text-sm text-cinema-white tracking-wider mt-2">{label}</div>
      <div className="font-mono text-[9px] text-cinema-gray tracking-widest mt-1 uppercase">{desc}</div>
    </motion.div>
  )
}
