'use client';

import { MapPin, Clock, Phone, Instagram, Beer, Music, Utensils } from 'lucide-react';

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

const highlights = [
  { icon: Beer, text: '20+ Craft Bira' },
  { icon: Music, text: 'Canlı Müzik' },
  { icon: Utensils, text: 'Gurme Lezzetler' },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{
        padding: '64px 0 80px 0',
        marginTop: '32px',
        background: 'var(--dark-lighter)',
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[var(--primary)]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 items-start" style={{ gap: '48px' }}>
          {/* Info */}
          <div className="animate-fade-in-up">
            <span
              className="inline-block border border-[var(--primary)]/30 rounded-full text-xs uppercase tracking-[0.2em] text-[var(--primary)]"
              style={{ padding: '8px 20px', marginBottom: '20px', display: 'inline-block' }}
            >
              İletişim
            </span>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold animate-fade-in-up"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '16px', animationDelay: '100ms' }}
            >
              Bizi <span className="gradient-text">Ziyaret Edin</span>
            </h2>
            <p
              className="text-gray-400 animate-fade-in"
              style={{ fontSize: '1.1rem', marginBottom: '32px', lineHeight: '1.7', animationDelay: '200ms' }}
            >
              Sizleri ağırlamaktan mutluluk duyarız. Kaliteli zaman geçirmek için ideal mekan.
            </p>

            {/* Highlights */}
            <div
              className="animate-fade-in-up"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '32px',
                animationDelay: '250ms',
              }}
            >
              {highlights.map((item) => (
                <div
                  key={item.text}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 16px',
                    background: 'rgba(201, 162, 39, 0.1)',
                    border: '1px solid rgba(201, 162, 39, 0.2)',
                    borderRadius: '50px',
                  }}
                >
                  <item.icon size={16} className="text-[var(--primary)]" />
                  <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.9)' }}>{item.text}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {contactInfo.map((info, index) => {
                const CardContent = (
                  <>
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '14px',
                        background: 'linear-gradient(135deg, var(--primary) 0%, #b8922a 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--dark)',
                        flexShrink: 0,
                        transition: 'transform 0.3s ease',
                      }}
                      className="group-hover:scale-105"
                    >
                      <info.icon size={24} />
                    </div>
                    <div>
                      <h4
                        style={{ fontWeight: '600', fontSize: '1.1rem', marginBottom: '4px' }}
                        className="group-hover:text-[var(--primary)] transition-colors"
                      >
                        {info.title}
                      </h4>
                      {info.content.map((line, i) => (
                        <p key={i} style={{ color: 'rgba(156, 163, 175, 1)', fontSize: '0.95rem' }}>
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
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="group transition-all duration-300 hover:translate-x-2"
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '20px',
                          padding: '20px 24px',
                          background: 'linear-gradient(145deg, rgba(26, 26, 26, 0.8) 0%, rgba(13, 13, 13, 0.9) 100%)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          borderRadius: '16px',
                          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                        }}
                      >
                        {CardContent}
                      </a>
                    ) : (
                      <div
                        className="group"
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '20px',
                          padding: '20px 24px',
                          background: 'linear-gradient(145deg, rgba(26, 26, 26, 0.8) 0%, rgba(13, 13, 13, 0.9) 100%)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          borderRadius: '16px',
                          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                        }}
                      >
                        {CardContent}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Social Link - Instagram */}
            <div
              className="animate-fade-in-up"
              style={{ marginTop: '32px', animationDelay: '600ms' }}
            >
              <a
                href="https://www.instagram.com/barneygastro/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:-translate-y-1"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px 28px',
                  background: 'linear-gradient(135deg, rgba(201, 162, 39, 0.15) 0%, rgba(201, 162, 39, 0.05) 100%)',
                  border: '1px solid rgba(201, 162, 39, 0.3)',
                  borderRadius: '50px',
                }}
              >
                <Instagram size={20} className="text-[var(--primary)]" />
                <span style={{ color: 'white', fontWeight: '500', fontSize: '0.95rem' }}>@barneygastro</span>
              </a>
            </div>
          </div>

          {/* Map */}
          <div
            className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 h-[350px] md:h-[450px] lg:h-[550px] shadow-2xl animate-fade-in-up"
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
