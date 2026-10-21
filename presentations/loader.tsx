'use client';

import React from 'react';
import {
  getAIFirstEnterpriseSlides,
  getAIFirstEnterpriseSlidesMeta,
} from './ai-first-enterprise/slides';
import { SlideDeck, SlideMetadata } from '@/components/presentation/SlideDeck';
import { getPresentationMeta } from './data';

interface PresentationViewerProps {
  slug: string;
}

export function PresentationViewer({ slug }: PresentationViewerProps) {
  const meta = getPresentationMeta(slug);

  if (!meta) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">ไม่พบชุดนำเสนอ</h2>
          <p className="text-slate-500">Slug: {slug}</p>
        </div>
      </div>
    );
  }

  let slides: React.ReactNode[] = [];
  let slidesMeta: SlideMetadata[] | undefined = undefined;

  if (slug === 'ai-first-enterprise') {
    slides = getAIFirstEnterpriseSlides();
    slidesMeta = getAIFirstEnterpriseSlidesMeta();
  }

  return (
    <SlideDeck
      title={meta.title}
      slides={slides}
      slidesMeta={slidesMeta}
      slug={meta.slug}
    />
  );
}
