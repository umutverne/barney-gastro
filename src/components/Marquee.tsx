'use client';

export default function Marquee() {
  const items = [
    'CRAFT BEER',
    'GASTRO PUB',
    'PREMIUM FOOD',
    'COCKTAILS',
    'LIVE MUSIC',
  ];

  // Sonsuz döngü için itemları 4 kez tekrarlıyoruz
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-[var(--dark-lighter)] py-5 border-y border-white/5 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee-infinite">
        {repeatedItems.map((item, index) => (
          <span key={index} className="flex items-center shrink-0">
            <span className="font-[family-name:var(--font-bebas)] text-xl tracking-[0.2em] text-gray-500 px-8">
              {item}
            </span>
            <span className="text-[var(--primary)]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
