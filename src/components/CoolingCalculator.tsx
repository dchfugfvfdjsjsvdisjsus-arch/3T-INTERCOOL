import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Flame, Snowflake, Wind, Building2, HelpCircle } from 'lucide-react';

interface CoolingCalculatorProps {
  onApplyToQuote: (details: string, serviceType: string) => void;
}

export const CoolingCalculator: React.FC<CoolingCalculatorProps> = ({ onApplyToQuote }) => {
  const [appType, setAppType] = useState<'coldroom_freezer' | 'coldroom_chiller' | 'cleanroom' | 'factory_vrf'>('coldroom_chiller');
  const [width, setWidth] = useState<number>(4);
  const [length, setLength] = useState<number>(6);
  const [height, setHeight] = useState<number>(3);
  const [productLoadKg, setProductLoadKg] = useState<number>(1500);
  const [doorOpenings, setDoorOpenings] = useState<'low' | 'medium' | 'high'>('medium');

  // Calculation parameters
  const volumeM3 = Math.max(1, width * length * height);
  const floorAreaM2 = Math.max(1, width * length);

  let targetTemp = '+2°C ถึง +5°C (Chiller Room)';
  let recommendedPanel = 'PIR Foam 75 - 100 mm (B1)';
  let btuFactorPerM3 = 350; // base BTU/m3

  if (appType === 'coldroom_freezer') {
    targetTemp = '-18°C ถึง -25°C (Freezer Room)';
    recommendedPanel = 'PIR Foam 125 - 150 mm (B1 ไม่ลามไฟ)';
    btuFactorPerM3 = 600;
  } else if (appType === 'cleanroom') {
    targetTemp = '20°C ถึง 22°C (RH 50±5%)';
    recommendedPanel = 'PIR / Antibacterial Steel Sheet';
    btuFactorPerM3 = 420;
  } else if (appType === 'factory_vrf') {
    targetTemp = '24°C ถึง 25°C (Comfort / Plant)';
    recommendedPanel = 'Insulated Air Ductwork + AHU';
    btuFactorPerM3 = 280;
  }

  // Multiplier based on door openings & daily turnover
  const trafficMultiplier = doorOpenings === 'low' ? 1.05 : doorOpenings === 'high' ? 1.35 : 1.18;
  const productLoadBtu = productLoadKg * 4.5;
  const estimatedBtu = Math.round((volumeM3 * btuFactorPerM3 * trafficMultiplier + productLoadBtu) / 1000) * 1000;
  const estimatedTR = (estimatedBtu / 12000).toFixed(1);
  const estimatedHP = (parseFloat(estimatedTR) * 1.3).toFixed(1);

  const handleApply = () => {
    let service = 'coldroom';
    if (appType === 'factory_vrf') service = 'hvac';
    if (appType === 'cleanroom') service = 'duct';

    const typeLabels = {
      coldroom_freezer: 'ห้องแช่แข็ง Freezer Room (-20°C)',
      coldroom_chiller: 'ห้องเย็น Chilled Storage (+2°C ถึง +5°C)',
      cleanroom: 'ห้องคลีนรูม Cleanroom & HVAC (21°C)',
      factory_vrf: 'ระบบปรับอากาศโรงงาน & VRV/VRF (25°C)'
    };

    const summary = `ผลคำนวณโหลดความเย็นเบื้องต้น:
- ประเภท: ${typeLabels[appType]}
- ขนาดห้อง: กว้าง ${width}m x ยาว ${length}m x สูง ${height}m (ปริมาตร ${volumeM3.toFixed(1)} ลบ.ม. / พื้นที่ ${floorAreaM2.toFixed(1)} ตร.ม.)
- ปริมาณสินค้าหมุนเวียน: ~${productLoadKg.toLocaleString()} กก./วัน
- อัตราเปิดประตู: ระดับ ${doorOpenings === 'low' ? 'ต่ำ' : doorOpenings === 'medium' ? 'ปานกลาง' : 'สูง'}
- โหลดความเย็นที่ประเมินได้: ~${estimatedBtu.toLocaleString()} BTU/hr (~${estimatedTR} TR)
- ขนาดชุดทำความเย็นแนะนำ: ~${estimatedHP} HP
- แผงฉนวนแนะนำ: ${recommendedPanel}`;

    onApplyToQuote(summary, service);
  };

  return (
    <div className="w-full bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-md p-6 sm:p-8 overflow-hidden relative">
      {/* Decorative Blueprint Accent */}
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-secondary-container/10 blur-2xl pointer-events-none" />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-outline-variant/30">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse" />
            <span className="font-label-eyebrow text-secondary uppercase tracking-widest text-xs font-bold">
              ENGINEERING SIZING TOOL
            </span>
          </div>
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary mt-1">
            เครื่องมือคำนวณขนาดความเย็นเบื้องต้น (Cooling Load &amp; BTU Sizer)
          </h3>
          <p className="font-body-sm text-on-surface-variant mt-1">
            ประเมินภาระความเย็น ขนาด BTU, ตันความเย็น (TR) และแรงม้าคอมเพรสเซอร์ (HP) สำหรับห้องเย็นและโรงงาน
          </p>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-surface-container text-primary font-label-technical text-xs shrink-0 self-start lg:self-center">
          <HelpCircle className="w-4 h-4 text-secondary" />
          <span>มาตรฐาน ASHRAE &amp; คณะวิศวกรรม</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pt-6">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-5">
          {/* System Type Selector */}
          <div>
            <label className="font-label-technical text-xs font-bold text-on-surface block mb-2">
              1. เลือกประเภทพื้นที่หรือระบบความเย็น
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setAppType('coldroom_chiller')}
                className={`p-3 rounded-lg text-left transition-all border flex items-start gap-3 ${
                  appType === 'coldroom_chiller'
                    ? 'border-secondary bg-surface-container text-primary shadow-sm ring-1 ring-secondary'
                    : 'border-outline-variant/40 bg-surface hover:bg-surface-container-low text-on-surface'
                }`}
              >
                <div className="p-2 rounded bg-secondary/10 text-secondary shrink-0 mt-0.5">
                  <Snowflake className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-title-md text-xs font-bold">ห้องเย็น Chiller (+2° ถึง +5°C)</div>
                  <div className="font-body-sm text-[11px] text-on-surface-variant">เก็บผัก ผลไม้ เครื่องดื่ม เนื้อสด</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setAppType('coldroom_freezer')}
                className={`p-3 rounded-lg text-left transition-all border flex items-start gap-3 ${
                  appType === 'coldroom_freezer'
                    ? 'border-secondary bg-surface-container text-primary shadow-sm ring-1 ring-secondary'
                    : 'border-outline-variant/40 bg-surface hover:bg-surface-container-low text-on-surface'
                }`}
              >
                <div className="p-2 rounded bg-on-tertiary-container/10 text-on-tertiary-container shrink-0 mt-0.5">
                  <Flame className="w-4 h-4 rotate-180" />
                </div>
                <div>
                  <div className="font-title-md text-xs font-bold">ห้องแช่แข็ง Freezer (-18° ถึง -25°C)</div>
                  <div className="font-body-sm text-[11px] text-on-surface-variant">เนื้อสัตว์แช่แข็ง อาหารทะเล ไอศกรีม</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setAppType('cleanroom')}
                className={`p-3 rounded-lg text-left transition-all border flex items-start gap-3 ${
                  appType === 'cleanroom'
                    ? 'border-secondary bg-surface-container text-primary shadow-sm ring-1 ring-secondary'
                    : 'border-outline-variant/40 bg-surface hover:bg-surface-container-low text-on-surface'
                }`}
              >
                <div className="p-2 rounded bg-secondary/10 text-secondary shrink-0 mt-0.5">
                  <Wind className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-title-md text-xs font-bold">คลีนรูม &amp; ท่อลม Cleanroom</div>
                  <div className="font-body-sm text-[11px] text-on-surface-variant">ยา อิเล็กทรอนิกส์ ควบคุมความชื้น</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setAppType('factory_vrf')}
                className={`p-3 rounded-lg text-left transition-all border flex items-start gap-3 ${
                  appType === 'factory_vrf'
                    ? 'border-secondary bg-surface-container text-primary shadow-sm ring-1 ring-secondary'
                    : 'border-outline-variant/40 bg-surface hover:bg-surface-container-low text-on-surface'
                }`}
              >
                <div className="p-2 rounded bg-secondary/10 text-secondary shrink-0 mt-0.5">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-title-md text-xs font-bold">แอร์โรงงาน VRV/VRF / อาคาร</div>
                  <div className="font-body-sm text-[11px] text-on-surface-variant">สำนักงาน สายการผลิต โกดังคลัง</div>
                </div>
              </button>
            </div>
          </div>

          {/* Dimensions Controls */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="font-label-technical text-xs font-bold text-on-surface">
                2. ขนาดมิติห้อง (เมตร)
              </label>
              <span className="font-label-technical text-xs text-secondary font-semibold">
                ปริมาตร: {volumeM3.toFixed(1)} m³ | พื้นที่: {floorAreaM2.toFixed(1)} m²
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-surface-container-low p-2.5 rounded-lg border border-outline-variant/30">
                <div className="flex justify-between text-[11px] text-on-surface-variant font-label-technical">
                  <span>ความกว้าง (W)</span>
                  <span className="font-bold text-primary">{width} ม.</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="25"
                  step="0.5"
                  value={width}
                  onChange={(e) => setWidth(parseFloat(e.target.value))}
                  className="w-full accent-secondary mt-1.5 cursor-pointer"
                />
              </div>

              <div className="bg-surface-container-low p-2.5 rounded-lg border border-outline-variant/30">
                <div className="flex justify-between text-[11px] text-on-surface-variant font-label-technical">
                  <span>ความยาว (L)</span>
                  <span className="font-bold text-primary">{length} ม.</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="40"
                  step="0.5"
                  value={length}
                  onChange={(e) => setLength(parseFloat(e.target.value))}
                  className="w-full accent-secondary mt-1.5 cursor-pointer"
                />
              </div>

              <div className="bg-surface-container-low p-2.5 rounded-lg border border-outline-variant/30">
                <div className="flex justify-between text-[11px] text-on-surface-variant font-label-technical">
                  <span>ความสูง (H)</span>
                  <span className="font-bold text-primary">{height} ม.</span>
                </div>
                <input
                  type="range"
                  min="2.2"
                  max="8"
                  step="0.2"
                  value={height}
                  onChange={(e) => setHeight(parseFloat(e.target.value))}
                  className="w-full accent-secondary mt-1.5 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Product & Traffic Load */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-label-technical text-xs font-bold text-on-surface block mb-1.5">
                3. ปริมาณสินค้าเข้าพักต่อวัน
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="100"
                  max="50000"
                  step="100"
                  value={productLoadKg}
                  onChange={(e) => setProductLoadKg(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full px-3 py-2 rounded bg-surface-container-low border border-outline-variant/30 font-label-technical text-xs text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary"
                />
                <span className="font-label-technical text-xs text-on-surface-variant shrink-0">กก./วัน</span>
              </div>
            </div>

            <div>
              <label className="font-label-technical text-xs font-bold text-on-surface block mb-1.5">
                4. ความถี่การเปิดประตูห้องเย็น
              </label>
              <div className="flex rounded-lg overflow-hidden border border-outline-variant/30">
                <button
                  type="button"
                  onClick={() => setDoorOpenings('low')}
                  className={`flex-1 py-2 text-xs font-label-technical transition-colors ${
                    doorOpenings === 'low' ? 'bg-primary text-white font-bold' : 'bg-surface hover:bg-surface-container-low text-on-surface'
                  }`}
                >
                  น้อย (&lt;10 ครั้ง)
                </button>
                <button
                  type="button"
                  onClick={() => setDoorOpenings('medium')}
                  className={`flex-1 py-2 text-xs font-label-technical transition-colors ${
                    doorOpenings === 'medium' ? 'bg-primary text-white font-bold' : 'bg-surface hover:bg-surface-container-low text-on-surface'
                  }`}
                >
                  ปานกลาง
                </button>
                <button
                  type="button"
                  onClick={() => setDoorOpenings('high')}
                  className={`flex-1 py-2 text-xs font-label-technical transition-colors ${
                    doorOpenings === 'high' ? 'bg-primary text-white font-bold' : 'bg-surface hover:bg-surface-container-low text-on-surface'
                  }`}
                >
                  สูง (โหลดบ่อย)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Estimation Result Panel */}
        <div className="lg:col-span-5 bg-primary text-on-primary rounded-xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/10 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="font-label-eyebrow text-secondary-fixed text-xs tracking-wider uppercase">
                ESTIMATED COOLING SPECS
              </span>
              <span className="font-label-technical text-[11px] text-white/70">
                {targetTemp}
              </span>
            </div>

            {/* Big BTU & TR result */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="bg-white/5 backdrop-blur-sm p-3.5 rounded-lg border border-white/10">
                <span className="font-label-technical text-[10px] text-surface-container-high uppercase block">
                  ภาระความเย็นที่ต้องใช้
                </span>
                <div className="font-headline-lg text-2xl sm:text-3xl font-bold text-secondary-fixed-dim mt-0.5">
                  {estimatedBtu.toLocaleString()}
                </div>
                <span className="font-label-technical text-[11px] text-white/70">BTU / ชั่วโมง</span>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-3.5 rounded-lg border border-white/10">
                <span className="font-label-technical text-[10px] text-surface-container-high uppercase block">
                  ขนาดตันความเย็น (TR)
                </span>
                <div className="font-headline-lg text-2xl sm:text-3xl font-bold text-white mt-0.5">
                  {estimatedTR}
                </div>
                <span className="font-label-technical text-[11px] text-secondary-fixed">Tons Refrig. (~{estimatedHP} HP)</span>
              </div>
            </div>

            {/* Spec breakdown */}
            <div className="space-y-2 text-xs pt-2">
              <div className="flex items-center justify-between text-surface-container-high">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-secondary-container" />
                  <span>สเปกแผงฉนวนกันไฟ:</span>
                </span>
                <span className="font-semibold text-white text-right">{recommendedPanel}</span>
              </div>
              <div className="flex items-center justify-between text-surface-container-high">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-secondary-container" />
                  <span>ประเภทคอมเพรสเซอร์:</span>
                </span>
                <span className="font-semibold text-white">Semi-Hermetic / Scroll Inverter</span>
              </div>
              <div className="flex items-center justify-between text-surface-container-high">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-secondary-container" />
                  <span>สารทำความเย็นแนะนำ:</span>
                </span>
                <span className="font-semibold text-white">R-404A / R-448A / R-32</span>
              </div>
            </div>
          </div>

          <div className="pt-6 relative z-10 space-y-2">
            <button
              type="button"
              onClick={handleApply}
              className="w-full bg-on-tertiary-container hover:bg-tertiary text-white font-title-md text-sm py-3 px-4 rounded shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>ส่งข้อมูลนี้เข้าแบบฟอร์มขอใบเสนอราคา</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="font-body-sm text-[10px] text-surface-container-high/70 text-center">
              * การคำนวณข้างต้นเป็นการประมาณการเบื้องต้น ทีมวิศวกร 3T จะเข้าสำรวจหน้างานจริงเพื่อคำนวณอย่างละเอียด
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
