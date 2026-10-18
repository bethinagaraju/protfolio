import * as Icons from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealList, RevealItem } from '@/components/ui/Reveal';
import { skillGroups } from '@/data/skills';

export function TechStack() {
  return (
    <section id="stack" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I Use To Build & Ship"
          description="A focused, modern toolkit across the full stack — from interface to infrastructure."
        />

        <RevealList className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.08}>
          {skillGroups.map((group) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[group.icon] ?? Icons.Code2;
            return (
              <RevealItem key={group.id}>
                <div className="group h-full rounded-2xl border border-white/8 bg-white/[0.02] p-6 hover:border-blue-400/25 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/15 border border-white/10 text-blue-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-base font-semibold text-white">{group.title}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-white/8 bg-white/[0.03] px-2.5 py-1.5 text-xs font-medium text-slate-300 group-hover:border-white/15 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealList>
      </div>
    </section>
  );
}
