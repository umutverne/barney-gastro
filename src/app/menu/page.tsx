'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Home, Search, X, Snowflake, Flame, Beef, UtensilsCrossed,
  Salad, Pizza, ChefHat, Cake, Beer, Wine, Martini,
  GlassWater, Sparkles, Coffee
} from 'lucide-react';

// Kategori ikonları
const categoryIcons: Record<string, React.ReactNode> = {
  'Soğuk Lezzetler': <Snowflake size={18} />,
  'Sıcak Atıştırmalıklar': <Flame size={18} />,
  'Burgerler': <Beef size={18} />,
  'Makarnalar': <UtensilsCrossed size={18} />,
  'Salatalar': <Salad size={18} />,
  'Pizzalar': <Pizza size={18} />,
  'Ana Yemekler': <ChefHat size={18} />,
  'Tatlılar': <Cake size={18} />,
  'Yerli Biralar': <Beer size={18} />,
  'İthal Biralar': <Beer size={18} />,
  'Fıçı Biralar': <Beer size={18} />,
  'Klasik Kokteyller': <Martini size={18} />,
  'Barney Kokteyller': <Sparkles size={18} />,
  'Cinler': <Wine size={18} />,
  'Votkalar': <Wine size={18} />,
  'Viskiler': <Wine size={18} />,
  'Shotlar': <Coffee size={18} />,
  'Şaraplar': <Wine size={18} />,
  'Alkolsüz': <GlassWater size={18} />,
};

