'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { navItems } from '@/lib/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* Progress Bar */}
      <ScrollProgress />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-cinema-black/95 backdrop-blur-xl border-b border-cinema-border py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 border border-cinema-gold opacity-60 rotate-45 transition-transform duration-500 group-hover:rotate-0" />
              <div className="absolute inset-[6px] bg-cinema-gold opacity-80 rotate-45 transition-transform duration-500 group-hover:rotate-90" />
              <span className="absolute inset-0 flex items-center justify-center text-cinema-black font-display text-xs font-bold z-10">V</span>
            </div>
            <div>
              <div className="font-display text-cinema-white text-sm tracking-widest leading-none">VIRENDRA</div>
              <div className="font-mono text-cinema-gold text-[9px] tracking-[4px] leading-none mt-1">PARMAR</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${pathname === item.href ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="hidden md:block btn-cinema text-xs py-3 px-6"
            >
              Hire Me
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 w-8 h-6 justify-center cursor-none"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-full h-px bg-cinema-gold origin-left"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="block w-3/4 h-px bg-cinema-gold"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-full h-px bg-cinema-gold origin-left"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ opacity: 1, clipPath: 'circle(200% at calc(100% - 40px) 40px)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-cinema-black flex flex-col items-center justify-center"
          >
            <div className="absolute inset-0 grid-bg opacity-30" />
            {/* Film holes decoration */}
            <div className="absolute top-0 left-0 right-0 flex justify-between px-4 py-2 overflow-hidden opacity-20">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="w-5 h-5 rounded-full border border-cinema-gold-dark" />
              ))}
            </div>

            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    className={`font-display text-4xl md:text-5xl tracking-widest transition-colors duration-300 ${
                      pathname === item.href ? 'text-cinema-gold' : 'text-cinema-white hover:text-cinema-gold'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link href="/contact" className="btn-cinema-filled mt-4">
                  Hire Me
                </Link>
              </motion.div>
            </nav>

            {/* Social in mobile menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 flex items-center gap-6"
            >
              <a
                href="https://www.instagram.com/virendra421_/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-cinema-gray hover:text-cinema-gold tracking-widest transition-colors"
              >
                INSTAGRAM
              </a>
              <span className="w-8 h-px bg-cinema-gold-dark" />
              <a
                href="tel:8717818475"
                className="font-mono text-xs text-cinema-gray hover:text-cinema-gold tracking-widest transition-colors"
              >
                +91 87178 18475
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-cinema-border">
      <motion.div
        className="h-full bg-cinema-gold"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
