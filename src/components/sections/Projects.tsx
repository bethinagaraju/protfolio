import { ArrowUpRight, ExternalLink, Github, FileText, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { projects, type Project } from '@/data/projects';

interface ProjectsProps {
  limit?: number;
  showHeading?: boolean;
}

export function Projects({ limit, showHeading = true }: ProjectsProps) {
  const list = limit ? projects.slice(0, limit) : projects;
  return (
    <section className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[820px] rounded-full bg-blue-700/8 blur-[140px]" />
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {showHeading && (
          <SectionHeading
            eyebrow="Selected Work"
            title="Featured Projects"
            description="A selection of freelance projects spanning web, full-stack, healthcare, and automation."
          />
        )}

        <div className={`flex flex-col gap-16 sm:gap-24 ${showHeading ? 'mt-14' : ''}`}>
          {list.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;
  const navigate = useNavigate();
  return (
    <Reveal>
      <article className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className={`lg:col-span-7 ${reversed ? 'lg:order-2' : ''}`}>
          <ProjectMockup project={project} />
        </div>

        <div className={`lg:col-span-5 ${reversed ? 'lg:order-1' : ''}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-slate-400">
            <Tag className="h-3 w-3" />
            {project.category}
          </div>
          {project.status && (
            <p className="mt-3 text-xs font-medium text-amber-300/90">{project.status}</p>
          )}
          <h3 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            {project.title}
          </h3>
          <p className="mt-4 text-slate-400 leading-relaxed">{project.longDescription}</p>

          <ul className="mt-5 space-y-2">
            {project.highlightedFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-2.5 text-sm font-semibold hover:bg-blue-50 transition-colors"
              >
                View Live Project <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-slate-500 cursor-not-allowed">
                Live Demo Coming Soon
              </span>
            )}
            {project.caseStudyAvailable && (
              <button
                onClick={() => navigate(`/work/${project.id}`)}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                View Case Study <FileText className="h-3.5 w-3.5" />
              </button>
            )}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                GitHub <Github className="h-3.5 w-3.5" />
              </a>
            ) : null}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function ProjectMockup({ project }: { project: Project }) {
  return (
    <div className="group relative">
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-70" />
      <div
        className={`relative rounded-2xl border border-white/10 bg-gradient-to-br ${project.mockupTheme} overflow-hidden`}
      >
        <div className="absolute inset-0 bg-[#070710]/40" />
        <div className="relative flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-3 text-[11px] text-slate-400 font-mono truncate">
            {project.id}.preview
          </span>
          <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-slate-400" />
        </div>
        <div className="relative aspect-[16/11] p-6">
          <MockupContent project={project} />
        </div>
      </div>
    </div>
  );
}

function MockupContent({ project }: { project: Project }) {
  return (
    <div className="h-full w-full rounded-xl border border-white/10 bg-[#0b0b16]/80 backdrop-blur p-5 flex flex-col">
      <div className="flex items-center justify-between">
        <div className="space-y-1.5">
          <div className="h-2.5 w-32 rounded-full bg-white/15" />
          <div className="h-2 w-20 rounded-full bg-white/8" />
        </div>
        <div className="flex gap-1.5">
          <div className="h-7 w-16 rounded-md bg-white/8" />
          <div className="h-7 w-16 rounded-md bg-blue-400/20 border border-blue-400/30" />
        </div>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3 flex-1">
        <div className="rounded-lg border border-white/8 bg-white/[0.02] p-3">
          <div className="h-2 w-12 rounded-full bg-white/15" />
          <div className="mt-2 h-6 w-16 rounded-md bg-white/8" />
        </div>
        <div className="rounded-lg border border-white/8 bg-white/[0.02] p-3">
          <div className="h-2 w-12 rounded-full bg-white/15" />
          <div className="mt-2 h-6 w-16 rounded-md bg-white/8" />
        </div>
        <div className="rounded-lg border border-white/8 bg-white/[0.02] p-3">
          <div className="h-2 w-12 rounded-full bg-white/15" />
          <div className="mt-2 h-6 w-16 rounded-md bg-white/8" />
        </div>
        <div className="col-span-3 rounded-lg border border-white/8 bg-white/[0.02] p-4 flex-1">
          <div className="flex items-center justify-between">
            <div className="h-2.5 w-24 rounded-full bg-white/15" />
            <div className="h-5 w-12 rounded-full bg-blue-400/20" />
          </div>
          <div className="mt-3 space-y-2">
            <div className="h-2 w-full rounded-full bg-white/8" />
            <div className="h-2 w-5/6 rounded-full bg-white/8" />
            <div className="h-2 w-2/3 rounded-full bg-white/8" />
          </div>
          <div className="mt-4 flex gap-2">
            {project.technologies.slice(0, 4).map((t) => (
              <div key={t} className="h-5 w-16 rounded-md bg-white/8" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
