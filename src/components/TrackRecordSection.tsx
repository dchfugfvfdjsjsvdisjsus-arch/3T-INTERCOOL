import React, { useState } from 'react';
import { PROJECTS_GALLERY } from '../data/companyData';
import { ProjectCategory, ProjectItem } from '../types';
import { MapPin, Eye, CheckCircle2, Building, ChevronRight } from 'lucide-react';

interface TrackRecordSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  selectedFilterOverride?: ProjectCategory;
}

export const TrackRecordSection: React.FC<TrackRecordSectionProps> = ({
  onSelectProject,
  selectedFilterOverride,
}) => {
  const [filter, setFilter] = useState<ProjectCategory>(selectedFilterOverride || 'all');

  const filterButtons: { label: string; value: ProjectCategory }[] = [
    { label: 'ทั้งหมด', value: 'all' },
    { label: 'ห้องเย็น & ตู้แช่', value: 'coldroom' },
    { label: 'ระบบท่อลม & AHU', value: 'duct' },
    { label: 'ระบบ Chiller & ท่อ', value: 'chiller' },
    { label: 'หุ้มฉนวน & Jacket', value: 'jacket' },
  ];

  const filteredProjects =
    filter === 'all'
      ? PROJECTS_GALLERY
      : PROJECTS_GALLERY.filter((item) => item.category === filter);

  return (
    <section className="w-full py-16 sm:py-20 bg-surface scroll-mt-20" id="track-record">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-5 bg-on-tertiary-container rounded-sm" />
              <span className="font-label-eyebrow text-secondary uppercase tracking-widest text-xs font-bold">
                ENGINEERING TRACK RECORD
              </span>
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl text-primary font-bold mt-2">
              ผลงานโครงการและความไว้วางใจ
            </h2>
            <p className="font-body-md text-on-surface-variant mt-1 text-sm sm:text-base">
              ภาพถ่ายผลงานการติดตั้งจริง ณ ไซต์งานลูกค้าองค์กรและโรงงานอุตสาหกรรม
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {filterButtons.map((btn) => {
              const isActive = filter === btn.value;
              return (
                <button
                  key={btn.value}
                  type="button"
                  onClick={() => setFilter(btn.value)}
                  className={`px-3.5 py-1.5 rounded font-label-technical text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/30 hover:border-secondary group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative overflow-hidden h-60 bg-gray-900">
                  <img
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                    src={project.imageUrl}
                    loading="lazy"
                  />
                  {/* Client badge */}
                  <span className="absolute top-3 left-3 bg-[#001428]/85 backdrop-blur-sm text-white px-2.5 py-1 rounded text-xs font-label-eyebrow border border-white/10 font-bold">
                    {project.client}
                  </span>
                  {/* Status badge */}
                  <span className="absolute top-3 right-3 bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded text-xs font-label-eyebrow font-bold shadow-sm">
                    {project.status}
                  </span>

                  {/* Hover Inspect Overlay */}
                  <div className="absolute inset-0 bg-[#001428]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2">
                    <Eye className="w-5 h-5 text-secondary-container" />
                    <span className="font-title-md text-xs font-bold">คลิกดูสเปกโครงการ</span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-1.5 font-label-eyebrow text-xs text-secondary font-bold">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>

                  <h3 className="font-title-md text-base text-primary font-bold group-hover:text-secondary transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="font-body-sm text-on-surface-variant text-xs line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-between text-xs font-label-technical text-on-surface-variant">
                  <span className="truncate max-w-[200px] text-gray-500">
                    {project.specs.systemType}
                  </span>
                  <span className="text-secondary font-bold flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                    <span>ดูรายละเอียด</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
