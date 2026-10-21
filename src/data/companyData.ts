import { ProjectItem, ServiceItem } from '../types';

export const COMPANY_INFO = {
  nameTh: 'บริษัท 3ต อินเตอร์คูล แอนด์ เซอร์วิส จำกัด',
  nameEn: '3T INTERCOOL & SERVICE CO., LTD.',
  taglineTh: 'ผู้นำด้านวิศวกรรมระบบความเย็นและระบายอากาศครบวงจร',
  taglineEn: 'Industrial HVAC & Cold Storage Engineering',
  hotline: '081-5163898',
  hotlineRaw: '0815163898',
  lineId: 'chelsea898',
  email: '3t.intercool@gmail.com',
  workingHours: 'จันทร์ - เสาร์: 08:30 - 17:30 น. (บริการฉุกเฉิน 24 ชั่วโมง)',
  address: 'เลขที่ 109/94 หมู่บ้านพฤกษา51 ซอย ฉลองกรุง53 แขวงลำปลาทิว เขตลาดกระบัง จังหวัดกรุงเทพมหานคร 10520',
  serviceCoverage: 'ครอบคลุมกรุงเทพฯ, ปริมณฑล, นิคมอุตสาหกรรมภาคตะวันออก (EEC: ชลบุรี, ระยอง, ฉะเชิงเทรา) และทั่วประเทศ',
  mdNameTh: 'นาย ธวัชชัย บาระพรม',
  mdNameEn: 'MR. TAWATCHAI BARAPHOM',
  mdTitleTh: 'กรรมการผู้จัดการ (MANAGING DIRECTOR)',
  mdQuote: 'เรายึดมั่นในความซื่อสัตย์ มาตรฐานความปลอดภัย และการส่งมอบงานระบบปรับอากาศและทำความเย็นที่สมบูรณ์แบบที่สุด เพื่อให้ธุรกิจของคู่ค้าดำเนินไปได้อย่างต่อเนื่องโดยไม่มีสะดุด',
  logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRy1OzkIMpI71VvSLTpewUWpU4v0vX8iI7Op8o6m4iTV6pcbsO_oa9gcsOgU8hJ_WIxWFb7gXmC_ki_xqwn6AgGK7vx3jxtAX9JSD5T_AYaGa_wFCtjJvaXDApwqQJQk_IHcfCw95VhqRlpMnvelQU5r9eZQgg5jJdtGEl9XM5pHIFH_zZCgmmFR8GTc1M0VJ4ZKgvKBum0yaGNW0XMhFgy5wZ6K_Sro1dOBrRzZgWG7bgSAiVJXwaHo_bOl5uoqGUIQ',
  avatarUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1XnNPebhx74pgbpujmwajHB_dzqV62KLhdZM8jiZltkB7lDbbp1wNPXWnHHrzxxk-TtC78ZWYuyL99g4ZWE7SJ1fPHvVGljXkLLVb7ft1Rw4Seqw-5jFqvbWNolnLk11rBm3kKoG15CDH7KheeDI7Ue8CRwXctOz67Fj9nlnhjXy5-ANjblI1YTEoM9MNOzOgt4tb_e3Ijzme6QI7O0cLuyyXAGcUvV0xExqdNW5TMXd_x9JAr3qjKmoZZmdm7juzrV5af8gdwk_g'
};

