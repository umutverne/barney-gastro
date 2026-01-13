'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Şehirdeki en iyi gastro pub deneyimi! Burger'ları muhteşem, craft bira seçenekleri çok geniş. Atmosfer harika, personel çok ilgili.",
    author: 'Ahmet Y.',
    source: 'Google Yorumu',
    initials: 'AY',
    rating: 5,
  },
  {
    text: 'Arkadaşlarla buluşmak için ideal bir mekan. Canlı müzik geceleri muhteşem! Espresso Martini\'leri şehrin en iyisi.',
    author: 'Zeynep K.',
    source: 'Instagram',
    initials: 'ZK',
    rating: 5,
  },
  {
    text: "Fish & Chips'i denemeyen bilmez! Londra'da yediklerimden bile daha iyi. Bira tavsiyeleri için personele danışın, asla yanıltmazlar.",
    author: 'Can M.',
    source: 'TripAdvisor',
    initials: 'CM',
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
    <section className="py-16 md:py-24 lg:py-32 bg-[var(--dark)]">
      <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-2 border border-[var(--primary)]/30 rounded-full text-xs uppercase tracking-[0.2em] text-[var(--primary)] mb-4 md:mb-6">
            Yorumlar
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold">
            Misafirlerimiz <span className="text-[var(--primary)]">Ne Diyor?</span>
          </h2>
        </div>

        {/* Testimonials Slider - Fixed Height */}
        <div className="relative px-4 md:px-8">
          <div className="bg-[var(--dark-lighter)] rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 border border-white/5 text-center relative min-h-[320px] md:min-h-[280px] flex flex-col justify-center">
            {/* Quote Icon */}
            <Quote
              size={40}
              className="absolute top-4 left-4 md:top-6 md:left-6 text-[var(--primary)]/20"
            />

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6 md:mb-8">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="fill-[var(--primary)] text-[var(--primary)]"
                />
              ))}
            </div>

            {/* Text - Fixed Height Container */}
            <div className="min-h-[100px] md:min-h-[80px] flex items-center justify-center mb-6 md:mb-8">
              <p className="font-[family-name:var(--font-playfair)] text-lg md:text-xl lg:text-2xl italic leading-relaxed relative z-10 px-2">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center justify-center gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[var(--primary)] bg-[var(--primary)]/20 flex items-center justify-center flex-shrink-0">
                <span className="font-[family-name:var(--font-bebas)] text-lg md:text-xl text-[var(--primary)]">
                  {testimonials[current].initials}
                </span>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-base md:text-lg">{testimonials[current].author}</h4>
                <span className="text-gray-400 text-xs md:text-sm">{testimonials[current].source}</span>
              </div>
            </div>
          </div>

          {/* Navigation Buttons - Better Mobile Position */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-[var(--dark-lighter)] border border-white/10 rounded-full flex items-center justify-center text-white hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-[var(--dark-lighter)] border border-white/10 rounded-full flex items-center justify-center text-white hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors z-10"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-6 md:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${
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
