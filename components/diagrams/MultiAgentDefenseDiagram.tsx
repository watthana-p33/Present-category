'use client';

import React from 'react';

/**
 * MultiAgentDefenseDiagram
 * Architecture + Continuous Active Defense Pattern
 * Calibrated ViewBox (1020x325) with ample vertical breathing room in Zone 02 (40px inter-box gap),
 * font-weights strictly capped at 600 (never exceeding 700), and perfectly aligned coaxial connectors.
 */
export function MultiAgentDefenseDiagram({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden rounded-2xl glass-panel p-3 sm:p-4 border border-slate-200/80 dark:border-white/10 ${className}`}>
      {/* Diagram Top Bar */}
      <div className="flex items-center justify-between mb-2.5 pb-1.5 border-b border-slate-200/60 dark:border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
          <span className="text-[10px] sm:text-sm font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200 font-mono">
            Architecture: Continuous Active Defense System
          </span>
        </div>
        <div className="flex items-center gap-3 text-[10px] font-mono text-slate-600 dark:text-slate-300">
          <span className="inline-flex items-center gap-1.5 font-medium text-rose-600 dark:text-rose-400">
            <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" /> Red (Probing)
          </span>
          <span className="inline-flex items-center gap-1.5 font-medium text-blue-600 dark:text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" /> Blue (SOC Defense)
          </span>
          <span className="inline-flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> Green (Governance)
          </span>
        </div>
      </div>

      <svg
        viewBox="0 0 1020 325"
        className="w-full h-auto select-none font-sans block"
      >
        <defs>
          {/* Arrow markers */}
          <marker id="mad-arrow-slate" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" className="fill-slate-400 dark:fill-slate-500" />
          </marker>
          <marker id="mad-arrow-red" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" className="fill-rose-500" />
          </marker>
          <marker id="mad-arrow-blue" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" className="fill-blue-500 dark:fill-cyan-400" />
          </marker>
          <marker id="mad-arrow-green" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" className="fill-emerald-500" />
          </marker>
          <marker id="mad-arrow-indigo" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" className="fill-indigo-500 dark:fill-indigo-400" />
          </marker>

          {/* Gradients */}
          <linearGradient id="mad-red-zone" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.03" />
          </linearGradient>
          <linearGradient id="mad-blue-zone" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.04" />
          </linearGradient>
          <linearGradient id="mad-green-zone" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.03" />
          </linearGradient>
        </defs>

        {/* ================= ZONES (TRUST BOUNDARIES) ================= */}
        {/* Zone 1: Threat Surface (Left: x=15 to 185, width=170, height=295) */}
        <rect
          x="15"
          y="15"
          width="170"
          height="295"
          rx="12"
          className="fill-slate-100/70 dark:fill-white/[0.03] stroke-slate-300 dark:stroke-white/10"
          strokeWidth="1.2"
          strokeDasharray="4,4"
        />
        <text x="27" y="35" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono tracking-wider uppercase font-semibold">
          ZONE 01: EXTERNAL THREATS
        </text>

        {/* Zone 2: Continuous Active Defense Core (Center: x=255 to 525, width=270, height=295) */}
        <rect
          x="255"
          y="15"
          width="270"
          height="295"
          rx="12"
          className="fill-slate-50/60 dark:fill-slate-900/50 stroke-blue-500/40 dark:stroke-cyan-500/40"
          strokeWidth="1.5"
        />
        <text x="270" y="35" className="fill-blue-700 dark:fill-cyan-300 text-[11px] font-mono tracking-wider uppercase font-semibold">
          ZONE 02: MULTI-AGENT DEFENSE CORE (24/7 ACTIVE)
        </text>

        {/* Zone 3: Enterprise Assets & Governance (Right: x=745 to 1005, width=260, height=295) */}
        <rect
          x="745"
          y="15"
          width="260"
          height="295"
          rx="12"
          className="fill-slate-100/70 dark:fill-white/[0.03] stroke-slate-300 dark:stroke-white/10"
          strokeWidth="1.2"
          strokeDasharray="4,4"
        />
        <text x="760" y="35" className="fill-emerald-700 dark:fill-emerald-400 text-[10px] font-mono tracking-wider uppercase font-semibold">
          ZONE 03: PROTECTED ASSETS
        </text>

        {/* ================= CONNECTORS: CORRIDOR 1 (ZONE 1 -> ZONE 2) ================= */}
        {/* Attacker -> Red Probe (Straight horizontal at y=77) */}
        <path
          d="M 173,77 H 267"
          fill="none"
          className="stroke-rose-500"
          strokeWidth="1.8"
          markerEnd="url(#mad-arrow-red)"
        />
        <rect
          x="193"
          y="67"
          width="54"
          height="20"
          rx="4"
          className="fill-white dark:fill-slate-900 stroke-rose-200 dark:stroke-rose-500/40 shadow-xs"
          strokeWidth="1"
        />
        <text
          x="220"
          y="77"
          dominantBaseline="central"
          textAnchor="middle"
          className="fill-rose-700 dark:fill-rose-300 text-[9px] font-mono font-medium"
        >
          Probing
        </text>

        {/* Attacker -> Ingress Bypass attempt (Straight horizontal at y=172) */}
        <path
          d="M 173,172 H 267"
          fill="none"
          className="stroke-rose-400/80 dark:stroke-rose-500/80"
          strokeWidth="1.5"
          strokeDasharray="4,3"
          markerEnd="url(#mad-arrow-red)"
        />
        <rect
          x="193"
          y="162"
          width="54"
          height="20"
          rx="4"
          className="fill-white dark:fill-slate-900 stroke-rose-200 dark:stroke-rose-500/40 shadow-xs"
          strokeWidth="1"
        />
        <text
          x="220"
          y="172"
          dominantBaseline="central"
          textAnchor="middle"
          className="fill-rose-700 dark:fill-rose-300 text-[9px] font-mono font-medium"
        >
          Attack
        </text>

        {/* ================= CONNECTORS: INSIDE ZONE 2 (GENEROUS 40PX INTER-BOX GAPS) ================= */}
        {/* Red Agent -> Blue Agent (Vulnerability Feedback Loop: y=104 to y=144, 40px gap) */}
        <path
          d="M 390,104 V 144"
          fill="none"
          className="stroke-slate-400 dark:stroke-slate-500"
          strokeWidth="1.6"
          markerEnd="url(#mad-arrow-slate)"
        />
        <rect
          x="355"
          y="108"
          width="70"
          height="20"
          rx="4"
          className="fill-white dark:fill-slate-900 stroke-slate-200 dark:stroke-slate-700 shadow-xs"
          strokeWidth="1"
        />
        <text
          x="390"
          y="118"
          dominantBaseline="central"
          textAnchor="middle"
          className="fill-slate-600 dark:fill-slate-300 text-[9px] font-mono font-medium"
        >
          Vuln Feed
        </text>

        {/* Green Agent -> Blue Agent (Guardrails & Policy: y=240 to y=200, 40px gap) */}
        <path
          d="M 390,240 V 200"
          fill="none"
          className="stroke-emerald-600 dark:stroke-emerald-400"
          strokeWidth="1.6"
          markerEnd="url(#mad-arrow-green)"
        />
        <rect
          x="330"
          y="215"
          width="120"
          height="20"
          rx="4"
          className="fill-white dark:fill-slate-900 stroke-emerald-200 dark:stroke-emerald-800/40 shadow-xs"
          strokeWidth="1"
        />
        <text
          x="390"
          y="225"
          dominantBaseline="central"
          textAnchor="middle"
          className="fill-emerald-700 dark:fill-emerald-400 text-[9px] font-mono font-medium"
        >
          Policy & Guardrails
        </text>

        {/* ================= CONNECTORS: CORRIDOR 2 (ZONE 2 <-> ZONE 3) ================= */}
        {/* Spacious 220px Corridor: x=525 to x=745 with 95px vertical pitch */}

        {/* 1. Human SOC / Killswitch -> Blue Agent (Straight horizontal at y=77) */}
        <path
          d="M 757,77 H 513"
          fill="none"
          className="stroke-indigo-500 dark:stroke-indigo-400"
          strokeWidth="1.6"
          strokeDasharray="4,3"
          markerEnd="url(#mad-arrow-indigo)"
        />
        <rect
          x="543"
          y="65"
          width="184"
          height="24"
          rx="6"
          className="fill-white dark:fill-slate-900 stroke-indigo-200 dark:stroke-indigo-500/40 shadow-xs"
          strokeWidth="1"
        />
        <text
          x="635"
          y="77"
          dominantBaseline="central"
          textAnchor="middle"
          className="fill-indigo-700 dark:fill-indigo-300 text-[10px] font-mono font-medium"
        >
           Human Oversight / Killswitch
        </text>

        {/* 2. Blue Agent -> Protected Assets (Straight horizontal at y=172) */}
        <path
          d="M 513,172 H 757"
          fill="none"
          className="stroke-blue-600 dark:stroke-cyan-400"
          strokeWidth="2"
          markerEnd="url(#mad-arrow-blue)"
        />
        <rect
          x="543"
          y="160"
          width="184"
          height="24"
          rx="6"
          className="fill-white dark:fill-slate-900 stroke-blue-200 dark:stroke-cyan-500/40 shadow-xs"
          strokeWidth="1"
        />
        <text
          x="635"
          y="172"
          dominantBaseline="central"
          textAnchor="middle"
          className="fill-blue-700 dark:fill-cyan-300 text-[10px] font-mono font-medium"
        >
          Remediated & Verified Traffic 
        </text>

        {/* 3. Green Agent -> Core Assets Compliance Audit (Straight horizontal at y=267) */}
        <path
          d="M 513,267 H 757"
          fill="none"
          className="stroke-emerald-600/90 dark:stroke-emerald-400/90"
          strokeWidth="1.6"
          strokeDasharray="4,3"
          markerEnd="url(#mad-arrow-green)"
        />
        <rect
          x="543"
          y="255"
          width="184"
          height="24"
          rx="6"
          className="fill-white dark:fill-slate-900 stroke-emerald-200 dark:stroke-emerald-500/40 shadow-xs"
          strokeWidth="1"
        />
        <text
          x="635"
          y="267"
          dominantBaseline="central"
          textAnchor="middle"
          className="fill-emerald-700 dark:fill-emerald-400 text-[10px] font-mono font-medium"
        >
          Policy & Compliance Audit 
        </text>

        {/* ================= NODES ================= */}
        {/* Zone 1: Threat Ingress Nodes */}
        <g transform="translate(27, 50)">
          <rect
            width="146"
            height="54"
            rx="8"
            className="fill-white dark:fill-slate-900 stroke-rose-300 dark:stroke-rose-500/50 shadow-sm"
            strokeWidth="1.5"
          />
          <text x="73" y="20" dominantBaseline="central" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 font-semibold text-[10px]">
            Adversarial Threats
          </text>
          <text x="73" y="37" dominantBaseline="central" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 font-mono text-[9px] font-normal">
            AI Prompt Injection / Bots
          </text>
        </g>

        <g transform="translate(27, 144)">
          <rect
            width="146"
            height="150"
            rx="8"
            className="fill-white dark:fill-slate-900 stroke-slate-300 dark:stroke-white/20 shadow-sm"
            strokeWidth="1.2"
          />
          <text x="73" y="25" dominantBaseline="central" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 font-semibold text-[10px]">
            Unknown Vectors
          </text>
          <text x="73" y="45" dominantBaseline="central" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 font-mono text-[9px] font-normal">
            API Abuse & Data Exfil
          </text>
          <line x1="12" y1="65" x2="134" y2="65" className="stroke-slate-200 dark:stroke-white/10" strokeWidth="1" />
          <rect x="12" y="77" width="122" height="26" rx="4" className="fill-slate-100 dark:fill-slate-800 border border-slate-200 dark:border-white/10" />
          <text x="73" y="90" dominantBaseline="central" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 font-mono text-[9px] font-medium">
            Zero-Day Exploit Surface
          </text>
          <rect x="12" y="111" width="122" height="26" rx="4" className="fill-rose-50 dark:fill-rose-950/40 border border-rose-200 dark:border-rose-500/30" />
          <text x="73" y="124" dominantBaseline="central" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 font-mono text-[9px] font-medium">
            Ingress Threat Anomaly
          </text>
        </g>

        {/* Zone 2: Multi-Agent Core Nodes (Spacious 40px gaps between each agent) */}
        {/* Node: Red Agent (Simulated Attack: y=50 to y=104) */}
        <g transform="translate(267, 50)">
          <rect
            width="246"
            height="54"
            rx="9"
            fill="url(#mad-red-zone)"
            className="stroke-rose-500 shadow-sm"
            strokeWidth="1.8"
          />
          <circle cx="22" cy="27" r="9" className="fill-rose-500" />
          <text x="22" y="27" dominantBaseline="central" textAnchor="middle" className="fill-white font-mono text-[11px] font-semibold">R</text>
          <text x="38" y="20" className="fill-slate-900 dark:fill-white font-semibold text-[10px] ">
            Red Agent (Active Pentesting)
          </text>
          <text x="38" y="37" className="fill-rose-700 dark:fill-rose-300 font-normal text-[10px]">
            จำลองเจาะระบบหาช่องโหว่ตลอด 24/7
          </text>
        </g>

        {/* Node: Blue Agent (Active Detection & Defense: y=144 to y=200) */}
        <g transform="translate(267, 144)">
          <rect
            width="246"
            height="56"
            rx="9"
            fill="url(#mad-blue-zone)"
            className="stroke-blue-500 dark:stroke-cyan-400 shadow-md"
            strokeWidth="2.2"
          />
          <circle cx="22" cy="28" r="10" className="fill-blue-600 dark:fill-cyan-400" />
          <text x="22" y="28" dominantBaseline="central" textAnchor="middle" className="fill-white font-mono text-[11px] font-semibold">B</text>
          <text x="38" y="21" className="fill-slate-900 dark:fill-white font-semibold text-[10px] ">
            Blue Agent (Auto SOC Defense)
          </text>
          <text x="38" y="38" className="fill-blue-800 dark:fill-cyan-300 font-normal text-[10px]">
            ตรวจจับ สอบสวน & แก้ไขภัยคุกคามทันที
          </text>
        </g>

        {/* Node: Green Agent (Governance & Compliance: y=240 to y=294) */}
        <g transform="translate(267, 240)">
          <rect
            width="246"
            height="54"
            rx="9"
            fill="url(#mad-green-zone)"
            className="stroke-emerald-500 shadow-sm"
            strokeWidth="1.8"
          />
          <circle cx="22" cy="27" r="9" className="fill-emerald-500" />
          <text x="22" y="27" dominantBaseline="central" textAnchor="middle" className="fill-white font-mono text-[11px] font-semibold">G</text>
          <text x="38" y="20" className="fill-slate-900 dark:fill-white font-semibold text-[10px] ">
            Green Agent (Compliance Guard)
          </text>
          <text x="38" y="37" className="fill-emerald-800 dark:fill-emerald-300 font-normal text-[10px]">
            คุมจริยธรรม กฎระเบียบ & ข้อมูล PII
          </text>
        </g>

        {/* Zone 3: Protected Assets Nodes */}
        {/* Node: Human-in-the-Loop Approval (y=50 to y=104) */}
        <g transform="translate(757, 50)">
          <rect
            width="236"
            height="54"
            rx="10"
            className="fill-white dark:fill-slate-900 stroke-indigo-400 dark:stroke-indigo-400 shadow-sm"
            strokeWidth="1.5"
          />
          <circle cx="22" cy="27" r="9" className="fill-indigo-100 dark:fill-indigo-900/60" />
          <text x="22" y="27" dominantBaseline="central" textAnchor="middle" className="fill-indigo-600 dark:fill-indigo-400 font-semibold text-[10px]">👤</text>
          <text x="38" y="20" className="fill-slate-900 dark:fill-white font-semibold text-[10px] ">
            Human-in-the-Loop
          </text>
          <text x="38" y="37" className="fill-indigo-700 dark:fill-indigo-300 font-normal text-[10px]">
            อนุมัติการสั่งการระดับวิกฤต (Killswitch)
          </text>
        </g>

        {/* Node: Enterprise Core Assets (y=144 to y=294) */}
        <g transform="translate(757, 144)">
          <rect
            width="236"
            height="150"
            rx="10"
            className="fill-white dark:fill-slate-900 stroke-emerald-500 dark:stroke-emerald-400 shadow-sm"
            strokeWidth="1.8"
          />
          <circle cx="22" cy="26" r="9" className="fill-emerald-100 dark:fill-emerald-900/60" />
          <text x="22" y="26" dominantBaseline="central" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 font-semibold text-[10px]">🛡️</text>
          <text x="38" y="20" className="fill-slate-900 dark:fill-white font-semibold text-[10px] ">
            Core Enterprise Data
          </text>
          <text x="38" y="38" className="fill-emerald-700 dark:fill-emerald-400 font-normal text-[10.5px]">
            ฐานข้อมูล & ระบบสำคัญปลอดภัย 100%
          </text>
          <line x1="12" y1="55" x2="224" y2="55" className="stroke-slate-200 dark:stroke-white/10" strokeWidth="1" />
          <rect x="12" y="68" width="212" height="28" rx="5" className="fill-slate-50 dark:fill-slate-800/80 border border-slate-200 dark:border-white/10" />
          <text x="118" y="82" dominantBaseline="central" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 font-mono text-[9.5px] font-medium">
            Active Real-Time Quarantine
          </text>
          <rect x="12" y="106" width="212" height="28" rx="5" className="fill-emerald-50 dark:fill-emerald-950/40 border border-emerald-200 dark:border-emerald-500/30" />
          <text x="118" y="120" dominantBaseline="central" textAnchor="middle" className="fill-emerald-800 dark:fill-emerald-300 font-mono text-[9.5px] font-semibold">
            🔒 Zero Data Exfiltration
          </text>
        </g>
      </svg>
    </div>
  );
}
