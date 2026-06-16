import { useEffect, useRef, useState } from 'react';

export function useInViewReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px', ...options },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, visible };
}

export function scrollToTurno() {
  const el = document.getElementById('turno');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
