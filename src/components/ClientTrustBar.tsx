import React from 'react';
import { CLIENT_LOGOS } from '../data/companyData';

interface ClientTrustBarProps {
  onSelectClient?: (clientName: string) => void;
}

export const ClientTrustBar: React.FC<ClientTrustBarProps> = ({ onSelectClient }) => {
  return (
    <section className="w-full bg-[#eaedff] py-8 border-y border-outline-variant/30 shadow-inner">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="font-label-eyebrow text-secondary uppercase tracking-widest text-xs mb-6 font-semibold">
          ได้รับความไว้วางใจจากเครือโรงงานอุตสาหกรรมและห้างค้าปลีกชั้นนำทั่วประเทศ
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 lg:gap-8">
          {CLIENT_LOGOS.map((client) => (
            <div
              key={client.name}
              onClick={() => onSelectClient?.(client.name)}
              className="bg-white px-4 sm:px-5 py-2.5 rounded shadow-sm font-headline text-xs sm:text-sm tracking-wider font-bold text-primary border border-outline-variant/20 hover:border-secondary hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer group"
              title={`${client.name} - ${client.desc}`}
            >
              <span className="group-hover:text-secondary transition-colors">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
