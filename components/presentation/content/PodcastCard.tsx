import React from 'react';
import { Headphones, Radio, ExternalLink } from 'lucide-react';

export type PodcastTheme = 'blue' | 'emerald' | 'purple' | 'amber';

export interface PodcastCardProps {
  episode: string;
  part: string;
  title: string;
  subtitle: string;
  highlights: string[];
  duration?: string;
  url?: string;
  speaker?: string;
  theme?: PodcastTheme;
  actionLabel?: string;
  className?: string;
}

const themeStyles: Record<
  PodcastTheme,
  {
    border: string;
    hoverBorder: string;
    badge: string;
    icon: string;
    titleHover: string;
    subtitle: string;
    bullet: string;
    button: string;
  }
> = {
  blue: {
    border: 'border-blue-200/80 dark:border-blue-500/30',
    hoverBorder: 'hover:border-blue-400/50 dark:hover:border-cyan-400/50',
    badge: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-cyan-500/15 dark:text-cyan-300 dark:border-cyan-400/30',
    icon: 'text-blue-600 dark:text-cyan-400',
    titleHover: 'group-hover:text-blue-600 dark:group-hover:text-cyan-300',
    subtitle: 'text-blue-600 dark:text-cyan-400',
    bullet: 'text-blue-500 dark:text-cyan-400',
    button: 'bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950',
  },
  emerald: {
    border: 'border-emerald-200/80 dark:border-emerald-500/30',
    hoverBorder: 'hover:border-emerald-400/50 dark:hover:border-emerald-400/50',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-400/30',
    icon: 'text-emerald-600 dark:text-emerald-400',
    titleHover: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-300',
    subtitle: 'text-emerald-600 dark:text-emerald-400',
    bullet: 'text-emerald-500 dark:text-emerald-400',
    button: 'bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-slate-950',
  },
  purple: {
    border: 'border-purple-200/80 dark:border-fuchsia-500/30',
    hoverBorder: 'hover:border-purple-400/50 dark:hover:border-fuchsia-400/50',
    badge: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-fuchsia-500/15 dark:text-fuchsia-300 dark:border-fuchsia-400/30',
    icon: 'text-purple-600 dark:text-fuchsia-400',
    titleHover: 'group-hover:text-purple-600 dark:group-hover:text-fuchsia-300',
    subtitle: 'text-purple-600 dark:text-fuchsia-400',
    bullet: 'text-purple-500 dark:text-fuchsia-400',
    button: 'bg-purple-600 hover:bg-purple-700 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-400 text-white dark:text-slate-950',
  },
  amber: {
    border: 'border-amber-200/80 dark:border-amber-500/30',
    hoverBorder: 'hover:border-amber-400/50 dark:hover:border-amber-400/50',
    badge: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-400/30',
    icon: 'text-amber-600 dark:text-amber-400',
    titleHover: 'group-hover:text-amber-600 dark:group-hover:text-amber-300',
    subtitle: 'text-amber-600 dark:text-amber-400',
    bullet: 'text-amber-500 dark:text-amber-400',
    button: 'bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-slate-950',
  },
};

export function PodcastCard({
  episode,
  part,
  title,
  subtitle,
  highlights,
  duration,
  url,
  speaker,
  theme = 'blue',
  actionLabel,
  className = '',
}: PodcastCardProps) {
  const styles = themeStyles[theme] || themeStyles.blue;
  const buttonText = actionLabel || `ฟังพอดแคสต์ ${episode}`;

  return (
    <div
      className={`glass-panel rounded-2xl border ${styles.border} ${styles.hoverBorder} p-4 sm:p-5 flex flex-col justify-between h-full shadow-xs transition-all text-left group ${className}`}
    >
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border shadow-xs ${styles.badge}`}
          >
            <Headphones className={`w-3 h-3 ${styles.icon}`} />
            {episode} • {part}
          </span>
          {duration && (
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
              {duration}
            </span>
          )}
        </div>
        <h3
          className={`text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1 transition-colors ${styles.titleHover}`}
        >
          {title}
        </h3>
        <p className={`text-[11px] font-medium mb-2.5 min-h-[32px] line-clamp-2 ${styles.subtitle}`}>
          {subtitle}
        </p>
        {speaker && (
          <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-2">
            บรรยายโดย: <span className="text-slate-800 dark:text-slate-200">{speaker}</span>
          </div>
        )}
        <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 mb-4 flex-1 text-start">
          {highlights.map((item, idx) => (
            <li key={idx} className="flex items-start gap-1.5">
              <span className={`font-bold ${styles.bullet}`}>•</span>
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action / Mock Link Container */}
      <div className="pt-3 border-t border-slate-200/60 dark:border-white/10 space-y-2 mt-auto">
        {url && (
          <div
            className="p-2 rounded-xl bg-slate-100/70 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 text-[10px] font-mono text-slate-600 dark:text-slate-400 truncate"
            title={url}
          >
            <span className="text-slate-400 dark:text-slate-500 select-none mr-1">
              URL:
            </span>
            {url}
          </div>
        )}
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl font-bold text-xs transition-all shadow-xs group-hover:shadow-md ${styles.button}`}
          >
            <Radio className="w-3.5 h-3.5" />
            <span>{buttonText}</span>
            <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
          </a>
        ) : (
          <div
            className={`w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl font-bold text-xs shadow-xs ${styles.button} opacity-90`}
          >
            <Radio className="w-3.5 h-3.5" />
            <span>{buttonText}</span>
          </div>
        )}
      </div>
    </div>
  );
}
