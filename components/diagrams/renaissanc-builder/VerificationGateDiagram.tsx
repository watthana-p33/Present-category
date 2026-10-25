'use client';

import React from 'react';
import { ShieldCheck } from 'lucide-react';

export function VerificationGateDiagram({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden rounded-2xl glass-panel p-3 sm:p-4 border border-slate-200/80 dark:border-white/10 ${className}`}>
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-200/60 dark:border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-[10px] sm:text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 font-mono">
            Topology: Verification Gate & Andon Cord Mechanism
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono font-bold px-3 py-0.5 rounded-full border bg-amber-100/80 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-400/40">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
          Quality Rigor vs Gambling
        </span>
      </div>

      {/* SVG Canvas */}
      <div className="w-full flex items-center justify-center">
        <svg viewBox="0 0 1000 320" className="w-full h-auto select-none font-sans block">
          <defs>
            <linearGradient id="vg-dangerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0.03" />
            </linearGradient>
            <linearGradient id="vg-safeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.03" />
            </linearGradient>
            <marker id="vg-arrow-red" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" className="fill-rose-500 dark:fill-rose-400" />
            </marker>
            <marker id="vg-arrow-emerald" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" className="fill-emerald-600 dark:fill-emerald-400" />
            </marker>
          </defs>

          {/* Left Box: The Anti-Pattern (Vibe Coding / Gambling) */}
          <g transform="translate(30, 25)">
            <rect
              width="455"
              height="265"
              rx="14"
              fill="url(#vg-dangerGrad)"
              className="stroke-rose-400/80 dark:stroke-rose-500/50"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            {/* Header Tag */}
            <text x="22" y="28" className="fill-rose-700 dark:fill-rose-400 font-mono text-[9.5px] font-bold uppercase tracking-wider">
              [CRITICAL ANTI-PATTERN] VIBE CODING & GAMBLING
            </text>
            <text x="435" y="28" textAnchor="end" className="fill-rose-600 dark:fill-rose-400 font-mono text-[9px] font-bold">
              HIGH RISK
            </text>

            <text x="22" y="48" className="fill-rose-950 dark:fill-rose-200 font-bold text-[11px]">
              สร้างโค้ดด้วย AI แล้วกด Deploy ทันทีโดยไม่เข้าใจกลไกภายใน
            </text>
            <line x1="22" y1="56" x2="435" y2="56" className="stroke-rose-200 dark:stroke-white/10" strokeWidth="1" />

            {/* Sub-steps Left */}
            <g transform="translate(20, 72)">
              {/* Step 1 */}
              <rect width="118" height="64" rx="8" className="fill-white/80 dark:fill-slate-900/80 stroke-rose-300 dark:stroke-rose-800/40 shadow-xs" strokeWidth="1" />
              <text x="59" y="24" dominantBaseline="central" textAnchor="middle" className="fill-rose-950 dark:fill-rose-200 font-bold text-[10.5px]">Prompt</text>
              <text x="59" y="42" dominantBaseline="central" textAnchor="middle" className="fill-slate-500 dark:fill-slate-400 font-mono text-[8.5px]">Gen AI Speed</text>

              {/* Arrow 1 */}
              <path d="M 118 32 H 145" fill="none" className="stroke-rose-400 dark:stroke-rose-500" strokeWidth="1.5" markerEnd="url(#vg-arrow-red)" />

              {/* Step 2 */}
              <rect x="145" y="0" width="118" height="64" rx="8" className="fill-rose-50/80 dark:fill-rose-950/40 stroke-rose-300 dark:stroke-rose-800/60 shadow-xs" strokeWidth="1" />
              <text x="204" y="24" dominantBaseline="central" textAnchor="middle" className="fill-rose-950 dark:fill-rose-200 font-bold text-[10.5px]">Unverified</text>
              <text x="204" y="42" dominantBaseline="central" textAnchor="middle" className="fill-rose-700 dark:fill-rose-400 font-mono text-[8.5px]">No Comprehension</text>

              {/* Arrow 2 */}
              <path d="M 263 32 H 290" fill="none" className="stroke-rose-400 dark:stroke-rose-500" strokeWidth="1.5" markerEnd="url(#vg-arrow-red)" />

              {/* Step 3 */}
              <rect x="290" y="0" width="125" height="64" rx="8" className="fill-rose-950 dark:fill-rose-900 stroke-rose-700 shadow-xs" strokeWidth="1" />
              <text x="352" y="24" dominantBaseline="central" textAnchor="middle" className="fill-rose-200 font-bold text-[10.5px]">Blind Production</text>
              <text x="352" y="42" dominantBaseline="central" textAnchor="middle" className="fill-rose-300 font-mono text-[8.5px]">Debt Accumulation</text>
            </g>

            {/* Impact Box */}
            <rect x="20" y="152" width="415" height="48" rx="7" className="fill-white/60 dark:fill-slate-900/60 stroke-rose-200 dark:stroke-rose-800/30" strokeWidth="1" />
            <text x="32" y="170" dominantBaseline="central" className="fill-rose-800 dark:fill-rose-300 font-mono font-bold text-[9.5px]">
              ⚠️ ผลกระทบ: Verification Debt สะสม, Hallucinated APIs, ช่องโหว่ความปลอดภัย
            </text>
            <text x="32" y="186" dominantBaseline="central" className="fill-slate-600 dark:fill-slate-400 text-[9px]">
              ทีมสูญเสียความเข้าใจในระบบ กลายเป็นผู้เฝ้ามอง ไม่สามารถแก้ Incident ได้
            </text>

            <text x="22" y="222" className="fill-slate-500 dark:fill-slate-400 font-mono text-[8.5px]">
              &ldquo;If you don&apos;t review code, you are gambling with your business — go to a casino.&rdquo;
            </text>
            <text x="22" y="240" className="fill-slate-400 dark:fill-slate-500 font-mono text-[8px]">
              — Werner Vogels, VP & CTO at Amazon
            </text>
          </g>

          {/* Right Box: The Target Pattern (Mechanisms & Andon Cord) */}
          <g transform="translate(515, 25)">
            <rect
              width="455"
              height="265"
              rx="14"
              fill="url(#vg-safeGrad)"
              className="stroke-emerald-400/80 dark:stroke-emerald-500/50 shadow-sm"
              strokeWidth="1.5"
            />
            {/* Header Tag */}
            <text x="22" y="28" className="fill-emerald-700 dark:fill-emerald-400 font-mono text-[9.5px] font-bold uppercase tracking-wider">
              [TARGET ARCHITECTURE] THE ANDON CORD MECHANISM
            </text>
            <text x="435" y="28" textAnchor="end" className="fill-emerald-600 dark:fill-emerald-400 font-mono text-[9px] font-bold">
              VERIFIED RESILIENCE
            </text>

            <text x="22" y="48" className="fill-emerald-950 dark:fill-emerald-200 font-bold text-[11px]">
              เจตนาดีไม่เพียงพอ ต้องมี &lsquo;กลไก (Mechanism)&rsquo; ตรวจสอบคุณภาพก่อนขึ้น Production
            </text>
            <line x1="22" y1="56" x2="435" y2="56" className="stroke-emerald-200 dark:stroke-white/10" strokeWidth="1" />

            {/* Sub-steps Right */}
            <g transform="translate(20, 72)">
              {/* Step 1 */}
              <rect width="118" height="64" rx="8" className="fill-white/80 dark:fill-slate-900/80 stroke-emerald-300 dark:stroke-emerald-800/40 shadow-xs" strokeWidth="1" />
              <text x="59" y="24" dominantBaseline="central" textAnchor="middle" className="fill-emerald-950 dark:fill-emerald-200 font-bold text-[10.5px]">AI + Prompt</text>
              <text x="59" y="42" dominantBaseline="central" textAnchor="middle" className="fill-slate-500 dark:fill-slate-400 font-mono text-[8.5px]">Fast Draft Generation</text>

              {/* Arrow 1 */}
              <path d="M 118 32 H 145" fill="none" className="stroke-emerald-500 dark:stroke-emerald-400" strokeWidth="1.5" markerEnd="url(#vg-arrow-emerald)" />

              {/* Step 2 */}
              <rect x="145" y="0" width="118" height="64" rx="8" className="fill-emerald-50/80 dark:fill-emerald-950/40 stroke-emerald-400 dark:stroke-emerald-600 shadow-xs" strokeWidth="1.5" />
              <text x="204" y="24" dominantBaseline="central" textAnchor="middle" className="fill-emerald-950 dark:fill-emerald-200 font-bold text-[10.5px]">Andon Gate</text>
              <text x="204" y="42" dominantBaseline="central" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[8.5px] font-bold">Pull to Stop Line</text>

              {/* Arrow 2 */}
              <path d="M 263 32 H 290" fill="none" className="stroke-emerald-500 dark:stroke-emerald-400" strokeWidth="1.5" markerEnd="url(#vg-arrow-emerald)" />

              {/* Step 3 */}
              <rect x="290" y="0" width="125" height="64" rx="8" className="fill-emerald-950 dark:fill-emerald-900 stroke-emerald-700 shadow-xs" strokeWidth="1" />
              <text x="352" y="24" dominantBaseline="central" textAnchor="middle" className="fill-emerald-200 font-bold text-[10.5px]">Verified Release</text>
              <text x="352" y="42" dominantBaseline="central" textAnchor="middle" className="fill-emerald-300 font-mono text-[8.5px]">100% Comprehension</text>
            </g>

            {/* Mechanism Box */}
            <rect x="20" y="152" width="415" height="48" rx="7" className="fill-white/60 dark:fill-slate-900/60 stroke-emerald-200 dark:stroke-emerald-800/30" strokeWidth="1" />
            <text x="32" y="170" dominantBaseline="central" className="fill-emerald-800 dark:fill-emerald-300 font-mono font-bold text-[9.5px]">
              🛡️ กลไกสำคัญ: Automated Reasoning, Formal Verification & Peer Review
            </text>
            <text x="32" y="186" dominantBaseline="central" className="fill-slate-600 dark:fill-slate-400 text-[9px]">
              วิศวกรเข้าใจ Architecture และเป็นเจ้าของโค้ดอย่างแท้จริง
            </text>

            <text x="22" y="222" className="fill-slate-500 dark:fill-slate-400 font-mono text-[8.5px]">
              &ldquo;You build it, you own it. The work is yours, not of the tools.&rdquo;
            </text>
            <text x="22" y="240" className="fill-slate-400 dark:fill-slate-500 font-mono text-[8px]">
              — Culture of Accountability & Craftsmanship
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}
