import { useState, type FormEvent } from 'react';
import {
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/data/site';
import { projectTypes, budgetRanges } from '@/data/skills';

interface FormState {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  description: string;
}

interface Errors {
  name?: string;
  email?: string;
  projectType?: string;
  budget?: string;
  description?: string;
}

const initialState: FormState = {
  name: '',
  email: '',
  projectType: '',
  budget: '',
  description: '',
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = (data: FormState): Errors => {
    const e: Errors = {};
    if (!data.name.trim()) e.name = 'Please enter your name.';
    if (!data.email.trim()) e.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      e.email = 'Please enter a valid email address.';
    if (!data.projectType) e.projectType = 'Select a project type.';
    if (!data.budget) e.budget = 'Select a budget range.';
    if (!data.description.trim() || data.description.trim().length < 20)
      e.description = 'Tell me a bit more about your project (at least 20 characters).';
    return e;
  };

  const handleChange = (
    field: keyof FormState,
    value: string
  ) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) {
      setStatus('error');
      return;
    }

    // No backend form service is wired up. Open the visitor's email client
    // with a prefilled message so the inquiry still reaches the inbox.
    const subject = `Project Inquiry — ${form.projectType} (${form.name})`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Project type: ${form.projectType}`,
      `Budget: ${form.budget}`,
      '',
      'Project description:',
      form.description,
    ].join('\n');

    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStatus('success');
  };

  const whatsappHref = `https://wa.me/${siteConfig.whatsapp}`;

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[360px] w-[760px] rounded-full bg-blue-700/10 blur-[140px]" />
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Have an Idea? Let's Build It."
          description="Tell me what you're planning. I'll help you turn your idea into a practical digital solution."
        />

        <div className="mt-12 grid lg:grid-cols-12 gap-8">
          <Reveal className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 h-full">
              <h3 className="text-lg font-semibold text-white">Get in touch directly</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Prefer a direct conversation? Reach me on any of these channels.
              </p>

              <div className="mt-6 space-y-3">
                <ContactRow
                  icon={<Mail className="h-4 w-4" />}
                  label="Email"
                  value={siteConfig.email}
                  href={`mailto:${siteConfig.email}`}
                />
                <ContactRow
                  icon={<MessageCircle className="h-4 w-4" />}
                  label="WhatsApp"
                  value={`+${siteConfig.whatsapp}`}
                  href={whatsappHref}
                  external
                />
                <ContactRow
                  icon={<Linkedin className="h-4 w-4" />}
                  label="LinkedIn"
                  value="Connect on LinkedIn"
                  href={siteConfig.linkedin}
                  external
                />
                <ContactRow
                  icon={<Github className="h-4 w-4" />}
                  label="GitHub"
                  value="View my code"
                  href={siteConfig.github}
                  external
                />
                <ContactRow
                  icon={<MapPin className="h-4 w-4" />}
                  label="Location"
                  value={siteConfig.location}
                />
                <ContactRow
                  icon={<Clock className="h-4 w-4" />}
                  label="Availability"
                  value={siteConfig.availability}
                  highlight
                />
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500/90 text-white px-5 py-3 text-sm font-semibold hover:bg-emerald-500 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Your Name" error={errors.name} htmlFor="name">
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={inputClass(!!errors.name)}
                    placeholder="Jane Doe"
                    autoComplete="name"
                  />
                </Field>
                <Field label="Email" error={errors.email} htmlFor="email">
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={inputClass(!!errors.email)}
                    placeholder="you@company.com"
                    autoComplete="email"
                  />
                </Field>
                <Field label="Project Type" error={errors.projectType} htmlFor="projectType">
                  <select
                    id="projectType"
                    value={form.projectType}
                    onChange={(e) => handleChange('projectType', e.target.value)}
                    className={inputClass(!!errors.projectType)}
                  >
                    <option value="">Select a type…</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t} className="bg-[#0b0b16]">
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Budget Range" error={errors.budget} htmlFor="budget">
                  <select
                    id="budget"
                    value={form.budget}
                    onChange={(e) => handleChange('budget', e.target.value)}
                    className={inputClass(!!errors.budget)}
                  >
                    <option value="">Select a range…</option>
                    {budgetRanges.map((b) => (
                      <option key={b} value={b} className="bg-[#0b0b16]">
                        {b}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-4">
                <Field
                  label="Project Description"
                  error={errors.description}
                  htmlFor="description"
                >
                  <textarea
                    id="description"
                    rows={5}
                    value={form.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                    className={`${inputClass(!!errors.description)} resize-y min-h-[120px]`}
                    placeholder="Tell me about your idea, goals, and any details that would help me understand the scope."
                  />
                </Field>
              </div>

              {status === 'error' && (
                <div className="mt-5 flex items-start gap-2 rounded-xl border border-rose-400/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  Please fix the highlighted fields and try again.
                </div>
              )}
              {status === 'success' && (
                <div className="mt-5 flex items-start gap-2 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  Your email client should have opened with your message ready to send. If it
                  didn't, email me directly at {siteConfig.email}.
                </div>
              )}

              <button
                type="submit"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 px-6 py-3.5 text-sm font-semibold hover:bg-blue-50 transition-colors"
              >
                <Send className="h-4 w-4" />
                Send Project Inquiry
              </button>
              <p className="mt-3 text-xs text-slate-500">
                The form opens your email client with the details prefilled. Connect a form
                backend later to send directly from the site.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border ${
    hasError ? 'border-rose-400/50' : 'border-white/10'
  } bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-colors`;
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-xs font-medium uppercase tracking-wider text-slate-400 mb-2">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-rose-300">{error}</p>}
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  external,
  highlight,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  highlight?: boolean;
}) {
  const content = (
    <div className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3 hover:border-blue-400/25 transition-colors">
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-lg border ${
          highlight
            ? 'border-emerald-400/30 bg-emerald-500/10 text-emerald-300'
            : 'border-white/10 bg-white/5 text-blue-300'
        }`}
      >
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[11px] uppercase tracking-wider text-slate-500">{label}</p>
        <p className="text-sm text-slate-200 truncate">{value}</p>
      </div>
    </div>
  );
  if (!href) return content;
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="block"
    >
      {content}
    </a>
  );
}
