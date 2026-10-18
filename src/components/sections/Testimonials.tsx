import { Quote, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealList, RevealItem } from '@/components/ui/Reveal';

export function Testimonials() {
  const navigate = useNavigate();

  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Trust & Testimonials"
          title="Client Feedback"
          description="Genuine testimonials will appear here as projects are completed. The placeholders below show the format your reviews will take."
        />

        <RevealList className="mt-12 grid md:grid-cols-3 gap-4" stagger={0.1}>
          {[0, 1, 2].map((i) => (
            <RevealItem key={i}>
              <div className="relative h-full rounded-2xl border border-dashed border-white/12 bg-white/[0.02] p-6">
                <Quote className="h-7 w-7 text-blue-300/40" />
                <p className="mt-4 text-sm text-slate-500 italic leading-relaxed">
                  [ Client testimonial placeholder — a genuine recommendation from a real client
                  will replace this once a project is completed. ]
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs text-slate-500">
                    ?
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Client Name</p>
                    <p className="text-xs text-slate-600">Project type</p>
                  </div>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealList>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <p className="text-sm text-slate-500">
            Worked with me on a project? I'd value your feedback.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            <MessageSquare className="h-4 w-4" />
            Share Your Experience
          </button>
        </div>
      </div>
    </section>
  );
}