export const CLIENT_LOGOS = [
  { name: 'CP GROUP', desc: 'เครือเจริญโภคภัณฑ์ โรงงานแปรรูปอาหาร' },
  { name: 'ISUZU MOTORS', desc: 'โรงงานประกอบยานยนต์ ลาดกระบัง' },
  { name: 'KCE ELECTRONICS', desc: 'โรงงานผลิตแผ่นวงจรอิเล็กทรอนิกส์' },
  { name: 'DON DON DONKI', desc: 'ห้างค้าปลีกและซูเปอร์มาร์เก็ตญี่ปุ่น' },
  { name: 'THE MALL GROUP', desc: 'ศูนย์การค้าเดอะมอลล์ไลฟ์สโตร์' },
  { name: 'TOSHIBA CARRIER', desc: 'โรงงานผลิตเครื่องปรับอากาศมาตรฐานสากล' },
  { name: 'SANDEN INTERCOOL', desc: 'ผู้นำด้านตู้แช่พาณิชย์ระดับโลก' }
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'hvac-commercial',
    serviceNumber: 'SERVICE 01',
    title: 'งานระบบปรับอากาศ & ตู้แช่',
    shortDesc: 'ติดตั้ง ซ่อมแซม บำรุงรักษา แอร์โรงงาน VRV/VRF, Chilled Water System, Split Type และตู้แช่พาณิชย์ทุกแบรนด์ ทั้งแบบตู้เปิด ตู้กระจก สำหรับซูเปอร์มาร์เก็ต',
    fullDesc: 'บริการครบวงจรตั้งแต่การคำนวณโหลดภาระความเย็น ออกแบบแนวท่อสารทำความเย็น ติดตั้งระบบปรับอากาศรวมศูนย์ VRV / VRF อัจฉริยะ ตลอดจนการติดตั้งและซ่อมตู้แช่เคาน์เตอร์ ตู้แช่เบเกอรี่ ตู้แช่เนื้อสัตว์สำหรับศูนย์การค้าและห้างค้าปลีกชั้นนำ',
    icon: 'ac_unit',
    bulletPoints: [
      'ระบบ VRV / VRF อัจฉริยะ ประหยัดพลังงานระดับสูง',
      'ตู้แช่เคาน์เตอร์ และตู้แช่เย็นห้างสรรพสินค้า (Plug-in & Remote)',
      'ตรวจเช็ครอยรั่วน้ำยา และประสิทธิภาพคอมเพรสเซอร์'
    ],
    specs: [
      'รองรับน้ำยา R-410A, R-32, R-404A, R-134a, R-448A',
      'งานเชื่อมท่อทองแดงระบบไนโตรเจนชิลด์ ป้องกันเขม่าภายใน',
      'มีทีมบริการ On-site ซ่อมตู้แช่ห้างค้าปลีกด่วน'
    ],
    featuredImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6CWmdNQOmjIIOOEk9gbS-GMMvXdY-qZVThFME8RiKqnbfc0iH8rSZvweO7Y36RbmSx6Lm4Cta_VIctzXvyJxCy-fQP1_SlFV6ZN2V7VOGpJHN04K3o5xfeXXAimK6uRSdLs6vgeC9f9RmL38_8KbNVNVd8bWzWll8Lsy1j58kTunwuHwYAtrog3FzxcMnzQr35MhWtll_5Ld7iAgKquDij0WF0Lm3wuWy6w-NKN4hTW1O5JUdiXAUpvZa7AjkS2oYWA'
  },
  {
    id: 'cold-room',
    serviceNumber: 'SERVICE 02',
    title: 'งานระบบห้องเย็น (Cold Room)',
    shortDesc: 'ออกแบบและสร้างห้องเย็นอุตสาหกรรม (Chilled Room & Freezer Room) คลีนรูม แผงฉนวน Sandwich Panel PIR/PU ควบคุมอุณหภูมิได้อย่างแม่นยำ ปลอดภัยตามเกณฑ์ GMP/HACCP',
    fullDesc: 'รับสร้างห้องเย็นเก็บสินค้า ห้องแช่แข็งอุณหภูมิต่ำสุดถึง -40°C ห้องพักสินค้า และคลีนรูมสำหรับโรงงานผลิตอาหารและเวชภัณฑ์ ด้วยแผ่นฉนวนกันความร้อน PIR ชนิดไม่ลามไฟ Food Contact พร้อมชุดควบคุมอัจฉริยะและระบบบันทึกอุณหภูมิ Data Logger',
    icon: 'severe_cold',
    bulletPoints: [
      'แผงฉนวนกันไฟ PIR เกรด Food Contact ถูกหลัก GMP/HACCP',
      'ชุด Condensing Unit & คอยล์เย็นคุณภาพสูง (Bitzer, Copeland, Danfoss)',
      'ระบบควบคุมอุณหภูมิดิจิทัลและ Alarm แจ้งเตือนผ่านมือถือ'
    ],
    specs: [
      'ช่วงอุณหภูมิ: Chiller (+2°C ถึง +8°C) / Freezer (-18°C ถึง -25°C) / Blast (-40°C)',
      'แผ่นฉนวนโฟมหนา 75 - 150 มม. ความหนาแน่น 40-42 kg/m³',
      'ประตูป้องกันไอเย็นรั่วซึม บานสไลด์ / บานสวิง สแตนเลส SUS304'
    ],
    featuredImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrNHuUIvL4xGzLOIHomuCP30x_qTRAoDF74tS_PtLW8Cucdkk7IVm14N2uWfjGyn2kTfPYuopDDxJ6xlQV5uVM1GVlWw29FwxJR-9cgLAP0Ncnm6kCvYfNVAXNTqRs4yFomRIUKIs3ZBI43_Gbz4LouoqqsUpHH6iOFUBiSyGCHchHwqytSFHk8shyjJQfwYt2uvRByPZS35k1v_kouQDRMydCBqVHtDRm1GmrveNmdQDtX_USK_QEt3Mgmnx7S_4L8Q'
  },
  {
    id: 'air-duct',
    serviceNumber: 'SERVICE 03',
    title: 'งานท่อลม & ระบายอากาศ (Duct)',
    shortDesc: 'ผลิตและติดตั้งท่อส่งลมแอร์ (Air Ductwork), ท่อระบายอากาศ Exhaust Air, ท่อดักท์สังกะสี ท่อสแตนเลส หัวจ่ายลม พร้อมฉนวนใยแก้วและแจ็คเก็ตกันความร้อน',
    fullDesc: 'โรงงานผลิตและติดตั้งท่อลมมาตรฐาน SMACNA ทั้งท่อลมสี่เหลี่ยม ท่อลมกลมเกลียว (Spiral Duct) ท่อลมสแตนเลสสำหรับคลีนรูม งานติดตั้งแอร์ด้กพร้อมปรับสมดุลลม Air Balancing เพื่อให้กระจายความเย็นได้ทั่วถึงทุกจุดของโรงงาน',
    icon: 'air',
    bulletPoints: [
      'Air Duct สำหรับ Cleanroom และไลน์สายการผลิตที่ควบคุมฝุ่น',
      'งานหุ้มฉนวน Jacket Aluminum / Stainless ทนแดด ทนสารเคมี',
      'ปรับสมดุลลม Air Balancing ตามมาตรฐานวิศวกรรมสากล'
    ],
    specs: [
      'เหล็กอาบสังกะสีความหนา 0.5 - 1.2 มม. ตามมาตรฐาน SMACNA',
      'ฉนวนใยแก้ว (Fiberglass) / ฉนวนยางสังเคราะห์ (EPDM/NBR) ไม่ติดไฟ',
      'หัวจ่ายลม Diffuser, Slot Diffuser, Linear Grille, Volume Damper'
    ],
    featuredImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2cTSieS8Tp5w1Z1VXU4OeUpDJ6Vhxks4L0lVPJ84qQJmAq5h7-WA8rjK0iyqFWIcPfuClyajofKJSaNQbglMDX7XEbd82QjgbOGLnrScsavxCS9jz4G8GYNMSocSB01q-cxotlskKBJBkyHKtrskqJdPaDaLpA_d5RMQlytog1EkVpcgPs7Wl0CfAA0zOTLA_oztomaA3nuLbv5_Gt0EAC5Db1srHlEk8e7g9dfT_J9NL1RTrwZk3-I5pI0loDFgukA'
  },
  {
    id: 'chiller-piping',
    serviceNumber: 'SERVICE 04',
    title: 'ระบบ Chiller & ท่อน้ำเย็น',
    shortDesc: 'งานติดตั้ง ซ่อมบำรุงระบบ Chiller Water, Cooling Tower, งานเปลี่ยน Butterfly Valve, เช็ควาล์ว, ปั๊มน้ำหล่อเย็น และล้างทำความสะอาดแผงคอนเดนเซอร์',
    fullDesc: 'รับซ่อมบำรุงและเดินท่อน้ำเย็น Chilled Water Pipe ระบบแรงดันสูง ถอดเปลี่ยน Butterfly Valve หน้าแปลนขนาดใหญ่ งานติดตั้งหอผึ่งน้ำหล่อเย็น (Cooling Tower) การทำเคมีบำบัดน้ำ และสัญญาบริการบำรุงรักษาเชิงป้องกัน (PM) เพื่อประสิทธิภาพเครื่องจักรสูงสุด',
    icon: 'water_damage',
    bulletPoints: [
      'งานเปลี่ยนวาล์ว Butterfly Valve ท่อน้ำแรงดันสูงโดยไม่รั่วซึม',
      'ซ่อมบำรุง Cooling Tower และระบบ Water Piping ทั้งโรงงาน',
      'สัญญาบริการซ่อมบำรุงรายปี (PM Contract) พร้อมใบรับรอง'
    ],
    specs: [
      'ท่อเหล็ก Carbon Steel Sch.40 / ท่อสแตนเลส SUS304 / ท่อ HDPE',
      'ทดสอบ Hydrostatic Pressure Test ที่ 1.5 เท่าของแรงดันใช้งาน',
      'บริการวิเคราะห์การสั่นสะเทือน (Vibration Analysis) และกระแสไฟปั๊ม'
    ],
    featuredImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpkkqrfBoU7O1WnHjuj1ppeKaH3L5jFnCK9AEuAroCZsZBqwQt9AYrdh2gQCNRtAAT9RMQ5n2dC8lJJ6YeKtJK1rZ7L5bwPf-bLRj_7kGtv8R5SYQfn1g1xq8340S08bD5Y-_H7l9MRZU81Djlm0EW_dFQwqW-hcwzYy-kkXK_7mXXD5M_tio6aocYlSLMGIIpmN6XPUwUDtf28LZYImw2njUdRH2PBS5AvWihnIxK-aX7KU0gi46uMiOuDJpoLF4RHQ'
  }
];

