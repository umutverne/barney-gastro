'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Şehirdeki en iyi gastro pub deneyimi! Burger'ları muhteşem, craft bira seçenekleri çok geniş. Atmosfer harika, personel çok ilgili.",
    author: 'Ahmet Y.',
    source: 'Google Yorumu',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
  },
  {
    text: 'Arkadaşlarla buluşmak için ideal bir mekan. Canlı müzik geceleri muhteşem! Espresso Martini\'leri şehrin en iyisi.',
    author: 'Zeynep K.',
    source: 'Instagram',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
  },
  {
    text: "Fish & Chips'i denemeyen bilmez! Londra'da yediklerimden bile daha iyi. Bira tavsiyeleri için personele danışın, asla yanıltmazlar.",
    author: 'Can M.',
    source: 'TripAdvisor',
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 lg:py-32 bg-[var(--dark)]">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 border border-[var(--primary)]/30 rounded-full text-xs uppercase tracking-[0.2em] text-[var(--primary)] mb-6">
            Yorumlar
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold">
            Misafirlerimiz <span className="text-[var(--primary)]">Ne Diyor?</span>
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="bg-[var(--dark-lighter)] rounded-3xl p-8 md:p-12 border border-white/5 text-center relative">
            {/* Quote Icon */}
            <Quote
              size={60}
              className="absolute top-6 left-6 text-[var(--primary)]/20"
            />

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className="fill-[var(--primary)] text-[var(--primary)]"
                />
              ))}
            </div>

            {/* Text */}
            <p className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl italic leading-relaxed mb-10 relative z-10">
              &ldquo;{testimonials[current].text}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <Image
                src={testimonials[current].image}
                alt={testimonials[current].author}
                width={60}
                height={60}
                className="rounded-full border-2 border-[var(--primary)]"
              />
              <div className="text-left">
                <h4 className="font-semibold text-lg">{testimonials[current].author}</h4>
                <span className="text-gray-400 text-sm">{testimonials[current].source}</span>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 bg-[var(--dark-lighter)] border border-white/10 rounded-full flex items-center justify-center text-white hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 bg-[var(--dark-lighter)] border border-white/10 rounded-full flex items-center justify-center text-white hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === current
                  ? 'bg-[var(--primary)]'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
