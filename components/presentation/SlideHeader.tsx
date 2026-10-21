import React from 'react';

export interface SlideHeaderProps {
  section?: string;
  badge?: string;
  badgeColor?: 'blue' | 'green' | 'red' | 'purple' | 'amber';
  title: string;
  subtitle?: string;
}

const colorMap = {
  blue: 'bg-blue-50 text-blue-700 border-blue-200 shadow-sm dark:bg-blue-500/15 dark:text-blue-300 dark:border-blue-500/30 dark:shadow-[0_0_15px_rgba(59,130,246,0.15)]',
  green: 'bg-emerald-50 text-emerald-700 border-emerald-200 shadow-sm dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-500/30 dark:shadow-[0_0_15px_rgba(16,185,129,0.15)]',
  red: 'bg-rose-50 text-rose-700 border-rose-200 shadow-sm dark:bg-rose-500/15 dark:text-rose-300 dark:border-rose-500/30 dark:shadow-[0_0_15px_rgba(244,63,94,0.15)]',
  purple: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200 shadow-sm dark:bg-fuchsia-500/15 dark:text-fuchsia-300 dark:border-fuchsia-500/30 dark:shadow-[0_0_15px_rgba(217,70,239,0.15)]',
  amber: 'bg-amber-50 text-amber-700 border-amber-200 shadow-sm dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/30 dark:shadow-[0_0_15px_rgba(245,158,11,0.15)]',
};

const sectionColorDot = {
  blue: 'bg-gradient-to-r from-blue-500 to-cyan-400',
  green: 'bg-gradient-to-r from-emerald-500 to-teal-400',
  red: 'bg-gradient-to-r from-rose-500 to-pink-400',
  purple: 'bg-gradient-to-r from-purple-500 to-fuchsia-400',
  amber: 'bg-gradient-to-r from-amber-500 to-orange-400',
};

export function SlideHeader({
  section,
  badge,
  badgeColor = 'blue',
  title,
  subtitle,
}: SlideHeaderProps) {
  return (
    <div className="mb-3 sm:mb-4 md:mb-5 border-b border-slate-200/80 dark:border-white/10 pb-2 sm:pb-2.5">
      {(section || badge) && (
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
          {section && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/80 text-slate-800 border border-slate-200/80 shadow-xs backdrop-blur-md dark:bg-white/10 dark:text-white dark:border-white/15 dark:shadow-[0_0_15px_-3px_rgba(168,85,247,0.35)]">
              <span className={`w-1.5 h-1.5 rounded-full ${sectionColorDot[badgeColor] || 'bg-cyan-400'}`} />
              {section}
            </span>
          )}
          {badge && (
            <span
              className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider border backdrop-blur-sm ${colorMap[badgeColor]}`}
            >
              {badge}
            </span>
          )}
        </div>
      )}
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && <p className="text-slate-500 dark:text-slate-400 mt-1 text-xs sm:text-sm">{subtitle}</p>}
    </div>
  );
}
