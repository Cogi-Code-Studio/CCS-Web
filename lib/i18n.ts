export const LOCALE_COOKIE = "ccs-locale";
export const locales = ["en", "ko"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "en" || value === "ko";
}

export const siteCopy = {
  en: {
    header: {
      nav: {
        products: "Products",
        contact: "Contact",
      },
      languageLabel: "Language",
    },
    hero: {
      badges: ["Indie utility", "macOS workflow", "Open source"],
      eyebrow: "Cogi Code Studio",
      title: "Small tools for everyday tasks.",
      accent: "Make every day a little easier.",
      description:
        "We make apps that solve small, everyday frustrations, with simple features and thoughtful details that make them a pleasure to use.",
    },
    buttons: {
      seeProducts: "See products",
      contact: "Contact",
      sayHello: "Contact us",
      comingSoon: "More updates soon",
      viewDetail: "View details",
      returnHome: "Return home",
      emailCogi: "Contact us",
      appStoreSoon: "Coming to the App Store",
    },
    footer: {
      privacy: "Privacy",
    },
    highlights: [
      {
        title: "Made for Mac",
        description:
          "Practical tools that fit the way you work on your Mac.",
      },
      {
        title: "A pleasure to use",
        description:
          "Clear interfaces, warm colors, and a little personality in the details.",
      },
      {
        title: "Free and open source",
        description:
          "Download Capture In Picture for free and explore its source code on GitHub.",
      },
    ],
    brandPanel: {
      badges: ["Apple-first", "Pixel polish"],
      eyebrow: "Our approach",
      description:
        "Useful tools with thoughtful details, made to make everyday tasks easier and more enjoyable.",
    },
    studioNote: {
      eyebrow: "Studio note",
      title: "Practical tools with personality.",
      description:
        "We focus on useful features and bring a little warmth to the details, from the colors to the way each screen feels.",
    },
    rules: [
      {
        title: "Design rule",
        description:
          "Keep layouts spacious and use small details to add character.",
      },
      {
        title: "Product rule",
        description:
          "Solve a specific problem and make the solution a pleasure to use.",
      },
    ],
    products: {
      eyebrow: "Products",
      title: "A small tool for the task at hand.",
      description:
        "Capture just the app window you need with Capture In Picture, and save screenshots for your guides and demos.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Have a question or an idea?",
      description:
        "Get in touch for help with an app, to share feedback, or to ask about the studio.",
      labels: {
        email: "Email",
        currentStatus: "Current status",
      },
      statusDescription:
        "You can download the latest version of Capture In Picture for free from GitHub Releases.",
    },
    privacy: {
      eyebrow: "Privacy",
      title: "Privacy Policy",
      description:
        "A lightweight overview of how Cogi Code Studio currently handles personal information on this website and through direct contact.",
      updatedAt: "Effective April 6, 2026",
      summaryTitle: "Current scope",
      summary:
        "This policy applies to the current Cogi Code Studio website, product pages, and direct email inquiries. If separate apps launch with their own data practices later, additional notices may be added for those services.",
      sections: [
        {
          title: "What we collect",
          paragraphs: [
            "We may receive the information you choose to send by email, such as your name, email address, and the contents of your message.",
            "We also use a small cookie to remember language preference on the website, and hosting or security services may automatically generate basic technical logs such as IP address, browser type, referral URL, and access time.",
          ],
        },
        {
          title: "How we use it",
          paragraphs: [
            "Collected information is used to respond to inquiries, operate and secure the website, and prepare future product communication when you explicitly ask to hear back from us.",
            "We do not use personal information for unrelated marketing blasts, and we try to keep collection limited to what is reasonably needed for the current studio site.",
          ],
        },
        {
          title: "Sharing and storage",
          paragraphs: [
            "We do not sell personal information. Information may be processed by services reasonably required to run the site or deliver email, such as hosting, infrastructure, or email providers.",
            "Inquiry emails may be kept for as long as needed to respond, follow up, or maintain a simple history of studio communication. Technical logs are typically retained only for operational or security needs.",
          ],
        },
        {
          title: "Your choices",
          paragraphs: [
            "If you want to ask what information we may hold about you, request correction or deletion, or raise a privacy concern, contact us by email.",
            "We will review reasonable requests in good faith and respond within a practical timeframe, subject to any legal or operational limits.",
          ],
        },
        {
          title: "Future updates",
          paragraphs: [
            "Because the studio and its products are still early, this policy may change as new services launch or data practices become more specific.",
            "When that happens, the updated policy will be posted on this page with a revised effective date.",
          ],
        },
      ],
      contactTitle: "Questions about privacy?",
      contactDescription:
        "If you want to ask about stored information, request correction or deletion, or report a concern, send us an email and we will take a careful look.",
    },
    detail: {
      statusCardLabel: "Status",
      overviewEyebrow: "Overview",
      quickFacts: "Quick facts",
      platform: "Platform",
      status: "Status",
      pricing: "Pricing",
      pricingDescription: "To be announced closer to release.",
      feature: "Feature",
      statusSection: {
        eyebrow: "Status",
        title: "Downloads and requirements",
        description:
          "Check where to download the app, what it costs, and which macOS version you need.",
      },
      contactSection: {
        eyebrow: "Contact",
        title: "Need a hand?",
      },
      relatedSection: {
        eyebrow: "More apps",
        title: "Explore our other tools",
        description:
          "Find more apps from Cogi Code Studio for your everyday tasks.",
      },
    },
    notFound: {
      title: "We couldn’t find that page.",
      description:
        "Return to the home page to explore our apps.",
    },
  },
  ko: {
    header: {
      nav: {
        products: "제품",
        contact: "문의",
      },
      languageLabel: "언어",
    },
    hero: {
      badges: ["인디 앱", "macOS 도구", "오픈소스"],
      eyebrow: "Cogi Code Studio",
      title: "일상의 불편을 줄이는 작은 소프트웨어.",
      accent: "매일 조금 더 편하게.",
      description:
        "일상에서 자주 마주치는 작은 불편을 해결하는 앱을 만듭니다. 필요한 기능은 간결하게, 쓰는 경험은 즐겁게 다듬습니다.",
    },
    buttons: {
      seeProducts: "제품 보기",
      contact: "문의하기",
      sayHello: "문의하기",
      comingSoon: "새로운 소식을 준비하고 있어요",
      viewDetail: "상세 보기",
      returnHome: "홈으로 돌아가기",
      emailCogi: "문의하기",
      appStoreSoon: "App Store 출시 예정",
    },
    footer: {
      privacy: "개인정보 처리방침",
    },
    highlights: [
      {
        title: "Mac에 맞춘 도구",
        description:
          "Mac에서 매일 하는 작업을 더 간편하게 돕습니다.",
      },
      {
        title: "쓰는 즐거움",
        description:
          "보기 편한 화면과 따뜻한 색감, 작은 디테일에 개성을 담습니다.",
      },
      {
        title: "무료 오픈소스",
        description:
          "Capture In Picture는 무료로 쓸 수 있고, 소스 코드도 GitHub에 공개되어 있습니다.",
      },
    ],
    brandPanel: {
      badges: ["Mac을 위한 앱", "세심한 디테일"],
      eyebrow: "우리가 만드는 도구",
      description:
        "매일 하는 일을 조금 더 편하고 즐겁게 만드는 도구. 필요한 기능과 작은 디테일을 함께 챙깁니다.",
    },
    studioNote: {
      eyebrow: "스튜디오 노트",
      title: "쓸모에 개성을 더합니다",
      description:
        "꼭 필요한 기능에 집중하면서도, 화면의 색감과 작은 표현까지 세심하게 다듬습니다.",
    },
    rules: [
      {
        title: "디자인 규칙",
        description:
          "화면에는 여유를 두고, 작은 디테일로 개성을 더합니다.",
      },
      {
        title: "제품 규칙",
        description:
          "구체적인 불편을 해결하고, 쓰는 과정도 편하게 만듭니다.",
      },
    ],
    products: {
      eyebrow: "제품",
      title: "필요한 순간에 꺼내 쓰는 작은 도구",
      description:
        "Capture In Picture로 필요한 앱 창만 캡처해 보세요. 사용 가이드와 데모에 넣을 스크린샷을 간편하게 만들 수 있습니다.",
    },
    contact: {
      eyebrow: "문의",
      title: "궁금한 점을 들려주세요",
      description:
        "앱을 쓰다가 막힌 점, 개선 제안, 스튜디오에 대한 궁금증을 이메일로 보내주세요.",
      labels: {
        email: "이메일",
        currentStatus: "현재 상태",
      },
      statusDescription:
        "Capture In Picture 최신 버전은 GitHub Releases에서 무료로 받을 수 있습니다.",
    },
    privacy: {
      eyebrow: "개인정보",
      title: "개인정보 처리방침",
      description:
        "Cogi Code Studio 웹사이트와 직접 문의 과정에서 현재 어떤 개인정보를 어떻게 다루는지 가볍게 정리한 안내입니다.",
      updatedAt: "시행일: 2026년 4월 6일",
      summaryTitle: "적용 범위",
      summary:
        "이 방침은 현재 운영 중인 Cogi Code Studio 웹사이트, 제품 소개 페이지, 그리고 이메일 문의에 적용됩니다. 추후 개별 앱이 출시되면서 별도 데이터 처리 항목이 생기면 서비스별 안내를 추가할 수 있습니다.",
      sections: [
        {
          title: "수집하는 정보",
          paragraphs: [
            "이메일로 문의하실 경우 이름, 이메일 주소, 문의 내용처럼 사용자가 직접 보내는 정보를 받을 수 있습니다.",
            "또한 사이트에서는 언어 선택 상태를 기억하기 위한 작은 쿠키를 사용하며, 호스팅 또는 보안 서비스 과정에서 IP 주소, 브라우저 종류, 접속 시각, 유입 경로 같은 기본 기술 로그가 자동으로 생성될 수 있습니다.",
          ],
        },
        {
          title: "이용 목적",
          paragraphs: [
            "수집된 정보는 문의 응답, 사이트 운영과 보안 유지, 그리고 사용자가 회신을 원한 경우 향후 제품 소식 전달을 위해 사용됩니다.",
            "현재 스튜디오 사이트 운영에 합리적으로 필요한 범위를 넘어서 과도하게 정보를 수집하거나, 무관한 대량 마케팅에 활용하지 않으려 합니다.",
          ],
        },
        {
          title: "제3자 제공 및 보관",
          paragraphs: [
            "개인정보를 판매하지 않습니다. 다만 사이트 운영이나 이메일 전달에 필요한 범위에서 호스팅, 인프라, 메일 제공업체 등 필수 서비스에 의해 처리될 수 있습니다.",
            "문의 메일은 답변과 후속 대응, 간단한 커뮤니케이션 이력 관리를 위해 필요한 기간 동안 보관될 수 있으며, 기술 로그는 운영 및 보안 목적의 범위에서만 유지됩니다.",
          ],
        },
        {
          title: "이용자의 권리",
          paragraphs: [
            "보관 중인 정보 확인, 정정, 삭제 요청이나 개인정보 관련 우려 사항이 있다면 이메일로 문의하실 수 있습니다.",
            "법적 또는 운영상 제한이 없는 범위에서 합리적인 기간 내에 성실하게 검토하고 답변드리겠습니다.",
          ],
        },
        {
          title: "방침 변경",
          paragraphs: [
            "스튜디오와 제품이 아직 초기 단계이기 때문에, 새로운 서비스가 추가되거나 처리 방식이 구체화되면 이 방침도 함께 업데이트될 수 있습니다.",
            "변경 시에는 이 페이지에 최신 내용을 반영하고 시행일도 함께 갱신합니다.",
          ],
        },
      ],
      contactTitle: "개인정보 관련 문의가 있나요?",
      contactDescription:
        "보관 정보 확인, 정정이나 삭제 요청, 기타 우려 사항이 있다면 이메일로 알려 주세요. 가능한 범위에서 꼼꼼히 확인하겠습니다.",
    },
    detail: {
      statusCardLabel: "상태",
      overviewEyebrow: "개요",
      quickFacts: "한눈에 보기",
      platform: "플랫폼",
      status: "상태",
      pricing: "가격",
      pricingDescription: "출시 시점에 공개할 예정입니다.",
      feature: "기능",
      statusSection: {
        eyebrow: "상태",
        title: "다운로드와 사용 조건",
        description:
          "다운로드 위치와 가격, 필요한 macOS 버전을 확인하세요.",
      },
      contactSection: {
        eyebrow: "문의",
        title: "도움이 필요하신가요?",
      },
      relatedSection: {
        eyebrow: "다른 앱",
        title: "이런 도구도 만들고 있어요",
        description:
          "일상의 작은 작업을 도와줄 Cogi Code Studio의 다른 앱도 살펴보세요.",
      },
    },
    notFound: {
      title: "페이지를 찾을 수 없어요",
      description:
        "홈으로 돌아가 공개된 앱을 둘러보세요.",
    },
  },
} as const;

export type SiteDictionary = (typeof siteCopy)[Locale];
