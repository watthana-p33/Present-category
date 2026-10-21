'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';

interface ThemeToggleProps {
  className?: string;
  variant?: 'minimal' | 'button';
}

export function ThemeToggle({ className = '', variant = 'minimal' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Avoid hydration mismatch by rendering a placeholder
    return (
      <div className={`w-8 h-8 rounded-xl ${className}`} aria-hidden="true" />
    );
  }

  const isDark = theme === 'dark';

  if (variant === 'button') {
    return (
      <button
        onClick={toggleTheme}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all text-xs font-semibold ${
          isDark
            ? 'bg-slate-900/60 border-white/10 text-amber-300 hover:border-amber-400/40 hover:shadow-[0_0_15px_rgba(251,191,36,0.2)]'
            : 'bg-white/80 border-slate-200 text-indigo-600 hover:border-indigo-400/40 hover:shadow-[0_0_15px_rgba(99,102,241,0.15)] shadow-sm'
        } ${className}`}
        title={isDark ? 'สลับเป็นธีมสว่าง' : 'สลับเป็นธีมมืด'}
        aria-label="Toggle Theme"
      >
        {isDark ? (
          <>
            <Sun className="w-4 h-4 text-amber-300 animate-spin-slow" />
            <span className="hidden sm:inline">ธีมสว่าง</span>
          </>
        ) : (
          <>
            <Moon className="w-4 h-4 text-indigo-600" />
            <span className="hidden sm:inline">ธีมมืด</span>
          </>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-xl transition-all duration-300 relative group flex items-center justify-center ${
        isDark
          ? 'text-amber-300 hover:bg-amber-400/10 hover:shadow-[0_0_15px_rgba(251,191,36,0.25)]'
          : 'text-indigo-600 hover:bg-indigo-500/10 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]'
      } ${className}`}
      title={isDark ? 'สลับเป็นธีมสว่าง (Light Mode)' : 'สลับเป็นธีมมืด (Dark Mode)'}
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-300 group-hover:rotate-45 transition-transform" />
      ) : (
        <Moon className="w-4 h-4 text-indigo-600 group-hover:-rotate-12 transition-transform" />
      )}
    </button>
  );
}
