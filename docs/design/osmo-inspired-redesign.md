# Cogi Code Studio Osmo-Inspired Redesign Spec

## Purpose

`https://www.osmo.supply`의 인상은 참고하되, Cogi Code Studio를 Osmo처럼 보이게 복제하지 않는다. 목표는 현재의 픽셀 레트로 웹사이트를 더 현대적인 creative software studio 톤으로 재정리하는 것이다.

이 문서는 구현 전 합의를 위한 설계 초안이다. 코드 변경은 별도 단계에서 진행한다.

## Reference Reading

Osmo에서 가져올 요소:

- 초대형 타이포그래피로 첫 화면의 인상을 만든다.
- pill 형태의 버튼, 태그, 내비게이션으로 부드러운 인터페이스를 만든다.
- 제품/리소스를 가로 레일과 카드로 보여준다.
- 이미지와 모션이 정보 구조의 일부처럼 작동한다.
- 무채색 기반 구조 위에 Cogi 로고 이미지의 rust, golden orange, warm cream을 포인트 컬러로 얹는다.

Osmo에서 그대로 가져오지 않을 요소:

- 멤버십, 강의, 리소스 플랫폼처럼 보이는 정보 구조
- 과한 Webflow/creative developer 문법
- 모든 영역에 강한 애니메이션을 넣는 방식
- 커스텀 커서, 복잡한 전환, 무거운 GSAP급 상호작용

## Product Fit

Cogi Code Studio는 현재 하나의 공개 제품을 중심으로 구성되어 있다.

- `Capture In Picture`: macOS 문서화/캡처 유틸리티

따라서 디자인 방향은 "creative toolkit membership"보다 "작지만 잘 만든 Apple-first indie software studio"가 적합하다.

## Design Direction

### One-Line Direction

Warm indie software studio with bold creative-dev energy.

### Keywords

- bold
- tactile
- warm
- product-forward
- Apple-first
- playful but polished
- less pixel, more motion

### Mood Shift

현재:

- dark pixel game
- hard borders
- blocky shadows
- retro display typography
- dense decorative grid

변경:

- dark warm neutral studio
- thin borders
- rounded surfaces
- oversized clean typography
- selective orbit/product motion
- stronger product imagery

## Design Principles

### 1. Brand First

홈 첫 뷰포트에서 `Cogi Code Studio`가 작게만 보이면 안 된다. 히어로의 가장 큰 신호는 브랜드명 또는 스튜디오의 직접적인 제안이어야 한다.

권장 히어로 문장:

- `Cogi Code Studio`
- `Small Apple-first tools, made with more feeling.`
- 한국어: `작지만 기분 좋은 Apple-first 소프트웨어.`

### 2. Product As Visual Anchor

현재 보유한 제품 아이콘을 적극적으로 사용한다. Osmo가 리소스 썸네일과 쇼케이스 이미지를 강하게 쓰는 것처럼, Cogi는 앱 아이콘과 제품 mock UI가 첫 화면에서 보여야 한다.

### 3. Pixel As Accent

픽셀은 브랜드의 조미료로 남긴다. 큰 카드 테두리, 모든 버튼, 모든 그림자에 픽셀 문법을 쓰는 것은 줄인다.

픽셀 유지 위치:

- 작은 divider
- 제품 mockup 내부의 micro detail
- 일부 badge
- 404 페이지나 easter egg 성격의 장식

### 4. Motion With Restraint

Osmo의 핵심은 모션감이지만, 이 프로젝트에서는 성능과 구현 단순성을 우선한다.

권장:

- hover label slide
- product card lift/tilt
- subtle marquee
- background orbit rotation
- image parallax 느낌의 transform

보류:

- custom cursor
- full page transition
- scroll hijacking
- heavy GSAP dependency

## Design Tokens

### Color Palette

무채색은 Osmo의 neutral scale 구조를 참고하되, 실제 포인트 컬러는 Cogi 로고 이미지에서 가져온 warm rust, golden orange, cream 계열을 사용한다.

```css
:root {
  --palette-ink-950: #21110d;
  --palette-ink-900: #321912;
  --palette-ink-850: #432117;
  --palette-ink-800: #5a281b;
  --palette-stone-700: #6f3b2a;
  --palette-stone-550: #a45a36;
  --palette-paper-100: #fff1d2;
  --palette-paper-200: #ffd993;

  --palette-rust: #a33a28;
  --palette-rust-deep: #7e2c22;
  --palette-gold: #f4a51c;
  --palette-honey: #ffc24b;
  --palette-cream: #ffdc98;
  --palette-brown: #3a2118;

  --background: var(--palette-ink-950);
  --foreground: var(--palette-paper-100);
  --surface-canvas: var(--palette-ink-950);
  --surface-panel: var(--palette-ink-900);
  --surface-panel-raised: var(--palette-ink-850);
  --surface-muted: rgba(247, 244, 239, 0.08);
  --surface-subtle: rgba(247, 244, 239, 0.045);

  --text-primary: var(--palette-paper-100);
  --text-secondary: rgba(247, 244, 239, 0.72);
  --text-muted: rgba(247, 244, 239, 0.52);
  --text-inverse: var(--palette-ink-950);

  --accent-primary: var(--palette-gold);
  --accent-secondary: var(--palette-rust);
  --accent-tertiary: var(--palette-honey);
  --accent-cool: var(--palette-cream);

  --border-strong: rgba(247, 244, 239, 0.28);
  --border-soft: rgba(247, 244, 239, 0.14);
  --border-hairline: rgba(247, 244, 239, 0.08);
}
```

