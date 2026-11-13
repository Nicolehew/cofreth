/**
 * Injects a JSON-LD structured data block into the document <head>.
 * Pass any valid schema.org object (or array of objects) as `data`.
 * Rendered server-side — no client JS required.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data is safe static content
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ── Shared schema fragments ── */

export const COFRETH_ORG = {
  '@type': ['Organization', 'LocalBusiness'],
  '@id':   'https://www.cofreth.com.my/#organization',
  name:         'Cofreth (M) Sdn Bhd',
  alternateName:'Cofreth',
  url:          'https://www.cofreth.com.my',
  logo: {
    '@type':    'ImageObject',
    url:        'https://www.cofreth.com.my/logo.png',
    width:      360,
    height:     180,
  },
  image:        'https://www.cofreth.com.my/projects/klia2.jpg',
  description:  "Malaysia's leading facilities management and energy services company since 1986. ISO 9001, 14001, 45001, 50001 and 41001 certified. 5× Frost & Sullivan Award winner.",
  foundingDate: '1986',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 500 },
  address: {
    '@type':          'PostalAddress',
    streetAddress:    'No. 39, Jalan USJ Sentral 3, USJ Sentral',
    addressLocality:  'Subang Jaya',
    addressRegion:    'Selangor',
    postalCode:       '47600',
    addressCountry:   'MY',
  },
  telephone:    '+60356378800',
  email:        'enquiry@cofreth.com.my',
  areaServed:   { '@type': 'Country', name: 'Malaysia' },
  knowsAbout: [
    'Total Facilities Management',
    'Energy Performance Contracting',
    'Green Building Index Certification',
    'Smart Building Technology',
    'ISO 41001 Facilities Management',
    'Energy Service Company (ESCO)',
    'Building Management Systems',
    'ARCHIBUS IWMS',
    'MEP Maintenance',
    'Sustainable Building Operations',
  ],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', name: 'ISO 9001:2015 Quality Management System', credentialCategory: 'certification' },
    { '@type': 'EducationalOccupationalCredential', name: 'ISO 14001:2015 Environmental Management System', credentialCategory: 'certification' },
    { '@type': 'EducationalOccupationalCredential', name: 'ISO 45001:2018 Occupational Health & Safety', credentialCategory: 'certification' },
    { '@type': 'EducationalOccupationalCredential', name: 'ISO 50001:2018 Energy Management System', credentialCategory: 'certification' },
    { '@type': 'EducationalOccupationalCredential', name: 'ISO 41001:2018 Facilities Management — first in Malaysia', credentialCategory: 'certification' },
  ],
  award: [
    'Frost & Sullivan Malaysia FM Service Provider of the Year (5×)',
    'NEA Champion Award 2021 — Energy Performance Contracting',
    'ASEAN Energy Award — Energy Efficiency in Buildings',
    'National Energy Award — Best Energy Service Company',
  ],
  sameAs: [
    'https://www.linkedin.com/company/cofreth',
  ],
};

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type':    'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type':    'ListItem',
      position:   i + 1,
      name:       item.name,
      item:       item.url,
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type':    'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type':          'Question',
      name:             q,
      acceptedAnswer:   { '@type': 'Answer', text: a },
    })),
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type':    'Service',
    name,
    description,
    url,
    provider:   { '@id': 'https://www.cofreth.com.my/#organization' },
    areaServed: { '@type': 'Country', name: 'Malaysia' },
    serviceType: name,
  };
}
