/**
 * Slide Timestamp Synchronization Configuration
 *
 * จับคู่เวลา (Time Sync) สำหรับไฟล์เสียงบรรยายเต็มความยาว:
 * public/audio/ai-first-enterprise/ai-first-enterprise.mp3 (ความยาว 504.8 วินาที / 8.41 นาที)
 *
 * คำนวณและเทียบจุดเปลี่ยนสไลด์จากคำพูดจริงแบบแม่นยำระดับวินาที (Precision Timestamp)
 */

export interface SlideTimestamp {
  slide: number; // หมายเลขสไลด์ (1 ถึง 18)
  startTime: number; // เวลาเริ่มต้นของสไลด์นี้ในหน่วย "วินาที"
  label?: string; // คำบรรยายหัวข้อสไลด์
}

export const aiFirstEnterpriseTimestamps: SlideTimestamp[] = [
  { slide: 1, startTime: 0.0, label: "หน้าปก: อนาคตขององค์กรยุค AI" },
  { slide: 2, startTime: 24.4, label: "Agenda: ภาพรวมการนำเสนอ 3 ส่วนหลัก" },
  {
    slide: 3,
    startTime: 57.4,
    label: "บทนำส่วนที่ 1: The AI-First Enterprise",
  },
  {
    slide: 4,
    startTime: 74.9,
    label: 'ก้าวข้าม "กับดักประสิทธิภาพ" (Efficiency Trap)',
  },
  {
    slide: 5,
    startTime: 108.2,
    label: "เครื่องมือสำหรับทุกคน & Mission-Driven Teams",
  },
  {
    slide: 6,
    startTime: 134.1,
    label: "กับดักโครงสร้างองค์กรทรงเพชร (The Diamond Trap)",
  },
  { slide: 7, startTime: 169.1, label: "สถาปัตยกรรมโครงสร้างทีม (Topology)" },
  { slide: 8, startTime: 199.8, label: "5 ทักษะจำเป็นสำหรับพนักงานในยุค AI" },
  {
    slide: 9,
    startTime: 239.0,
    label: "บทนำส่วนที่ 2: Building a Solid Foundation",
  },
  {
    slide: 10,
    startTime: 256.0,
    label: "อธิปไตยทางดิจิทัลและข้อมูลท้องถิ่น (Digital Sovereignty)",
  },
  { slide: 11, startTime: 286.0, label: "สถาปัตยกรรม Sovereign Data Refinery" },
  {
    slide: 12,
    startTime: 315.4,
    label: "3 เสาหลัก & กรณีศึกษาความสำเร็จ (Rigo, New Hope)",
  },
  {
    slide: 13,
    startTime: 344.9,
    label: "บทนำส่วนที่ 3: The Agentic AI Landscape",
  },
  {
    slide: 14,
    startTime: 364.5,
    label: "ยุคแห่ง Agentic AI & การป้องกันเชิงรุก (Multi-Agent Defense)",
  },
  {
    slide: 15,
    startTime: 397.9,
    label: "AI IQ, Context Engineering & Token Economy",
  },
  {
    slide: 16,
    startTime: 427.1,
    label: "แนวปฏิบัติที่ดีที่สุดในระดับองค์กร (Best Practices)",
  },
  {
    slide: 17,
    startTime: 455.1,
    label: "พอดแคสต์เจาะลึก 4 ตอนพิเศษ (Deep-Dive Podcasts)",
  },
  { slide: 18, startTime: 481.1, label: "บทสรุปและถาม-ตอบ (Conclusion & Q&A)" },
];
