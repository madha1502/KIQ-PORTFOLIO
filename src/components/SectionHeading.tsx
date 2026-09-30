import React from 'react';

interface SectionHeadingProps {
  number?: string;
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  badge,
  title,
  description,
  align = 'center',
  className = '',
}) => {
  return (
    <div
      className={`space-y-3 max-w-4xl ${
        align === 'center' ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      <div
        className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        {number && <span className="font-mono text-sky-600/80">{number}.</span>}
        <span className="px-2.5 py-0.5 rounded-full bg-sky-50 border border-sky-200/60 font-semibold shadow-xs">
          {badge || 'KIQ Techno'}
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight text-balance">
        {title}
      </h2>

      {description && (
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl text-balance font-normal">
          {description}
        </p>
      )}
    </div>
  );
};