### Color Usage

- Page background: `--background`
- Main text: `--text-primary`
- Body copy: `--text-secondary`
- Primary CTA: `--accent-primary`
- Secondary CTA / alert / launch state: `--accent-secondary`
- Capture In Picture accent: `--accent-cool` + `--accent-secondary`
- Brand/logo accent: `--accent-primary` on dark rust surfaces

### Typography

현재 Pretendard는 한국어/영어 모두 안정적이므로 유지한다. 기존 `Cafe24ProUp` 중심의 레트로 display는 축소하거나 제거한다.

```css
:root {
  --font-token-body: "Pretendard";
  --font-token-display: "Pretendard";
  --font-token-code: var(--font-ibm-plex-mono);

  --text-hero: clamp(4rem, 11vw, 10rem);
  --text-display: clamp(3rem, 7vw, 7rem);
  --text-section: clamp(2.25rem, 4.5vw, 4.5rem);
  --text-card-title: clamp(1.5rem, 2vw, 2.25rem);
  --text-body: 1rem;
  --text-small: 0.8125rem;
  --text-micro: 0.6875rem;
}
```

타이포 원칙:

- hero는 아주 크게, 내부 카드 제목은 과하지 않게
- 한국어에서는 letter spacing을 거의 쓰지 않는다.
- 영어 eyebrow/tag에만 uppercase와 tracking을 제한적으로 사용한다.

### Radius

```css
:root {
  --radius-pill: 999px;
  --radius-xl: 2rem;
  --radius-lg: 1.25rem;
  --radius-md: 0.875rem;
  --radius-sm: 0.5rem;
}
```

사용 원칙:

- Button/tag/nav: `--radius-pill`
- Product card: `--radius-xl`
- Inner panel/mockup: `--radius-lg`
- Small controls: `--radius-md`

### Spacing

```css
:root {
  --container-max: 86rem;
  --container-padding: clamp(1rem, 3vw, 2.5rem);
  --section-gap: clamp(5rem, 10vw, 9rem);
  --panel-padding: clamp(1.25rem, 2.4vw, 2rem);
  --grid-gap: clamp(1rem, 2vw, 1.5rem);
}
```

### Motion

Osmo의 긴 easing 감각을 참고하되 CSS transition 중심으로 시작한다.

```css
:root {
  --ease-expressive: cubic-bezier(0.625, 0.05, 0, 1);
  --duration-fast: 150ms;
  --duration-base: 300ms;
  --duration-slow: 600ms;
  --motion-default: var(--duration-slow) var(--ease-expressive);
  --motion-quick: var(--duration-base) var(--ease-expressive);
}
```

권장 인터랙션:

- Button hover: label translateY or slight rotate
- Card hover: `translateY(-0.35rem)` and image scale `1.04`
- Product rail: horizontal snap
- Hero visual: slow orbit rotation, `prefers-reduced-motion` 대응

## Component Mapping

### Current To New

| Current | New | Direction |
| --- | --- | --- |
| `PixelButton` | `Button` | pill, smoother hover, no hard pixel shadow |
| `PixelBadge` | `Tag` | capsule tag, product/status tones |
| `pixel-card` | `surface-card` / `ProductCard` | rounded panel, thin border |
| `pixel-window` | `MockWindow` | product UI mockup frame only |
| `BrandPanel` | `HeroVisual` | app icons, orbit lines, product motion |
| `ProductMockup` | `ProductPreview` | more polished, less blocky |
| `SectionHeading` | keep | update scale and spacing |

### New Component Ideas

#### `HeroVisual`

Purpose:

- 홈 첫 화면의 오른쪽 또는 하단에서 제품 아이콘과 orbit motif를 보여준다.

Structure:

- large circular orbit lines
- Capture In Picture icon
- small moving tags: `Focus`, `Capture`, `Apple-first`

#### `ProductRail`

Purpose:

- Osmo의 resource card rail 감각을 Cogi 제품 쇼케이스로 번역한다.

Behavior:

- mobile: horizontal scroll snap
- desktop: 2 cards + optional feature card
- hover: image scale, accent glow, CTA reveal

#### `StudioMarquee`

Purpose:

