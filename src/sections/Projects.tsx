import { motion } from 'framer-motion';
import { ExternalLink, Github, Maximize2 } from 'lucide-react';
import { useState } from 'react';
import { ProjectModal } from '../components/ProjectModal';
import { Section } from '../components/Section';
import { portfolio, type Project } from '../data/portfolio';
import { fadeUp, stagger } from '../utils/motion';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const isTwoProjectLayout = portfolio.projects.length === 2;

  return (
    <Section id="projects" eyebrow="Projects" title="Selected work shaped for real business workflows.">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`grid gap-8 ${isTwoProjectLayout ? 'mx-auto max-w-6xl lg:grid-cols-2' : 'lg:grid-cols-3'}`}
      >
        {portfolio.projects.map((project) => (
          <motion.article key={project.title} variants={fadeUp} whileHover={{ y: -10 }} className="group overflow-hidden rounded-brand border border-line bg-panel shadow-card">
            <button
              type="button"
              onClick={() => setSelectedProject(project)}
              className={`relative block w-full overflow-hidden text-left ${isTwoProjectLayout ? 'aspect-[16/11] sm:aspect-[16/9]' : 'aspect-[16/10]'}`}
              aria-label={`Open details for ${project.title}`}
            >
              <img src={project.image} alt={`${project.title} project preview`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <span className="absolute right-4 top-4 inline-grid size-10 place-items-center rounded-full border border-line bg-black/40 text-white backdrop-blur">
                <Maximize2 size={17} />
              </span>
            </button>
            <div className={isTwoProjectLayout ? 'space-y-6 p-7 sm:p-8' : 'space-y-5 p-6'}>
              <div>
                <p className="text-sm font-medium text-accent">{project.subtitle}</p>
                <h3 className={isTwoProjectLayout ? 'mt-2 text-3xl font-semibold text-white' : 'mt-2 text-2xl font-semibold text-white'}>{project.title}</h3>
              </div>
              <p className={isTwoProjectLayout ? 'text-lg leading-8 text-zinc-300' : 'leading-7 text-zinc-300'}>{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="rounded-full border border-line bg-white/[0.04] px-3 py-1 text-xs text-zinc-300">
                    {item}
                  </span>
                ))}
              </div>
              {(project.github || project.live) && (
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
                      <Github size={16} /> GitHub
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </Section>
  );
};
