'use client';

import React from 'react';
import { Slide } from '../deck/Slide';
import { ChevronRight, Sparkles } from 'lucide-react';
import { SpotlightSection } from '../narration/SpotlightSection';

export interface SectionTopic {
  number: string;
  title: string;
  description?: string;
}

interface SectionDividerSlideProps {
  partNumber: string;
  title: string;
  subtitle: string;
  description?: string;
  icon?: React.ReactNode;
  topics: SectionTopic[];
  theme?: 'blue' | 'emerald' | 'purple' | 'rose' | 'amber';
  leftTiming?: { startTime: number; endTime: number };
  topicTimings?: { startTime: number; endTime: number }[];
}

const themeStyles = {
  blue: {
    badge: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-cyan-300 dark:border-cyan-400/30',
    accentText: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400',
    gradientBg: 'from-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-500',
    glow: 'bg-blue-500/10 dark:bg-cyan-500/15',
    cardBorder: 'border-slate-200/80 dark:border-white/10',
    cardHover: 'hover:border-blue-400/50 dark:hover:border-cyan-400/50 hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)] dark:hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)]',
    numBg: 'bg-blue-50 text-blue-700 border border-blue-200 shadow-sm dark:bg-cyan-500/15 dark:text-cyan-300 dark:border-cyan-400/30 dark:shadow-[0_0_15px_rgba(6,182,212,0.2)]',
    highlightBorder: 'border-l-blue-600 dark:border-l-cyan-400',
  },
  emerald: {
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-400/30',
    accentText: 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400',
    gradientBg: 'from-emerald-600 to-teal-600 dark:from-emerald-400 dark:via-teal-500 dark:to-cyan-500',
    glow: 'bg-emerald-500/10 dark:bg-emerald-500/15',
    cardBorder: 'border-slate-200/80 dark:border-white/10',
    cardHover: 'hover:border-emerald-400/50 hover:shadow-[0_8px_30px_rgba(16,185,129,0.12)] dark:hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)]',
    numBg: 'bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-400/30 dark:shadow-[0_0_15px_rgba(16,185,129,0.2)]',
    highlightBorder: 'border-l-emerald-600 dark:border-l-emerald-400',
  },
  purple: {
    badge: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200 dark:bg-fuchsia-500/10 dark:text-fuchsia-300 dark:border-fuchsia-400/30',
    accentText: 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-fuchsia-400 dark:via-purple-400 dark:to-indigo-400',
    gradientBg: 'from-purple-600 to-pink-600 dark:from-fuchsia-400 dark:via-purple-500 dark:to-indigo-500',
    glow: 'bg-purple-500/10 dark:bg-fuchsia-500/15',
    cardBorder: 'border-slate-200/80 dark:border-white/10',
    cardHover: 'hover:border-fuchsia-400/50 hover:shadow-[0_8px_30px_rgba(217,70,239,0.12)] dark:hover:shadow-[0_8px_30px_rgba(217,70,239,0.15)]',
    numBg: 'bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-200 shadow-sm dark:bg-fuchsia-500/15 dark:text-fuchsia-300 dark:border-fuchsia-400/30 dark:shadow-[0_0_15px_rgba(217,70,239,0.2)]',
    highlightBorder: 'border-l-purple-600 dark:border-l-fuchsia-400',
  },
  rose: {
    badge: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-500/10 dark:text-rose-300 dark:border-rose-400/30',
    accentText: 'text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-600 dark:from-rose-400 dark:via-pink-400 dark:to-amber-400',
    gradientBg: 'from-rose-600 to-amber-600 dark:from-rose-400 dark:via-pink-500 dark:to-amber-500',
    glow: 'bg-rose-500/10 dark:bg-rose-500/15',
    cardBorder: 'border-slate-200/80 dark:border-white/10',
    cardHover: 'hover:border-rose-400/50 hover:shadow-[0_8px_30px_rgba(244,63,94,0.12)] dark:hover:shadow-[0_8px_30px_rgba(244,63,94,0.15)]',
    numBg: 'bg-rose-50 text-rose-700 border border-rose-200 shadow-sm dark:bg-rose-500/15 dark:text-rose-300 dark:border-rose-400/30 dark:shadow-[0_0_15px_rgba(244,63,94,0.2)]',
    highlightBorder: 'border-l-rose-600 dark:border-l-rose-400',
  },
  amber: {
    badge: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-400/30',
    accentText: 'text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:via-orange-400 dark:to-yellow-400',
    gradientBg: 'from-amber-600 to-orange-600 dark:from-amber-400 dark:via-orange-500 dark:to-yellow-500',
    glow: 'bg-amber-500/10 dark:bg-amber-500/15',
    cardBorder: 'border-slate-200/80 dark:border-white/10',
    cardHover: 'hover:border-amber-400/50 dark:hover:border-amber-400/50 hover:shadow-[0_8px_30px_rgba(245,158,11,0.12)] dark:hover:shadow-[0_8px_30px_rgba(245,158,11,0.15)]',
    numBg: 'bg-amber-50 text-amber-700 border border-amber-200 shadow-sm dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-400/30 dark:shadow-[0_0_15px_rgba(245,158,11,0.2)]',
    highlightBorder: 'border-l-amber-600 dark:border-l-amber-400',
  },
};

