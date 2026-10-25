import React from 'react';

interface CardProps {
  icon?: React.ReactNode;
  iconBg?: string;
  iconColor?: string;
  title: string;
  description?: string;
  example?: string;
  tag?: string;
  className?: string;
  compact?: boolean;
  variant?: string;
  children?: React.ReactNode;
}

export function Card({
  icon,
  iconBg = 'bg-blue-500/15',
  iconColor = 'text-blue-500 dark:text-blue-400',
  title,
  description,
  example,
  tag,
  className = '',
  compact = false,
  variant,
  children,
}: CardProps) {
  return (
    <div
      className={`glass-panel rounded-2xl border border-slate-200/80 dark:border-white/10 hover:border-purple-400/50 hover:shadow-[0_12px_40px_-5px_rgba(168,85,247,0.25)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col ${
        compact ? 'p-3 sm:p-3.5' : 'p-5 sm:p-6'
      } ${className}`}
    >
      <div className={`flex items-center justify-between ${compact ? 'mb-1.5' : 'mb-3.5'}`}>
        {icon && (
          <div
            className={`${
              compact ? 'w-7 h-7 rounded-lg' : 'w-11 h-11 rounded-2xl'
            } ${iconBg} ${iconColor} flex items-center justify-center border border-slate-200/80 dark:border-white/10 shadow-xs`}
          >
            {icon}
          </div>
        )}
        {tag && (
          <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 dark:bg-white/10 dark:text-slate-300 dark:border-white/10 backdrop-blur-sm">
            {tag}
          </span>
        )}
      </div>
      <h3 className={`font-bold text-slate-900 dark:text-white tracking-tight ${compact ? 'text-xs sm:text-sm mb-1' : 'text-base sm:text-lg mb-2'}`}>
        {title}
      </h3>
      {description && (
        <p className={`text-slate-600 dark:text-slate-300 leading-relaxed flex-1 ${compact ? 'text-[11px] sm:text-xs' : 'text-xs sm:text-sm'}`}>
          {description}
        </p>
      )}
      {children}
      {example && (
        <div className={`mt-2 pt-2 border-t border-slate-200/70 dark:border-white/10 ${compact ? 'text-[10.5px]' : 'text-xs'}`}>
          <div className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200 mb-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            <span>ตัวอย่าง:</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 leading-snug">
            {example}
          </p>
        </div>
      )}
    </div>
  );
}
