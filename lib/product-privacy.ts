import type { Locale } from "@/lib/i18n";

export const captureInPicturePrivacyPath = "/products/capture-in-picture/privacy";

type PrivacySection = {
  title: string;
  paragraphs: string[];
};

type ProductPrivacyDocument = {
  breadcrumbLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  updatedAt: string;
  summaryTitle: string;
  summary: string;
  sections: PrivacySection[];
  contactTitle: string;
  contactDescription: string;
};

const captureInPicturePrivacyByLocale: Record<Locale, ProductPrivacyDocument> = {
  en: {
    breadcrumbLabel: "Back to Capture In Picture",
    eyebrow: "App Privacy",
    title: "Capture In Picture Privacy Policy",
    description:
      "A public privacy policy for the Capture In Picture macOS app, based on the app's current permissions, local storage behavior, and support flow.",
    updatedAt: "Effective April 6, 2026",
    summaryTitle: "Quick summary",
    summary:
      "Capture In Picture does not require an account and does not collect personal information, analytics events, advertising identifiers, or captured screenshots on the developer's servers. The app works primarily on-device and only makes limited network requests when you manually check for updates or choose to contact support.",
    sections: [
      {
        title: "Data we do not collect",
        paragraphs: [
          "Capture In Picture does not ask you to create an account, sign in, or submit personal profile information in order to use the app.",
          "We do not collect analytics events, advertising identifiers, crash reporting data, contact lists, photo libraries, or the screenshots you capture through the app on our servers.",
        ],
      },
      {
        title: "Permissions used by the app",
        paragraphs: [
          "The app requests Screen Recording permission so it can list available windows and capture screenshots of the window you choose.",
          "The app requests Accessibility permission only for features that focus another app window, resize it, or send macro key input during repeat capture workflows.",
          "Notification permission is optional and is used only to show local macOS notifications when a capture or repeat capture finishes.",
        ],
      },
      {
        title: "Information stored on your device",
        paragraphs: [
          "The app stores a small set of local preferences on your Mac, including onboarding state, notification onboarding acknowledgement, capture inset values, the selected output folder bookmark, macro steps, and whether repeat capture should start with an immediate capture.",
          "Captured screenshots are saved locally to the folder you choose. If you use repeat capture without choosing a custom folder, the app creates a folder inside your Pictures directory named CaptureInPicture.",
        ],
      },
      {
        title: "Captured content",
        paragraphs: [
          "The screenshots you capture may contain personal, confidential, or sensitive information depending on what is visible in the selected window.",
          "Those screenshots are processed on-device and are not uploaded or transmitted by the app to the developer.",
        ],
      },
      {
        title: "Network requests and third parties",
        paragraphs: [
          "If you choose Check Latest Version inside the app, Capture In Picture sends a request to the GitHub API to compare your installed build with the latest published release or tag.",
          "That request may expose limited technical information such as your IP address and User-Agent to GitHub as part of normal internet communication. We do not use analytics or advertising SDKs, and we do not build a user profile from that request.",
          "If you choose to contact support, the app opens your default mail app with a prefilled email draft. Any information you send is then handled by your email provider and by us for support purposes.",
        ],
      },
      {
        title: "Retention and deletion",
        paragraphs: [
          "Because screenshots and settings are stored locally, you can delete captured files directly from the folder where they were saved.",
          "You can clear the saved output folder inside the app, reset macro settings, or remove the app's locally stored preferences from your Mac if you want to remove remaining on-device app data.",
          "If you contact us by email and later want that correspondence deleted, you can request deletion at the contact address below.",
        ],
      },
      {
        title: "Changes to this policy",
        paragraphs: [
          "If Capture In Picture adds new data features in the future, this policy will be updated before or when those changes take effect.",
          "Any updated version will include a revised effective date on this page.",
        ],
      },
    ],
    contactTitle: "Privacy contact",
    contactDescription:
      "For privacy questions or deletion requests related to support emails, contact admin@cogicode.com.",
  },
  ko: {
    breadcrumbLabel: "Capture In Picture로 돌아가기",
    eyebrow: "앱 개인정보",
    title: "Capture In Picture 개인정보 처리방침",
    description:
      "Capture In Picture macOS 앱의 현재 권한 사용, 로컬 저장 방식, 지원 흐름을 기준으로 정리한 공개용 개인정보 처리방침입니다.",
    updatedAt: "시행일: 2026년 4월 6일",
    summaryTitle: "요약",
    summary:
      "Capture In Picture는 계정을 요구하지 않으며, 개발자 서버로 개인정보, 분석 이벤트, 광고 식별자, 캡처 스크린샷을 수집하지 않습니다. 앱은 대부분 기기 내부에서 동작하고, 사용자가 직접 업데이트 확인이나 지원 문의를 선택할 때만 제한적인 네트워크 요청이 발생합니다.",
    sections: [
      {
        title: "수집하지 않는 정보",
        paragraphs: [
          "Capture In Picture는 앱 사용을 위해 계정 생성이나 로그인을 요구하지 않으며, 프로필 정보 입력도 받지 않습니다.",
          "앱은 개발자 서버로 분석 이벤트, 광고 식별자, 충돌 리포트, 연락처, 사진 보관함, 그리고 사용자가 캡처한 스크린샷 자체를 수집하지 않습니다.",
        ],
      },
      {
        title: "앱이 사용하는 권한",
        paragraphs: [
          "앱은 사용자가 선택한 창을 나열하고 스크린샷을 캡처하기 위해 화면 기록 권한을 요청합니다.",
          "손쉬운 사용 권한은 다른 앱 창에 포커스를 맞추거나 크기를 조정하고, 반복 캡처 중 매크로 키 입력을 보내는 기능에만 사용됩니다.",
          "알림 권한은 선택 사항이며, 캡처 또는 반복 캡처 완료 시 로컬 macOS 알림을 보여주기 위해서만 사용됩니다.",
        ],
      },
      {
        title: "기기에 저장되는 정보",
        paragraphs: [
          "앱은 온보딩 완료 여부, 알림 온보딩 확인 여부, 캡처 인셋 값, 선택한 저장 폴더 북마크, 매크로 단계, 반복 캡처 시작 방식 같은 소량의 설정 정보를 사용자의 Mac에 로컬 저장합니다.",
          "캡처된 스크린샷은 사용자가 지정한 폴더에 로컬 저장됩니다. 반복 캡처에서 별도 저장 폴더를 지정하지 않으면, 앱은 Pictures 디렉터리 아래 CaptureInPicture 폴더를 만들어 사용합니다.",
        ],
      },
      {
        title: "캡처 콘텐츠",
        paragraphs: [
          "사용자가 캡처하는 스크린샷에는 선택한 창에 표시된 개인 정보, 기밀 정보, 민감 정보가 포함될 수 있습니다.",
          "이 스크린샷은 기기 내부에서만 처리되며, 앱이 개발자에게 업로드하거나 전송하지 않습니다.",
        ],
      },
      {
        title: "네트워크 요청 및 제3자 서비스",
        paragraphs: [
          "앱 안에서 최신 버전 확인을 실행하면, Capture In Picture는 설치된 빌드와 최신 공개 릴리스 또는 태그를 비교하기 위해 GitHub API에 요청을 보냅니다.",
          "이 과정에서 일반적인 인터넷 통신 범위 안에서 IP 주소나 User-Agent 같은 제한적인 기술 정보가 GitHub에 전달될 수 있습니다. 앱은 분석 SDK나 광고 SDK를 사용하지 않으며, 이 요청을 바탕으로 사용자 프로필을 만들지 않습니다.",
          "지원 문의를 선택하면 앱은 기본 메일 앱에 미리 채워진 초안 메일을 엽니다. 실제로 전송하는 정보는 사용자의 이메일 제공업체와 개발자가 지원 응답 목적으로 처리하게 됩니다.",
        ],
      },
      {
        title: "보관 및 삭제",
        paragraphs: [
          "스크린샷과 설정은 로컬에 저장되므로, 캡처 파일은 저장된 폴더에서 사용자가 직접 삭제할 수 있습니다.",
          "저장 폴더 설정은 앱 안에서 해제할 수 있고, 매크로 설정은 초기화할 수 있으며, Mac에서 앱의 로컬 환경설정을 제거하면 남아 있는 기기 내 앱 데이터를 정리할 수 있습니다.",
          "이메일 문의 내역 삭제를 원하시면 아래 연락처로 요청할 수 있습니다.",
        ],
      },
      {
        title: "방침 변경",
        paragraphs: [
          "앞으로 Capture In Picture에 새로운 데이터 처리 기능이 추가되면, 그 변경 사항이 적용되기 전 또는 적용 시점에 맞춰 이 방침을 업데이트합니다.",
          "업데이트된 문서에는 이 페이지에 새로운 시행일이 함께 표시됩니다.",
        ],
      },
    ],
    contactTitle: "개인정보 문의",
    contactDescription:
      "개인정보 관련 문의나 지원 메일 삭제 요청은 admin@cogicode.com 으로 보내 주세요.",
  },
};

export function getCaptureInPicturePrivacy(locale: Locale) {
  return captureInPicturePrivacyByLocale[locale];
}
