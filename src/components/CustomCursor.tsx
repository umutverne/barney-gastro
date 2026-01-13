'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(
      window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window
    );
  }, []);

  if (isMobile) return null;

  return (
    <style jsx global>{`
      /* Custom cursor using CSS */
      * {
        cursor: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='8' stroke='%23c9a227' stroke-width='2' fill='none'/%3E%3Ccircle cx='10' cy='10' r='3' fill='%23c9a227'/%3E%3C/svg%3E") 10 10, auto !important;
      }

      a, button, [role="button"], input[type="submit"], input[type="button"],
      .cursor-pointer {
        cursor: url("data:image/svg+xml,%3Csvg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='14' cy='14' r='12' stroke='%23c9a227' stroke-width='2' fill='rgba(201,162,39,0.1)'/%3E%3Ccircle cx='14' cy='14' r='4' fill='%23c9a227'/%3E%3C/svg%3E") 14 14, pointer !important;
      }

      a:active, button:active {
        cursor: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='7' fill='%23c9a227'/%3E%3C/svg%3E") 8 8, pointer !important;
      }
    `}</style>
  );
}
