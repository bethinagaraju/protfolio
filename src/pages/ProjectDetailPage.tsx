import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Tag } from 'lucide-react';
import { PageShell } from '@/components/ui/PageShell';
import { ProjectMockup } from '@/components/sections/Projects';
import { projects } from '@/data/projects';

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <PageShell>
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-24 text-center">
          <p className="text-sm uppercase tracking-wider text-blue-300/80">404</p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Project not found</h1>
          <p className="mt-3 text-slate-400">
            The project you're looking for doesn't exist or hasn't been published yet.
          </p>
          <button
            onClick={() => navigate('/work')}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-2.5 text-sm font-semibold hover:bg-blue-50 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Work
          </button>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> All Projects
          </Link>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-slate-400">
            <Tag className="h-3 w-3" />
            {project.category}
          </div>
          {project.status && (
            <p className="mt-3 text-xs font-medium text-amber-300/90">{project.status}</p>
          )}
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed">
            {project.longDescription}
          </p>

          <div className="mt-8 max-w-2xl">
            <ProjectMockup project={project} />
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-sm uppercase tracking-wider text-slate-500">Highlights</h2>
              <ul className="mt-4 space-y-2">
                {project.highlightedFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm uppercase tracking-wider text-slate-500">Tech Stack</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs font-medium text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
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
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Start a Similar Project
            </button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