export const PROJECTS_GALLERY: ProjectItem[] = [
  {
    id: 'kce-butterfly-valve',
    title: 'KCE ลาดกระบัง - งานเปลี่ยน BUTTERFLY VALVE & ท่อน้ำเย็น',
    client: 'KCE ELECTRONICS',
    location: 'นิคมอุตสาหกรรมลาดกระบัง, กทม.',
    category: 'chiller',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpkkqrfBoU7O1WnHjuj1ppeKaH3L5jFnCK9AEuAroCZsZBqwQt9AYrdh2gQCNRtAAT9RMQ5n2dC8lJJ6YeKtJK1rZ7L5bwPf-bLRj_7kGtv8R5SYQfn1g1xq8340S08bD5Y-_H7l9MRZU81Djlm0EW_dFQwqW-hcwzYy-kkXK_7mXXD5M_tio6aocYlSLMGIIpmN6XPUwUDtf28LZYImw2njUdRH2PBS5AvWihnIxK-aX7KU0gi46uMiOuDJpoLF4RHQ',
    status: 'ส่งมอบ 100%',
    description: 'งานถอดเปลี่ยน Butterfly Valve ท่อเหล็กส่งน้ำหล่อเย็นขนาดใหญ่ พร้อมประกอบหน้าแปลนและทดสอบแรงดันระบบ Chilled Water โดยไม่ส่งผลกระทบต่อกระบวนการผลิต',
    highlights: [
      'ขนาดท่อส่งน้ำแรงดันสูง 8-12 นิ้ว พร้อมประเก็นทนความดันสูง',
      'ทดสอบไฮโดรเทสต์ Hydrostatic Test ปราศจากรอยรั่วซึม 100%',
      'ส่งมอบงานตรงเวลาภายในกรอบ Shutdown Window ของโรงงาน'
    ],
    specs: {
      systemType: 'Chilled Water & Cooling Tower Piping',
      temperatureRange: '7°C - 12°C Chilled Loop',
      capacity: 'Chiller Plant 1,200 TR',
      standards: 'ASME B31.9 & ISO 9001:2015'
    }
  },
  {
    id: 'cp-latlumkaeo',
    title: 'CP ลาดหลุมแก้ว - งานย้ายตู้ทำความเย็นอุตสาหกรรม',
    client: 'CP GROUP',
    location: 'ลาดหลุมแก้ว, ปทุมธานี',
    category: 'coldroom',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrNHuUIvL4xGzLOIHomuCP30x_qTRAoDF74tS_PtLW8Cucdkk7IVm14N2uWfjGyn2kTfPYuopDDxJ6xlQV5uVM1GVlWw29FwxJR-9cgLAP0Ncnm6kCvYfNVAXNTqRs4yFomRIUKIs3ZBI43_Gbz4LouoqqsUpHH6iOFUBiSyGCHchHwqytSFHk8shyjJQfwYt2uvRByPZS35k1v_kouQDRMydCBqVHtDRm1GmrveNmdQDtX_USK_QEt3Mgmnx7S_4L8Q',
    status: 'ส่งมอบ 100%',
    description: 'ขนย้าย ประกอบติดตั้งระบบตู้ทำความเย็นสแตนเลสในคลีนรูมผลิตอาหาร ภายใต้มาตรฐานสุขอนามัยความปลอดภัยสูงสุดสำหรับโรงงานแปรรูปอาหารเครือซีพี',
    highlights: [
      'ใช้วัสดุ Stainless Steel SUS304 เกรดสัมผัสอาหาร (Food Contact)',
      'การเชื่อมต่อท่อสารทำความเย็นแบบเดินลอยเรียบร้อย ทำความสะอาดง่าย',
      'ผ่านการตรวจสอบเกณฑ์มาตรฐานสุขอนามัยอาหาร GMP/HACCP'
    ],
    specs: {
      systemType: 'Food-grade Commercial Cold Storage',
      temperatureRange: '0°C ถึง +4°C (Holding Temp)',
      capacity: '15 HP Semi-Hermetic Unit',
      standards: 'GMP / HACCP / Food Sanitation Standard'
    }
  },
  {
    id: 'the-mall-bangkapi',
    title: 'ห้างเดอะมอลล์บางกะปิ - งานติดตั้งตู้แช่เย็น Sanden',
    client: 'THE MALL / SANDEN',
    location: 'เดอะมอลล์ไลฟ์สโตร์ บางกะปิ',
    category: 'coldroom',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6CWmdNQOmjIIOOEk9gbS-GMMvXdY-qZVThFME8RiKqnbfc0iH8rSZvweO7Y36RbmSx6Lm4Cta_VIctzXvyJxCy-fQP1_SlFV6ZN2V7VOGpJHN04K3o5xfeXXAimK6uRSdLs6vgeC9f9RmL38_8KbNVNVd8bWzWll8Lsy1j58kTunwuHwYAtrog3FzxcMnzQr35MhWtll_5Ld7iAgKquDij0WF0Lm3wuWy6w-NKN4hTW1O5JUdiXAUpvZa7AjkS2oYWA',
    status: 'ส่งมอบ 100%',
    description: 'งานยกย้าย เดินระบบท่อน้ำยา ท่อน้ำทิ้ง และติดตั้งตู้แช่สำหรับห้างสรรพสินค้าด้วยแท่นโครงเหล็กโครงสร้างเฉพาะสำหรับซูเปอร์มาร์เก็ต Gourmet Market',
    highlights: [
      'เดินระบบท่อน้ำยาทองแดงฝังพื้นใต้แท่นโชว์สินค้าอย่างไร้รอยต่อ',
      'ระบบเดรนน้ำทิ้งพร้อมฮีตเตอร์ละลายน้ำแข็ง ป้องกันน้ำหยดพื้นห้าง',
      'ทดสอบอุณหภูมิกระจายสม่ำเสมอทุกชั้นวางสินค้า'
    ],
    specs: {
      systemType: 'Multi-deck Showcase Refrigeration',
      temperatureRange: '-2°C ถึง +5°C',
      capacity: 'Remote Rack System 40 HP',
      standards: 'Commercial Retail Cooling Safety'
    }
  },
  {
    id: 'donki-bangkapi',
    title: 'ร้านดองดองดองกิ - งานติดตั้งตู้แช่เย็นและโซนขายอาหาร',
    client: 'DON DON DONKI',
    location: 'DONKI เดอะมอลล์บางกะปิ',
    category: 'coldroom',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3XxHwTw2oUnkr6sLXbQvvOMBKYS7iatBgrNt3pUtoa9jxjd2jIg9rIsa3KT-o2WwQxCKVV4RcK4GhotytlmarzjTrIojVjQkD3vWIYctfRolyrPKYLb5Y9clyECFdqQIl7kSNqkaUj0cIkoLgh5YLY4r97Ritq_SlgHQa9l8Z4NfEFrNTgLEo43xb4LUA-kae0ynAWd6nYSnAs3-LNZ2Mw_iqUgD3pJ5Uk9GQDnCkRmOy9IQrZ_lqL8aA_puwKzHqZw',
    status: 'ส่งมอบ 100%',
    description: 'ติดตั้งตู้แช่โชว์สินค้าอาหารสด อาหารแช่แข็ง ระบบระบายความร้อน และงานเชื่อมต่อระบบควบคุมความเย็นอัตโนมัติ สไตล์ซูเปอร์มาร์เก็ตญี่ปุ่นชั้นนำ',
    highlights: [
      'ตู้แช่ทั้งแบบ Open Showcase และ Island Freezer กระจกคู่ลดฝ้า',
      'ระบบควบคุม Electronic Expansion Valve (EEV) เที่ยงตรง',
      'ส่งมอบงานพร้อมเปิดสาขาได้อย่างราบรื่นตามกำหนดการ'
    ],
    specs: {
      systemType: 'Supermarket Refrigeration & Freezers',
      temperatureRange: '-20°C (Freezer) / +2°C (Fresh Meat)',
      capacity: 'Central Inverter Condensing Units',
      standards: 'Japanese Retail Cooling Specification'
    }
  },
  {
    id: 'donki-fashion-island',
    title: 'ดองดองดองกิ - งานติดตั้งระบบห้องเย็น Condensing Unit',
    client: 'DONKI FASHION ISLAND',
    location: 'แฟชั่นไอส์แลนด์, รามอินทรา',
    category: 'coldroom',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6CWmdNQOmjIIOOEk9gbS-GMMvXdY-qZVThFME8RiKqnbfc0iH8rSZvweO7Y36RbmSx6Lm4Cta_VIctzXvyJxCy-fQP1_SlFV6ZN2V7VOGpJHN04K3o5xfeXXAimK6uRSdLs6vgeC9f9RmL38_8KbNVNVd8bWzWll8Lsy1j58kTunwuHwYAtrog3FzxcMnzQr35MhWtll_5Ld7iAgKquDij0WF0Lm3wuWy6w-NKN4hTW1O5JUdiXAUpvZa7AjkS2oYWA',
    status: 'ส่งมอบ 100%',
    description: 'งานติดตั้งตู้แช่พร้อมชุดคอมเพรสเซอร์ Condensing Unit ภายนอกอาคารและวางระบบท่อส่งสารทำความเย็นความยาวกว่า 80 เมตร',
    highlights: [
      'ติดตั้งแท่นวางชุด Condensing Unit พร้อมสปริงกันสะเทือน (Vibration Isolator)',
      'หุ้มท่อฉนวน Aeroflex ความหนาพิเศษ ป้องกันหยดน้ำเกาะตลอดแนว',
      'ระบบป้องกันไฟตก ไฟกระชาก และเซ็นเซอร์ตัดการทำงานอัตโนมัติ'
    ],
    specs: {
      systemType: 'Outdoor Condensing Unit System',
      temperatureRange: '-25°C ถึง +4°C',
      capacity: 'Outdoor Multi-Compressor Pack 50 HP',
      standards: 'ASHRAE & Commercial Cold Standards'
    }
  },
  {
    id: 'kce-ductwork',
    title: 'KCE ลาดกระบัง - งานติดตั้งท่อลมและระบบแอร์ด้ก',
    client: 'KCE ELECTRONICS',
    location: 'นิคมอุตสาหกรรมลาดกระบัง',
    category: 'duct',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2cTSieS8Tp5w1Z1VXU4OeUpDJ6Vhxks4L0lVPJ84qQJmAq5h7-WA8rjK0iyqFWIcPfuClyajofKJSaNQbglMDX7XEbd82QjgbOGLnrScsavxCS9jz4G8GYNMSocSB01q-cxotlskKBJBkyHKtrskqJdPaDaLpA_d5RMQlytog1EkVpcgPs7Wl0CfAA0zOTLA_oztomaA3nuLbv5_Gt0EAC5Db1srHlEk8e7g9dfT_J9NL1RTrwZk3-I5pI0loDFgukA',
    status: 'ส่งมอบ 100%',
    description: 'ติดตั้งท่อส่งลม Air Ductwork และระบบระบายอากาศสำหรับห้องไลน์สายผลิตแผงวงจรอิเล็กทรอนิกส์ที่มีความละเอียดสูงและควบคุมอนุภาคฝุ่น',
    highlights: [
      'ท่อลม Galvanized Steel คุณภาพพรีเมียม ไร้สะเก็ดสนิม',
      'ต่อสนิทด้วยหน้าแปลน TDF พร้อมซีลซิลิโคนป้องกันการรั่วของลม',
      'ทดสอบแรงดันลมและทำ Air Leakage Test ตามมาตรฐาน SMACNA'
    ],
    specs: {
      systemType: 'Cleanroom Air Duct & Return Air',
      capacity: '24,000 CFM Airflow',
      standards: 'SMACNA HVAC Duct Construction Standards'
    }
  },
  {
    id: 'jacket-aluminum-fashion',
    title: 'งานหุ้มฉนวนและ Jacket Aluminum ท่อส่งความเย็น',
    client: 'FASHION ISLAND',
    location: 'ห้างสรรพสินค้าแฟชั่นไอส์แลนด์',
    category: 'jacket',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCARzaafYLKhQNbSKIWYtVMySw5eTW9u0Vub7o03LxHs1he-Y086te6M45mL1upLnTEXXm3iPybsx8fsw0bf29l_Y6MM39afSzbyKWGBgFeMfcAxXCD3LOaER1oVH9-jFi1SaMijzkuHDdLZgNr5ERtfx6CiyrQ2U_mmxFVxC82GEZDMU2IKvfU6HH7oBD8cl0H98KyGk5XVblH8aHUCC2O7oD8dLm2iiZHsoEJC6hForWZ46qST0QomCTraEAJw3xnqg',
    status: 'ส่งมอบ 100%',
    description: 'งานหุ้มฉนวนกันความร้อน-ความเย็น พร้อมแผ่นอลูมิเนียมแจ็คเก็ต (Aluminum Jacket) ป้องกันการสูญเสียพลังงานและไอควบแน่นสำหรับท่อภายนอกอาคาร',
    highlights: [
      'ใช้อลูมิเนียมแผ่นเรียบเกรดอุตสาหกรรม ตีลอนเพื่อเพิ่มความแข็งแรง',
      'ซีลรอยต่อกันน้ำฝน 100% เหมาะสำหรับงานดาดฟ้าและโครงสร้างกลางแจ้ง',
      'ช่วยประหยัดพลังงานระบบปรับอากาศและลดความร้อนสะสมเข้าสู่น้ำยา'
    ],
    specs: {
      systemType: 'Thermal Insulation & Aluminum Jacketing',
      temperatureRange: 'Chilled Water & Refrigerant Lines',
      capacity: 'ท่อยาวรวมกว่า 250 เมตร',
      standards: 'ASTM C585 & Industrial Thermal Guidelines'
    }
  },
  {
    id: 'sanden-jacket-stainless',
    title: 'บริษัท ซันเด้น - งานหุ้มฉนวนและ Jacket Stainless',
    client: 'SANDEN INTERCOOL',
    location: 'โรงงานซันเด้น อินเตอร์คูล',
    category: 'jacket',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3XxHwTw2oUnkr6sLXbQvvOMBKYS7iatBgrNt3pUtoa9jxjd2jIg9rIsa3KT-o2WwQxCKVV4RcK4GhotytlmarzjTrIojVjQkD3vWIYctfRolyrPKYLb5Y9clyECFdqQIl7kSNqkaUj0cIkoLgh5YLY4r97Ritq_SlgHQa9l8Z4NfEFrNTgLEo43xb4LUA-kae0ynAWd6nYSnAs3-LNZ2Mw_iqUgD3pJ5Uk9GQDnCkRmOy9IQrZ_lqL8aA_puwKzHqZw',
    status: 'ส่งมอบ 100%',
    description: 'งานหุ้มแจ็คเก็ตสแตนเลส (Stainless Steel Jacket SUS304) สำหรับท่อระบบทำความเย็นในสภาพแวดล้อมที่ต้องการความทนทานต่อสารเคมีและความชื้นสูง',
    highlights: [
      'แผ่นสแตนเลส SUS304 เงางาม ไม่เป็นสนิมตลอดอายุการใช้งาน',
      'งานตัดพับและขึ้นรูปโค้งข้องอ (Elbow) ประณีตตามขนาดท่อทุกจุด',
      'เสริมฉนวนยางดำเกรด Class 0 ชนิดไม่ลามไฟ'
    ],
    specs: {
      systemType: 'Stainless SUS304 Insulation Cladding',
      capacity: 'โรงงานประกอบและทดสอบตู้แช่',
      standards: 'Industrial Chemical Resistance Spec'
    }
  },
  {
    id: 'isuzu-drain-pan',
    title: 'ISUZU ลาดกระบัง - งานติดตั้งถาดเดรนน้ำทิ้ง AHU',
    client: 'ISUZU MOTORS',
    location: 'โรงงานประกอบรถยนต์อีซูซุ ลาดกระบัง',
    category: 'duct',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-qGUSm7ZEeBXF26YBXUY6jp0MMLjQUgNDA6se1bgmLLVVQBd_n4eqklj5zAoJuP6NYfKf0dFWR4K3QmBoCUp0e0GCEApUnBYBMhNLwFvWOQFudxJYW4zRRXBB03VqFyBRutE_FP5pMIBTpfWumP7TIXor4uxZERCcnXwfvxptB5qfKWn0oB3Xv_jalWtmzhDAY_V-S262YXZAr-Fn8_5-9xOaDCjMOhvnJ0wqz1oZvNahdrB7Wjuw4kgUD_0LCnkXpQ',
    status: 'ส่งมอบ 100%',
    description: 'งานประกอบและติดตั้งถาดรองน้ำทิ้งสแตนเลสสำหรับชุด AHU โรงงานประกอบรถยนต์ ป้องกันปัญหาน้ำรั่วซึมกระทบสายการผลิตตัวถังรถยนต์',
    highlights: [
      'ผลิตจาก Stainless Steel 2.0 มม. พับลาดเอียง Slope ระบายน้ำรวดเร็ว',
      'เคลือบน้ำยาฆ่าเชื้อและป้องกันเมือกตะไคร่น้ำเกาะ',
      'ติดตั้งพร้อมระบบเซ็นเซอร์ Float Switch ตัดการทำงานเมื่อท่อตัน'
    ],
    specs: {
      systemType: 'AHU Condensate Drain Pan & Trapping',
      capacity: 'AHU Units 15 ชุด ประจำไลน์พ่นสีและประกอบ',
      standards: 'Automotive Factory Safety Zero Defect'
    }
  },
  {
    id: 'isuzu-ahu-insulation',
    title: 'ISUZU ลาดกระบัง - งานเปลี่ยนฉนวนใยแก้วชุด AHU',
    client: 'ISUZU MOTORS',
    location: 'โรงงานประกอบรถยนต์อีซูซุ ลาดกระบัง',
    category: 'duct',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDL-Jb355pSg-k7cROZ-MC6GypLc3riF3EBUFwukxiI_mu1JPt_H4baQ4oa4jTvk8M-XvYAVN7A2Ky9Wr12mcFZVtVCpxglpGsy8VT3VD8nW28qZ_zzkRFAZnX6jXX2B8n2DIjwpnuc_h7wg77ki6SUq3FQ_EyOyGXzaADuFXvPCFVFenH50WWiPq_5BNQ3hfMOb9WSjbPQAL8ifooqHddpjSl2j62N6ntYTlb-j9rS8qYIsH9H9g93720v-HZ2N9Emxg',
    status: 'ส่งมอบ 100%',
    description: 'เปลี่ยนฉนวนใยแก้วและเคลือบสารป้องกันความชื้นภายในเครื่องส่งลมเย็น AHU เพิ่มประสิทธิภาพการทำความเย็นและประหยัดพลังงานไฟฟ้าในโรงงาน',
    highlights: [
      'รื้อถอนฉนวนเก่าที่เสื่อมสภาพอย่างถูกสุขลักษณะ ป้องกันละอองฟุ้งกระจาย',
      'ติดตั้งฉนวนใยแก้วความหนาแน่นสูง ปิดทับด้วยแผ่นอลูมิเนียมฟอยล์กันไฟ',
      'เพิ่มประสิทธิภาพความเย็น อุณหภูมิลมจ่ายเย็นลง 2.5°C ทันทีหลังเปลี่ยน'
    ],
    specs: {
      systemType: 'Air Handling Unit Thermal Restoration',
      capacity: 'Air Flow 35,000 CFM',
      standards: 'Factory Energy Efficiency ISO 50001'
    }
  },
  {
    id: 'toshiba-carrier-diffuser',
    title: 'Toshiba Carrier บางกะดี - ภาพงานย้ายหัวลมจ่าย Air Diffuser',
    client: 'TOSHIBA CARRIER',
    location: 'นิคมอุตสาหกรรมบางกะดี, ปทุมธานี',
    category: 'duct',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgJQDcQT9AZceJvmmdQbdvrTgyr3t98TDR_DHbOiu1WcV3DzVaSfkWYf0p2i2dcavU9XKy5fX5rxRdOwo7BH3a0WnCqq0FIqbyoEqr1dSrWRnviNfTRQEUotXvkYHhiGGgD_AN0kehMH7e6getPMySXrI6VjdYZXpzf60V4r7Zc7LPBi_ZcndXfQVZ8t0BuooyoqGUjsFSaQKD_4rDA88p20w0TN01V2zBnVWFBRoTUjlxiewwgoQCkuzJotrlPA-Z1Q',
    status: 'ส่งมอบ 100%',
    description: 'ปรับปรุงแนวท่อลม ปรับตำแหน่งหัวจ่ายลมเย็นตามการปรับผังเครื่องจักรไลน์ผลิตใหม่ ให้การไหลเวียนอากาศถูกต้องตามหลักพลศาสตร์และสุขอนามัยพนักงาน',
    highlights: [
      'ปรับจุดจ่ายลมตรงจุดทำงานของช่างโดยไม่กระทบความแม่นยำเครื่องกลึง',
      'ติดตั้งท่อลมยืดหยุ่น Flexible Duct ชนิดหุ้มฉนวนเกรดหน่วงไฟ',
      'วัดค่าความเร็วลม (Air Velocity) และเสียงรบกวน (dB) ให้ผ่านเกณฑ์'
    ],
    specs: {
      systemType: 'Air Distribution Relocation & Balancing',
      capacity: 'ไลน์ประกอบชิ้นส่วนอิเล็กทรอนิกส์',
      standards: 'ASHRAE Standard 55 Thermal Comfort'
    }
  },
  {
    id: 'food-factory-evap',
    title: 'งานเปลี่ยนคอยล์ร้อน & คอยล์เย็น ห้องเก็บวัตถุดิบ',
    client: 'FOOD FACTORY',
    location: 'โรงงานแปรรูปอาหาร, กทม.',
    category: 'chiller',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrNHuUIvL4xGzLOIHomuCP30x_qTRAoDF74tS_PtLW8Cucdkk7IVm14N2uWfjGyn2kTfPYuopDDxJ6xlQV5uVM1GVlWw29FwxJR-9cgLAP0Ncnm6kCvYfNVAXNTqRs4yFomRIUKIs3ZBI43_Gbz4LouoqqsUpHH6iOFUBiSyGCHchHwqytSFHk8shyjJQfwYt2uvRByPZS35k1v_kouQDRMydCBqVHtDRm1GmrveNmdQDtX_USK_QEt3Mgmnx7S_4L8Q',
    status: 'ส่งมอบ 100%',
    description: 'ปรับปรุงระบบคอยล์เย็นสแตนเลสกันสนิมและ Condenser Unit สำหรับห้องควบคุมอุณหภูมิวัตถุดิบเพื่อรักษาความสดและยืดอายุสินค้าตามเกณฑ์ อย.',
    highlights: [
      'คอยล์เย็นเคลือบสารพิเศษทนไอเกลือและกรดอินทรีย์จากอาหาร (Anti-corrosion)',
      'พัดลมระบายความร้อนเสียงเบา ประหยัดพลังงาน EC Motor',
      'รักษาระดับความชื้นสัมพัทธ์ (RH) ได้คงที่ ป้องกันวัตถุดิบสูญเสียน้ำหนัก'
    ],
    specs: {
      systemType: 'Refrigerated Raw Material Holding Room',
      temperatureRange: '+1°C ถึง +3°C (Tolerance ±0.5°C)',
      capacity: '2 x 10 HP Dual Backup System',
      standards: 'อย. / GMP / HACCP Compliance'
    }
  }
];

