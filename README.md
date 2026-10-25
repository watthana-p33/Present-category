# 🎯 Next.js Web Presentation Platform

ระบบเว็บนำเสนอผลงานระดับองค์กร พัฒนาด้วย **Next.js (App Router)**, **TypeScript** และ **Tailwind CSS** ออกแบบสถาปัตยกรรมแบบ Modular ให้ **1 Path = 1 ชุดนำเสนอ** พร้อมระบบ **Audio Narration**, **Bilingual Subtitles (TH/EN)**, **Spotlight Synchronization** และชุด **Reusable Presentation & Diagram Components**

---

## ✨ ไฮไลท์ฟีเจอร์เด่น (Key Features)

- **1 Path = 1 ชุดนำเสนอ:** รองรับ Dynamic Route ทั้ง `/[slug]` และ `/presentations/[slug]`
- **🎙️ ระบบเสียงบรรยายและไทม์ไลน์ (Audio Narration & Timestamps):** ซิงค์เสียงบรรยายระดับสไลด์และเซกชัน พร้อมควบคุมการเล่นอัตโนมัติ
- **💬 คำบรรยาย 2 ภาษา (Bilingual Subtitles):** รองรับภาษาไทยและภาษาอังกฤษ พร้อมระบบสลับภาษาและฮอตคีย์ด่วน
- **🔦 Spotlight Section:** ไฮไลต์การ์ดหรือเนื้อหาตามช่วงเวลาของเสียงบรรยาย พร้อมแอนิเมชันเรืองแสง (Glow) และดรอปแสงส่วนอื่น (Dim)
- **📊 สถาปัตยกรรมไดอะแกรมแยกตาม Slug:** แยก Diagram เฉพาะทางตามชุดนำเสนอเพื่อความเป็นระเบียบและโหลดเท่าที่จำเป็น
- **🌗 Dark / Light Mode:** รองรับการสลับธีมพร้อมสีสันแบบ HSL Tailored ที่ดูทันสมัยระดับพรีเมียม
- **🗂️ Slide Overview & Shortcuts:** โหมดภาพรวมสไลด์แบบตาราง (Grid) พร้อมปุ่มลัดครบครัน

---

## 🚀 วิธีการเริ่มต้นใช้งาน (Getting Started)

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

## ⌨️ คีย์ลัดสำหรับควบคุมการนำเสนอ (Keyboard Shortcuts)

| ปุ่ม | คำสั่ง |
| :--- | :--- |
| `→` / `Space` / `PageDown` | ไปสไลด์ถัดไป |
| `←` / `Backspace` / `PageUp` | กลับสไลด์ก่อนหน้า |
| `Home` / `End` | กระโดดไปสไลด์แรก / สไลด์สุดท้าย |
| `A` | เปิด / ปิดเสียงบรรยายอัตโนมัติ (Toggle Auto-Narration) |
| `C` | สลับคำบรรยาย (ไทย 🇹🇭 → English 🇬🇧 → ปิด) |
| `F` | เปิด / ปิดโหมดเต็มหน้าจอ (Fullscreen) |
| `O` | สลับมุมมอง Slide Overview (ตารางสไลด์ทั้งหมด) |
| `?` | แสดงคู่มือปุ่มลัด (Shortcut Help Modal) |
| `Esc` | ปิดหน้าต่าง Overview หรือ Modal ช่วยเหลือ |

---

## 🧩 โครงสร้างโปรเจกต์ (Project Structure)

