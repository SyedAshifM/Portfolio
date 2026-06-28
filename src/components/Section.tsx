import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { fadeUp } from '../utils/motion';

type SectionProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

export const Section = ({ id, eyebrow, title, children, className = '' }: SectionProps) => {
  const { ref, inView } = useInView({ threshold: 0.12, triggerOnce: true });

  return (
    <section id={id} ref={ref} data-in-view={inView} className={`relative scroll-mt-28 px-5 py-24 sm:px-8 lg:px-10 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title) && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-12 max-w-3xl"
          >
            {eyebrow && <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-accent">{eyebrow}</p>}
            {title && <h2 className="text-4xl font-semibold leading-tight text-zinc-50 sm:text-5xl">{title}</h2>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};