- Osmo의 반복 텍스트 에너지를 작게 가져온다.

Copy ideas:

- `Small tools`
- `Apple-first`
- `Less friction`
- `More feeling`
- `Made by Cogi Code Studio`

## Home Page Structure

### 1. Header

Layout:

- left: `Cogi Code Studio` wordmark
- center/right: `Products`, `Contact`
- right: language toggle

Style:

- floating pill nav
- subtle translucent background
- thin border

### 2. Hero

Content:

- eyebrow: `Cogi Code Studio`
- h1: `Small Apple-first tools, made with more feeling.`
- Korean h1: `작지만 기분 좋은 Apple-first 소프트웨어.`
- description: 현재 카피를 더 짧고 직접적으로 정리
- CTA: `제품 보기`, `문의하기`

Visual:

- full-width hero layout
- giant typography
- product icon orbit visual
- first viewport 아래에 product rail의 일부가 보이게 구성

### 3. Product Rail

Cards:

- Capture In Picture
- optional studio/process card

Each card:

- app icon or preview image
- product status tag
- platform tag
- one-line value proposition
- primary CTA

### 4. Studio Note

Purpose:

- Cogi의 철학을 짧게 보여주는 영역

Possible copy:

- `Useful software, but never sterile.`
- `기능은 선명하게, 감성은 한 스푼만.`

### 5. Contact CTA

Style:

- large rounded section
- direct email CTA
- privacy link remains in footer

## Product Detail Structure

### 1. Product Hero

- app icon / product preview
- product name
- platform/status/stage tags
- hero title
- overview
- primary external CTA

### 2. Quick Facts

- platform
- status
- pricing
- privacy/support link

### 3. Feature Grid

- 2-column desktop
- single-column mobile
- each card has product-specific accent

### 4. Product Preview

- Capture: selected window / capture controls visual

### 5. Related Product

- smaller product card
- no heavy nested card layout

## Accessibility Requirements

- 모든 interactive element는 `:focus-visible`을 가진다.
- CTA 색 대비는 WCAG AA를 목표로 한다.
- `prefers-reduced-motion: reduce`에서 marquee/orbit animation을 중지한다.
- 버튼 텍스트는 mobile width에서 줄바꿈 또는 min-width로 깨짐을 방지한다.
- 아이콘/이미지는 의미 있는 경우 alt를 제공하고, 장식이면 빈 alt 처리한다.

## Implementation Checklist

구현 단계에서는 아래 순서로 진행한다.

1. Next.js 16 관련 문서를 `node_modules/next/dist/docs/`에서 먼저 확인한다.
2. `app/globals.css`의 토큰을 새 디자인 방향으로 정리한다.
3. 기존 pixel utility class를 새 surface/button/tag utility로 교체한다.
4. `components/site-shell.tsx`의 컴포넌트를 새 이름과 구조로 정리한다.
5. `app/page.tsx`의 홈 구조를 hero, product rail, studio note, contact CTA 순서로 재배치한다.
6. `app/products/[slug]/page.tsx`의 상세 페이지를 새 토큰과 컴포넌트로 맞춘다.
7. 모바일/데스크톱 레이아웃을 확인한다.
8. `pnpm lint`를 실행한다.
9. `pnpm exec tsc --noEmit` 또는 `pnpm build`로 타입 확인을 마무리한다.

## Open Questions

구현 전에 결정하면 좋은 것들:

1. 픽셀 감성을 어느 정도 남길지
   - A: 거의 제거하고 현대적인 creative studio로 전환
   - B: 버튼/카드는 현대화하되 mockup 내부에 픽셀 감성 유지
   - C: 현재 픽셀 정체성을 꽤 남기고 Osmo식 모션만 추가

2. 히어로 문구 방향
   - A: 브랜드 중심: `Cogi Code Studio`
   - B: 제품 가치 중심: `Small Apple-first tools, made with more feeling.`
   - C: 한국어 중심: `작지만 기분 좋은 Apple-first 소프트웨어.`

3. 메인 컬러
   - A: Cogi 로고의 golden orange 중심
   - B: Cogi 로고의 rust 중심
   - C: golden orange를 기본으로 쓰고 제품별 보조색만 분리

4. 이미지 전략
   - A: 현재 앱 아이콘 중심
   - B: CSS/HTML mockup 중심
   - C: 제품별 실제 스크린샷 또는 생성 이미지 추가

## Recommendation

초기 구현안은 다음 조합을 추천한다.

- 픽셀 감성: B
- 히어로 문구: B, 단 브랜드명을 가장 큰 시각 요소 중 하나로 유지
- 메인 컬러: Cogi 로고의 golden orange + rust/cream 보조색
- 이미지 전략: A + B

이 조합은 Osmo의 에너지와 Cogi의 따뜻한 제품 스튜디오 정체성을 동시에 살리면서, 구현 범위도 과하게 커지지 않는다.
