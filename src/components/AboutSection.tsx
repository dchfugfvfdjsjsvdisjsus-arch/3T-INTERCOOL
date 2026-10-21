import React, { useState } from 'react';
import { COMPANY_INFO, MILESTONES } from '../data/companyData';
import { Phone, CheckCircle, ShieldAlert, Zap, Clock, Award, Users } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(3); // Default to current

  return (
    <section className="w-full py-16 sm:py-20 bg-[#faf8ff] scroll-mt-20" id="about">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-on-tertiary-container rounded-sm" />
            <span className="font-label-eyebrow text-secondary uppercase tracking-widest text-xs font-bold">
              ABOUT OUR COMPANY
            </span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-primary font-bold mt-2">
            เกี่ยวกับบริษัท 3ต อินเตอร์คูล แอนด์ เซอร์วิส จำกัด
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-3xl mt-2 text-sm sm:text-base">
            ผู้เชี่ยวชาญด้านงานวิศวกรรมระบบความเย็นและระบายอากาศ (HVAC &amp; Refrigeration Engineering Solutions)
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Story & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#f2f3ff] p-6 lg:p-8 rounded-xl shadow-sm border border-outline-variant/30 space-y-4">
              <h3 className="font-title-lg text-primary font-bold text-lg sm:text-xl">
                ความมุ่งมั่นในมาตรฐานวิศวกรรมระบบความเย็นระดับสากล
              </h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed text-sm sm:text-[15px]">
                <strong>บริษัท 3ต อินเตอร์คูล แอนด์ เซอร์วิส จำกัด (3T INTERCOOL &amp; SERVICE CO., LTD.)</strong> ดำเนินธุรกิจเป็นผู้เชี่ยวชาญด้านงานวิศวกรรมระบบความเย็นและระบบหมุนเวียนอากาศ ครอบคลุมตั้งแต่การออกแบบ คำนวณภาระความเย็น เขียนแบบ ติดตั้ง ตลอดจนการบำรุงรักษาเชิงป้องกัน (Preventive Maintenance)
              </p>
              <p className="font-body-md text-on-surface-variant leading-relaxed text-sm sm:text-[15px]">
                เราให้บริการกลุ่มโรงงานอุตสาหกรรมแปรรูปอาหาร โรงงานประกอบยานยนต์ คลังสินค้าห้องเย็น และห้างสรรพสินค้าชั้นนำระดับประเทศ ด้วยทีมช่างเทคนิคที่ผ่านการรับรองความปลอดภัยและมาตรฐานงานช่างสากล
              </p>
            </div>

            {/* 4 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-[#eaedff] rounded-lg shadow-sm border border-outline-variant/20 hover:border-secondary transition-all">
                <div className="w-10 h-10 rounded bg-secondary/10 text-secondary flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined">hub</span>
                </div>
                <h4 className="font-title-md text-primary text-base mb-1 font-bold">One-Stop Solution</h4>
                <p className="font-body-sm text-on-surface-variant leading-relaxed text-xs">
                  ครบวงจรตั้งแต่ให้คำปรึกษา คำนวณ BTU ออกแบบระบบ ติดตั้ง จนถึงงานซ่อมบำรุง
                </p>
              </div>

              <div className="p-5 bg-[#eaedff] rounded-lg shadow-sm border border-outline-variant/20 hover:border-secondary transition-all">
                <div className="w-10 h-10 rounded bg-secondary/10 text-secondary flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined">engineering</span>
                </div>
                <h4 className="font-title-md text-primary text-base mb-1 font-bold">Professional Expertise</h4>
                <p className="font-body-sm text-on-surface-variant leading-relaxed text-xs">
                  ทีมวิศวกรและช่างชำนาญการกว่า 15 ปี แก้ปัญหาตรงจุด ปฏิบัติตามมาตรฐานช่างกลโรงงาน
                </p>
              </div>

              <div className="p-5 bg-[#eaedff] rounded-lg shadow-sm border border-outline-variant/20 hover:border-secondary transition-all">
                <div className="w-10 h-10 rounded bg-secondary/10 text-secondary flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <h4 className="font-title-md text-primary text-base mb-1 font-bold">Safety &amp; Compliance</h4>
                <p className="font-body-sm text-on-surface-variant leading-relaxed text-xs">
                  มาตรการความปลอดภัยเข้มงวด 100% พร้อมใบอนุญาต Hot Work และอุปกรณ์ PPE เต็มรูปแบบ
                </p>
              </div>

              <div className="p-5 bg-[#eaedff] rounded-lg shadow-sm border border-outline-variant/20 hover:border-secondary transition-all">
                <div className="w-10 h-10 rounded bg-secondary/10 text-secondary flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined">alarm_on</span>
                </div>
                <h4 className="font-title-md text-primary text-base mb-1 font-bold">Fast Site Response</h4>
                <p className="font-body-sm text-on-surface-variant leading-relaxed text-xs">
                  ทีมฉุกเฉินพร้อมเข้าแก้ไขปัญหาหน้างานตลอด 24 ชั่วโมง ลดความเสี่ยงสินค้าเสียหาย
                </p>
              </div>
            </div>
          </div>

          {/* Leadership Spotlight & Timeline */}
          <div className="lg:col-span-5 space-y-6">
            {/* Managing Director Card */}
            <div className="bg-primary text-on-primary p-6 lg:p-8 rounded-xl shadow-md relative overflow-hidden border border-white/10">
              <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
                <span className="material-symbols-outlined text-[160px]">badge</span>
              </div>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-label-eyebrow text-secondary-fixed text-xs tracking-wider uppercase font-semibold">
                    Executive Leadership
                  </span>
                  <div className="w-8 h-8 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-fixed">
                    <Award className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="font-headline text-xl font-bold text-white">{COMPANY_INFO.mdNameTh}</h4>
                  <p className="font-label-technical text-sm text-secondary-fixed-dim">{COMPANY_INFO.mdNameEn}</p>
                  <p className="font-label-eyebrow text-on-tertiary-container font-bold text-xs uppercase tracking-wider">
                    {COMPANY_INFO.mdTitleTh}
                  </p>
                </div>

                <p className="font-body-sm text-surface-container-high leading-relaxed pt-2 text-gray-200 italic">
                  "{COMPANY_INFO.mdQuote}"
                </p>

                <div className="pt-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-fixed">
                    <span className="material-symbols-outlined text-lg">call</span>
                  </div>
                  <a
                    className="font-label-technical text-white font-bold hover:text-secondary-fixed hover:underline text-sm"
                    href={`tel:${COMPANY_INFO.hotlineRaw}`}
                  >
                    {COMPANY_INFO.hotline} (ติดต่อสายตรง)
                  </a>
                </div>
              </div>
            </div>

            {/* Milestones Timeline */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant/30 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-title-md text-primary font-bold text-sm tracking-wider uppercase">
                  เส้นทางการเติบโต (MILESTONES)
                </h4>
                <span className="font-label-eyebrow text-secondary text-[10px] font-bold">15+ YEARS</span>
              </div>

              <div className="space-y-4 relative pl-6 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-outline-variant/40">
                {MILESTONES.map((item, idx) => {
                  const isCurrent = idx === 3;
                  return (
                    <div
                      key={item.year}
                      onClick={() => setSelectedMilestone(idx)}
                      className={`relative cursor-pointer p-2 rounded transition-colors ${
                        selectedMilestone === idx ? 'bg-[#eaedff]/60' : 'hover:bg-gray-50'
                      }`}
                    >
                      <div
                        className={`absolute -left-6 top-2.5 w-2.5 h-2.5 rounded-full transition-transform ${
                          isCurrent
                            ? 'bg-on-tertiary-container ring-4 ring-on-tertiary-container/20'
                            : 'bg-secondary'
                        }`}
                      />
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-label-technical text-xs font-bold ${
                            isCurrent ? 'text-on-tertiary-container' : 'text-secondary'
                          }`}
                        >
                          {item.year} - {item.title}
                        </span>
                        <span className="font-label-eyebrow text-[9px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 font-semibold">
                          {item.badge}
                        </span>
                      </div>
                      <p className="font-body-sm text-on-surface-variant text-xs mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
