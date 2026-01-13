'use client';

import { useEffect, useState, useRef } from 'react';

const stats = [
  { number: 20, suffix: '+', label: 'Bira Çeşidi' },
  { number: 17, suffix: '+', label: 'Kokteyl Çeşidi' },
  { number: 44, suffix: '+', label: 'Lezzet Seçeneği' },
  { number: 7, suffix: '/7', label: 'Gün Açık' },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref} className="font-[family-name:var(--font-bebas)] text-5xl lg:text-6xl text-[var(--primary)]">
      {count.toLocaleString()}
      <span className="text-3xl ml-1">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-[var(--dark-lighter)] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <AnimatedNumber value={stat.number} suffix={stat.suffix} />
              <span className="block mt-2 text-sm text-gray-400 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
