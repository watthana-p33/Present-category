'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { SlideControls } from './SlideControls';
import { ThemeToggle } from './ThemeToggle';
import { Home, X, HelpCircle, Layers, Sparkles } from 'lucide-react';

export interface SlideMetadata {
  section?: string;
  partNumber?: string;
  title: string;
  badge?: string;
  isSectionCover?: boolean;
}

interface SlideDeckProps {
  title: string;
  slides: React.ReactNode[];
  slidesMeta?: SlideMetadata[];
  initialSlide?: number;
  slug?: string;
}

export function SlideDeck({ title, slides, slidesMeta, initialSlide = 0 }: SlideDeckProps) {
  const [currentIndex, setCurrentIndex] = useState(initialSlide);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = slides.length;
  const currentMeta = slidesMeta?.[currentIndex];

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, totalSlides - 1)));
    setIsOverviewOpen(false);
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch((err) => {
        console.error('Fullscreen request error:', err);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch((err) => {
        console.error('Exit fullscreen error:', err);
      });
      setIsFullscreen(false);
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
        case 'Backspace':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(totalSlides - 1);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'o':
        case 'O':
          e.preventDefault();
          setIsOverviewOpen((prev) => !prev);
          break;
        case '?':
          e.preventDefault();
          setShowHelp((prev) => !prev);
          break;
        case 'Escape':
          if (isOverviewOpen) setIsOverviewOpen(false);
          if (showHelp) setShowHelp(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, totalSlides, toggleFullscreen, isOverviewOpen, showHelp]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Sync hash
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      const match = hash.match(/slide=(\d+)/);
      if (match) {
        const slideNum = parseInt(match[1], 10) - 1;
        if (!isNaN(slideNum) && slideNum >= 0 && slideNum < totalSlides) {
          setCurrentIndex(slideNum);
        }
      }
    }
  }, [totalSlides]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#slide=${currentIndex + 1}`);
    }
  }, [currentIndex]);

  const progress = ((currentIndex + 1) / totalSlides) * 100;

  // Extract unique sections for organized Overview
  const uniqueSections = slidesMeta
    ? Array.from(new Set(slidesMeta.map((s) => s.section || 'ทั่วไป')))
    : [];

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen bg-slate-50 dark:bg-[#070b14] bg-liquid-canvas text-slate-800 dark:text-slate-100 flex flex-col overflow-hidden select-none transition-colors duration-300"
    >
      {/* Ambient Liquid Color Orbs (Stationary, Calm Glow) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-br from-indigo-400/20 via-purple-300/15 to-transparent dark:from-indigo-600/20 dark:via-purple-600/15 blur-3xl opacity-80" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-fuchsia-400/15 via-cyan-400/15 to-transparent dark:from-fuchsia-600/15 dark:via-cyan-500/15 blur-3xl opacity-80" />
        <div className="absolute top-[35%] left-[40%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-r from-blue-400/15 via-pink-400/10 to-teal-300/10 dark:from-blue-500/10 dark:via-pink-500/10 dark:to-teal-400/10 blur-3xl opacity-70" />
      </div>

      {/* Top Navbar */}
      <header className="relative z-30 h-14 bg-white/75 dark:bg-slate-950/65 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 px-4 md:px-8 flex items-center justify-between transition-colors">
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs md:text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-cyan-300 dark:hover:bg-white/5 px-2.5 py-1.5 rounded-lg transition-colors shrink-0"
          >
            <Home className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
            <span className="hidden sm:inline">หน้าหลัก</span>
          </Link>
          <span className="text-slate-300 dark:text-white/20 shrink-0">/</span>
          <h1 className="text-xs md:text-sm font-bold text-slate-900 dark:text-white truncate max-w-[120px] sm:max-w-xs shrink-0 tracking-tight">
            {title}
          </h1>

          {/* Current Section & Topic Badge Indicator in Top Bar */}
          {currentMeta?.section && (
            <div className="hidden md:flex items-center gap-2 pl-3 border-l border-slate-200/80 dark:border-white/10 min-w-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/80 text-slate-800 border border-slate-200/80 shadow-xs dark:bg-white/10 dark:text-white dark:border-white/15 backdrop-blur-md dark:shadow-[0_0_15px_-3px_rgba(168,85,247,0.35)] shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 animate-pulse" />
                {currentMeta.section}
              </span>
              {currentMeta.title && !currentMeta.isSectionCover && (
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300 truncate max-w-[200px] lg:max-w-[320px]">
                  › {currentMeta.title}
                </span>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {/* Theme Toggle Button */}
          <ThemeToggle variant="minimal" />

          <button
            onClick={() => setShowHelp(true)}
            className="text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white p-1.5 rounded-lg dark:hover:bg-white/5 transition-colors"
            title="ปุ่มลัดคีย์บอร์ด (?)"
            aria-label="Keyboard Shortcuts"
          >
            <HelpCircle className="w-4 h-4" />
          </button>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 dark:bg-white/5 dark:text-slate-300 dark:border-white/10 backdrop-blur-sm">
            {currentIndex + 1} / {totalSlides}
          </span>
        </div>

        {/* Top Progress bar with Chromatic Liquid Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-slate-200/50 dark:bg-white/5">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 via-fuchsia-500 to-rose-400 transition-all duration-300 ease-out shadow-[0_0_12px_rgba(236,72,153,0.6)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Slide Canvas (Full Screen Viewport on Liquid Backdrop) */}
      <main className="flex-1 relative w-full h-full overflow-hidden z-10">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
              idx === currentIndex
                ? 'opacity-100 pointer-events-auto z-10'
                : 'opacity-0 pointer-events-none z-0'
            }`}
          >
            {slide}
          </div>
        ))}
      </main>

      {/* Floating Bottom-Right Minimal Navigation Controls */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40">
        <SlideControls
          currentIndex={currentIndex}
          totalSlides={totalSlides}
          onPrev={prevSlide}
          onNext={nextSlide}
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
          isOverviewOpen={isOverviewOpen}
          onToggleOverview={() => setIsOverviewOpen((prev) => !prev)}
        />
      </div>

      {/* Slide Overview Modal (Organized by Sections with Liquid Accents) */}
      {isOverviewOpen && (
        <div className="fixed inset-0 z-50 bg-slate-50/95 dark:bg-[#070b14]/90 backdrop-blur-2xl p-6 md:p-12 flex flex-col justify-between text-slate-900 dark:text-white transition-colors">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold tracking-tight">สารบัญสไลด์แยกตามส่วน (Slide Overview)</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">คลิกที่สไลด์เพื่อกระโดดไปยังเนื้อหาที่ต้องการ</p>
              </div>
            </div>
            <button
              onClick={() => setIsOverviewOpen(false)}
              className="p-2 rounded-full hover:bg-slate-200/60 dark:hover:bg-white/10 text-slate-500 dark:text-white/80 hover:text-slate-800 dark:hover:text-white transition-colors"
              aria-label="Close overview"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {slidesMeta ? (
            <div className="flex-1 overflow-y-auto space-y-6 pr-2">
              {uniqueSections.map((sectionName) => {
                const sectionSlides = slidesMeta
                  .map((meta, idx) => ({ meta, idx }))
                  .filter((item) => (item.meta.section || 'ทั่วไป') === sectionName);

                return (
                  <div key={sectionName} className="space-y-3">
                    <div className="flex items-center gap-2 text-slate-900 dark:text-white/90 text-sm font-bold tracking-wide border-b border-slate-200 dark:border-white/10 pb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400" />
                      <span>{sectionName}</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">
                        ({sectionSlides.length} สไลด์)
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                      {sectionSlides.map(({ meta, idx }) => (
                        <button
                          key={idx}
                          onClick={() => goToSlide(idx)}
                          className={`relative aspect-[16/10] rounded-2xl border transition-all p-3 text-left flex flex-col justify-between ${
                            idx === currentIndex
                              ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-100 text-blue-900 shadow-md dark:border-fuchsia-400 dark:bg-gradient-to-br dark:from-indigo-950/80 dark:via-purple-900/60 dark:to-slate-900/90 dark:text-white dark:shadow-[0_0_25px_rgba(236,72,153,0.35)] scale-105 z-10'
                              : meta.isSectionCover
                              ? 'border-indigo-300/80 bg-indigo-50/60 text-indigo-950 hover:bg-indigo-100/70 hover:border-indigo-400 dark:border-indigo-500/40 dark:bg-gradient-to-br dark:from-indigo-950/50 dark:to-purple-950/50 dark:text-white dark:hover:border-indigo-400 dark:hover:bg-indigo-900/40 shadow-sm'
                              : 'border-slate-200/80 bg-white/80 text-slate-700 hover:bg-slate-100/90 hover:border-slate-300 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:bg-slate-800/80 dark:hover:border-white/25 shadow-xs'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                              #{idx + 1}
                            </span>
                            {meta.isSectionCover && (
                              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow-xs">
                                PART
                              </span>
                            )}
                          </div>
                          <span className="text-xs line-clamp-2 font-semibold leading-snug text-slate-800 dark:text-slate-100">
                            {meta.title}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`relative aspect-[16/10] rounded-2xl border transition-all p-3 text-left flex flex-col justify-between ${
                    idx === currentIndex
                      ? 'border-blue-500 bg-blue-50 text-blue-900 dark:border-fuchsia-400 dark:bg-slate-800 dark:text-white shadow-md'
                      : 'border-slate-200 bg-white text-slate-700 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200'
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Slide {idx + 1}
                  </span>
                  <span className="text-xs truncate font-medium opacity-80">
                    Topic {idx + 1}
                  </span>
                </button>
              ))}
            </div>
          )}

          <div className="text-center text-xs text-slate-500 dark:text-slate-400 mt-4">
            กดปุ่ม <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-white/10 rounded text-slate-700 dark:text-slate-300">Esc</kbd> หรือคลิกปุ่มปิดเพื่อกลับสู่สไลด์ปัจจุบัน
          </div>
        </div>
      )}

      {/* Help Modal */}
      {showHelp && (
        <div className="fixed inset-0 z-50 bg-black/50 dark:bg-[#070b14]/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200/80 dark:border-white/10 text-slate-900 dark:text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-500 dark:text-cyan-400" />
                คีย์ลัดสำหรับควบคุม (Shortcuts)
              </h3>
              <button
                onClick={() => setShowHelp(false)}
                className="text-slate-400 hover:text-slate-700 dark:hover:text-white p-1"
                aria-label="Close help"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-2.5 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-slate-200/60 dark:border-white/5">
                <span className="text-slate-600 dark:text-slate-300">สไลด์ถัดไป</span>
                <span className="font-mono bg-slate-100 dark:bg-white/10 px-2 py-0.5 rounded text-xs text-slate-800 dark:text-slate-200">→ หรือ Space</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-200/60 dark:border-white/5">
                <span className="text-slate-600 dark:text-slate-300">สไลด์ก่อนหน้า</span>
                <span className="font-mono bg-slate-100 dark:bg-white/10 px-2 py-0.5 rounded text-xs text-slate-800 dark:text-slate-200">← หรือ Backspace</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-200/60 dark:border-white/5">
                <span className="text-slate-600 dark:text-slate-300">สไลด์แรก / สไลด์สุดท้าย</span>
                <span className="font-mono bg-slate-100 dark:bg-white/10 px-2 py-0.5 rounded text-xs text-slate-800 dark:text-slate-200">Home / End</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-200/60 dark:border-white/5">
                <span className="text-slate-600 dark:text-slate-300">เปิดมุมมองสไลด์ทั้งหมด</span>
                <span className="font-mono bg-slate-100 dark:bg-white/10 px-2 py-0.5 rounded text-xs text-slate-800 dark:text-slate-200">O</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-200/60 dark:border-white/5">
                <span className="text-slate-600 dark:text-slate-300">เต็มหน้าจอ (Fullscreen)</span>
                <span className="font-mono bg-slate-100 dark:bg-white/10 px-2 py-0.5 rounded text-xs text-slate-800 dark:text-slate-200">F</span>
              </div>
            </div>
            <button
              onClick={() => setShowHelp(false)}
              className="mt-6 w-full py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 shadow-lg shadow-indigo-500/25 transition-opacity"
            >
              รับทราบ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
