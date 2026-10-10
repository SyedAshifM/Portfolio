import { motion } from 'framer-motion';
import { Cloud, Code2, Database, GitBranch, Layers3, Workflow } from 'lucide-react';
import { Section } from '../components/Section';
import { portfolio } from '../data/portfolio';
import { fadeUp, stagger } from '../utils/motion';

export const About = () => (
  <Section id="about" eyebrow="About" title="Design-minded engineering for complex products.">
    <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass-card rounded-brand p-6 sm:p-8">
        <p className="text-lg leading-9 text-zinc-300">{portfolio.about}</p>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {portfolio.highlights.map((item) => (
            <motion.div key={item} variants={fadeUp} className="glass-card rounded-brand p-4">
              <p className="text-sm font-medium text-zinc-200">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-4 sm:grid-cols-2">
        {[
          ['Enterprise UI', 'Reusable React and Angular interfaces for complex business workflows.', Code2],
          ['Data Migration', 'ETL pipelines, data mapping, cleansing, staging, and validation.', Database],
          ['SAP Integration', 'SAP BTP, HANA Cloud, Cloud Connector, OData, and RFC/BAPI flows.', Workflow],
          ['Cloud Deployments', 'SAP BTP Cloud Foundry, AWS, Docker, Linux, Nginx, and PM2.', Cloud],
          ['API Systems', 'FastAPI, Node.js, Express.js, REST APIs, SQLAlchemy, and Pydantic.', Layers3],
          ['Release Workflow', 'Git, Azure DevOps, CI/CD collaboration, debugging, and support.', GitBranch],
        ].map(([label, description, Icon]) => (
          <motion.div key={label as string} variants={fadeUp} className="rounded-brand border border-line bg-panel p-5">
            <Icon className="mb-4 text-accent" size={22} />
            <p className="font-semibold text-white">{label as string}</p>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{description as string}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </Section>
);
