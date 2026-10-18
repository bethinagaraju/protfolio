import { Check, MapPin } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { aboutHighlights } from '@/data/skills';
import { siteConfig } from '@/data/site';

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About"
          title="A Developer Who Thinks Beyond Code."
        />

        <div className="mt-12 grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a freelance full stack developer passionate about turning business ideas into
              reliable, user-friendly digital products. I work across frontend, backend, database
              design, API development, deployment, and integrations to deliver complete solutions
              from concept to launch.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {aboutHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3 hover:border-blue-400/25 transition-colors"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/15 text-blue-300">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.12}>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500/30 to-violet-500/20 border border-white/10 flex items-center justify-center">
                  <span className="text-xl font-semibold text-white">BN</span>
                </div>
                <div>
                  <p className="text-base font-semibold text-white">{siteConfig.name}</p>
                  <p className="text-sm text-slate-400">{siteConfig.role}</p>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="h-3 w-3" /> {siteConfig.location}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Stat label="Years Writing Code" value="4+" />
                <Stat label="Projects Built" value="10+" />
                <Stat label="Tech Stack" value="15+" />
                <Stat label="Availability" value="Open" highlight />
              </div>

              <p className="mt-6 text-xs text-slate-500 leading-relaxed">
                Stats are general experience indicators, not client results. Update them anytime in
                the project data files.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        highlight
          ? 'border-emerald-400/25 bg-emerald-500/5'
          : 'border-white/8 bg-white/[0.02]'
      }`}
    >
      <p
        className={`text-2xl font-semibold ${
          highlight ? 'text-emerald-300' : 'text-white'
        }`}
      >
        {value}
      </p>
      <p className="mt-1 text-xs text-slate-500">{label}</p>
    </div>
  );
}
