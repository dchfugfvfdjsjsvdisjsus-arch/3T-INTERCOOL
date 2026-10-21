import React, { useState } from 'react';
import { ShieldCheck, Flame, Gauge, CalendarCheck, CheckCircle2 } from 'lucide-react';

export const StandardsSection: React.FC = () => {
  const [activeChecklistTab, setActiveChecklistTab] = useState<'safety' | 'material' | 'testing' | 'maintenance'>('safety');

  const checklistDetails = {
    safety: [
      'ช่างทุกคนผ่านการอบรม จป. (เจ้าหน้าที่ความปลอดภัยในการทำงาน)',
      'ขอใบอนุญาตทำงานที่มีความร้อนและประกายไฟ (Hot Work Permit) ก่อนเริ่มงานเชื่อม',
      'สวมใส่อุปกรณ์ PPE ครบชุด (หมวกนิรภัย, แว่นตานิรภัย, ถุงมือหนัง, รองเท้าหัวเหล็ก, Harness ทำงานที่สูง)',
      'มีถังดับเพลิงและผ้ากันสะเก็ดไฟ Fire Blanket ประจำจุดปฏิบัติงานทุกครั้ง',
      'ระบบ Lockout / Tagout (LOTO) ตัดวงจรไฟฟ้าก่อนซ่อมบำรุง 100%'
    ],
    material: [
      'แผ่นฉนวน Sandwich Panel โฟม PIR ชนิดไม่ลามไฟ มาตรฐาน B1',
      'เหล็กและสแตนเลส SUS 304 เกรดอุตสาหกรรมอาหาร Food Contact',
      'ท่อทองแดงชนิดหนา Type L / Type K สำหรับระบบน้ำยาแรงดันสูง R-410A / R-32',
      'ท่อลมสังกะสีความหนาตามเกณฑ์วิศวกรรม SMACNA มาตรฐานสากล',
      'ฉนวนหุ้มท่อยางดำเซลล์ปิดสังเคราะห์ ป้องกันการกลั่นตัวเป็นหยดน้ำ'
    ],
    testing: [
      'อัดก๊าซไนโตรเจนแห้ง (OFN) ทดสอบแรงดันรั่วซึมค้างไว้ 24-48 ชั่วโมง',
      'ดึงสุญญากาศแบบลึก (Deep Vacuum) ต่ำกว่า 500 ไมครอน ด้วยเกจวัดดิจิทัล',
      'ชั่งน้ำหนักน้ำยาด้วยตราชั่งดิจิทัลตามพิกัดโรงงานผู้ผลิตกำหนด',
      'วัดค่ากระแสไฟฟ้า (Ampere), แรงดันตกคร่อม, และความต้านทานฉนวนมอเตอร์ (Megger Test)',
      'วัดความเร็วลม (Air Velocity) และบาลานซ์ลมท่อส่งลมแอร์ (Air Balancing)'
    ],
    maintenance: [
      'ตรวจเช็คระดับน้ำมันหล่อลื่นคอมเพรสเซอร์และความเป็นกรด (Acid Test)',
      'ล้างทำความสะอาดแผงคอนเดนเซอร์ระบายความร้อนด้วยน้ำยาเฉพาะทาง',
      'ตรวจสอบและขันแน่นขั้วต่อทางไฟฟ้าในตู้ควบคุม Control Panel',
      'ตรวจวัดค่า Superheat และ Subcooling ปรับตั้งค่า Expansion Valve',
      'ออกรายงานผลการตรวจสอบสถานะเครื่องจักร (Equipment Health Report) พร้อมคำแนะนำ'
    ]
  };

  return (
    <section className="w-full py-16 sm:py-20 bg-primary text-on-primary relative overflow-hidden scroll-mt-20" id="standards">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-secondary-container/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2">
            <div className="w-1.5 h-5 bg-on-tertiary-container rounded-sm" />
            <span className="font-label-eyebrow text-secondary-fixed uppercase tracking-widest text-xs font-bold">
              QUALITY ASSURANCE
            </span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-white">
            มาตรฐานความปลอดภัยและงานวิศวกรรม 100%
          </h2>
          <p className="font-body-lg text-surface-container-high max-w-2xl mt-2 text-sm sm:text-base text-gray-200">
            เรายึดมั่นในข้อกำหนดของโรงงานอุตสาหกรรมขนาดใหญ่และมาตรฐานสากลทุกขั้นตอน
          </p>
        </div>

        {/* 4 Protocol Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border-l-4 border-secondary-container space-y-3 hover:bg-white/15 transition-colors">
            <div className="w-10 h-10 rounded bg-secondary-container/20 text-secondary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined">health_and_safety</span>
            </div>
            <h3 className="font-title-md text-white font-bold text-base">Safety First Protocol</h3>
            <p className="font-body-sm text-surface-container-high text-xs leading-relaxed text-gray-200">
              ช่างทุกคนมีใบรับรองความปลอดภัย สวมใส่อุปกรณ์ PPE ครบชุด พร้อมระบบตรวจสอบ Hot Work Permit ก่อนปฏิบัติงานเชื่อมทุกครั้ง
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border-l-4 border-on-tertiary-container space-y-3 hover:bg-white/15 transition-colors">
            <div className="w-10 h-10 rounded bg-on-tertiary-container/20 text-on-tertiary-container flex items-center justify-center">
              <span className="material-symbols-outlined">workspace_premium</span>
            </div>
            <h3 className="font-title-md text-white font-bold text-base">SUS 304 &amp; PIR Grade B1</h3>
            <p className="font-body-sm text-surface-container-high text-xs leading-relaxed text-gray-200">
              เลือกใช้วัสดุสแตนเลส SUS 304 และแผ่นฉนวน PIR ปลอดภัย ไม่ลามไฟ Food-grade ป้องกันแบคทีเรียตามมาตรฐาน GMP/HACCP
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border-l-4 border-secondary-container space-y-3 hover:bg-white/15 transition-colors">
            <div className="w-10 h-10 rounded bg-secondary-container/20 text-secondary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined">speed</span>
            </div>
            <h3 className="font-title-md text-white font-bold text-base">Pressure &amp; Vacuum Testing</h3>
            <p className="font-body-sm text-surface-container-high text-xs leading-relaxed text-gray-200">
              ทดสอบแรงดันระบบท่อน้ำยาด้วยก๊าซไนโตรเจนและดึงสุญญากาศ (Deep Vacuum Test) ก่อนจ่ายสารทำความเย็นเข้าระบบทุกไซต์งาน
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border-l-4 border-on-tertiary-container space-y-3 hover:bg-white/15 transition-colors">
            <div className="w-10 h-10 rounded bg-on-tertiary-container/20 text-on-tertiary-container flex items-center justify-center">
              <span className="material-symbols-outlined">event_repeat</span>
            </div>
            <h3 className="font-title-md text-white font-bold text-base">Annual PM Maintenance</h3>
            <p className="font-body-sm text-surface-container-high text-xs leading-relaxed text-gray-200">
              สัญญาบริการบำรุงรักษาเชิงป้องกัน ตรวจเช็คกระแสไฟ ล้างระบบ เปลี่ยนถ่ายน้ำมันคอมเพรสเซอร์ และออกใบรับรองระบบประจำปี
            </p>
          </div>
        </div>

        {/* Interactive Quality Checklist Tab Viewer */}
        <div className="mt-12 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <div className="font-label-eyebrow text-secondary-fixed uppercase tracking-wider text-xs font-bold">
                SPECIFICATION PROTOCOL VERIFICATION
              </div>
              <h4 className="font-title-lg text-lg sm:text-xl font-bold text-white mt-1">
                รายการตรวจสอบมาตรฐานวิศวกรรมภาคสนาม (On-Site QC Checklist)
              </h4>
            </div>

            {/* Checklist Tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveChecklistTab('safety')}
                className={`px-3 py-1.5 rounded text-xs font-label-technical transition-all cursor-pointer ${
                  activeChecklistTab === 'safety'
                    ? 'bg-secondary-container text-on-secondary-container font-bold shadow-sm'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                1. ความปลอดภัย (Safety)
              </button>
              <button
                type="button"
                onClick={() => setActiveChecklistTab('material')}
                className={`px-3 py-1.5 rounded text-xs font-label-technical transition-all cursor-pointer ${
                  activeChecklistTab === 'material'
                    ? 'bg-secondary-container text-on-secondary-container font-bold shadow-sm'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                2. วัสดุ &amp; สเปก (Material)
              </button>
              <button
                type="button"
                onClick={() => setActiveChecklistTab('testing')}
                className={`px-3 py-1.5 rounded text-xs font-label-technical transition-all cursor-pointer ${
                  activeChecklistTab === 'testing'
                    ? 'bg-secondary-container text-on-secondary-container font-bold shadow-sm'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                3. ทดสอบระบบ (Testing)
              </button>
              <button
                type="button"
                onClick={() => setActiveChecklistTab('maintenance')}
                className={`px-3 py-1.5 rounded text-xs font-label-technical transition-all cursor-pointer ${
                  activeChecklistTab === 'maintenance'
                    ? 'bg-secondary-container text-on-secondary-container font-bold shadow-sm'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                4. สัญญา PM (Maintenance)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
            {checklistDetails[activeChecklistTab].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-lg bg-white/5 border border-white/5"
              >
                <CheckCircle2 className="w-5 h-5 text-secondary-container shrink-0 mt-0.5" />
                <span className="font-body-md text-xs sm:text-sm text-gray-200 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
