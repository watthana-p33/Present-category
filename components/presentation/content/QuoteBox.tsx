import React from 'react';

interface QuoteBoxProps {
  quote: string;
  author?: string;
  role?: string;
  company?: string;
  variant?: 'blue' | 'purple' | 'amber' | 'slate';
  compact?: boolean;
}

const variantStyles = {
  blue: 'bg-blue-50/90 dark:bg-blue-950/40 border-l-4 border-cyan-500 text-slate-800 dark:text-cyan-50 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-sm dark:shadow-[0_4px_24px_rgba(6,182,212,0.15)]',
  purple: 'bg-fuchsia-50/90 dark:bg-purple-950/40 border-l-4 border-fuchsia-500 text-slate-800 dark:text-fuchsia-50 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-sm dark:shadow-[0_4px_24px_rgba(217,70,239,0.15)]',
  amber: 'bg-amber-50/90 dark:bg-amber-950/40 border-l-4 border-amber-500 text-slate-800 dark:text-amber-50 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-sm dark:shadow-[0_4px_24px_rgba(245,158,11,0.15)]',
  slate: 'bg-slate-100/90 dark:bg-slate-900/50 border-l-4 border-slate-500 text-slate-800 dark:text-slate-100 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.25)]',
};

export function QuoteBox({ quote, author, role, company, variant = 'blue', compact = false }: QuoteBoxProps) {
  return (
    <div className={`${compact ? 'p-3 sm:p-3.5 rounded-r-xl' : 'p-5 md:p-6 rounded-r-2xl'} ${variantStyles[variant]}`}>
      <p className={`italic leading-relaxed font-medium ${compact ? 'text-xs sm:text-sm' : 'text-base md:text-sm'}`}>
        &ldquo;{quote}&rdquo;
      </p>
      {(author || role || company) && (
        <div className={`${compact ? 'mt-1.5 text-xs' : 'mt-3 text-xs'} font-semibold flex flex-wrap items-center gap-1.5`}>
          {author && <span className="text-slate-900 dark:text-white font-bold">{author}</span>}
          {role && <span className="text-slate-500 dark:text-slate-400 font-normal">({role}{company ? `, ${company}` : ''})</span>}
          {!role && company && <span className="text-slate-500 dark:text-slate-400 font-normal">({company})</span>}
        </div>
      )}
    </div>
  );
}
