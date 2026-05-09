/** Contrato alinhado ao gerador Monolith SEO / site.json */

export interface Company {
  name: string;
  category: string;
  city: string;
  state: string;
  phone: string;
  whatsapp: string;
  description: string;
  services: string[];
  primary_color: string;
}

/** Opcional: evolução de tema sem quebrar payloads antigos */
export interface SiteTheme {
  id: string;
}

export interface SiteData {
  company: Company;
  domain: string;
  theme?: SiteTheme;
}