export function SectionDividerSlide({
  partNumber,
  title,
  subtitle,
  description,
  icon,
  topics,
  theme = 'blue',
  leftTiming,
  topicTimings,
}: SectionDividerSlideProps) {
  const styles = themeStyles[theme];

  return (
    <Slide isActive={true} center={false}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center max-w-6xl mx-auto">
        {/* Left Column: Big Section Badge & Title with Generous Padding */}
        <SpotlightSection
          startTime={leftTiming?.startTime}
          endTime={leftTiming?.endTime}
          className={`lg:col-span-5 flex flex-col justify-center p-6 sm:p-8 rounded-3xl border ${styles.cardBorder} shadow-sm`}
        >
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase mb-2.5 sm:mb-3 border w-fit shadow-xs backdrop-blur-md bg-white/80 dark:bg-slate-900/60 ${styles.badge}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${styles.gradientBg} bg-gradient-to-r animate-pulse`} />
            <span className={styles.accentText}>{partNumber}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-2 sm:mb-3">
            {title}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-3">
            {subtitle}
          </p>

          {description && (
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 hidden sm:block">
              {description}
            </p>
          )}

          <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-500 dark:text-cyan-400 animate-pulse" />
            <span>หัวข้อที่จะนำเสนอในส่วนนี้ ({topics.length} หัวข้อ)</span>
          </div>
        </SpotlightSection>

        {/* Right Column: Topics List */}
        <div className="lg:col-span-7 space-y-3 sm:space-y-3.5">
          {topics.map((t, idx) => {
            const timing = topicTimings?.[idx];
            return (
              <SpotlightSection
                key={idx}
                startTime={timing?.startTime}
                endTime={timing?.endTime}
              >
                <div
                  className={`glass-panel p-4 sm:p-5 rounded-2xl border ${styles.cardBorder} ${styles.cardHover} border-l-4 ${styles.highlightBorder} transition-all duration-300 flex items-start gap-3.5 group`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl ${styles.numBg} font-black text-xs flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform`}
                  >
                    {t.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1 leading-snug group-hover:text-blue-600 dark:group-hover:text-cyan-200 transition-colors">
                      {t.title}
                    </h4>
                    {t.description && (
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {t.description}
                      </p>
                    )}
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-cyan-300 group-hover:translate-x-1 transition-all self-center shrink-0 hidden sm:block" />
                </div>
              </SpotlightSection>
            );
          })}
        </div>
      </div>
    </Slide>
  );
}
