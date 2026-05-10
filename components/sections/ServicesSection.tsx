'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { services } from '@/lib/data'

const serviceIcons = ['🎬', '✂️', '✨', '💍', '📱', '🏢']

export default function ServicesSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="py-32 relative overflow-hidden bg-cinema-dark" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cinema-gold-dark to-transparent opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cinema-gold-dark to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-cinema-gold opacity-60" />
            <span className="font-mono text-[10px] tracking-[5px] text-cinema-gold uppercase">What I Do</span>
            <div className="h-px w-12 bg-cinema-gold opacity-60" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-cinema-white tracking-wider">
            Services &{' '}
            <span className="text-gold-shimmer">Expertise</span>
          </h2>
          <p className="font-body text-cinema-gray text-lg md:text-xl mt-4 max-w-2xl mx-auto italic">
            From raw footage to cinematic masterpieces — complete visual storytelling solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <Link href="/services" className="btn-cinema inline-block py-4 px-12">
            Explore All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index, inView }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      className="group relative bg-cinema-card border border-cinema-border p-8 overflow-hidden cursor-none"
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cinema-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Top border animated */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cinema-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      
      {/* Corner decoration */}
      <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-cinema-gold-dark opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-cinema-gold-dark opacity-40 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <div className="text-4xl mb-6 block">{service.icon}</div>

      {/* Number */}
      <div className="font-display text-5xl font-bold text-cinema-border leading-none absolute top-6 right-8 group-hover:text-cinema-gold/10 transition-colors duration-300">
        {String(index + 1).padStart(2, '0')}
      </div>

      <h3 className="font-display text-lg text-cinema-white tracking-wide mb-3 group-hover:text-cinema-gold transition-colors duration-300">
        {service.title}
      </h3>

      <p className="font-body text-cinema-gray text-base leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-2">
        {service.features.slice(0, 3).map((feature: string) => (
          <li key={feature} className="flex items-center gap-3 font-mono text-[10px] text-cinema-gray tracking-widest">
            <span className="w-4 h-px bg-cinema-gold-dark group-hover:bg-cinema-gold transition-colors duration-300" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Tools */}
      {service.tools && (
        <div className="mt-6 flex flex-wrap gap-2">
          {service.tools.map((tool: string) => (
            <span
              key={tool}
              className="font-mono text-[8px] tracking-widest text-cinema-gold border border-cinema-gold-dark px-2 py-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
            >
              {tool}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  )
}
