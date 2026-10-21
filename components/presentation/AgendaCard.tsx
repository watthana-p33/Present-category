import React from 'react';

interface AgendaCardProps {
  partNumber: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBgColor?: string;
  iconTextColor?: string;
  onClick?: () => void;
  layout?: 'row' | 'column';
}

export function AgendaCard({
  partNumber,
  title,
  description,
  icon,
  iconBgColor = 'bg-blue-500/15',
  iconTextColor = 'text-blue-600 dark:text-cyan-400',
  onClick,
  layout = 'column',
}: AgendaCardProps) {
  if (layout === 'column') {
    return (
      <div
        onClick={onClick}
        className={`group flex flex-col justify-between glass-panel p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 hover:border-cyan-400/50 hover:shadow-[0_8px_30px_-5px_rgba(6,182,212,0.25)] hover:-translate-y-1 transition-all duration-300 ${
          onClick ? 'cursor-pointer' : ''
        }`}
      >
        <div>
          <div className="flex items-center justify-between mb-3">
            <div
              className={`w-10 h-10 ${iconBgColor} ${iconTextColor} rounded-xl flex items-center justify-center border border-slate-200 dark:border-white/15 shadow-xs group-hover:scale-105 transition-all`}
            >
              {icon}
            </div>
            <span className="text-[10px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500 dark:from-cyan-400 dark:to-indigo-400 tracking-wider uppercase px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10">
              {partNumber}
            </span>
          </div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors tracking-tight">
            {title}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={`group flex items-start glass-panel p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 hover:border-cyan-400/50 hover:shadow-[0_8px_30px_-5px_rgba(6,182,212,0.2)] transition-all duration-300 ${
        onClick ? 'cursor-pointer' : ''
      }`}
    >
      <div
        className={`w-11 h-11 ${iconBgColor} ${iconTextColor} rounded-xl flex items-center justify-center mr-4 shrink-0 border border-slate-200 dark:border-white/15 shadow-xs group-hover:scale-105 transition-all`}
      >
        {icon}
      </div>
      <div>
        <span className="text-[10px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500 dark:from-cyan-400 dark:to-indigo-400 tracking-widest uppercase mb-0.5 block">
          {partNumber}
        </span>
        <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors tracking-tight">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
