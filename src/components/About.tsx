'use client';

import { Beer, UtensilsCrossed, Music } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: Beer,
    title: 'Geniş Bira Seçimi',
    description: '20+ yerli ve ithal bira',
  },
  {
    icon: UtensilsCrossed,
    title: 'Lezzetli Menü',
    description: '44+ yemek seçeneği',
  },
  {
    icon: Music,
    title: 'Canlı Müzik',
    description: 'Eğlenceli atmosfer',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 lg:py-32 bg-[var(--dark)] overflow-hidden"
    >
      {/* Static Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[var(--primary)]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
          {/* Images */}
          <div className="relative animate-fade-in-up">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=500&fit=crop"
                alt="Barney Gastro Pub İç Mekan"
                width={600}
                height={500}
                className="w-full h-[350px] md:h-[450px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Secondary Image */}
            <div
              className="absolute -bottom-10 -right-10 w-48 h-48 rounded-2xl overflow-hidden border-4 border-[var(--dark)] shadow-xl hidden md:block animate-fade-in"
              style={{ animationDelay: '200ms' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200&h=200&fit=crop"
                alt="Atmosphere"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Experience Badge */}
            <div
              className="absolute bg-[var(--dark-lighter)] border border-[var(--primary)]/30 rounded-2xl shadow-lg animate-fade-in"
              style={{
                animationDelay: '300ms',
                top: '16px',
                left: '16px',
                padding: '16px 20px',
              }}
            >
              <span className="font-[family-name:var(--font-bebas)] text-4xl md:text-5xl block leading-none text-[var(--primary)]">
                5+
              </span>
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-white/80">
                Yıllık Deneyim
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <span
              className="inline-block border border-[var(--primary)]/30 rounded-full text-xs uppercase tracking-[0.2em] text-[var(--primary)]"
              style={{ padding: '8px 20px', marginBottom: '20px', display: 'inline-block' }}
            >
              Hakkımızda
            </span>

            <h2
              className="font-[family-name:var(--font-playfair)] font-bold leading-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '24px' }}
            >
              Gastronomi ve<br />
              <span className="text-[var(--primary)] italic">Pub Kültürünün</span><br />
              Buluşma Noktası
            </h2>

            <p
              className="text-gray-400"
              style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '36px' }}
            >
              Barney Gastro Pub, geleneksel pub atmosferini modern gastronomi ile birleştiren
              benzersiz bir deneyim sunuyor. Özenle seçilmiş craft biralarımız,
              şeflerimizin ustalıkla hazırladığı lezzetler ve sıcak atmosferimizle
              sizleri ağırlamaktan mutluluk duyuyoruz.
            </p>

            {/* Features */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group flex items-center transition-colors animate-fade-in-up hover:border-[var(--primary)]/30"
                  style={{
                    gap: '20px',
                    padding: '20px',
                    background: 'linear-gradient(145deg, rgba(26, 26, 26, 0.8) 0%, rgba(13, 13, 13, 0.9) 100%)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '14px',
                    animationDelay: `${200 + index * 100}ms`,
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, var(--primary) 0%, #b8922a 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--dark)',
                      flexShrink: 0,
                    }}
                  >
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h4
                      className="group-hover:text-[var(--primary)] transition-colors"
                      style={{ fontWeight: '600', fontSize: '1.1rem', marginBottom: '4px' }}
                    >
                      {feature.title}
                    </h4>
                    <p style={{ color: 'rgba(156, 163, 175, 1)', fontSize: '0.9rem' }}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
