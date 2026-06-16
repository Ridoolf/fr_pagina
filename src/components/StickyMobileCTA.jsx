import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { scrollToTurno } from '../hooks/useInViewReveal';
import './StickyMobileCTA.css';

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const handleResize = () => {
      if (mq.matches) {
        setVisible(false);
        return;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => setFormVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );

    const formEl = document.getElementById('turno');
    if (formEl) observer.observe(formEl);

    const onScroll = () => {
      if (mq.matches) return;
      setVisible(window.scrollY > 300);
    };

    handleResize();
    window.addEventListener('scroll', onScroll, { passive: true });
    mq.addEventListener('change', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      mq.removeEventListener('change', handleResize);
    };
  }, []);

  const show = visible && !formVisible;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="sticky-cta"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
        >
          <button type="button" className="btn btn-primary sticky-cta-btn" onClick={scrollToTurno}>
            Reservar turno
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
