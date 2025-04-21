export interface Template {
  fileName: string;
  name: string;
  description: string;
  fields: string[];
  previewUrl: string;
  layout?: string;
}

export interface TemplateData {
  fullName: string;
  email: string;
  phone: string;
  logoUrl: string;
}