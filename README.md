# 🎯 Next.js Web Presentation Platform

ระบบเว็บนำเสนอผลงานระดับองค์กร พัฒนาด้วย **Next.js (App Router)** และ **Tailwind CSS** ออกแบบสถาปัตยกรรมแบบ Modular ให้ **1 Path = 1 ชุดนำเสนอ** พร้อมชุด Reusable Components ที่หยิบไปใช้ซ้ำได้ทันที

---

## 🚀 วิธีการเริ่มต้นใช้งาน

### 1. ติดตั้ง Dependencies (ทำครั้งแรก)
```bash
npm install
```

### 2. รันโหมด Development
```bash
npm run dev
```
เปิดบราวเซอร์ที่: [http://localhost:3000](http://localhost:3000)

### 3. Build & Production Start
```bash
npm run build
npm run start
```

---

## 🧭 การเข้าถึงชุดนำเสนอ (Routes & Paths)

- **หน้าหลัก (Catalog / Hub):** [http://localhost:3000/](http://localhost:3000/)
- **ชุดนำเสนอ AI-First Enterprise (Direct Path):** [http://localhost:3000/ai-first-enterprise](http://localhost:3000/ai-first-enterprise)
- **ชุดนำเสนอ AI-First Enterprise (Sub-path):** [http://localhost:3000/presentations/ai-first-enterprise](http://localhost:3000/presentations/ai-first-enterprise)

---

## ⌨️ คีย์ลัดสำหรับควบคุมการนำเสนอ (Shortcuts)

| ปุ่ม | คำสั่ง |
| :--- | :--- |
| `→` / `Space` / `PageDown` | ไปสไลด์ถัดไป |
| `←` / `Backspace` / `PageUp` | กลับสไลด์ก่อนหน้า |
| `Home` / `End` | กระโดดไปสไลด์แรก / สไลด์สุดท้าย |
| `F` | เปิด/ปิดโหมดเต็มหน้าจอ (Fullscreen) |
| `O` | สลับมุมมอง Slide Overview (ตารางสไลด์ทั้งหมดเพื่อเลือกสไลด์ที่ต้องการ) |
| `?` | แสดงคู่มือปุ่มลัด |
| `Esc` | ปิดหน้าต่าง Overview หรือ Modal ช่วยเหลือ |

---

## 🧩 โครงสร้างโปรเจกต์ (Project Structure)

```text
├── app/
│   ├── page.tsx                       # หน้าแรก: Presentation Hub / Catalog รวมชุดนำเสนอ
│   ├── [slug]/page.tsx                # Dynamic Route: 1 path = 1 ชุดนำเสนอ (เช่น /ai-first-enterprise)
│   ├── presentations/[slug]/page.tsx  # Route ทางเลือก (เช่น /presentations/ai-first-enterprise)
│   ├── layout.tsx                     # Global layout พร้อม Google Fonts (Inter & Noto Sans Thai)
│   └── globals.css                    # Tailwind CSS directives
├── components/
│   └── presentation/                  # Reusable Presentation Components
│       ├── SlideDeck.tsx              # ตัวคุมการนำเสนอ (Keyboard, Touch, Fullscreen, Progress bar)
│       ├── Slide.tsx                  # Wrapper สำหรับแต่ละหน้าสไลด์
│       ├── SlideControls.tsx          # แถบควบคุมลอยด้านล่าง (Prev, Next, Page Counter, Overview, Fullscreen)
│       ├── SlideHeader.tsx            # หัวข้อสไลด์ พร้อม Badge หมวดหมู่
│       ├── QuoteBox.tsx               # กล่องคำพูด/อ้างอิงสวยงาม
│       ├── AgendaCard.tsx             # การ์ด Agenda สรุปหัวข้อ
│       └── Card.tsx                   # การ์ดนำเสนอสำหรับเนื้อหาทั่วไป
├── docs/
│   └── references/                    # เอกสาร/ข้อมูลอ้างอิงสำหรับแต่ละชุดนำเสนอ
│       └── ai-first-enterprise/
│           └── transcripts.json       # บทถอดเสียงและข้อมูลอ้างอิงของสไลด์
├── presentations/
│   ├── data.ts                        # รายการข้อมูล Metadata ของทุกชุดนำเสนอ (ชื่อ, หมวด, path, สไลด์)
│   ├── loader.tsx                     # Component Loader เชื่อมโยง slug เข้ากับชุดสไลด์
│   └── ai-first-enterprise/
│       └── slides.tsx                 # สไลด์ชุด "The AI-First Enterprise" (ครบทั้ง 14 สไลด์ พร้อม Section Dividers)
└── types/
    ├── transcripts.ts                 # Type definitions & helper functions สำหรับข้อมูล Transcript
    └── index.ts                       # รวม export types ทั้งหมดของโปรเจกต์
```

---

## ➕ วิธีเพิ่มชุดนำเสนอใหม่ (1 Path = 1 ชุดนำเสนอ)

หากต้องการเพิ่มชุดนำเสนอใหม่ เช่น เรื่อง **"cloud-native-architecture"**:

### ขั้นตอนที่ 1: สร้างโฟลเดอร์และไฟล์สไลด์
สร้างไฟล์ `presentations/cloud-native/slides.tsx`:
```tsx
'use client';
import React from 'react';
import { Slide } from '@/components/presentation/Slide';
import { SlideHeader } from '@/components/presentation/SlideHeader';

export function getCloudNativeSlides(): React.ReactNode[] {
  return [
    <Slide key="1" isActive={true} center={true}>
      <h1 className="text-4xl font-extrabold">Cloud Native Architecture</h1>
    </Slide>,
    <Slide key="2" isActive={true}>
      <SlideHeader title="หัวข้อที่ 1: Microservices" />
      <p>เนื้อหาสไลด์...</p>
    </Slide>
  ];
}
```

### ขั้นตอนที่ 2: ลงทะเบียนใน `presentations/data.ts`
เพิ่มรายการใหม่เข้าไปใน `presentationsList`:
```ts
{
  slug: 'cloud-native',
  path: '/cloud-native',
  title: 'Cloud Native Architecture',
  subtitle: 'การออกแบบระบบคลาวด์ยุคใหม่',
  description: 'เรียนรู้สถาปัตยกรรม Microservices, Containers และ Kubernetes',
  category: 'Cloud & DevOps',
  tags: ['Cloud', 'Kubernetes', 'DevOps'],
  slideCount: 2,
  author: 'Tech Team',
  date: '2026-10-21',
  gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
}
```

### ขั้นตอนที่ 3: เชื่อมต่อใน `presentations/loader.tsx`
เพิ่มเงื่อนไขเรียกชุดสไลด์:
```tsx
if (slug === 'cloud-native') {
  slides = getCloudNativeSlides();
}
```

✨ **เสร็จสิ้น!** คุณสามารถเข้าชมชุดนำเสนอใหม่ได้ทันทีที่ `/cloud-native` หรือคลิกเข้าจากหน้าแรกได้โดยอัตโนมัติ!