// Menü verileri
const menuData: Record<string, Array<{ name: string; description: string; price: string }>> = {
  'Soğuk Lezzetler': [
    { name: 'Lüks Karışık Kuru Yemiş', description: 'Özel karışım kuruyemiş tabağı', price: '280' },
    { name: 'Tuzlu Fıstık', description: 'Kavrulmuş tuzlu fıstık', price: '140' },
    { name: 'Peynir Tabağı', description: 'Seçkin peynir çeşitleri', price: '500' },
    { name: 'Çikolatalı Viski Tabağı', description: 'Viski ile servis edilen çikolata tabağı', price: '500' },
    { name: 'Susam Soslu Salatalık', description: 'Taze salatalık, susam sos', price: '180' },
    { name: 'Bamya Turşusu', description: 'Ev yapımı bamya turşusu', price: '175' },
    { name: 'Karpuz Peynir Tabağı', description: 'Taze karpuz, beyaz peynir', price: '300' },
    { name: 'Zeytin Tabağı', description: 'Seçilmiş zeytin çeşitleri', price: '220' },
  ],
  'Sıcak Atıştırmalıklar': [
    { name: 'Barney Çıtır Patates Tabağı', description: 'Özel soslarla servis', price: '325' },
    { name: 'Trüf Parmesanlı Patates', description: 'Trüf yağı, parmesan peyniri', price: '380' },
    { name: 'Cheddarlı Patates', description: 'Eritilmiş cheddar peyniri', price: '370' },
    { name: 'Tempura Sebze Tabağı', description: 'Çıtır tempura hamurunda sebzeler', price: '290' },
    { name: 'Mexican Fever Nachos', description: 'Jalapeno, peynir sos, guacamole', price: '550' },
    { name: 'Tempura Bamya', description: 'Çıtır tempura hamurunda bamya', price: '290' },
    { name: 'Çıtır Frankfurter Tabağı', description: 'Çıtır sosisler', price: '500' },
    { name: 'Çıtır Tavuk Tabağı', description: 'Çıtır kaplamalı tavuk parçaları', price: '500' },
    { name: 'Fish & Chips', description: 'Çıtır balık, patates kızartması', price: '500' },
    { name: 'Kalamar Tava', description: 'Taze kalamar, özel sos', price: '600' },
    { name: 'Midye Tava', description: 'Çıtır midye, limon', price: '350' },
    { name: 'Barney Beer Box', description: 'Özel bira eşlikli atıştırmalık', price: '540' },
  ],
  'Burgerler': [
    { name: 'Basic Hamburger', description: 'Klasik hamburger, taze malzemeler', price: '500' },
    { name: 'Cheese Burger', description: 'Cheddar peynirli burger', price: '520' },
    { name: 'Barney Sloppy Burger', description: 'Özel Barney sosu ile', price: '510' },
    { name: 'Tavuk Burger', description: 'Izgara tavuk göğsü', price: '475' },
  ],
  'Makarnalar': [
    { name: 'Fettucine Alfredo', description: 'Kremali makarna, parmesan', price: '440' },
    { name: 'Penne Arabiata', description: 'Acılı domates soslu penne', price: '400' },
    { name: 'Fettucine Bolonez', description: 'Kıymalı domates sos', price: '440' },
    { name: 'Penne Napoliten', description: 'Domates soslu penne', price: '400' },
  ],
  'Salatalar': [
    { name: 'Çıtır Tavuklu Salata', description: 'Çıtır tavuk, taze yeşillikler', price: '400' },
    { name: 'Roka Parmesan Salata', description: 'Taze roka, parmesan', price: '350' },
    { name: 'Sezar Salata', description: 'Klasik sezar sos, kruton', price: '400' },
  ],
  'Pizzalar': [
    { name: 'Margarita Pizza', description: 'Domates sos, mozzarella, fesleğen', price: '500' },
    { name: 'Füme Pizza', description: 'Füme et, özel peynir karışımı', price: '620' },
    { name: 'Dört Peynirli Pizza', description: 'Mozzarella, cheddar, parmesan, rokfor', price: '520' },
    { name: 'Barney Karnaval Pizza', description: 'Özel Barney tarifi', price: '600' },
    { name: 'Pepperoni Pizza', description: 'Pepperoni, mozzarella', price: '520' },
  ],
  'Ana Yemekler': [
    { name: 'Risottolu Izgara Tavuk', description: 'Kremalı risotto, ızgara tavuk', price: '525' },
    { name: 'BBQ Soslu Tavuk', description: 'BBQ sos, patates püresi', price: '500' },
    { name: 'Tavuk Şnitzel', description: 'Çıtır tavuk şnitzel', price: '500' },
    { name: 'Izgara Köfte', description: 'Ev yapımı köfte, garnitür', price: '575' },
    { name: 'Cafe de Paris Soslu Biftek', description: 'Premium biftek, özel sos', price: '850' },
  ],
  'Tatlılar': [
    { name: 'Barney Lotus', description: 'Lotus bisküvili özel tatlı', price: '330' },
    { name: 'Portakal Likörlü Tiramisu', description: 'Portakal likörü ile', price: '330' },
    { name: 'Acı Bademli Çıtır Muhallebi', description: 'Geleneksel lezzet, modern sunum', price: '330' },
  ],
  'Yerli Biralar': [
    { name: 'Efes Serçe', description: '30cl', price: '190' },
    { name: 'Efes', description: '50cl', price: '250' },
    { name: 'Efes Malt', description: '25cl / 50cl', price: '190 / 250' },
    { name: 'Efes Özel Seri', description: '50cl', price: '270' },
    { name: 'Efes Glutensiz', description: '50cl', price: '270' },
    { name: 'Bomonti Filtresiz', description: '50cl', price: '250' },
  ],
  'İthal Biralar': [
    { name: 'Bud', description: '33cl / 50cl', price: '215 / 260' },
    { name: 'Beck\'s', description: '33cl / 50cl', price: '210 / 270' },
    { name: 'Belfast', description: '50cl', price: '250' },
    { name: 'Heineken', description: '33cl', price: '310' },
    { name: 'Budweiser', description: '33cl', price: '320' },
    { name: 'Miller', description: '33cl', price: '270' },
    { name: 'Corona', description: '35.5cl', price: '350' },
    { name: 'Amsterdam', description: '50cl', price: '375' },
    { name: 'Stella Artois', description: '44cl', price: '250' },
  ],
  'Fıçı Biralar': [
    { name: 'Efes Fıçı', description: '25cl / 50cl', price: '110 / 220' },
    { name: 'Belfast Fıçı', description: '25cl / 50cl', price: '125 / 250' },
    { name: 'Bud Fıçı', description: '25cl / 50cl', price: '125 / 250' },
    { name: 'Kaymak Birası', description: 'Özel', price: '285' },
    { name: 'Herkese Benden Bira', description: 'Mekan için bira ısmarla', price: '7500' },
  ],
  'Klasik Kokteyller': [
    { name: 'Espresso Martini', description: 'Vodka, kahve likörü, espresso', price: '540' },
    { name: 'Negroni', description: 'Gin, campari, vermut', price: '540' },
    { name: 'Margarita', description: 'Tekila, triple sec, lime', price: '540' },
    { name: 'Whiskey Sour', description: 'Viski, limon, şeker', price: '540' },
    { name: 'Long Island', description: 'Vodka, gin, rom, tekila, triple sec', price: '675' },
    { name: 'Old Fashioned', description: 'Bourbon, bitter, şeker', price: '540' },
    { name: 'Mojito', description: 'Rom, nane, lime, soda', price: '540' },
    { name: 'Cosmopolitan', description: 'Vodka, triple sec, lime, cranberry', price: '540' },
    { name: 'Aperol Spritz', description: 'Aperol, prosecco, soda', price: '540' },
    { name: 'Moscow Mule', description: 'Vodka, zencefil birası, lime', price: '540' },
  ],
  'Barney Kokteyller': [
    { name: 'Kuzukulağı', description: 'Barney özel tarifi', price: '540' },
    { name: 'Suit Up', description: 'Barney imza kokteyli', price: '540' },
    { name: 'The Glen McKenna', description: 'Viski bazlı özel kokteyl', price: '540' },
    { name: 'Minnesota Tidal Wave', description: 'Tropikal lezzetler', price: '540' },
    { name: 'Sakızlı', description: 'Sakız aromalı özel karışım', price: '540' },
    { name: 'Ahududu-Muz', description: 'Ahududu, muz, özel karışım', price: '540' },
    { name: 'Yeşil Ördek', description: 'Barney signature', price: '540' },
  ],
  'Cinler': [
    { name: 'Gordon\'s', description: 'Klasik London Dry', price: '500' },
    { name: 'Beefeater', description: 'London Dry Gin', price: '500' },
    { name: 'Hendrick\'s', description: 'Premium Scottish Gin', price: '700' },
    { name: 'Bombay Sapphire', description: 'Premium gin', price: '625' },
    { name: 'Tanqueray', description: 'London Dry', price: '625' },
    { name: 'Monkey 47', description: 'Alman premium gin', price: '700' },
  ],
  'Votkalar': [
    { name: 'Smirnoff', description: 'Klasik vodka', price: '540' },
    { name: 'Absolut', description: 'İsveç vodkası', price: '500' },
    { name: 'Absolut Elyx', description: 'Premium single estate', price: '675' },
    { name: 'Finlandia', description: 'Fin vodkası', price: '590' },
    { name: 'Haku', description: 'Japon vodkası', price: '650' },
    { name: 'Ketel One', description: 'Hollanda vodkası', price: '650' },
  ],
  'Viskiler': [
    { name: 'Jameson', description: 'İrlanda viskisi', price: '525' },
    { name: 'Chivas Regal 12', description: '12 yıllık', price: '575' },
    { name: 'Jack Daniels', description: 'Tennessee whiskey', price: '575' },
    { name: 'JW Black Label', description: 'İskoç viskisi', price: '575' },
    { name: 'JW Gold Label', description: 'Premium blend', price: '700' },
    { name: 'Singleton 12', description: '12 yıllık single malt', price: '575' },
  ],
  'Shotlar': [
    { name: 'Tekila', description: 'Jose Cuervo', price: '180' },
    { name: 'Jager Shot', description: 'Bitkisel likör', price: '180' },
    { name: 'Fireball', description: 'Tarçınlı viski likörü', price: '180' },
    { name: 'B-52', description: 'Baileys, kahlua, triple sec', price: '240' },
    { name: 'Sambuca', description: 'Anason likörü', price: '180' },
  ],
  'Şaraplar': [
    { name: 'Suvla Kırmızı', description: 'Kadeh', price: '500' },
    { name: 'Suvla Beyaz', description: 'Kadeh', price: '500' },
    { name: 'Ancyra Kırmızı', description: 'Kadeh', price: '500' },
    { name: 'Ancyra Beyaz', description: 'Kadeh', price: '500' },
  ],
  'Alkolsüz': [
    { name: 'Soda', description: 'Sade soda', price: '125' },
    { name: 'Ev Yapımı Limonata', description: 'Taze sıkılmış', price: '160' },
    { name: 'Redbull', description: 'Enerji içeceği', price: '250' },
    { name: 'Kola / Sprite', description: 'Meşrubat', price: '140' },
    { name: 'Su', description: 'Şişe su', price: '70' },
  ],
};

