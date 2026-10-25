'use client';

import React from 'react';
import { Compass } from 'lucide-react';

export function SystemsFeedbackDiagram({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden rounded-2xl glass-panel p-3 sm:p-4 border border-slate-200/80 dark:border-white/10 ${className}`}>
      {/* Diagram Top Bar */}
      <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-200/60 dark:border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] sm:text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 font-mono">
            Topology: Systems Feedback & Trophic Cascade
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono font-bold px-3 py-0.5 rounded-full border bg-emerald-100/80 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-400/40">
          <Compass className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          Donella Meadows Systems Theory
        </span>
      </div>

      {/* SVG Canvas */}
      <div className="w-full flex items-center justify-center">
        <svg viewBox="0 0 1000 320" className="w-full h-auto select-none font-sans block">
          <defs>
            <linearGradient id="sfd-wolfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.04" />
            </linearGradient>
            <linearGradient id="sfd-elkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0.04" />
            </linearGradient>
            <linearGradient id="sfd-ecoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.04" />
            </linearGradient>
            <marker id="sfd-arrow-green" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" className="fill-emerald-600 dark:fill-emerald-400" />
            </marker>
            <marker id="sfd-arrow-amber" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" className="fill-amber-500 dark:fill-amber-400" />
            </marker>
            <marker id="sfd-arrow-indigo" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" className="fill-indigo-500 dark:fill-indigo-400" />
            </marker>
          </defs>

          {/* Node 1: Apex Predator / Balancing Control */}
          <g transform="translate(30, 35)">
            <rect
              width="270"
              height="215"
              rx="12"
              fill="url(#sfd-wolfGrad)"
              className="stroke-emerald-400/80 dark:stroke-emerald-500/50 shadow-sm"
              strokeWidth="1.5"
            />
            <text x="18" y="24" className="fill-emerald-900 dark:fill-emerald-200 font-bold text-[11px]">
              1. Apex Regulator (Wolves)
            </text>
            <text x="18" y="38" className="fill-emerald-700 dark:fill-emerald-400 font-mono text-[9px] font-bold uppercase tracking-wider">
              STABILIZING REGULATION FORCE
            </text>
            <line x1="18" y1="46" x2="252" y2="46" className="stroke-slate-200 dark:stroke-white/10" strokeWidth="1" />

            <text x="18" y="66" className="fill-slate-700 dark:fill-slate-300 text-[10px] font-medium">
              • ป้องกันภาวะ Over-population ของผู้บริโภค
            </text>
            <text x="18" y="84" className="fill-slate-600 dark:fill-slate-400 text-[9.5px]">
              • ควบคุมพฤติกรรมการหากินไม่ให้ทำลายพื้นที่ริมน้ำ
            </text>

            {/* Software Equivalent Sub-Box */}
            <rect
              x="14"
              y="104"
              width="242"
              height="95"
              rx="8"
              className="fill-white/80 dark:fill-slate-900/80 stroke-emerald-200 dark:stroke-emerald-800/40 shadow-xs"
              strokeWidth="1"
            />
            <text x="24" y="122" className="fill-emerald-800 dark:fill-emerald-300 font-mono font-bold text-[9.5px]">
              💻 ในระบบสถาปัตยกรรมซอฟต์แวร์:
            </text>
            <text x="24" y="142" className="fill-slate-700 dark:fill-slate-300 text-[9.5px]">
              • Rate Limiting, Throttling & Backpressure
            </text>
            <text x="24" y="160" className="fill-slate-700 dark:fill-slate-300 text-[9.5px]">
              • Circuit Breakers ตัดวงจรก่อนระบบล่มสลาย
            </text>
            <text x="24" y="178" className="fill-slate-500 dark:fill-slate-400 font-mono text-[8.5px]">
              🛡️ ป้องกัน Cascading Failures ทั่วทั้งระบบ
            </text>
          </g>

          {/* Connector 1 -> 2 */}
          <path
            d="M 300,125 H 365"
            fill="none"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="1.8"
            markerEnd="url(#sfd-arrow-green)"
          />
          <rect
            x="308"
            y="114"
            width="54"
            height="22"
            rx="5"
            className="fill-white dark:fill-slate-900 stroke-emerald-200 dark:stroke-emerald-800/40 shadow-xs"
            strokeWidth="1"
          />
          <text
            x="335"
            y="125"
            dominantBaseline="central"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-300 text-[9.5px] font-mono font-bold"
          >
            Controls
          </text>

          {/* Node 2: Intermediate Component (Elk Herd) */}
          <g transform="translate(365, 35)">
            <rect
              width="270"
              height="215"
              rx="12"
              fill="url(#sfd-elkGrad)"
              className="stroke-amber-400/80 dark:stroke-amber-500/50 shadow-sm"
              strokeWidth="1.5"
            />
            <text x="18" y="24" className="fill-amber-900 dark:fill-amber-200 font-bold text-[11px]">
              2. Intermediate Consumer (Elk)
            </text>
            <text x="18" y="38" className="fill-amber-700 dark:fill-amber-400 font-mono text-[9px] font-bold uppercase tracking-wider">
              DYNAMIC CONSUMER NODE
            </text>
            <line x1="18" y1="46" x2="252" y2="46" className="stroke-slate-200 dark:stroke-white/10" strokeWidth="1" />

            <text x="18" y="66" className="fill-slate-700 dark:fill-slate-300 text-[10px] font-medium">
              • หากขาดตัวควบคุม จะเกิดภาวะ Over-consumption
            </text>
            <text x="18" y="84" className="fill-slate-600 dark:fill-slate-400 text-[9.5px]">
              • กัดกินพืชริมตลิ่งจนหน้าดินพังทลาย
            </text>

            {/* Software Equivalent Sub-Box */}
            <rect
              x="14"
              y="104"
              width="242"
              height="95"
              rx="8"
              className="fill-white/80 dark:fill-slate-900/80 stroke-amber-200 dark:stroke-amber-800/40 shadow-xs"
              strokeWidth="1"
            />
            <text x="24" y="122" className="fill-amber-800 dark:fill-amber-300 font-mono font-bold text-[9.5px]">
              💻 ในระบบสถาปัตยกรรมซอฟต์แวร์:
            </text>
            <text x="24" y="142" className="fill-slate-700 dark:fill-slate-300 text-[9.5px]">
              • Microservice Consumers & Background Workers
            </text>
            <text x="24" y="160" className="fill-slate-700 dark:fill-slate-300 text-[9.5px]">
              • ยิง Queries มหาศาลจนทรัพยากรส่วนกลางคอขวด
            </text>
            <text x="24" y="178" className="fill-slate-500 dark:fill-slate-400 font-mono text-[8.5px]">
              ⚠️ เสมือนคิวบวม (Queue Bloat) ที่ไร้ตัวกำกับ
            </text>
          </g>

          {/* Connector 2 -> 3 */}
          <path
            d="M 635,125 H 700"
            fill="none"
            className="stroke-amber-500 dark:stroke-amber-400"
            strokeWidth="1.8"
            markerEnd="url(#sfd-arrow-amber)"
          />
          <rect
            x="643"
            y="114"
            width="54"
            height="22"
            rx="5"
            className="fill-white dark:fill-slate-900 stroke-amber-200 dark:stroke-amber-800/40 shadow-xs"
            strokeWidth="1"
          />
          <text
            x="670"
            y="125"
            dominantBaseline="central"
            textAnchor="middle"
            className="fill-amber-700 dark:fill-amber-300 text-[9.5px] font-mono font-bold"
          >
            Impacts
          </text>

          {/* Node 3: Whole Ecosystem Impact (River & Forest) */}
          <g transform="translate(700, 35)">
            <rect
              width="270"
              height="215"
              rx="12"
              fill="url(#sfd-ecoGrad)"
              className="stroke-blue-400/80 dark:stroke-blue-500/50 shadow-sm"
              strokeWidth="1.5"
            />
            <text x="18" y="24" className="fill-blue-900 dark:fill-blue-200 font-bold text-[11px]">
              3. Macro Landscape (River & Trees)
            </text>
            <text x="18" y="38" className="fill-blue-700 dark:fill-cyan-400 font-mono text-[9px] font-bold uppercase tracking-wider">
              WHOLE SYSTEM EQUILIBRIUM
            </text>
            <line x1="18" y1="46" x2="252" y2="46" className="stroke-slate-200 dark:stroke-white/10" strokeWidth="1" />

            <text x="18" y="66" className="fill-slate-700 dark:fill-slate-300 text-[10px] font-medium">
              • ป่าฟื้น นกและบีเวอร์กลับมา แม่น้ำเปลี่ยนทิศทาง
            </text>
            <text x="18" y="84" className="fill-slate-600 dark:fill-slate-400 text-[9.5px]">
              • การเปลี่ยนแปลงจุดเล็กๆ ส่งผลกระทบระดับภูมิสถาปัตย์
            </text>

            {/* Software Equivalent Sub-Box */}
            <rect
              x="14"
              y="104"
              width="242"
              height="95"
              rx="8"
              className="fill-white/80 dark:fill-slate-900/80 stroke-blue-200 dark:stroke-blue-800/40 shadow-xs"
              strokeWidth="1"
            />
            <text x="24" y="122" className="fill-blue-800 dark:fill-cyan-300 font-mono font-bold text-[9.5px]">
              💻 ในระบบสถาปัตยกรรมซอฟต์แวร์:
            </text>
            <text x="24" y="142" className="fill-slate-700 dark:fill-slate-300 text-[9.5px]">
              • สุขภาพระบบและเสถียรภาพระดับแพลตฟอร์ม (SLA)
            </text>
            <text x="24" y="160" className="fill-slate-700 dark:fill-slate-300 text-[9.5px]">
              • End-to-End Latency & User Experience
            </text>
            <text x="24" y="178" className="fill-slate-500 dark:fill-slate-400 font-mono text-[8.5px]">
              🌐 ระบบที่ดีสร้างผลลัพธ์เชิงบวกทั้งธุรกิจ
            </text>
          </g>

          {/* Bottom Feedback Loop (Orthogonal Stepped Route with Rounded Corners) */}
          <path
            d="M 835,250 V 282 a 8,8 0 0 1 -8,8 H 173 a 8,8 0 0 1 -8,-8 V 254"
            fill="none"
            className="stroke-indigo-500/80 dark:stroke-indigo-400/80"
            strokeWidth="1.8"
            strokeDasharray="6,4"
            markerEnd="url(#sfd-arrow-indigo)"
          />
          <rect
            x="230"
            y="278"
            width="540"
            height="24"
            rx="6"
            className="fill-white dark:fill-slate-900 stroke-indigo-200 dark:stroke-indigo-500/40 shadow-xs"
            strokeWidth="1"
          />
          <text
            x="500"
            y="290"
            dominantBaseline="central"
            textAnchor="middle"
            className="fill-indigo-700 dark:fill-indigo-300 text-[9.5px] font-mono font-bold"
          >
            🔄 REINFORCING FEEDBACK LOOP: คุณไม่สามารถเปลี่ยนส่วนใดส่วนหนึ่งโดยไม่กระทบทั้งระบบ
          </text>
        </svg>
      </div>
    </div>
  );
}
