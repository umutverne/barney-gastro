'use client';

import { ArrowRight, Instagram, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Image Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&q=80')`,
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[var(--dark)]" />

        {/* Simple Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--primary)]/10 rounded-full blur-[80px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center section-padding max-w-5xl mx-auto animate-fade-in-up">
        {/* Title */}
        <h1
          className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 animate-fade-in-up"
          style={{ animationDelay: '400ms' }}
        >
          <span className="block">Lezzet &</span>
          <span className="block text-[var(--primary)] italic">Deneyim</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl text-gray-300 tracking-wider mb-16 animate-fade-in"
          style={{ animationDelay: '600ms' }}
        >
          Craft biralar, gurme lezzetler ve unutulmaz anlar
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row justify-center items-center animate-fade-in-up"
          style={{ gap: '20px', animationDelay: '800ms' }}
        >
          <Link
            href="#menu"
            className="group inline-flex items-center justify-center text-[var(--dark)] font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-1"
            style={{
              gap: '12px',
              padding: '18px 40px',
              background: 'linear-gradient(135deg, var(--primary) 0%, #b8922a 100%)',
              borderRadius: '14px',
              boxShadow: '0 8px 30px rgba(201, 162, 39, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <span>Menüyü Keşfet</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center justify-center text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:text-[var(--primary)] hover:-translate-y-1"
            style={{
              gap: '12px',
              padding: '18px 40px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '14px',
              border: '2px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <span>Hikayemiz</span>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: '1200ms' }}
      >
        <span className="text-xs uppercase tracking-[0.2em] text-gray-400">Kaydır</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-scroll-bounce" />
        </div>
      </div>

      {/* Social Links */}
      <div
        className="absolute left-6 sm:left-8 lg:left-12 bottom-12 hidden md:flex flex-col gap-4 animate-fade-in"
        style={{ animationDelay: '1000ms' }}
      >
        <a
          href="https://www.instagram.com/barneygastro/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-[var(--primary)] hover:text-[var(--primary)] hover:bg-white/5 transition-all hover:-translate-y-1"
        >
          <Instagram size={20} />
        </a>
        <a
          href="https://maps.app.goo.gl/SaKPSa2MM84kMD6U7"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-[var(--primary)] hover:text-[var(--primary)] hover:bg-white/5 transition-all hover:-translate-y-1"
        >
          <MapPin size={20} />
        </a>
      </div>
    </section>
  );
}
