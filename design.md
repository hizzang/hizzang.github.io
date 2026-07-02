# hizzang Personal Brand — Design System

> Spotify 웹 인터페이스에서 영감을 받은 다크 테마 디자인 시스템.  
> 콘텐츠가 색을 제공하고, UI는 그림자 속으로 물러나는 **content-first darkness** 철학을 따릅니다.

---

## 1. Visual Theme & Atmosphere

Spotify의 웹 인터페이스는 거의 검은색(`#121212`, `#181818`, `#1f1f1f`) 코쿤 안에 청취자를 감싸는 몰입형 다크 뮤직 플레이어입니다. 앨범 아트와 콘텐츠가 주요 색상 원천이 되며, UI는 그림자 속으로 물러납니다.

개인 브랜드 사이트에서는 **프로젝트 썸네일, 아이콘, 프로필 아바타**가 앨범 아트 역할을 합니다. UI 자체는 무채색이며, Spotify Green(`#1ed760`)은 CTA·활성 상태·강조 링크에만 사용합니다.

**핵심 특성**

- Near-black 몰입형 다크 테마 (`#121212`–`#1f1f1f`)
- Spotify Green (`#1ed760`) — 기능적 강조에만 사용
- Pill 버튼 (500px–9999px) + 원형 컨트롤 (50%)
- 버튼 라벨: uppercase + 넓은 letter-spacing (1.4px–2px)
- 다크 배경용 무거운 그림자 (`rgba(0,0,0,0.3–0.5)`)
- 컴팩트 타이포그래피 (10px–24px)

---

## 2. Color Palette & CSS Variables

### Primary Brand

| Token | Value | Role |
|-------|-------|------|
| `--bg` | `#121212` | 페이지 최하단 배경 |
| `--surface` | `#181818` | 카드, 컨테이너 |
| `--surface-mid` | `#1f1f1f` | 버튼, 인터랙티브 표면 |
| `--accent` | `#1ed760` | CTA, 활성 상태, 강조 |
| `--accent-border` | `#1db954` | Green accent border |

### Text

| Token | Value | Role |
|-------|-------|------|
| `--text` | `#ffffff` | 기본 텍스트 |
| `--muted` | `#b3b3b3` | 보조 텍스트, 비활성 nav |
| `--text-bright` | `#cbcbcb` | 약간 밝은 보조 텍스트 |
| `--text-emphasis` | `#fdfdfd` | 최대 강조 |

### Semantic

| Token | Value | Role |
|-------|-------|------|
| `--text-negative` | `#f3727f` | 에러 |
| `--text-warning` | `#ffa42b` | 경고 |
| `--text-announcement` | `#539df5` | 정보 |

### Surface & Border

| Token | Value | Role |
|-------|-------|------|
| `--surface-card` | `#252525` | Elevated card |
| `--surface-card-alt` | `#272727` | Alternate card |
| `--border-gray` | `#4d4d4d` | 다크 버튼 border |
| `--border-light` | `#7c7c7c` | Outlined 버튼 border |
| `--line` | `#282828` | 구분선 (사이트 내부) |
| `--separator` | `#b3b3b3` | Divider |

### Shadows

| Token | Value | Use |
|-------|-------|-----|
| `--shadow` | `rgba(0,0,0,0.3) 0px 8px 8px` | 카드, 드롭다운 |
| `--shadow-lg` | `rgba(0,0,0,0.5) 0px 8px 24px` | 다이얼로그, 모달 |
| `--shadow-inset` | `rgb(18,18,18) 0px 1px 0px, rgb(124,124,124) 0px 0px 0px 1px inset` | Input border |

---

## 3. Typography

### Font Stack

SpotifyMixUI / CircularSp는 프로prietary 폰트이므로, 동일한 fallback 스택을 사용합니다.

```css
--font-ui: "Helvetica Neue", helvetica, arial, "Noto Sans KR", "Hiragino Sans",
           "Hiragino Kaku Gothic ProN", Meiryo, "MS Gothic", sans-serif;
--font-title: var(--font-ui);
```

### Hierarchy

| Role | Size | Weight | Letter Spacing | Notes |
|------|------|--------|----------------|-------|
| Hero Title | clamp(40px, 6vw, 68px) | 700 | normal | 섹션 히어로 |
| Section Title | 24px (1.50rem) | 700 | normal | h2 |
| Feature Heading | 18px (1.13rem) | 600 | normal | h3 |
| Body | 16px (1.00rem) | 400 | normal | 본문 |
| Body Bold | 16px (1.00rem) | 700 | normal | 강조 본문 |
| Button Uppercase | 14px (0.88rem) | 700 | 1.4px | `text-transform: uppercase` |
| Nav Link Active | 14px (0.88rem) | 700 | normal | 활성 nav |
| Nav Link | 14px (0.88rem) | 400 | normal | 비활성 nav |
| Caption | 14px (0.88rem) | 400 | normal | 메타데이터 |
| Small / Eyebrow | 12px (0.75rem) | 700 | 0.16em | 태그, eyebrow |
| Badge / Tag | 12px (0.75rem) | 600 | normal | pill 태그 |

