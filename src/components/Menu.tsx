'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Instagram, UtensilsCrossed } from 'lucide-react';

const showcaseItems = [
  {
    name: 'Burgerler',
    price: '₺350 - ₺420',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=500&fit=crop',
  },
  {
    name: 'Pizzalar',
    price: '₺400 - ₺500',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=500&fit=crop',
  },
  {
    name: 'Steakler',
    price: '₺450 - ₺650',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop',
  },
  {
    name: 'Deniz Ürünleri',
    price: '₺350 - ₺600',
    image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?w=500&h=500&fit=crop',
  },
  {
    name: 'Atıştırmalıklar',
    price: '₺250 - ₺420',
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500&h=500&fit=crop',
  },
  {
    name: 'Kokteyller',
    price: '₺540 - ₺675',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=500&fit=crop',
  },
  {
    name: 'Craft Biralar',
    price: '₺190 - ₺375',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&h=500&fit=crop',
  },
  {
    name: 'Tatlılar',
    price: '₺330',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=500&fit=crop',
  },
];

export default function Menu() {
  return (
    <section
      id="menu"
      className="relative py-24 lg:py-32 bg-[var(--dark)] overflow-hidden"
    >
      {/* Static Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--primary)]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 border border-[var(--primary)]/30 rounded-full text-xs uppercase tracking-[0.2em] text-[var(--primary)] mb-6">
            Lezzetler
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-6xl font-bold mb-4">
            <span className="text-[var(--primary)]">Menümüz</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Craft biralardan gurme burgerlere, imza kokteylerden özel tatlılara kadar geniş menümüzü keşfedin
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {showcaseItems.map((item, index) => (
            <a
              key={item.name}
              href="https://www.instagram.com/barneygastro/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl bg-[var(--dark-lighter)] animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
                <h3 className="font-[family-name:var(--font-playfair)] text-lg md:text-xl font-semibold text-white mb-1">
                  {item.name}
                </h3>
                <p className="text-[var(--primary)] font-[family-name:var(--font-bebas)] text-lg md:text-xl tracking-wide">
                  {item.price}
                </p>
              </div>

              {/* Instagram Icon on Hover */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram size={20} className="text-white" />
              </div>

              {/* Border on Hover */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--primary)]/40 transition-colors duration-300" />
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-14 animate-fade-in-up"
          style={{ animationDelay: '400ms' }}
        >
          <Link
            href="/menu"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--primary)] text-[var(--dark)] font-semibold text-sm uppercase tracking-wider rounded-full transition-all duration-300 hover:bg-[var(--primary-light)] hover:-translate-y-1"
          >
            <span>Tüm Menüyü Gör</span>
            <UtensilsCrossed size={18} />
          </Link>
          <a
            href="https://www.instagram.com/barneygastro/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[var(--primary)]/30 font-semibold text-sm uppercase tracking-wider rounded-full transition-all duration-300 hover:border-[var(--primary)] hover:-translate-y-1"
          >
            <Instagram size={18} className="text-[var(--primary)]" />
            <span className="text-white">Instagram'da Gör</span>
          </a>
        </div>
      </div>
    </section>
  );
}
