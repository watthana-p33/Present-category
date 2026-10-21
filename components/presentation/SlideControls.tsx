'use client';

import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  LayoutGrid,
} from 'lucide-react';

interface SlideControlsProps {
  currentIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  isOverviewOpen?: boolean;
  onToggleOverview?: () => void;
}

export function SlideControls({
  currentIndex,
  totalSlides,
  onPrev,
  onNext,
  isFullscreen,
  onToggleFullscreen,
  isOverviewOpen,
  onToggleOverview,
}: SlideControlsProps) {
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalSlides - 1;

  const iconActionStyle =
    'p-1.5 rounded-lg text-slate-500 hover:text-cyan-600 active:scale-95 transition-all disabled:opacity-20 disabled:hover:text-slate-500 disabled:cursor-not-allowed focus:outline-none dark:text-slate-400/80 dark:hover:text-cyan-300 dark:disabled:hover:text-slate-400/80';

  return (
    <div className="flex items-center gap-1 select-none opacity-70 hover:opacity-100 transition-opacity backdrop-blur-xs">
      {/* Overview Icon */}
      {onToggleOverview && (
        <button
          onClick={onToggleOverview}
          className={`${iconActionStyle} ${
            isOverviewOpen ? '!text-fuchsia-600 dark:!text-fuchsia-400 opacity-100' : ''
          }`}
          title="สลับมุมมองสไลด์ทั้งหมด (O)"
          aria-label="Toggle slide overview"
        >
          <LayoutGrid className="w-4 h-4" strokeWidth={1.75} />
        </button>
      )}

      {/* Prev Icon */}
      <button
        onClick={onPrev}
        disabled={isFirst}
        className={iconActionStyle}
        title="สไลด์ก่อนหน้า (← หรือ Backspace)"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" strokeWidth={1.75} />
      </button>

      {/* Slide Counter as Minimal Floating Liquid Text */}
      <div className="text-xs font-medium text-slate-600 dark:text-slate-400 px-1 select-none tabular-nums flex items-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-fuchsia-600 dark:from-cyan-400 dark:to-fuchsia-400 font-bold">
          {currentIndex + 1}
        </span>
        <span className="text-slate-300 dark:text-white/20 mx-1">/</span>
        <span>{totalSlides}</span>
      </div>

      {/* Next Icon */}
      <button
        onClick={onNext}
        disabled={isLast}
        className={iconActionStyle}
        title="สไลด์ถัดไป (→ หรือ Space)"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" strokeWidth={1.75} />
      </button>

      {/* Fullscreen Icon */}
      <button
        onClick={onToggleFullscreen}
        className={iconActionStyle}
        title={isFullscreen ? 'ออกจากโหมดเต็มหน้าจอ (Esc)' : 'โหมดเต็มหน้าจอ (F)'}
        aria-label="Toggle Fullscreen"
      >
        {isFullscreen ? (
          <Minimize2 className="w-4 h-4" strokeWidth={1.75} />
        ) : (
          <Maximize2 className="w-4 h-4" strokeWidth={1.75} />
        )}
      </button>
    </div>
  );
}
