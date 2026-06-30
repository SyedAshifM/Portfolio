import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { useEffect } from 'react';
import type { Project } from '../data/portfolio';

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-5 py-8 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onMouseDown={onClose}
        >
          <motion.div
            className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-brand border border-line bg-panel shadow-card"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.22 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-t-brand">
              <img src={project.image} alt="" className="h-full w-full object-cover" loading="lazy" />
              <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 inline-grid size-10 place-items-center rounded-full border border-line bg-black/50 text-white backdrop-blur transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Close project details"
              >
                <X size={18} />
              </button>
            </div>
            <div className="space-y-6 p-6 sm:p-8">
              <div>
                <p className="text-sm font-medium text-accent">{project.subtitle}</p>
                <h3 id="project-modal-title" className="mt-2 text-3xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
              <p className="text-base leading-8 text-zinc-300">{project.details}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="rounded-full border border-line bg-white/[0.04] px-3 py-1 text-sm text-zinc-300">
                    {item}
                  </span>
                ))}
              </div>
              {(project.github || project.live) && (
                <div className="flex flex-wrap gap-3">
                  {project.github && (
                    <a className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950" href={project.github} target="_blank" rel="noreferrer">
                      <Github size={16} /> GitHub
                    </a>
                  )}
                  {project.live && (
                    <a className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-semibold text-white" href={project.live} target="_blank" rel="noreferrer">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
