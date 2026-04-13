import type { Locale } from "@/lib/i18n";

export const studioEmail = "admin@cogicode.com";

export type ProductSlug = "galaxy-pomodoro" | "capture-in-picture";

type ProductFeature = {
  title: string;
  description: string;
};

type ProductAction = {
  label: string;
  href: string;
  tone?: "solid" | "ghost";
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
  pricingNote?: string;
  contactSectionTitle?: string;
  heroActions?: ProductAction[];
  contactActions?: ProductAction[];
  iconSrc?: string;
  iconAlt?: string;
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
      category: "Documentation capture tool",
      platform: "macOS 26.2+",
      status: "Available now",
      stage: "Open source",
      ctaLabel: "Download DMG",
      tagline: "Capture a specific app window as a PNG.",
      cardDescription:
        "A macOS app for capturing a specific app window as a PNG, with tools for repeatable documentation and screen recording workflows.",
      heroTitle: "Repeatable window captures for docs, demos, and recordings.",
      overview:
        "Capture In Picture is built for tutorial writers and anyone who needs repeatable app-window captures. It lets you frame one specific window, save clean PNG output, and run the same capture workflow again with resize, macro, and save controls tuned for macOS.",
      features: [
        {
          title: "Specific window capture",
          description:
            "Capture the app window you actually want instead of your entire desktop, and resize the selected window before capture when you need consistent output.",
        },
        {
          title: "Repeat Capture + Macro Builder",
          description:
            "Build repeat capture flows with arrow keys, wait steps, and capture steps so the same UI sequence can be documented frame by frame.",
        },
        {
          title: "Crop and output control",
          description:
            "Trim the captured image with capture insets before saving, pick a custom output folder, or fall back to the default Pictures/CaptureInPicture location.",
        },
        {
          title: "Local-first workflow",
          description:
            "Show local completion notifications without uploading captured images anywhere. The app is free and open source, with releases published on GitHub.",
        },
      ],
      statusNotes: [
        "Latest DMG is published on GitHub Releases",
        "Free and open source",
        "Requires macOS 26.2 or later",
      ],
      contactPrompt:
        "Need the latest build, a support path, or the app privacy policy? Start from the links below.",
      pricingNote: "Free. Source and release builds are available on GitHub.",
      contactSectionTitle: "Install, support, and privacy.",
      heroActions: [
        {
          label: "Download DMG",
          href: "https://github.com/Cogi-Code-Studio/Capture-In-Picture/releases",
        },
        {
          label: "View on GitHub",
          href: "https://github.com/Cogi-Code-Studio/Capture-In-Picture",
          tone: "ghost",
        },
      ],
      contactActions: [
        {
          label: "GitHub Issues",
          href: "https://github.com/Cogi-Code-Studio/Capture-In-Picture/issues",
          tone: "ghost",
        },
        {
          label: "Privacy Policy",
          href: "/products/capture-in-picture/privacy",
          tone: "ghost",
        },
      ],
      iconSrc: "/products/capture-in-picture/app-icon.png",
      iconAlt: "Capture In Picture app icon.",
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
      category: "문서화 캡처 도구",
      platform: "macOS 26.2+",
      status: "사용 가능",
      stage: "오픈소스",
      ctaLabel: "DMG 다운로드",
      tagline: "특정 앱 창만 골라 PNG로 저장하는 캡처 앱",
      cardDescription:
        "특정 앱 창만 골라 PNG로 저장하고, 반복적인 문서 작성과 화면 기록 워크플로를 안정적으로 만들 수 있는 macOS 앱입니다.",
      heroTitle: "문서와 데모를 위한 반복 가능한 앱 창 캡처.",
      overview:
        "Capture In Picture는 튜토리얼 작성자와 반복 화면 기록이 필요한 사용자를 위한 macOS 앱입니다. 원하는 앱 창만 정확히 잡아 PNG로 저장하고, 창 크기 조절, 매크로, 저장 경로 설정까지 한 흐름으로 정리할 수 있습니다.",
      features: [
        {
          title: "특정 창만 정확히 캡처",
          description:
            "전체 화면이 아니라 원하는 앱 창만 골라 캡처할 수 있고, 필요하면 캡처 전에 선택한 창 크기를 먼저 맞춰 결과물을 일정하게 유지할 수 있습니다.",
        },
        {
          title: "Repeat Capture + 매크로 빌더",
          description:
            "방향키, 대기, 캡처 스텝을 조합해 같은 UI 흐름을 여러 프레임으로 저장할 수 있어 문서화와 화면 기록 작업에 잘 맞습니다.",
        },
        {
          title: "크롭과 저장 제어",
          description:
            "캡처 인셋으로 저장 전에 이미지 가장자리를 다듬고, 사용자 지정 저장 폴더를 고르거나 기본 경로인 Pictures/CaptureInPicture를 사용할 수 있습니다.",
        },
        {
          title: "로컬 우선 워크플로",
          description:
            "캡처 이미지를 외부로 업로드하지 않고 로컬 완료 알림만 표시합니다. 앱은 무료로 사용할 수 있는 오픈소스 프로젝트입니다.",
        },
      ],
      statusNotes: [
        "최신 DMG는 GitHub Releases에서 받을 수 있습니다",
        "무료 오픈소스 프로젝트입니다",
        "macOS 26.2 이상이 필요합니다",
      ],
      contactPrompt:
        "최신 빌드, 지원 경로, 앱 개인정보 처리방침이 필요하다면 아래 링크에서 바로 확인할 수 있습니다.",
      pricingNote: "무료입니다. 소스와 릴리스 빌드는 GitHub에서 확인할 수 있습니다.",
      contactSectionTitle: "설치, 지원, 개인정보 안내.",
      heroActions: [
        {
          label: "DMG 다운로드",
          href: "https://github.com/Cogi-Code-Studio/Capture-In-Picture/releases",
        },
        {
          label: "GitHub 보기",
          href: "https://github.com/Cogi-Code-Studio/Capture-In-Picture",
          tone: "ghost",
        },
      ],
      contactActions: [
        {
          label: "GitHub 이슈",
          href: "https://github.com/Cogi-Code-Studio/Capture-In-Picture/issues",
          tone: "ghost",
        },
        {
          label: "개인정보 처리방침",
          href: "/products/capture-in-picture/privacy",
          tone: "ghost",
        },
      ],
      iconSrc: "/products/capture-in-picture/app-icon.png",
      iconAlt: "Capture In Picture 앱 아이콘.",
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
