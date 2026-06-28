import { motion } from 'framer-motion';
import { BriefcaseBusiness } from 'lucide-react';
import { Section } from '../components/Section';
import { portfolio } from '../data/portfolio';
import { fadeUp } from '../utils/motion';

export const Experience = () => (
  <Section id="experience" eyebrow="Experience" title="Enterprise product work with a frontend craft lens.">
    <div className="relative mx-auto max-w-4xl">
      <div className="absolute bottom-0 left-5 top-0 w-px bg-line sm:left-8" />
      {portfolio.experience.map((item) => (
        <motion.article key={item.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative pl-16 sm:pl-24">
          <div className="absolute left-0 top-0 grid size-10 place-items-center rounded-full border border-line bg-panel text-accent sm:size-16">
            <BriefcaseBusiness size={22} />
          </div>
          <div className="rounded-brand border border-line bg-panel p-6 shadow-card sm:p-8">
            <div className="flex flex-col justify-between gap-3 sm:flex-row">
              <div>
                <p className="text-sm font-medium text-accent">{item.company}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
              </div>
              <span className="h-fit rounded-full border border-line px-3 py-1 text-sm text-zinc-400">{item.period}</span>
            </div>
            <ul className="mt-6 grid gap-3 text-zinc-300">
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      ))}
    </div>
  </Section>
);