```text
├── app/
│   ├── page.tsx                           # หน้าแรก: Presentation Hub / Catalog รวมชุดนำเสนอ
│   ├── [slug]/page.tsx                    # Dynamic Route หลัก: 1 path = 1 ชุดนำเสนอ (เช่น /ai-first-enterprise)
│   ├── presentations/[slug]/page.tsx      # Route ทางเลือก (เช่น /presentations/ai-first-enterprise)
│   ├── layout.tsx                         # Global layout พร้อม Fonts (Inter & Noto Sans Thai) และ ThemeProvider
│   └── globals.css                        # Tailwind CSS directives & custom styling
│
├── components/
│   ├── presentation/                      # Reusable Presentation Components (จัดหมวดหมู่ชัดเจน)
│   │   ├── deck/                          # แกนหลักระบบสไลด์
│   │   │   ├── SlideDeck.tsx              # ตัวคุมการนำเสนอ (Audio Sync, Keyboard, Fullscreen, Overview)
│   │   │   ├── Slide.tsx                  # Wrapper สำหรับแต่ละหน้าสไลด์
│   │   │   ├── SlideControls.tsx          # แถบควบคุมลอยด้านล่าง (Play/Pause, Prev/Next, Subtitles, Volume)
│   │   │   ├── ThemeToggle.tsx            # ปุ่มสลับ Light / Dark mode
│   │   │   └── index.ts                   # Export components ในกลุ่ม deck
│   │   ├── narration/                     # ระบบเสียงบรรยายและคำบรรยาย
│   │   │   ├── NarrationContext.tsx       # Context จัดการ State ของเสียง, เวลาปัจจุบัน และภาษา Subtitle
│   │   │   ├── SubtitleOverlay.tsx        # กล่องแสดงคำบรรยายกึ่งโปร่งใส (Backdrop Blur)
│   │   │   ├── SpotlightSection.tsx       # Component ไฮไลต์ตามช่วงเวลาเสียง (Active Section Sync)
│   │   │   └── index.ts                   # Export components ในกลุ่ม narration
│   │   ├── content/                       # ชิ้นส่วนเนื้อหาในหน้าสไลด์
│   │   │   ├── SlideHeader.tsx            # หัวข้อสไลด์ พร้อม Badge หมวดหมู่
│   │   │   ├── Card.tsx                   # การ์ดแสดงเนื้อหาทั่วไป
│   │   │   ├── AgendaCard.tsx             # การ์ด Agenda สรุปสารบัญ
│   │   │   ├── SectionDividerSlide.tsx    # สไลด์คั่นหมวดหมู่/ช่วงการนำเสนอ
│   │   │   ├── QuoteBox.tsx               # กล่องคำพูด/อ้างอิงสวยงาม
│   │   │   ├── PodcastCard.tsx            # การ์ดเล่นเสียง Podcast/Audio Player
│   │   │   └── index.ts                   # Export components ในกลุ่ม content
│   │   └── index.ts                       # Barrel Export รวมทุกหมวดของ presentation
│   │
│   ├── diagrams/                          # ไดอะแกรมนำเสนอ (แยกโฟลเดอร์ตาม slug)
│   │   └── ai-first-enterprise/           # ไดอะแกรมเฉพาะของชุด AI-First Enterprise
│   │       ├── DiamondTrapDiagram.tsx     # ไดอะแกรมกับดักรูปเพชร (The Diamond Trap)
│   │       ├── ThreePillarsDiagram.tsx    # ไดอะแกรม 3 เสาหลัก Enterprise
│   │       ├── DataSovereigntyDiagram.tsx # ไดอะแกรมอธิปไตยข้อมูล
│   │       ├── MultiAgentDefenseDiagram.tsx # ไดอะแกรมสถาปัตยกรรม Multi-Agent
│   │       └── index.ts                   # Export diagrams ของ slug นี้
│   │
│   └── providers/
│       └── ThemeProvider.tsx              # Context Provider สำหรับ Dark / Light Theme
│
├── docs/                                  # เอกสารข้อมูลดิบและสคริปต์นำเสนอ (แยกตาม slug)
│   └── ai-first-enterprise/
│       ├── transcripts.json               # บทถอดเสียงต้นฉบับจาก Podcast/ต้นทาง
│       ├── PRESENTATION_SCRIPTS.md        # สคริปต์สไลด์แยกรายหน้า (ใช้สำหรับสร้างไฟล์เสียง)
│       ├── narration_segments.json        # Timestamp segments พร้อมคำแปลสองภาษา (TH/EN)
│       └── slide_segments_utf8.txt        # สรุปหัวข้อและช่วงเวลาของแต่ละสไลด์
│
├── presentations/                         # แหล่งรวมชุดนำเสนอทั้งหมด
│   ├── data.ts                            # ข้อมูล Metadata ทะเบียนของทุกชุดนำเสนอ (Catalog Metadata)
│   ├── loader.tsx                         # ตัวเชื่อมโยง dynamic slug เข้ากับสไลด์และ audio timestamps
│   └── ai-first-enterprise/               # ชุดนำเสนอตัวอย่าง "The AI-First Enterprise"
│       ├── slides.tsx                     # สไลด์ทั้ง 14 หน้า พร้อม Section Dividers และ Diagrams
│       └── data/                          # Data ประจำชุดนำเสนอ
│           ├── meta.ts                    # Metadata ของชุดสไลด์
│           ├── timestamps.ts              # แมปปิ้งเวลาของแต่ละสไลด์และ active sections
│           ├── podcasts.ts                # ข้อมูลรายการเสียง Podcast
│           ├── narration_segments.json    # ซับไตเติลภาษาไทย-อังกฤษที่ build แล้ว
│           └── index.ts                   # Export รวมของ data
│
├── public/
│   └── audio/                             # ไฟล์เสียงบรรยาย (แยกตาม slug)
│       └── ai-first-enterprise/
│           └── ai-first-enterprise.mp3    # ไฟล์เสียงบรรยายเต็มความยาว
│
├── scratch/                               # สคริปต์ Python สำหรับ Data & Subtitle Pipeline
│   ├── generate_bilingual_subtitles.py    # สกัดและสร้างคำบรรยายสองภาษา (TH/EN) รองรับ --slug <slug>
│   ├── extract_segments.py                # สกัด audio timeline segments จาก transcripts.json
│   ├── export_segments_utf8.py            # ส่งออก timeline เป็นไฟล์ข้อความอ่านง่าย
│   └── print_slide_segments.py            # แสดงตารางสรุป segment ของแต่ละสไลด์
│
└── types/
    ├── transcripts.ts                     # Type definition สำหรับ Transcript และ Subtitles
    └── index.ts                           # รวม export types
```

