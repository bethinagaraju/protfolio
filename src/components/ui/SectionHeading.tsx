export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-blue-300/90 ${
            align === 'center' ? 'justify-center' : ''
          }`}
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400/70" />
          {eyebrow}
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-blue-400/70" />
        </div>
      )}
      <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed">{description}</p>
      )}
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-blue-300/90">
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400/70" />
      {children}
    </span>
  );
}
