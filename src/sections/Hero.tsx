import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowDown, Download, Sparkles } from 'lucide-react';
import { Link } from 'react-scroll';
import { Button } from '../components/Button';
import { portfolio } from '../data/portfolio';
import { fadeLeft, fadeUp } from '../utils/motion';

export const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mouseX}px ${mouseY}px, rgba(99,102,241,0.18), transparent 42%)`;

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-10"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
      }}
    >
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />
      <div className="blob left-[8%] top-28 bg-primary/30" />
      <div className="blob right-[10%] top-44 bg-accent/20 animation-delay-2000" />
      <div className="blob bottom-20 left-[45%] bg-secondary/20 animation-delay-4000" />
      <div className="relative mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7, ease: 'easeOut' }} className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.04] px-4 py-2 text-sm text-zinc-300 shadow-card backdrop-blur">
            <Sparkles size={16} className="text-accent" /> Available for thoughtful frontend work
          </div>
          <p className="mb-3 text-lg font-medium text-zinc-300">Hello, I'm</p>
          <h1 className="text-balance text-6xl font-bold leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            {portfolio.name}
          </h1>
          <div className="mt-5 h-12 overflow-hidden text-3xl font-semibold text-transparent sm:text-4xl">
            <span className="typing-gradient typing inline-block whitespace-nowrap bg-brand-gradient bg-clip-text">{portfolio.role}</span>
          </div>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">{portfolio.intro}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link to="projects" smooth offset={-84} duration={600} className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full bg-zinc-50 px-5 text-sm font-semibold text-zinc-950 shadow-glow transition hover:bg-white">
              View Projects
            </Link>
            <Button href={portfolio.resume} download variant="secondary">
              <Download size={17} /> Download Resume
            </Button>
          </div>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fadeLeft} transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }} className="relative mx-auto w-full max-w-[520px]">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }} className="absolute -inset-4 rounded-full bg-brand-gradient opacity-80 blur-sm" />
          <div className="relative rounded-full border border-white/15 bg-ink p-3 shadow-glow">
            <div className="aspect-square overflow-hidden rounded-full bg-panel">
              <img src={portfolio.profileImage} alt="Professional portrait of Syed Ashif" className="h-full w-full object-cover object-[center_30%]" fetchPriority="high" />
            </div>
          </div>
          <div className="absolute -bottom-6 left-4 rounded-brand border border-line bg-white/[0.06] px-5 py-4 shadow-card backdrop-blur-xl">
            <p className="text-sm text-zinc-400">Focus</p>
            <p className="font-semibold text-white">React + Enterprise UI</p>
          </div>
        </motion.div>
      </div>
      <Link to="about" smooth offset={-84} duration={600} aria-label="Scroll to about" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 cursor-pointer rounded-full border border-line p-3 text-zinc-400 transition hover:text-white md:block">
        <ArrowDown size={18} />
      </Link>
    </section>
  );
};
