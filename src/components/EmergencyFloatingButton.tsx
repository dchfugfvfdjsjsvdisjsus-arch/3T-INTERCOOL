import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, MessageSquare, ChevronUp, ChevronDown, X, ShieldAlert } from 'lucide-react';

export const EmergencyFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Expanded Quick Action Card */}
      {isOpen && (
        <div className="mb-3 w-72 bg-white rounded-2xl shadow-2xl border border-outline-variant/40 p-4 space-y-3 animate-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-outline-variant/30">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container animate-ping" />
              <span className="font-headline text-xs font-bold text-primary">
                สายด่วนฉุกเฉิน 24 ชั่วโมง
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="font-body-sm text-[11px] text-on-surface-variant leading-relaxed">
            ห้องเย็นเสีย แอร์โรงงานดับ คอมเพรสเซอร์ตัด มีทีมช่างเทคนิคสแตนด์บาย 24 ชม.
          </p>

          <a
            href={`tel:${COMPANY_INFO.hotlineRaw}`}
            className="flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-lg bg-on-tertiary-container hover:bg-[#c94b0d] text-white font-title-md text-xs shadow-md transition-all font-bold"
          >
            <Phone className="w-4 h-4" />
            <span>โทรด่วน: {COMPANY_INFO.hotline}</span>
          </a>

          <a
            href={`https://line.me/ti/p/~${COMPANY_INFO.lineId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg bg-[#06c755] hover:bg-[#05b04b] text-white font-title-md text-xs shadow transition-all font-bold"
          >
            <MessageSquare className="w-4 h-4" />
            <span>แชท LINE: {COMPANY_INFO.lineId}</span>
          </a>
        </div>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-on-tertiary-container hover:bg-[#c94b0d] text-white shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group active:scale-95"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <Phone className="w-4 h-4" />
        <span className="font-headline text-xs font-bold tracking-wide">
          24/7 HOTLINE
        </span>
        {isOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
};
