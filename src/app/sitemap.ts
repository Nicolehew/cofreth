import { MetadataRoute } from 'next';

const BASE = 'https://www.cofreth.com.my';
const NOW  = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    /* ── Core ── */
    { url: BASE,                 lastModified: NOW, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/contact`,    lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },

    /* ── Services (pillar + detail) ── */
    { url: `${BASE}/services`,                           lastModified: NOW, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE}/services/facilities-management`,     lastModified: NOW, changeFrequency: 'monthly', priority: 0.90 },
    { url: `${BASE}/services/energy-services`,           lastModified: NOW, changeFrequency: 'monthly', priority: 0.90 },
    { url: `${BASE}/services/green-expertise`,           lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/services/smart-technology`,          lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },

    /* ── About (pillar + supporting) ── */
    { url: `${BASE}/about`,                lastModified: NOW, changeFrequency: 'monthly', priority: 0.90 },
    { url: `${BASE}/about/firsts`,         lastModified: NOW, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/about/philosophy`,     lastModified: NOW, changeFrequency: 'monthly', priority: 0.70 },
    { url: `${BASE}/about/ims-policy`,     lastModified: NOW, changeFrequency: 'monthly', priority: 0.70 },
    { url: `${BASE}/about/processes`,      lastModified: NOW, changeFrequency: 'monthly', priority: 0.70 },
    { url: `${BASE}/about/values`,         lastModified: NOW, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${BASE}/about/governance`,     lastModified: NOW, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${BASE}/about/csr`,            lastModified: NOW, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${BASE}/about/themes`,         lastModified: NOW, changeFrequency: 'yearly',  priority: 0.55 },

    /* ── Content ── */
    { url: `${BASE}/projects`,   lastModified: NOW, changeFrequency: 'monthly', priority: 0.80 },
    { url: `${BASE}/news`,       lastModified: NOW, changeFrequency: 'weekly',  priority: 0.80 },
    { url: `${BASE}/awards`,     lastModified: NOW, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/clientele`,  lastModified: NOW, changeFrequency: 'monthly', priority: 0.75 },

    /* ── Company ── */
    { url: `${BASE}/group`,      lastModified: NOW, changeFrequency: 'monthly', priority: 0.70 },
    { url: `${BASE}/careers`,    lastModified: NOW, changeFrequency: 'weekly',  priority: 0.70 },
  ];
}
