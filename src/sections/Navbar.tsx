import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { portfolio } from '../data/portfolio';
import { useTheme } from '../hooks/useTheme';

const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLink = (item: string) => (
    <Link
      key={item}
      to={item.toLowerCase()}
      smooth
      spy
      offset={-84}
      duration={500}
      activeClass="text-white after:scale-x-100"
      onClick={() => setOpen(false)}
      className="relative cursor-pointer py-2 text-sm font-medium text-zinc-400 transition hover:text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand-gradient after:transition-transform"
    >
      {item}
    </Link>
  );

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 py-4">
      <nav
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border px-5 transition duration-300 ${
          scrolled ? 'border-line bg-ink/70 shadow-card backdrop-blur-2xl' : 'border-transparent bg-transparent'
        }`}
        aria-label="Primary navigation"
      >
        <Link to="home" smooth duration={500} className="cursor-pointer text-xl font-bold text-white" aria-label="Go to home">
          {portfolio.shortName}
        </Link>
        <div className="hidden items-center gap-7 lg:flex">{navItems.map(navLink)}</div>
        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-grid size-10 place-items-center rounded-full border border-line bg-white/[0.04] text-zinc-200 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a
            href={portfolio.resume}
            download
            className="inline-flex h-10 items-center gap-2 rounded-full bg-white px-4 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <Download size={16} /> Resume
          </a>
        </div>
        <button
          type="button"
          className="inline-grid size-10 place-items-center rounded-full border border-line text-white lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-3 max-w-7xl rounded-brand border border-line bg-ink/95 p-5 shadow-card backdrop-blur-2xl lg:hidden"
          >
            <div className="grid gap-2">{navItems.map(navLink)}</div>
            <button
              type="button"
              onClick={toggleTheme}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-white/[0.04] px-4 py-3 text-sm font-semibold text-zinc-200"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              {theme === 'dark' ? 'Light Theme' : 'Dark Theme'}
            </button>
            <a href={portfolio.resume} download className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-zinc-950">
              <Download size={16} /> Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
