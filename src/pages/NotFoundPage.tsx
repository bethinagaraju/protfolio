import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import { PageShell } from '@/components/ui/PageShell';

export function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-24 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-blue-300">
          <Compass className="h-6 w-6" />
        </span>
        <p className="mt-6 text-sm uppercase tracking-wider text-blue-300/80">404</p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-semibold text-white">
          This page drifted off the map
        </h1>
        <p className="mt-3 text-slate-400">
          The page you're looking for doesn't exist. Let's get you back on course.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-2.5 text-sm font-semibold hover:bg-blue-50 transition-colors"
          >
            Back Home
          </Link>
          <button
            onClick={() => navigate('/work')}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> View Work
          </button>
        </div>
      </div>
    </PageShell>
  );
}
