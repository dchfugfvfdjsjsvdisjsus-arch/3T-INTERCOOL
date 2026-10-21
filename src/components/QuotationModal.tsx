import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface QuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultServiceType?: string;
  defaultDetails?: string;
}

export const QuotationModal: React.FC<QuotationModalProps> = ({
  isOpen,
  onClose,
  defaultServiceType = 'coldroom',
  defaultDetails = '',
}) => {
  const [company, setCompany] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState(defaultServiceType);
  const [details, setDetails] = useState(defaultDetails);
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `RFQ-3T-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedCode(code);
  };

  const handleClose = () => {
    setSubmittedCode(null);
    setCompany('');
    setContactName('');
    setPhone('');
    setEmail('');
    setDetails('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-outline-variant/40 max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-outline-variant/30 bg-[#faf8ff]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary-container text-xl">request_quote</span>
            <span className="font-headline text-base font-bold text-primary">
              ขอใบเสนอราคา / นัดสำรวจหน้างานฟรี
            </span>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-gray-500 hover:text-primary hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto custom-scrollbar p-5 sm:p-6">
          {submittedCode ? (
            <div className="space-y-4 py-4 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-headline text-lg sm:text-xl font-bold text-primary">
                บันทึกการขอใบเสนอราคาเรียบร้อย
              </h3>
              <div className="p-3 bg-surface-container rounded-lg font-label-technical text-sm font-bold text-secondary inline-block">
                หมายเลขอ้างอิง: {submittedCode}
              </div>
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
                เจ้าหน้าที่วิศวกรฝ่ายขายของ 3T Intercool &amp; Service จะติดต่อกลับไปยังเบอร์ <strong>{phone}</strong> ภายใน 24 ชม. ขอบคุณครับ
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="bg-primary hover:bg-primary-container text-white px-6 py-2.5 rounded font-title-md text-xs cursor-pointer"
                >
                  ปิดหน้าต่าง
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="font-label-technical text-xs font-semibold text-on-surface block mb-1">
                    ชื่อบริษัท / โรงงาน *
                  </label>
                  <input
                    required
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="เช่น บริษัท เอสซีบี คูลลิ่ง จำกัด"
                    className="w-full px-3.5 py-2 rounded bg-[#f2f3ff] text-on-surface font-body-sm text-xs border border-outline-variant/30 focus:outline-none focus:bg-white focus:ring-1 focus:ring-secondary"
                  />
                </div>
                <div>
                  <label className="font-label-technical text-xs font-semibold text-on-surface block mb-1">
                    ชื่อผู้ติดต่อ *
                  </label>
                  <input
                    required
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="คุณวิชัย / ผู้จัดการแผนกซ่อมบำรุง"
                    className="w-full px-3.5 py-2 rounded bg-[#f2f3ff] text-on-surface font-body-sm text-xs border border-outline-variant/30 focus:outline-none focus:bg-white focus:ring-1 focus:ring-secondary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="font-label-technical text-xs font-semibold text-on-surface block mb-1">
                    เบอร์โทรศัพท์ติดต่อ *
                  </label>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="08X-XXX-XXXX"
                    className="w-full px-3.5 py-2 rounded bg-[#f2f3ff] text-on-surface font-body-sm text-xs border border-outline-variant/30 focus:outline-none focus:bg-white focus:ring-1 focus:ring-secondary"
                  />
                </div>
                <div>
                  <label className="font-label-technical text-xs font-semibold text-on-surface block mb-1">
                    อีเมลติดต่อ *
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="purchasing@company.com"
                    className="w-full px-3.5 py-2 rounded bg-[#f2f3ff] text-on-surface font-body-sm text-xs border border-outline-variant/30 focus:outline-none focus:bg-white focus:ring-1 focus:ring-secondary"
                  />
                </div>
              </div>

              <div>
                <label className="font-label-technical text-xs font-semibold text-on-surface block mb-1">
                  ประเภทบริการที่ต้องการ
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full px-3.5 py-2 rounded bg-[#f2f3ff] text-on-surface font-body-sm text-xs border border-outline-variant/30 focus:outline-none focus:bg-white focus:ring-1 focus:ring-secondary"
                >
                  <option value="coldroom">งานระบบห้องเย็น Cold Room &amp; Freezer</option>
                  <option value="hvac">งานปรับอากาศ VRF / Chilled Water</option>
                  <option value="duct">งานท่อส่งลม Air Duct &amp; Cleanroom</option>
                  <option value="chiller">งานเปลี่ยนวาล์ว ท่อน้ำเย็น &amp; Cooling Tower</option>
                  <option value="commercial-fridge">งานตู้แช่ห้างค้าปลีก Sanden / ซูเปอร์มาร์เก็ต</option>
                  <option value="maintenance">สัญญาบำรุงรักษาเชิงป้องกันประจำปี (PM)</option>
                  <option value="emergency">แจ้งซ่อมด่วนฉุกเฉิน 24 ชั่วโมง</option>
                </select>
              </div>

              <div>
                <label className="font-label-technical text-xs font-semibold text-on-surface block mb-1">
                  รายละเอียดโครงการ / ขนาดพื้นที่
                </label>
                <textarea
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="ระบุขนาดห้องเย็น, อุณหภูมิเป้าหมาย, ยี่ห้อเครื่องจักร, หรืออาการผิดปกติ..."
                  className="w-full px-3.5 py-2 rounded bg-[#f2f3ff] text-on-surface font-body-sm text-xs border border-outline-variant/30 focus:outline-none focus:bg-white focus:ring-1 focus:ring-secondary"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-container text-white py-3 px-4 rounded font-title-md text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4 text-secondary-container" />
                  <span>ยืนยันส่งข้อมูลขอใบเสนอราคา</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