---

## ➕ ขั้นตอนการสร้างชุดนำเสนอใหม่ (Workflow Guide)

การสร้างชุดนำเสนอใหม่ (เช่น slug: `cloud-native`) มีขั้นตอนดังนี้:

### 1. จัดเตรียมเอกสารและไฟล์เสียง
1. วางไฟล์ข้อมูลอ้างอิงใน `docs/cloud-native/transcripts.json`
2. จัดทำสคริปต์สไลด์ใน `docs/cloud-native/PRESENTATION_SCRIPTS.md`
3. บันทึก/สังเคราะห์ไฟล์เสียงแล้วนำไปวางที่ `public/audio/cloud-native/cloud-native.mp3`
4. รันสคริปต์สร้างคำบรรยายสองภาษา (ถ้ามี):
   ```bash
   python scratch/generate_bilingual_subtitles.py --slug cloud-native
   ```

### 2. สร้างโครงสร้างใน `presentations/<slug>/`
สร้างโฟลเดอร์ `presentations/cloud-native/` พร้อมไฟล์:
- `data/timestamps.ts` – กำหนดช่วงเวลาเริ่มต้น-สิ้นสุดของแต่ละสไลด์
- `data/meta.ts` – ข้อมูลหมวดหมู่, ผู้บรรยาย, แท็ก
- `data/index.ts` – Re-export ข้อมูลทั้งหมด
- `slides.tsx` – เขียน Component สไลด์แต่ละหน้า

ตัวอย่างการเรียกใช้ Reusable Components ใน `slides.tsx`:
```tsx
'use client';

import React from 'react';
import { 
  Slide, 
  SlideHeader, 
  Card, 
  SectionDividerSlide,
  SpotlightSection 
} from '@/components/presentation';

export function getCloudNativeSlides(): React.ReactNode[] {
  return [
    // Slide 1: Cover
    <Slide key="1" isActive={true} center={true}>
      <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white">
        Cloud Native Architecture
      </h1>
      <p className="mt-4 text-xl text-slate-600 dark:text-slate-300">
        การออกแบบระบบคลาวด์ยุคใหม่ระดับองค์กร
      </p>
    </Slide>,

    // Slide 2: Section Divider
    <SectionDividerSlide
      key="2"
      isActive={true}
      partNumber={1}
      title="Foundations of Modern Cloud"
      category="Cloud Native"
    />,

    // Slide 3: Content พร้อม Spotlight Sync ตามเสียงบรรยาย
    <Slide key="3" isActive={true}>
      <SlideHeader 
        title="Microservices & Containers" 
        category="Architecture" 
      />
      <div className="grid grid-cols-2 gap-6 mt-6">
        <SpotlightSection sectionId="part1-containers">
          <Card title="Containerization" variant="gradient">
            <p>แยกแอปพลิเคชันเป็นอิสระ รวดเร็ว ปลอดภัย</p>
          </Card>
        </SpotlightSection>

        <SpotlightSection sectionId="part1-orchestration">
          <Card title="Kubernetes Orchestration" variant="default">
            <p>ระบบจัดการ Container อัตโนมัติในสเกลระดับใหญ่</p>
          </Card>
        </SpotlightSection>
      </div>
    </Slide>,
  ];
}
```

### 3. ลงทะเบียนใน `presentations/data.ts`
เพิ่มข้อมูลชุดนำเสนอลงใน `presentationsList`:
```ts
{
  slug: 'cloud-native',
  path: '/cloud-native',
  title: 'Cloud Native Architecture',
  subtitle: 'การออกแบบระบบคลาวด์ยุคใหม่',
  description: 'เรียนรู้สถาปัตยกรรม Microservices, Containers และ Kubernetes',
  category: 'Cloud & DevOps',
  tags: ['Cloud', 'Kubernetes', 'DevOps'],
  slideCount: 3,
  author: 'Cloud Team',
  date: '2026-10-25',
  gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
  audioUrl: '/audio/cloud-native/cloud-native.mp3',
}
```

### 4. เชื่อมต่อใน `presentations/loader.tsx`
นำเข้า slides และข้อมูล timestamps เพื่อให้ `PresentationViewer` ทำงานร่วมกับเสียงและซับไตเติล:
```tsx
import { getCloudNativeSlides } from './cloud-native/slides';
import { cloudNativeTimestamps, cloudNativeSegments } from './cloud-native/data';

// ภายในฟังก์ชัน PresentationViewer:
if (slug === 'cloud-native') {
  slides = getCloudNativeSlides();
  timestamps = cloudNativeTimestamps;
  segments = cloudNativeSegments;
}
```

✨ **เสร็จสิ้น!** คุณสามารถเข้าชมชุดนำเสนอใหม่ได้ทันทีที่ `/cloud-native` หรือ `/presentations/cloud-native` และคลิกเข้าจากหน้าแรกได้อัตโนมัติ พร้อมรองรับเสียงบรรยายและคีย์ลัดเต็มรูปแบบ!

