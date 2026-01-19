# Barney Gastro - Restoran Web Sitesi

Modern, şık ve tamamen responsive bir restoran/gastro bar web sitesi.

## Özellikler

- Modern ve premium tasarım
- Mobil uyumlu (responsive) arayüz
- Animasyonlu geçişler ve efektler
- Kategori bazlı menü sistemi
- İletişim formu ve rezervasyon bölümü
- Instagram entegrasyonu
- Google Maps entegrasyonu
- SEO optimizasyonu

## Teknolojiler

- **Next.js 16** - React framework
- **React 19** - UI library
- **Tailwind CSS 4** - Styling
- **TypeScript** - Type safety
- **Lucide Icons** - Icon library
- **Swiper.js** - Slider/carousel

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build oluştur
npm run build

# Production sunucusunu başlat
npm start
```

## Yapı

```
src/
├── app/
│   ├── page.tsx        # Ana sayfa
│   ├── menu/           # Menü sayfası
│   ├── layout.tsx      # Root layout
│   └── globals.css     # Global stiller
├── components/
│   ├── Hero.tsx        # Hero bölümü
│   ├── About.tsx       # Hakkımızda
│   ├── Menu.tsx        # Menü önizleme
│   ├── Testimonials.tsx # Yorumlar
│   ├── Contact.tsx     # İletişim
│   ├── Reservation.tsx # Rezervasyon
│   ├── Footer.tsx      # Footer
│   └── ...
└── data/
    └── menuData.ts     # Menü verileri
```

## Deployment

Site Vercel üzerinde deploy edilmektedir. `vercel --prod` komutu ile production'a deploy edilebilir.

## Lisans

Tüm hakları saklıdır.
