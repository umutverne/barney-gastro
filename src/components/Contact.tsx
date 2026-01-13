'use client';

import { MapPin, Clock, Phone, Instagram } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Adres',
    content: ['Menderes, 106. Sk. No:13', '35390 Buca/İzmir'],
    href: 'https://maps.app.goo.gl/SaKPSa2MM84kMD6U7',
  },
  {
    icon: Clock,
    title: 'Çalışma Saatleri',
    content: ['Her gün: 12:00 - 02:00'],
  },
  {
    icon: Phone,
    title: 'İletişim',
    content: ['Tel: 0501 535 29 39'],
    href: 'tel:+905015352939',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[var(--dark-lighter)] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div className="animate-fade-in-up">
            <span className="section-tag animate-fade-in">
              İletişim
            </span>
            <h2
              className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up"
              style={{ animationDelay: '100ms' }}
            >
              Bizi <span className="gradient-text">Ziyaret Edin</span>
            </h2>
            <p
              className="text-gray-400 text-lg mb-10 animate-fade-in"
              style={{ animationDelay: '200ms' }}
            >
              Sizleri ağırlamaktan mutluluk duyarız
            </p>

            <div className="space-y-5">
              {contactInfo.map((info, index) => {
                const CardContent = (
                  <>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center text-[var(--dark)] flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                      <info.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 group-hover:text-[var(--primary)] transition-colors">
                        {info.title}
                      </h4>
                      {info.content.map((line, i) => (
                        <p key={i} className="text-gray-400">
                          {line}
                        </p>
                      ))}
                    </div>
                  </>
                );

                return (
                  <div
                    key={info.title}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${200 + index * 100}ms` }}
                  >
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="group flex items-start gap-5 p-6 glass-card rounded-2xl transition-all duration-300 hover:translate-x-2 hover:border-[var(--primary)]/30"
                      >
                        {CardContent}
                      </a>
                    ) : (
                      <div className="group flex items-start gap-5 p-6 glass-card rounded-2xl">
                        {CardContent}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Social Link - Only Instagram */}
            <div
              className="mt-10 animate-fade-in-up"
              style={{ animationDelay: '500ms' }}
            >
              <a
                href="https://www.instagram.com/barneygastro/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 glass-gold rounded-full hover:bg-[var(--primary)]/20 transition-all duration-300 hover:-translate-y-1"
              >
                <Instagram size={22} className="text-[var(--primary)]" />
                <span className="text-white font-medium">@barneygastro</span>
              </a>
            </div>
          </div>

          {/* Map */}
          <div
            className="relative rounded-3xl overflow-hidden border border-white/10 h-[450px] lg:h-[550px] shadow-2xl animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            {/* Map overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark)]/50 to-transparent z-10 pointer-events-none" />

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d781.9!2d27.1717773!3d38.3885863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b96316b0e6fced%3A0xa3e5c9b8a0e8a6b5!2sBarney%20Gastro%20Pub!5e0!3m2!1str!2str!4v1705100000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Map CTA overlay */}
            <a
              href="https://maps.app.goo.gl/SaKPSa2MM84kMD6U7"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between p-4 glass-strong rounded-xl hover:bg-[var(--primary)]/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-[var(--primary)]" />
                <span className="text-white font-medium">Google Maps'te Aç</span>
              </div>
              <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
