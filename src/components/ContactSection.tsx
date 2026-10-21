import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { RfqFormData } from '../types';
import { Phone, MessageSquare, Mail, MapPin, Send, CheckCircle2, Copy, Check, Printer, Clock } from 'lucide-react';

interface ContactSectionProps {
  initialServiceType?: string;
  initialDetails?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialServiceType,
  initialDetails,
}) => {
  const [formData, setFormData] = useState<RfqFormData>({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    serviceType: initialServiceType || 'coldroom',
    projectDetails: initialDetails || '',
    urgency: 'normal',
  });

  const [copiedLine, setCopiedLine] = useState(false);
  const [submittedRfq, setSubmittedRfq] = useState<{
    id: string;
    submittedAt: string;
    data: RfqFormData;
  } | null>(null);

  useEffect(() => {
    if (initialServiceType) {
      setFormData((prev) => ({ ...prev, serviceType: initialServiceType }));
    }
    if (initialDetails) {
      setFormData((prev) => ({ ...prev, projectDetails: initialDetails }));
    }
  }, [initialServiceType, initialDetails]);

  const handleCopyLine = () => {
    navigator.clipboard.writeText(COMPANY_INFO.lineId);
    setCopiedLine(true);
    setTimeout(() => setCopiedLine(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const rfqNumber = `RFQ-3T-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const now = new Date().toLocaleString('th-TH');

    setSubmittedRfq({
      id: rfqNumber,
      submittedAt: now,
      data: { ...formData },
    });
  };

  const handleReset = () => {
    setSubmittedRfq(null);
    setFormData({
      companyName: '',
      contactName: '',
      phone: '',
      email: '',
      serviceType: 'coldroom',
      projectDetails: '',
      urgency: 'normal',
    });
  };

  return (
    <section className="w-full py-16 sm:py-20 bg-[#f2f3ff] scroll-mt-20" id="contact">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Contact Details & Direct Hotline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-5 bg-on-tertiary-container rounded-sm" />
              <span className="font-label-eyebrow text-secondary uppercase tracking-widest text-xs font-bold">
                CONTACT &amp; CONSULTATION
              </span>
            </div>

            <h2 className="font-headline text-2xl sm:text-3xl text-primary font-bold">
              ปรึกษาผู้เชี่ยวชาญ<br className="hidden sm:inline" />หรือนัดสำรวจหน้างานฟรี
            </h2>

            <p className="font-body-md text-on-surface-variant leading-relaxed text-sm sm:text-base">
              ทีมวิศวกร บริษัท 3ต อินเตอร์คูล แอนด์ เซอร์วิส จำกัด พร้อมเข้าสำรวจ ประเมินราคา และให้คำปรึกษาทางเทคนิคสำหรับโรงงาน คลังสินค้า และโครงการค้าปลีก
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 pt-2">
              {/* Hotline Card */}
              <a
                href={`tel:${COMPANY_INFO.hotlineRaw}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white hover:bg-[#eaedff] transition-all shadow-sm border border-outline-variant/30 group"
              >
                <div className="w-12 h-12 rounded-lg bg-on-tertiary-container text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-label-eyebrow text-xs text-on-surface-variant uppercase tracking-wider font-semibold">
                    HOTLINE สายด่วน 24 ชม.
                  </div>
                  <div className="font-headline text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                    {COMPANY_INFO.hotline}
                  </div>
                  <div className="font-body-sm text-xs text-secondary font-medium">
                    โทรด่วน ติดต่อคุณธวัชชัยโดยตรง
                  </div>
                </div>
              </a>

              {/* LINE Official Card */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-white shadow-sm border border-outline-variant/30">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#06c755]/15 text-[#06c755] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-label-eyebrow text-xs text-on-surface-variant uppercase tracking-wider font-semibold">
                      LINE OFFICIAL
                    </div>
                    <div className="font-headline text-base font-bold text-primary">
                      Line ID: <span className="text-[#06c755]">{COMPANY_INFO.lineId}</span>
                    </div>
                    <div className="font-body-sm text-xs text-on-surface-variant">
                      ส่งรูปหน้างานหรือแบบแปลนมาประเมินได้ทันที
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyLine}
                  className="px-2.5 py-1.5 rounded bg-surface-container hover:bg-surface-container-high text-xs font-label-technical text-primary flex items-center gap-1 transition-colors cursor-pointer"
                  title="คัดลอก Line ID"
                >
                  {copiedLine ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedLine ? 'คัดลอกแล้ว' : 'คัดลอก'}</span>
                </button>
              </div>

              {/* Email Card */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-outline-variant/30">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-label-eyebrow text-xs text-on-surface-variant uppercase tracking-wider font-semibold">
                    EMAIL QUOTATION
                  </div>
                  <a
                    className="font-headline text-base font-bold text-primary hover:text-secondary hover:underline"
                    href={`mailto:${COMPANY_INFO.email}`}
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <div className="font-body-sm text-xs text-on-surface-variant">
                    ส่งเอกสาร TOR / BOQ เพื่อขอใบเสนอราคา
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-outline-variant/30">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="font-label-eyebrow text-xs text-on-surface-variant uppercase tracking-wider font-semibold">
                    HEADQUARTERS LOCATION
                  </div>
                  <div className="font-body-sm text-on-surface leading-relaxed text-xs">
                    {COMPANY_INFO.address}
                  </div>
                  <div className="font-label-technical text-xs text-secondary font-bold">
                    {COMPANY_INFO.serviceCoverage}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Map Preview */}
            <div
              className="w-full bg-[#eaedff] rounded-xl overflow-hidden shadow-inner border border-outline-variant/30 p-4 relative"
              data-location="Chalong Krung 53, Lam Pla Thio, Lat Krabang, Bangkok"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0">
                  <span className="material-symbols-outlined text-2xl">map</span>
                </div>
                <div>
                  <p className="font-label-technical text-xs font-bold text-primary">
                    ลาดกระบัง กรุงเทพมหานคร (พิกัดศูนย์บริการวิศวกรรม)
                  </p>
                  <p className="font-body-sm text-[11px] text-on-surface-variant">
                    ติดถนนฉลองกรุง เชื่อมต่อนิคมฯ ลาดกระบัง, มอเตอร์เวย์ และ EEC
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Consultation & RFQ Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-md border border-outline-variant/30">
              {submittedRfq ? (
                /* Success Notification View */
                <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
                  <div className="p-4 sm:p-6 rounded-xl bg-[#eaedff] border border-secondary/30 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-title-md text-base sm:text-lg font-bold text-primary">
                          ได้รับข้อมูลขอใบเสนอราคาเรียบร้อยแล้ว
                        </h4>
                        <p className="font-label-technical text-xs text-secondary font-bold">
                          รหัสอ้างอิง: {submittedRfq.id}
                        </p>
                      </div>
                    </div>
                    <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      ทีมวิศวกร บริษัท 3ต อินเตอร์คูล แอนด์ เซอร์วิส จำกัด จะติดต่อกลับไปที่เบอร์{' '}
                      <strong>{submittedRfq.data.phone}</strong> หรืออีเมล{' '}
                      <strong>{submittedRfq.data.email}</strong> ภายใน 24 ชั่วโมง เพื่อยืนยันนัดหมายสำรวจหน้างานและส่งมอบใบเสนอราคา
                    </p>
                  </div>

                  {/* Summary of what was sent */}
                  <div className="bg-[#f2f3ff] p-4 rounded-xl border border-outline-variant/20 space-y-2 text-xs font-label-technical text-on-surface">
                    <div className="font-bold text-primary text-sm pb-1 border-b border-outline-variant/30">
                      สรุปข้อมูลที่ส่ง:
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-gray-500">บริษัท / ผู้ติดต่อ:</span>
                      <span className="font-semibold text-right">{submittedRfq.data.companyName} ({submittedRfq.data.contactName})</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-gray-500">ประเภทบริการ:</span>
                      <span className="font-semibold text-right">{submittedRfq.data.serviceType}</span>
                    </div>
                    <div className="py-1">
                      <span className="text-gray-500 block mb-1">รายละเอียดโครงการ:</span>
                      <p className="bg-white p-2.5 rounded border border-outline-variant/20 text-xs font-mono whitespace-pre-wrap">
                        {submittedRfq.data.projectDetails || 'ไม่มีข้อมูลเพิ่มเติม'}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded bg-surface-container hover:bg-surface-container-high text-xs font-title-md text-primary transition-colors cursor-pointer"
                    >
                      <Printer className="w-4 h-4" />
                      <span>พิมพ์หรือบันทึกใบร้องขอ</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded bg-primary hover:bg-primary-container text-xs font-title-md text-white transition-colors cursor-pointer ml-auto"
                    >
                      <span>ส่งคำขอใหม่</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* The RFQ Form */
                <>
                  <div className="mb-6 space-y-1">
                    <h3 className="font-headline text-xl sm:text-2xl font-bold text-primary">
                      แบบฟอร์มขอใบเสนอราคา / นัดสำรวจหน้างานฟรี
                    </h3>
                    <p className="font-body-sm text-on-surface-variant text-xs sm:text-sm">
                      กรอกรายละเอียดเบื้องต้น เจ้าหน้าที่ฝ่ายวิศวกรรมจะติดต่อกลับภายใน 24 ชม.
                    </p>
                  </div>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-label-technical text-xs font-semibold text-on-surface" htmlFor="company-name">
                          ชื่อบริษัท / หน่วยงาน *
                        </label>
                        <input
                          className="w-full px-4 py-2.5 rounded bg-[#f2f3ff] text-on-surface font-body-sm text-xs sm:text-sm border border-outline-variant/30 focus:outline-none focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                          id="company-name"
                          placeholder="เช่น บริษัท เอบีซี อินดัสทรี จำกัด"
                          required
                          type="text"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-label-technical text-xs font-semibold text-on-surface" htmlFor="contact-name">
                          ชื่อผู้ติดต่อ *
                        </label>
                        <input
                          className="w-full px-4 py-2.5 rounded bg-[#f2f3ff] text-on-surface font-body-sm text-xs sm:text-sm border border-outline-variant/30 focus:outline-none focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                          id="contact-name"
                          placeholder="ชื่อ-นามสกุล / ตำแหน่ง"
                          required
                          type="text"
                          value={formData.contactName}
                          onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-label-technical text-xs font-semibold text-on-surface" htmlFor="contact-phone">
                          เบอร์โทรศัพท์ติดต่อกลับ *
                        </label>
                        <input
                          className="w-full px-4 py-2.5 rounded bg-[#f2f3ff] text-on-surface font-body-sm text-xs sm:text-sm border border-outline-variant/30 focus:outline-none focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                          id="contact-phone"
                          placeholder="08X-XXX-XXXX"
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-label-technical text-xs font-semibold text-on-surface" htmlFor="contact-email">
                          อีเมลสำหรับรับเอกสารเสนอราคา *
                        </label>
                        <input
                          className="w-full px-4 py-2.5 rounded bg-[#f2f3ff] text-on-surface font-body-sm text-xs sm:text-sm border border-outline-variant/30 focus:outline-none focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                          id="contact-email"
                          placeholder="engineer@company.com"
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-label-technical text-xs font-semibold text-on-surface" htmlFor="service-type">
                        ประเภทงานที่สนใจ
                      </label>
                      <select
                        className="w-full px-4 py-2.5 rounded bg-[#f2f3ff] text-on-surface font-body-sm text-xs sm:text-sm border border-outline-variant/30 focus:outline-none focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                        id="service-type"
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      >
                        <option value="coldroom">งานสร้าง/ปรับปรุงระบบห้องเย็น (Cold Storage / Freezer Room)</option>
                        <option value="hvac">งานระบบปรับอากาศโรงงานและอาคารพาณิชย์ (VRF / Chiller)</option>
                        <option value="duct">งานระบบท่อลมระบายอากาศ &amp; งานหุ้มฉนวน Jacket</option>
                        <option value="chiller">งานเปลี่ยนวาล์ว ท่อน้ำเย็น และ Cooling Tower</option>
                        <option value="commercial-fridge">งานติดตั้ง/ซ่อมตู้แช่ห้างสรรพสินค้า</option>
                        <option value="maintenance">สัญญาบริการบำรุงรักษาเชิงป้องกันประจำปี (PM Contract)</option>
                        <option value="emergency">แจ้งซ่อมฉุกเฉินด่วน 24 ชั่วโมง</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-label-technical text-xs font-semibold text-on-surface" htmlFor="urgency">
                        ความเร่งด่วนของโครงการ
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, urgency: 'normal' })}
                          className={`py-2 px-3 rounded text-xs font-label-technical transition-all cursor-pointer ${
                            formData.urgency === 'normal'
                              ? 'bg-primary text-white font-bold'
                              : 'bg-[#f2f3ff] text-on-surface hover:bg-[#eaedff]'
                          }`}
                        >
                          แผนงานปกติ
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, urgency: 'urgent' })}
                          className={`py-2 px-3 rounded text-xs font-label-technical transition-all cursor-pointer ${
                            formData.urgency === 'urgent'
                              ? 'bg-secondary text-white font-bold'
                              : 'bg-[#f2f3ff] text-on-surface hover:bg-[#eaedff]'
                          }`}
                        >
                          เร่งด่วน (1-2 สัปดาห์)
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, urgency: 'emergency' })}
                          className={`py-2 px-3 rounded text-xs font-label-technical transition-all cursor-pointer ${
                            formData.urgency === 'emergency'
                              ? 'bg-on-tertiary-container text-white font-bold'
                              : 'bg-[#f2f3ff] text-on-surface hover:bg-[#eaedff]'
                          }`}
                        >
                          ด่วนฉุกเฉิน 24 ชม.
                        </button>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-label-technical text-xs font-semibold text-on-surface" htmlFor="project-details">
                        รายละเอียดโครงการ / ข้อมูลหน้างาน
                      </label>
                      <textarea
                        className="w-full px-4 py-2.5 rounded bg-[#f2f3ff] text-on-surface font-body-sm text-xs sm:text-sm border border-outline-variant/30 focus:outline-none focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                        id="project-details"
                        placeholder="ระบุขนาดพื้นที่, อุณหภูมิที่ต้องการ, ขนาดห้องเย็น, หรืออาการผิดปกติของเครื่องจักรที่ต้องการให้เข้าตรวจสอบ..."
                        rows={4}
                        value={formData.projectDetails}
                        onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        className="w-full bg-primary hover:bg-primary-container text-white font-title-md py-3.5 px-6 rounded shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer active:scale-98"
                        type="submit"
                      >
                        <span className="material-symbols-outlined text-on-tertiary-container group-hover:rotate-12 transition-transform">
                          send
                        </span>
                        <span>ส่งข้อมูลขอนัดสำรวจหน้างาน / ประเมินราคาฟรี</span>
                      </button>
                    </div>

                    <p className="font-body-sm text-[11px] text-on-surface-variant text-center pt-1 text-gray-500">
                      * ข้อมูลของท่านจะถูกเก็บเป็นความลับเพื่อใช้สำหรับการติดต่อเรื่องใบเสนอราคาของ 3T Intercool &amp; Service เท่านั้น
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
