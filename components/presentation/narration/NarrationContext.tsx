'use client';

import React, { createContext, useContext } from 'react';

export type SubtitleLanguage = 'off' | 'th' | 'en';

export interface SubtitleSegment {
  id: number;
  start: number;
  end: number;
  text?: string;
  th?: string;
  en?: string;
}

export interface NarrationContextType {
  isNarrating: boolean;
  currentTime: number;
  subtitleLanguage: SubtitleLanguage;
  setSubtitleLanguage: (lang: SubtitleLanguage) => void;
  currentSubtitle: string | null;
  segments?: SubtitleSegment[];
}

export const NarrationContext = createContext<NarrationContextType>({
  isNarrating: false,
  currentTime: 0,
  subtitleLanguage: 'th',
  setSubtitleLanguage: () => {},
  currentSubtitle: null,
  segments: [],
});

export const useNarration = () => useContext(NarrationContext);
