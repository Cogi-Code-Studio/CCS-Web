import type { Locale } from "@/lib/i18n";

export const studioEmail = "admin@cogicode.com";
export const galaxyPomodoroAppStoreUrl =
  "https://apps.apple.com/kr/app/%EC%9D%80%ED%95%98-%EB%BD%80%EB%AA%A8%EB%8F%84%EB%A1%9C-%EC%9A%B0%EC%A3%BC%EB%A5%BC-%EB%A7%8C%EB%93%A4%EC%96%B4-%EA%B0%80%EC%84%B8%EC%9A%94/id6759478885";

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
      platform: "iPhone, iPad, Mac",
      status: "Available now",
      stage: "App Store",
      ctaLabel: "View on App Store",
      tagline: "A released pomodoro timer with orbit-based task structure.",
      cardDescription:
        "Manage goals as planets, tasks as satellites, and keep focus sessions, daily goals, and progress charts in one Apple-first flow.",
      heroTitle: "Pomodoro, but built around your project structure.",
      overview:
        "Galaxy Pomodoro turns big goals into planets and detailed tasks into satellites, so your work stays readable while focus sessions, presets, notifications, and progress charts keep your routine moving.",
      features: [
        {
          title: "Planet-and-satellite planning",
          description:
            "Break goals into a visual orbit system where planets hold the bigger direction and satellites keep the next task clear.",
        },
        {
          title: "Recorded focus sessions",
          description:
            "Pick a satellite, start a timer, and let completed sessions build a task-level focus history with daily and weekly summaries.",
        },
        {
          title: "Apple ecosystem flow",
          description:
            "Use presets, alerts, completion sounds, background restoration, iCloud sync, and Live Activities on supported devices.",
        },
      ],
      statusNotes: [
        "Available on the App Store",
        "Free to download",
        "Supports iCloud sync",
      ],
      contactPrompt:
        "Ready to build your own little universe of focus? Start from the App Store or read the app privacy policy below.",
      pricingNote: "Free on the App Store.",
      contactSectionTitle: "Download, support, and privacy.",
      heroActions: [
        {
          label: "View on App Store",
          href: galaxyPomodoroAppStoreUrl,
        },
      ],
      contactActions: [
        {
          label: "Privacy Policy",
          href: "/products/galaxy-pomodoro/privacy",
          tone: "ghost",
        },
      ],
      iconSrc: "/products/galaxy-pomodoro/app-icon.png",
      iconAlt: "Galaxy Pomodoro app icon.",
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
      name: "은하 뽀모도로",
      category: "포커스 타이머",
      platform: "iPhone, iPad, Mac",
      status: "사용 가능",
      stage: "App Store 출시",
      ctaLabel: "App Store에서 보기",
      tagline: "행성과 위성 구조를 가진 출시된 뽀모도로 앱",
      cardDescription:
        "큰 목표는 행성으로, 세부 작업은 위성으로 정리하고 집중 세션, 일일 목표, 진행 차트를 한 흐름으로 관리하는 Apple 중심 뽀모도로 앱입니다.",
      heroTitle: "일의 우주를 만들어 가는 뽀모도로.",
      overview:
        "은하 뽀모도로는 큰 목표를 행성으로, 세부 작업을 위성으로 다뤄서 해야 할 일을 더 선명하게 정리하고 집중한 시간을 꾸준히 기록할 수 있도록 돕습니다.",
      features: [
        {
          title: "행성-위성 구조 설계",
          description:
            "큰 목표와 세부 작업을 시각적인 궤도 구조로 묶어 복잡한 할 일을 더 직관적으로 정리할 수 있습니다.",
        },
        {
          title: "자동으로 기록되는 집중 세션",
          description:
            "집중할 위성을 선택하고 타이머를 시작하면 세션이 자동으로 기록되어 작업별 집중 시간을 확인할 수 있습니다.",
        },
        {
          title: "Apple 생태계에 맞춘 흐름",
          description:
            "프리셋, 알림, 완료 사운드, 백그라운드 복원, iCloud 동기화, 지원 기기의 Live Activity까지 자연스럽게 이어집니다.",
        },
      ],
      statusNotes: [
        "App Store에서 무료 제공",
        "iCloud 동기화 지원",
        "iOS 18 이상 필요",
      ],
      contactPrompt:
        "나만의 집중 우주를 만들어 보고 싶다면 App Store에서 바로 시작하거나 앱 개인정보 처리방침을 확인해 주세요.",
      pricingNote: "App Store에서 무료로 받을 수 있습니다.",
      contactSectionTitle: "다운로드, 지원, 개인정보 안내.",
      heroActions: [
        {
          label: "App Store에서 보기",
          href: galaxyPomodoroAppStoreUrl,
        },
      ],
      contactActions: [
        {
          label: "개인정보 처리방침",
          href: "/products/galaxy-pomodoro/privacy",
          tone: "ghost",
        },
      ],
      iconSrc: "/products/galaxy-pomodoro/app-icon.png",
      iconAlt: "은하 뽀모도로 앱 아이콘.",
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
