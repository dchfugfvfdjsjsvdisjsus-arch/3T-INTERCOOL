export type ProjectCategory = 'all' | 'coldroom' | 'duct' | 'chiller' | 'jacket';

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  location: string;
  category: 'coldroom' | 'duct' | 'chiller' | 'jacket';
  imageUrl: string;
  status: string;
  description: string;
  highlights: string[];
  specs: {
    systemType: string;
    temperatureRange?: string;
    capacity?: string;
    standards: string;
  };
}

export interface ServiceItem {
  id: string;
  serviceNumber: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  bulletPoints: string[];
  specs: string[];
  featuredImage?: string;
}

export interface RfqFormData {
  companyName: string;
  contactName: string;
  phone: string;
  email: string;
  serviceType: string;
  projectDetails: string;
  estimatedArea?: string;
  urgency: 'normal' | 'urgent' | 'emergency';
}