const categories = Object.keys(menuData);

// Kategori grupları
const categoryGroups = {
  'Yemekler': ['Soğuk Lezzetler', 'Sıcak Atıştırmalıklar', 'Burgerler', 'Makarnalar', 'Salatalar', 'Pizzalar', 'Ana Yemekler', 'Tatlılar'],
  'İçecekler': ['Yerli Biralar', 'İthal Biralar', 'Fıçı Biralar', 'Klasik Kokteyller', 'Barney Kokteyller', 'Cinler', 'Votkalar', 'Viskiler', 'Shotlar', 'Şaraplar', 'Alkolsüz'],
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredItems = searchTerm
    ? Object.entries(menuData).flatMap(([category, items]) =>
        items
          .filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map(item => ({ ...item, category }))
      )
    : null;

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 100%)', overflowX: 'hidden' }}>
      {/* Header */}
      <header
        style={{
          background: 'linear-gradient(180deg, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.95) 100%)',
          borderBottom: '1px solid rgba(201, 162, 39, 0.1)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: 'rgba(161, 161, 170, 1)',
                textDecoration: 'none',
                padding: '8px 16px',
                marginLeft: '-16px',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
              }}
              className="hover:text-[#c9a227] hover:bg-[#c9a227]/10"
            >
              <Home size={18} />
              <span style={{ fontSize: '14px', fontWeight: '500' }}>Ana Sayfa</span>
            </Link>

            <div style={{ textAlign: 'center' }}>
              <h1
                className="font-[family-name:var(--font-bebas)]"
                style={{
                  fontSize: 'clamp(28px, 5vw, 40px)',
                  letterSpacing: '0.25em',
                  color: '#c9a227',
                  lineHeight: 1,
                }}
              >
                BARNEY
              </h1>
              <p style={{
                fontSize: '10px',
                color: 'rgba(113, 113, 122, 1)',
                textTransform: 'uppercase',
                letterSpacing: '0.35em',
                marginTop: '4px',
              }}>
                Gastro Pub Menu
              </p>
            </div>

            <div style={{ width: '100px' }} />
          </div>
        </div>
      </header>

      {/* Search - Sticky */}
      <div
        style={{
          background: 'rgba(10,10,10,0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px' }}>
          <div style={{ position: 'relative', maxWidth: '400px' }}>
            <Search
              style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'rgba(113, 113, 122, 1)',
              }}
              size={18}
            />
            <input
              type="text"
              placeholder="Menüde ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                background: 'rgba(26, 26, 26, 0.8)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                padding: '14px 44px',
                color: 'white',
                fontSize: '14px',
                outline: 'none',
                transition: 'all 0.2s ease',
              }}
              className="placeholder:text-zinc-600 focus:border-[#c9a227]/50 focus:bg-[#1a1a1a]"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'rgba(113, 113, 122, 1)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                  borderRadius: '4px',
                  transition: 'color 0.2s ease',
                }}
                className="hover:text-white"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', overflow: 'hidden' }}>
        {searchTerm ? (
          /* Search Results */
          <div style={{ padding: '24px' }}>
            <p style={{ color: 'rgba(113, 113, 122, 1)', fontSize: '14px', marginBottom: '24px' }}>
              <span style={{ color: '#c9a227', fontWeight: '600' }}>{filteredItems?.length || 0}</span> sonuç bulundu
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '16px',
              }}
            >
              {filteredItems?.map((item, index) => (
                <div
                  key={index}
                  className={`${isLoaded ? 'animate-fade-in-up' : ''} hover:border-[#c9a227]/30 hover:-translate-y-1`}
                  style={{
                    background: 'linear-gradient(145deg, rgba(26, 26, 26, 0.9) 0%, rgba(18, 18, 18, 0.95) 100%)',
                    borderRadius: '16px',
                    padding: '20px',
                    border: '1px solid rgba(255,255,255,0.06)',
                    transition: 'all 0.3s ease',
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '12px',
                  }}>
                    <span style={{ color: '#c9a227' }}>{categoryIcons[item.category]}</span>
                    <span style={{
                      fontSize: '11px',
                      color: '#c9a227',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontWeight: '600',
                    }}>
                      {item.category}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1, paddingRight: '16px' }}>
                      <h3 style={{ color: 'white', fontWeight: '600', fontSize: '16px', marginBottom: '6px' }}>
                        {item.name}
                      </h3>
                      <p style={{ color: 'rgba(161, 161, 170, 1)', fontSize: '13px', lineHeight: '1.5' }}>
                        {item.description}
                      </p>
                    </div>
                    <div style={{
                      background: 'linear-gradient(135deg, rgba(201, 162, 39, 0.15) 0%, rgba(201, 162, 39, 0.05) 100%)',
                      borderRadius: '10px',
                      padding: '8px 14px',
                      border: '1px solid rgba(201, 162, 39, 0.2)',
                    }}>
                      <span style={{ color: '#c9a227', fontWeight: '700', fontSize: '16px' }}>₺{item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Category View */
          <div style={{ display: 'flex' }} className="flex-col md:flex-row">
            {/* Category Sidebar */}
            <div
              style={{
                flexShrink: 0,
                borderRight: '1px solid rgba(255,255,255,0.05)',
              }}
              className="w-full md:w-56 lg:w-64"
            >
              {/* Mobile Categories - Horizontal Scroll */}
              <div className="md:hidden" style={{ overflowX: 'auto', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'flex', gap: '8px', padding: '12px 16px' }}>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      style={{
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 16px',
                        borderRadius: '10px',
                        fontSize: '13px',
                        fontWeight: '500',
                        transition: 'all 0.2s ease',
                        background: activeCategory === category
                          ? 'linear-gradient(135deg, #c9a227 0%, #b8922a 100%)'
                          : 'rgba(26, 26, 26, 0.8)',
                        color: activeCategory === category ? '#0a0a0a' : 'rgba(161, 161, 170, 1)',
                        border: activeCategory === category
                          ? 'none'
                          : '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      {categoryIcons[category]}
                      <span>{category}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Desktop Categories - Grouped */}
              <div
                className="hidden md:block"
                style={{
                  position: 'sticky',
                  top: '70px',
                  height: 'calc(100vh - 150px)',
                  overflowY: 'auto',
                  padding: '20px 0',
                }}
              >
                {Object.entries(categoryGroups).map(([groupName, groupCategories]) => (
                  <div key={groupName} style={{ marginBottom: '24px' }}>
                    <h3 style={{
                      fontSize: '11px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: 'rgba(113, 113, 122, 1)',
                      padding: '0 20px',
                      marginBottom: '12px',
                    }}>
                      {groupName}
                    </h3>
                    {groupCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '12px 20px',
                          fontSize: '14px',
                          textAlign: 'left',
                          transition: 'all 0.2s ease',
                          background: activeCategory === category
                            ? 'linear-gradient(90deg, rgba(201, 162, 39, 0.15) 0%, transparent 100%)'
                            : 'transparent',
                          color: activeCategory === category ? '#c9a227' : 'rgba(161, 161, 170, 1)',
                          borderLeft: activeCategory === category
                            ? '3px solid #c9a227'
                            : '3px solid transparent',
                          fontWeight: activeCategory === category ? '600' : '400',
                          border: 'none',
                          cursor: 'pointer',
                        }}
                        className="hover:bg-[#1a1a1a]/50 hover:text-white"
                      >
                        <span style={{
                          opacity: activeCategory === category ? 1 : 0.6,
                          transition: 'opacity 0.2s ease',
                        }}>
                          {categoryIcons[category]}
                        </span>
                        <span>{category}</span>
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Menu Items */}
            <div style={{ flex: 1, minWidth: 0, padding: '24px' }} className="md:p-8">
              {/* Category Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '32px',
                  paddingBottom: '20px',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(201, 162, 39, 0.2) 0%, rgba(201, 162, 39, 0.1) 100%)',
                  border: '1px solid rgba(201, 162, 39, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#c9a227',
                }}>
                  {categoryIcons[activeCategory]}
                </div>
                <div>
                  <h2
                    className="font-[family-name:var(--font-playfair)]"
                    style={{
                      fontSize: 'clamp(24px, 4vw, 32px)',
                      fontWeight: '700',
                      color: 'white',
                      marginBottom: '4px',
                    }}
                  >
                    {activeCategory}
                  </h2>
                  <span style={{
                    fontSize: '13px',
                    color: 'rgba(113, 113, 122, 1)',
                  }}>
                    {menuData[activeCategory].length} ürün
                  </span>
                </div>
              </div>

              {/* Items Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: '16px',
                }}
              >
                {menuData[activeCategory].map((item, index) => (
                  <div
                    key={index}
                    className={`group ${isLoaded ? 'animate-fade-in-up' : ''}`}
                    style={{
                      background: 'linear-gradient(145deg, rgba(26, 26, 26, 0.8) 0%, rgba(18, 18, 18, 0.9) 100%)',
                      borderRadius: '16px',
                      padding: '20px',
                      border: '1px solid rgba(255,255,255,0.06)',
                      transition: 'all 0.3s ease',
                      animationDelay: `${index * 30}ms`,
                      cursor: 'default',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ flex: 1, paddingRight: '16px' }}>
                        <h3
                          style={{
                            color: 'white',
                            fontWeight: '600',
                            fontSize: '16px',
                            marginBottom: '8px',
                            transition: 'color 0.2s ease',
                          }}
                          className="group-hover:text-[#c9a227]"
                        >
                          {item.name}
                        </h3>
                        <p style={{
                          color: 'rgba(161, 161, 170, 1)',
                          fontSize: '13px',
                          lineHeight: '1.6',
                        }}>
                          {item.description}
                        </p>
                      </div>
                      <div style={{
                        background: 'linear-gradient(135deg, rgba(201, 162, 39, 0.12) 0%, rgba(201, 162, 39, 0.05) 100%)',
                        borderRadius: '10px',
                        padding: '10px 16px',
                        border: '1px solid rgba(201, 162, 39, 0.15)',
                        transition: 'all 0.3s ease',
                      }}
                      className="group-hover:border-[#c9a227]/40 group-hover:bg-[#c9a227]/15"
                      >
                        <span style={{
                          color: '#c9a227',
                          fontWeight: '700',
                          fontSize: '17px',
                          fontFamily: 'var(--font-inter)',
                        }}>
                          ₺{item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          marginTop: '48px',
          padding: '24px',
          background: 'rgba(10,10,10,0.5)',
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: 'rgba(113, 113, 122, 1)',
            fontSize: '12px',
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#c9a227',
              opacity: 0.6,
            }} />
            <span>Fiyatlara KDV dahildir</span>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#c9a227',
              opacity: 0.6,
            }} />
            <span>Menü güncellenebilir</span>
          </div>
          <p style={{ color: 'rgba(82, 82, 91, 1)', fontSize: '11px' }}>
            © 2025 Barney Gastro Pub
          </p>
        </div>
      </footer>
    </div>
  );
}
