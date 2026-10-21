import React from 'react';
import { CORE_SERVICES } from '../data/companyData';
import { ServiceItem } from '../types';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceId: string, serviceTitle: string) => void;
  onOpenServiceDetail: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForQuote,
  onOpenServiceDetail,
}) => {
  return (
    <section className="w-full py-16 sm:py-20 bg-[#f2f3ff] scroll-mt-20" id="services">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2">
            <div className="w-1.5 h-5 bg-on-tertiary-container rounded-sm" />
            <span className="font-label-eyebrow text-secondary uppercase tracking-widest text-xs font-bold">
              OUR SPECIALIZED CAPABILITIES
            </span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-primary font-bold mt-2">
            ขอบเขตบริการหลักด้านวิศวกรรมความเย็นและระบายอากาศ
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mt-2 text-sm sm:text-base">
            บริการออกแบบ ติดตั้ง ตรวจสอบ และซ่อมบำรุงด้วยวิศวกรผู้มีประสบการณ์ตามมาตรฐานวิศวกรรมควบคุม
          </p>
        </div>

        {/* 4 Core Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between border border-outline-variant/30 hover:border-secondary group relative"
            >
              {/* Left Accent indicator on hover */}
              <div className="absolute left-0 top-6 bottom-6 w-1 bg-transparent group-hover:bg-on-tertiary-container rounded-r transition-all" />

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-[#eaedff] text-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                </div>

                <div className="font-label-eyebrow text-secondary text-xs font-bold">
                  {service.serviceNumber}
                </div>

                <h3 className="font-title-md text-primary font-bold text-lg leading-snug">
                  {service.title}
                </h3>

                <p className="font-body-sm text-on-surface-variant leading-relaxed text-xs">
                  {service.shortDesc}
                </p>

                <ul className="space-y-2 pt-2 border-t border-outline-variant/20">
                  {service.bulletPoints.map((bp, i) => (
                    <li key={i} className="flex items-start gap-2 font-body-sm text-xs text-on-surface">
                      <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-4 border-t border-outline-variant/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onSelectServiceForQuote(service.id, service.title)}
                  className="inline-flex items-center gap-1 font-label-technical text-xs font-bold text-secondary hover:text-primary transition-colors cursor-pointer group-hover:translate-x-0.5"
                >
                  <span>ขอคำปรึกษางานนี้</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenServiceDetail(service)}
                  className="font-label-eyebrow text-[10px] text-on-surface-variant hover:text-secondary underline cursor-pointer"
                >
                  ดูรายละเอียด
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
