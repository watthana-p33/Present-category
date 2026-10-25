'use client';

import React from 'react';
import { useNarration } from './NarrationContext';

export function SubtitleOverlay() {
  const {
    isNarrating,
    subtitleLanguage,
    currentSubtitle,
  } = useNarration();

  // Only render when auto narration is active, subtitles are enabled, and there is active text
  if (!isNarrating || subtitleLanguage === 'off' || !currentSubtitle) {
    return null;
  }

  return (
    <div className="fixed bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-40 max-w-3xl w-[92%] sm:w-auto px-2 pointer-events-auto transition-all duration-300 animate-in fade-in slide-in-from-bottom-2">
      <div className="bg-slate-950/85 dark:bg-black/90 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.65)] px-1 text-white transition-all">
        {/* Subtitle Text */}
        <div className="text-center font-medium text-sm sm:text-base md:text-lg leading-relaxed text-slate-100 dark:text-white tracking-wide drop-shadow-sm select-text">
          {currentSubtitle}
        </div>
      </div>
    </div>
  );
}
