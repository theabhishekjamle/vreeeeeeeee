'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background parallax video/image */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cinema-black" />
        {/* Cinematic background with overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cinema-black via-cinema-black/60 to-cinema-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-cinema-black/80 via-transparent to-cinema-black/80" />
      </motion.div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 grid-bg opacity-20" />

      {/* Scanline effect */}
      <div className="absolute inset-0 z-0 scanline pointer-events-none" />

      {/* Floating particles */}
      <ParticleField />

      {/* Film sprockets left */}
      <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-around items-center py-8 opacity-20 z-10">
        {Array.from({ length: 14 }).map((_, i) => (
          <div key={i} className="w-4 h-4 rounded-sm border border-cinema-gold-dark" />
        ))}
      </div>
      {/* Film sprockets right */}
      <div className="absolute right-0 top-0 bottom-0 w-8 flex flex-col justify-around items-center py-8 opacity-20 z-10">
        {Array.from({ length: 14 }).map((_, i) => (
          <div key={i} className="w-4 h-4 rounded-sm border border-cinema-gold-dark" />
        ))}
      </div>

      {/* Content */}
      <motion.div style={{ y: textY, opacity }} className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-16 bg-cinema-gold opacity-60" />
          <span className="font-mono text-[11px] tracking-[6px] text-cinema-gold uppercase">
            Cinematographer & Editor
          </span>
          <div className="h-px w-16 bg-cinema-gold opacity-60" />
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-display text-white leading-none tracking-wider">
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] text-gold-shimmer">
              VIRENDRA
            </span>
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] text-cinema-white opacity-90 -mt-2 md:-mt-4">
              PARMAR
            </span>
          </h1>
        </motion.div>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-6 md:mt-8"
        >
          <p className="font-body text-xl md:text-2xl text-cinema-gray-light italic">
            Crafting{' '}
            <TypeAnimation
              sequence={[
                'cinematic stories', 2000,
                'visual emotions', 2000,
                'wedding memories', 2000,
                'brand visions', 2000,
                'motion art', 2000,
              ]}
              wrapper="span"
              repeat={Infinity}
              className="text-cinema-gold not-italic font-normal"
            />
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/work" className="btn-cinema-filled text-sm py-4 px-10 inline-block">
            View My Work
          </Link>
          <Link href="/contact" className="btn-cinema text-sm py-4 px-10 inline-block">
            Let's Create
          </Link>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          {[
            { val: '150+', label: 'Projects' },
            { val: '5+', label: 'Years' },
            { val: '50+', label: 'Clients' },
            { val: '100%', label: 'Satisfaction' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl text-cinema-gold">{s.val}</div>
              <div className="font-mono text-[9px] tracking-[3px] text-cinema-gray mt-1 uppercase">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] tracking-[4px] text-cinema-gray uppercase">Scroll</span>
        <div className="w-px h-12 bg-cinema-gold-dark relative overflow-hidden">
          <motion.div
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-x-0 top-0 h-1/2 bg-cinema-gold"
          />
        </div>
      </motion.div>
    </section>
  )
}

function ParticleField() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 5,
  }))

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cinema-gold"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: 0.3,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
