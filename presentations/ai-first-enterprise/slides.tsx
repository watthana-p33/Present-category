'use client';

import React from 'react';
import { Slide } from '@/components/presentation/deck';
import {
  SlideHeader,
  QuoteBox,
  AgendaCard,
  Card,
  SectionDividerSlide,
  PodcastCard,
} from '@/components/presentation/content';
import { SpotlightSection } from '@/components/presentation/narration';
import {
  Rocket,
  Database,
  ShieldCheck,
  Brain,
  Target,
  Network,
  FlaskConical,
  Cpu,
  Building2,
  Users2,
  TrendingUp,
  Layers,
  Globe2,
  Sparkles,
  ShieldAlert,
} from 'lucide-react';
import {
  MultiAgentDefenseDiagram,
  DataSovereigntyDiagram,
  ThreePillarsDiagram,
  DiamondTrapDiagram,
} from '@/components/diagrams/ai-first-enterprise';
import { aiFirstEnterprisePodcasts } from './data';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export {
  aiFirstEnterpriseSlidesMeta,
  getAIFirstEnterpriseSlidesMeta,
} from './data';

export function getAIFirstEnterpriseSlides(): React.ReactNode[] {
  return [
    // Slide 1: Cover
    <Slide key="slide-1" isActive={true}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center  mx-auto">
        {/* Left: Presentation Branding & Title */}
        <SpotlightSection
          startTime={4.48}
          endTime={24.4}
          className="lg:col-span-6 flex flex-col justify-center text-left p-5 sm:p-6 rounded-3xl glass-panel-subtle border border-slate-200/60 dark:border-white/10 shadow-xs"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-200 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-400/30 shadow-xs backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-blue-600 dark:text-cyan-400 animate-pulse" />
              Executive Presentation
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            อนาคตขององค์กรยุค AI <br />
            <span className="text-xl sm:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-600 dark:from-cyan-400 dark:via-indigo-300 dark:to-fuchsia-400 font-bold block mt-1">
              The AI-First Enterprise
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3.5">
            เจาะลึกวิสัยทัศน์ แนวโน้มเทคโนโลยี และการปรับตัวที่องค์กรต้องทำเพื่อคว้าชัยชนะในยุคแห่งความชาญฉลาด
          </p>
          <div className="flex flex-wrap gap-2 text-[10px] sm:text-[11px] font-semibold text-slate-600 dark:text-slate-300">
            <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-xs">
              ⚡ Beyond Efficiency Trap
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-xs">
              🏢 Mission-Driven Teams
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-xs">
              🛡️ Agentic AI Defense
            </span>
          </div>
        </SpotlightSection>

        {/* Right: Hero Visual Card with Generated AI Enterprise Architecture */}
        <SpotlightSection
          startTime={9.2}
          endTime={24.4}
          className="lg:col-span-6"
        >
          <div className="w-full rounded-2xl glass-panel border border-slate-200/80 dark:border-white/15 overflow-hidden shadow-md shadow-blue-500/10 dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] relative group">
            <div className="relative aspect-[16/10] w-full overflow-hidden max-h-[306.63px]">
              <img
                src={`${basePath}/images/ai-first-enterprise/ai_enterprise_cover.jpg`}
                alt="The AI-First Enterprise Architecture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent flex items-end p-4">
                <div className="text-left">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/20 text-white backdrop-blur-md mb-1 border border-white/20">
                    <Cpu className="w-3 h-3 text-cyan-400" /> AI Transformation
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white drop-shadow-md">
                    From Automation to Cognitive Enterprise
                  </h3>
                  <p className="text-[11px] text-slate-300 drop-shadow line-clamp-2">
                    การผสานโมเดลปัญญาประดิษฐ์เข้ากับหัวใจของกลยุทธ์และการตัดสินใจทางธุรกิจ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SpotlightSection>
      </div>
    </Slide>,

    // Slide 2: Agenda
    <Slide key="slide-2" isActive={true}>
      <SlideHeader
        section="บทนำ"
        badge="ภาพรวม"
        badgeColor="blue"
        title="หัวข้อการนำเสนอ (Agenda)"
        subtitle="โครงสร้างสาระสำคัญ 3 ส่วนหลักในการปฏิรูปองค์กรสู่ความสำเร็จ"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 mx-auto">
        <SpotlightSection startTime={28.72} endTime={38.0}>
          <AgendaCard
            partNumber="ส่วนที่ 1"
            title="The AI-First Enterprise"
            description="ก้าวข้ามกับดักประสิทธิภาพ (Efficiency Trap), การปรับโครงสร้างองค์กร และ 5 ทักษะสำคัญที่จำเป็นในยุค AI"
            icon={<Rocket className="w-5 h-5" />}
            iconBgColor="bg-blue-50 dark:bg-blue-500/15"
            iconTextColor="text-blue-600 dark:text-cyan-400"
            layout="column"
          />
        </SpotlightSection>

        <SpotlightSection startTime={38.0} endTime={47.0}>
          <AgendaCard
            partNumber="ส่วนที่ 2"
            title="Building a Solid Foundation"
            description="อธิปไตยทางดิจิทัล (Digital Sovereignty), การจัดเก็บข้อมูลท้องถิ่น และ 3 เสาหลักในการวางรากฐานขับเคลื่อน AI"
            icon={<Database className="w-5 h-5" />}
            iconBgColor="bg-emerald-50 dark:bg-emerald-500/15"
            iconTextColor="text-emerald-600 dark:text-emerald-400"
            layout="column"
          />
        </SpotlightSection>

        <SpotlightSection startTime={47.0} endTime={57.4}>
          <AgendaCard
            partNumber="ส่วนที่ 3"
            title="The Agentic AI Landscape"
            description="การมาถึงของ AI Agents, ระบบความปลอดภัยเชิงรุกแบบต่อเนื่อง (Active Defense) และแนวปฏิบัติที่ดีสำหรับระดับองค์กร"
            icon={<ShieldCheck className="w-5 h-5" />}
            iconBgColor="bg-purple-50 dark:bg-purple-500/15"
            iconTextColor="text-purple-600 dark:text-fuchsia-400"
            layout="column"
          />
        </SpotlightSection>
      </div>
    </Slide>,

    // Slide 3: Section 1 Divider
    <SectionDividerSlide
      key="slide-3-section-1"
      partNumber="ส่วนที่ 1"
      theme="blue"
      title="The AI-First Enterprise"
      subtitle="ก้าวข้ามกับดักประสิทธิภาพ การปรับโครงสร้างองค์กร และ 5 ทักษะสำคัญแห่งอนาคต"
      description="สำรวจการเปลี่ยนผ่านจากเพียงการใช้ AI เพื่อลดเวลาทำงาน สู่การออกแบบโมเดลธุรกิจและวัฒนธรรมองค์กรใหม่ที่ปลดปล่อยศักยภาพสูงสุดของพนักงานทุกคน"
      leftTiming={{ startTime: 57.4, endTime: 64.0 }}
      topicTimings={[
        { startTime: 64.0, endTime: 67.0 },
        { startTime: 67.0, endTime: 71.0 },
        { startTime: 71.0, endTime: 74.9 },
      ]}
      topics={[
        {
          number: '01',
          title: 'ก้าวข้าม “กับดักประสิทธิภาพ” (The Efficiency Trap)',
          description: 'เป้าหมายที่แท้จริงไม่ใช่แค่งานเร็วขึ้น แต่คือการสร้างคุณค่าทางธุรกิจใหม่',
        },
        {
          number: '02',
          title: 'Democratization of Tools & Mission-Driven Teams',
          description: 'เครื่องมือระดับสูงสำหรับทุกคน การปรับสู่ Mission-Driven Teams และข้อควรระวังกับดักทรงเพชร (The Diamond Trap)',
        },
        {
          number: '03',
          title: '5 ทักษะสำคัญสำหรับบุคลากรในยุค AI',
          description: 'Learning & Unlearning, Problem Framing, Systems Thinking, Curiosity และ AI-Literate พร้อมตัวอย่างจริง',
        },
      ]}
    />,

    // Slide 4: Topic 1
    <Slide key="slide-4" isActive={true}>
      <SlideHeader
        section="ส่วนที่ 1: The AI-First Enterprise"
        badge="หัวข้อที่ 1"
        badgeColor="blue"
        title="ก้าวข้าม “กับดักประสิทธิภาพ” (The Efficiency Trap)"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch mx-auto">
        <SpotlightSection
          startTime={74.9}
          endTime={100.0}
          className="glass-panel p-5 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 flex flex-col justify-between shadow-xs"
        >
          <div className="space-y-3.5 text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm flex flex-col justify-between h-full">
            <div>
              <p className="mb-2">
                เป้าหมายที่แท้จริงของ AI{' '}
                <strong className="text-blue-600 dark:text-cyan-400 font-bold">ไม่ใช่แค่ทำให้งานเดิมเร็วขึ้น</strong>{' '}
                แต่คือการคิดค้นกลยุทธ์ใหม่และสร้างคุณค่าเชิงธุรกิจที่ไม่เคยทำได้มาก่อน
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                หากเราลดเวลาทำงานจาก 2 ชั่วโมงเหลือเพียง 35 วินาที แต่เวลาที่ได้คืนมากลับถูกระบบเดิมดูดซับไปทำงานหยุมหยิม องค์กรก็จะไม่สามารถก้าวกระโดดได้
              </p>
            </div>
            <QuoteBox
              quote="I used to spend 2 hours. Now it takes me 35 seconds... คำถามคือสิ่งนี้สร้างคุณค่าที่แท้จริงหรือยัง?"
              author="Tony Loco"
              role="CEO, United Rentals"
              variant="blue"
            />
          </div>
        </SpotlightSection>

        <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 flex flex-col justify-center gap-4 shadow-sm dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]">
          <SpotlightSection startTime={100.0} endTime={104.2} showBadge={false}>
            <div className="glass-panel-subtle p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-white/10">
              <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Old Mindset</div>
              <div className="font-bold text-slate-900 dark:text-white text-base">Speed & Cost Cutting</div>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">ใช้ AI ทำงานประจำเดิมๆ ให้เร็วขึ้นแต่ไม่ได้โมเดลธุรกิจใหม่</p>
            </div>
          </SpotlightSection>
          <div className="text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-fuchsia-600 dark:from-cyan-400 dark:to-fuchsia-400 text-xs tracking-widest">VS</div>
          <SpotlightSection startTime={104.2} endTime={108.2} showBadge={false}>
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-4 sm:p-5 rounded-2xl border border-blue-400/30 dark:border-cyan-400/30 shadow-sm dark:shadow-[0_0_25px_rgba(59,130,246,0.25)]">
              <div className="text-[10px] font-semibold text-blue-200 dark:text-cyan-200 uppercase tracking-wider mb-1">AI-First Mindset</div>
              <div className="font-bold text-white text-base">Value & Business Model Innovation</div>
              <p className="text-blue-100/90 text-xs sm:text-sm mt-1">ปลดปล่อยศักยภาพทีมเพื่อสร้างคุณค่าและผลิตภัณฑ์ใหม่</p>
            </div>
          </SpotlightSection>
        </div>
      </div>
    </Slide>,

    // Slide 5: Topic 2
    <Slide key="slide-5" isActive={true}>
      <SlideHeader
        section="ส่วนที่ 1: The AI-First Enterprise"
        badge="หัวข้อที่ 2"
        badgeColor="blue"
        title="เครื่องมือสำหรับทุกคน & การปรับโครงสร้างองค์กร"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-stretch mx-auto">
        {/* Left Column: Democratization of Tools */}
        <SpotlightSection startTime={108.2} endTime={120.0} className="flex flex-col">
          <div className="glass-panel rounded-2xl border border-pink-200/80 dark:border-fuchsia-500/20 shadow-xs overflow-hidden group flex flex-col justify-between h-full">
            <div className="relative aspect-[3/1] w-full overflow-hidden max-h-28">
              <img
                src={`${basePath}/images/ai-first-enterprise/ai_team_collaboration.jpg`}
                alt="Democratization of Tools & Mission-Driven Teams"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2.5">
                <span className="text-[10px] font-bold text-white px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20">
                  Natural Language × Human-AI Synergy
                </span>
              </div>
            </div>
            <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-between">
              <div className="mb-2">
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-5 h-5 bg-pink-50 text-pink-600 border border-pink-200 dark:bg-fuchsia-500/15 dark:text-fuchsia-300 dark:border-fuchsia-400/30 rounded-lg flex items-center justify-center shadow-xs">
                    <Users2 className="w-3 h-3" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">Democratization of Tools</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                  AI ทำให้พนักงานทุกแผนกสร้างสรรค์งานระดับผู้เชี่ยวชาญได้ผ่านภาษาธรรมชาติ (Natural Language)
                </p>
              </div>
              <QuoteBox
                quote="ตอนนี้ฉันดูเหมือนแฮกเกอร์เลย!"
                author="เสียงสะท้อนจากพนักงานเมื่อเริ่มใช้ AI ช่วยงาน"
                variant="purple"
                compact={true}
              />
            </div>
          </div>
        </SpotlightSection>

        {/* Right Column: Mission-Driven Team */}
        <SpotlightSection startTime={120.0} endTime={134.1} className="flex flex-col">
          <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-50 text-blue-600 border border-blue-200 dark:bg-cyan-500/15 dark:text-cyan-300 dark:border-cyan-400/30 rounded-lg flex items-center justify-center shadow-xs">
                  <Rocket className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  เลิกยึดติดกับ Headcount สู่ Mission-Driven Team
                </h3>
              </div>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 dark:text-cyan-400 font-bold">•</span>
                  <span>AI ช่วยให้ทีมขนาดกะทัดรัด (2–10 คน) สร้างผลลัพธ์ที่ยิ่งใหญ่ได้เท่ากับหรือดีกว่าทีมขนาดใหญ่ในอดีต</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 dark:text-cyan-400 font-bold">•</span>
                  <span>ยุบโครงสร้างที่เทอะทะ รวมกลุ่มคนเป็นทีมเล็กขับเคลื่อนด้วยเป้าหมายและภารกิจที่ชัดเจน</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 dark:text-cyan-400 font-bold">•</span>
                  <span>เน้นความคล่องตัว (Agility) และ Autonomous Execution ลดขั้นตอนการตัดสินใจที่ซับซ้อน</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-100 dark:border-cyan-500/20 text-xs text-blue-900 dark:text-cyan-200">
              <span className="font-semibold">Key Mindset:</span> วัดผลลัพธ์จากคุณค่าทางธุรกิจ (Business Value) มากกว่าการนับจำนวนคน
            </div>
          </div>
        </SpotlightSection>
      </div>
    </Slide>,

    // Slide 6: Deep-dive Caution (1/2): The Diamond Trap Concept & Strategy
    <Slide key="slide-diamond-trap-concept" isActive={true}>
      <SlideHeader
        section="ส่วนที่ 1: The AI-First Enterprise"
        badge="เจาะลึกข้อควรระวัง (1/2)"
        badgeColor="amber"
        title="กับดักโครงสร้างองค์กรทรงเพชร (The Diamond Trap)"
        subtitle="ทำไมการปลดพนักงาน Junior เพื่อแทนด้วย AI จึงเป็นความเสี่ยงระยะยาวต่อความยั่งยืนขององค์กร"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-6xl mx-auto w-full">
        {/* Left Column: 3D Visual Concept */}
        <SpotlightSection
          startTime={134.1}
          endTime={158.0}
          className="lg:col-span-5 flex flex-col"
        >
          <div className="w-full h-full rounded-3xl glass-panel border border-amber-200/80 dark:border-amber-500/20 overflow-hidden relative group flex flex-col justify-end min-h-[300px]">
            <img
              src={`${basePath}/images/ai-first-enterprise/diamond_trap_talent_pipeline.jpg`}
              alt="Diamond Trap vs Sustainable Talent Pipeline"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="relative z-10 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent p-5 backdrop-blur-[2px]">
              <div className="flex items-center gap-1.5 mb-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/30 text-amber-300 border border-amber-400/30">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-400" /> Talent Succession Crisis
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">
                วิกฤตการขาดช่วงของสายธารบุคลากร
              </h4>
              <p className="text-xs text-slate-200 font-medium leading-relaxed">
                การมอง Junior เป็นเพียงต้นทุนที่ลดได้ด้วย AI จะทำลายฐานรากและส่งผลให้เกิดสุญญากาศผู้นำในอีก 3–5 ปีข้างหน้า
              </p>
            </div>
          </div>
        </SpotlightSection>

        {/* Right Column: Comparative Strategic Cards */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-3.5">
          <SpotlightSection startTime={134.1} endTime={158.0}>
            <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-rose-200/80 dark:border-rose-500/20 bg-rose-50/50 dark:bg-rose-950/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-md bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-rose-900 dark:text-rose-200">
                  วิกฤตสุญญากาศผู้นำ (Leadership Vacuum)
                </h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
                หากตัด Junior วันนี้ จะไม่มีใครสั่งสมประสบการณ์และเรียนรู้วัฒนธรรมองค์กรเพื่อเติบโตเป็น Mid & Senior ในอนาคต ส่งผลให้คนระดับกลางแบกงานล้นมือจนสูญเสียความสามารถในการคิดเชิงกลยุทธ์
              </p>
              <div className="pt-2.5 border-t border-rose-200/60 dark:border-rose-500/20 text-xs font-medium text-rose-700 dark:text-rose-300">
                ผลกระทบระยะยาว: ต้นทุนจ้างภายนอกพุ่งสูง และองค์กรสูญเสียความสามารถในการส่งต่อวัฒนธรรม
              </div>
            </div>
          </SpotlightSection>

          <SpotlightSection startTime={158.0} endTime={169.1}>
            <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-emerald-200/80 dark:border-emerald-500/20 bg-emerald-50/50 dark:bg-emerald-950/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-emerald-900 dark:text-emerald-200">
                  ทางออกที่ยั่งยืน: AI-Augmented Apprenticeship
                </h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
                เปลี่ยนบทบาท Junior ให้เป็นผู้ขับเคลื่อน AI (AI-Empowered) โดยมี Senior คอยโค้ชชิ่งและให้คำแนะนำ เพื่อย่นระยะเวลาการเรียนรู้งานพื้นฐาน และพัฒนาทักษะการตัดสินใจได้เร็วขึ้น 2 เท่า
              </p>
              <div className="pt-2.5 border-t border-emerald-200/60 dark:border-emerald-500/20 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                ข้อได้เปรียบ: สายการผลิตผู้นำ (Talent Pipeline) มีความต่อเนื่องและพร้อมรับมือการแข่งขัน
              </div>
            </div>
          </SpotlightSection>

          {/* Navigation hint */}
          <div className="p-2.5 rounded-xl bg-amber-50/80 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-400/20 text-xs text-amber-900 dark:text-amber-200 flex items-center justify-between">
            <span className="font-medium">ดูผังสถาปัตยกรรมเปรียบเทียบ Topology ในสไลด์ถัดไป</span>
            <span className="text-[11px] font-semibold text-amber-700 dark:text-amber-300">Next: Architecture Diagram →</span>
          </div>
        </div>
      </div>
    </Slide>,

    // Slide 7: Deep-dive Caution (2/2): Dedicated Topology & Flow Architecture Diagram
    <Slide key="slide-diamond-trap-diagram" isActive={true}>
      <SlideHeader
        section="ส่วนที่ 1: The AI-First Enterprise"
        badge="เจาะลึกข้อควรระวัง (2/2)"
        badgeColor="amber"
        title="สถาปัตยกรรมโครงสร้างทีม: Diamond Trap vs AI-Augmented Pyramid"
        subtitle="เปรียบเทียบ Topology สายการผลิตบุคลากร (Talent Flow) และจุดเสี่ยงเชิงโครงสร้าง"
      />
      <div className="max-w-6xl mx-auto w-full space-y-3">
        {/* Full Dedicated Architecture Diagram */}
        <DiamondTrapDiagram />

        {/* 2 Clear Comparative Summary Takeaways */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          <SpotlightSection startTime={169.1} endTime={182.0}>
            <div className="p-4 sm:p-5 rounded-2xl border border-rose-200/80 dark:border-rose-500/20 glass-panel bg-rose-50/40 dark:bg-rose-950/15 h-full">
              <div className="flex items-center gap-1.5 mb-1.5 text-xs font-bold text-rose-800 dark:text-rose-300">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                โครงสร้างทรงเพชร (Hollow Diamond Shape)
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                การตัดตำแหน่ง Junior ทำให้เกิดภาวะคอขวดที่ชั้น Mid-level ขาดคนรับช่วงงานพื้นฐาน และทำลายเส้นทางเติบโตสู่ระดับ Senior
              </p>
            </div>
          </SpotlightSection>

          <SpotlightSection startTime={182.0} endTime={199.8}>
            <div className="p-4 sm:p-5 rounded-2xl border border-emerald-200/80 dark:border-emerald-500/20 glass-panel bg-emerald-50/40 dark:bg-emerald-950/15 h-full">
              <div className="flex items-center gap-1.5 mb-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                พีระมิดยุคใหม่ (AI-Augmented Talent Engine)
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                รักษาฐาน Junior ให้แข็งแกร่งด้วย AI Co-pilot พร้อมระบบ Mentorship ทำให้สายการผลิตผู้นำเติบโตอย่างต่อเนื่องและมั่นคง
              </p>
            </div>
          </SpotlightSection>
        </div>
      </div>
    </Slide>,

    // Slide 8: Topic 3
    <Slide key="slide-8-skills" isActive={true}>
      <SlideHeader
        section="ส่วนที่ 1: The AI-First Enterprise"
        badge="หัวข้อที่ 3"
        badgeColor="blue"
        title="5 ทักษะจำเป็นสำหรับพนักงานในยุค AI"
        subtitle="ทักษะที่ AI ทดแทนไม่ได้ และเป็นตัวชี้วัดความสามารถในการแข่งขันของบุคลากร"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 mx-auto">
        <SpotlightSection startTime={205.8} endTime={211.6} className="lg:col-span-2">
          <Card
            icon={<Brain className="w-4 h-4" />}
            iconBg="bg-blue-50 dark:bg-blue-500/15"
            iconColor="text-blue-600 dark:text-cyan-400"
            tag="Skill 1"
            title="Learning & Unlearning Agility"
            description="พร้อมเรียนรู้เครื่องมือใหม่ตลอดเวลา และกล้าทิ้ง Workflow เดิมที่ล้าสมัย ตื่นมาพร้อม mindset ที่พร้อมรีเซ็ตวิธีการทำงาน"
            example="จากเดิมเสียเวลาเขียนโค้ดหรือร่างเอกสารแบบแมนนวล หันมาสั่งการด้วย AI Prompt ช่วยขึ้นโครงร่าง แล้วโฟกัสกับการปรับจูนให้ตรงเป้าหมาย"
            compact={true}
          />
        </SpotlightSection>
        <SpotlightSection startTime={211.6} endTime={219.6} className="lg:col-span-2">
          <Card
            icon={<Target className="w-4 h-4" />}
            iconBg="bg-indigo-50 dark:bg-indigo-500/15"
            iconColor="text-indigo-600 dark:text-indigo-400"
            tag="Skill 2"
            title="Problem Framing & Judgment"
            description="เมื่อทุกคนเข้าถึง AI ได้เหมือนกัน ความต่างคือใคร 'ตั้งโจทย์ได้เฉียบคม' และใช้ 'ดุลยพินิจ' ตรวจสอบความสมเหตุสมผลได้ดีกว่า"
            example="แทนที่จะสั่งแค่ 'เขียนสรุป' เปลี่ยนเป็นระบุมุมมอง บริบทข้อจำกัด และใช้ดุลยพินิจตรวจจับจุดที่ AI อาจสร้างข้อมูลเท็จ (Hallucination)"
            compact={true}
          />
        </SpotlightSection>
        <SpotlightSection startTime={219.6} endTime={225.6} className="lg:col-span-2">
          <Card
            icon={<Network className="w-4 h-4" />}
            iconBg="bg-emerald-50 dark:bg-emerald-500/15"
            iconColor="text-emerald-600 dark:text-emerald-400"
            tag="Skill 3"
            title="Complex Systems Thinking"
            description="มองเห็นภาพรวมทั้งระบบ (End-to-End) และใช้ AI เข้ามาช่วยเชื่อมต่อความสัมพันธ์ของข้อมูลที่ซับซ้อนข้ามสายงาน"
            example="เชื่อมโยงข้อมูล Sales, Inventory และ Logistics เข้าด้วยกัน เพื่อให้ AI ช่วยวิเคราะห์และพยากรณ์ความต้องการสินค้าล่วงหน้าทั้งห่วงโซ่"
            compact={true}
          />
        </SpotlightSection>
        <SpotlightSection startTime={225.6} endTime={231.6} className="lg:col-span-3">
          <Card
            icon={<FlaskConical className="w-4 h-4" />}
            iconBg="bg-amber-50 dark:bg-amber-500/15"
            iconColor="text-amber-600 dark:text-amber-400"
            tag="Skill 4"
            title="Curiosity & Experimentation"
            description="กระหายใคร่รู้และกล้าทดลอง Use Cases ใหม่ๆ ด้วยตัวเองอย่างต่อเนื่อง ไม่รอให้ฝ่ายบริหารหรือ IT คอยป้อนคำสั่งฝ่ายเดียว"
            example="ริเริ่มนำ AI มาทดลองสร้าง Automated Workflow สรุปประชุม หรือทำคู่มือ Onboarding ประจำทีม ช่วยลดภาระงานรูทีนได้ด้วยตัวเอง"
            compact={true}
          />
        </SpotlightSection>
        <SpotlightSection startTime={231.6} endTime={239.0} className="lg:col-span-3">
          <Card
            icon={<Cpu className="w-4 h-4" />}
            iconBg="bg-rose-50 dark:bg-rose-500/15"
            iconColor="text-rose-600 dark:text-rose-400"
            tag="Skill 5"
            title="AI-Literate & Symbiosis"
            description="เข้าใจทั้งขีดจำกัดและความปลอดภัยของ AI อย่างถ่องแท้ (Data Privacy, Bias) รู้วิธีทำงานร่วมกันแบบ Human-in-the-Loop"
            example="ไม่นำข้อมูลความลับหรือ PII ลูกค้าใส่ลงโมเดลสาธารณะ แต่ใช้ AI วิเคราะห์ข้อมูลที่กรองแล้ว และมนุษย์เป็นผู้เคาะการตัดสินใจขั้นสุดท้าย"
            compact={true}
          />
        </SpotlightSection>
      </div>
    </Slide>,

    // Slide 9: Section 2 Divider
    <SectionDividerSlide
      key="slide-9-section-2"
      partNumber="ส่วนที่ 2"
      theme="emerald"
      title="Building a Solid Foundation"
      subtitle="อธิปไตยทางดิจิทัล การบริหารข้อมูลท้องถิ่น และเสาหลักเทคโนโลยี"
      description="รากฐานที่แข็งแกร่งคือหัวใจของความสำเร็จ การวางระบบโครงสร้างพื้นฐาน การคุ้มครองข้อมูลอธิปไตย และการเลือกใช้เทคโนโลยีที่เชื่อมโยงกับโลกความเป็นจริง"
      leftTiming={{ startTime: 239.0, endTime: 247.0 }}
      topicTimings={[
        { startTime: 247.0, endTime: 251.0 },
        { startTime: 251.0, endTime: 256.0 },
      ]}
      topics={[
        {
          number: '01',
          title: 'อธิปไตยทางดิจิทัลและข้อมูลท้องถิ่น (Digital Sovereignty)',
          description: 'ข้อมูลคือน้ำมันใหม่ที่ต้องกลั่นกรองและจัดเก็บในท้องถิ่นเพื่อความปลอดภัยและปฏิบัติตามกฎหมาย',
        },
        {
          number: '02',
          title: 'สามเสาหลัก & กรณีศึกษาความสำเร็จจริง (Real-World Impact)',
          description: 'Infrastructure, Foundation Models, Ecosystem และตัวอย่างความสำเร็จจากองค์กรชั้นนำ',
        },
      ]}
    />,

    // Slide 10: Topic 4 - Part 1: Data Strategy & Local Refinery
    <Slide key="slide-10-sovereignty" isActive={true}>
      <SlideHeader
        section="ส่วนที่ 2: Building a Solid Foundation"
        badge="หัวข้อที่ 1 (1/2)"
        badgeColor="green"
        title="อธิปไตยทางดิจิทัลและข้อมูลท้องถิ่น"
        subtitle="Digital Sovereignty & Localized Data Management"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch max-w-6xl mx-auto">
        {/* Left Column: Data Strategy Content */}
        <SpotlightSection
          startTime={256.0}
          endTime={272.0}
          className="lg:col-span-6 flex flex-col justify-between glass-panel bg-emerald-50/70 dark:bg-emerald-500/10 p-5 sm:p-6 rounded-3xl border border-emerald-200/80 dark:border-emerald-400/30 shadow-xs"
        >
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider font-mono">
                Data Strategy & Sovereign AI
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug">
              ข้อมูลคือน้ำมันใหม่ (Data is the new oil)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3.5">
              เมื่อความต้องการพลังประมวลผลพุ่งสูงขึ้น องค์กรต้องมี <strong className="text-emerald-700 dark:text-emerald-300 font-semibold">โรงกลั่นข้อมูลของตนเอง</strong> เพื่อควบคุมความปลอดภัยและคงกรรมสิทธิ์ในข้อมูล
            </p>

            {/* 3 Structured Strategy Feature Cards */}
            <div className="space-y-2.5 text-xs sm:text-[13px] text-slate-700 dark:text-slate-200">
              <div className="p-2.5 sm:p-3 rounded-xl bg-white/70 dark:bg-white/5 border border-emerald-100/90 dark:border-emerald-500/20 shadow-xs flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-100/80 dark:bg-emerald-500/20 border border-emerald-200/80 dark:border-emerald-400/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Building2 className="w-4 h-4 text-emerald-700 dark:text-emerald-300" />
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white block font-semibold mb-0.5">จัดเก็บและบริหารในท้องถิ่น (Locally)</strong>
                  <span className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                    ปลอดภัยสูงสุด ปฏิบัติตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล (PDPA) อย่างเคร่งครัด
                  </span>
                </div>
              </div>

              <div className="p-2.5 sm:p-3 rounded-xl bg-white/70 dark:bg-white/5 border border-emerald-100/90 dark:border-emerald-500/20 shadow-xs flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-100/80 dark:bg-emerald-500/20 border border-emerald-200/80 dark:border-emerald-400/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Layers className="w-4 h-4 text-emerald-700 dark:text-emerald-300" />
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white block font-semibold mb-0.5">สร้างโรงกลั่นข้อมูลขององค์กร (Core Refinery)</strong>
                  <span className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                    สกัดและกรองข้อมูล PII ก่อนส่งประมวลผล ป้องกันข้อมูลรั่วไหลและคงสิทธิ์ความเป็นเจ้าของ
                  </span>
                </div>
              </div>

              <div className="p-2.5 sm:p-3 rounded-xl bg-white/70 dark:bg-white/5 border border-emerald-100/90 dark:border-emerald-500/20 shadow-xs flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-100/80 dark:bg-emerald-500/20 border border-emerald-200/80 dark:border-emerald-400/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Globe2 className="w-4 h-4 text-emerald-700 dark:text-emerald-300" />
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white block font-semibold mb-0.5">ผสานบริบทและวัฒนธรรมท้องถิ่น</strong>
                  <span className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                    เสริมพลังด้วยภาษาและบริบทวัฒนธรรมไทย ช่วยให้ AI ตอบสนองได้ลึกซึ้งและตรงเป้าหมาย
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-emerald-200/60 dark:border-emerald-500/20 text-xs font-mono text-emerald-800 dark:text-emerald-300 font-semibold flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              Sovereign Enterprise Boundary
            </span>
            <span className="text-emerald-700 dark:text-emerald-400 bg-emerald-100/80 dark:bg-emerald-500/20 px-2.5 py-0.5 rounded-full text-[11px]">
              100% In-Country Security
            </span>
          </div>
        </SpotlightSection>

        {/* Right Column: High-Tech Data Refinery Visual Illustration (Matches 100% Height) */}
        <SpotlightSection
          startTime={272.0}
          endTime={286.0}
          className="lg:col-span-6 flex flex-col"
        >
          <div className="w-full h-full min-h-[380px] rounded-3xl glass-panel border border-emerald-200/80 dark:border-emerald-500/30 overflow-hidden shadow-lg shadow-emerald-500/10 dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] relative group flex flex-col justify-end">
            <img
              src={`${basePath}/images/ai-first-enterprise/data_refinery_sovereignty.jpg`}
              alt="Local Data Refinery & Sovereign Boundary"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="relative z-10 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent p-5 sm:p-6 backdrop-blur-[2px]">
              <div className="text-left">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/30 text-emerald-300 backdrop-blur-md mb-2 border border-emerald-400/30">
                  <Database className="w-3.5 h-3.5 text-emerald-400" /> Enterprise Sovereign Gateway
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white drop-shadow-md mb-1">
                  Secure Data Refinery & Cleansing Pipeline
                </h3>
                <p className="text-xs text-slate-300 drop-shadow line-clamp-2 leading-relaxed">
                  โครงสร้างพื้นฐานโรงกลั่นและกรองข้อมูลระดับองค์กร ก่อนเชื่อมต่อโมเดลปัญญาประดิษฐ์
                </p>
              </div>
            </div>
          </div>
        </SpotlightSection>
      </div>
    </Slide>,

    // Slide 11: Topic 4 - Part 2: Architecture Diagram & Technical Explanation
    <Slide key="slide-11-diagram" isActive={true}>
      <SlideHeader
        section="ส่วนที่ 2: Building a Solid Foundation"
        badge="หัวข้อที่ 1 (2/2)"
        badgeColor="green"
        title="สถาปัตยกรรม Sovereign Data Refinery"
        subtitle="Topology: Local Data Refinery & Sovereign Boundary Architecture"
      />
      <div className="space-y-3.5 max-w-6xl mx-auto">
        {/* Full Interactive Diagram Component */}
        <DataSovereigntyDiagram />

        {/* 3 Clear Architecture Component Explanation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          <SpotlightSection startTime={286.0} endTime={294.6}>
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 glass-panel bg-white/70 dark:bg-white/5 shadow-xs h-full">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-slate-500" />
                <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                  1. Enterprise Raw Data
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                ข้อมูลภายในองค์กร (ERP, CRM, PII) จัดเก็บบนโครงสร้างพื้นฐานในประเทศ ไม่เปิดเผยสู่ภายนอกโดยตรง
              </p>
            </div>
          </SpotlightSection>

          <SpotlightSection startTime={294.6} endTime={305.6}>
            <div className="p-4 sm:p-5 rounded-2xl border border-emerald-200 dark:border-emerald-500/30 glass-panel bg-emerald-50/70 dark:bg-emerald-500/10 shadow-xs h-full">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-bold text-xs sm:text-sm text-emerald-800 dark:text-emerald-300">
                  2. Local Refinery & Gateway
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                สกัด PII ทำ Vector Embeddings ท้องถิ่น และควบคุมผ่าน Sovereign Gateway (Zero-Retention)
              </p>
            </div>
          </SpotlightSection>

          <SpotlightSection startTime={305.6} endTime={315.4}>
            <div className="p-4 sm:p-5 rounded-2xl border border-blue-200 dark:border-cyan-500/30 glass-panel bg-blue-50/70 dark:bg-cyan-500/10 shadow-xs h-full">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="font-bold text-xs sm:text-sm text-blue-800 dark:text-cyan-300">
                  3. External Frontier AI
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                ส่งเฉพาะ Sanitized Query เพื่อดึงพลัง AI Reasoning กลับมา โดยไม่มีข้อมูลความลับรั่วไหลออกนอกแดน
              </p>
            </div>
          </SpotlightSection>
        </div>
      </div>
    </Slide>,

    // Slide 12: Topic 5 (Pillars & Real-World Impact)
    <Slide key="slide-12-pillars" isActive={true}>
      <SlideHeader
        section="ส่วนที่ 2: Building a Solid Foundation"
        badge="หัวข้อที่ 2"
        badgeColor="green"
        title="3 เสาหลัก & กรณีศึกษาความสำเร็จ"
        subtitle="โครงสร้างที่ต้องพร้อมและตัวอย่างผลกระทบทางธุรกิจจริง"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch max-w-6xl mx-auto">
        <SpotlightSection
          startTime={315.4}
          endTime={324.0}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <ThreePillarsDiagram />
        </SpotlightSection>

        <div className="lg:col-span-5 flex flex-col justify-between space-y-2.5">
          <div className="flex items-center gap-1.5 pb-1 border-b border-slate-200/60 dark:border-white/10">
            <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-xs font-bold font-mono text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              Real-World Impact Case Studies
            </span>
          </div>

          <SpotlightSection startTime={324.0} endTime={334.6}>
            <div className="glass-panel p-4 sm:p-5 rounded-2xl border-l-4 border-l-emerald-500 dark:border-l-emerald-400 border border-slate-200/80 dark:border-white/10 shadow-xs flex flex-col justify-center">
              <div className="flex items-center justify-between mb-1.5">
                <strong className="text-slate-900 dark:text-white text-sm font-bold">Rigo (กลุ่มค้าปลีก)</strong>
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 dark:text-emerald-300 dark:bg-emerald-500/20 dark:border-emerald-400/30 px-2 py-0.5 rounded-full">+50% ประสิทธิภาพ</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                ใช้ AI บริหารคลังและสาขา ทำให้พนักงานตั้งค่าและเปิดสาขาใหม่ได้เสร็จสิ้นภายใน 10 นาที
              </p>
            </div>
          </SpotlightSection>

          <SpotlightSection startTime={334.6} endTime={344.9}>
            <div className="glass-panel p-4 sm:p-5 rounded-2xl border-l-4 border-l-amber-500 dark:border-l-amber-400 border border-slate-200/80 dark:border-white/10 shadow-xs flex flex-col justify-center">
              <div className="flex items-center justify-between mb-1.5">
                <strong className="text-slate-900 dark:text-white text-sm font-bold">New Hope (กลุ่มปศุสัตว์)</strong>
                <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 dark:text-amber-300 dark:bg-amber-500/20 dark:border-amber-400/30 px-2 py-0.5 rounded-full">+80% ประสิทธิภาพผลิต</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                นำ Smart Farm และ AI Monitoring มาคุมต้นทุน คาดการณ์ป้องกันโรคระบาด และเพิ่มผลผลิต 80%
              </p>
            </div>
          </SpotlightSection>
        </div>
      </div>
    </Slide>,

    // Slide 13: Section 3 Divider
    <SectionDividerSlide
      key="slide-13-section-3"
      partNumber="ส่วนที่ 3"
      theme="purple"
      title="The Agentic AI Landscape"
      subtitle="การบริหารจัดการ AI Agents, ระบบความปลอดภัยเชิงรุก และแนวปฏิบัติระดับองค์กร"
      description="ก้าวข้าม Generative AI สู่ Agentic AI ที่สามารถตัดสินใจและลงมือปฏิบัติการแทนมนุษย์ พร้อมมาตรการกำกับดูแล ความปลอดภัย และการคุมต้นทุนโทเคนอย่างชาญฉลาด"
      leftTiming={{ startTime: 344.9, endTime: 356.6 }}
      topicTimings={[
        { startTime: 356.6, endTime: 359.6 },
        { startTime: 359.6, endTime: 361.6 },
        { startTime: 361.6, endTime: 364.5 },
      ]}
      topics={[
        {
          number: '01',
          title: 'ยุคแห่ง Agentic AI & การป้องกันเชิงรุก (Continuous Active Defense)',
          description: 'การเปลี่ยนผ่านสู่ Multi-Agent Defense ด้วย Red, Blue และ Green Agents ตลอด 24/7',
        },
        {
          number: '02',
          title: 'AI IQ, Context Engineering & การคุมต้นทุน (Token Economy)',
          description: 'Context Engineering เหนือกว่า Prompt Engineering และการบริหารต้นทุนโทเคนให้คุ้มค่า',
        },
        {
          number: '03',
          title: 'แนวปฏิบัติที่ดีที่สุดในระดับองค์กร (Enterprise Best Practices)',
          description: 'จัดตั้ง AI CoE, Human-in-the-Loop และการสร้างวัฒนธรรม Continuous Skilling',
        },
      ]}
    />,

    // Slide 14: Topic 6
    <Slide key="slide-14-agentic" isActive={true}>
      <SlideHeader
        section="ส่วนที่ 3: The Agentic AI Landscape"
        badge="หัวข้อที่ 1"
        badgeColor="red"
        title="ยุคแห่ง Agentic AI & การป้องกันเชิงรุก"
        subtitle="Continuous Active Defense ด้วย Multi-Agent System"
      />
      <div className="space-y-3">
        {/* Unified Agent Pillars Bar with Interactive Tooltips */}
        <div className="relative z-30 glass-panel p-2 sm:p-2.5 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2 pl-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-slate-400 animate-pulse" />
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 font-mono uppercase tracking-wider">
              Core Pillars:
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 flex-1">
            {/* Red Agent Pill with Tooltip */}
            <SpotlightSection
              startTime={374.0}
              endTime={382.0}
              showBadge={false}
              className="relative group/tip z-30 hover:z-50"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-rose-50/90 dark:bg-rose-500/10 border border-rose-200/80 dark:border-rose-500/30 cursor-pointer hover:bg-rose-100/90 dark:hover:bg-rose-500/20 transition-all shadow-xs">
                <span className="text-sm">🔴</span>
                <span className="font-semibold text-rose-800 dark:text-rose-300 text-xs sm:text-[13px] truncate">
                  Red Agents (Adversarial)
                </span>
                <span className="ml-auto text-[10px] text-rose-500 dark:text-rose-400 font-mono opacity-60 group-hover/tip:opacity-100 transition-opacity">
                  ⓘ
                </span>
              </div>

              {/* Floating Tooltip */}
              <div
                style={{ backgroundColor: '#0f172a' }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-72 p-3.5 rounded-xl text-white text-center shadow-2xl border border-slate-700/90 opacity-0 group-hover/tip:opacity-100 transition-all duration-200 pointer-events-none z-50 drop-shadow-2xl"
              >
                <p className="font-bold text-rose-400 text-xs mb-1">
                  Red Agent: Active Pentesting
                </p>
                <p className="text-slate-100 text-xs leading-relaxed font-normal">
                  จำลองเจาะระบบและค้นหาช่องโหว่ตลอด 24/7 เพื่อแก้ไขก่อนถูกโจมตีจริง
                </p>
                <div
                  style={{ backgroundColor: '#0f172a' }}
                  className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-l border-t border-slate-700/90"
                />
              </div>
            </SpotlightSection>

            {/* Blue Agent Pill with Tooltip */}
            <SpotlightSection
              startTime={382.0}
              endTime={388.6}
              showBadge={false}
              className="relative group/tip z-30 hover:z-50"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50/90 dark:bg-cyan-500/10 border border-blue-200/80 dark:border-cyan-500/30 cursor-pointer hover:bg-blue-100/90 dark:hover:bg-cyan-500/20 transition-all shadow-xs">
                <span className="text-sm">🔵</span>
                <span className="font-semibold text-blue-800 dark:text-cyan-300 text-xs sm:text-[13px] truncate">
                  Blue Agents (Auto SOC)
                </span>
                <span className="ml-auto text-[10px] text-blue-500 dark:text-cyan-400 font-mono opacity-60 group-hover/tip:opacity-100 transition-opacity">
                  ⓘ
                </span>
              </div>

              {/* Floating Tooltip */}
              <div
                style={{ backgroundColor: '#0f172a' }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-72 p-3.5 rounded-xl text-white text-center shadow-2xl border border-slate-700/90 opacity-0 group-hover/tip:opacity-100 transition-all duration-200 pointer-events-none z-50 drop-shadow-2xl"
              >
                <p className="font-bold text-cyan-400 text-xs mb-1">
                  Blue Agent: Autonomous SOC
                </p>
                <p className="text-slate-100 text-xs leading-relaxed font-normal">
                  ตรวจจับพฤติกรรมผิดปกติ สอบสวน และระงับเหตุภัยคุกคามในทันที
                </p>
                <div
                  style={{ backgroundColor: '#0f172a' }}
                  className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-l border-t border-slate-700/90"
                />
              </div>
            </SpotlightSection>

            {/* Green Agent Pill with Tooltip */}
            <SpotlightSection
              startTime={388.6}
              endTime={397.9}
              showBadge={false}
              className="relative group/tip z-30 hover:z-50"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50/90 dark:bg-emerald-500/10 border border-emerald-200/80 dark:border-emerald-500/30 cursor-pointer hover:bg-emerald-100/90 dark:hover:bg-emerald-500/20 transition-all shadow-xs">
                <span className="text-sm">🟢</span>
                <span className="font-semibold text-emerald-800 dark:text-emerald-300 text-xs sm:text-[13px] truncate">
                  Green Agents (Governance)
                </span>
                <span className="ml-auto text-[10px] text-emerald-500 dark:text-emerald-400 font-mono opacity-60 group-hover/tip:opacity-100 transition-opacity">
                  ⓘ
                </span>
              </div>

              {/* Floating Tooltip */}
              <div
                style={{ backgroundColor: '#0f172a' }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-72 p-3.5 rounded-xl text-white text-center shadow-2xl border border-slate-700/90 opacity-0 group-hover/tip:opacity-100 transition-all duration-200 pointer-events-none z-50 drop-shadow-2xl"
              >
                <p className="font-bold text-emerald-400 text-xs mb-1">
                  Green Agent: Governance & Ethics
                </p>
                <p className="text-slate-100 text-xs leading-relaxed font-normal">
                  กำกับดูแลจริยธรรม คุ้มครองข้อมูล PII และนโยบายความปลอดภัย AI
                </p>
                <div
                  style={{ backgroundColor: '#0f172a' }}
                  className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-l border-t border-slate-700/90"
                />
              </div>
            </SpotlightSection>
          </div>
        </div>

        {/* Architectural Schematic from diagram-design */}
        <SpotlightSection startTime={364.5} endTime={374.0} showBadge={false}>
          <MultiAgentDefenseDiagram className="relative z-10" />
        </SpotlightSection>
      </div>
    </Slide>,

    // Slide 15: Topic 7
    <Slide key="slide-15-context" isActive={true}>
      <SlideHeader
        section="ส่วนที่ 3: The Agentic AI Landscape"
        badge="หัวข้อที่ 2"
        badgeColor="purple"
        title="AI IQ, Context Engineering & การคุมต้นทุน"
        subtitle="การสร้างบริบทลึกซึ้งและการบริหารต้นทุนโทเคน"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch mx-auto">
        {/* Left Column: 2 Core Concepts */}
        <div className="space-y-3 flex flex-col justify-between">
          <SpotlightSection startTime={397.9} endTime={407.6} className="flex-1 flex flex-col">
            <div className="glass-panel p-4 rounded-2xl border border-slate-200/80 dark:border-white/10 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-1.5">
                <Brain className="w-4 h-4 text-purple-600 dark:text-fuchsia-400" />
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">Context Engineering เหนือกว่า Prompt</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                AI จะฉลาดเมื่อมี “บริบทครบถ้วน” (ข้อมูลธุรกิจ, ประวัติลูกค้า, บทบาทผู้ใช้) ทำให้ได้คำตอบตรงจุดโดยไม่ต้องเขียน Prompt ยาวซ้ำทุกครั้ง
              </p>
            </div>
          </SpotlightSection>

          <SpotlightSection startTime={407.6} endTime={414.0} className="flex-1 flex flex-col">
            <div className="glass-panel p-4 rounded-2xl border border-slate-200/80 dark:border-white/10 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-1.5">
                <Cpu className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">การบริหารเศรษฐศาสตร์โทเคน (Token Economy)</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                ควบคุมต้นทุนด้วยเทคนิค Prompt Caching, Semantic Cache และจัดสรรงานระหว่างโมเดลเล็ก (Fast & Cheap) กับโมเดลใหญ่ (Deep Reasoning)
              </p>
            </div>
          </SpotlightSection>
        </div>

        {/* Right Column: Executive Case with Workflow and Balanced Heights */}
        <SpotlightSection startTime={414.0} endTime={427.1} className="flex flex-col">
          <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-purple-200/80 dark:border-fuchsia-500/20 flex flex-col justify-between shadow-xs h-full">
            <div>
              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-200/60 dark:border-white/10">
                <span className="text-[11px] font-bold font-mono text-purple-700 dark:text-fuchsia-300 uppercase tracking-wider">
                  Executive Case Study
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 font-semibold">
                  Chief of Staff Agent
                </span>
              </div>
              <QuoteBox
                quote="CTO ใช้ Chief of Staff Agent ช่วยสรุปและคัดกรองอีเมลหลายร้อยฉบับทุกเช้า พร้อมจัดลำดับความสำคัญและร่างคำตอบเบื้องต้น ทำให้เริ่มงานด้วยความพร้อมและตรงเป้าหมายที่สุด"
                role="Executive Daily Workflow"
                variant="purple"
              />
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-white/10 grid grid-cols-3 gap-2 text-center">
              <div className="p-1.5 rounded-lg bg-slate-100/80 dark:bg-white/5">
                <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400">INPUT</div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200">100+ อีเมล/วัน</div>
              </div>
              <div className="p-1.5 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200/60 dark:border-purple-500/20">
                <div className="text-[10px] font-mono text-purple-600 dark:text-fuchsia-300">PROCESS</div>
                <div className="text-xs font-bold text-purple-700 dark:text-fuchsia-300">Agent คัดกรอง</div>
              </div>
              <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200/60 dark:border-emerald-500/20">
                <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400">OUTPUT</div>
                <div className="text-xs font-bold text-emerald-700 dark:text-emerald-300">ประหยัด 80%</div>
              </div>
            </div>
          </div>
        </SpotlightSection>
      </div>
    </Slide>,

    // Slide 16: Topic 8
    <Slide key="slide-16-practices" isActive={true}>
      <SlideHeader
        section="ส่วนที่ 3: The Agentic AI Landscape"
        badge="หัวข้อที่ 3"
        badgeColor="blue"
        title="แนวปฏิบัติที่ดีที่สุด (Enterprise Best Practices)"
        subtitle="3 หัวใจหลักในการนำ AI มาใช้งานจริงในระดับองค์กรอย่างยั่งยืน"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        <SpotlightSection startTime={431.64} endTime={439.6}>
          <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-xs text-center flex flex-col items-center hover:border-blue-400/40 dark:hover:border-cyan-400/40 transition-all duration-300 group h-full">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 border border-blue-200 dark:bg-cyan-500/15 dark:text-cyan-300 dark:border-cyan-400/30 rounded-xl flex items-center justify-center mb-3 shadow-xs group-hover:scale-105 transition-transform">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">ตั้ง Center of Excellence</h3>
            <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
              จัดตั้งหน่วยงาน AI CoE เพื่อกำหนดแนวทาง กฎเกณฑ์ มาตรฐานความปลอดภัย และช่วยกระจายองค์ความรู้สู่ทุกแผนก
            </p>
          </div>
        </SpotlightSection>

        <SpotlightSection startTime={439.6} endTime={447.6}>
          <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-xs text-center flex flex-col items-center hover:border-emerald-400/40 transition-all duration-300 group h-full">
            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 border border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-400/30 rounded-xl flex items-center justify-center mb-3 shadow-xs group-hover:scale-105 transition-transform">
              <Users2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">Human-in-the-Loop</h3>
            <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
              การตัดสินใจที่สำคัญและมีผลกระทบสูงยังต้องมีมนุษย์อนุมัติเสมอ พร้อมวางระบบ Emergency Kill Switch สำหรับหยุด Agent ทันที
            </p>
          </div>
        </SpotlightSection>

        <SpotlightSection startTime={447.6} endTime={455.1}>
          <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-xs text-center flex flex-col items-center hover:border-purple-400/40 dark:hover:border-fuchsia-400/40 transition-all duration-300 group h-full">
            <div className="w-10 h-10 bg-fuchsia-50 text-fuchsia-600 border border-fuchsia-200 dark:bg-fuchsia-500/15 dark:text-fuchsia-300 dark:border-fuchsia-400/30 rounded-xl flex items-center justify-center mb-3 shadow-xs group-hover:scale-105 transition-transform">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">Continuous Skilling</h3>
            <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
              ลงทุนพัฒนาทักษะบุคลากรอย่างต่อเนื่อง สนับสนุนการทดลองเพื่อสร้างวัฒนธรรม AI-Literate ที่ทุกคนกล้าคิดค้นสิ่งใหม่
            </p>
          </div>
        </SpotlightSection>
      </div>
    </Slide>,

    // Slide 17: Deep-Dive Podcasts for 3 Main Parts
    <Slide key="slide-17-podcasts" isActive={true}>
      <SlideHeader
        section="แหล่งเรียนรู้เพิ่มเติม"
        badge="พอดแคสต์ (Podcast)"
        badgeColor="purple"
        title="เจาะลึกผ่านพอดแคสต์ตอนพิเศษ"
        subtitle="รับฟังบทวิเคราะห์และสาระสำคัญแบบเจาะลึกของการนำเสนอ"
      />
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5 items-stretch">
          {aiFirstEnterprisePodcasts.map((podcast, idx) => {
            const podcastTimings = [
              { startTime: 462.4, endTime: 467.6 },
              { startTime: 462.4, endTime: 467.6 },
              { startTime: 467.6, endTime: 470.6 },
              { startTime: 470.6, endTime: 481.1 },
            ];
            const timing = podcastTimings[idx];
            return (
              <SpotlightSection
                key={podcast.episode}
                startTime={timing?.startTime}
                endTime={timing?.endTime}
                showBadge={false}
                className="h-full flex flex-col"
              >
                <PodcastCard {...podcast} className="h-full" />
              </SpotlightSection>
            );
          })}
        </div>
      </div>
    </Slide>,

    // Slide 18: Conclusion
    <Slide key="slide-18-conclusion" isActive={true} center={true}>
      <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">
          เตรียมพร้อมสู่ยุคอัจฉริยะ
        </h2>

        <div  className="w-full max-w-xl mb-4 p-4 sm:p-5 rounded-3xl border border-slate-200/60 dark:border-white/10">
          <div className="w-full h-36 sm:h-40 rounded-2xl glass-panel border border-slate-200 dark:border-cyan-500/30 text-slate-900 dark:text-white flex flex-col items-center justify-center p-4 shadow-sm dark:shadow-[0_0_50px_rgba(99,102,241,0.25)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-fuchsia-500/10 dark:from-cyan-500/15 dark:via-indigo-500/10 dark:to-fuchsia-500/15 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15),transparent_70%)] pointer-events-none" />
            <Sparkles className="w-8 h-8 text-blue-600 dark:text-cyan-400 mb-2 animate-pulse relative z-10" />
            <h3 className="text-lg sm:text-xl font-bold relative z-10">The Smarter Future Awaits</h3>
            <p className="text-slate-500 dark:text-slate-300 text-xs mt-0.5 relative z-10">Lead, Innovate, and Transform</p>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mt-4">
            ก้าวข้ามการมอง AI เป็นเพียงเครื่องมือลดเวลา{' '}
            <strong className="text-blue-600 dark:text-cyan-300 font-bold">จงใช้ AI เพื่อสร้างสรรค์คุณค่าใหม่</strong>{' '}
            ควบคู่ไปกับการวางรากฐานข้อมูลที่ปลอดภัย และการพัฒนาทักษะบุคลากรให้พร้อมร่วมงานกับ AI Agents ในอนาคต
          </p>
        </div>

          <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-cyan-500 dark:via-blue-600 dark:to-indigo-600 text-white font-bold rounded-full shadow-md shadow-blue-500/25 dark:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-lg hover:scale-105 transition-all text-sm cursor-pointer">
            Thank You / Q&A
          </div>
      </div>
    </Slide>,
  ];
}
