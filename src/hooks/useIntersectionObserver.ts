'use client';
import { RefObject, useEffect } from 'react';

function useIntersectionObserver(
  containerRef: RefObject<HTMLDivElement>,
  setActivePhoto: (index: number) => void
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observerOptions = {
      root: container,
      threshold: 0.5, // Настройте порог по необходимости
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'));
          setActivePhoto(index);
        }
      });
    };

    const observer = new IntersectionObserver(callback, observerOptions);

    const children = container.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      child.setAttribute('data-index', i.toString());
      observer.observe(child);
    }

    return () => {
      observer.disconnect();
    };
  }, [containerRef, setActivePhoto]);
}

export default useIntersectionObserver;
