'use client';

import React from 'react';
import { useNarration } from './NarrationContext';
import { Volume2 } from 'lucide-react';

interface SpotlightSectionProps {
  id?: string;
  sectionId?: string;
  startTime?: number;
  endTime?: number;
  isActive?: boolean;
  children: React.ReactNode;
  className?: string;
  badgeText?: string;
  showBadge?: boolean;
  padded?: boolean;
}

export function SpotlightSection({
  id,
  sectionId,
  startTime,
  endTime,
  isActive: manualIsActive,
  children,
  className = '',
  badgeText,
  showBadge = true,
  padded = false,
}: SpotlightSectionProps) {
  const { isNarrating, currentTime } = useNarration();

  const isTimingActive =
    isNarrating &&
    startTime !== undefined &&
    endTime !== undefined &&
    currentTime >= startTime &&
    currentTime < endTime;

  const active = manualIsActive ?? isTimingActive;

  // Provide breathing room padding if padded is true or if caller hasn't set custom padding
  const paddingClass = padded ? 'p-4 sm:p-5' : '';

  // When narration is off, keep regular presentation styles
  if (!isNarrating) {
    return (
      <div className={`relative transition-all duration-300 ${paddingClass} ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={`relative transition-all duration-500 ease-out ${paddingClass} ${
        active
          ? 'scale-[1.02] -translate-y-1 z-20 shadow-[0_0_35px_rgba(59,130,246,0.35)] dark:shadow-[0_0_40px_rgba(6,182,212,0.5)] ring-2 ring-blue-500/90 dark:ring-cyan-400 rounded-2xl'
          : 'opacity-40 scale-[0.985] blur-[0.2px] transition-all duration-500'
      } ${className}`}
    >
      {active && showBadge && (
        <div className="absolute -top-4 right-4 z-40 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-blue-500/40 animate-pulse pointer-events-none">
          <Volume2 className="w-3.5 h-3.5 text-white" />
          <span>{badgeText || 'กำลังบรรยายส่วนนี้'}</span>
        </div>
      )}
      {children}
    </div>
  );
}
