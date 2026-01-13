'use client';

import { useEffect } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Handle anchor links with native smooth scroll
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor?.hash && anchor.hash.startsWith('#')) {
        const element = document.querySelector(anchor.hash);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
}
