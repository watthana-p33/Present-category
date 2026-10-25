'use client';

import React from 'react';
import {
  Slide,
  SlideHeader,
  Card,
  AgendaCard,
  SectionDividerSlide,
  QuoteBox,
  PodcastCard,
} from '@/components/presentation';
import { SpotlightSection } from '@/components/presentation/narration';
import {
  SystemsFeedbackDiagram,
  ReliabilityTieringDiagram,
  VerificationGateDiagram,
  FirecrackerArchitectureDiagram,
} from '@/components/diagrams/renaissanc-builder';
import { renaissancBuilderPodcasts } from './data/podcasts';
import { renaissancBuilderSlidesMeta } from './data/meta';
import {
  Sparkles,
  Cpu,
  Layers,
  Globe2,
  ShieldAlert,
  Terminal,
  Brain,
  ShieldCheck,
  Microscope,
  Flame,
  Scale,
  Award,
  Compass,
  Zap,
  Cloud,
  Lock,
  Database,
  Users2,
  FileText,
  Binary,
} from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function getRenaissancBuilderSlides(): React.ReactNode[] {
  return [
    // =========================================================================
    // Slide 1: Cover Slide
    // =========================================================================
    <Slide key="slide-1" isActive={true}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center max-w-6xl mx-auto">
        {/* Left: Presentation Branding & Title */}
        <SpotlightSection startTime={0.0} endTime={17.6} sectionId="part1-cover-title"
          className="lg:col-span-6 flex flex-col justify-center text-left p-5 sm:p-6 rounded-3xl glass-panel-subtle border border-slate-200/60 dark:border-white/10 shadow-xs"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shadow-xs backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              AWS KEYNOTE STRATEGY PLAYBOOK 2026
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight mb-4">
            The <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 bg-clip-text text-transparent">Renaissance</span> Builder
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-6">
            คุณลักษณะ 5 ประการของนักพัฒนา และยุทธศาสตร์สถาปัตยกรรมคลาวด์ในยุคปัญญาประดิษฐ์
          </p>
          <div className="pt-4 border-t border-slate-200/60 dark:border-white/10 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Dr. Werner Vogels (CTO, Amazon.com)
            </span>
            <span>•</span>
            <span>17 Interactive Slides</span>
          </div>
        </SpotlightSection>

        {/* Right: Hero Visual Card with Da Vinci x Cloud Artwork */}
        <SpotlightSection startTime={17.6} endTime={33.4} sectionId="part1-cover-hero"
          className="lg:col-span-6"
        >
          <div className="w-full rounded-3xl glass-panel border border-amber-500/30 overflow-hidden shadow-xl shadow-amber-500/10 relative group">
            <div className="relative aspect-[16/10] w-full max-h-[330px] overflow-hidden">
              <img
                src={`${basePath}/images/renaissanc-builder/renaissance_builder_hero.jpg`}
                alt="The Renaissance Builder - Da Vinci Meets Cloud & AI"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex items-end p-5">
                <div className="text-left">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 backdrop-blur-md mb-1.5 border border-amber-500/30">
                    <Cpu className="w-3 h-3 text-amber-400" /> Da Vinci × Cloud Computing
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white drop-shadow-md">
                    Craftsmanship Meets Advanced Systems
                  </h3>
                  <p className="text-xs text-slate-300 drop-shadow line-clamp-2">
                    จากการทดลอง สู่การคิดเชิงระบบ ความเป็นเจ้าของ และวิศวกรพหูสูต
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SpotlightSection>
      </div>
    </Slide>,

    // =========================================================================
    // Slide 2: Agenda & Strategic Roadmap
    // =========================================================================
    <Slide key="slide-2" isActive={true}>
      <SlideHeader
        section="บทนำ"
        badge="ภาพรวม"
        badgeColor="amber"
        title="Agenda & Strategic Roadmap"
        subtitle="โครงสร้างสาระสำคัญ 2 หมวดหลักสู่การเป็น Renaissance Builder"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-4 sm:mt-6 mx-auto">
        <SpotlightSection startTime={37.7} endTime={50.0} sectionId="part1-agenda">
          <AgendaCard
            partNumber="ส่วนที่ 1"
            title="The Renaissance Builder"
            description="คุณลักษณะ 5 ประการและกระบวนทัศน์ใหม่ของนักพัฒนา: ความกระหายใคร่รู้ การคิดเชิงระบบ การสื่อสารจากหลักการแรก และ AI ในฐานะคอมไพเลอร์"
            icon={<Brain className="w-5 h-5" />}
            iconBgColor="bg-amber-500/15"
            iconTextColor="text-amber-500"
            tags={['Mindset', '5 Core Attributes', 'AI Compiler']}
          />
        </SpotlightSection>
        <SpotlightSection startTime={50.0} endTime={69.9} sectionId="part2-agenda">
          <AgendaCard
            partNumber="ส่วนที่ 2"
            title="Architecture & Rigor: You Build It, You Own It"
            description="วัฒนธรรมความเป็นเจ้าของ การป้องกันหนี้การตรวจสอบ (Verification Debt), วิวัฒนาการ Serverless, Firecracker, การสเกล 10M ผู้ใช้ และความมั่นคงปลอดภัยยุคควอนตัม"
            icon={<Cpu className="w-5 h-5" />}
            iconBgColor="bg-purple-500/15"
            iconTextColor="text-purple-400"
            tags={['Ownership', 'Serverless', 'Post-Quantum', 'Culture AI']}
          />
        </SpotlightSection>
      </div>
    </Slide>,

    // =========================================================================
    // Slide 3: Section Divider (Part 1)
    // =========================================================================
    <SectionDividerSlide
      key="slide-3-section-1"
      partNumber="ส่วนที่ 1"
      theme="amber"
      title="The Renaissance Builder: คุณลักษณะและกระบวนทัศน์ใหม่"
      subtitle="5 เสาหลักแห่งวิศวกรซอฟต์แวร์ยุค AI: การเรียนรู้ตลอดชีวิต การคิดเชิงระบบ และภาษาในฐานะคอมไพเลอร์"
      description="ถอดรหัสวิสัยทัศน์ ดร. เวอร์เนอร์ โวเกลส์: จากการเรียนรู้ตลอดชีวิต สู่การคิดเชิงระบบ การสื่อสารจากหลักการแรก และการรับมือกับ AI ในฐานะคอมไพเลอร์เพื่อสร้างระบบที่ยั่งยืน"
      leftTiming={{ startTime: 69.9, endTime: 80.1 }}
      topicTimings={[
        { startTime: 80.1, endTime: 84.5 },
        { startTime: 84.5, endTime: 89.2 },
        { startTime: 89.2, endTime: 94.0 },
      ]}
      topics={[
        {
          number: '01',
          title: 'การเปลี่ยนผ่านสู่ยุคใหม่ (The Paradigm Shift)',
          description: 'จากภาษาโปรแกรมโบราณ สู่ยุคของ AI, Rust และการให้ความสำคัญกับความปลอดภัยและทรัพยากร',
        },
        {
          number: '02',
          title: '3 เสาหลักแรก: ความกระหายใคร่รู้, การคิดเชิงระบบ และการสื่อสาร',
          description: 'Curiosity & Experimentation, Systems Thinking & Feedback Loops, และ First Principles Trade-offs',
        },
        {
          number: '03',
          title: 'AI ในฐานะคอมไพเลอร์ และ Specification-Driven Dev',
          description: 'เปลี่ยนภาษาธรรมชาติที่คลุมเครือสู่สถาปัตยกรรมที่แม่นยำด้วย Formal Verification',
        },
      ]}
    />,

    // =========================================================================
    // Slide 4: The Golden Era & Paradigm Shift
    // =========================================================================
    <Slide key="slide-4" isActive={true}>
      <SlideHeader
        section="ส่วนที่ 1: The Renaissance Builder"
        badge="บริบทและความเป็นมา"
        badgeColor="amber"
        title="การเปลี่ยนผ่านสู่ยุคใหม่ (The Paradigm Shift)"
        subtitle="จากยุคภาษาโปรแกรมโบราณ สู่ยุคของ AI และระบบที่ให้ความสำคัญกับความปลอดภัยและทรัพยากร"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <SpotlightSection startTime={94.0} endTime={113.0} sectionId="part1-era-shift" padded={false}>
          <div className="h-full flex flex-col justify-between rounded-3xl glass-panel p-6 sm:p-8 border border-slate-200/80 dark:border-white/10 overflow-hidden shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 font-bold text-xl mb-4">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Continuous Learning as a Lifestyle
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                จาก Pascal, COBOL, Assembly สู่ C, C++, Python และปัจจุบันคือ Rust สิ่งที่เรา &apos;เคยรู้&apos; ไม่สำคัญเท่ากับ &apos;สิ่งที่เราต้องเรียนรู้&apos; อีกต่อไป
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
              <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                หลักคิด: ไม่มีใครจบจากโรงเรียนแล้วเป็นวิศวกรได้ทันที ประสบการณ์ไร้สูตรบีบอัด
              </span>
            </div>
          </div>
        </SpotlightSection>

        <SpotlightSection startTime={113.0} endTime={126.0} sectionId="part1-renaissance-concept" padded={false}>
          <div className="h-full flex flex-col justify-between rounded-3xl glass-panel p-6 sm:p-8 border border-slate-200/80 dark:border-white/10 overflow-hidden shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 font-bold text-xl mb-4">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                The Renaissance Builder Spirit
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                ดั่งเช่น เลโอนาร์โด ดา วินชี ผู้ไม่แยกศิลปะ ออกจากวิทยาศาสตร์และสถาปัตยกรรม นักพัฒนายุค AI ต้องผสานความกระหายใคร่รู้เข้ากับการคิดเชิงระบบและการสื่อสาร
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
              <span className="text-xs font-semibold text-orange-600 dark:text-orange-400">
                เป้าหมาย: สร้างระบบที่ยั่งยืน ประหยัดพลังงาน และปลอดภัยสูงสุด
              </span>
            </div>
          </div>
        </SpotlightSection>
      </div>
    </Slide>,

    // =========================================================================
    // Slide 5: Pillar 1: Curiosity & Experimentation
    // =========================================================================
    <Slide key="slide-5" isActive={true}>
      <SlideHeader
        section="ส่วนที่ 1: The Renaissance Builder"
        badge="เสาหลักที่ 1"
        badgeColor="amber"
        title="เสาหลักที่ 1: ความกระหายใคร่รู้และการทดลองอย่างไม่กลัวพัง"
        subtitle="Curiosity, Willingness to Fail, and Good-Enough Tools"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <SpotlightSection startTime={126.0} endTime={136.7} sectionId="part1-curiosity" padded={false}>
          <div className="h-full flex flex-col justify-between rounded-3xl glass-panel p-6 sm:p-8 border border-slate-200/80 dark:border-white/10 overflow-hidden shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 mb-4">
                <Microscope className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Protect the Instinct
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                นักพัฒนาทุกคนมีสัญชาตญาณในการรื้อแยกชิ้นส่วนเพื่อเรียนรู้ จงปกป้องสัญชาตญาณนี้ไว้ เพราะความอยากรู้อยากเห็นเป็นบ่อเกิดแห่งนวัตกรรม
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
              <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">Stay Curious</span>
            </div>
          </div>
        </SpotlightSection>

        <SpotlightSection startTime={136.7} endTime={145.5} sectionId="part1-fail-learn" padded={false}>
          <div className="h-full flex flex-col justify-between rounded-3xl glass-panel p-6 sm:p-8 border border-slate-200/80 dark:border-white/10 overflow-hidden shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center border border-rose-500/20 mb-4">
                <Flame className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Willingness to Fail
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                การทดลองจะไม่มีความหมายเลยถ้าคุณไม่ยอมรับความล้มเหลว การอ่านเอกสารอย่างเดียวไม่ช่วยให้เก่ง แต่ build ที่พังและ bug ที่เจาะลึกต่างหากที่สอนเรา
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
              <span className="text-xs font-semibold text-rose-600 dark:text-rose-400">Fail to Learn</span>
            </div>
          </div>
        </SpotlightSection>

        <SpotlightSection startTime={145.5} endTime={159.2} sectionId="part1-good-enough" padded={false}>
          <div className="h-full flex flex-col justify-between rounded-3xl glass-panel p-6 sm:p-8 border border-slate-200/80 dark:border-white/10 overflow-hidden shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-4">
                <Scale className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Good-Enough Tools
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                คุณจำเป็นต้องใช้โมเดลแพงที่สุดจริงหรือไม่? ในยุค Gen AI การทดลองช่วยค้นหาเครื่องมือที่ประหยัดต้นทุนแต่ให้ผลลัพธ์ที่ตอบโจทย์ธุรกิจได้อย่างดีเยี่ยม
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">Cost Awareness</span>
            </div>
          </div>
        </SpotlightSection>
      </div>
    </Slide>,

    // =========================================================================
    // Slide 6: Pillar 2: Systems Thinking (Ecological Metaphor & Principles)
    // =========================================================================
    <Slide key="slide-6" isActive={true}>
      <SlideHeader
        section="ส่วนที่ 1: The Renaissance Builder"
        badge="เสาหลักที่ 2"
        badgeColor="amber"
        title="เสาหลักที่ 2: การคิดเชิงระบบ (Systems Thinking)"
        subtitle="มองเห็นความเชื่อมโยงในภาพรวม สถาปัตยกรรมทุกส่วนส่งผลกระทบถึงกันเหมือนระบบนิเวศ"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-4 items-stretch">
        {/* Left: Yellowstone Wolves Ecological Metaphor Card */}
        <SpotlightSection startTime={159.2} endTime={189.2} sectionId="part1-systems-visual" className="lg:col-span-5 flex flex-col" padded={false}>
          <div className="h-full rounded-2xl glass-panel border border-amber-500/20 overflow-hidden flex flex-col justify-between shadow-sm group">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <img
                src={`${basePath}/images/renaissanc-builder/systems_thinking_yellowstone.jpg`}
                alt="Yellowstone Ecological Trophic Cascade"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3.5">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-amber-300 px-2.5 py-0.5 rounded-full bg-black/50 backdrop-blur-md border border-amber-500/30">
                  <Compass className="w-3 h-3 text-amber-400" /> Ecological Metaphor
                </span>
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                  บทเรียนหมาป่าแห่งเยลโลว์สโตน (Trophic Cascade)
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  การปล่อยหมาป่า 14 ตัวกลับคืนสู่ป่า ไม่เพียงคุมประชากรกวาง แต่ทำให้ป่าฟื้น นกกลับมา พืชริมตลิ่งงอกงามจนช่วยยึดหน้าดิน และส่งผลให้แม่น้ำเปลี่ยนทิศทางการไหล
                </p>
              </div>
              <div className="pt-2.5 border-t border-slate-200/60 dark:border-white/10 text-xs font-semibold text-amber-600 dark:text-amber-400 font-mono">
                &ldquo;You cannot change just one thing.&rdquo; — Donella Meadows
              </div>
            </div>
          </div>
        </SpotlightSection>

        {/* Right: Key Principles of Systems Engineering in Software */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <SpotlightSection startTime={189.2} endTime={197.5} sectionId="part1-systems-ecosystem" padded={false}>
            <Card
              title="สถาปัตยกรรมซอฟต์แวร์คือระบบนิเวศ (Software as an Ecosystem)"
              variant="default"
              icon={<Layers className="w-5 h-5" />}
              iconBg="bg-emerald-500/15"
              iconColor="text-emerald-500"
            >
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 mb-2">
                ไมโครเซอร์วิสไม่ได้ทำงานอยู่อย่างโดดเดี่ยว การเปลี่ยนพฤติกรรมของ Service หนึ่ง ย่อมสร้างแรงสั่นสะเทือนไปยัง Database, Network, และ Downstream Services เสมอ
              </p>
              <div className="flex flex-wrap gap-2 text-[10px] font-mono">
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">Cascading Failures Prevention</span>
                <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">Backpressure Control</span>
              </div>
            </Card>
          </SpotlightSection>

          <SpotlightSection startTime={197.5} endTime={202.4} sectionId="part1-systems-feedback" padded={false}>
            <Card
              title="วงจรป้อนกลับและการควบคุม (Balancing & Reinforcing Loops)"
              variant="gradient"
              icon={<Brain className="w-5 h-5" />}
              iconBg="bg-amber-500/15"
              iconColor="text-amber-500"
            >
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 mb-2">
                ระบบที่ยืดหยุ่นต้องมีกลไกหน่วงและตัดวงจร (Dampening Forces) เช่น Rate Limiting, Throttling และ Circuit Breakers เพื่อไม่ให้เกิดภาวะ Queue Bloat และล่มสลายทั้งระบบ
              </p>
              <div className="text-[11px] font-semibold text-amber-700 dark:text-amber-300">
                💡 Second-Order Thinking: มองทะลุผลลัพธ์เฉพาะหน้า สู่เสถียรภาพระยะยาว
              </div>
            </Card>
          </SpotlightSection>
        </div>
      </div>
    </Slide>,

    // =========================================================================
    // Slide 7: Systems Topology: Feedback Loops & Trophic Cascade (Diagram Slide)
    // =========================================================================
    <Slide key="slide-7" isActive={true}>
      <SlideHeader
        section="ส่วนที่ 1: The Renaissance Builder"
        badge="ผังสถาปัตยกรรม"
        badgeColor="amber"
        title="สถาปัตยกรรมเชิงระบบ: Feedback Loops & Trophic Cascade"
        subtitle="ผังเปรียบเทียบกลไก Apex Regulator ของระบบนิเวศ กับ Rate Limiting และ Circuit Breakers ในระบบซอฟต์แวร์"
      />
      <div className="mt-5">
        <SystemsFeedbackDiagram className="shadow-lg" />
      </div>
    </Slide>,

    // =========================================================================
    // Slide 8: Pillar 3: Communication & First Principles (Diagram Slide)
    // =========================================================================
    <Slide key="slide-8" isActive={true}>
      <SlideHeader
        section="ส่วนที่ 1: The Renaissance Builder"
        badge="เสาหลักที่ 3"
        badgeColor="amber"
        title="เสาหลักที่ 3: การสื่อสารจากหลักการแรก (Communication & Trade-offs)"
        subtitle="สื่อสารกับฝ่ายธุรกิจอย่างตรงไปตรงมา การตั้งโจทย์ Tier ความน่าเชื่อถือกับต้นทุนที่แท้จริง"
      />
      <div className="mt-6">
        <ReliabilityTieringDiagram className="shadow-lg" />
      </div>
    </Slide>,

    // =========================================================================
    // Slide 9: AI as a Compiler & Specification-Driven Dev
    // =========================================================================
    <Slide key="slide-9" isActive={true}>
      <SlideHeader
        section="ส่วนที่ 1: The Renaissance Builder"
        badge="กระบวนทัศน์ AI"
        badgeColor="amber"
        title="AI ในฐานะคอมไพเลอร์ และความท้าทายของภาษาธรรมชาติ"
        subtitle="เมื่อภาษาที่คลุมเครือถูกแปลงเป็นโค้ด สถาปัตยกรรมจึงต้องพึ่งพา Specification และ Automated Reasoning"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <SpotlightSection startTime={285.4} endTime={299.0} sectionId="part1-ai-compiler" padded={false}>
          <Card
            title="Natural Language as Input"
            variant="gradient"
            icon={<Terminal className="w-5 h-5" />}
            iconBg="bg-amber-500/15"
            iconColor="text-amber-500"
          >
            <p className="text-sm leading-relaxed">
              มนุษย์เข้าใจความคลุมเครือได้ดี แต่คอมพิวเตอร์ต้องการความแน่นอน การป้อน prompt ภาษาธรรมชาติจึงต้องการกระบวนการกลั่นกรองที่เข้มงวด
            </p>
          </Card>
        </SpotlightSection>

        <SpotlightSection startTime={299.0} endTime={307.9} sectionId="part1-spec-driven" padded={false}>
          <Card
            title="Spec-Driven Development"
            variant="default"
            icon={<FileText className="w-5 h-5" />}
            iconBg="bg-indigo-500/15"
            iconColor="text-indigo-400"
          >
            <p className="text-sm leading-relaxed">
              เขียนเอกสารความต้องการและ Design Principles ให้ชัดเจน เพื่อให้ AI สร้างโค้ดที่สอดคล้องกับมาตรฐานทางวิศวกรรมขององค์กร
            </p>
          </Card>
        </SpotlightSection>

        <SpotlightSection startTime={307.9} endTime={321.9} sectionId="part1-automated-reasoning" padded={false}>
          <Card
            title="Automated Reasoning"
            variant="default"
            icon={<Binary className="w-5 h-5" />}
            iconBg="bg-emerald-500/15"
            iconColor="text-emerald-400"
          >
            <p className="text-sm leading-relaxed">
              ใช้คณิตศาสตร์และ Formal Verification เพื่อพิสูจน์ความปลอดภัยของโค้ด เช่นเดียวกับที่ AWS ใช้ตรวจสอบนโยบาย IAM ให้ลูกค้า
            </p>
          </Card>
        </SpotlightSection>
      </div>
    </Slide>,

    // =========================================================================
    // Slide 10: Section Divider (Part 2)
    // =========================================================================
    <SectionDividerSlide
      key="slide-10-section-2"
      partNumber="ส่วนที่ 2"
      theme="purple"
      title="Architecture & Rigor: You Build It, You Own It"
      subtitle="Cloud Architecture, Verification Debt & Quantum-Safe Future"
      description="การรับมือกับหนี้การตรวจสอบ (Verification Debt), นวัตกรรมสถาปัตยกรรม Serverless และความมั่นคงปลอดภัยยุคควอนตัม"
      leftTiming={{ startTime: 321.9, endTime: 327.5 }}
      topicTimings={[
        { startTime: 327.5, endTime: 331.0 },
        { startTime: 331.0, endTime: 335.0 },
        { startTime: 335.0, endTime: 338.5 },
        { startTime: 338.5, endTime: 342.7 },
      ]}
      topics={[
        {
          number: '01',
          title: 'เสาหลักที่ 4 & 5: Ownership และ The Polymath Builder',
          description: 'ป้องกัน Vibe Coding ด้วย Andon Cord และวิศวกรผู้ขยายความรู้รอบด้าน (T-Shaped to Polymath)',
        },
        {
          number: '02',
          title: 'Serverless Evolution & Firecracker MicroVMs',
          description: 'บทเรียน 10 ปี AWS Lambda, Hardware-Level Isolation และการลด Cold Start ด้วย SnapStart',
        },
        {
          number: '03',
          title: 'Scalability 10M Users & Frugal Architecture',
          description: 'ความเรียบง่ายคือหัวใจของความเสถียร ถอดบทเรียน Supercell, Fortnite, DynamoDB และ Rust',
        },
        {
          number: '04',
          title: 'Post-Quantum & Culture-Aware AI',
          description: 'ภัยคุกคาม Harvest Now Decrypt Later และความสำคัญของโมเดลภาษาประจำชาติ (Sovereign LLMs)',
        },
      ]}
    />,

    // =========================================================================
    // Slide 11: Pillar 4: Ownership & Verification Debt (Diagram Slide)
    // =========================================================================
    <Slide key="slide-11" isActive={true}>
      <SlideHeader
        section="ส่วนที่ 2: Architecture & Rigor"
        badge="เสาหลักที่ 4"
        badgeColor="purple"
        title="เสาหลักที่ 4: ความเป็นเจ้าของ และหนี้การตรวจสอบ (Ownership & Rigor)"
        subtitle="เครื่องมือ AI ไม่ได้รับผิดชอบระบบ แต่คุณคือผู้รับผิดชอบ ป้องกัน Vibe Coding ด้วยกลไก Andon Cord"
      />
      <div className="mt-6">
        <VerificationGateDiagram className="shadow-lg" />
      </div>
    </Slide>,

    // =========================================================================
    // Slide 12: Pillar 5: The Polymath Builder
    // =========================================================================
    <Slide key="slide-12" isActive={true}>
      <SlideHeader
        section="ส่วนที่ 2: Architecture & Rigor"
        badge="เสาหลักที่ 5"
        badgeColor="purple"
        title="เสาหลักที่ 5: นักพัฒนาพหูสูต (The Polymath Builder)"
        subtitle="องค์กรยุคใหม่ต้องให้รางวัลทั้งความลึก (Depth) และความกว้าง (Breadth) เพื่อเชื่อมโยงทั้งระบบ"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <SpotlightSection startTime={381.0} endTime={389.9} sectionId="part2-polymath-breadth" padded={false}>
          <div className="h-full flex flex-col justify-between rounded-3xl glass-panel p-6 sm:p-8 border border-slate-200/80 dark:border-white/10 overflow-hidden shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 mb-4">
                <Globe2 className="w-6 h-6 text-indigo-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Cross-Domain Fluency
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                เขียน Business Logic แต่เข้าใจ Database เพื่อเลี่ยง Full Table Scan เข้าใจ UI และเข้าใจพฤติกรรมข้อมูลที่ไหลผ่านทั้งระบบ
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
              <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">End-to-End Vision</span>
            </div>
          </div>
        </SpotlightSection>

        <SpotlightSection startTime={389.9} endTime={406.4} sectionId="part2-t-shaped-evolution" padded={false}>
          <div className="h-full flex flex-col justify-between rounded-3xl glass-panel p-6 sm:p-8 border border-slate-200/80 dark:border-white/10 overflow-hidden shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 mb-4">
                <Layers className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                From I-Shaped to π-Shaped
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                ก้าวข้ามการเป็นเพียงผู้เชี่ยวชาญจุดเดียว พัฒนาทักษะรอบด้านเพื่อเป็นผู้นำการออกแบบสถาปัตยกรรมที่แก้ปัญหาธุรกิจจริง
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
              <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">Broaden Your &lsquo;T&rsquo;</span>
            </div>
          </div>
        </SpotlightSection>

        <SpotlightSection startTime={406.4} endTime={415.0} sectionId="part2-invisible-work" padded={false}>
          <div className="h-full flex flex-col justify-between rounded-3xl glass-panel p-6 sm:p-8 border border-slate-200/80 dark:border-white/10 overflow-hidden shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 mb-4">
                <Award className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Pride in Invisible Work
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                งานเบื้องหลังกว่า 90% ไม่มีใครมองเห็น จงภูมิใจในความเป็นมืออาชีพ ความรู้ และความสามารถในการเลือกเครื่องมือที่ถูกต้องให้ลูกค้า
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
              <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">Professional Pride</span>
            </div>
          </div>
        </SpotlightSection>
      </div>
    </Slide>,

    // =========================================================================
    // Slide 13: Cloud Innovation: Event-Driven & Firecracker MicroVMs (Diagram Slide)
    // =========================================================================
    <Slide key="slide-13" isActive={true}>
      <SlideHeader
        section="ส่วนที่ 2: Architecture & Rigor"
        badge="นวัตกรรมคลาวด์"
        badgeColor="purple"
        title="นวัตกรรมคลาวด์: Event-Driven, Firecracker และ SnapStart"
        subtitle="จุดกำเนิด AWS Lambda จากปัญหาเครื่องว่าง สู่สถาปัตยกรรม MicroVM แยกความปลอดภัยและลด Cold Start"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-4 items-stretch">
        {/* Left: Serverless & Firecracker MicroVM Visual Card */}
        <SpotlightSection startTime={415.0} endTime={430.6} sectionId="part2-firecracker-visual" className="lg:col-span-4 flex flex-col" padded={false}>
          <div className="h-full rounded-2xl glass-panel border border-orange-500/20 overflow-hidden flex flex-col justify-between shadow-sm group">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <img
                src={`${basePath}/images/renaissanc-builder/serverless_firecracker_cloud.jpg`}
                alt="Firecracker MicroVM & Serverless Architecture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-cyan-300 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-md border border-cyan-500/30">
                  <Zap className="w-3 h-3 text-cyan-400" /> 5ms MicroVM Isolation
                </span>
              </div>
            </div>
            <div className="p-3.5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  10 ปีแห่งวิวัฒนาการ Serverless
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Firecracker พัฒนาด้วย Rust เพื่อรัน MicroVM น้ำหนักเบา ปลอดภัยระดับ Hardware Virtualization และแก้ Cold Start ด้วย SnapStart
                </p>
              </div>
              <div className="mt-2 pt-2 border-t border-slate-200/60 dark:border-white/10 text-[11px] font-semibold text-orange-500">
                Cold Start ลดจาก 15 วินาที → เหลือ 10 มิลลิวินาที
              </div>
            </div>
          </div>
        </SpotlightSection>

        {/* Right: Interactive Firecracker Architecture Diagram */}
        <SpotlightSection startTime={430.6} endTime={451.0} sectionId="part2-firecracker-diagram" className="lg:col-span-8 flex flex-col" padded={false}>
          <FirecrackerArchitectureDiagram className="shadow-lg h-full" />
        </SpotlightSection>
      </div>
    </Slide>,

    // =========================================================================
    // Slide 14: Scalability & Frugal Architecture
    // =========================================================================
    <Slide key="slide-14" isActive={true}>
      <SlideHeader
        section="ส่วนที่ 2: Architecture & Rigor"
        badge="สถาปัตยกรรมสเกล"
        badgeColor="purple"
        title="สถาปัตยกรรมรองรับ 10M ผู้ใช้ และ Frugal Architecture"
        subtitle="การเลือกใช้ NoSQL อย่าง DynamoDB และการย้ายสู่ Rust เพื่อประสิทธิภาพสูงสุด"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <SpotlightSection startTime={451.0} endTime={462.8} sectionId="part2-dayone-scale" padded={false}>
          <Card
            title="Day-One Scale (Supercell / Fortnite)"
            variant="default"
            icon={<Users2 className="w-5 h-5" />}
            iconBg="bg-blue-500/15"
            iconColor="text-blue-500"
          >
            <p className="text-sm leading-relaxed">
              เมื่อเปิดเกมวันแรก ผู้เล่น 10 ล้านคนจะเข้ามาพร้อมกัน หากระบบไม่พร้อม ผู้เล่นจะหายไปทันที จึงต้องเลือกเทคโนโลยีที่สเกลได้ตั้งแต่ Day 1
            </p>
          </Card>
        </SpotlightSection>

        <SpotlightSection startTime={462.8} endTime={469.0} sectionId="part2-dynamodb-nosql" padded={false}>
          <Card
            title="DynamoDB & Event-Driven"
            variant="gradient"
            icon={<Database className="w-5 h-5" />}
            iconBg="bg-amber-500/15"
            iconColor="text-amber-500"
          >
            <p className="text-sm leading-relaxed">
              Denormalize โครงสร้างข้อมูลเพื่อรองรับปริมาณทราฟฟิกมหาศาลโดยไม่ต้องเสียเวลารอการ Spin up เครื่องเซิร์ฟเวอร์แบบเดิม
            </p>
          </Card>
        </SpotlightSection>

        <SpotlightSection startTime={469.0} endTime={480.8} sectionId="part2-rust-efficiency" padded={false}>
          <Card
            title="Rust: 20,000 vs 250 rps"
            variant="default"
            icon={<Cpu className="w-5 h-5" />}
            iconBg="bg-orange-500/15"
            iconColor="text-orange-500"
          >
            <p className="text-sm leading-relaxed">
              การแปลงโค้ดจาก Ruby on Rails สู่ Rust ให้ประสิทธิภาพสูงกว่าเดิม 80 เท่า ประหยัดพลังงาน เป็นมิตรต่อสิ่งแวดล้อม และปลอดภัยเรื่อง Memory
            </p>
          </Card>
        </SpotlightSection>
      </div>
    </Slide>,

    // =========================================================================
    // Slide 15: Future Security: Post-Quantum Cryptography
    // =========================================================================
    <Slide key="slide-15" isActive={true}>
      <SlideHeader
        section="ส่วนที่ 2: Architecture & Rigor"
        badge="ความมั่นคงปลอดภัย"
        badgeColor="purple"
        title="ความมั่นคงปลอดภัยแห่งอนาคต: Post-Quantum Cryptography"
        subtitle="เตือนภัยกลยุทธ์ 'Harvest Now, Decrypt Later' ทำไมองค์กรต้องเริ่มใช้ Quantum-Safe Encryption ทันที"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 items-stretch">
        {/* Visual Card: Quantum Cryptography Shield */}
        <SpotlightSection startTime={480.8} endTime={492.4} sectionId="part2-quantum-visual" padded={false}>
          <div className="h-full rounded-2xl glass-panel border border-purple-500/30 overflow-hidden shadow-sm flex flex-col justify-between group">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <img
                src={`${basePath}/images/renaissanc-builder/post_quantum_cryptography.jpg`}
                alt="Post-Quantum Lattice Cryptography"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-purple-300 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-md border border-purple-500/30">
                  <Lock className="w-3 h-3 text-purple-400" /> Quantum Lattice Shield
                </span>
              </div>
            </div>
            <div className="p-3.5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  Lattice-Based Cryptography
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  โครงสร้างทางคณิตศาสตร์แบบแลตทิซที่ต้านทานการเจาะรหัสของ Shor&apos;s Algorithm บนควอนตัมคอมพิวเตอร์
                </p>
              </div>
              <div className="mt-2 pt-2 border-t border-slate-200/60 dark:border-white/10 text-[10.5px] font-mono text-purple-500">
                NIST PQC Standards (ML-KEM / ML-DSA)
              </div>
            </div>
          </div>
        </SpotlightSection>

        {/* Card 1: Threat */}
        <SpotlightSection startTime={492.4} endTime={505.9} sectionId="part2-quantum-threat" padded={false}>
          <div className="h-full flex flex-col justify-between rounded-2xl glass-panel p-5 border border-rose-500/20 bg-rose-500/5 overflow-hidden shadow-sm">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                <h3 className="text-base font-bold text-rose-600 dark:text-rose-400">
                  Harvest Now, Decrypt Later
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                ผู้โจมตีกำลังดักขโมยข้อมูลที่เข้ารหัสในปัจจุบัน (ลายนิ้วมือ, ชีวมิติ, ข้อมูลสุขภาพ) กักเก็บไว้เพื่อรอถอดรหัสด้วยควอนตัมคอมพิวเตอร์ในอนาคต
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-rose-200 dark:border-white/5">
              <span className="text-[11px] font-semibold text-rose-600 dark:text-rose-400">
                ลายนิ้วมือและพันธุกรรมเปลี่ยนใหม่ไม่ได้เหมือนรหัสผ่าน
              </span>
            </div>
          </div>
        </SpotlightSection>

        {/* Card 2: Action */}
        <SpotlightSection startTime={505.9} endTime={514.8} sectionId="part2-quantum-safe" padded={false}>
          <div className="h-full flex flex-col justify-between rounded-2xl glass-panel p-5 border border-emerald-500/20 bg-emerald-500/5 overflow-hidden shadow-sm">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <h3 className="text-base font-bold text-emerald-600 dark:text-emerald-400">
                  Quantum-Safe Encryption Today
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                AWS และผู้ให้บริการคลาวด์เปิดให้ใช้มาตรฐาน Quantum-Safe แล้วตั้งแต่วันนี้ อย่ารอจนควอนตัมมาถึง เพราะข้อมูลในอดีตจะกลายเป็นเหยื่อทันที
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-200 dark:border-white/5">
              <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                Action: ตรวจสอบและอัปเกรดมาตรฐานการเข้ารหัสข้อมูลสำคัญ
              </span>
            </div>
          </div>
        </SpotlightSection>
      </div>
    </Slide>,

    // =========================================================================
    // Slide 16: Culture-Aware AI & Local Intelligence
    // =========================================================================
    <Slide key="slide-16" isActive={true}>
      <SlideHeader
        section="ส่วนที่ 2: Architecture & Rigor"
        badge="อนาคต AI"
        badgeColor="purple"
        title="Culture-Aware AI: ภาษาคือวัฒนธรรม ไม่ใช่แค่ตัวอักษร"
        subtitle="โมเดลภาษาในแต่ละภูมิภาคสร้างความไว้วางใจได้ดีกว่าการแปลตรงตัวจากโมเดลระดับโลก"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 items-stretch">
        {/* Visual Card: Culture-Aware AI Art */}
        <SpotlightSection startTime={514.8} endTime={524.4} sectionId="part2-culture-visual" padded={false} className="h-full flex flex-col">
          <div className="h-full flex-1 rounded-2xl glass-panel border border-amber-500/30 overflow-hidden shadow-sm flex flex-col justify-between group">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <img
                src={`${basePath}/images/renaissanc-builder/culture_aware_ai.jpg`}
                alt="Culture-Aware AI & Local Heritage"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-amber-300 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-md border border-amber-500/30">
                  <Globe2 className="w-3 h-3 text-amber-400" /> Sovereign Cultural AI
                </span>
              </div>
            </div>
            <div className="p-3.5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  Language is Cultural Context
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  การสื่อสารที่ผสานมารยาท ลำดับความสัมพันธ์ และภูมิปัญญาเฉพาะถิ่น ไม่สามารถทดแทนได้ด้วยการแปลคำตรงตัว
                </p>
              </div>
              <div className="mt-2 pt-2 border-t border-slate-200/60 dark:border-white/10 text-[10.5px] font-semibold text-amber-600 dark:text-amber-400">
                Local Wisdom × Deep Nuance
              </div>
            </div>
          </div>
        </SpotlightSection>

        {/* Card 1: Nuance & Etiquette */}
        <SpotlightSection startTime={524.4} endTime={535.5} sectionId="part2-culture-language" padded={false} className="h-full flex flex-col">
          <Card
            title="บริบทวัฒนธรรมที่ลึกซึ้ง (Nuance & Etiquette)"
            variant="default"
            className="h-full flex-1 flex flex-col justify-between"
          >
            <div className="flex-1 flex flex-col justify-between">
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                การแปลภาษาตรงตัวจากโมเดลต่างประเทศอาจขัดต่อมารยาทท้องถิ่น เช่น วัฒนธรรมการให้ทิป ความสัมพันธ์ทางสังคม หรือการสื่อสารที่มีความเคารพตามบริบทของเอเชีย
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-white/10 text-[10.5px] font-semibold text-amber-600 dark:text-amber-400">
                Context-Aware × Etiquette
              </div>
            </div>
          </Card>
        </SpotlightSection>

        {/* Card 2: Sovereign & Trust */}
        <SpotlightSection startTime={535.5} endTime={549.0} sectionId="part2-sovereign-llms" padded={false} className="h-full flex flex-col">
          <Card
            title="การเติบโตของ Local LLMs ทั่วโลก"
            variant="gradient"
            className="h-full flex-1 flex flex-col justify-between"
          >
            <div className="flex-1 flex flex-col justify-between">
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                การพัฒนาโมเดลภาษาประจำชาติ เช่น ในไทย (SCB 10X), สิงคโปร์ (Sea-Lion), ญี่ปุ่น และเกาหลีใต้ ช่วยสร้างระบบที่คนในประเทศไว้วางใจและใช้งานได้อย่างเป็นธรรมชาติ
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-white/10 text-[10.5px] font-semibold text-amber-600 dark:text-amber-400">
                National Sovereign AI × Trust
              </div>
            </div>
          </Card>
        </SpotlightSection>
      </div>
    </Slide>,

    // =========================================================================
    // Slide 17: Summary & Vision Quote
    // =========================================================================
    <Slide key="slide-17" isActive={true}>
      <div className="max-w-4xl mx-auto w-full space-y-3 sm:space-y-4">
        <SlideHeader
          section="บทสรุป"
          badge="ข้อคิดส่งท้าย"
          badgeColor="amber"
          title="Keep Calm and Now Go Build"
          subtitle="ข้อคิดเพื่อการเติบโตอย่างมืออาชีพ และช่องทางรับฟังพอดแคสต์วิเคราะห์เจาะลึก"
        />
        <SpotlightSection startTime={549.0} endTime={570.1} sectionId="part2-quote-werner">
          <QuoteBox
            quote="We have the absolute best job in the world. We can go to work each day and create something brand new. Keep calm and now go build."
            author="Dr. Werner Vogels"
            role="Vice President & Chief Technology Officer"
            company="Amazon.com / AWS"
            compact={true}
          />
        </SpotlightSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 mt-3 sm:mt-4 items-stretch">
          {renaissancBuilderPodcasts.map((podcast, idx) => (
            <SpotlightSection key={podcast.episode} startTime={570.1} endTime={579.6} sectionId={`summary-podcast-${idx + 1}`} showBadge={false} className="h-full flex flex-col">
              <PodcastCard {...podcast} className="h-full" />
            </SpotlightSection>
          ))}
        </div>
      </div>
    </Slide>,
  ];
}

export function getRenaissancBuilderSlidesMeta() {
  return renaissancBuilderSlidesMeta;
}
