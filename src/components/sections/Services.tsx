import { ArrowUpRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealList, RevealItem } from '@/components/ui/Reveal';
import { services } from '@/data/services';

export function Services() {
  const navigate = useNavigate();

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Services"
          title="What I Can Build For You"
          description="From a single landing page to a full-stack platform, I deliver complete, production-ready solutions tailored to your business."
        />

        <RevealList className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.08}>
          {services.map((service) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] ?? Icons.Sparkles;
            return (
              <RevealItem key={service.id}>
                <article className="group relative h-full rounded-2xl border border-white/8 bg-white/[0.02] p-6 hover:border-blue-400/25 hover:bg-white/[0.04] transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/15 border border-white/10 text-blue-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-slate-600 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {service.highlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-md border border-white/8 bg-white/[0.03] px-2 py-1 text-[11px] text-slate-400"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate('/contact')}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue-300 hover:text-blue-200 transition-colors"
                  >
                    Discuss Your Project
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </article>
              </RevealItem>
            );
          })}
        </RevealList>
      </div>
    </section>
  );
}
