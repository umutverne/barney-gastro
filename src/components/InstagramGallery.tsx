'use client';

import Image from 'next/image';
import { Instagram } from 'lucide-react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=400&fit=crop',
    alt: 'Pub Interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=400&fit=crop',
    alt: 'Bar',
  },
  {
    src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=600&fit=crop',
    alt: 'Burger',
    large: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=400&fit=crop',
    alt: 'Beer',
  },
  {
    src: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=400&fit=crop',
    alt: 'Cocktail',
  },
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=400&fit=crop',
    alt: 'Food',
  },
  {
    src: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=600&fit=crop',
    alt: 'Drinks',
    large: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop',
    alt: 'Pizza',
  },
];

export default function InstagramGallery() {
  return (
    <section
      id="gallery"
      style={{
        padding: '64px 0 80px 0',
        marginTop: '32px',
        background: 'var(--dark-lighter)',
      }}
    >
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="animate-fade-in-up" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '8px 20px',
              border: '1px solid rgba(201, 162, 39, 0.3)',
              borderRadius: '50px',
              fontSize: '11px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'var(--primary)',
              marginBottom: '20px',
            }}
          >
            @barneygastro
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(28px, 5vw, 42px)',
              fontWeight: '700',
              marginBottom: '12px',
            }}
          >
            Instagram&apos;da Biz
          </h2>
          <p style={{ color: 'rgba(156, 163, 175, 1)', fontSize: '16px' }}>Anlarımızı takip edin</p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 animate-fade-in">
          {images.map((image, index) => (
            <a
              key={index}
              href="https://www.instagram.com/barneygastro/"
              target="_blank"
              rel="noopener noreferrer"
              className={`relative group overflow-hidden rounded-xl animate-fade-in-up ${
                image.large ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              style={{ aspectRatio: '1/1', animationDelay: `${index * 50}ms` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[var(--primary)]/0 group-hover:bg-[var(--primary)]/90 transition-all duration-400 flex items-center justify-center">
                <Instagram
                  size={40}
                  className="text-[var(--dark)] opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-400"
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto section-padding">
        <div
          className="animate-fade-in-up"
          style={{ textAlign: 'center', marginTop: '40px', animationDelay: '400ms' }}
        >
          <a
            href="https://www.instagram.com/barneygastro/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 36px',
              background: 'linear-gradient(135deg, var(--primary) 0%, #b8922a 100%)',
              color: 'var(--dark)',
              fontWeight: '700',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              borderRadius: '10px',
              boxShadow: '0 6px 20px rgba(201, 162, 39, 0.35)',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
            }}
            className="hover:-translate-y-1"
          >
            <Instagram size={18} />
            <span>Takip Et</span>
          </a>
        </div>
      </div>
    </section>
  );
}
