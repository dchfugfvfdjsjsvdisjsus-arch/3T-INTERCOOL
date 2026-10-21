import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onNavigateSection }) => {
  return (
    <section className="relative w-full bg-primary-container text-white overflow-hidden py-14 sm:py-20 lg:py-24">
      {/* Subtle Industrial Background Grid & Vector Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-15 bg-[radial-gradient(#5bb8fe_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-on-tertiary-container/10 blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text & Action Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container animate-ping" />
              <span className="font-label-eyebrow text-secondary-fixed tracking-wider uppercase text-xs">
                Industrial HVAC &amp; Cold Storage Engineering
              </span>
            </div>

            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
              ผู้นำด้านวิศวกรรม<br className="hidden sm:inline" />ระบบความเย็น{' '}
              <span className="text-secondary-fixed-dim">และระบายอากาศ</span> ครบวงจร
            </h1>

            <p className="font-body-lg text-surface-container-high leading-relaxed max-w-2xl text-sm sm:text-base text-gray-200">
              รับออกแบบ • เขียนแบบ • ติดตั้ง • ซ่อมบำรุงรักษา ระบบปรับอากาศ อาคารสำนักงาน ห้องเย็น Cold Room ตู้แช่พาณิชย์ และระบบท่อลมควบคุมอุณหภูมิ ด้วยทีมวิศวกรผู้เชี่ยวชาญ ได้มาตรฐานวิศวกรรมระดับสากล
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2 bg-on-tertiary-container hover:bg-[#c94b0d] text-white font-title-md px-5 sm:px-6 py-3.5 rounded shadow-lg transition-all duration-200 cursor-pointer active:scale-95"
              >
                <span className="material-symbols-outlined text-xl">request_quote</span>
                <span>ขอใบเสนอราคา / ปรึกษาฟรี</span>
              </button>

              <button
                onClick={() => onNavigateSection('track-record')}
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-title-md px-5 sm:px-6 py-3.5 rounded backdrop-blur-sm transition-all duration-200 border border-white/20 cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl text-secondary-container">domain_verification</span>
                <span>ชมผลงานโครงการ</span>
              </button>

              <button
                onClick={() => onNavigateSection('calculator')}
                className="inline-flex items-center gap-2 text-secondary-fixed hover:text-white font-label-technical text-xs py-2 px-3 rounded hover:bg-white/10 transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-secondary-container" />
                <span>เครื่องมือคำนวณ BTU/TR เบื้องต้น</span>
              </button>
            </div>

            {/* Trust KPI Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 sm:pt-8">
              <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="font-headline text-2xl lg:text-3xl font-bold text-white">15+</div>
                <div className="font-body-sm text-surface-container-high text-xs text-gray-300">ปี ประสบการณ์วิศวกรรม</div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="font-headline text-2xl lg:text-3xl font-bold text-white">100%</div>
                <div className="font-body-sm text-surface-container-high text-xs text-gray-300">ส่งมอบตรงตามสเปก</div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="font-headline text-2xl lg:text-3xl font-bold text-secondary-fixed">24/7</div>
                <div className="font-body-sm text-surface-container-high text-xs text-gray-300">ทีมซัพพอร์ตฉุกเฉิน</div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="font-headline text-2xl lg:text-3xl font-bold text-on-tertiary-container">ZERO</div>
                <div className="font-body-sm text-surface-container-high text-xs text-gray-300">Accident Standard</div>
              </div>
            </div>
          </div>

          {/* Featured Project Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#faf8ff] rounded-xl p-3 sm:p-4 shadow-2xl relative z-10 border border-white/20 text-[#131b2e]">
              <div className="relative overflow-hidden rounded-lg group">
                <img
                  alt="Cooling Tower & Compressor Works"
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpkkqrfBoU7O1WnHjuj1ppeKaH3L5jFnCK9AEuAroCZsZBqwQt9AYrdh2gQCNRtAAT9RMQ5n2dC8lJJ6YeKtJK1rZ7L5bwPf-bLRj_7kGtv8R5SYQfn1g1xq8340S08bD5Y-_H7l9MRZU81Djlm0EW_dFQwqW-hcwzYy-kkXK_7mXXD5M_tio6aocYlSLMGIIpmN6XPUwUDtf28LZYImw2njUdRH2PBS5AvWihnIxK-aX7KU0gi46uMiOuDJpoLF4RHQ"
                />
                <div className="absolute top-3 left-3 bg-[#001428]/85 backdrop-blur-md px-3 py-1 rounded text-white font-label-eyebrow text-xs flex items-center gap-1.5 border border-white/15">
                  <span className="w-2 h-2 rounded-full bg-secondary-container" />
                  HIGH-PRESSURE CHILLER SYSTEM
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#001428] via-[#001428]/85 to-transparent p-4 text-white">
                  <div className="font-title-md text-xs text-secondary-fixed uppercase tracking-wider font-bold">
                    PROJECT HIGHLIGHT
                  </div>
                  <div className="font-body-md text-sm text-white font-semibold mt-0.5 line-clamp-2">
                    งานเปลี่ยน Compressor และติดตั้งชุด Cooling Tower ระบบควบคุมแรงดันสูง
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-on-surface px-1">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-secondary" />
                  <span className="font-label-technical text-xs text-on-surface-variant font-medium">
                    ISO 9001:2015 Spec Ready
                  </span>
                </div>
                <button
                  onClick={() => onNavigateSection('track-record')}
                  className="font-label-technical text-xs font-semibold text-secondary hover:text-primary hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>ดูผลงานทั้งหมด</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
