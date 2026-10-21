import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ClientTrustBar } from './components/ClientTrustBar';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { CoolingCalculator } from './components/CoolingCalculator';
import { TrackRecordSection } from './components/TrackRecordSection';
import { StandardsSection } from './components/StandardsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ServiceModal } from './components/ServiceModal';
import { QuotationModal } from './components/QuotationModal';
import { EmergencyFloatingButton } from './components/EmergencyFloatingButton';
import { ProjectItem, ServiceItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [prefilledServiceType, setPrefilledServiceType] = useState('coldroom');
  const [prefilledDetails, setPrefilledDetails] = useState('');

  // Smooth scroll handler
  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scrollspy to update active navigation item
  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'calculator', 'track-record', 'standards', 'why-choose-us', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle calculator or project inquiry applied to quotation form
  const handleApplyToQuote = (details: string, serviceType: string) => {
    setPrefilledDetails(details);
    setPrefilledServiceType(serviceType);
    handleNavigateSection('contact');
  };

  const handleSelectServiceForQuote = (serviceId: string, serviceTitle: string) => {
    let type = 'coldroom';
    if (serviceId.includes('hvac')) type = 'hvac';
    if (serviceId.includes('duct')) type = 'duct';
    if (serviceId.includes('chiller')) type = 'chiller';

    setPrefilledServiceType(type);
    setPrefilledDetails(`ขอข้อมูลและใบเสนอราคาสำหรับ: ${serviceTitle}`);
    handleNavigateSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#131b2e] flex flex-col selection:bg-secondary-container/40">
      {/* Header */}
      <Header
        activeSection={activeSection}
        onNavigateSection={handleNavigateSection}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* Main Content */}
      <main className="w-full pt-16 sm:pt-20 bg-[#faf8ff]">
        <div className="flex flex-col w-full">
          {/* Top Anchor */}
          <div className="scroll-mt-24" id="home" />

          {/* 1. Hero Section */}
          <Hero
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
            onNavigateSection={handleNavigateSection}
          />

          {/* 2. Client Trust Bar */}
          <ClientTrustBar
            onSelectClient={(clientName) => {
              handleNavigateSection('track-record');
            }}
          />

          {/* 3. About Us Section */}
          <AboutSection />

          {/* 4. Core Services Section */}
          <ServicesSection
            onSelectServiceForQuote={handleSelectServiceForQuote}
            onOpenServiceDetail={(service) => setSelectedService(service)}
          />

          {/* 5. Cooling Load & BTU Calculator Tool */}
          <section className="w-full py-16 sm:py-20 bg-[#faf8ff] scroll-mt-20" id="calculator">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
              <CoolingCalculator onApplyToQuote={handleApplyToQuote} />
            </div>
          </section>

          {/* 6. Track Record & Project Gallery */}
          <TrackRecordSection
            onSelectProject={(project) => setSelectedProject(project)}
          />

          {/* 7. Engineering Standards & Quality Protocols */}
          <StandardsSection />

          {/* 8. Why Choose Us Section */}
          <WhyChooseUsSection
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />

          {/* 9. Contact & RFQ Quotation Form */}
          <ContactSection
            initialServiceType={prefilledServiceType}
            initialDetails={prefilledDetails}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* 24/7 Emergency Floating Button */}
      <EmergencyFloatingButton />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onApplyToQuote={handleApplyToQuote}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onApplyToQuote={handleApplyToQuote}
      />

      <QuotationModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultServiceType={prefilledServiceType}
        defaultDetails={prefilledDetails}
      />
    </div>
  );
}
