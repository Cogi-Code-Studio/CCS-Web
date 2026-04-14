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
      badges: ["Indie retro-game", "Apple ecosystem", "Coming soon"],
      eyebrow: "Cogi Code Studio",
      title: "Tiny software for everyday friction.",
      accent: "Made with a little more feeling.",
      description:
        "Cogi Code Studio makes convenient and delightful software. The goal is simple: remove small frustrations without stripping away personality, warmth, or a little play.",
    },
    buttons: {
      seeProducts: "See products",
      contact: "Contact",
      sayHello: "Contact us",
      comingSoon: "Coming Soon",
      viewDetail: "View detail",
      returnHome: "Return home",
      emailCogi: "Contact us",
      appStoreSoon: "App Store soon",
    },
    footer: {
      privacy: "Privacy",
    },
    highlights: [
      {
        title: "Apple-first",
        description:
          "Small utility apps designed around Apple users and their daily rhythm.",
      },
      {
        title: "Cozy pixel mood",
        description:
          "Indie retro visuals, soft colors, and tiny decorative moments without getting noisy.",
      },
      {
        title: "Two products in orbit",
        description:
          "Galaxy Pomodoro and Capture In Picture are both warming up for their first public release.",
      },
    ],
    brandPanel: {
      badges: ["Apple-first", "Pixel polish"],
      eyebrow: "Studio mood",
      description:
        "Small tools, warm pixels, less friction. Built for people who like useful software with a little more feeling.",
    },
    studioNote: {
      eyebrow: "Studio note",
      title: "Useful software, but never sterile.",
      description:
        "The studio sits somewhere between a quiet cafe website and a tiny retro game menu. The tools stay practical, while the presentation keeps a little softness and charm.",
    },
    rules: [
      {
        title: "Design rule",
        description:
          "Leave room to breathe. Use pixels like seasoning, not wallpaper.",
      },
      {
        title: "Product rule",
        description:
          "Solve one annoying thing clearly, then add one extra spoon of feeling.",
      },
    ],
    products: {
      eyebrow: "Products",
      title: "Two indie tools, each with its own little world.",
      description:
        "Both products get their own detail page, while the home page acts like a calm, retro-flavored front desk for the studio.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Curious about the products or CCS?",
      description:
        "For early interest, future App Store links, or studio inquiries, use the contact button below.",
      labels: {
        email: "Email",
        currentStatus: "Current status",
      },
      statusDescription:
        "Both products are currently marked as coming soon, with App Store links planned later.",
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
        title: "Still warming up.",
        description:
          "This page is ready to present the product shape early, even before the App Store link and pricing are final.",
      },
      contactSection: {
        eyebrow: "Contact",
        title: "Want first dibs?",
      },
      relatedSection: {
        eyebrow: "Also in orbit",
        title: "Another product from the studio.",
        description:
          "The studio only has a small catalog for now, so each tool gets room to breathe.",
      },
    },
    notFound: {
      title: "That page drifted out of orbit.",
      description:
        "Head back to the studio front page and browse the current products from there.",
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
      badges: ["인디 레트로 게임", "애플 생태계", "출시 예정"],
      eyebrow: "Cogi Code Studio",
      title: "일상의 불편을 줄이는 작은 소프트웨어.",
      accent: "감성은 한 스푼 더.",
      description:
        "Cogi Code Studio는 편리하고 즐거운 소프트웨어를 만듭니다. 작은 불편을 덜어내되, 성격과 따뜻함, 그리고 약간의 장난기는 남겨두는 것이 목표입니다.",
    },
    buttons: {
      seeProducts: "제품 보기",
      contact: "문의하기",
      sayHello: "문의하기",
      comingSoon: "출시 예정",
      viewDetail: "상세 보기",
      returnHome: "홈으로 돌아가기",
      emailCogi: "문의하기",
      appStoreSoon: "App Store 예정",
    },
    footer: {
      privacy: "개인정보 처리방침",
    },
    highlights: [
      {
        title: "애플 중심",
        description:
          "애플 사용자의 작업 리듬을 기준으로 설계한 작은 유틸리티 앱들입니다.",
      },
      {
        title: "포근한 픽셀 무드",
        description:
          "인디 레트로 감성, 부드러운 색감, 작은 픽셀 장식으로 분위기를 만들되 과하지 않게 유지합니다.",
      },
      {
        title: "두 개의 앱이 준비 중",
        description:
          "Galaxy Pomodoro와 Capture In Picture는 모두 첫 공개를 준비하고 있습니다.",
      },
    ],
    brandPanel: {
      badges: ["애플 중심", "픽셀 디테일"],
      eyebrow: "스튜디오 무드",
      description:
        "작지만 기분 좋은 소프트웨어, 따뜻한 픽셀, 덜어낸 마찰. 실용적이면서도 기억에 남는 툴을 좋아하는 사람들을 위해 만듭니다.",
    },
    studioNote: {
      eyebrow: "스튜디오 노트",
      title: "유용하지만, 무미건조하진 않게.",
      description:
        "이 스튜디오는 조용한 카페 웹사이트와 작은 레트로 게임 메뉴 사이 어딘가에 있습니다. 기능은 실용적으로, 표현은 조금 더 부드럽고 다정하게 가져갑니다.",
    },
    rules: [
      {
        title: "디자인 규칙",
        description:
          "숨 쉴 여백을 남기고, 픽셀은 벽지가 아니라 향신료처럼 사용합니다.",
      },
      {
        title: "제품 규칙",
        description:
          "하나의 불편을 또렷하게 해결하고, 그 위에 감성을 한 스푼 더합니다.",
      },
    ],
    products: {
      eyebrow: "제품",
      title: "각자의 작은 세계를 가진 두 개의 인디 툴.",
      description:
        "두 제품 모두 별도의 상세 페이지를 가지고, 홈은 차분한 레트로 무드의 스튜디오 프런트처럼 동작합니다.",
    },
    contact: {
      eyebrow: "문의",
      title: "제품이나 CCS에 관해 궁금하신가요?",
      description:
        "초기 관심, App Store 링크 알림, 스튜디오 문의까지 아래 문의하기 버튼으로 연결할 수 있습니다.",
      labels: {
        email: "이메일",
        currentStatus: "현재 상태",
      },
      statusDescription:
        "두 제품 모두 현재는 출시 예정 상태이며, App Store 링크는 추후 연결될 예정입니다.",
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
        title: "아직 준비 중이에요.",
        description:
          "이 페이지는 App Store 링크와 가격이 확정되기 전에도 제품의 방향과 분위기를 먼저 보여주기 위한 구조입니다.",
      },
      contactSection: {
        eyebrow: "문의",
        title: "먼저 받아보고 싶다면?",
      },
      relatedSection: {
        eyebrow: "다른 궤도",
        title: "같은 스튜디오의 다른 제품.",
        description:
          "지금은 작은 카탈로그이기 때문에, 각 도구마다 충분한 숨을 쉴 공간을 주고 있습니다.",
      },
    },
    notFound: {
      title: "이 페이지는 궤도 밖으로 흘러갔어요.",
      description:
        "홈으로 돌아가서 현재 공개된 스튜디오 제품들을 다시 둘러보세요.",
    },
  },
} as const;

export type SiteDictionary = (typeof siteCopy)[Locale];
