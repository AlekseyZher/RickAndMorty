import { useEffect } from 'react';
import type { RefObject } from 'react';

interface UseIntersectionObserverProps {
  onIntersect: () => void;
  enabled?: boolean;
  threshold?: number;
}

export const useIntersectionObserver = (
  ref: RefObject<HTMLElement | null>,
  { onIntersect, enabled = true, threshold = 1.0 }: UseIntersectionObserverProps
) => {
  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersect();
        }
      },
      { threshold }
    );

    const currentElement = ref.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [ref, onIntersect, enabled, threshold]);
};
