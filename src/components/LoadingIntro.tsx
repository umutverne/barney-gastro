'use client';

import { useState, useEffect } from 'react';

export default function LoadingIntro({ onComplete }: { onComplete: () => void }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsLoading(false);
        onComplete();
      }, 500);
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[var(--dark)] flex items-center justify-center overflow-hidden transition-opacity duration-500 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Simple Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-[80px]" />

      {/* Logo Container */}
      <div className="relative z-10 text-center animate-fade-in">
        {/* Beer Glass Icon */}
        <div className="mb-4">
          <svg
            viewBox="0 0 64 64"
            className="w-16 h-16 mx-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 12h32v8c0 2-1 4-3 5v27c0 2-2 4-4 4H23c-2 0-4-2-4-4V25c-2-1-3-3-3-5v-8z"
              stroke="var(--primary)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M48 16h6c2 0 4 2 4 4v8c0 2-2 4-4 4h-6"
              stroke="var(--primary)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="24" cy="8" r="3" fill="var(--primary)" opacity="0.6" />
            <circle cx="32" cy="6" r="4" fill="var(--primary)" opacity="0.8" />
            <circle cx="40" cy="8" r="3" fill="var(--primary)" opacity="0.6" />
          </svg>
        </div>

        {/* BARNEY Text */}
        <h1
          className="font-[family-name:var(--font-bebas)] text-6xl md:text-7xl tracking-[0.3em] text-[var(--primary)] animate-fade-in-up"
          style={{ animationDelay: '300ms' }}
        >
          BARNEY
        </h1>

        {/* Gastro Pub Text */}
        <p
          className="text-sm text-gray-400 uppercase mt-2 tracking-[0.5em] animate-fade-in"
          style={{ animationDelay: '500ms' }}
        >
          Gastro Pub
        </p>

        {/* Loading Line */}
        <div className="mt-8 w-48 h-0.5 bg-white/10 mx-auto rounded-full overflow-hidden">
          <div className="h-full bg-[var(--primary)] animate-loading-bar" />
        </div>
      </div>

      {/* Corner Decorations - Static */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-[var(--primary)]/30" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-[var(--primary)]/30" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-[var(--primary)]/30" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-[var(--primary)]/30" />
    </div>
  );
}
