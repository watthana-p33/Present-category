'use client';

import React from 'react';
import { Zap } from 'lucide-react';

export function FirecrackerArchitectureDiagram({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden rounded-2xl glass-panel p-3 sm:p-4 border border-slate-200/80 dark:border-white/10 ${className}`}>
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-200/60 dark:border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
          <span className="text-[10px] sm:text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 font-mono">
            Topology: Event-Driven MicroVM & SnapStart Architecture
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono font-bold px-3 py-0.5 rounded-full border bg-purple-100/80 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-400/40">
          <Zap className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
          10ms Cold Start Isolation
        </span>
      </div>

      {/* SVG Canvas */}
      <div className="w-full flex items-center justify-center">
        <svg viewBox="0 0 1000 320" className="w-full h-auto select-none font-sans block">
          <defs>
            <linearGradient id="fa-eventGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0.03" />
            </linearGradient>
            <linearGradient id="fa-microvmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.03" />
            </linearGradient>
            <linearGradient id="fa-snapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.03" />
            </linearGradient>
            <marker id="fa-arrow-purple" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" className="fill-purple-600 dark:fill-purple-400" />
            </marker>
          </defs>

          {/* Plane 1: Event Trigger Plane */}
          <g transform="translate(30, 25)">
            <rect
              width="230"
              height="240"
              rx="12"
              fill="url(#fa-eventGrad)"
              className="stroke-amber-400/80 dark:stroke-amber-500/50 shadow-sm"
              strokeWidth="1.5"
            />
            <text x="18" y="24" className="fill-amber-900 dark:fill-amber-200 font-bold text-[11px]">
              1. Event Sources Plane
            </text>
            <text x="18" y="38" className="fill-amber-700 dark:fill-amber-400 font-mono text-[9px] font-bold uppercase tracking-wider">
              ASYNCHRONOUS TRIGGERS
            </text>
            <line x1="18" y1="46" x2="212" y2="46" className="stroke-slate-200 dark:stroke-white/10" strokeWidth="1" />

            <text x="18" y="68" className="fill-slate-700 dark:fill-slate-300 text-[10px] font-medium">
              • S3 Object Uploads
            </text>
            <text x="18" y="88" className="fill-slate-700 dark:fill-slate-300 text-[10px] font-medium">
              • API Gateway HTTP Invocations
            </text>
            <text x="18" y="108" className="fill-slate-700 dark:fill-slate-300 text-[10px] font-medium">
              • DynamoDB CDC Streams
            </text>

            {/* Zero Cost Sub-Card */}
            <rect
              x="14"
              y="132"
              width="202"
              height="88"
              rx="8"
              className="fill-white/80 dark:fill-slate-900/80 stroke-amber-200 dark:stroke-amber-800/40 shadow-xs"
              strokeWidth="1"
            />
            <text x="24" y="152" className="fill-amber-800 dark:fill-amber-300 font-mono font-bold text-[9.5px]">
              💡 Zero Cost When Idle:
            </text>
            <text x="24" y="172" className="fill-slate-700 dark:fill-slate-300 text-[9.5px]">
              • ไม่มีการเรียกใช้ = ไม่มีเครื่องรัน
            </text>
            <text x="24" y="190" className="fill-slate-500 dark:fill-slate-400 font-mono text-[8.5px]">
              ลดค่าใช้จ่ายโครงสร้างพื้นฐาน 100%
            </text>
          </g>

          {/* Connector 1 -> 2 */}
          <path
            d="M 260,145 H 320"
            fill="none"
            className="stroke-purple-500 dark:stroke-purple-400"
            strokeWidth="1.8"
            markerEnd="url(#fa-arrow-purple)"
          />
          <rect
            x="266"
            y="134"
            width="48"
            height="22"
            rx="5"
            className="fill-white dark:fill-slate-900 stroke-purple-200 dark:stroke-purple-800/40 shadow-xs"
            strokeWidth="1"
          />
          <text
            x="290"
            y="145"
            dominantBaseline="central"
            textAnchor="middle"
            className="fill-purple-700 dark:fill-purple-300 text-[9px] font-mono font-bold"
          >
            Dispatches
          </text>

          {/* Plane 2: Firecracker MicroVM Boundary */}
          <g transform="translate(320, 25)">
            <rect
              width="360"
              height="240"
              rx="14"
              fill="url(#fa-microvmGrad)"
              className="stroke-purple-400/80 dark:stroke-purple-500/50 shadow-sm"
              strokeWidth="1.5"
            />
            <text x="20" y="24" className="fill-purple-950 dark:fill-purple-200 font-bold text-[11px]">
              2. Firecracker MicroVM Boundary
            </text>
            <text x="20" y="38" className="fill-purple-700 dark:fill-purple-400 font-mono text-[9px] font-bold uppercase tracking-wider">
              MINIMAL KERNEL HARDWARE ISOLATION
            </text>
            <line x1="20" y1="46" x2="340" y2="46" className="stroke-slate-200 dark:stroke-white/10" strokeWidth="1" />

            <text x="20" y="66" className="fill-slate-700 dark:fill-slate-300 text-[10px] font-medium">
              • Strong Security Isolation ระดับ Hardware โดยตัดอุปกรณ์ที่ไม่จำเป็นออก
            </text>
            <text x="20" y="84" className="fill-slate-600 dark:fill-slate-400 text-[9.5px]">
              • รันได้นับพัน MicroVM ต่อ Physical Host โดยใช้หน่วยความจำเพียง ~5MB
            </text>

            {/* MicroVM Inner Instances */}
            <g transform="translate(20, 102)">
              {/* MicroVM #1 */}
              <rect
                width="145"
                height="115"
                rx="8"
                className="fill-white/80 dark:fill-slate-900/80 stroke-purple-200 dark:stroke-purple-800/40 shadow-xs"
                strokeWidth="1"
              />
              <text x="14" y="22" className="fill-purple-900 dark:fill-purple-200 font-bold text-[10.5px]">
                MicroVM #1
              </text>
              <text x="14" y="38" className="fill-slate-500 dark:fill-slate-400 font-mono text-[8.5px]">
                Customer A Function
              </text>
              <rect x="14" y="52" width="117" height="48" rx="5" className="fill-emerald-500/10 stroke-emerald-400/40" strokeWidth="1" />
              <text x="22" y="70" className="fill-emerald-800 dark:fill-emerald-300 font-mono text-[8.5px] font-bold">
                Active Execution
              </text>
              <text x="22" y="86" className="fill-emerald-700 dark:fill-emerald-400 text-[8.5px]">
                ⚡ 5ms Invocation
              </text>

              {/* MicroVM #2 */}
              <g transform="translate(165, 0)">
                <rect
                  width="145"
                  height="115"
                  rx="8"
                  className="fill-white/80 dark:fill-slate-900/80 stroke-purple-200 dark:stroke-purple-800/40 shadow-xs"
                  strokeWidth="1"
                />
                <text x="14" y="22" className="fill-purple-900 dark:fill-purple-200 font-bold text-[10.5px]">
                  MicroVM #2
                </text>
                <text x="14" y="38" className="fill-slate-500 dark:fill-slate-400 font-mono text-[8.5px]">
                  Customer B Function
                </text>
                <rect x="14" y="52" width="117" height="48" rx="5" className="fill-purple-500/10 stroke-purple-400/40" strokeWidth="1" />
                <text x="22" y="70" className="fill-purple-800 dark:fill-purple-300 font-mono text-[8.5px] font-bold">
                  Zero Leakage
                </text>
                <text x="22" y="86" className="fill-purple-700 dark:fill-purple-400 text-[8.5px]">
                  🔒 Strict Tenant Barrier
                </text>
              </g>
            </g>
          </g>

          {/* Connector 2 -> 3 */}
          <path
            d="M 680,145 H 740"
            fill="none"
            className="stroke-purple-500 dark:stroke-purple-400"
            strokeWidth="1.8"
            markerEnd="url(#fa-arrow-purple)"
          />
          <rect
            x="686"
            y="134"
            width="48"
            height="22"
            rx="5"
            className="fill-white dark:fill-slate-900 stroke-purple-200 dark:stroke-purple-800/40 shadow-xs"
            strokeWidth="1"
          />
          <text
            x="710"
            y="145"
            dominantBaseline="central"
            textAnchor="middle"
            className="fill-purple-700 dark:fill-purple-300 text-[9px] font-mono font-bold"
          >
            Snapshots
          </text>

          {/* Plane 3: SnapStart Innovation Plane */}
          <g transform="translate(740, 25)">
            <rect
              width="230"
              height="240"
              rx="12"
              fill="url(#fa-snapGrad)"
              className="stroke-cyan-400/80 dark:stroke-cyan-500/50 shadow-sm"
              strokeWidth="1.5"
            />
            <text x="18" y="24" className="fill-cyan-950 dark:fill-cyan-200 font-bold text-[11px]">
              3. SnapStart Cache
            </text>
            <text x="18" y="38" className="fill-cyan-700 dark:fill-cyan-400 font-mono text-[9px] font-bold uppercase tracking-wider">
              MEMORY SNAPSHOT RECOVERY
            </text>
            <line x1="18" y1="46" x2="212" y2="46" className="stroke-slate-200 dark:stroke-white/10" strokeWidth="1" />

            <text x="18" y="68" className="fill-cyan-800 dark:fill-cyan-300 font-mono font-bold text-[9.5px]">
              ⚡ Pre-initialized State
            </text>
            <text x="18" y="88" className="fill-slate-700 dark:fill-slate-300 text-[9.5px]">
              • บันทึก Memory snapshot ไว้ล่วงหน้า
            </text>
            <text x="18" y="106" className="fill-slate-600 dark:fill-slate-400 text-[9.5px]">
              • Restore กลับมาทำงานทันที
            </text>

            {/* Metric Box */}
            <rect
              x="14"
              y="132"
              width="202"
              height="88"
              rx="8"
              className="fill-slate-900 dark:fill-slate-950 stroke-cyan-500/60 shadow-xs"
              strokeWidth="1.2"
            />
            <text
              x="115"
              y="155"
              dominantBaseline="central"
              textAnchor="middle"
              className="fill-cyan-300 font-mono text-[9px] font-bold uppercase tracking-wider"
            >
              Cold Start Reduction
            </text>
            <text
              x="115"
              y="180"
              dominantBaseline="central"
              textAnchor="middle"
              className="fill-cyan-400 font-mono font-extrabold text-[14px] tracking-tight"
            >
              15s ➔ 10ms
            </text>
            <text
              x="115"
              y="200"
              dominantBaseline="central"
              textAnchor="middle"
              className="fill-emerald-400 font-mono text-[8.5px] font-semibold"
            >
              🚀 1500x Acceleration
            </text>
          </g>

          {/* Bottom Footnote */}
          <text
            x="500"
            y="295"
            dominantBaseline="central"
            textAnchor="middle"
            className="fill-slate-600 dark:fill-slate-400 font-mono text-[9.5px] font-medium"
          >
            AWS Lambda Evolution: From Expensive EC2 T2 Instances ➔ Firecracker MicroVMs ➔ SnapStart
          </text>
        </svg>
      </div>
    </div>
  );
}
