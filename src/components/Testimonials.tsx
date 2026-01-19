'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

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
  return (
    <section
      id="testimonials"
      style={{
        padding: '64px 0 80px 0',
        marginTop: '32px',
        background: 'var(--dark)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(201, 162, 39, 0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
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
            Yorumlar
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(28px, 5vw, 42px)',
              fontWeight: '700',
              color: 'white',
            }}
          >
            Misafirlerimiz <span style={{ color: 'var(--primary)' }}>Ne Diyor?</span>
          </h2>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'testimonial-bullet',
            bulletActiveClass: 'testimonial-bullet-active',
          }}
          loop={true}
          style={{ paddingBottom: '48px' }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  background: 'linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 100%)',
                  border: '1px solid rgba(201, 162, 39, 0.12)',
                  borderRadius: '20px',
                  padding: '48px 40px',
                  position: 'relative',
                  boxShadow: '0 24px 48px rgba(0,0,0,0.4)',
                }}
              >
                {/* Quote Icon */}
                <Quote
                  size={40}
                  style={{
                    position: 'absolute',
                    top: '24px',
                    left: '28px',
                    color: 'rgba(201, 162, 39, 0.12)',
                  }}
                />

                {/* Stars */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '4px',
                    marginBottom: '24px',
                  }}
                >
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="var(--primary)"
                      color="var(--primary)"
                    />
                  ))}
                </div>

                {/* Text */}
                <p
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: 'clamp(16px, 2.5vw, 20px)',
                    fontStyle: 'italic',
                    lineHeight: '1.8',
                    color: 'rgba(255,255,255,0.9)',
                    textAlign: 'center',
                    marginBottom: '32px',
                    minHeight: '80px',
                  }}
                >
                  &ldquo;{item.text}&rdquo;
                </p>

                {/* Author */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '14px',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(201, 162, 39, 0.2) 0%, rgba(201, 162, 39, 0.1) 100%)',
                      border: '2px solid var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-bebas)',
                        fontSize: '16px',
                        color: 'var(--primary)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {item.initials}
                    </span>
                  </div>
                  <div>
                    <h4
                      style={{
                        fontWeight: '600',
                        fontSize: '15px',
                        color: 'white',
                        marginBottom: '2px',
                      }}
                    >
                      {item.author}
                    </h4>
                    <span
                      style={{
                        fontSize: '13px',
                        color: 'rgba(156, 163, 175, 1)',
                      }}
                    >
                      {item.source}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .testimonial-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 5px;
          display: inline-block;
          margin: 0 6px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .testimonial-bullet-active {
          background: var(--primary);
          width: 28px;
        }
        .swiper-pagination {
          bottom: 0 !important;
        }
      `}</style>
    </section>
  );
}
