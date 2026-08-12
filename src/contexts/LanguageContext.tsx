'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Lang = 'en' | 'zh' | 'ja' | 'ko';

/* ─────────────────────────────────────────────────────────── translations ── */
const translations = {
  en: {
    // ── Nav ──────────────────────────────────────────────────────────────────
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      news: 'News',
      clientele: 'Clientele',
      careers: 'Careers',
      contact: 'Contact',
      getInTouch: 'Get In Touch',
    },
    aboutLinks: {
      glance: 'Cofreth At A Glance',
      glanceDesc: 'Our story, history & certifications',
      group: 'Group Of Companies',
      groupDesc: 'Our strategic partners',
      awards: 'Awards & Recognitions',
      awardsDesc: 'Frost & Sullivan, NEA & more',
    },
    serviceLinks: {
      fm: 'Facilities Management',
      fmDesc: 'Total FM, O&M, consultancy',
      energy: 'Energy Services',
      energyDesc: 'Audits, ESCO, CoPC',
      green: 'Green Expertise',
      greenDesc: 'GBI, renewables, solar',
      smart: 'Smart Technology',
      smartDesc: 'ARCHIBUS, BIM, IoT',
    },
    // ── Hero slides ──────────────────────────────────────────────────────────
    hero: {
      slide1Lines: ['Built Environment', 'Adds'],
      slide1Accent: 'CONFIDENCE',
      slide1Sub: 'Over 38 years of trusted facility management excellence across Malaysia.',
      slide2Lines: ['Total Facility', 'Management'],
      slide2Accent: 'Solutions',
      slide2Sub: 'Comprehensive, technology-driven FM services for every sector.',
      slide3Lines: ['We LOWER Your', 'Total Cost of'],
      slide3Accent: 'Ownership',
      slide3Sub: 'Guaranteed, measurable savings through science-based energy programs.',
      slide4Lines: ['Green Building', 'Is Our'],
      slide4Accent: 'Business',
      slide4Sub: 'GBI accredited, ESCO registered, future-ready sustainable FM.',
      exploreServices: 'Explore Services',
      learnMore: 'Learn More',
    },
    // ── About snippet ─────────────────────────────────────────────────────────
    about: {
      sectionLabel: 'Who We Are',
      headline: "Malaysia's Trusted FM & Energy Solutions Provider",
      body1: 'Cofreth (M) Sdn Bhd is a Malaysian company established since 1986, and one of the most experienced Total Solutions Providers for Facilities Management and Energy Services in Malaysia.',
      body2: 'Our Mission is to be recognised as the Leading Provider of Quality Services for Total Facilities Management and All Utilities. Our Vision is to become an International Service Provider in Facilities Management & Energy Services.',
      cta: 'Learn About Us',
      stat1Label: 'Years of Excellence',
      stat1Desc: 'Established in 1986, one of Malaysia\'s most experienced FM providers.',
      stat2Label: 'Skilled & Competent',
      stat2Desc: 'Trained Professionals and Competent persons across all FM and energy service discipline.',
      stat3Label: 'ISO Certifications',
      stat3Desc: 'ISO 9001, 14001, 45001, 50001 & 41001 certified for quality, safety and FM.',
      stat4Label: 'Energy Pioneer',
    },
    // ── Services ──────────────────────────────────────────────────────────────
    services: {
      sectionLabel: 'What We Do',
      headline: 'Our Core Services',
      sub: 'From total facility management to energy performance contracting — integrated solutions across the full built environment lifecycle.',
      fm: {
        title: 'Facilities Management',
        desc: 'Total facility management, operation & maintenance, technical due diligence, and FM consultancy for every type of built environment.',
      },
      energy: {
        title: 'Energy Services',
        desc: 'Energy audits, efficiency programs, performance contracting, and district cooling solutions that guarantee measurable savings.',
      },
      green: {
        title: 'Green Expertise',
        desc: 'Green building commissioning, accredited professional services, renewable energy, and solar thermal solutions.',
      },
      smart: {
        title: 'Smart Technology',
        desc: 'ARCHIBUS-powered TIFM, BIM, and cloud-based energy monitoring platforms for intelligent facility operations.',
      },
      exploreAll: 'Explore All Services',
    },
    // ── CTA ──────────────────────────────────────────────────────────────────
    cta: {
      eyebrow: 'Ready to Get Started?',
      headline: "Let's Optimise Your Facilities Together",
      body: "Contact our experts for a tailored facility management or energy services consultation. We'll assess your needs and propose a solution that delivers real results.",
      schedule: 'Schedule a Consultation',
    },
    // ── Common ────────────────────────────────────────────────────────────────
    common: {
      readMore: 'Read more',
      learnMore: 'Learn more',
      viewAll: 'View all',
      download: 'Download',
      contactUs: 'Contact Us',
      exploreServices: 'Explore Services',
    },
  },

  /* ─────────────────────────────────────────────────── CHINESE SIMPLIFIED ── */
  zh: {
    nav: {
      home: '首页',
      about: '关于我们',
      services: '服务',
      projects: '项目案例',
      news: '新闻',
      clientele: '客户群',
      careers: '招聘',
      contact: '联系我们',
      getInTouch: '立即联系',
    },
    aboutLinks: {
      glance: '公司概览',
      glanceDesc: '我们的故事、历史与认证',
      group: '集团公司',
      groupDesc: '我们的战略合作伙伴',
      awards: '荣誉与奖项',
      awardsDesc: '霜沙利文、国家能源奖等',
    },
    serviceLinks: {
      fm: '设施管理',
      fmDesc: '全面设施管理、运营维护、顾问服务',
      energy: '能源服务',
      energyDesc: '能源审计、ESCO、CoPC',
      green: '绿色专业',
      greenDesc: 'GBI认证、可再生能源、太阳能',
      smart: '智能技术',
      smartDesc: 'ARCHIBUS、BIM、物联网监控',
    },
    hero: {
      slide1Lines: ['建筑环境', '带来'],
      slide1Accent: '信心',
      slide1Sub: '38年以上在马来西亚提供值得信赖的设施管理卓越服务。',
      slide2Lines: ['全方位', '设施管理'],
      slide2Accent: '解决方案',
      slide2Sub: '为各行各业提供全面、技术驱动的设施管理服务。',
      slide3Lines: ['降低您的', '总拥有'],
      slide3Accent: '成本',
      slide3Sub: '通过科学能源计划提供有保障、可量化的节能效益。',
      slide4Lines: ['绿色建筑', '是我们的'],
      slide4Accent: '使命',
      slide4Sub: 'GBI认证、ESCO注册，面向未来的可持续设施管理。',
      exploreServices: '探索服务',
      learnMore: '了解更多',
    },
    about: {
      sectionLabel: '关于我们',
      headline: '马来西亚值得信赖的设施管理与能源解决方案提供商',
      body1: 'Cofreth (M) Sdn Bhd是一家创立于1986年的马来西亚公司，是马来西亚最具经验的设施管理与能源服务全方位解决方案提供商之一。',
      body2: '我们的使命是成为设施管理与各类公用设施优质服务的领先提供商。我们的愿景是成为设施管理与能源服务领域的国际服务提供商。',
      cta: '了解我们',
      stat1Label: '年卓越经验',
      stat1Desc: '成立于1986年，马来西亚最具经验的设施管理服务提供商之一。',
      stat2Label: '专业胜任人员',
      stat2Desc: '覆盖所有设施管理和能源服务领域的专业培训人员。',
      stat3Label: 'ISO认证',
      stat3Desc: 'ISO 9001、14001、45001、50001及41001认证，涵盖质量、安全与设施管理。',
      stat4Label: '能源先锋',
    },
    services: {
      sectionLabel: '我们的专长',
      headline: '核心服务',
      sub: '从全面设施管理到能源绩效合同——贯穿建筑环境全生命周期的一体化解决方案。',
      fm: {
        title: '设施管理',
        desc: '为各类建筑环境提供全面的设施管理、运营与维护、技术尽职调查及设施管理顾问服务。',
      },
      energy: {
        title: '能源服务',
        desc: '提供能源审计、效率提升计划、绩效合同及区域供冷解决方案，确保可量化的节能效果。',
      },
      green: {
        title: '绿色专业',
        desc: '绿色建筑调试、认证专业服务、可再生能源及太阳能热利用解决方案。',
      },
      smart: {
        title: '智能技术',
        desc: '基于ARCHIBUS的TIFM、BIM及云端能源监控平台，实现智能化设施运营。',
      },
      exploreAll: '查看全部服务',
    },
    cta: {
      eyebrow: '准备好开始了吗？',
      headline: '让我们共同优化您的设施',
      body: '请联系我们的专家，获取定制化的设施管理或能源服务咨询。我们将评估您的需求并提出切实有效的解决方案。',
      schedule: '预约咨询',
    },
    common: {
      readMore: '阅读更多',
      learnMore: '了解更多',
      viewAll: '查看全部',
      download: '下载',
      contactUs: '联系我们',
      exploreServices: '探索服务',
    },
  },

  /* ──────────────────────────────────────────────────────────── JAPANESE ── */
  ja: {
    nav: {
      home: 'ホーム',
      about: '会社概要',
      services: 'サービス',
      projects: 'プロジェクト',
      news: 'ニュース',
      clientele: 'クライアント',
      careers: '採用情報',
      contact: 'お問い合わせ',
      getInTouch: 'お問い合わせ',
    },
    aboutLinks: {
      glance: '会社概要',
      glanceDesc: '当社の歴史・ストーリー・認証',
      group: 'グループ企業',
      groupDesc: '戦略的パートナー企業',
      awards: '受賞・認定',
      awardsDesc: 'Frost & Sullivan、NEA など',
    },
    serviceLinks: {
      fm: 'ファシリティマネジメント',
      fmDesc: 'トータルFM、O&M、コンサルティング',
      energy: 'エネルギーサービス',
      energyDesc: '監査、ESCO、CoPC',
      green: 'グリーン専門',
      greenDesc: 'GBI、再生可能エネルギー、太陽光',
      smart: 'スマートテクノロジー',
      smartDesc: 'ARCHIBUS、BIM、IoT監視',
    },
    hero: {
      slide1Lines: ['建物環境が', ''],
      slide1Accent: '信頼をもたらす',
      slide1Sub: 'マレーシア全土で38年以上にわたる信頼されたファシリティマネジメントの卓越したサービス。',
      slide2Lines: ['トータル・ファシリティ', 'マネジメント'],
      slide2Accent: 'ソリューション',
      slide2Sub: 'あらゆる分野に対応する包括的なテクノロジー駆動のFMサービス。',
      slide3Lines: ['総所有コストを', ''],
      slide3Accent: '削減します',
      slide3Sub: '科学に基づくエネルギープログラムによる保証付きの測定可能な節約。',
      slide4Lines: ['グリーンビルディングが', ''],
      slide4Accent: '私たちの事業',
      slide4Sub: 'GBI認定、ESCO登録、将来を見据えた持続可能なFM。',
      exploreServices: 'サービスを見る',
      learnMore: '詳しく見る',
    },
    about: {
      sectionLabel: '私たちについて',
      headline: 'マレーシアの信頼されるFM・エネルギーソリューションプロバイダー',
      body1: 'Cofreth (M) Sdn Bhdは1986年に設立されたマレーシア企業であり、マレーシアにおけるファシリティマネジメントとエネルギーサービスの最も経験豊富なトータルソリューションプロバイダーの一つです。',
      body2: '当社のミッションは、トータルファシリティマネジメントおよび全ユーティリティにおける品質サービスの主要プロバイダーとして認知されることです。ビジョンはFM＆エネルギーサービスの国際サービスプロバイダーになることです。',
      cta: '詳しく見る',
      stat1Label: '年の卓越した実績',
      stat1Desc: '1986年設立、マレーシアで最も経験豊富なFMプロバイダーの一つ。',
      stat2Label: '熟練した専門人材',
      stat2Desc: 'FMおよびエネルギーサービスの全分野にわたる訓練された専門家。',
      stat3Label: 'ISO認証',
      stat3Desc: 'ISO 9001、14001、45001、50001、41001認証取得。',
      stat4Label: 'エネルギー先駆者',
    },
    services: {
      sectionLabel: '私たちの専門',
      headline: 'コアサービス',
      sub: 'トータルファシリティマネジメントからエネルギーパフォーマンス契約まで——建築環境のライフサイクル全体にわたる統合ソリューション。',
      fm: {
        title: 'ファシリティマネジメント',
        desc: 'あらゆる種類の建築環境向けにトータルFM、運用・保守、技術デューデリジェンス、FMコンサルティングを提供します。',
      },
      energy: {
        title: 'エネルギーサービス',
        desc: '測定可能な省エネを保証するエネルギー監査、効率化プログラム、パフォーマンス契約、地域冷却ソリューションを提供します。',
      },
      green: {
        title: 'グリーン専門',
        desc: 'グリーンビルディングコミッショニング、認定専門サービス、再生可能エネルギー、太陽熱ソリューション。',
      },
      smart: {
        title: 'スマートテクノロジー',
        desc: 'ARCHIBUS搭載のTIFM、BIM、クラウドベースのエネルギー監視プラットフォームによるインテリジェントなファシリティ運用。',
      },
      exploreAll: '全サービスを見る',
    },
    cta: {
      eyebrow: '始める準備はできていますか？',
      headline: '共に施設を最適化しましょう',
      body: '専門家にお問い合わせいただき、ニーズに合わせたFMまたはエネルギーサービスのご相談をお受けします。ニーズを評価し、実際の成果をもたらすソリューションをご提案します。',
      schedule: '相談を予約する',
    },
    common: {
      readMore: '続きを読む',
      learnMore: '詳しく見る',
      viewAll: 'すべて見る',
      download: 'ダウンロード',
      contactUs: 'お問い合わせ',
      exploreServices: 'サービスを探る',
    },
  },

  /* ──────────────────────────────────────────────────────────── KOREAN ── */
  ko: {
    nav: {
      home: '홈',
      about: '회사 소개',
      services: '서비스',
      projects: '프로젝트',
      news: '뉴스',
      clientele: '고객사',
      careers: '채용',
      contact: '문의하기',
      getInTouch: '문의하기',
    },
    aboutLinks: {
      glance: '회사 개요',
      glanceDesc: '우리의 이야기, 역사 및 인증',
      group: '그룹 계열사',
      groupDesc: '전략적 파트너사',
      awards: '수상 및 인증',
      awardsDesc: 'Frost & Sullivan, NEA 등',
    },
    serviceLinks: {
      fm: '시설 관리',
      fmDesc: '종합 FM, 운영·유지보수, 컨설팅',
      energy: '에너지 서비스',
      energyDesc: '감사, ESCO, CoPC',
      green: '그린 전문성',
      greenDesc: 'GBI, 재생에너지, 태양광',
      smart: '스마트 기술',
      smartDesc: 'ARCHIBUS, BIM, IoT 모니터링',
    },
    hero: {
      slide1Lines: ['건축 환경이', '신뢰를'],
      slide1Accent: '더합니다',
      slide1Sub: '말레이시아 전역에서 38년 이상의 신뢰받는 시설 관리 전문성.',
      slide2Lines: ['종합 시설', '관리'],
      slide2Accent: '솔루션',
      slide2Sub: '모든 분야를 위한 포괄적인 기술 기반 FM 서비스.',
      slide3Lines: ['총 소유 비용을', ''],
      slide3Accent: '절감합니다',
      slide3Sub: '과학 기반 에너지 프로그램을 통한 보장된 측정 가능한 절약.',
      slide4Lines: ['그린 빌딩이', '우리의'],
      slide4Accent: '사업입니다',
      slide4Sub: 'GBI 인증, ESCO 등록, 미래 지향적 지속 가능한 FM.',
      exploreServices: '서비스 탐색',
      learnMore: '자세히 보기',
    },
    about: {
      sectionLabel: '회사 소개',
      headline: '말레이시아의 신뢰받는 FM 및 에너지 솔루션 제공업체',
      body1: 'Cofreth (M) Sdn Bhd는 1986년에 설립된 말레이시아 기업으로, 말레이시아에서 가장 경험이 풍부한 시설 관리 및 에너지 서비스 종합 솔루션 제공업체 중 하나입니다.',
      body2: '우리의 사명은 종합 시설 관리 및 모든 유틸리티 분야에서 품질 서비스의 선도적인 제공업체로 인정받는 것입니다. 비전은 FM 및 에너지 서비스 분야의 국제 서비스 제공업체가 되는 것입니다.',
      cta: '자세히 알아보기',
      stat1Label: '년의 탁월한 실적',
      stat1Desc: '1986년 설립, 말레이시아에서 가장 경험이 풍부한 FM 제공업체 중 하나.',
      stat2Label: '전문 인력',
      stat2Desc: '모든 FM 및 에너지 서비스 분야에 걸친 훈련된 전문가.',
      stat3Label: 'ISO 인증',
      stat3Desc: 'ISO 9001, 14001, 45001, 50001 및 41001 인증 취득.',
      stat4Label: '에너지 선구자',
    },
    services: {
      sectionLabel: '우리의 전문성',
      headline: '핵심 서비스',
      sub: '종합 시설 관리부터 에너지 성과 계약까지 — 건축 환경 전체 생애주기에 걸친 통합 솔루션.',
      fm: {
        title: '시설 관리',
        desc: '모든 유형의 건축 환경을 위한 종합 시설 관리, 운영·유지보수, 기술 실사 및 FM 컨설팅.',
      },
      energy: {
        title: '에너지 서비스',
        desc: '측정 가능한 절감을 보장하는 에너지 감사, 효율화 프로그램, 성과 계약 및 지역 냉방 솔루션.',
      },
      green: {
        title: '그린 전문성',
        desc: '그린 빌딩 커미셔닝, 인증 전문 서비스, 재생 에너지 및 태양열 솔루션.',
      },
      smart: {
        title: '스마트 기술',
        desc: 'ARCHIBUS 기반 TIFM, BIM 및 클라우드 기반 에너지 모니터링 플랫폼으로 지능형 시설 운영.',
      },
      exploreAll: '전체 서비스 보기',
    },
    cta: {
      eyebrow: '시작할 준비가 되셨나요?',
      headline: '함께 시설을 최적화합시다',
      body: '맞춤형 시설 관리 또는 에너지 서비스 상담을 위해 전문가에게 문의하세요. 귀사의 요구사항을 평가하고 실질적인 성과를 제공하는 솔루션을 제안해 드립니다.',
      schedule: '상담 예약하기',
    },
    common: {
      readMore: '더 읽기',
      learnMore: '자세히 보기',
      viewAll: '전체 보기',
      download: '다운로드',
      contactUs: '문의하기',
      exploreServices: '서비스 탐색',
    },
  },
} as const;

export type Translations = typeof translations.en;

/* ─────────────────────────────────────────────────────────── context ── */
interface LanguageCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageCtx>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const saved = localStorage.getItem('cofreth-lang') as Lang | null;
    if (saved && translations[saved]) setLangState(saved);
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem('cofreth-lang', l);
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] as Translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
