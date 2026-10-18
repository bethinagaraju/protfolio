import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowDown, Sparkles } from 'lucide-react';
import { siteConfig, heroHeadline, heroSubtext } from '@/data/site';
import { heroStack } from '@/data/skills';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen overflow-hidden pt-28 sm:pt-32 pb-16">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(56,89,255,0.18),transparent_70%)]" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[480px] w-[820px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-1/3 right-0 h-[320px] w-[320px] rounded-full bg-violet-600/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 75%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-emerald-300/90 backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {siteConfig.availability}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.05]"
            >
              {heroHeadline.split(' ').map((word, i) => (
                <span key={i} className="inline-block mr-[0.25em]">
                  {word === 'Growth.' ? (
                    <span className="bg-gradient-to-r from-blue-300 via-violet-300 to-blue-200 bg-clip-text text-transparent">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-6 max-w-xl text-base sm:text-lg text-slate-400 leading-relaxed"
            >
              {heroSubtext}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <button
                onClick={() => navigate('/contact')}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 px-6 py-3.5 text-sm font-semibold hover:bg-blue-50 transition-colors"
              >
                Let's Work Together
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={() => navigate('/work')}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors backdrop-blur"
              >
                Explore My Work
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38 }}
              className="mt-10"
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                Technology Stack
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {heroStack.map((tech) => (
                  <span
                    key={tech}
                    onClick={() => navigate('/stack')}
                    className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-blue-400/30 hover:text-white transition-colors cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <HeroVisual />
          </motion.div>
        </div>

        <motion.button
          onClick={() => navigate('/work')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 mx-auto flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors"
          aria-label="View work"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">View Work</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-square w-full max-w-md mx-auto">
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-transparent blur-2xl" />
      <div className="relative h-full w-full rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden">
        <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-3 text-[11px] text-slate-500 font-mono">nagaraju.dev</span>
        </div>
        <div className="p-5 font-mono text-[12.5px] leading-relaxed">
          <CodeLine><span className="text-violet-300">const</span> <span className="text-sky-300">developer</span> <span className="text-slate-500">=</span> {'{'}</CodeLine>
          <CodeLine indent={1}>
            <span className="text-blue-300">name</span><span className="text-slate-500">:</span>{' '}
            <span className="text-emerald-300">'Bethi Nagaraju'</span>,
          </CodeLine>
          <CodeLine indent={1}>
            <span className="text-blue-300">role</span><span className="text-slate-500">:</span>{' '}
            <span className="text-emerald-300">'Full Stack Developer'</span>,
          </CodeLine>
          <CodeLine indent={1}>
            <span className="text-blue-300">stack</span><span className="text-slate-500">:</span> [
          </CodeLine>
          <CodeLine indent={2}>
            <span className="text-emerald-300">'Java'</span>,{' '}
            <span className="text-emerald-300">'Spring'</span>,{' '}
            <span className="text-emerald-300">'React'</span>,
          </CodeLine>
          <CodeLine indent={1}>{']'}</CodeLine>
          <CodeLine indent={1}>
            <span className="text-blue-300">available</span><span className="text-slate-500">:</span>{' '}
            <span className="text-amber-300">true</span>,
          </CodeLine>
          <CodeLine>{'}'}</CodeLine>
          <CodeLine className="mt-3">
            <span className="text-slate-600">// let's build something</span>
          </CodeLine>
        </div>
        <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] text-slate-300 backdrop-blur">
          <Sparkles className="h-3 w-3 text-blue-300" />
          AI-Ready
        </div>
      </div>
    </div>
  );
}

function CodeLine({
  children,
  indent = 0,
  className = '',
}: {
  children: React.ReactNode;
  indent?: number;
  className?: string;
}) {
  return (
    <div className={className} style={{ paddingLeft: `${indent * 16}px` }}>
      {children}
    </div>
  );
}

