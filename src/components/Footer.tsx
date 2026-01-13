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
    <footer className="bg-[var(--dark)] pt-20 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#home" className="inline-block mb-6">
              <span className="font-[family-name:var(--font-bebas)] text-4xl tracking-[0.2em] text-[var(--primary)]">
                BARNEY
              </span>
              <span className="block text-xs tracking-[0.4em] text-gray-400 uppercase">
                Gastro Pub
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Craft biralar, gurme lezzetler ve unutulmaz anlar için buluşma noktanız.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-8">
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
            <h4 className="font-semibold text-lg mb-6">Keşfet</h4>
            <ul className="space-y-3">
              {footerLinks.discover.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[var(--primary)] transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Hizmetler</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <span className="text-gray-400">
                    {link.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Takip Edin</h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[var(--primary)] transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8">
          <p className="text-gray-500 text-sm">
            © 2025 Barney Gastro Pub. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
