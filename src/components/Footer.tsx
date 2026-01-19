'use client';

import Link from 'next/link';
import { Instagram, MapPin } from 'lucide-react';

const footerLinks = {
  discover: [
    { label: 'Hakkımızda', href: '#about' },
    { label: 'Menü', href: '#menu' },
    { label: 'Galeri', href: '#gallery' },
    { label: 'İletişim', href: '#contact' },
  ],
  services: [
    { label: 'Canlı Müzik', href: '#' },
    { label: 'Özel Günler', href: '#' },
  ],
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/barneygastro/' },
    { label: 'Google Maps', href: 'https://maps.app.goo.gl/SaKPSa2MM84kMD6U7' },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--dark)',
        marginTop: '32px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
      className="pt-12 pb-8 md:pt-16 md:pb-10"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }} className="px-6 md:px-8">
        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-10 md:gap-12 pb-10 md:pb-16 border-b border-white/5">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="#home" className="inline-block mb-5 md:mb-6">
              <span className="font-[family-name:var(--font-bebas)] text-3xl md:text-4xl tracking-[0.2em] text-[var(--primary)]">
                BARNEY
              </span>
              <span className="block text-xs tracking-[0.4em] text-gray-400 uppercase mt-1">
                Gastro Pub
              </span>
            </Link>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm mb-6">
              Craft biralar, gurme lezzetler ve unutulmaz anlar için buluşma noktanız.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/barneygastro/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--dark-lighter)] border border-white/10 flex items-center justify-center text-white hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:text-[var(--dark)] transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://maps.app.goo.gl/SaKPSa2MM84kMD6U7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--dark-lighter)] border border-white/10 flex items-center justify-center text-white hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:text-[var(--dark)] transition-all"
              >
                <MapPin size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm md:text-base mb-4 md:mb-5 text-white">Keşfet</h4>
            <ul className="space-y-3 md:space-y-3">
              {footerLinks.discover.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[var(--primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm md:text-base mb-4 md:mb-5 text-white">Hizmetler</h4>
            <ul className="space-y-3 md:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <span className="text-gray-400 text-sm">
                    {link.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm md:text-base mb-4 md:mb-5 text-white">Takip Edin</h4>
            <ul className="space-y-3 md:space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm hover:text-[var(--primary)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 md:pt-10">
          <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
            © 2025 Barney Gastro Pub. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
