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
    <section id="gallery" className="py-16 md:py-24 lg:py-32 bg-[var(--dark-lighter)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 animate-fade-in-up">
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)] mb-3 md:mb-4">
            @barneygastro
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Instagram&apos;da Biz
          </h2>
          <p className="text-gray-400 text-base md:text-lg">Anlarımızı takip edin</p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
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
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div
          className="text-center mt-8 md:mt-12 animate-fade-in-up"
          style={{ animationDelay: '400ms' }}
        >
          <a
            href="https://www.instagram.com/barneygastro/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 md:px-8 py-3.5 md:py-4 rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{
              background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
            }}
          >
            <Instagram size={20} />
            <span>Takip Et</span>
          </a>
        </div>
      </div>
    </section>
  );
}
