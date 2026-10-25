'use client';

import React from 'react';

/**
 * DataSovereigntyDiagram
 * Designed following diagram-design skill (Data Flow & Sovereign Boundary pattern)
 * Illustrates "Data is the new oil": Raw Data -> Local Refinery -> Sovereign Gateway -> Frontier AI
 * Clean orthogonal layout with generous padding, calibrated viewBox, and zero text/line collisions.
 */
export function DataSovereigntyDiagram({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden rounded-2xl glass-panel p-3 sm:p-4 border border-slate-200/80 dark:border-white/10 ${className}`}>
      {/* Diagram Top Bar */}
      <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-200/60 dark:border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] sm:text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 font-mono">
            Topology: Local Data Refinery & Sovereign Boundary Architecture
          </span>
        </div>
        <span className="text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-500/20 px-3 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-400/40">
          🛡️ Zero Data Leakage
        </span>
      </div>

      <svg
        viewBox="0 0 1200 280"
        className="w-full h-auto select-none font-sans block"
      >
        <defs>
          <marker id="ds-arrow-emerald" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
          <marker id="ds-arrow-blue" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" className="fill-blue-600 dark:fill-cyan-400" />
          </marker>
          <marker id="ds-arrow-return" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>

          <linearGradient id="sovereign-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.09" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.03" />
          </linearGradient>

          <linearGradient id="refinery-card" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ecfdf5" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#d1fae5" stopOpacity="0.70" />
          </linearGradient>
        </defs>

        {/* ================= SOVEREIGN ZONE BOUNDARY (LEFT TO CENTER) ================= */}
        {/* Width: 685 (x: 15 -> 700), containing Nodes 1, 2, 3 with 20px padding */}
        <rect
          x="15"
          y="15"
          width="685"
          height="250"
          rx="14"
          fill="url(#sovereign-bg)"
          className="stroke-emerald-500/50 dark:stroke-emerald-500/40"
          strokeWidth="1.5"
        />
        <text x="35" y="36" className="fill-emerald-800 dark:fill-emerald-300 text-[11px] font-mono tracking-wider uppercase font-bold">
          🛡️ SOVEREIGN ENTERPRISE BOUNDARY (LOCAL / IN-HOUSE DOMAIN)
        </text>

        {/* ================= EXTERNAL CLOUD / FRONTIER AI ZONE (RIGHT) ================= */}
        {/* Width: 305 (x: 880 -> 1185), containing Node 4 with 20px padding */}
        <rect
          x="880"
          y="15"
          width="305"
          height="250"
          rx="14"
          className="fill-slate-100/70 dark:fill-white/[0.03] stroke-slate-300 dark:stroke-white/15"
          strokeWidth="1.2"
          strokeDasharray="5,4"
        />
        <text x="900" y="36" className="fill-slate-600 dark:fill-slate-400 text-[11px] font-mono tracking-wider uppercase font-bold">
          EXTERNAL / FRONTIER AI
        </text>

        {/* ================= PATH CONNECTORS ================= */}
        {/* 1. Raw Data -> Local Refinery */}
        <path
          d="M 190,138 H 250"
          fill="none"
          className="stroke-emerald-600 dark:stroke-emerald-400"
          strokeWidth="1.8"
          markerEnd="url(#ds-arrow-emerald)"
        />
        <rect
          x="198"
          y="127"
          width="44"
          height="22"
          rx="5"
          className="fill-white dark:fill-slate-900 stroke-emerald-200 dark:stroke-emerald-800/40 shadow-xs"
          strokeWidth="1"
        />
        <text
          x="220"
          y="138"
          dominantBaseline="central"
          textAnchor="middle"
          className="fill-emerald-700 dark:fill-emerald-400 text-[10px] font-mono font-bold"
        >
          Ingest
        </text>

        {/* 2. Local Refinery -> Sovereign Gateway */}
        <path
          d="M 485,138 H 545"
          fill="none"
          className="stroke-emerald-600 dark:stroke-emerald-400"
          strokeWidth="1.8"
          markerEnd="url(#ds-arrow-emerald)"
        />
        <rect
          x="492"
          y="127"
          width="46"
          height="22"
          rx="5"
          className="fill-white dark:fill-slate-900 stroke-emerald-200 dark:stroke-emerald-800/40 shadow-xs"
          strokeWidth="1"
        />
        <text
          x="515"
          y="138"
          dominantBaseline="central"
          textAnchor="middle"
          className="fill-emerald-700 dark:fill-emerald-400 text-[10px] font-mono font-bold"
        >
          Masked
        </text>

        {/* 3. Sovereign Gateway -> External Frontier AI (Outbound Sanitized Query) */}
        {/* Spacious 180px Inter-Zone Corridor: x=700 to x=880 */}
        <path
          d="M 680,108 H 900"
          fill="none"
          className="stroke-blue-600 dark:stroke-cyan-400"
          strokeWidth="2"
          markerEnd="url(#ds-arrow-blue)"
        />
        {/* Protective Badge Container for Outbound Label (centered at 790, 15px clear of both zone borders) */}
        <rect
          x="715"
          y="95"
          width="150"
          height="26"
          rx="6"
          className="fill-white dark:fill-slate-900 stroke-blue-200 dark:stroke-cyan-500/40 shadow-xs"
          strokeWidth="1"
        />
        <text
          x="790"
          y="108"
          dominantBaseline="central"
          textAnchor="middle"
          className="fill-blue-700 dark:fill-cyan-300 text-[10px] font-mono font-bold"
        >
          Sanitized Query 
        </text>

        {/* 4. External Frontier AI -> Sovereign Gateway (Inbound AI Reasoning) */}
        <path
          d="M 900,165 H 680"
          fill="none"
          className="stroke-emerald-600 dark:stroke-emerald-400"
          strokeWidth="2"
          strokeDasharray="5,4"
          markerEnd="url(#ds-arrow-return)"
        />
        {/* Protective Badge Container for Return Label (centered at 790, 15px clear of both zone borders) */}
        <rect
          x="715"
          y="152"
          width="150"
          height="26"
          rx="6"
          className="fill-white dark:fill-slate-900 stroke-emerald-200 dark:stroke-emerald-500/40 shadow-xs"
          strokeWidth="1"
        />
        <text
          x="790"
          y="165"
          dominantBaseline="central"
          textAnchor="middle"
          className="fill-emerald-700 dark:fill-emerald-400 text-[10px] font-mono font-bold"
        >
           AI Reasoning
        </text>

        {/* ================= NODES ================= */}
        {/* Node 1: Raw Enterprise Data (x: 35, width: 155) */}
        <g transform="translate(35, 48)">
          <rect
            width="155"
            height="205"
            rx="10"
            className="fill-white dark:fill-slate-900 stroke-slate-300 dark:stroke-white/20 shadow-sm"
            strokeWidth="1.5"
          />
          <circle cx="20" cy="22" r="9" className="fill-slate-200 dark:fill-slate-800" />
          <text x="20" y="26" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[11px] font-bold">1</text>
          <text x="36" y="19" className="fill-slate-900 dark:fill-white font-bold text-[10px]">
            Enterprise Data
          </text>
          <text x="36" y="32" className="fill-slate-500 dark:fill-slate-400 font-mono text-[9px]">
            Raw Source Data
          </text>
          <line x1="12" y1="42" x2="143" y2="42" className="stroke-slate-200 dark:stroke-white/10" strokeWidth="1" />

          <text x="16" y="68" className="fill-slate-700 dark:fill-slate-300 text-[11px] font-medium">
            • ERP & CRM Data
          </text>
          <text x="16" y="94" className="fill-slate-700 dark:fill-slate-300 text-[11px] font-medium">
            • Customer PII
          </text>
          <text x="16" y="120" className="fill-slate-700 dark:fill-slate-300 text-[11px] font-medium">
            • Financial Docs
          </text>
          <text x="16" y="146" className="fill-slate-700 dark:fill-slate-300 text-[11px] font-medium">
            • Internal Memos
          </text>

          <rect x="14" y="168" width="127" height="24" rx="6" className="fill-slate-100 dark:fill-slate-800 border border-slate-200 dark:border-white/10" />
          <text x="77" y="180" dominantBaseline="central" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 font-mono text-[10px] font-semibold">
            Local Storage
          </text>
        </g>

        {/* Node 2: Local Data Refinery (FOCAL POINT - x: 250, width: 235) */}
        <g transform="translate(250, 48)">
          <rect
            width="235"
            height="205"
            rx="12"
            fill="url(#refinery-card)"
            className="stroke-emerald-500 shadow-md dark:fill-emerald-950/40"
            strokeWidth="2.2"
          />
          <circle cx="22" cy="22" r="10" className="fill-emerald-600" />
          <text x="22" y="26" textAnchor="middle" className="fill-white font-mono text-[11px] font-bold">2</text>
          <text x="38" y="19" className="fill-emerald-950 dark:fill-emerald-200 font-bold text-[10px] uppercase tracking-wide">
            LOCAL DATA REFINERY
          </text>
          <text x="38" y="32" className="fill-emerald-700 dark:fill-emerald-400 font-mono text-[10px] font-semibold">
            In-Country Processing
          </text>
          <line x1="12" y1="42" x2="223" y2="42" className="stroke-emerald-300 dark:stroke-emerald-600/40" strokeWidth="1.2" />

          <text x="16" y="66" className="fill-slate-900 dark:fill-slate-100 text-[11px] font-bold">
            • PII Masking & Scrubbing
          </text>
          <text x="25" y="82" className="fill-slate-600 dark:fill-slate-300 text-[10px]">
            กรองและสกัดข้อมูลระบุตัวตนออก 100%
          </text>

          <text x="16" y="104" className="fill-slate-900 dark:fill-slate-100 text-[11px] font-bold">
            • Local Vector Embeddings
          </text>
          <text x="25" y="120" className="fill-slate-600 dark:fill-slate-300 text-[10px]">
            สร้างเวกเตอร์เฉพาะภายในองค์กร
          </text>

          <text x="16" y="142" className="fill-slate-900 dark:fill-slate-100 text-[11px] font-bold">
            • Thai Cultural Context
          </text>
          <text x="25" y="158" className="fill-slate-600 dark:fill-slate-300 text-[10px]">
            เข้าใจบริบท ภาษา และวัฒนธรรมไทย
          </text>

          <rect x="12" y="168" width="211" height="24" rx="6" className="fill-emerald-600 text-white shadow-xs" />
          <text x="117" y="180" dominantBaseline="central" textAnchor="middle" className="fill-white font-bold text-[10px] tracking-wide">
            ✓ โรงกลั่นข้อมูลขององค์กร (Core)
          </text>
        </g>

        {/* Node 3: Sovereign Gateway (x: 545, width: 135) */}
        <g transform="translate(545, 48)">
          <rect
            width="135"
            height="205"
            rx="10"
            className="fill-white dark:fill-slate-900 stroke-blue-500 dark:stroke-cyan-400 shadow-md"
            strokeWidth="2"
          />
          <circle cx="20" cy="22" r="9" className="fill-blue-600 dark:fill-cyan-400" />
          <text x="20" y="26" textAnchor="middle" className="fill-white font-mono text-[11px] font-bold">3</text>
          <text x="36" y="19" className="fill-blue-900 dark:fill-cyan-200 font-bold text-[10px]">
            Sovereign
          </text>
          <text x="36" y="32" className="fill-blue-900 dark:fill-cyan-200 font-bold text-[10px]">
            Gateway
          </text>
          <line x1="12" y1="42" x2="123" y2="42" className="stroke-blue-200 dark:stroke-cyan-800/40" strokeWidth="1" />

          <text x="67" y="62" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 font-bold text-[11px]">
            Security Filter
          </text>

          <rect x="14" y="76" width="107" height="24" rx="6" className="fill-blue-50 dark:fill-blue-950/40 border border-blue-200 dark:border-cyan-500/30" />
          <text x="67" y="88" dominantBaseline="central" textAnchor="middle" className="fill-blue-700 dark:fill-cyan-300 font-mono text-[10px] font-bold">
            Zero-Retention
          </text>

          <rect x="14" y="108" width="107" height="24" rx="6" className="fill-emerald-50 dark:fill-emerald-950/40 border border-emerald-200 dark:border-emerald-500/30" />
          <text x="67" y="120" dominantBaseline="central" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10px] font-bold">
            Tokenized API
          </text>

          <rect x="14" y="140" width="107" height="24" rx="6" className="fill-slate-50 dark:fill-slate-800 border border-slate-200 dark:border-white/10" />
          <text x="67" y="152" dominantBaseline="central" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 font-mono text-[9px] font-semibold">
            Strict Audit Log
          </text>

          <rect x="14" y="170" width="107" height="22" rx="5" className="fill-amber-50 dark:fill-amber-950/40 border border-amber-200 dark:border-amber-500/30" />
          <text x="67" y="181" dominantBaseline="central" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 font-mono text-[9px] font-bold">
            Encrypted Egress
          </text>
        </g>

        {/* Node 4: Frontier Multi-Model AI (x: 900, width: 265) */}
        <g transform="translate(900, 48)">
          <rect
            width="265"
            height="205"
            rx="12"
            className="fill-white dark:fill-slate-900 stroke-indigo-400 dark:stroke-indigo-400 shadow-md"
            strokeWidth="1.8"
          />
          <circle cx="22" cy="22" r="10" className="fill-indigo-600" />
          <text x="22" y="26" textAnchor="middle" className="fill-white font-mono text-[11px] font-bold">4</text>
          <text x="38" y="19" className="fill-slate-900 dark:fill-white font-bold text-[10px]">
            Foundation Models (AI)
          </text>
          <text x="38" y="32" className="fill-indigo-600 dark:fill-indigo-300 font-mono text-[10px]">
            Frontier Cognitive Engine
          </text>
          <line x1="12" y1="42" x2="253" y2="42" className="stroke-slate-200 dark:stroke-white/10" strokeWidth="1" />

          <text x="16" y="66" className="fill-slate-900 dark:fill-slate-100 text-[11px] font-bold">
            • Multi-Model: Frontier LLM & SLM
          </text>
          <text x="25" y="82" className="fill-slate-600 dark:fill-slate-300 text-[10px]">
            เลือกใช้โมเดลตามความเหมาะสมของงาน
          </text>

          <text x="16" y="104" className="fill-slate-900 dark:fill-slate-100 text-[11px] font-bold">
            • Ephemeral Reasoning Only
          </text>
          <text x="25" y="120" className="fill-slate-600 dark:fill-slate-300 text-[10px]">
            ประมวลผลในหน่วยความจำชั่วคราว (ไม่บันทึก)
          </text>

          <text x="16" y="142" className="fill-slate-900 dark:fill-slate-100 text-[11px] font-bold">
            • Return High-Value Insights & Action
          </text>
          <text x="25" y="158" className="fill-slate-600 dark:fill-slate-300 text-[10px]">
            ส่งเฉพาะผลวิเคราะห์และคำสั่งปฏิบัติการ
          </text>

          <rect x="12" y="168" width="241" height="24" rx="6" className="fill-indigo-50 dark:fill-indigo-950/60 border border-indigo-200 dark:border-indigo-500/30" />
          <text x="132" y="180" dominantBaseline="central" textAnchor="middle" className="fill-indigo-700 dark:fill-indigo-300 font-mono text-[10px] font-bold tracking-wide">
            🔒 NO TRAINING ON CORP DATA
          </text>
        </g>
      </svg>
    </div>
  );
}
