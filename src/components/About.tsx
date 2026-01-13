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

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
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
                className="w-full h-[500px] object-cover"
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
              className="absolute top-8 -left-4 bg-[var(--dark-lighter)] border border-[var(--primary)]/30 px-6 py-5 rounded-2xl shadow-lg animate-fade-in"
              style={{ animationDelay: '300ms' }}
            >
              <span className="font-[family-name:var(--font-bebas)] text-5xl block leading-none text-[var(--primary)]">
                5+
              </span>
              <span className="text-sm font-semibold uppercase tracking-wider text-white/80">
                Yıllık Deneyim
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <span className="inline-block px-4 py-2 border border-[var(--primary)]/30 rounded-full text-xs uppercase tracking-[0.2em] text-[var(--primary)] mb-4 md:mb-6">
              Hakkımızda
            </span>

            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6">
              Gastronomi ve<br />
              <span className="text-[var(--primary)] italic">Pub Kültürünün</span><br />
              Buluşma Noktası
            </h2>

            <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8 md:mb-10">
              Barney Gastro Pub, geleneksel pub atmosferini modern gastronomi ile birleştiren
              benzersiz bir deneyim sunuyor. Özenle seçilmiş craft biralarımız,
              şeflerimizin ustalıkla hazırladığı lezzetler ve sıcak atmosferimizle
              sizleri ağırlamaktan mutluluk duyuyoruz.
            </p>

            {/* Features */}
            <div className="space-y-3 md:space-y-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group flex items-center gap-5 p-5 bg-[var(--dark-lighter)] border border-white/5 rounded-xl hover:border-[var(--primary)]/30 transition-colors animate-fade-in-up"
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center text-[var(--dark)]">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg group-hover:text-[var(--primary)] transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
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
