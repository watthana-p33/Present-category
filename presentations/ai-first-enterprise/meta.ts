import type { SlideMetadata } from '@/components/presentation/SlideDeck';

export const aiFirstEnterpriseSlidesMeta: SlideMetadata[] = [
  {
    section: 'บทนำ',
    title: 'หน้าปก (Cover)',
  },
  {
    section: 'บทนำ',
    title: 'หัวข้อการนำเสนอ (Agenda)',
  },
  {
    section: 'ส่วนที่ 1: The AI-First Enterprise',
    title: 'บทนำส่วนที่ 1 (Section Cover)',
    isSectionCover: true,
  },
  {
    section: 'ส่วนที่ 1: The AI-First Enterprise',
    title: 'กับดักประสิทธิภาพ',
  },
  {
    section: 'ส่วนที่ 1: The AI-First Enterprise',
    title: 'วัฒนธรรมและโครงสร้างทีม',
  },
  {
    section: 'ส่วนที่ 1: The AI-First Enterprise',
    title: 'กับดักโครงสร้างองค์กรทรงเพชร',
  },
  {
    section: 'ส่วนที่ 1: The AI-First Enterprise',
    title: 'สถาปัตยกรรมโครงสร้างทีม (The Diamond Trap)',
  },
  {
    section: 'ส่วนที่ 1: The AI-First Enterprise',
    title: '5 ทักษะจำเป็นสำหรับพนักงาน',
  },
  {
    section: 'ส่วนที่ 2: Building a Solid Foundation',
    title: 'บทนำส่วนที่ 2 (Section Cover)',
    isSectionCover: true,
  },
  {
    section: 'ส่วนที่ 2: Building a Solid Foundation',
    title: 'อธิปไตยทางดิจิทัลและข้อมูลท้องถิ่น',
  },
  {
    section: 'ส่วนที่ 2: Building a Solid Foundation',
    title: 'สถาปัตยกรรม Sovereign Data Refinery',
  },
  {
    section: 'ส่วนที่ 2: Building a Solid Foundation',
    title: '3 เสาหลัก & เคสศึกษา',
  },
  {
    section: 'ส่วนที่ 3: The Agentic AI Landscape',
    title: 'บทนำส่วนที่ 3 (Section Cover)',
    isSectionCover: true,
  },
  {
    section: 'ส่วนที่ 3: The Agentic AI Landscape',
    title: 'Agentic AI & Active Defense',
  },
  {
    section: 'ส่วนที่ 3: The Agentic AI Landscape',
    title: 'Context & Token Economy',
  },
  {
    section: 'ส่วนที่ 3: The Agentic AI Landscape',
    title: 'Enterprise Best Practices',
  },
  {
    section: 'บทสรุป',
    title: 'บทสรุปและถาม-ตอบ (Q&A)',
  },
];

export function getAIFirstEnterpriseSlidesMeta(): SlideMetadata[] {
  return aiFirstEnterpriseSlidesMeta;
}
