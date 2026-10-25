'use client';

import React from 'react';
import { Scale } from 'lucide-react';

export function ReliabilityTieringDiagram({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden rounded-2xl glass-panel p-3 sm:p-4 border border-slate-200/80 dark:border-white/10 ${className}`}>
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-200/60 dark:border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[10px] sm:text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 font-mono">
            Topology: Availability vs Cost Tiering Matrix
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono font-bold px-3 py-0.5 rounded-full border bg-blue-100/80 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-400/40">
          <Scale className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          First Principles Trade-off
        </span>
      </div>

      {/* SVG Canvas */}
      <div className="w-full flex items-center justify-center">
        <svg viewBox="0 0 1000 320" className="w-full h-auto select-none font-sans block">
          <defs>
            <linearGradient id="rtd-t1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.03" />
            </linearGradient>
            <linearGradient id="rtd-t2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.03" />
            </linearGradient>
            <linearGradient id="rtd-t3Grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.03" />
            </linearGradient>
          </defs>

          {/* Left Vertical Cost Axis */}
          <g transform="translate(42, 20)">
            <line x1="0" y1="250" x2="0" y2="15" className="stroke-slate-400 dark:stroke-slate-500" strokeWidth="1.5" strokeDasharray="4 3" />
            <polygon points="-4,15 4,15 0,6" className="fill-slate-400 dark:fill-slate-500" />
            <text
              transform="rotate(-90)"
              x="-140"
              y="-12"
              className="fill-slate-500 dark:fill-slate-400 font-mono text-[9px] font-bold tracking-widest uppercase"
            >
              Cost & Redundancy Level ↑
            </text>
          </g>

          {/* Tier 1: 99.99% (4 Nines) - Mission Critical */}
          <g transform="translate(85, 20)">
            <rect
              width="885"
              height="75"
              rx="12"
              fill="url(#rtd-t1Grad)"
              className="stroke-rose-400/80 dark:stroke-rose-500/50 shadow-sm"
              strokeWidth="1.5"
            />
            {/* Pill Badge */}
            <rect
              x="16"
              y="15"
              width="95"
              height="22"
              rx="5"
              className="fill-rose-500/15 dark:fill-rose-500/20 stroke-rose-400 dark:stroke-rose-500/40"
              strokeWidth="1"
            />
            <text
              x="63"
              y="26"
              dominantBaseline="central"
              textAnchor="middle"
              className="fill-rose-700 dark:fill-rose-300 font-mono text-[9px] font-bold"
            >
              4 NINES (99.99%)
            </text>

            <text
              x="126"
              y="26"
              dominantBaseline="central"
              className="fill-rose-950 dark:fill-rose-200 font-bold text-[11px]"
            >
              TIER 1: MISSION CRITICAL CORE (Search, Shopping Cart, Checkout, Reviews)
            </text>
            <text
              x="126"
              y="46"
              dominantBaseline="central"
              className="fill-slate-700 dark:fill-slate-300 text-[10px] font-medium"
            >
              • กระทบรายได้และธุรกิจโดยตรง ต้องทำงานได้ตลอด 24/7 ขัดข้องไม่ได้เด็ดขาด
            </text>
            <text
              x="126"
              y="60"
              dominantBaseline="central"
              className="fill-slate-500 dark:fill-slate-400 text-[9.5px] font-mono"
            >
              • Architecture: Multi-Region & Multi-AZ Full Replication • Maximum Cost Tier
            </text>
          </g>

          {/* Tier 2: 99.9% (3 Nines) - High Business Value */}
          <g transform="translate(85, 105)">
            <rect
              width="885"
              height="75"
              rx="12"
              fill="url(#rtd-t2Grad)"
              className="stroke-blue-400/80 dark:stroke-blue-500/50 shadow-sm"
              strokeWidth="1.5"
            />
            {/* Pill Badge */}
            <rect
              x="16"
              y="15"
              width="95"
              height="22"
              rx="5"
              className="fill-blue-500/15 dark:fill-blue-500/20 stroke-blue-400 dark:stroke-blue-500/40"
              strokeWidth="1"
            />
            <text
              x="63"
              y="26"
              dominantBaseline="central"
              textAnchor="middle"
              className="fill-blue-700 dark:fill-blue-300 font-mono text-[9px] font-bold"
            >
              3 NINES (99.9%)
            </text>

            <text
              x="126"
              y="26"
              dominantBaseline="central"
              className="fill-blue-950 dark:fill-blue-200 font-bold text-[11px]"
            >
              TIER 2: HIGH VALUE AUXILIARY (Personalized Recommendations, Similar Items)
            </text>
            <text
              x="126"
              y="46"
              dominantBaseline="central"
              className="fill-slate-700 dark:fill-slate-300 text-[10px] font-medium"
            >
              • มีคุณค่าสูงต่อลูกค้า แต่หากระบบดับชั่วคราว ลูกค้ายังค้นหาและซื้อของสำเร็จได้
            </text>
            <text
              x="126"
              y="60"
              dominantBaseline="central"
              className="fill-slate-500 dark:fill-slate-400 text-[9.5px] font-mono"
            >
              • Architecture: Replicated across 2 Data Centers • Moderate Cost Profile
            </text>
          </g>

          {/* Tier 3: Graceful Degradation / Best Effort */}
          <g transform="translate(85, 190)">
            <rect
              width="885"
              height="75"
              rx="12"
              fill="url(#rtd-t3Grad)"
              className="stroke-emerald-400/80 dark:stroke-emerald-500/50 shadow-sm"
              strokeWidth="1.5"
            />
            {/* Pill Badge */}
            <rect
              x="16"
              y="15"
              width="95"
              height="22"
              rx="5"
              className="fill-emerald-500/15 dark:fill-emerald-500/20 stroke-emerald-400 dark:stroke-emerald-500/40"
              strokeWidth="1"
            />
            <text
              x="63"
              y="26"
              dominantBaseline="central"
              textAnchor="middle"
              className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[9px] font-bold"
            >
              GRACEFUL
            </text>

            <text
              x="126"
              y="26"
              dominantBaseline="central"
              className="fill-emerald-950 dark:fill-emerald-200 font-bold text-[11px]"
            >
              TIER 3: BEST EFFORT & CACHED CONTENT (Bestseller Lists, Static Ads)
            </text>
            <text
              x="126"
              y="46"
              dominantBaseline="central"
              className="fill-slate-700 dark:fill-slate-300 text-[10px] font-medium"
            >
              • ยอมให้ Offline หรือแสดง Cached Data เก่าได้ชั่วคราวโดยไม่ขัดขวาง Core Checkout
            </text>
            <text
              x="126"
              y="60"
              dominantBaseline="central"
              className="fill-slate-500 dark:fill-slate-400 text-[9.5px] font-mono"
            >
              • Architecture: Local Edge Cache / Single AZ Fallback • Lowest Cost Tier
            </text>
          </g>

          {/* Bottom Footnote */}
          <text
            x="520"
            y="295"
            dominantBaseline="central"
            textAnchor="middle"
            className="fill-slate-600 dark:fill-slate-400 font-mono text-[9.5px] font-medium"
          >
            💡 &ldquo;Don&apos;t promise 4 nines for everything — talk trade-offs to business in terms of cost and business impact.&rdquo;
          </text>
        </svg>
      </div>
    </div>
  );
}