### Principles

- **Bold/regular 이분법**: 700 vs 400으로 계층 구분
- **Uppercase 버튼**: 시스템 라벨 느낌
- **컴팩트 사이징**: 10px–24px 범위
- **line-height**: 본문 1.5, 제목 1.2 (tight)

---

## 4. Components

### Buttons

**Primary Pill (Green CTA)**
- Background: `#1ed760`
- Text: `#000000`
- Padding: 8px 32px
- Radius: 9999px
- Font: 14px, weight 700, uppercase, letter-spacing 1.4px
- Use: 주요 CTA (GitHub 방문, About Me)

**Dark Pill (Secondary)**
- Background: `#1f1f1f`
- Text: `#ffffff`
- Padding: 8px 16px
- Radius: 9999px
- Use: 보조 액션

**Outlined Pill**
- Background: transparent
- Text: `#ffffff`
- Border: `1px solid #7c7c7c`
- Radius: 9999px
- Use: Ghost 버튼, Follow 스타일

### Cards

- Background: `#181818` or `#1f1f1f`
- Radius: 8px
- Border: none (shadow로 elevation)
- Hover: background → `#252525`, shadow `--shadow-lg`
- No visible borders on most cards

### Tags

- Background: `#282828`
- Text: `#b3b3b3`
- Radius: 9999px
- Padding: 4px 12px
- Font: 12px, weight 600

### Navigation

- Header background: `#121212` (sticky)
- Active items: 14px weight 700, `#ffffff`
- Inactive: 14px weight 400, `#b3b3b3`
- Brand mark: circular, `#1ed760` background, `#000000` text
- CTA pill: Green primary

### Profile Card (Hero)

- Background: `#181818`
- Radius: 8px
- Shadow: `--shadow-lg`
- Avatar: circular (50%), `#1ed760` background
- Highlight stats: `#252525` nested cards

---

## 5. Layout & Spacing

### Spacing Scale (8px base)

`4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px, 72px, 88px`

### Container

- Max-width: 1080px
- Padding: 24px horizontal
- Section vertical: 72px–88px

### Border Radius Scale

| Size | Value | Use |
|------|-------|-----|
| Minimal | 2px | Badges |
| Subtle | 4px | Small elements |
| Standard | 6–8px | Cards, album art |
| Pill | 500px–9999px | Buttons, search |
| Circle | 50% | Avatar, play buttons |

---

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Base (0) | `#121212` | Page background |
| Surface (1) | `#181818` / `#1f1f1f` | Cards, sidebar |
| Elevated (2) | `0.3 opacity shadow` | Hover cards |
| Dialog (3) | `0.5 opacity shadow` | Modals, CTA panel |
| Inset | inset border-shadow | Inputs |

---

## 7. Page-Specific Notes

### Home (`index.astro`)
- Hero: full-width dark immersive, no gradient color — achromatic only
- Green accent on hero headline span and primary buttons only
- Profile card as elevated surface

### About / Projects / Blog
- Page hero: `#181818` surface strip, no light gradient
- Cards on `#121212` background

### Games (`/games/chef-defenders/`)
- **별도 테마 유지** — 게임 브랜드 전용 컬러 팔레트 (`.page-game` 스코프)
- Spotify 시스템과 분리

---

## 8. Responsive Breakpoints

| Name | Width | Changes |
|------|-------|---------|
| Mobile | <760px | Single column grid, stacked nav |
| Tablet | 760–960px | 2-column grid |
| Desktop | >960px | 3-column grid, full layout |

---

## 9. Do's and Don'ts

### Do

- Near-black 배경 (`#121212`–`#1f1f1f`) 사용
- Green은 CTA·활성 상태·강조에만
- 모든 버튼 pill 형태
- 버튼 uppercase + letter-spacing 1.4px
- 다크 배경에 무거운 그림자
- 콘텐츠(아이콘, 아바타)가 색 제공

### Don't

- Green을 배경이나 장식에 사용하지 않음
- 라이트 배경을 주요 surface로 사용하지 않음
- 사각 버튼 사용하지 않음
- 얇은 그림자 — 다크에서 보이지 않음
- 추가 브랜드 컬러 도입하지 않음

---

## 10. Quick Reference

```
Background:  #121212
Surface:     #181818
Interactive: #1f1f1f
Card hover:  #252525
Text:        #ffffff
Secondary:   #b3b3b3
Accent:      #1ed760
Border:      #7c7c7c
Error:       #f3727f
```

### Example Prompts

- "Create a dark card: #181818 background, 8px radius. Title 16px weight 700 white. Subtitle 14px weight 400 #b3b3b3. Shadow on hover."
- "Design a pill button: #1f1f1f background, white text, 9999px radius, uppercase 1.4px tracking."
- "Build a circular avatar: #1ed760 background, #000000 text, 50% radius."
- "Design navigation: #121212 background. Active 700 white, inactive 400 #b3b3b3."
