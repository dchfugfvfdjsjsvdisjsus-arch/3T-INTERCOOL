import React from 'react';
import { ArrowRight, CheckCircle, ShieldAlert, Award, Clock } from 'lucide-react';

interface WhyChooseUsSectionProps {
  onOpenQuoteModal: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ onOpenQuoteModal }) => {
  const propositions = [
    {
      num: '01',
      title: 'ครบวงจร One-Stop Engineering',
      desc: 'ให้คำปรึกษา คำนวณโหลดความเย็น เขียนแบบ Shop Drawing ติดตั้ง เดินท่อ ทดสอบระบบ และบำรุงรักษาในที่เดียว ไม่ต้องประสานงานหลายผู้รับเหมา',
      tag: 'END-TO-END SERVICE',
      accentColor: 'border-secondary',
      tagBg: 'bg-secondary text-white'
    },
    {
      num: '02',
      title: 'มาตรฐานวิศวกรรมสากล ไร้งานแก้งานซ่อม',
      desc: 'ปฏิบัติตามมาตรฐานวิศวกรรม ASHRAE, SMACNA, และหลักเกณฑ์ GMP/HACCP สำหรับโรงงานอาหาร ใช้วัสดุเกรดพรีเมียม สแตนเลส SUS304 และ PIR ป้องกันไฟ',
      tag: 'ENGINEERING EXCELLENCE',
      accentColor: 'border-on-tertiary-container',
      tagBg: 'bg-on-tertiary-container text-white'
    },
    {
      num: '03',
      title: 'ทีมฉุกเฉิน On-Site 24 ชั่วโมง',
      desc: 'เข้าใจความสำคัญของสต็อกสินค้าในห้องเย็นและไลน์ผลิต มีทีมช่างเทคนิคพร้อมเข้าแก้ไขปัญหาฉุกเฉินตลอด 24 ชั่วโมง ลดความเสี่ยงสินค้าเสียหายเป็นศูนย์',
      tag: '24/7 RAPID RESPONSE',
      accentColor: 'border-secondary',
      tagBg: 'bg-primary text-secondary-fixed'
    },
    {
      num: '04',
      title: 'ความไว้วางใจจากองค์กรชั้นนำระดับประเทศ',
      desc: 'ได้รับความไว้วางใจในโครงการขนาดใหญ่ของ CP Group, Isuzu Motors, KCE Electronics, Don Don Donki, The Mall และห้างค้าปลีกชั้นนำทั่วประเทศ',
      tag: 'ENTERPRISE TRUSTED',
      accentColor: 'border-on-tertiary-container',
      tagBg: 'bg-on-tertiary-container text-white'
    }
  ];

  return (
    <section className="w-full py-16 sm:py-20 bg-[#faf8ff] scroll-mt-20" id="why-choose-us">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2">
            <div className="w-1.5 h-5 bg-on-tertiary-container rounded-sm" />
            <span className="font-label-eyebrow text-secondary uppercase tracking-widest text-xs font-bold">
              WHY PARTNER WITH 3T INTERCOOL
            </span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-primary font-bold mt-2">
            ทำไมลูกค้าองค์กรและโรงงานอุตสาหกรรมจึงเลือกเรา
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mt-2 text-sm sm:text-base">
            ความซื่อสัตย์ ฝีมือช่างคุณภาพสูง และความรับผิดชอบต่องานส่งมอบทุกโครงการ
          </p>
        </div>

        {/* 4 Value Proposition Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {propositions.map((prop) => (
            <div
              key={prop.num}
              className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-outline-variant/30 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden`}
            >
              {/* Colored top bar */}
              <div className={`absolute top-0 inset-x-0 h-1.5 ${prop.num === '02' || prop.num === '04' ? 'bg-on-tertiary-container' : 'bg-secondary'}`} />

              <div className="space-y-4 pt-1">
                <div className="flex items-center justify-between">
                  <span className="font-headline text-3xl font-bold text-primary/80 group-hover:text-primary transition-colors">
                    {prop.num}
                  </span>
                  <span className={`font-label-eyebrow text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider ${prop.tagBg}`}>
                    {prop.tag}
                  </span>
                </div>

                <h3 className="font-title-md text-primary font-bold text-base leading-snug">
                  {prop.title}
                </h3>

                <p className="font-body-sm text-on-surface-variant text-xs leading-relaxed">
                  {prop.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-outline-variant/10">
                <button
                  type="button"
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center gap-1 font-label-technical text-xs font-bold text-secondary hover:text-primary transition-colors cursor-pointer group-hover:translate-x-1"
                >
                  <span>ปรึกษาโครงการนี้</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
