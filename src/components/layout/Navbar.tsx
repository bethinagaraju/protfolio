import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { siteConfig } from '@/data/site';

const links = [
  { label: 'About', to: '/about' },
  { label: 'Work', to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'Process', to: '/process' },
  { label: 'Stack', to: '/stack' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#070710]/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10">
              <Code2 className="h-4 w-4 text-blue-300" />
              <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5 group-hover:ring-blue-400/30 transition" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-white tracking-tight">
                {siteConfig.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                Full Stack Developer
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 text-sm transition-colors group ${
                    isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                {l.label}
                <span className="absolute inset-x-3.5 -bottom-px h-px bg-gradient-to-r from-blue-400/0 via-blue-400/60 to-blue-400/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-medium hover:bg-blue-50 transition-colors"
            >
              Let's Talk
            </button>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 text-white"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#070710]/95 backdrop-blur-xl border-b border-white/5"
          >
            <nav className="flex flex-col px-5 py-4">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `py-3 text-base border-b border-white/5 last:border-0 ${
                      isActive ? 'text-white' : 'text-slate-200'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <button
                onClick={() => {
                  setOpen(false);
                  navigate('/contact');
                }}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-4 py-3 text-sm font-medium"
              >
                Let's Talk
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
