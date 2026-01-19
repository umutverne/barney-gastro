'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Instagram, UtensilsCrossed } from 'lucide-react';

const showcaseItems = [
  {
    name: 'Burgerler',
    price: '₺475 - ₺520',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=500&fit=crop',
  },
  {
    name: 'Pizzalar',
    price: '₺500 - ₺620',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=500&fit=crop',
  },
  {
    name: 'Ana Yemekler',
    price: '₺500 - ₺850',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop',
  },
  {
    name: 'Deniz Ürünleri',
    price: '₺350 - ₺600',
    image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?w=500&h=500&fit=crop',
  },
  {
    name: 'Atıştırmalıklar',
    price: '₺290 - ₺600',
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500&h=500&fit=crop',
  },
  {
    name: 'Kokteyller',
    price: '₺540 - ₺675',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=500&fit=crop',
  },
  {
    name: 'Craft Biralar',
    price: '₺110 - ₺375',
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
      className="relative overflow-hidden"
      style={{
        padding: '64px 0 80px 0',
        marginTop: '24px',
        background: 'var(--dark)',
      }}
    >
      {/* Static Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--primary)]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="animate-fade-in-up" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span
            className="inline-block border border-[var(--primary)]/30 rounded-full text-xs uppercase tracking-[0.2em] text-[var(--primary)]"
            style={{ padding: '8px 20px', marginBottom: '24px', display: 'inline-block' }}
          >
            Lezzetler
          </span>
          <h2
            className="font-[family-name:var(--font-playfair)] font-bold"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '16px', textAlign: 'center' }}
          >
            <span className="text-[var(--primary)]">Menümüz</span>
          </h2>
          <p
            className="text-gray-400"
            style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7' }}
          >
            Craft biralardan gurme burgerlere, imza kokteylerden özel tatlılara kadar geniş menümüzü keşfedin
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: '16px' }}
        >
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
          className="flex flex-col sm:flex-row justify-center items-center animate-fade-in-up"
          style={{ gap: '16px', marginTop: '48px', animationDelay: '400ms' }}
        >
          <Link
            href="/menu"
            className="btn-primary"
            style={{
              padding: '16px 36px',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(201, 162, 39, 0.3)',
            }}
          >
            <span>Tüm Menüyü Gör</span>
            <UtensilsCrossed size={18} />
          </Link>
          <a
            href="https://www.instagram.com/barneygastro/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{
              padding: '16px 36px',
              borderRadius: '12px',
              border: '2px solid rgba(201, 162, 39, 0.4)',
            }}
          >
            <Instagram size={18} className="text-[var(--primary)]" />
            <span className="text-white">Instagram&apos;da Gör</span>
          </a>
        </div>
      </div>
    </section>
  );
}
