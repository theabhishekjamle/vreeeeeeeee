'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { testimonials } from '@/lib/data'

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  useEffect(() => {
    if (!inView) return
    const timer = setInterval(() => setActive(prev => (prev + 1) % testimonials.length), 4000)
    return () => clearInterval(timer)
  }, [inView])

  return (
    <section className="py-32 relative bg-cinema-black overflow-hidden" ref={ref}>
      {/* Background quote mark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[20rem] text-cinema-card leading-none pointer-events-none select-none opacity-30">
        "
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-cinema-gold opacity-60" />
            <span className="font-mono text-[10px] tracking-[5px] text-cinema-gold uppercase">Testimonials</span>
            <div className="h-px w-12 bg-cinema-gold opacity-60" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-cinema-white tracking-wider">
            What Clients{' '}
            <span className="text-gold-shimmer">Say</span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="relative min-h-[280px] flex items-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full text-center px-4 md:px-12"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                  <span key={i} className="text-cinema-gold text-xl">★</span>
                ))}
              </div>
              
              {/* Quote */}
              <p className="font-body text-xl md:text-2xl text-cinema-white italic leading-relaxed mb-8">
                "{testimonials[active].content}"
              </p>

              {/* Author */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-12 h-px bg-cinema-gold opacity-60 mb-4" />
                <div className="font-display text-lg text-cinema-gold tracking-widest">
                  {testimonials[active].name}
                </div>
                <div className="font-mono text-[9px] tracking-[3px] text-cinema-gray uppercase">
                  {testimonials[active].role}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 ${
                i === active
                  ? 'w-8 h-1 bg-cinema-gold'
                  : 'w-1 h-1 rounded-full bg-cinema-border hover:bg-cinema-gray'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
