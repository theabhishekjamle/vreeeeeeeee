import Link from 'next/link'
import { navItems } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative bg-cinema-black border-t border-cinema-border overflow-hidden">
      {/* Film strip top */}
      <div className="flex gap-1 border-b border-cinema-border/30 overflow-hidden">
        {Array.from({ length: 60 }).map((_, i) => (
          <div key={i} className="flex-shrink-0 w-8 h-6 border-r border-cinema-border/20 flex items-center justify-center">
            <div className="w-3 h-3 rounded-sm bg-cinema-card border border-cinema-border" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-display text-3xl text-cinema-white tracking-widest mb-2">VIRENDRA</div>
            <div className="font-display text-3xl text-cinema-gold tracking-widest mb-6">PARMAR</div>
            <p className="font-body text-cinema-gray leading-relaxed mb-8 max-w-sm">
              Cinematic storyteller crafting visual narratives that move hearts and inspire minds.
              Based in Jabalpur, serving across India.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/virendra421_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-cinema-border flex items-center justify-center text-cinema-gray hover:text-cinema-gold hover:border-cinema-gold transition-all duration-300 text-sm"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href="mailto:virendarparmar8475@gmail.com"
                className="w-10 h-10 border border-cinema-border flex items-center justify-center text-cinema-gray hover:text-cinema-gold hover:border-cinema-gold transition-all duration-300 text-sm"
                aria-label="Email"
              >
                @
              </a>
              <a
                href="tel:8717818475"
                className="w-10 h-10 border border-cinema-border flex items-center justify-center text-cinema-gray hover:text-cinema-gold hover:border-cinema-gold transition-all duration-300 text-sm"
                aria-label="Phone"
              >
                ☏
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-mono text-[10px] tracking-[4px] text-cinema-gold mb-6 uppercase">Navigation</div>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-body text-cinema-gray hover:text-cinema-gold transition-colors duration-300 text-lg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-mono text-[10px] tracking-[4px] text-cinema-gold mb-6 uppercase">Contact</div>
            <ul className="space-y-4">
              <li>
                <div className="font-mono text-[9px] text-cinema-gray tracking-widest mb-1">PHONE</div>
                <a href="tel:8717818475" className="font-body text-cinema-white hover:text-cinema-gold transition-colors duration-300 text-lg">
                  +91 87178 18475
                </a>
              </li>
              <li>
                <div className="font-mono text-[9px] text-cinema-gray tracking-widest mb-1">EMAIL</div>
                <a href="mailto:virendarparmar8475@gmail.com" className="font-body text-cinema-white hover:text-cinema-gold transition-colors duration-300 text-lg break-all">
                  virendarparmar8475<br />@gmail.com
                </a>
              </li>
              <li>
                <div className="font-mono text-[9px] text-cinema-gray tracking-widest mb-1">INSTAGRAM</div>
                <a
                  href="https://www.instagram.com/virendra421_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-cinema-white hover:text-cinema-gold transition-colors duration-300 text-lg"
                >
                  @virendra421_
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-cinema-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] tracking-widest text-cinema-gray uppercase">
            © {year} Virendra Parmar. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-cinema-gold animate-pulse" />
            <span className="font-mono text-[10px] tracking-widest text-cinema-gray uppercase">
              Available for Projects
            </span>
          </div>
        </div>
      </div>

      {/* Film strip bottom */}
      <div className="flex gap-1 border-t border-cinema-border/30 overflow-hidden">
        {Array.from({ length: 60 }).map((_, i) => (
          <div key={i} className="flex-shrink-0 w-8 h-6 border-r border-cinema-border/20 flex items-center justify-center">
            <div className="w-3 h-3 rounded-sm bg-cinema-card border border-cinema-border" />
          </div>
        ))}
      </div>
    </footer>
  )
}
