'use client';

import { useState, useCallback } from 'react';
import LoadingIntro from './LoadingIntro';
import CustomCursor from './CustomCursor';
import SmoothScroll from './SmoothScroll';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <LoadingIntro onComplete={handleLoadComplete} />
      <CustomCursor />
      <SmoothScroll>
        <div
          className={`transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {children}
        </div>
      </SmoothScroll>
    </>
  );
}
