import Link from 'next/link';
import { presentationsList } from '@/presentations/data';
import { ThemeToggle } from '@/components/presentation/ThemeToggle';
import {
  Presentation,
  ArrowRight,
  Layers,
  Sparkles,
  FileCode2,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-liquid-canvas text-slate-800 dark:text-slate-100 flex flex-col relative overflow-hidden transition-colors duration-300">
      {/* Background ambient liquid glow orbs (Stationary, Calm Glow) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-400/20 dark:bg-cyan-500/15 rounded-full blur-3xl opacity-80" />
        <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-fuchsia-400/15 dark:bg-indigo-500/15 rounded-full blur-3xl opacity-80" />
        <div className="absolute -bottom-40 left-1/3 w-[32rem] h-[32rem] bg-cyan-400/15 dark:bg-fuchsia-500/15 rounded-full blur-3xl opacity-80" />
      </div>

      {/* Header */}
      <header className="border-b border-slate-200/80 dark:border-white/10 bg-white/75 dark:bg-slate-950/60 backdrop-blur-xl sticky top-0 z-20 transition-colors">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-fuchsia-600 dark:from-cyan-400 dark:via-blue-600 dark:to-fuchsia-600 text-white flex items-center justify-center shadow-md shadow-blue-500/25 dark:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              <Presentation className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-slate-900 dark:text-white tracking-tight leading-tight">
                Presentation Hub
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">Next.js & Tailwind Web Slides</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <ThemeToggle variant="button" />

            <span className="text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 shadow-xs dark:bg-cyan-500/10 dark:text-cyan-300 rounded-full dark:border-cyan-400/30 dark:shadow-[0_0_15px_rgba(6,182,212,0.2)] backdrop-blur-md">
              {presentationsList.length} ชุดนำเสนอ
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-12 relative z-10">
        {/* Hero Section */}
        <div className="mb-12 text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 shadow-xs dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-400/30 mb-4 dark:shadow-[0_0_15px_rgba(6,182,212,0.2)] backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 animate-pulse" /> Next-Gen Slide Deck
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            คลังชุดนำเสนอ{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-600 dark:from-cyan-400 dark:via-indigo-300 dark:to-fuchsia-400 block sm:inline">
              (Presentations Catalog)
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg mt-3 max-w-2xl leading-relaxed">
            แยกนำเสนออิสระตาม path (1 Path = 1 ชุดนำเสนอ) พร้อมระบบ Component ที่นำกลับมาใช้ซ้ำได้สะดวกและปรับแต่งด้วยสไตล์ Liquid Color
          </p>
        </div>

        {/* Presentations List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {presentationsList.map((item) => (
            <div
              key={item.slug}
              className="group glass-panel rounded-3xl border border-slate-200/80 dark:border-white/10 hover:border-blue-400/50 dark:hover:border-cyan-400/40 hover:shadow-xl dark:hover:shadow-[0_12px_40px_rgba(6,182,212,0.2)] transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Card Banner */}
              <div
                className={`h-36 bg-gradient-to-r ${item.gradient} p-6 flex flex-col justify-between text-white relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10 dark:bg-slate-950/20 backdrop-blur-[2px]" />
                <div className="flex justify-between items-start z-10">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold border border-white/20 shadow-sm">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <Layers className="w-3.5 h-3.5 text-cyan-300" />
                    <span className="font-medium">{item.slideCount} สไลด์</span>
                  </div>
                </div>
                <div className="text-xs text-white/95 font-mono z-10 bg-black/35 backdrop-blur-md px-2.5 py-1 rounded-lg w-fit border border-white/10">
                  Path: <span className="text-cyan-200 font-bold">{item.path}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-black text-xl text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-0.5 glass-panel-subtle text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200/80 dark:border-white/10"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Link
                    href={item.path}
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-cyan-500 dark:via-blue-600 dark:to-indigo-600 hover:opacity-95 text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-500/20 dark:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] group-hover:scale-[1.02]"
                  >
                    <span>เปิดการนำเสนอ</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How to add a new presentation Guide */}
        <div className="glass-panel rounded-3xl p-8 text-slate-900 dark:text-white border border-slate-200/80 dark:border-white/15 shadow-sm dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-fuchsia-500/5 dark:from-cyan-500/5 dark:via-indigo-500/5 dark:to-fuchsia-500/5 pointer-events-none" />
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 dark:bg-cyan-500/20 dark:border-cyan-400/30 flex items-center justify-center dark:text-cyan-300 shadow-sm dark:shadow-[0_0_15px_rgba(6,182,212,0.25)]">
              <FileCode2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">วิธีเพิ่มชุดนำเสนอใหม่ (1 Path = 1 ชุด)</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">ออกแบบโครงสร้างให้ขยายและเพิ่มชุดใหม่ได้ทันที</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm relative z-10">
            <div className="glass-panel-subtle border border-slate-200/80 dark:border-white/10 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-blue-600 dark:text-cyan-300 font-bold mb-2">
                <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-700 border border-blue-200 dark:bg-cyan-500/20 dark:border-cyan-400/30 flex items-center justify-center text-xs">1</span>
                <span>สร้างชุดสไลด์</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                สร้างโฟลเดอร์ <code className="text-blue-600 dark:text-cyan-300 font-mono">presentations/[my-topic]/slides.tsx</code> และประกอบเนื้อหาโดยดึง Reusable Components เช่น <code className="text-blue-600 dark:text-cyan-300 font-mono">Slide</code>, <code className="text-blue-600 dark:text-cyan-300 font-mono">Card</code>, <code className="text-blue-600 dark:text-cyan-300 font-mono">QuoteBox</code>
              </p>
            </div>

            <div className="glass-panel-subtle border border-slate-200/80 dark:border-white/10 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-300 font-bold mb-2">
                <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-500/20 dark:border-indigo-400/30 flex items-center justify-center text-xs">2</span>
                <span>ลงทะเบียนใน Data</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                เพิ่ม metadata ใน <code className="text-indigo-600 dark:text-indigo-300 font-mono">presentations/data.ts</code> กำหนด slug, ชื่อเรื่อง, path และหมวดหมู่
              </p>
            </div>

            <div className="glass-panel-subtle border border-slate-200/80 dark:border-white/10 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-fuchsia-600 dark:text-fuchsia-300 font-bold mb-2">
                <span className="w-6 h-6 rounded-full bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-200 dark:bg-fuchsia-500/20 dark:border-fuchsia-400/30 flex items-center justify-center text-xs">3</span>
                <span>เข้าใช้งานผ่าน URL</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                เข้าชมได้ทันทีตาม path เช่น <code className="text-fuchsia-600 dark:text-fuchsia-300 font-mono">/my-topic</code> หรือ <code className="text-fuchsia-600 dark:text-fuchsia-300 font-mono">/presentations/my-topic</code> พร้อมระบบควบคุมครบครัน
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/80 dark:border-white/10 bg-white/50 dark:bg-slate-950/40 backdrop-blur-md py-6 text-center text-xs text-slate-500 relative z-10 transition-colors">
        <p>Built with Next.js & Tailwind CSS • Modular Slide Deck System (Liquid Color Edition)</p>
      </footer>
    </div>
  );
}
