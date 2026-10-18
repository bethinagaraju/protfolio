import { Link } from 'react-router-dom';
import { Code2, Mail, Linkedin, Github, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/site';

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Work', to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'Process', to: '/process' },
  { label: 'Stack', to: '/stack' },
  { label: 'Contact', to: '/contact' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-[#06060d]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10">
                <Code2 className="h-4 w-4 text-blue-300" />
              </span>
              <span className="text-base font-semibold text-white">{siteConfig.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-slate-400 leading-relaxed">
              {siteConfig.role} based in {siteConfig.location}. {siteConfig.tagline}
            </p>
            <p className="mt-4 text-sm text-slate-500">{siteConfig.footerTagline}</p>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-wider text-slate-500">Navigation</p>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-wider text-slate-500">Connect</p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-6">
          <p className="text-xs text-slate-500">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">{siteConfig.footerTagline}</p>
        </div>
      </div>
    </footer>
  );
}
