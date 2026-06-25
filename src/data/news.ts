export interface NewsArticle {
  id:       number;
  slug:     string;
  category: string;
  date:     string;          // display date  "01 August 2022"
  isoDate:  string;          // ISO 8601     "2022-08-01"
  location: string;
  title:    string;
  excerpt:  string;          // 1-2 sentences for cards & meta description
  body:     string;          // full article body (plain text paragraphs)
  image:    string;
  featured: boolean;
  author:   string;
  tags:     string[];
  related:  string[];        // slugs of related articles
}

const news: NewsArticle[] = [
  {
    id:       1,
    slug:     'nea-2021-energy-performance-contracting-champion',
    category: 'Awards',
    date:     '01 August 2022',
    isoDate:  '2022-08-01',
    location: 'Malaysia',
    title:    'NEA 2021 Energy Performance Contracting Champion',
    excerpt:  "Cofreth was bestowed the honour of being awarded Champion for the NEA 2021 Energy Performance Contracting (EPC) special award category — the nation's highest recognition of energy efficiency achievement.",
    body:     "Cofreth was bestowed the honour of being awarded Champion for the NEA 2021 Energy Performance Contracting (EPC) special award category. This prestigious recognition was awarded jointly with Besi Apac as facility owner, recognising Cofreth's guaranteed energy savings delivery through our CoPC (Cofreth Performance Contracting) model.\n\nThe National Energy Awards (NEA) is Malaysia's premier platform recognising outstanding contributions to energy efficiency and renewable energy. The EPC Champion category specifically honours organisations that have successfully implemented and delivered guaranteed energy savings through structured performance contracting.\n\nThis award affirms our leadership as a registered ESCO delivering science-backed, result-guaranteed energy solutions. Cofreth's CoPC model sets a benchmark in Malaysia for accountable, measurable energy performance contracting — where clients only pay for savings actually delivered.\n\nThe achievement builds on Cofreth's track record as the first ESCO to win 1st Prize at the inaugural National Energy Awards in 2018, cementing our position as Malaysia's foremost energy performance contractor.",
    image:    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&fit=crop',
    featured: true,
    author:   'Cofreth Communications',
    tags:     ['NEA', 'Energy Performance Contracting', 'ESCO', 'Awards'],
    related:  ['cofreth-bags-asean-energy-award', 'national-energy-green-technology-award-2018'],
  },
  {
    id:       2,
    slug:     'sme-icon-recognition-ir-ong-ching-loon',
    category: 'Awards',
    date:     '29 November 2018',
    isoDate:  '2018-11-29',
    location: 'Malaysia',
    title:    'SME ICON Recognition — Managing Director Ir. Ong Ching Loon',
    excerpt:  "Cofreth's Managing Director Ir. Ong Ching Loon was nominated for the prestigious SME ICON award by the Malaysian Service Providers Confederation, recognising his individual contribution to the industry.",
    body:     "The SME ICON recognition celebrates outstanding Malaysian entrepreneurs who have demonstrated exemplary leadership and innovation in their industries. Ir. Ong Ching Loon's nomination by the Malaysian Service Providers Confederation is a testament to his decades of leadership in shaping Malaysia's facilities management and energy services landscape.\n\nUnder his leadership, Cofreth has grown from a domestic FM provider into a recognised regional player, achieving multiple Frost & Sullivan Malaysia Excellence Awards and pioneering energy performance contracting in Malaysia.\n\nIr. Ong's vision has driven Cofreth's transformation into a technology-enabled FM and ESCO company — integrating ARCHIBUS, BIM, IoT and cloud analytics into daily FM operations at a time when such integration was rare in the industry.\n\nThe SME ICON award recognises not just business achievement, but the broader contribution an entrepreneur makes to their sector and the Malaysian economy.",
    image:    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80&fit=crop',
    featured: false,
    author:   'Cofreth Communications',
    tags:     ['SME ICON', 'Leadership', 'Awards'],
    related:  ['nea-2021-energy-performance-contracting-champion', 'national-energy-green-technology-award-2018'],
  },
  {
    id:       3,
    slug:     'cofreth-bags-asean-energy-award',
    category: 'Awards',
    date:     '25 October 2018',
    isoDate:  '2018-10-25',
    location: 'Singapore',
    title:    'Cofreth Bags ASEAN Energy Award 2018',
    excerpt:  "Cofreth achieved recognition at the ASEAN Energy Awards — the region's highest accolade for excellence in energy efficiency, renewable energy and energy management — presented in Singapore.",
    body:     "The ASEAN Energy Awards, launched in 2000 by the ASEAN Centre for Energy, is the region's highest recognition of efforts in energy efficiency, renewable energy and energy management. Cofreth's recognition at this prestigious platform affirms our standing as a regional leader in sustainable energy solutions, having competed against the best organisations across Southeast Asia.\n\nThe award was presented at a ceremony in Singapore, bringing together governments, private sector organisations and energy champions from all ten ASEAN member states. Cofreth's entry highlighted our Capped & Guaranteed Energy Efficiency Performance (CEEP) contracting model as a replicable, outcome-focused approach to energy management.\n\nThis recognition places Cofreth in an elite group of ASEAN organisations recognised for measurable, independently verified energy savings — further validating the CoPC model as best practice in the region.\n\nCofreth's participation in the ASEAN Energy Awards reflects our commitment to contributing to regional energy goals and supporting Malaysia's National Energy Efficiency Master Plan, which Cofreth was the first company appointed to formulate in 2009.",
    image:    'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80&fit=crop',
    featured: false,
    author:   'Cofreth Communications',
    tags:     ['ASEAN Energy Award', 'Energy Efficiency', 'Awards', 'International'],
    related:  ['nea-2021-energy-performance-contracting-champion', 'national-energy-green-technology-award-2018'],
  },
  {
    id:       4,
    slug:     'national-energy-green-technology-award-2018',
    category: 'Awards',
    date:     '19 October 2018',
    isoDate:  '2018-10-19',
    location: 'Malaysia',
    title:    'Cofreth Wins National Energy & Green Technology Award',
    excerpt:  "Cofreth received recognition at the inaugural National Energy & Green Technology Award, organised by MESTECC, celebrating Malaysia's leaders in sustainable energy contributions.",
    body:     "Malaysia's Ministry of Energy, Science, Technology, Environment and Climate Change (MESTECC) organised the inaugural National Energy & Green Technology Award to recognise organisations making outstanding contributions to sustainable energy in Malaysia.\n\nCofreth's win underscores our commitment to delivering real, measurable environmental and energy outcomes for clients across all sectors. The award specifically recognised Cofreth's work in Energy Performance Contracting, where our CEEP (Capped & Guaranteed Energy Efficiency Performance) model has set a new standard for accountability in energy services.\n\nThe inaugural nature of this award makes the recognition particularly significant — being selected among the first recipients of a national award reflects the calibre of Cofreth's contribution to Malaysia's energy efficiency landscape.\n\nThis award, combined with our 1st Prize at the National Energy Awards (NEA) in the same year and 1st Runner Up at the ASEAN Energy Awards, made 2018 Cofreth's most decorated year in its 32-year history at that time.",
    image:    'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80&fit=crop',
    featured: false,
    author:   'Cofreth Communications',
    tags:     ['Green Technology', 'National Award', 'MESTECC', 'Awards'],
    related:  ['cofreth-bags-asean-energy-award', 'nea-2021-energy-performance-contracting-champion'],
  },
  {
    id:       5,
    slug:     'medini-9-fm-services-commencement-iskandar-puteri',
    category: 'Projects',
    date:     '26 June 2018',
    isoDate:  '2018-06-26',
    location: 'Iskandar Puteri, Johor',
    title:    'Medini 9 — FM Services Commencement, Iskandar Puteri',
    excerpt:  "Cofreth commenced full Facilities Management services at Medini 9, a landmark development in Iskandar Puteri, Johor — expanding our presence in Malaysia's fastest-growing southern development corridor.",
    body:     "Medini 9 in Iskandar Puteri, Johor, represents one of Malaysia's most ambitious mixed-use developments, situated within the Iskandar Malaysia economic zone — one of Southeast Asia's largest development initiatives.\n\nCofreth's appointment as FM service provider for this flagship project underscores our capability to manage complex, large-scale developments in high-growth corridors outside the Klang Valley. Our Total FM approach covers all hard and soft services across the development, including mechanical and electrical systems, HVAC, plumbing, fire safety, cleaning and security coordination.\n\nThe Medini 9 contract reflects the growing recognition among leading developers that professional, ISO-certified FM from day one of operations is essential for protecting asset value, ensuring occupant satisfaction and controlling long-term operational costs.\n\nCofreth's Iskandar Puteri presence enables us to serve clients in Johor with the same standards and technology platforms — including our ARCHIBUS TIFM system — that we deploy across our Klang Valley and national portfolio.",
    image:    'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80&fit=crop',
    featured: false,
    author:   'Cofreth Communications',
    tags:     ['Facilities Management', 'Johor', 'Projects', 'Iskandar Puteri'],
    related:  ['smart-facilities-management-forum-2017'],
  },
  {
    id:       6,
    slug:     'smart-facilities-management-forum-2017',
    category: 'Events',
    date:     '15 August 2017',
    isoDate:  '2017-08-15',
    location: 'Malaysia',
    title:    'Smart Facilities Management — The Future of FM Forum',
    excerpt:  'Cofreth hosted a knowledge-sharing forum on Smart Facilities Management, showcasing our ARCHIBUS-powered TIFM platform, BIM capabilities and cloud-based energy monitoring solutions to industry partners.',
    body:     "As facilities management evolves through digital transformation, Cofreth led the conversation on Smart FM in Malaysia. This industry forum brought together FM professionals, property developers and technology partners to explore how ARCHIBUS, BIM, IoT sensors and cloud analytics are reshaping how buildings are managed — smarter, faster, and with greater accountability.\n\nThe forum showcased Cofreth's ARCHIBUS Total Infrastructure Facilities Management System (TIFM) — a comprehensive platform that integrates asset management, preventive maintenance scheduling, space management, and real-time energy monitoring into a single unified interface.\n\nBIM (Building Information Modelling) demonstrations highlighted how three-dimensional building data models can be used not just for construction, but as living operational tools throughout a building's lifecycle — enabling faster fault diagnosis, better capital planning, and more accurate cost forecasting.\n\nIoT integration was a key theme, with live demonstrations of sensor networks tracking environmental conditions, equipment performance and energy consumption across multiple building systems simultaneously.\n\nThe forum reinforced Cofreth's position at the forefront of FM technology adoption in Malaysia, drawing participants from property development, healthcare, education and government sectors.",
    image:    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&fit=crop',
    featured: false,
    author:   'Cofreth Communications',
    tags:     ['Smart FM', 'ARCHIBUS', 'BIM', 'IoT', 'Events'],
    related:  ['medini-9-fm-services-commencement-iskandar-puteri'],
  },
  {
    id:       7,
    slug:     'cofreth-annual-company-dinner-2017',
    category: 'Events',
    date:     '21 April 2017',
    isoDate:  '2017-04-21',
    location: 'Malaysia',
    title:    'Cofreth Annual Company Dinner 2017',
    excerpt:  "Cofreth celebrated another year of excellence with our Annual Company Dinner, recognising outstanding staff contributions and reinforcing our culture of teamwork, innovation and dedication.",
    body:     "Our Annual Company Dinner brings the entire Cofreth family together to celebrate achievements, recognise individual and team contributions, and reinforce our shared values. The 2017 dinner was a special occasion marking continued growth and the deepening partnerships that define our approach to Total Facilities Management.\n\nThe evening featured recognition awards for exceptional performance, long-service awards for loyal staff who have dedicated years to Cofreth's mission, and team awards celebrating collaborative achievements across our FM and ESCO divisions.\n\nSuch occasions are integral to Cofreth's culture — where people are our greatest asset. Our low staff turnover and deep institutional knowledge are direct outcomes of a workplace that genuinely values and celebrates its people.\n\nThe Annual Company Dinner also serves as an opportunity to preview our corporate theme for the year ahead, aligning the entire organisation behind a shared vision and setting the tone for another year of performance-driven facilities management and energy services delivery.",
    image:    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80&fit=crop',
    featured: false,
    author:   'Cofreth Communications',
    tags:     ['Company Culture', 'Events', 'Team'],
    related:  ['smart-facilities-management-forum-2017', 'medini-9-fm-services-commencement-iskandar-puteri'],
  },

  {
    id:       8,
    slug:     'what-is-facilities-management-malaysia-guide',
    category: 'Industry Insights',
    date:     '10 June 2026',
    isoDate:  '2026-06-10',
    location: 'Malaysia',
    title:    'What is Facilities Management? A Complete Guide for Malaysian Building Owners',
    excerpt:  'Facilities management (FM) is the professional discipline responsible for ensuring buildings, infrastructure and services function efficiently, safely and sustainably. Here is everything Malaysian building owners need to know.',
    body:     "Facilities management (FM) is the professional discipline responsible for ensuring that buildings, infrastructure and support services function efficiently, safely and sustainably throughout their operational life. For Malaysian building owners, property managers and corporate real estate teams, understanding what facilities management involves — and why it matters — is the first step toward protecting your assets and reducing operational costs.\n\nAt its core, facilities management covers two broad categories: hard services and soft services. Hard services refer to the physical building systems — mechanical, electrical, plumbing, air conditioning, lifts, fire protection systems and structural maintenance. Soft services refer to support services such as cleaning, security, landscaping, waste management and pest control. A total facilities management provider, like Cofreth, manages both under a single contract, providing one point of accountability for the entire built environment.\n\nFacilities management in Malaysia has grown significantly over the past two decades. With the development of landmark buildings, government complexes, data centres, hospitals and international airports, the demand for professional FM services has never been higher. Malaysian building owners increasingly recognise that reactive maintenance — fixing things only when they break — is far more expensive in the long run than planned, preventive FM.\n\nPreventive maintenance is one of the most important concepts in modern facilities management. By scheduling regular inspections, servicing and replacements before equipment fails, FM companies can dramatically extend asset life, reduce energy consumption and avoid costly emergency repairs. For a typical commercial building in Malaysia, a well-managed preventive maintenance programme can reduce maintenance costs by 15–25% annually.\n\nEnergy management is another critical component of facilities management. Buildings account for approximately 40% of energy consumption in Malaysia. A professional FM company will monitor energy usage, identify inefficiencies and implement measures to reduce consumption — delivering direct savings on utility bills while supporting sustainability goals.\n\nISO 41001:2018 is the international standard for facility management systems. It provides a framework for organisations to deliver FM services consistently, efficiently and in alignment with their strategic objectives. Cofreth is one of Malaysia's few FM companies certified under ISO 41001:2018, alongside ISO 9001 (Quality), ISO 14001 (Environment), ISO 45001 (Safety) and ISO 50001 (Energy).\n\nWhen choosing a facilities management company in Malaysia, look for: proven track record with similar building types, ISO certifications, a dedicated 24/7 helpdesk, transparent reporting and references from existing clients. Cofreth has been delivering FM services across Malaysia since 1986 — serving airports, data centres, universities, hospitals and government buildings for over 38 years.\n\nFor more information about Cofreth's facilities management services, visit our Services page or contact our team directly.",
    image:    'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80&fit=crop',
    featured: true,
    author:   'Cofreth Communications',
    tags:     ['Facilities Management', 'FM Malaysia', 'Building Management', 'Industry Guide'],
    related:  ['how-to-choose-facilities-management-company-malaysia', 'what-is-esco-energy-performance-contracting-malaysia'],
  },

  {
    id:       9,
    slug:     'how-to-choose-facilities-management-company-malaysia',
    category: 'Industry Insights',
    date:     '15 June 2026',
    isoDate:  '2026-06-15',
    location: 'Malaysia',
    title:    'How to Choose a Facilities Management Company in Malaysia',
    excerpt:  'Choosing the right facilities management company in Malaysia is one of the most important decisions a building owner or property manager will make. Here are the key criteria to evaluate before signing any FM contract.',
    body:     "Choosing the right facilities management company in Malaysia is one of the most important decisions a building owner, property manager or corporate real estate team will make. The FM company you appoint becomes responsible for the safety, efficiency and longevity of your building assets — and the comfort and productivity of everyone who uses them. A poor choice can result in escalating costs, compliance failures and building downtime. A good one delivers measurable savings, extended asset life and peace of mind.\n\nHere are the key criteria to evaluate when selecting a facilities management company in Malaysia.\n\nExperience and Track Record. Look for an FM company with a proven track record managing buildings similar to yours in type, size and complexity. An FM company experienced in managing airports, data centres and government complexes operates at a fundamentally different level than one managing small commercial offices. Ask for a portfolio of current and past clients, and where possible, visit reference sites or speak to existing clients directly. Cofreth has managed landmark Malaysian facilities since 1986, including KLIA2, Putrajaya International Convention Centre, KL Eco City and major data centres.\n\nISO Certifications. ISO certification is the most reliable independent indicator of an FM company's operational quality. At minimum, look for ISO 9001:2015 (Quality Management) and ISO 45001:2018 (Occupational Health & Safety). For energy management, ISO 50001:2018 is important. The gold standard for FM specifically is ISO 41001:2018 — the international FM system standard. Cofreth holds all five: ISO 9001, 14001, 45001, 50001 and 41001.\n\nScope of Services. Assess whether the FM company offers integrated total FM — covering both hard services (M&E, HVAC, civil) and soft services (cleaning, security, landscaping) — or only specialises in one area. A single-source total FM provider simplifies contract management, improves accountability and typically delivers better value through operational integration.\n\nTechnology and Reporting. Modern FM companies use computerised maintenance management systems (CMMS) and integrated workplace management systems (IWMS) to manage work orders, track asset performance and generate transparent reports. Ask to see sample monthly performance reports. Cofreth uses ARCHIBUS — the world's leading IWMS platform — to deliver real-time visibility into all FM operations.\n\nEnergy Management Capability. Energy costs typically represent 30–40% of a building's total operating expenditure in Malaysia. An FM company with energy management expertise can identify savings opportunities and, if registered as an ESCO, offer guaranteed energy savings through performance contracting. Cofreth is a registered ESCO, meaning we can deliver guaranteed energy savings — not just advice.\n\nFinancial Stability and Insurance. Ensure the FM company is financially sound and carries appropriate professional indemnity, public liability and workmen's compensation insurance. An FM company that cannot meet its financial obligations mid-contract can leave your building without critical support.\n\nLocal Presence and Response Time. For facilities in Malaysia, choose a company with a strong local presence and the ability to deploy teams rapidly. 24/7 helpdesk support with defined response times — typically 4 hours for urgent issues — should be contractually guaranteed.\n\nCofreth has been Malaysia's trusted facilities management partner since 1986. Contact us to discuss your building's FM requirements.",
    image:    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&fit=crop',
    featured: true,
    author:   'Cofreth Communications',
    tags:     ['Facilities Management', 'FM Company Malaysia', 'FM Selection', 'Building Management'],
    related:  ['what-is-facilities-management-malaysia-guide', 'what-is-esco-energy-performance-contracting-malaysia'],
  },

  {
    id:       10,
    slug:     'what-is-esco-energy-performance-contracting-malaysia',
    category: 'Industry Insights',
    date:     '20 June 2026',
    isoDate:  '2026-06-20',
    location: 'Malaysia',
    title:    'What is an ESCO? How Energy Performance Contracting Works in Malaysia',
    excerpt:  'An Energy Service Company (ESCO) delivers guaranteed energy savings to building owners through a performance-based contract. In Malaysia, registered ESCOs like Cofreth offer a risk-free path to lower energy bills and a smaller carbon footprint.',
    body:     "An Energy Service Company — commonly known as an ESCO — is a specialist firm that identifies, designs, implements and guarantees energy savings for buildings and facilities. Unlike a standard energy consultant who provides recommendations, an ESCO takes on the performance risk: if the promised savings are not delivered, the ESCO bears the financial consequences. This model makes ESCOs one of the most powerful tools available to Malaysian building owners who want to reduce energy costs without upfront capital risk.\n\nMalaysia has a formal ESCO registration framework managed by the Malaysia Green Technology Corporation (GreenTech Malaysia) and the Malaysia Association of Energy Service Companies (MAESCO). Registered ESCOs in Malaysia must meet strict technical, financial and professional requirements before they can offer guaranteed energy savings contracts. Cofreth is one of Malaysia's longest-established registered ESCOs, having pioneered energy performance contracting in the country since the early 2000s.\n\nHow Does Energy Performance Contracting Work? Energy Performance Contracting (EPC) is the financial mechanism through which an ESCO delivers its services. The process works as follows. First, the ESCO conducts a detailed Investment Grade Energy Audit (IGA) of the building to identify all viable energy savings opportunities and quantify the expected savings with high accuracy. Second, the ESCO designs and implements the energy conservation measures — which may include HVAC upgrades, lighting retrofits, building automation systems, variable speed drives and other interventions. Third, the ESCO guarantees a defined level of energy savings over the contract period, typically 5–10 years. If actual savings fall short of the guaranteed amount, the ESCO compensates the difference. Fourth, the cost of the energy improvements is repaid from the savings generated — meaning the project is often cash-flow positive from day one.\n\nCofreth's EPC model is branded as CoPC — Cofreth Performance Contracting. Under CoPC, building owners receive guaranteed energy savings with zero upfront capital outlay. The energy savings fund the project cost, and any savings above the guaranteed threshold are shared with the building owner.\n\nCapped and Guaranteed Energy Efficiency Performance (CEEP) is a variation of EPC pioneered in Malaysia by Cofreth — the first ESCO in the country to offer this model. Under CEEP, the building owner's energy costs are capped at a defined maximum, providing full protection against energy price increases while guaranteeing a minimum level of savings.\n\nWhy Does This Matter for Malaysian Buildings? Malaysia's energy tariffs have increased significantly over the past decade, and buildings face growing pressure to reduce carbon emissions under national sustainability commitments. For large energy consumers — airports, data centres, hospitals, hotels, universities and government buildings — the savings from a well-structured EPC contract can amount to millions of ringgit over the contract period.\n\nCofreth was the first ESCO to win 1st Prize at Malaysia's National Energy Awards (NEA) in 2018, and was awarded NEA EPC Champion in 2021. We have delivered guaranteed energy savings across some of Malaysia's most energy-intensive facilities. Contact Cofreth to find out how much your building could save.",
    image:    'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80&fit=crop',
    featured: false,
    author:   'Cofreth Communications',
    tags:     ['ESCO', 'Energy Performance Contracting', 'EPC Malaysia', 'Energy Savings', 'CEEP'],
    related:  ['what-is-facilities-management-malaysia-guide', 'nea-2021-energy-performance-contracting-champion'],
  },
];

export default news;

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return news.find(a => a.slug === slug);
}

export function getRelatedArticles(slugs: string[]): NewsArticle[] {
  return slugs.map(s => news.find(a => a.slug === s)).filter(Boolean) as NewsArticle[];
}
