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
        "Cogi Code Studio builds thoughtful apps for the Apple ecosystem. The goal is simple: remove small frustrations without stripping away personality, warmth, or play.",
    },
    buttons: {
      seeProducts: "See products",
      contact: "Contact",
      sayHello: "Contact us",
      comingSoon: "Coming Soon",
      viewDetail: "View detail",
      backToProducts: "Back to products",
      returnHome: "Return home",
      emailCogi: "Contact us",
      appStoreSoon: "App Store soon",
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
      title: "Say hello before the apps land.",
      description:
        "For early interest, future App Store links, or studio inquiries, use the contact button below.",
      labels: {
        email: "Email",
        currentStatus: "Current status",
      },
      statusDescription:
        "Both products are currently marked as coming soon, with App Store links planned later.",
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
        "Cogi Code Studio는 애플 생태계를 위한 소프트웨어를 만듭니다. 작은 불편을 덜어내되, 성격과 따뜻함, 그리고 약간의 장난기는 남겨두는 것이 목표입니다.",
    },
    buttons: {
      seeProducts: "제품 보기",
      contact: "문의하기",
      sayHello: "문의하기",
      comingSoon: "출시 예정",
      viewDetail: "상세 보기",
      backToProducts: "제품으로 돌아가기",
      returnHome: "홈으로 돌아가기",
      emailCogi: "문의하기",
      appStoreSoon: "App Store 예정",
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
      title: "앱이 착륙하기 전에 먼저 인사해요.",
      description:
        "초기 관심, App Store 링크 알림, 스튜디오 문의까지 아래 문의하기 버튼으로 연결할 수 있습니다.",
      labels: {
        email: "이메일",
        currentStatus: "현재 상태",
      },
      statusDescription:
        "두 제품 모두 현재는 출시 예정 상태이며, App Store 링크는 추후 연결될 예정입니다.",
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
        title: "아직 예열 중이에요.",
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
