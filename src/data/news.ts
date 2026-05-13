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
];

export default news;

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return news.find(a => a.slug === slug);
}

export function getRelatedArticles(slugs: string[]): NewsArticle[] {
  return slugs.map(s => news.find(a => a.slug === s)).filter(Boolean) as NewsArticle[];
}
