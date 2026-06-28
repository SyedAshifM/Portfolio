import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { portfolio } from '../data/portfolio';
import { fadeUp, stagger } from '../utils/motion';

export const Skills = () => (
  <Section id="skills" eyebrow="Skills" title="A practical stack for polished, scalable products.">
    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {portfolio.skills.map((group) => (
        <motion.div key={group.group} variants={fadeUp} whileHover={{ y: -8, scale: 1.01 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }} className="rounded-brand border border-line bg-panel p-6 shadow-card">
          <h3 className="mb-5 text-xl font-semibold text-white">{group.group}</h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((skill) => (
              <span key={skill} className="rounded-full border border-line bg-white/[0.04] px-3 py-2 text-sm text-zinc-300 transition hover:border-accent/50 hover:text-white">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </Section>
);
