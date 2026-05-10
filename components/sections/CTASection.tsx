'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useRef } from 'react'
import Link from 'next/link'

export default function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Parallax BG */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-cinema-black/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-cinema-black via-transparent to-cinema-black" />
      </motion.div>

      {/* Decorative lines */}
      <div className="absolute inset-0 flex">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex-1 border-r border-cinema-border/20" />
        ))}
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-cinema-gold opacity-60" />
            <span className="font-mono text-[10px] tracking-[5px] text-cinema-gold uppercase">Ready to create?</span>
            <div className="h-px w-16 bg-cinema-gold opacity-60" />
          </div>

          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-cinema-white tracking-wider leading-tight mb-6">
            Let's Make{' '}
            <span className="text-gold-shimmer">Something</span>{' '}
            Extraordinary
          </h2>

          <p className="font-body text-xl text-cinema-gray italic mb-12 max-w-xl mx-auto">
            Every project is a new canvas. Every story deserves to be told with passion and precision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="btn-cinema-filled py-5 px-14 text-sm">
              Start Your Project
            </Link>
            <div className="flex items-center gap-4">
              <a
                href="tel:8717818475"
                className="flex items-center gap-3 font-mono text-[11px] tracking-widest text-cinema-gray hover:text-cinema-gold transition-colors duration-300 uppercase"
              >
                <div className="w-8 h-8 border border-cinema-border flex items-center justify-center text-sm">
                  ☏
                </div>
                +91 87178 18475
              </a>
            </div>
          </div>

          {/* Contact details */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-cinema-border pt-12">
            {[
              { icon: '☏', label: 'Call / WhatsApp', value: '+91 87178 18475', href: 'tel:8717818475' },
              { icon: '@', label: 'Email', value: 'virendarparmar8475@gmail.com', href: 'mailto:virendarparmar8475@gmail.com' },
              { icon: '📸', label: 'Instagram', value: '@virendra421_', href: 'https://www.instagram.com/virendra421_/' },
            ].map((item) => (
              <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 hover:text-cinema-gold transition-colors duration-300"
              >
                <div className="w-10 h-10 border border-cinema-border group-hover:border-cinema-gold flex items-center justify-center text-cinema-gold transition-colors duration-300">
                  {item.icon}
                </div>
                <div className="font-mono text-[9px] tracking-[3px] text-cinema-gray uppercase">{item.label}</div>
                <div className="font-body text-cinema-white group-hover:text-cinema-gold text-sm transition-colors duration-300 break-all text-center">{item.value}</div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
