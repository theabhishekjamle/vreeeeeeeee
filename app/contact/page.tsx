'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import FilmReelMarquee from '@/components/sections/FilmReelMarquee'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500)) // Simulating submit
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-40 pb-20 relative bg-cinema-dark">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-cinema-gold opacity-60" />
              <span className="font-mono text-[10px] tracking-[5px] text-cinema-gold uppercase">Get In Touch</span>
              <div className="h-px w-12 bg-cinema-gold opacity-60" />
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-cinema-white tracking-wider">
              Start Your{' '}
              <span className="text-gold-shimmer">Project</span>
            </h1>
            <p className="font-body text-xl text-cinema-gray italic mt-4">
              Let's discuss how we can bring your vision to life.
            </p>
          </div>
        </section>
        <FilmReelMarquee />

        {/* Contact Section */}
        <section className="py-24 relative bg-cinema-black" ref={ref}>
          <div className="absolute inset-0 grid-bg opacity-15" />
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="lg:col-span-2 space-y-10"
              >
                <div>
                  <h2 className="font-display text-3xl text-cinema-white tracking-wider mb-6">
                    Let's <span className="text-cinema-gold">Connect</span>
                  </h2>
                  <p className="font-body text-cinema-gray text-lg leading-relaxed">
                    Whether it's a wedding, corporate video, or creative project — I'd love to hear about your vision and how I can help bring it to life.
                  </p>
                </div>

                {/* Contact Cards */}
                {[
                  {
                    icon: '☏',
                    label: 'Phone / WhatsApp',
                    value: '+91 87178 18475',
                    href: 'tel:8717818475',
                    sub: 'Call or WhatsApp anytime',
                  },
                  {
                    icon: '@',
                    label: 'Email',
                    value: 'virendarparmar8475@gmail.com',
                    href: 'mailto:virendarparmar8475@gmail.com',
                    sub: 'I respond within 24 hours',
                  },
                  {
                    icon: '📸',
                    label: 'Instagram',
                    value: '@virendra421_',
                    href: 'https://www.instagram.com/virendra421_/',
                    sub: 'See latest work & reels',
                    external: true,
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="group flex items-start gap-4 p-6 bg-cinema-card border border-cinema-border hover:border-cinema-gold-dark transition-colors duration-300"
                  >
                    <div className="w-10 h-10 border border-cinema-border group-hover:border-cinema-gold flex items-center justify-center text-cinema-gold flex-shrink-0 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-mono text-[9px] tracking-[3px] text-cinema-gray uppercase mb-1">{item.label}</div>
                      <div className="font-body text-cinema-white group-hover:text-cinema-gold transition-colors duration-300 break-all">{item.value}</div>
                      <div className="font-mono text-[8px] text-cinema-gray mt-1 tracking-widest">{item.sub}</div>
                    </div>
                  </a>
                ))}

                {/* Availability Badge */}
                <div className="flex items-center gap-3 p-4 border border-cinema-border">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-mono text-[10px] tracking-[3px] text-cinema-gray uppercase">
                    Available for New Projects
                  </span>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-3"
              >
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex items-center justify-center text-center p-12 bg-cinema-card border border-cinema-gold"
                  >
                    <div>
                      <div className="text-5xl mb-6">🎬</div>
                      <h3 className="font-display text-3xl text-cinema-gold tracking-wider mb-4">Message Sent!</h3>
                      <p className="font-body text-cinema-gray text-lg italic">
                        Thank you for reaching out. I'll get back to you within 24 hours. Let's create something extraordinary together!
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', service: '', message: '' }) }}
                        className="btn-cinema mt-8 inline-block py-3 px-8"
                      >
                        Send Another
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField label="Your Name" name="name" value={formData.name} onChange={handleChange} required />
                      <FormField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                      <div>
                        <label className="font-mono text-[9px] tracking-[3px] text-cinema-gold uppercase block mb-2">
                          Service Required
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-cinema-card border border-cinema-border text-cinema-white font-body px-4 py-3 focus:outline-none focus:border-cinema-gold transition-colors duration-300 appearance-none"
                        >
                          <option value="">Select a service...</option>
                          <option>Cinematic Video Shoot</option>
                          <option>Video Editing</option>
                          <option>After Effects & VFX</option>
                          <option>Wedding Film</option>
                          <option>Reels & Social Content</option>
                          <option>Corporate & Brand Video</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="font-mono text-[9px] tracking-[3px] text-cinema-gold uppercase block mb-2">
                        Tell Me About Your Project
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full bg-cinema-card border border-cinema-border text-cinema-white font-body px-4 py-3 focus:outline-none focus:border-cinema-gold transition-colors duration-300 resize-none"
                        placeholder="Describe your project, timeline, and vision..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-cinema-filled w-full py-5 flex items-center justify-center gap-3 text-sm"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-cinema-black/40 border-t-cinema-black rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          🎬 Send Project Brief
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function FormField({
  label, name, type = 'text', value, onChange, required = false,
}: {
  label: string; name: string; type?: string
  value: string; onChange: any; required?: boolean
}) {
  return (
    <div>
      <label className="font-mono text-[9px] tracking-[3px] text-cinema-gold uppercase block mb-2">
        {label} {required && <span className="text-cinema-gold">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-cinema-card border border-cinema-border text-cinema-white font-body px-4 py-3 focus:outline-none focus:border-cinema-gold transition-colors duration-300"
        placeholder={label}
      />
    </div>
  )
}
