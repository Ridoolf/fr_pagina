import { motion, useReducedMotion } from 'framer-motion';
import { useInViewReveal } from '../hooks/useInViewReveal';

const variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const reducedVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function RevealSection({ children, className = '', delay = 0 }) {
  const { ref, visible } = useInViewReveal();
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={visible ? 'visible' : 'hidden'}
      variants={prefersReducedMotion ? reducedVariants : variants}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
