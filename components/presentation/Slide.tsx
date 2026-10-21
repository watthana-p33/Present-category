'use client';

import React from 'react';

interface SlideProps {
  children: React.ReactNode;
  isActive: boolean;
  className?: string;
  center?: boolean;
}

export function Slide({ children, isActive, className = '', center = false }: SlideProps) {
  if (!isActive) return null;

  return (
    <div
      className={`absolute inset-0 w-full h-full px-4 sm:px-6 md:px-10 lg:px-14 py-2 sm:py-3 md:py-4 pb-8 sm:pb-10 md:pb-12 flex flex-col justify-center overflow-hidden max-sm:overflow-y-auto animate-fadeIn ${
        center ? 'items-center text-center' : ''
      } ${className}`}
    >
      <div className="w-full max-w-6xl mx-auto my-auto flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
}
