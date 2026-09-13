import type { Locale } from "@/lib/i18n";

export const studioEmail = "admin@cogicode.com";

export type ProductSlug = "capture-in-picture";

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
      slug: "capture-in-picture",
      name: "Capture In Picture",
      category: "Window capture for guides and demos",
      platform: "macOS 26.2+",
      status: "Available now",
      stage: "Open source",
      ctaLabel: "Download DMG",
      tagline: "Capture a specific app window as a PNG.",
      cardDescription:
        "Capture an app window as a PNG on your Mac. Set the window size and automate repeated captures for guides and demos.",
      heroTitle: "Window captures for every step of your guide.",
      overview:
        "Capture In Picture helps you take consistent screenshots for tutorials and demos. Choose an app window, set its size, and save it as a PNG. Use macros to repeat a sequence of actions and captures.",
      features: [
        {
          title: "Capture the window you need",
          description:
            "Choose an app window to capture and resize it beforehand to keep your screenshots consistent.",
        },
        {
          title: "Automate repeated captures",
          description:
            "Combine arrow key inputs, pauses, and captures into a macro to save each step of a sequence as a screenshot.",
        },
        {
          title: "Choose what to save and where",
          description:
            "Set how much to trim from the image edges and choose a save folder. Repeated captures use Pictures/CaptureInPicture by default.",
        },
        {
          title: "Screenshots stay on your Mac",
          description:
            "Screenshots are saved on your Mac without being uploaded by the app. Enable notifications to know when a capture finishes.",
        },
      ],
      statusNotes: [
        "Latest DMG is published on GitHub Releases",
        "Free and open source",
        "Requires macOS 26.2 or later",
      ],
      contactPrompt:
        "Email us for help, report an issue on GitHub, or read how the app handles your data.",
      pricingNote: "Free. Download the app and view its source code on GitHub.",
      contactSectionTitle: "Support and privacy",
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
      slug: "capture-in-picture",
      name: "Capture In Picture",
      category: "가이드와 데모를 위한 창 캡처",
      platform: "macOS 26.2+",
      status: "다운로드 가능",
      stage: "오픈소스",
      ctaLabel: "DMG 다운로드",
      tagline: "특정 앱 창만 골라 PNG로 저장하는 캡처 앱",
      cardDescription:
        "Mac에서 원하는 앱 창을 PNG로 저장합니다. 창 크기를 맞추고 반복 캡처를 자동화해 가이드와 데모에 쓸 스크린샷을 만들 수 있습니다.",
      heroTitle: "가이드에 필요한 화면을 한 장씩, 간편하게.",
      overview:
        "Capture In Picture는 튜토리얼과 데모에 쓸 스크린샷을 일정한 크기로 캡처하는 Mac 앱입니다. 원하는 창을 골라 크기를 맞춘 뒤 PNG로 저장하세요. 여러 동작을 차례로 실행하며 캡처하는 작업은 매크로로 반복할 수 있습니다.",
      features: [
        {
          title: "필요한 창만 캡처",
          description:
            "원하는 앱 창을 골라 캡처하세요. 캡처 전에 창 크기를 맞추면 여러 스크린샷을 같은 크기로 저장할 수 있습니다.",
        },
        {
          title: "반복 캡처를 자동으로",
          description:
            "방향키 입력, 대기, 캡처를 원하는 순서로 조합하세요. 같은 작업을 반복하며 단계별 화면을 스크린샷으로 남길 수 있습니다.",
        },
        {
          title: "저장 범위와 폴더 설정",
          description:
            "이미지 가장자리에서 잘라낼 범위와 저장할 폴더를 정할 수 있습니다. 반복 캡처의 기본 저장 위치는 Pictures/CaptureInPicture입니다.",
        },
        {
          title: "스크린샷은 내 Mac에",
          description:
            "캡처한 이미지는 앱이 외부로 업로드하지 않고 Mac에 저장합니다. 알림을 켜두면 캡처가 끝났을 때 알려줍니다.",
        },
      ],
      statusNotes: [
        "최신 DMG는 GitHub Releases에서 받을 수 있습니다",
        "무료 오픈소스 프로젝트입니다",
        "macOS 26.2 이상이 필요합니다",
      ],
      contactPrompt:
        "도움이 필요하면 이메일로 문의하거나 GitHub에 문제를 남겨주세요. 앱의 개인정보 처리방침도 아래에서 확인할 수 있습니다.",
      pricingNote: "무료입니다. 앱 다운로드와 소스 코드는 GitHub에서 확인할 수 있습니다.",
      contactSectionTitle: "도움이 필요하신가요?",
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
