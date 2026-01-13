'use client';

import { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const phoneNumber = '905015352939'; // 0501 535 29 39
  const whatsappMessage = 'Merhaba, Barney Gastro Pub hakkında bilgi almak istiyorum.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:text-[var(--dark)] transition-all duration-300 shadow-lg ${
          showScrollTop ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Yukarı çık"
      >
        <ArrowUp size={18} />
      </button>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-105 active:scale-95 transition-all duration-300 ${
          mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}
        style={{ transitionDelay: mounted ? '1000ms' : '0ms' }}
        aria-label="WhatsApp ile iletişime geç"
      >
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <MessageCircle size={22} fill="white" />
      </a>
    </div>
  );
}
