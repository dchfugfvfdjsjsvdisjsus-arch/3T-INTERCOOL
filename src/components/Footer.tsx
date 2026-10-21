import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenQuoteModal }) => {
  return (
    <footer className="w-full bg-[#f2f3ff] mt-16 border-t border-outline-variant/30 text-on-surface">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand & Leadership */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <img
                alt={COMPANY_INFO.nameEn}
                className="h-10 w-auto object-contain"
                src={COMPANY_INFO.logoUrl}
              />
              <span className="font-headline text-sm font-bold tracking-tight text-primary uppercase">
                3T INTERCOOL &amp; SERVICE
              </span>
            </div>

            <p className="font-body-sm text-on-surface-variant leading-relaxed text-xs">
              บริษัท 3ต อินเตอร์คูล แอนด์ เซอร์วิส จำกัด ผู้เชี่ยวชาญด้านงานออกแบบ ติดตั้ง และซ่อมบำรุงระบบปรับอากาศและระบบทำความเย็นอุตสาหกรรมครบวงจร (HVAC &amp; Cold Chain Solutions)
            </p>

            <div className="pt-3 border-t border-outline-variant/30 space-y-0.5">
              <p className="font-label-eyebrow text-[11px] text-secondary font-bold uppercase tracking-wide">
                {COMPANY_INFO.mdNameTh}
              </p>
              <p className="font-label-technical text-xs text-on-surface-variant">
                {COMPANY_INFO.mdNameEn}
              </p>
              <p className="font-label-eyebrow text-[10px] text-secondary font-semibold uppercase tracking-wider">
                {COMPANY_INFO.mdTitleTh}
              </p>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div className="space-y-3">
            <h3 className="font-title-md text-sm uppercase tracking-wider text-primary border-l-2 border-secondary pl-2 font-bold">
              การบริการหลัก
            </h3>
            <ul className="space-y-2 font-body-sm text-on-surface-variant text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('services')}
                  className="hover:text-secondary transition-colors text-left cursor-pointer"
                >
                  ระบบปรับอากาศโรงงาน (VRF / Chiller)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('services')}
                  className="hover:text-secondary transition-colors text-left cursor-pointer"
                >
                  คลังสินค้าห้องเย็น (Cold Storage &amp; Freezer)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('services')}
                  className="hover:text-secondary transition-colors text-left cursor-pointer"
                >
                  ระบบท่อส่งลมและระบายอากาศ (Ductwork)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('services')}
                  className="hover:text-secondary transition-colors text-left cursor-pointer"
                >
                  สัญญาบริการซ่อมบำรุงรายปี (PM Maintenance)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('contact')}
                  className="hover:text-secondary transition-colors text-left cursor-pointer"
                >
                  บริการตรวจเช็กและแก้ไขฉุกเฉิน 24 ชั่วโมง
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-3">
            <h3 className="font-title-md text-sm uppercase tracking-wider text-primary border-l-2 border-secondary pl-2 font-bold">
              เมนูลัด
            </h3>
            <ul className="space-y-2 font-body-sm text-on-surface-variant text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('about')}
                  className="hover:text-secondary transition-colors text-left cursor-pointer"
                >
                  เกี่ยวกับบริษัท &amp; มาตรฐานวิศวกรรม
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('track-record')}
                  className="hover:text-secondary transition-colors text-left cursor-pointer"
                >
                  ประวัติโครงการและลูกค้าอ้างอิง
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('why-choose-us')}
                  className="hover:text-secondary transition-colors text-left cursor-pointer"
                >
                  ทำไมต้องเลือก 3T Intercool
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('calculator')}
                  className="hover:text-secondary transition-colors text-left cursor-pointer"
                >
                  เครื่องมือคำนวณขนาดความเย็น (BTU/TR)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenQuoteModal}
                  className="hover:text-secondary transition-colors text-left cursor-pointer font-semibold text-secondary"
                >
                  ขอใบเสนอราคา / นัดสำรวจหน้างาน
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-3">
            <h3 className="font-title-md text-sm uppercase tracking-wider text-primary border-l-2 border-secondary pl-2 font-bold">
              ติดต่อเรา
            </h3>
            <div className="space-y-2.5 font-body-sm text-on-surface-variant text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <a className="hover:text-secondary font-bold text-primary" href={`tel:${COMPANY_INFO.hotlineRaw}`}>
                  {COMPANY_INFO.hotline}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#06c755] shrink-0" />
                <span>Line ID: {COMPANY_INFO.lineId}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <a className="hover:text-secondary" href={`mailto:${COMPANY_INFO.email}`}>
                  {COMPANY_INFO.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright and Verification */}
        <div className="pt-6 border-t border-outline-variant/40 flex flex-col sm:flex-row items-center justify-between gap-4 font-body-sm text-on-surface-variant text-xs">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.nameTh} ({COMPANY_INFO.nameEn}) สงวนลิขสิทธิ์ทั้งหมด
          </div>
          <div className="flex items-center gap-4">
            <span className="font-label-technical text-secondary font-bold flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" />
              <span>ISO 9001:2015 CERTIFIED</span>
            </span>
            <span className="font-label-technical text-on-surface-variant">
              ENGINEERING EXCELLENCE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
