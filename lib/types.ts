export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  category: 'snow' | 'garden' | 'junk';
}

export interface PropertyCarePlan {
  id: string;
  title: string;
  duration: '4-month' | '8-month' | '12-month';
  services: string[];
  featured: boolean;
}

export interface ContactInfo {
  email: string;
  phones: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}
