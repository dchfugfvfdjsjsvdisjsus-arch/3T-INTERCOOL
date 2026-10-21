import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, Menu, X, FileText, ChevronRight } from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal: () => void;
  onNavigateSection: (sectionId: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenQuoteModal,
  onNavigateSection,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'หน้าแรก', id: 'home' },
    { label: 'เกี่ยวกับเรา', id: 'about' },
    { label: 'บริการของเรา', id: 'services' },
    { label: 'คำนวณ BTU/TR', id: 'calculator' },
    { label: 'ผลงานโครงการ', id: 'track-record' },
    { label: 'มาตรฐาน & จุดเด่น', id: 'standards' },
    { label: 'ติดต่อเรา', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigateSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#faf8ff]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(15,41,66,0.08)] py-2.5'
          : 'bg-[#faf8ff] py-3.5 shadow-sm'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo & Title */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
        >
          <img
            alt={COMPANY_INFO.nameEn}
            className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            src={COMPANY_INFO.logoUrl}
          />
          <div className="flex flex-col">
            <span className="font-headline text-base sm:text-lg leading-tight font-bold tracking-tight text-primary uppercase">
              3T INTERCOOL &amp; SERVICE
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`font-body-md text-xs lg:text-[13px] px-2.5 py-1.5 rounded transition-all cursor-pointer ${
                  isActive
                    ? 'text-primary font-bold bg-[#eaedff] border-b-2 border-secondary'
                    : 'text-on-surface-variant hover:text-primary hover:bg-[#eaedff]/60'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Elements */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Hotline Callout */}
          <div className="hidden md:flex flex-col text-right">
            <span className="font-label-eyebrow text-on-surface-variant text-[10px] tracking-wider uppercase font-semibold">
              HOTLINE 24/7
            </span>
            <a
              href={`tel:${COMPANY_INFO.hotlineRaw}`}
              className="font-label-technical text-secondary hover:text-primary hover:underline font-bold text-sm flex items-center gap-1 justify-end"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.hotline}</span>
            </a>
          </div>

          {/* Request Quote Button */}
          <button
            onClick={onOpenQuoteModal}
            className="hidden sm:inline-flex items-center gap-2 bg-primary-container hover:bg-primary text-white px-3.5 py-2 sm:px-4 sm:py-2.5 rounded font-title-md text-xs sm:text-sm transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <span className="material-symbols-outlined text-base text-secondary-container">request_quote</span>
            <span>ขอใบเสนอราคา</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-primary hover:bg-[#eaedff] focus:outline-none cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[65px] bg-[#faf8ff] border-b border-outline-variant/40 shadow-2xl p-5 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between p-2.5 rounded-lg text-left font-title-md text-sm cursor-pointer ${
                    isActive
                      ? 'bg-[#eaedff] text-primary font-bold'
                      : 'text-on-surface-variant hover:bg-[#eaedff]/50 hover:text-primary'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-secondary" />
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-outline-variant/30 flex flex-col gap-2.5">
            <a
              href={`tel:${COMPANY_INFO.hotlineRaw}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-surface-container text-primary font-label-technical text-sm font-bold"
            >
              <Phone className="w-4 h-4 text-on-tertiary-container" />
              <span>สายด่วน 24 ชม: {COMPANY_INFO.hotline}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-primary hover:bg-primary-container text-white font-title-md text-sm shadow-md"
            >
              <FileText className="w-4 h-4 text-secondary-container" />
              <span>ขอใบเสนอราคา / นัดสำรวจหน้างานฟรี</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
