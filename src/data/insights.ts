export interface InsightArticle {
  id: number;
  slug: string;
  category: string;
  date: string;
  isoDate: string;
  title: string;
  excerpt: string;
  body: string;
  image: string;
  author: string;
  tags: string[];
  related: string[];
  featured: boolean;
}

const insights: InsightArticle[] = [
  {
    id: 1,
    slug: 'what-is-total-facilities-management',
    category: 'Facilities Management',
    date: '1 September 2026',
    isoDate: '2026-09-01',
    title: 'What Is Total Facilities Management?',
    excerpt: 'Total Facilities Management (TFM) integrates every building discipline — from MEP maintenance and cleaning to security and energy management — under a single accountable contract. Here\'s what it means in practice, why Malaysia\'s most complex built environments rely on it, and how to know if your building is ready.',
    image: '/news/neeap-2-launch.jpg',
    author: 'Cofreth Editorial',
    tags: ['Facilities Management', 'Total FM', 'ISO 41001', 'Malaysia', 'Built Environment'],
    related: ['neeap-2-0-launch'],
    featured: true,
    body: `If you manage a large building or campus in Malaysia, you have probably heard the term "Total Facilities Management." Property managers, developers, and government agencies use it freely — but what does it actually mean, and why does it matter for your bottom line?

Total Facilities Management (TFM) is a single-contract, fully integrated approach to running a building. Instead of appointing separate vendors for air-conditioning, cleaning, security, lifts, fire systems, and landscaping — and then spending management time coordinating between them — TFM places every service under one accountable FM partner.

That partner plans, delivers, and measures all facility services to a single performance standard. If a chiller breaks down at 2 a.m., one phone call resolves it. If a cleaning issue creates a safety hazard, the same team is responsible for fixing both. There is no finger-pointing between contractors.

**Why Buildings in Malaysia Are Moving to TFM**

Malaysia's built environment has grown dramatically in complexity. Airports handle tens of millions of passengers. Government convention centres host international events. Hospitals maintain critical life-safety systems around the clock. Each of these environments needs more than a landlord's maintenance team — they need systematic, standards-driven facilities management at scale.

The Malaysian government recognised this with the National Energy Efficiency Action Plan (NEEAP), which made certified FM practice a national priority. ISO 41001:2018, the international standard for FM management systems, gives building owners a framework to demand and verify this level of professionalism from their FM provider.

Cofreth (M) Sdn Bhd was the first FM company in Malaysia to earn ISO 41001 certification. That milestone reflects what TFM is supposed to be: a managed system, not just a collection of services.

**The Six Pillars of a TFM Contract**

A well-structured TFM scope typically covers six domains:

1. Mechanical, Electrical & Plumbing (MEP) Maintenance — planned preventive maintenance and reactive response for all building systems: chillers, cooling towers, air-handling units, electrical switchgear, plumbing, fire suppression, and lifts.

2. Soft Services — cleaning, waste management, landscaping, pest control, and front-of-house management. These are visible to occupants every day and directly shape the building's perceived quality.

3. Security & Access Control — physical security staffing, CCTV monitoring, access management, and incident response protocols.

4. Energy Management — monitoring, reporting, and optimising utility consumption. In a TFM contract, the FM provider is accountable for energy performance, not just equipment uptime.

5. Asset Management — lifecycle tracking of all building assets, planned replacement scheduling, and capital expenditure forecasting. ARCHIBUS and similar IWMS platforms are often deployed here.

6. Helpdesk & Occupant Services — a single point of contact for all building users. Response time SLAs, job tracking, and monthly reporting to the building owner.

The scope varies by building type. An airport concession needs airside-compliant maintenance teams. A hospital needs infection-control-trained cleaning crews and BMS-integrated M&E management. A green-certified office tower needs documented sustainability reporting. A competent TFM provider customises the scope to the asset class.

**TFM vs Traditional Multi-Vendor FM**

With a traditional multi-vendor arrangement, the building owner acts as the de facto FM manager. You approve each supplier's invoice, chase each contractor when standards slip, and resolve disputes when jurisdictions overlap — is the water leak a plumbing issue or an M&E issue?

TFM transfers that coordination burden to your FM partner. You hold one contract, one performance scorecard, and one relationship. The FM provider is accountable for the whole outcome, not just their slice of it.

This matters financially, too. Multi-vendor contracts make it harder to optimise total cost: each vendor protects their own margin, and no one has an incentive to reduce overall resource consumption. A TFM provider — especially one also delivering energy performance contracting — has a structural interest in running your building efficiently, because inefficiency hits their own profitability.

**When Is TFM the Right Choice?**

TFM works best for complex, high-footfall, or mission-critical buildings: airports, convention centres, hospitals, large government offices, universities, and premium commercial towers. For a 500-square-metre boutique office, the overhead of a full TFM structure may outweigh the benefit.

The key questions to ask:

- Do we spend significant management time coordinating between FM vendors?
- Do service failures in one area cascade into problems in another?
- Is our energy and utility bill difficult to explain or reduce?
- Are we held to public-sector or regulatory accountability for building performance?
- Do occupants or tenants regularly complain about inconsistent service quality?

If the answer to three or more of these is yes, TFM is worth a serious evaluation.

**How Cofreth Delivers TFM**

Cofreth has managed Malaysia's most demanding built environments for over 38 years. Our portfolio includes KLIA2, the Putrajaya International Convention Centre (PICC), Menara AIA, Menara PJD, and dozens of government and commercial properties across the country.

Our TFM model integrates four capabilities that most FM companies keep separate: Total FM operations, Energy Performance Contracting (our CoPC® model), Green Building consultancy, and Smart Building technology through ARCHIBUS and IoT deployment.

That integration is deliberate. A building that is well maintained, energy-optimised, sustainability-certified, and data-connected performs better on every metric that matters to its owners and occupants — and costs less to run over its lifecycle.

If you are evaluating TFM for your building or portfolio, we welcome the conversation. Cofreth's team can scope a programme to your asset class, your occupancy profile, and your performance targets.`,
  },
];

export default insights;
