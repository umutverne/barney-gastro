'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Home, Search, X } from 'lucide-react';

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

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [searchTerm, setSearchTerm] = useState('');

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
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="bg-[#0a0a0a] border-b border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-5 md:py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3 text-zinc-500 hover:text-[#c9a227] transition-colors duration-200 px-3 py-2 -ml-3"
            >
              <Home size={20} />
              <span className="hidden sm:inline text-sm">Ana Sayfa</span>
            </Link>
            <div className="text-center">
              <h1 className="font-[family-name:var(--font-bebas)] text-3xl md:text-4xl tracking-[0.3em] text-[#c9a227]">
                BARNEY
              </h1>
              <p className="text-[10px] text-zinc-600 uppercase tracking-[0.4em]">Gastro Pub</p>
            </div>
            <div className="w-24" />
          </div>
        </div>
      </header>

      {/* Search - Sticky */}
      <div className="bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#1a1a1a] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-4">
          <div className="relative max-w-md mx-auto md:mx-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
            <input
              type="text"
              placeholder="Menüde ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#111] border border-[#222] rounded-lg py-2.5 pl-10 pr-10 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#c9a227]/50 transition-colors duration-200"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-white transition-colors duration-200"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {searchTerm ? (
          /* Search Results */
          <div className="px-4 py-6">
            <p className="text-zinc-500 text-sm mb-6">{filteredItems?.length || 0} sonuç bulundu</p>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems?.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#111] rounded-xl p-4 border border-[#1a1a1a] hover:border-[#c9a227]/30 transition-colors duration-200"
                >
                  <span className="text-[10px] text-[#c9a227] uppercase tracking-wider font-medium">{item.category}</span>
                  <div className="flex justify-between items-start mt-2">
                    <div className="flex-1 pr-4">
                      <h3 className="text-white font-medium">{item.name}</h3>
                      <p className="text-zinc-500 text-sm mt-1">{item.description}</p>
                    </div>
                    <span className="text-[#c9a227] font-semibold text-lg">₺{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Category View */
          <div className="flex flex-col md:flex-row">
            {/* Category Sidebar - Mobile: Horizontal Scroll, Desktop: Vertical */}
            <div className="md:w-48 lg:w-56 shrink-0 border-b md:border-b-0 md:border-r border-[#1a1a1a]">
              {/* Mobile Categories */}
              <div className="md:hidden overflow-x-auto">
                <div className="flex gap-2 p-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                        activeCategory === category
                          ? 'bg-[#c9a227] text-black'
                          : 'bg-[#111] text-zinc-400 hover:text-white border border-[#222]'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Desktop Categories */}
              <div className="hidden md:block md:sticky md:top-[62px] h-[calc(100vh-130px)] overflow-y-auto py-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left px-4 py-3 text-sm transition-all duration-200 border-l-2 ${
                      activeCategory === category
                        ? 'bg-[#c9a227]/10 text-[#c9a227] border-l-[#c9a227] font-medium'
                        : 'text-zinc-400 hover:text-white hover:bg-[#111] border-l-transparent'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Items */}
            <div className="flex-1 p-4 md:p-6">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  {activeCategory}
                </h2>
                <span className="text-xs text-zinc-600 bg-[#111] px-2 py-1 rounded-full border border-[#222]">
                  {menuData[activeCategory].length} ürün
                </span>
              </div>

              {/* Grid for larger screens, list for mobile */}
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {menuData[activeCategory].map((item, index) => (
                  <div
                    key={index}
                    className="group bg-[#111] rounded-xl p-4 border border-[#1a1a1a] hover:border-[#c9a227]/30 transition-colors duration-200"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1 pr-3 min-w-0">
                        <h3 className="text-white font-medium group-hover:text-[#c9a227] transition-colors duration-200">
                          {item.name}
                        </h3>
                        <p className="text-zinc-500 text-sm mt-1">{item.description}</p>
                      </div>
                      <div className="shrink-0 text-right">
                        <span className="text-[#c9a227] font-semibold text-lg">₺{item.price}</span>
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
      <div className="border-t border-[#1a1a1a] mt-8 py-4">
        <p className="text-center text-zinc-600 text-xs">
          Fiyatlara KDV dahildir. Menü güncellenebilir.
        </p>
      </div>
    </div>
  );
}
