'use client';

import React from 'react';
import { ShieldAlert } from 'lucide-react';

/**
 * DiamondTrapDiagram
 * Comparative Architectural Diagram:
 * Left: The Dangerous "Diamond Shape" Trap (Hollowing out Juniors with AI)
 * Right: The Sustainable "AI-Augmented Pyramid" (Empowering Juniors as Future Leaders)
 * Calibrated with DataSovereigntyDiagram: viewBox 0 0 1200 350, generous vertical spacing, pronounced flow arrows.
 */
export function DiamondTrapDiagram({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden rounded-2xl glass-panel p-3 sm:p-4 border border-slate-200/80 dark:border-white/10 ${className}`}>
      {/* Diagram Top Bar */}
      <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-200/60 dark:border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-[10px] sm:text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 font-mono">
            Topology: The Diamond Trap vs Sustainable Talent Pipeline
          </span>
        </div>
        <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-amber-700 dark:text-amber-300 bg-amber-100/80 dark:bg-amber-500/20 px-3 py-0.5 rounded-full border border-amber-300 dark:border-amber-400/40">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
          Talent Pipeline Risk
        </span>
      </div>

      <svg
        viewBox="0 0 1200 350"
        className="w-full h-auto select-none font-sans block"
      >
        <defs>
          <linearGradient id="diamond-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.09" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.03" />
          </linearGradient>

          <linearGradient id="pyramid-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.09" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.04" />
          </linearGradient>

          <marker id="dt-arrow-amber" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" className="fill-amber-500 dark:fill-amber-400" />
          </marker>
          <marker id="dt-arrow-emerald" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
          <marker id="dt-arrow-rose" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" className="fill-rose-500 dark:fill-rose-400" />
          </marker>
        </defs>

        {/* ================= MODEL A: THE DIAMOND TRAP (LEFT: x=15 to x=585, width=570, center=300) ================= */}
        <rect
          x="15"
          y="15"
          width="570"
          height="320"
          rx="14"
          fill="url(#diamond-bg)"
          className="stroke-amber-400/60 dark:stroke-amber-500/40"
          strokeWidth="1.5"
        />

        {/* Header A */}
        <text x="35" y="38" className="fill-amber-800 dark:fill-amber-300 text-[11px] font-mono tracking-wider uppercase font-bold">
          [CRITICAL RISK] กับดักองค์กรทรงเพชร (Hollow Diamond Shape)
        </text>
        <text x="565" y="38" textAnchor="end" className="fill-amber-700 dark:fill-amber-400 text-[9.5px] font-mono font-bold">
          FRAGILE TOPOLOGY
        </text>

        {/* Level 1: Senior Leaders & Executives (Top: Narrow) */}
        <rect
          x="180"
          y="52"
          width="240"
          height="38"
          rx="8"
          className="fill-white dark:fill-slate-900 stroke-amber-300 dark:stroke-amber-500/40 shadow-xs"
          strokeWidth="1.2"
        />
        <text x="300" y="65" dominantBaseline="central" textAnchor="middle" className="fill-slate-900 dark:fill-white font-bold text-[11px]">
          Senior Leaders & Executives
        </text>
        <text x="300" y="78" dominantBaseline="central" textAnchor="middle" className="fill-slate-500 dark:fill-slate-400 font-mono text-[9px] font-medium">
          ผู้นำและผู้บริหารระดับสูง
        </text>

        {/* Flow Connector 1 -> 2 (Downwards Pressure) */}
        <path
          d="M 300,90 V 114"
          fill="none"
          className="stroke-amber-400 dark:stroke-amber-500"
          strokeWidth="2"
          markerEnd="url(#dt-arrow-amber)"
        />
        <text x="345" y="103" dominantBaseline="central" className="fill-amber-700 dark:fill-amber-400 font-mono text-[8.5px] font-bold">
          Overload Shift
        </text>

        {/* Level 2: Overloaded Mid & Senior Roles (Middle: Bulging Width 420) */}
        <rect
          x="90"
          y="114"
          width="420"
          height="48"
          rx="8"
          className="fill-amber-50/90 dark:fill-amber-950/40 stroke-amber-400 dark:stroke-amber-500/60 shadow-sm"
          strokeWidth="1.8"
        />
        <text x="300" y="130" dominantBaseline="central" textAnchor="middle" className="fill-amber-950 dark:fill-amber-200 font-bold text-[11.5px]">
          Overloaded Mid & Senior Roles (ภาวะคอขวดคนทำงานระดับกลาง)
        </text>
        <text x="300" y="148" dominantBaseline="central" textAnchor="middle" className="fill-amber-800 dark:fill-amber-400 font-medium text-[9.5px]">
          ต้องลงมาทำงานพื้นฐานเอง ขาดคนรับช่วงต่องาน สูญเสียเวลาขับเคลื่อนเชิงกลยุทธ์
        </text>

        {/* Flow Connector 2 -> 3 (Broken Downwards Flow) */}
        <path
          d="M 300,162 V 188"
          fill="none"
          className="stroke-rose-500 dark:stroke-rose-400"
          strokeWidth="2"
          strokeDasharray="4,2"
          markerEnd="url(#dt-arrow-rose)"
        />
        {/* Broken Pipeline Badge */}
        <rect
          x="345"
          y="167"
          width="110"
          height="18"
          rx="4"
          className="fill-rose-100 dark:fill-rose-950/80 stroke-rose-300 dark:stroke-rose-600/50"
          strokeWidth="1"
        />
        <text x="400" y="176" dominantBaseline="central" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 font-mono font-bold text-[9px]">
          ✕ Broken Pipeline
        </text>

        {/* Level 3: Junior Cut (Bottom: Hollow Base Width 280) */}
        <rect
          x="160"
          y="188"
          width="280"
          height="46"
          rx="8"
          className="fill-rose-50/90 dark:fill-rose-950/40 stroke-rose-400 dark:stroke-rose-500/60"
          strokeWidth="1.5"
          strokeDasharray="4,3"
        />
        <text x="300" y="203" dominantBaseline="central" textAnchor="middle" className="fill-rose-800 dark:fill-rose-300 font-bold text-[11px]">
          ลด/ตัดตำแหน่ง Junior เพื่อแทนด้วย AI
        </text>
        <text x="300" y="220" dominantBaseline="central" textAnchor="middle" className="fill-rose-600 dark:fill-rose-400 font-mono text-[9px] font-medium">
          ฐานรากหายไป (Hollow Base) ไร้ผู้สืบทอด
        </text>

        {/* Warning Callout Box */}
        <rect
          x="30"
          y="254"
          width="540"
          height="52"
          rx="8"
          className="fill-white/95 dark:fill-slate-900/90 stroke-rose-200 dark:stroke-rose-500/30 shadow-xs"
          strokeWidth="1"
        />
        <text x="300" y="270" dominantBaseline="central" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 font-bold text-[10.5px]">
          ความเสี่ยงวิกฤต: ใน 3–5 ปีข้างหน้า องค์กรจะเกิดภาวะสุญญากาศผู้นำ (Leadership Vacuum)
        </text>
        <text x="300" y="288" dominantBaseline="central" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 font-medium text-[9.5px]">
          ไม่มีคนพร้อมเติบโตเป็นผู้เชี่ยวชาญรุ่นใหม่ • สูญเสียวัฒนธรรม • ต้นทุนจ้างภายนอกพุ่งสูง
        </text>

        {/* ================= MODEL B: AI-AUGMENTED PYRAMID (RIGHT: x=615 to x=1185, width=570, center=900) ================= */}
        <rect
          x="615"
          y="15"
          width="570"
          height="320"
          rx="14"
          fill="url(#pyramid-bg)"
          className="stroke-emerald-400/60 dark:stroke-cyan-500/40"
          strokeWidth="1.5"
        />

        {/* Header B */}
        <text x="635" y="38" className="fill-emerald-800 dark:fill-cyan-300 text-[11px] font-mono tracking-wider uppercase font-bold">
          [SUSTAINABLE] พีระมิดยุคใหม่ (AI-Augmented Talent Engine)
        </text>
        <text x="1165" y="38" textAnchor="end" className="fill-emerald-700 dark:fill-cyan-400 text-[9.5px] font-mono font-bold">
          SUSTAINABLE TOPOLOGY
        </text>

        {/* Level 1: Visionary Leaders (Top of Pyramid: Width 240) */}
        <rect
          x="780"
          y="52"
          width="240"
          height="38"
          rx="8"
          className="fill-white dark:fill-slate-900 stroke-cyan-300 dark:stroke-cyan-500/40 shadow-xs"
          strokeWidth="1.2"
        />
        <text x="900" y="65" dominantBaseline="central" textAnchor="middle" className="fill-slate-900 dark:fill-white font-bold text-[11px]">
          Visionary Leaders
        </text>
        <text x="900" y="78" dominantBaseline="central" textAnchor="middle" className="fill-cyan-600 dark:fill-cyan-400 font-mono text-[9px] font-medium">
          กำหนดวิสัยทัศน์ & ทิศทางกลยุทธ์ AI
        </text>

        {/* Flow Connector 2 -> 1 (Upward Promotion & Succession) */}
        <path
          d="M 900,114 V 90"
          fill="none"
          className="stroke-emerald-600 dark:stroke-emerald-400"
          strokeWidth="2"
          markerEnd="url(#dt-arrow-emerald)"
        />
        <text x="945" y="103" dominantBaseline="central" className="fill-emerald-700 dark:fill-cyan-400 font-mono text-[8.5px] font-bold">
          ▲ Succession Flow
        </text>

        {/* Level 2: Senior Mentors & AI Architects (Middle Tier: Width 360) */}
        <rect
          x="720"
          y="114"
          width="360"
          height="48"
          rx="8"
          className="fill-white dark:fill-slate-900 stroke-emerald-300 dark:stroke-emerald-500/40 shadow-xs"
          strokeWidth="1.2"
        />
        <text x="900" y="130" dominantBaseline="central" textAnchor="middle" className="fill-slate-900 dark:fill-white font-bold text-[11.5px]">
          Senior Mentors & AI Architects
        </text>
        <text x="900" y="148" dominantBaseline="central" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-400 font-medium text-[9.5px]">
          โค้ชชิ่ง ถ่ายทอดความเชี่ยวชาญ และนำ AI มาเพิ่มผลผลิตให้ทีม
        </text>

        {/* Flow Connector 3 -> 2 (Upward Acceleration with AI Co-pilot) */}
        <path
          d="M 900,188 V 162"
          fill="none"
          className="stroke-emerald-600 dark:stroke-emerald-400"
          strokeWidth="2"
          markerEnd="url(#dt-arrow-emerald)"
        />
        {/* Promotion Velocity Badge */}
        <rect
          x="945"
          y="167"
          width="120"
          height="18"
          rx="4"
          className="fill-emerald-100 dark:fill-emerald-950/80 stroke-emerald-300 dark:stroke-emerald-600/50"
          strokeWidth="1"
        />
        <text x="1005" y="176" dominantBaseline="central" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono font-bold text-[9px]">
          ▲ 2x Growth Velocity
        </text>

        {/* Level 3: AI-Empowered Junior Foundation (Base: Width 500) */}
        <rect
          x="650"
          y="188"
          width="500"
          height="46"
          rx="8"
          className="fill-emerald-50/90 dark:fill-emerald-950/40 stroke-emerald-500 dark:stroke-emerald-400 shadow-sm"
          strokeWidth="1.8"
        />
        <text x="900" y="203" dominantBaseline="central" textAnchor="middle" className="fill-emerald-950 dark:fill-emerald-200 font-bold text-[11.5px]">
          AI-Empowered Junior Talent (รักษาฐานคนรุ่นใหม่ + ติดปีก AI)
        </text>
        <text x="900" y="220" dominantBaseline="central" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-400 font-medium text-[9.5px]">
          ใช้ AI เป็น Co-pilot เพิ่มศักยภาพการเรียนรู้ เติบโตสู่ระดับกลางได้เร็วขึ้น 2 เท่า
        </text>

        {/* Success Callout Box */}
        <rect
          x="630"
          y="254"
          width="540"
          height="52"
          rx="8"
          className="fill-white/95 dark:fill-slate-900/90 stroke-emerald-200 dark:stroke-emerald-500/30 shadow-xs"
          strokeWidth="1"
        />
        <text x="900" y="270" dominantBaseline="central" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-bold text-[10.5px]">
          ข้อได้เปรียบเชิงกลยุทธ์: สายการผลิตบุคลากร (Talent Pipeline) แข็งแกร่งยั่งยืน
        </text>
        <text x="900" y="288" dominantBaseline="central" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 font-medium text-[9.5px]">
          Junior มีความคุ้นเคยกับวัฒนธรรมองค์กร พร้อมก้าวขึ้นสู่บทบาทผู้นำในอนาคตได้อย่างมั่นคง
        </text>
      </svg>
    </div>
  );
}
