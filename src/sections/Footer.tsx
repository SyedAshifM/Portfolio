import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export const Footer = () => (
  <footer className="border-t border-line px-5 py-8 sm:px-8 lg:px-10">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-sm text-zinc-400 sm:flex-row">
      <p>Made with React & Tailwind. © {new Date().getFullYear()} Syed Ashif.</p>
      <div className="flex gap-3">
        <a href={`mailto:${portfolio.email}`} aria-label="Email Syed Ashif" className="social-link"><Mail size={17} /></a>
        <a href={portfolio.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-link"><Linkedin size={17} /></a>
        <a href={portfolio.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="social-link"><Github size={17} /></a>
      </div>
    </div>
  </footer>
);
