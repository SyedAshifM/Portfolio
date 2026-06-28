import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp } from '../utils/motion';

export const Reveal = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-70px' }}
    transition={{ duration: 0.58, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);
