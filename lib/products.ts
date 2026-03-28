import type { Locale } from "@/lib/i18n";

export const studioEmail = "ryuwoong.dev@gmail.com";

export type ProductSlug = "galaxy-pomodoro" | "capture-in-picture";

type ProductFeature = {
  title: string;
  description: string;
};

export type Product = {
  slug: ProductSlug;
  name: string;
  category: string;
  platform: string;
  status: string;
  stage: string;
  ctaLabel: string;
  tagline: string;
  cardDescription: string;
  heroTitle: string;
  overview: string;
  features: ProductFeature[];
  statusNotes: string[];
  contactPrompt: string;
};

const productsByLocale: Record<Locale, Product[]> = {
  en: [
    {
      slug: "galaxy-pomodoro",
      name: "Galaxy Pomodoro",
      category: "Focus timer",
      platform: "Apple ecosystem",
      status: "Coming Soon",
      stage: "Beta build",
      ctaLabel: "Coming Soon",
      tagline: "A pomodoro timer with orbit-based task structure.",
      cardDescription:
        "Manage projects as planets, subtasks as satellites, and keep the whole system in view while focus sessions keep moving.",
      heroTitle: "Pomodoro, but built around your project structure.",
      overview:
        "Galaxy Pomodoro turns projects into planets and subtasks into satellites, so the shape of your work stays readable while the timer keeps your momentum alive.",
      features: [
        {
          title: "Planet-and-satellite planning",
          description:
            "Break projects into a visual orbit system that helps big tasks and sub tasks stay connected.",
        },
        {
          title: "Focus sessions with context",
          description:
            "Run pomodoro blocks without losing sight of what each sprint belongs to and what should happen next.",
        },
        {
          title: "Apple-first flow",
          description:
            "Built for an Apple-centered workflow, with a cozy, game-like rhythm instead of a cold productivity dashboard.",
        },
      ],
      statusNotes: [
        "Currently in beta",
        "App Store link planned",
        "Pricing to be announced",
      ],
      contactPrompt:
        "Want to hear when Galaxy Pomodoro opens its first orbit? Reach out and we will keep you posted.",
    },
    {
      slug: "capture-in-picture",
      name: "Capture In Picture",
      category: "macOS utility",
      platform: "macOS",
      status: "Coming Soon",
      stage: "Beta build",
      ctaLabel: "Coming Soon",
      tagline: "Capture only the app you mean to show.",
      cardDescription:
        "A focused macOS capture utility that isolates the exact app window you want and supports macros for repeatable workflows.",
      heroTitle: "Capture the right app, not the whole mess.",
      overview:
        "Capture In Picture is a macOS utility for creators and builders who only want the relevant app on screen, with macros that make the same capture flow easy to repeat.",
      features: [
        {
          title: "App-only capture",
          description:
            "Keep the desktop clutter out of the frame and isolate the exact app window you want people to see.",
        },
        {
          title: "Macro-ready workflow",
          description:
            "Save repetitive capture steps so recurring demos, tutorials, and updates take less effort.",
        },
        {
          title: "Cleaner output for demos",
          description:
            "Make product updates, devlogs, and walkthroughs feel tighter by framing only the important surface.",
        },
      ],
      statusNotes: [
        "Currently in beta",
        "App Store link planned",
        "Pricing to be announced",
      ],
      contactPrompt:
        "If you want early updates on Capture In Picture, send a note and we will reply when it is ready to land.",
    },
  ],
  ko: [
    {
      slug: "galaxy-pomodoro",
      name: "Galaxy Pomodoro",
      category: "포커스 타이머",
      platform: "Apple 생태계",
      status: "출시 예정",
      stage: "베타 빌드",
      ctaLabel: "출시 예정",
      tagline: "행성과 위성 구조를 가진 포모도로 앱",
      cardDescription:
        "프로젝트를 행성처럼, 하위 태스크를 위성처럼 묶어 보며 집중 세션이 이어져도 전체 구조를 놓치지 않게 해주는 포모도로 앱입니다.",
      heroTitle: "프로젝트 구조를 중심에 둔 뽀모도로.",
      overview:
        "Galaxy Pomodoro는 프로젝트를 행성으로, 하위 태스크를 위성으로 다뤄서 타이머가 흘러가는 동안에도 일의 구조를 한눈에 유지하게 해줍니다.",
      features: [
        {
          title: "행성-위성 구조 설계",
          description:
            "큰 프로젝트와 하위 태스크를 시각적인 궤도 구조로 묶어 흐름을 잃지 않게 돕습니다.",
        },
        {
          title: "맥락을 잃지 않는 집중 세션",
          description:
            "지금 돌고 있는 포모도로 세션이 어떤 작업 흐름에 속하는지 계속 보면서 집중할 수 있습니다.",
        },
        {
          title: "Apple 중심의 따뜻한 흐름",
          description:
            "차가운 생산성 대시보드보다, 조금 더 게임 같고 따뜻한 리듬으로 Apple 워크플로를 감쌉니다.",
        },
      ],
      statusNotes: [
        "현재 베타 개발 중",
        "App Store 링크 준비 예정",
        "가격은 추후 공개",
      ],
      contactPrompt:
        "Galaxy Pomodoro가 첫 궤도를 열 때 소식 받고 싶다면 메일을 남겨주세요.",
    },
    {
      slug: "capture-in-picture",
      name: "Capture In Picture",
      category: "macOS 유틸리티",
      platform: "macOS",
      status: "출시 예정",
      stage: "베타 빌드",
      ctaLabel: "출시 예정",
      tagline: "원하는 앱만 정확히 담는 캡처 도구",
      cardDescription:
        "원하는 앱 창만 골라 캡처하고, 반복 작업은 매크로로 묶을 수 있는 집중형 macOS 캡처 유틸리티입니다.",
      heroTitle: "필요한 앱만 정확히 잡아내는 캡처.",
      overview:
        "Capture In Picture는 macOS에서 보여주고 싶은 앱 창만 골라 담고, 같은 캡처 흐름을 매크로로 반복할 수 있게 돕는 유틸리티입니다.",
      features: [
        {
          title: "앱 단위 캡처",
          description:
            "바탕화면이나 주변 요소를 걷어내고, 정말 보여주고 싶은 앱 창만 또렷하게 남깁니다.",
        },
        {
          title: "매크로 기반 반복 작업",
          description:
            "반복되는 캡처 순서를 저장해서 튜토리얼, 데모, 업데이트 기록을 훨씬 빠르게 정리할 수 있습니다.",
        },
        {
          title: "더 깔끔한 데모 출력",
          description:
            "꼭 필요한 화면만 남겨서 제품 소개, 개발 로그, 사용 설명 영상의 집중도를 높여줍니다.",
        },
      ],
      statusNotes: [
        "현재 베타 개발 중",
        "App Store 링크 준비 예정",
        "가격은 추후 공개",
      ],
      contactPrompt:
        "Capture In Picture 출시 소식을 가장 먼저 받고 싶다면 메일을 보내주세요.",
    },
  ],
};

export function getProducts(locale: Locale): Product[] {
  return productsByLocale[locale];
}

export function getProductBySlug(
  slug: string,
  locale: Locale,
): Product | undefined {
  return productsByLocale[locale].find((product) => product.slug === slug);
}

export function getProductSlugs(): ProductSlug[] {
  return productsByLocale.en.map((product) => product.slug);
}
