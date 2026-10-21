import React from 'react';
import { ProjectItem } from '../types';
import { X, MapPin, Building, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onApplyToQuote: (details: string, serviceType: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onApplyToQuote,
}) => {
  if (!project) return null;

  const handleInquireProject = () => {
    const details = `ต้องการประเมินราคาโครงการใกล้เคียงกับ:
- อ้างอิงโครงการ: ${project.title}
- ลูกค้า/สถานที่: ${project.client} (${project.location})
- ประเภทระบบ: ${project.specs.systemType}
- สเปกทางวิศวกรรม: ${project.specs.capacity || '-'} / ${project.specs.temperatureRange || '-'}`;

    onApplyToQuote(details, project.category);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-outline-variant/40 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-outline-variant/30 bg-[#faf8ff]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
            <span className="font-label-eyebrow text-secondary uppercase font-bold text-xs tracking-wider">
              PROJECT SPECIFICATION BRIEF
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-500 hover:text-primary hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto custom-scrollbar p-5 sm:p-6 space-y-6">
          {/* Main Photo Banner */}
          <div className="relative rounded-xl overflow-hidden h-64 sm:h-80 bg-gray-900 shadow-inner">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-[#001428]/85 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-label-eyebrow font-bold">
              {project.client}
            </div>
            <div className="absolute top-3 right-3 bg-secondary-container text-on-secondary-container px-2.5 py-1 rounded text-xs font-label-eyebrow font-bold shadow-sm">
              {project.status}
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#001428] via-[#001428]/80 to-transparent p-4 text-white">
              <div className="flex items-center gap-1.5 text-xs text-secondary-fixed">
                <MapPin className="w-3.5 h-3.5" />
                <span>{project.location}</span>
              </div>
              <h2 className="font-headline text-lg sm:text-xl font-bold mt-0.5">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Project Description */}
          <div>
            <h4 className="font-title-md text-sm uppercase tracking-wider text-primary font-bold mb-2">
              ภาพรวมขอบเขตงานโครงการ
            </h4>
            <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technical Specs Table */}
          <div className="bg-[#f2f3ff] rounded-xl p-4 sm:p-5 border border-outline-variant/30 space-y-3">
            <h4 className="font-title-md text-xs uppercase tracking-wider text-secondary font-bold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>ข้อมูลสเปกทางวิศวกรรม (TECHNICAL SPECIFICATIONS)</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-label-technical">
              <div className="bg-white p-2.5 rounded border border-outline-variant/20">
                <span className="text-gray-500 block text-[11px]">ประเภทระบบ:</span>
                <span className="font-bold text-primary">{project.specs.systemType}</span>
              </div>
              {project.specs.temperatureRange && (
                <div className="bg-white p-2.5 rounded border border-outline-variant/20">
                  <span className="text-gray-500 block text-[11px]">ช่วงอุณหภูมิควบคุม:</span>
                  <span className="font-bold text-primary">{project.specs.temperatureRange}</span>
                </div>
              )}
              {project.specs.capacity && (
                <div className="bg-white p-2.5 rounded border border-outline-variant/20">
                  <span className="text-gray-500 block text-[11px]">ขนาดและกำลังความเย็น:</span>
                  <span className="font-bold text-primary">{project.specs.capacity}</span>
                </div>
              )}
              <div className="bg-white p-2.5 rounded border border-outline-variant/20">
                <span className="text-gray-500 block text-[11px]">มาตรฐานควบคุม:</span>
                <span className="font-bold text-primary">{project.specs.standards}</span>
              </div>
            </div>
          </div>

          {/* Engineering Highlights */}
          <div>
            <h4 className="font-title-md text-sm uppercase tracking-wider text-primary font-bold mb-2.5">
              จุดเด่นและมาตรฐานการติดตั้ง
            </h4>
            <div className="space-y-2">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-on-surface">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-5 border-t border-outline-variant/30 bg-[#faf8ff] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-label-technical text-gray-500">
            ต้องการสร้างหรือปรับปรุงโครงการแบบนี้?
          </div>
          <button
            type="button"
            onClick={handleInquireProject}
            className="inline-flex items-center gap-2 bg-on-tertiary-container hover:bg-tertiary text-white font-title-md text-xs sm:text-sm px-5 py-2.5 rounded shadow transition-all cursor-pointer"
          >
            <span>นำสเปกนี้ไปขอใบเสนอราคา</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
