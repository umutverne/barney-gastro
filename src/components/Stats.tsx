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
    <span ref={ref} className="font-[family-name:var(--font-bebas)] text-4xl md:text-5xl lg:text-6xl text-[var(--primary)]">
      {count.toLocaleString()}
      <span className="text-2xl md:text-3xl ml-1">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section
      style={{
        padding: '48px 0',
        marginTop: '32px',
        marginBottom: '32px',
        background: 'var(--dark-lighter)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px',
          }}
          className="lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="animate-fade-in-up"
              style={{
                textAlign: 'center',
                padding: '24px 16px',
                animationDelay: `${index * 100}ms`,
              }}
            >
              <AnimatedNumber value={stat.number} suffix={stat.suffix} />
              <span
                style={{
                  display: 'block',
                  marginTop: '8px',
                  fontSize: '13px',
                  color: 'rgba(156, 163, 175, 1)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
