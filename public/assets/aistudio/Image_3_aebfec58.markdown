---
name: Industrial Thermal Engineering
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#43474d'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#74777e'
  outline-variant: '#c3c6ce'
  surface-tint: '#49607c'
  primary: '#001428'
  on-primary: '#ffffff'
  primary-container: '#0f2942'
  on-primary-container: '#7991af'
  inverse-primary: '#b0c9e8'
  secondary: '#006398'
  on-secondary: '#ffffff'
  secondary-container: '#5bb8fe'
  on-secondary-container: '#00476e'
  tertiary: '#290800'
  on-tertiary: '#ffffff'
  tertiary-container: '#4b1600'
  on-tertiary-container: '#f35e15'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d1e4ff'
  primary-fixed-dim: '#b0c9e8'
  on-primary-fixed: '#011d35'
  on-primary-fixed-variant: '#314863'
  secondary-fixed: '#cce5ff'
  secondary-fixed-dim: '#93ccff'
  on-secondary-fixed: '#001d31'
  on-secondary-fixed-variant: '#004b73'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb599'
  on-tertiary-fixed: '#370e00'
  on-tertiary-fixed-variant: '#7f2b00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
  display-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-technical:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.04em
  label-eyebrow:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a high-precision, corporate industrial presence tailored for large-scale B2B enterprise engineering, refrigeration, and HVAC infrastructure. It conveys rigorous safety, technical mastery, cooling efficiency, and dependable long-term partnerships.

### Target Audience & Tone
The experience serves factory plant managers, commercial facility directors, procurement executives (e.g., CP, Isuzu, retail conglomerates), and MEP engineering consultants. The visual narrative combines clinical engineering precision with heavy-duty reliability.

### Design Movement
**Modern Corporate Industrialism with Precision Tonal Structure:**
- Crisp architectural lines paired with engineered whitespace.
- Structural section headers inspired by industrial technical specification sheets, accented by high-visibility safety orange bars.
- Clear technical card framing reflecting cleanroom standards and stainless cold-storage fabrication.

## Colors

The color palette directly references the thermodynamic processes of thermal HVAC engineering—balancing cold refrigeration physics with mechanical workshop safety.

- **Deep Industrial Navy (`#0F2942`):** Primary anchor representing corporate stability, heavy machinery, structural engineering, and authoritative leadership.
- **Cooling Cyan / Hydro Blue (`#0284C7`):** Secondary tone signaling chilling cycles, fluid mechanics, fresh air circulation, and technical precision.
- **Industrial Safety Orange (`#EA580C`):** Tertiary accent directly derived from corporate branding, site safety gear, warning badges, and high-priority action targets.
- **Dark Slate Charcoal (`#0F172A`):** Neutral base ensuring maximum contrast and legibility across technical Thai and Latin typographic scripts.
- **Ice Slate & Clean White (`#F8FAFC`, `#FFFFFF`):** Background surfaces evoking hygienic cleanrooms, cold storage panels, and sterile HVAC environments.

## Typography

The type system balances technical Latin engineering terminology with bilingual Thai and English typesetting.

- **Headlines (Space Grotesk):** Provides mechanical, structured geometry suitable for industrial titles, project metrics, and engineering benchmarks.
- **Body & Captions (Plus Jakarta Sans):** Offers balanced humanism and clear legibility at scale, pairing cleanly with looped and loopless Thai system fonts like Prompt, Sarabun, and Sukhumvit Set.
- **Technical Badges & Spec Markers (JetBrains Mono):** Reserved for technical metadata, ISO standards, capacity figures (CFM, BTU, TR), and project serial identifiers.
- **Thai Language Typesetting:** Increase default line height by 10–15% for multi-tier Thai vowels and tone markers (`line-height: 1.6` for running body text).

## Layout & Spacing

A 12-column fluid grid system anchored inside a maximum container width of `1280px`.

### Grid & Breakpoints
- **Desktop (1024px+):** 12 columns with 24px (`1.5rem`) gutters and 48px (`3rem`) page padding.
- **Tablet (768px - 1023px):** 8 columns with 20px gutters and 32px side margins.
- **Mobile (< 768px):** 4 columns with 16px (`1rem`) gutters and 20px (`1.25rem`) side margins.

### Vertical Rhythm
- Standard content sections utilize `space-xl` for component separation and 80px–120px for major thematic chapter breaks.
- Technical card grids use uniform gap spacing (`space-lg`) to reflect modular mechanical blueprints.

## Elevation & Depth

Visual hierarchy uses crisp architectural surfaces rather than soft decorative shadows.

- **Flat Tonal Base:** Default containers sit directly on `#F8FAFC` or `#FFFFFF` using a 1px solid hairline border (`#E2E8F0` or `#CBD5E1`).
- **Precision Technical Lift:** Interactive cards raise via an ultra-subtle, low-opacity ambient drop (`0 4px 12px -2px rgba(15, 41, 66, 0.08)`), combined with a border shift to `#0284C7` (Cooling Cyan).
- **Industrial Contrast Surface:** Dark mode sections and service headers leverage deep `#0F2942` backdrops with inner glow borders (`rgba(255, 255, 255, 0.08)`) to emphasize heavy-machinery authority.
- **Orange Indicator Stripe:** Signature vertical accent bar (4px wide, `#EA580C`) anchored to the left border of key section headers and active proposition cards.

## Shapes

The interface utilizes structured geometric shapes with tight corner radii (`0.25rem` / 4px to 8px max).

- This soft, machined radius reflects sheet metal ductwork, AHU enclosures, and stainless refrigeration units.
- Avoid large circular or pill-shaped designs, except for small status pills and track-record badges.
- Data boxes, field inputs, and structural feature blocks retain firm geometric corners.

## Components

### Buttons
- **Primary Industrial CTA:** Deep Navy (`#0F2942`) background, crisp white typography, 4px border radius, with a safety orange bottom or side hover transition.
- **Emergency / Urgent Service Button:** Solid Safety Orange (`#EA580C`) background, white bold text, dedicated to 24/7 breakdown dispatch and quotation requests.
- **Secondary / Spec Outline:** Border 1.5px solid `#0F2942` or `#0284C7`, transparent background, dark slate text, shifting to cyan tint on hover.

### Service & Solution Cards
- Encased in white `#FFFFFF` with 1px `#E2E8F0` outline.
- Feature an overhead technical eyebrow in Cooling Cyan (`#0284C7`).
- Hover state raises the card 2px and highlights a 4px safety orange indicator mark along the left margin.

### Track Record & Case Study Grid
- 3-column modular masonry featuring high-resolution on-site installation photography.
- Industrial overlay banner across the bottom: deep translucent navy (`rgba(15, 41, 66, 0.92)`), white uppercase project client name (e.g., CP, Isuzu, KCE, Donki), and small monospaced equipment tags (e.g., `AHU-DUCT-01`, `CHILLER-EXPANSION`).

### Value Proposition Matrix (Why Choose Us)
- Numbered blocks (`01`, `02`, `03`, `04`) with bold rectangular color tabs in safety orange and engineering navy.
- High-contrast headings paired with succinct Thai capability summaries (One-Stop Service, Engineering Standard, Rapid Site Response).

### Input Fields & RFQ Forms
- Background `#FFFFFF` or `#F8FAFC`, border 1px solid `#CBD5E1`.
- Focused state applies 1.5px `#0284C7` border with zero blur glow, keeping input surfaces clean, professional, and utilitarian.