import React from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onApplyToQuote: (details: string, serviceType: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onApplyToQuote,
}) => {
  if (!service) return null;

  const handleInquireService = () => {
    const details = `สนใจบริการ: ${service.title} (${service.serviceNumber})
- ความต้องการเบื้องต้น: ต้องการปรึกษาการออกแบบและติดตั้งตามมาตรฐาน`;
    onApplyToQuote(details, service.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-outline-variant/40 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-outline-variant/30 bg-[#faf8ff]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container" />
            <span className="font-label-eyebrow text-secondary uppercase font-bold text-xs tracking-wider">
              {service.serviceNumber}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-500 hover:text-primary hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto custom-scrollbar p-5 sm:p-6 space-y-6">
          {service.featuredImage && (
            <div className="rounded-xl overflow-hidden h-48 sm:h-56 bg-gray-900">
              <img
                src={service.featuredImage}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div>
            <h2 className="font-headline text-xl sm:text-2xl font-bold text-primary">
              {service.title}
            </h2>
            <p className="font-body-md text-on-surface-variant text-sm mt-2 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          <div>
            <h4 className="font-title-md text-xs uppercase tracking-wider text-secondary font-bold mb-2.5">
              ขอบเขตการปฏิบัติงานหลัก
            </h4>
            <div className="space-y-2">
              {service.bulletPoints.map((bp, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-on-surface">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span>{bp}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#f2f3ff] rounded-xl p-4 sm:p-5 border border-outline-variant/30 space-y-2.5">
            <h4 className="font-title-md text-xs uppercase tracking-wider text-primary font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span>มาตรฐานวัสดุและอุปกรณ์ที่ใช้</span>
            </h4>
            <ul className="space-y-1.5 font-label-technical text-xs text-on-surface-variant">
              {service.specs.map((spec, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-4 sm:p-5 border-t border-outline-variant/30 bg-[#faf8ff] flex items-center justify-between">
          <span className="font-label-technical text-xs text-gray-500">
            สำรวจหน้างานและประเมินราคาฟรี
          </span>
          <button
            type="button"
            onClick={handleInquireService}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-container text-white font-title-md text-xs sm:text-sm px-5 py-2.5 rounded shadow transition-all cursor-pointer"
          >
            <span>ขอคำปรึกษาสำหรับงานนี้</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
