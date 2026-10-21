import { notFound } from 'next/navigation';
import { getPresentationMeta, presentationsList } from '@/presentations/data';
import { PresentationViewer } from '@/presentations/loader';
import type { Metadata } from 'next';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return presentationsList.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const meta = getPresentationMeta(params.slug);
  if (!meta) {
    return {
      title: 'Presentation Not Found',
    };
  }

  return {
    title: `${meta.title} | Web Presentation`,
    description: meta.description,
  };
}

export default function PresentationSubRoutePage({ params }: PageProps) {
  const meta = getPresentationMeta(params.slug);

  if (!meta) {
    notFound();
  }

  return <PresentationViewer slug={params.slug} />;
}
