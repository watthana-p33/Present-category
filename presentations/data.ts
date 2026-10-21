import { aiFirstEnterpriseSlidesMeta } from './ai-first-enterprise/meta';

export interface PresentationMeta {
  slug: string;
  path: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  tags: string[];
  slideCount: number;
  author: string;
  date: string;
  gradient: string;
}

export const presentationsList: PresentationMeta[] = [
  {
    slug: 'ai-first-enterprise',
    path: '/ai-first-enterprise',
    title: 'อนาคตขององค์กรยุค AI (The AI-First Enterprise)',
    subtitle: 'วิสัยทัศน์ แนวโน้มเทคโนโลยี และการปรับตัวสู่ Agentic Organization',
    description: 'ก้าวข้ามกับดักประสิทธิภาพ, การปรับโครงสร้างองค์กรสู่ Mission-driven teams, 5 ทักษะสำคัญ และระบบป้องกันแบบ Active Defense',
    category: 'AI & Strategy',
    tags: ['AI-First', 'Digital Sovereignty', 'Agentic AI', 'Strategy', 'Future of Work'],
    slideCount: aiFirstEnterpriseSlidesMeta.length,
    author: 'Enterprise AI Strategy Team',
    date: '2026-10-21',
    gradient: 'from-blue-600 via-indigo-600 to-purple-600',
  },
];

export function getPresentationMeta(slug: string): PresentationMeta | undefined {
  return presentationsList.find((p) => p.slug === slug);
}
