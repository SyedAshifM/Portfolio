import { motion } from 'framer-motion';
import { Code2, Database, Layers3 } from 'lucide-react';
import { Section } from '../components/Section';
import { portfolio } from '../data/portfolio';
import { fadeUp, stagger } from '../utils/motion';

export const About = () => (
  <Section id="about" eyebrow="About" title="Design-minded engineering for complex products.">
    <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
        <div className="absolute -inset-4 rounded-[32px] bg-brand-gradient opacity-20 blur-2xl" />
        <img src={portfolio.profileImage} alt="Syed Ashif working as a frontend developer" loading="lazy" className="relative aspect-[4/5] w-full rounded-[28px] border border-line object-cover object-[center_30%] shadow-card" />
      </motion.div>
      <div>
        <p className="text-lg leading-9 text-zinc-300">{portfolio.about}</p>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {portfolio.highlights.map((item) => (
            <motion.div key={item} variants={fadeUp} className="glass-card rounded-brand p-4">
              <p className="text-sm font-medium text-zinc-200">{item}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            ['Interface Systems', Code2],
            ['Data Workflows', Database],
            ['Product Scale', Layers3],
          ].map(([label, Icon]) => (
            <div key={label as string} className="rounded-brand border border-line bg-panel p-5">
              <Icon className="mb-4 text-accent" size={22} />
              <p className="font-semibold text-white">{label as string}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);
