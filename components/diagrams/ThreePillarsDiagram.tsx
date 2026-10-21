'use client';

import React from 'react';

/**
 * ThreePillarsDiagram
 * Designed following diagram-design skill (Layer Stack pattern: type-layers.md)
 * 3 Stacked horizontal layers: Infrastructure -> Foundation Models -> Partner Ecosystem
 */
export function ThreePillarsDiagram({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden rounded-2xl glass-panel p-3 sm:p-4 border border-slate-200/80 dark:border-white/10 ${className}`}>
      <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-200/60 dark:border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300 font-mono">
            Layer Stack: The 3 Technology Pillars
          </span>
        </div>
        <span className="text-[10px] font-mono font-semibold text-blue-700 dark:text-cyan-300 bg-blue-50 dark:bg-blue-500/20 px-2 py-0.5 rounded-full border border-blue-200 dark:border-cyan-400/30">
          Value Stack
        </span>
      </div>

      <svg
        viewBox="0 0 860 255"
        className="w-full h-auto select-none font-sans"
        style={{ maxHeight: '240px' }}
      >
        <defs>
          <linearGradient id="layer-grad-3" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="layer-grad-2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="layer-grad-1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Direction Indicator on Left Margin */}
        <g transform="translate(15, 40)">
          <line x1="15" y1="180" x2="15" y2="10" className="stroke-slate-400 dark:stroke-slate-500" strokeWidth="1.2" strokeDasharray="3,3" />
          <polygon points="15 2, 11 12, 19 12" className="fill-slate-500 dark:fill-slate-400" />
          <text
            x="-95"
            y="6"
            transform="rotate(-90)"
            className="fill-slate-500 dark:fill-slate-400 text-[10px] font-mono tracking-widest uppercase font-semibold"
          >
            VALUE CREATION & ABSTRACTION ↑
          </text>
        </g>

        {/* ================= LAYER 3: Partner & Ecosystem (Top) ================= */}
        <g transform="translate(65, 20)">
          <rect
            width="780"
            height="65"
            rx="10"
            fill="url(#layer-grad-3)"
            className="stroke-purple-400/80 dark:stroke-purple-400/50 shadow-sm"
            strokeWidth="1.5"
          />
          {/* Index Tag */}
          <rect x="15" y="16" width="36" height="32" rx="6" className="fill-purple-100 dark:fill-purple-900/40" />
          <text x="33" y="36" textAnchor="middle" className="fill-purple-700 dark:fill-purple-300 font-mono font-bold text-xs">
            L3
          </text>

          {/* Layer Name & Detail */}
          <text x="65" y="32" className="fill-slate-900 dark:fill-white font-bold text-sm">
            Partner & Domain Ecosystem (ระบบนิเวศพันธมิตร)
          </text>
          <text x="65" y="50" className="fill-slate-600 dark:text-slate-300 text-xs">
            เชื่อมต่อกับผู้เชี่ยวชาญเฉพาะทาง ส่งมอบ Real-world Impact (เช่น ค้าปลีก Rigo +50%, สมาร์ตฟาร์ม New Hope +80%)
          </text>

          {/* Eyebrow / Tag on Right */}
          <rect x="670" y="20" width="95" height="24" rx="12" className="fill-purple-50 dark:fill-purple-500/10 stroke-purple-200 dark:stroke-purple-400/30" strokeWidth="1" />
          <text x="717" y="36" textAnchor="middle" className="fill-purple-700 dark:fill-purple-300 font-mono text-[9px] font-semibold">
            BUSINESS IMPACT
          </text>
        </g>

        {/* ================= LAYER 2: Foundation Models (Middle - FOCAL) ================= */}
        <g transform="translate(65, 95)">
          <rect
            width="780"
            height="65"
            rx="10"
            fill="url(#layer-grad-2)"
            className="stroke-blue-500 dark:stroke-cyan-400 shadow-md"
            strokeWidth="2"
          />
          {/* Index Tag */}
          <rect x="15" y="16" width="36" height="32" rx="6" className="fill-blue-100 dark:fill-cyan-900/40" />
          <text x="33" y="36" textAnchor="middle" className="fill-blue-700 dark:fill-cyan-300 font-mono font-bold text-xs">
            L2
          </text>

          {/* Layer Name & Detail */}
          <text x="65" y="32" className="fill-slate-900 dark:fill-white font-bold text-sm">
            Foundation Models (กลยุทธ์โมเดลแบบเปิดกว้าง Multi-Model)
          </text>
          <text x="65" y="50" className="fill-slate-600 dark:text-slate-300 text-xs">
            ผสมผสาน Frontier Models เชิงลึก กับ Open-Weight Domain SLMs ทำงานร่วมกันตามความเหมาะสมของงานและต้นทุน
          </text>

          {/* Eyebrow / Tag on Right */}
          <rect x="670" y="20" width="95" height="24" rx="12" className="fill-blue-50 dark:fill-cyan-500/10 stroke-blue-200 dark:stroke-cyan-400/30" strokeWidth="1" />
          <text x="717" y="36" textAnchor="middle" className="fill-blue-700 dark:fill-cyan-300 font-mono text-[9px] font-semibold">
            COGNITIVE CORE
          </text>
        </g>

        {/* ================= LAYER 1: Sovereign Infrastructure (Base) ================= */}
        <g transform="translate(65, 170)">
          <rect
            width="780"
            height="65"
            rx="10"
            fill="url(#layer-grad-1)"
            className="stroke-emerald-400/80 dark:stroke-emerald-500/50 shadow-sm"
            strokeWidth="1.5"
          />
          {/* Index Tag */}
          <rect x="15" y="16" width="36" height="32" rx="6" className="fill-emerald-100 dark:fill-emerald-900/40" />
          <text x="33" y="36" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono font-bold text-xs">
            L1
          </text>

          {/* Layer Name & Detail */}
          <text x="65" y="32" className="fill-slate-900 dark:fill-white font-bold text-sm">
            Sovereign Infrastructure (โครงสร้างพื้นฐานประมวลผลความเร็วสูง)
          </text>
          <text x="65" y="50" className="fill-slate-600 dark:text-slate-300 text-xs">
            ชิปประมวลผล AI (GPU/NPU Acceleration), ระบบเครือข่ายความเร็วสูงเสถียร และระบบจัดเก็บข้อมูลอธิปไตยท้องถิ่น
          </text>

          {/* Eyebrow / Tag on Right */}
          <rect x="670" y="20" width="95" height="24" rx="12" className="fill-emerald-50 dark:fill-emerald-500/10 stroke-emerald-200 dark:stroke-emerald-400/30" strokeWidth="1" />
          <text x="717" y="36" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[9px] font-semibold">
            HARDWARE & CLOUD
          </text>
        </g>
      </svg>
    </div>
  );
}
