'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, MapPin } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Ana Sayfa' },
  { href: '#about', label: 'Hakkımızda' },
  { href: '/menu', label: 'Menü' },
  { href: '#gallery', label: 'Galeri' },
  { href: '#contact', label: 'İletişim' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isHidden && !isMobileMenuOpen ? '-translate-y-full' : 'translate-y-0'
        } ${isScrolled ? 'glass-strong py-4' : 'py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex flex-col items-start group relative">
            <span className="font-[family-name:var(--font-bebas)] text-3xl tracking-[0.2em] text-[var(--primary)] transition-all duration-300 group-hover:text-glow group-hover:scale-105 origin-left">
              BARNEY
            </span>
            <span className="text-[10px] tracking-[0.4em] text-gray-400 uppercase transition-colors group-hover:text-[var(--primary)]">
              Gastro Pub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <div
                key={link.href}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Link
                  href={link.href}
                  className="relative text-sm font-medium uppercase tracking-wider text-gray-300 hover:text-[var(--primary)] transition-colors group py-2"
                >
                  {link.label}
                  <span className="absolute -bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center">
            <Link href="/menu">
              <span className="group relative px-8 py-3.5 bg-[var(--primary)] text-[var(--dark)] font-semibold text-sm uppercase tracking-wider rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[var(--primary)]/30 inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10">Menüyü Gör</span>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-12 h-12 flex items-center justify-center text-white z-50 glass rounded-full transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            <span className={`transition-all duration-200 ${isMobileMenuOpen ? 'rotate-90 opacity-0 absolute' : 'rotate-0 opacity-100'}`}>
              <Menu size={24} />
            </span>
            <span className={`transition-all duration-200 ${isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0 absolute'}`}>
              <X size={24} />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[var(--dark)]/95 backdrop-blur-xl z-40 lg:hidden flex items-center justify-center transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-[100px] animate-pulse" />
        </div>

        <nav className="relative text-center space-y-6">
          {navLinks.map((link, index) => (
            <div
              key={link.href}
              className={`transition-all duration-300 ${
                isMobileMenuOpen
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms' }}
            >
              <Link
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-[family-name:var(--font-playfair)] text-4xl text-white hover:text-[var(--primary)] transition-colors"
              >
                {link.label}
              </Link>
            </div>
          ))}
          <div
            className={`pt-6 flex flex-col gap-4 transition-all duration-300 ${
              isMobileMenuOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? '500ms' : '0ms' }}
          >
            <Link
              href="/menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-block px-10 py-4 bg-[var(--primary)] text-[var(--dark)] font-semibold text-lg rounded-full"
            >
              Menüyü Gör
            </Link>
            <a
              href="https://maps.app.goo.gl/SaKPSa2MM84kMD6U7"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 text-gray-400 hover:text-[var(--primary)] transition-colors"
            >
              <MapPin size={18} />
              <span>Konum</span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