export const MILESTONES = [
  {
    year: '2009',
    title: 'ก่อตั้งทีมงานช่างเทคนิค',
    description: 'เริ่มต้นงานซ่อมบำรุงและติดตั้งระบบตู้แช่พาณิชย์และแอร์สำนักงาน โดยคุณธวัชชัย บาระพรม',
    badge: 'FOUNDATION'
  },
  {
    year: '2014',
    title: 'ขยายงานห้องเย็นอุตสาหกรรม',
    description: 'พัฒนางานออกแบบติดตั้ง Cold Room, Freezer และงานแผงฉนวน PIR มาตรฐานสูง สำหรับโรงงานแปรรูป',
    badge: 'EXPANSION'
  },
  {
    year: '2019',
    title: 'สู่พันธมิตรเครือข่าย Enterprise',
    description: 'ได้รับความไว้วางใจจาก CP, ISUZU, KCE, DONKI ในโครงการโรงงานและห้างค้าปลีกชั้นนำระดับประเทศ',
    badge: 'ENTERPRISE'
  },
  {
    year: 'ปัจจุบัน',
    title: 'Total HVAC & Cold Solutions',
    description: 'บริการครบวงจรครอบคลุมทั่วประเทศ พร้อมทีมวิศวกรซ่อมบำรุงฉุกเฉิน 24 ชั่วโมง ตลอด 365 วัน',
    badge: 'LEADERSHIP'
  }
];
