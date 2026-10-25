/**
 * Slide Timestamp Synchronization Configuration
 *
 * จับคู่เวลา (Time Sync) สำหรับไฟล์เสียงบรรยายเต็มความยาว:
 * public/audio/renaissanc-builder/renaissanc-builder.mp3 (ความยาว 579.6 วินาที / 9.66 นาที)
 *
 * คำนวณและเทียบจุดเปลี่ยนสไลด์จากคำพูดจริงแบบแม่นยำระดับวินาที (Precision Timestamp)
 */

export interface SlideTimestamp {
  slide: number; // หมายเลขสไลด์ (1 ถึง 17)
  startTime: number; // เวลาเริ่มต้นของสไลด์นี้ในหน่วย "วินาที"
  label?: string; // คำบรรยายหัวข้อสไลด์
}

export const renaissancBuilderTimestamps: SlideTimestamp[] = [
  { slide: 1, startTime: 0.0, label: "หน้าปก: The Renaissance Builder" },
  { slide: 2, startTime: 33.4, label: "สารบัญและโร้ดแมป (Agenda & Strategic Roadmap)" },
  { slide: 3, startTime: 69.9, label: "บทนำส่วนที่ 1: The Renaissance Builder (Section 1)" },
  { slide: 4, startTime: 94.0, label: "การเปลี่ยนผ่านสู่ยุคทอง (The Paradigm Shift)" },
  { slide: 5, startTime: 126.0, label: "เสาหลักที่ 1: ความกระหายใคร่รู้และการทดลอง (Curiosity)" },
  { slide: 6, startTime: 159.2, label: "เสาหลักที่ 2: การคิดเชิงระบบ (Systems Thinking)" },
  { slide: 7, startTime: 202.4, label: "สถาปัตยกรรมเชิงระบบ (Systems Feedback Loops)" },
  { slide: 8, startTime: 247.0, label: "เสาหลักที่ 3: การสื่อสารจากหลักการแรก (Communication)" },
  { slide: 9, startTime: 285.4, label: "AI ในฐานะคอมไพเลอร์ (AI as a Compiler)" },
  { slide: 10, startTime: 321.9, label: "บทนำส่วนที่ 2: Architecture & Rigor (Section 2)" },
  { slide: 11, startTime: 342.7, label: "เสาหลักที่ 4: ความเป็นเจ้าของและหนี้การตรวจสอบ (Ownership)" },
  { slide: 12, startTime: 381.0, label: "เสาหลักที่ 5: นักพัฒนาพหูสูต (The Polymath Builder)" },
  { slide: 13, startTime: 415.0, label: "นวัตกรรมคลาวด์: Event-Driven, Firecracker & SnapStart" },
  { slide: 14, startTime: 451.0, label: "สถาปัตยกรรมรองรับ 10M ผู้ใช้ และ Frugal Architecture" },
  { slide: 15, startTime: 480.8, label: "ความมั่นคงปลอดภัยยุคควอนตัม (Post-Quantum Cryptography)" },
  { slide: 16, startTime: 514.8, label: "โมเดลภาษาที่เข้าใจวัฒนธรรมท้องถิ่น (Culture-Aware AI)" },
  { slide: 17, startTime: 549.0, label: "สรุปวิสัยทัศน์: Keep Calm and Now Go Build" },
];
