'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/data'

const categories = ['All', 'Wedding', 'Pre-Wedding', 'Commercial', 'Music Video', 'Fashion', 'Corporate', 'Real Estate']

export default function WorkSection({ limit = 6 }: { limit?: number }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  const filtered = activeFilter === 'All'
    ? projects.slice(0, limit)
    : projects.filter(p => p.category === activeFilter).slice(0, limit)

  return (
    <section className="py-32 relative overflow-hidden bg-cinema-black" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-cinema-gold opacity-60" />
            <span className="font-mono text-[10px] tracking-[5px] text-cinema-gold uppercase">Portfolio</span>
            <div className="h-px w-12 bg-cinema-gold opacity-60" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-cinema-white tracking-wider">
            Featured{' '}
            <span className="text-gold-shimmer">Work</span>
          </h2>
          <p className="font-body text-cinema-gray text-lg mt-4 italic">
            Every frame is a story. Every edit is an emotion.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-mono text-[10px] tracking-[3px] px-5 py-2.5 border transition-all duration-300 uppercase ${
                activeFilter === cat
                  ? 'border-cinema-gold bg-cinema-gold text-cinema-black'
                  : 'border-cinema-border text-cinema-gray hover:border-cinema-gold hover:text-cinema-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        {limit < projects.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-14"
          >
            <Link href="/work" className="btn-cinema inline-block py-4 px-12">
              View All Projects
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: any }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="video-card group relative overflow-hidden bg-cinema-card border border-cinema-border cursor-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cinema-black via-cinema-black/20 to-transparent" />

        {/* Play button overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 border-2 border-cinema-gold flex items-center justify-center bg-cinema-black/60 backdrop-blur-sm">
                <div className="w-0 h-0 border-l-[12px] border-l-cinema-gold border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="font-mono text-[8px] tracking-[3px] text-cinema-gold border border-cinema-gold-dark bg-cinema-black/80 px-2 py-1 uppercase">
            {project.category}
          </span>
        </div>

        {/* Year */}
        <div className="absolute top-4 right-4">
          <span className="font-mono text-[8px] tracking-widest text-cinema-gray">{project.year}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="font-display text-lg text-cinema-white tracking-wide group-hover:text-cinema-gold transition-colors duration-300 mb-2">
          {project.title}
        </h3>
        <p className="font-body text-cinema-gray text-sm leading-relaxed mb-4">
          {project.description.substring(0, 80)}...
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag: string) => (
            <span key={tag} className="font-mono text-[8px] tracking-widest text-cinema-gray border border-cinema-border px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom gold line animation */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-cinema-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  )
}
