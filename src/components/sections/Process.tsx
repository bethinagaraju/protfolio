import * as Icons from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealList, RevealItem } from '@/components/ui/Reveal';
import { processSteps } from '@/data/skills';

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Process"
          title="A Clear Path From Idea To Launch"
          description="A proven four-step process that keeps projects transparent, predictable, and focused on outcomes."
        />

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-[44px] hidden lg:block h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <RevealList className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.12}>
            {processSteps.map((step) => {
              const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[step.icon] ?? Icons.Circle;
              return (
                <RevealItem key={step.id}>
                  <div className="relative">
                    <div className="relative z-10 flex h-[88px] w-[88px] items-center justify-center rounded-2xl border border-white/10 bg-[#0b0b16]">
                      <span className="absolute -top-2 -right-2 text-[10px] font-semibold tracking-widest text-blue-300/70">
                        {step.number}
                      </span>
                      <Icon className="h-8 w-8 text-blue-300" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealList>
        </div>
      </div>
    </section>
  );
}
