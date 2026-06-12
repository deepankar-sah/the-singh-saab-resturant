---
version: '1.0'
name: The Singh Saab | Fine Dining Restaurant — Brand Design System
description: Complete design system for The Singh Saab, a fine-dining multi-cuisine
  restaurant in Mango, Jamshedpur. Identity built around the iconic Sikh turban +
  beard silhouette mark, rendered in warm gold on black. Covers colors, typography,
  layout, components, and motion for web, menu, and marketing collateral. Premium,
  masculine, regal — 'every texture chosen with intent, every detail built with soul'.
colors:
  primary: '#D4AF37'
  secondary: '#0A0A0A'
  tertiary: '#B8860B'
  neutral: '#8A8A8A'
  background: '#0F0F0F'
  surface: '#1A1A1A'
  text-primary: '#F5F0E1'
  text-secondary: '#C9B896'
  border: '#3A3220'
  accent: '#FFD700'
  surface-dim: '#121414'
  surface-bright: '#383939'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#292a2a'
  surface-container-highest: '#343535'
  on-surface: '#e3e2e2'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e3e2e2'
  inverse-on-surface: '#303031'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  on-tertiary: '#412d00'
  tertiary-container: '#e1aa36'
  on-tertiary-container: '#5b4000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c9c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#ffdea6'
  tertiary-fixed-dim: '#f7bd48'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5d4200'
  on-background: '#e3e2e2'
  surface-variant: '#343535'
  accent-gold: '#FFD700'
  spice-red: '#C0392B'
typography:
  display-lg:
    fontFamily: Cormorant Garamond
    fontSize: 64px
    fontWeight: 600
    lineHeight: 72px
    letterSpacing: 1px
    textTransform: none
  display-sm:
    fontFamily: Cormorant Garamond
    fontSize: 40px
    fontWeight: 600
    lineHeight: 48px
    letterSpacing: 0.5px
    textTransform: uppercase
  brand-script:
    fontFamily: Italiana
    fontSize: 48px
    fontWeight: 400
    lineHeight: 56px
    letterSpacing: 2px
    textTransform: uppercase
  body-md:
    fontFamily: Lora
    fontSize: 16px
    fontWeight: 400
    lineHeight: 28px
  label-md:
    fontFamily: Lora
    fontSize: 12px
    fontWeight: 600
    lineHeight: 18px
    letterSpacing: 2px
    textTransform: uppercase
  menu-category:
    fontFamily: Cormorant Garamond
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: 4px
  heading-md:
    fontFamily: Cormorant Garamond
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  price-display:
    fontFamily: Cormorant Garamond
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-italic:
    fontFamily: Lora
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
rounded:
  sm: 2px
  md: 4px
  lg: 8px
  full: 9999px
  DEFAULT: 0.25rem
  xl: 0.75rem
spacing:
  base: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 96px
  gap: 24px
  card-padding: 32px
  section-padding: 120px
  gutter: 24px
  max-width: 1240px
components:
  button-primary:
    backgroundColor: '#D4AF37'
    textColor: '#0A0A0A'
    rounded: 2px
    padding: 16px 40px
  button-secondary:
    backgroundColor: transparent
    textColor: '#D4AF37'
    rounded: 2px
    padding: 16px 40px
  button-link:
    textColor: '#D4AF37'
    rounded: 0px
    padding: 0px
  card:
    backgroundColor: '#1A1A1A'
    rounded: 4px
    padding: 32px
---

## Overview

The Singh Saab is a **Luxury & Refined** fine-dining brand built on a powerful visual anchor: the golden turban-and-beard silhouette logo set against deep black. The brand language is regal, warm, masculine, and deliberate — every surface, texture, and detail communicates intent, as the brand's own tagline states.

- **Composition cues:**
  - Layout: Flex (linear, single-axis flow — generous full-width sections)
  - Content Width: Full Bleed for hero/imagery, Bounded (1240px) for text content
  - Framing: Outlined (thin gold-on-black borders, minimal shadow)
  - Grid: Minimal — large imagery and whitespace dominate over dense grids
  - Personality: Regal, warm, intentional, masculine, premium hospitality

---

## Colors

The palette is drawn directly from the brand's primary asset — the gold-on-black turban/beard logo — and the restaurant's actual exterior signage (charcoal grey, warm wood, gold lettering).

**Primary — Singh Gold `#D4AF37`**
The exact gold tone of the logo mark and exterior signage lettering ("THE SINGH SAAB"). Represents heritage, warmth, and premium positioning. Used for logo, headings, key CTAs, dividers, and icon strokes.

**Secondary — Deep Black `#0A0A0A`**
The dominant background of the brand's social assets and logo backdrop. Conveys fine-dining sophistication and lets gold elements glow.

**Tertiary — Antique Bronze `#B8860B`**
A deeper, muted gold used for secondary accents, hover states on dark surfaces, and to create depth without competing with primary gold.

**Neutral `#8A8A8A`**
Warm grey matching the exterior facade's charcoal cladding. Used for secondary text on dark backgrounds and structural UI elements.

**Background `#0F0F0F`**
Near-black with the faintest warmth — the canvas for the entire site, matching the brand's Instagram aesthetic.

**Surface `#1A1A1A`**
Slightly raised charcoal for cards, menu panels, and content blocks — distinguishes content from the page background.

**Text Primary `#F5F0E1`**
Warm ivory/cream — never pure white. Matches the menu paper tone and keeps the palette cohesive.

**Text Secondary `#C9B896`**
Muted champagne-gold for descriptions, prices, and secondary copy.

**Border `#3A3220`**
Dark bronze-brown for hairline dividers, card outlines, and the ornamental frame style seen on the physical menu.

**Accent `#FFD700`**
Brighter gold for hover glows, active states, and highlight moments — used sparingly.

**Usage Summary:**
```
Surface: #1A1A1A    Text Primary: #F5F0E1    Border: #3A3220
Background: #0F0F0F    Text Secondary: #C9B896    Accent: #FFD700
```

**Gradients:**
```css
/* Hero overlay — darkens photography while letting gold logo glow */
background: linear-gradient(180deg, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.85) 100%);

/* Gold shimmer for headings/dividers */
background: linear-gradient(90deg, #B8860B 0%, #FFD700 50%, #B8860B 100%);

/* Card surface depth */
background: linear-gradient(145deg, #1A1A1A 0%, #0F0F0F 100%);

/* Premium CTA gradient */
background: linear-gradient(135deg, #D4AF37 0%, #B8860B 100%);
```

---

## Typography

A refined serif-forward system mirroring the elegant scrollwork and classic serif headers ("STARTER", "MAIN COURSE", "APPETIZER") seen throughout the physical menu, paired with a tall display serif for the brand wordmark.

**Font Pairing Rationale:** `Cormorant Garamond` carries the same refined, fine-dining gravitas as the menu's gold scroll headers. `Italiana` echoes tall, elegant lettering for the wordmark/logo treatments. `Lora` is a warm transitional serif for body copy — readable, classic, never sterile.

**Import (Google Fonts):**
```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Italiana&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap');
```

| Style | Font | Size | Weight | Line Height | Transform |
|---|---|---|---|---|---|
| display-lg | Cormorant Garamond | 64px | 600 | 72px | none |
| display-sm | Cormorant Garamond | 40px | 600 | 48px | UPPERCASE |
| heading | Cormorant Garamond | 28px | 600 | 36px | UPPERCASE |
| brand-script | Italiana | 48px | 400 | 56px | UPPERCASE |
| body-md | Lora | 16px | 400 | 28px | — |
| body-italic | Lora Italic | 18px | 400 | 30px | — |
| label-md | Lora | 12px | 600 | 18px | UPPERCASE |
| price | Cormorant Garamond | 20px | 600 | 28px | — |
| menu-category | Cormorant Garamond | 32px | 600 | 40px | UPPERCASE |

**Special Treatments:**
- Section headers (STARTER, MAIN COURSE, SOUP, APPETIZER): `Cormorant Garamond` 600, UPPERCASE, `#D4AF37`, with ornamental flourish dividers above/below (mirrors physical menu scrollwork)
- Hero taglines ("Every texture chosen with intent"): `Lora Italic`, `#C9B896`
- Wordmark "SAAB": `Italiana` or bold condensed serif, UPPERCASE, gold on black
- Dotted price leaders (`........295`): preserve in digital menu as `border-bottom: 1px dotted #3A3220`

---

## Layout

A spacious, image-led Flex layout. Fine dining brands rely on negative space to communicate premium positioning — content never feels crowded.

**Layout Type:** Flex (linear, single-axis)
**Content Width:** Full Bleed for hero/gallery sections, Bounded (1240px) for menu/text content
**Base Unit:** 8px

**Spacing Scale:**
```
base:     8px    → icon-to-text gaps
sm:       16px   → tight internal padding
md:       24px   → standard element gap
lg:       48px   → between content blocks
xl:       96px   → between major page sections
card-pad: 32px   → menu card / content card padding
section:  120px  → top/bottom section padding (64px mobile)
gap:      24px   → flex-gap default
```

**Layout Templates:**
```css
/* Full-bleed hero */
width: 100vw;
min-height: 100vh;

/* Bounded content container */
max-width: 1240px;
margin: 0 auto;
padding: 0 24px;

/* Menu two-column (desktop) */
display: flex;
gap: 64px;

/* Menu single-column (mobile) */
@media (max-width: 768px) { flex-direction: column; }
```

> **Rule:** Preserve the Full Bleed hero / Bounded content structural frame before changing ornament. The generous vertical rhythm (120px section padding) is core to the fine-dining feel — don't compress it for density.

---

## Elevation & Depth

**Surface Style:** Outlined — thin gold/bronze borders on dark surfaces, minimal shadow usage. Depth comes from layered darkness (background → surface → card) rather than heavy shadows, matching the brand's moody photography aesthetic.

**Borders:**
```
Default card border:   1px solid #3A3220
Divider line:          1px solid #D4AF37 (with ornamental end-caps)
Input border:          1px solid #3A3220
Active/focus border:   1px solid #FFD700
Menu dotted leader:    1px dotted #3A3220
```

**Shadow Recipes:**
```css
/* Subtle card lift on dark bg */
box-shadow: 0 4px 24px rgba(0, 0, 0, 0.6);

/* Gold glow — for logo, active CTA */
box-shadow: 0 0 32px rgba(212, 175, 55, 0.25);

/* Image overlay depth */
box-shadow: inset 0 -120px 120px rgba(10, 10, 10, 0.9);
```

**Blur:** Minimal — only on sticky nav (`backdrop-filter: blur(12px)` over `rgba(10,10,10,0.7)`)

### Techniques

**Ornamental Divider (mirrors physical menu scrollwork):**
```css
.ornamental-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  color: #D4AF37;
}
.ornamental-divider::before,
.ornamental-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, #D4AF37, transparent);
}
```

**Logo Glow (turban/beard mark on dark bg):**
```css
.logo-mark {
  filter: drop-shadow(0 0 24px rgba(212, 175, 55, 0.3));
}
```

**Watermark Pattern (subtle logo repeat — as seen on physical menu pages):**
```css
.watermark-bg {
  background-image: url('/logo-mark.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 320px;
  opacity: 0.04;
  position: absolute;
}
```

---

## Shapes

A **Sharp + Minimal** radius system — fine dining brands favor crisp edges over soft, playful curves. The exterior signage and menu use clean rectangular framing.

**Corner Radii:**
```
sm:   2px    → buttons, input fields, tags
md:   4px    → cards, image frames
lg:   8px    → modals, larger feature panels
full: 9999px → circular logo badge only (matches the round logo mark on the storefront)
```

**Usage Guidance:**
- Buttons and tags → `sm` (2px) — crisp, premium
- Cards and menu panels → `md` (4px)
- Logo badge (circular storefront mark) → `full`
- Never use heavily rounded (16px+) corners — conflicts with the fine-dining sharpness

**Icon Style:** Linear (outline) — thin gold strokes, matches the delicate line-art quality of the turban/beard logo
**Icon Sets:** Lucide Icons (outline variant) + custom line-art icons (turban, beard, kirpan-inspired flourishes, dotted leader marks)

**Logo Mark Usage:**
The turban + "सिंह SAAB" + beard silhouette is the core brand asset:
- Hero centerpiece on black background, gold fill
- Circular badge variant for storefront/favicon (white bg, black mark — matches physical signage badge)
- Watermark on menu/content sections at 4% opacity
- Never recolor — always gold (#D4AF37) on black, or black on white for the circular badge variant

---

## Components

### Buttons

**Primary CTA Button:**
```css
background: #D4AF37;
color: #0A0A0A;
font-family: 'Lora', serif;
font-size: 14px;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 2px;
padding: 16px 40px;
border-radius: 2px;
border: none;
transition: all 250ms ease;
/* Hover: background #FFD700, box-shadow gold glow */
```
Example: "Reserve a Table", "View Menu", "Order Now"

**Secondary / Outline Button:**
```css
background: transparent;
color: #D4AF37;
font-family: 'Lora', serif;
font-size: 14px;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 2px;
padding: 16px 40px;
border-radius: 2px;
border: 1px solid #D4AF37;
transition: all 250ms ease;
/* Hover: background #D4AF37, color #0A0A0A */
```
Example: "Explore Our Story", "Get Directions"

**Text Link:**
```css
color: #D4AF37;
border-bottom: 1px solid transparent;
transition: border-color 250ms ease;
/* Hover: border-bottom-color #D4AF37 */
```

**Category Tag:**
```css
background: transparent;
color: #C9B896;
border: 1px solid #3A3220;
font-family: 'Lora', serif;
font-size: 11px;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 1.5px;
padding: 6px 16px;
border-radius: 2px;
```
Example: "CHINESE VEG", "CHINESE NON-VEG", "BONELESS"

### Cards and Surfaces

**Menu Item Row:**
```
display: flex;
justify-content: space-between;
align-items: baseline;
border-bottom: 1px dotted #3A3220;
padding: 12px 0;
font-family: 'Lora', serif (item name) / 'Cormorant Garamond' 600 (price)
```

**Feature/Story Card:**
```
background: #1A1A1A
border: 1px solid #3A3220
border-radius: 4px
padding: 32px
box-shadow: 0 4px 24px rgba(0,0,0,0.6)
```

**Menu Category Header:**
```
text-align: center
font-family: 'Cormorant Garamond', serif
font-size: 32px
font-weight: 600
text-transform: uppercase
color: #D4AF37
letter-spacing: 4px
+ ornamental-divider above and below
```

**Hero Overlay Card:**
```
background: linear-gradient(180deg, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.9) 100%)
padding: 96px 24px
text-align: center
```

### Iconography

Line-art icons matching logo delicacy: turban silhouette, beard silhouette, kirpan/sword flourish, ornamental scroll corners (from menu page borders)
- Render at 1.5px stroke, `#D4AF37` on dark backgrounds
- Size: 20px (inline), 32px (feature), 64px+ (hero/logo mark)
- Spice level indicator (red chili, as seen on physical menu) → keep as `#C0392B` accent, used ONLY for spice indicators

---

## Do's and Don'ts

### Do
- ✅ Use deep black `#0F0F0F` as the dominant background — this is the brand's signature canvas, matching the logo and social presence
- ✅ Render the turban/beard logo mark in `#D4AF37` gold exclusively on dark backgrounds — never recolor
- ✅ Use `Cormorant Garamond` UPPERCASE with ornamental dividers for all menu category headers — directly mirrors the physical menu
- ✅ Keep corner radii sharp (2–4px) — reinforces the fine-dining, intentional positioning from the brand's own tagline
- ✅ Preserve generous whitespace (120px section padding) — premium brands breathe
- ✅ Use dotted price leaders in menu sections — iconic to the physical menu identity

### Don't
- ❌ Don't use pure white `#FFFFFF` backgrounds — always use warm ivory `#F5F0E1` for any light surfaces (rare) to maintain warmth
- ❌ Don't use playful/rounded fonts — the brand voice is "every detail built with soul," refined and deliberate, not casual
- ❌ Don't use heavily rounded corners (16px+) — conflicts with the sharp, premium signage aesthetic
- ❌ Don't overuse the red chili/spice accent color — it's a functional indicator only, never decorative
- ❌ Don't crowd sections — avoid dense grids; let large imagery and gold typography have room
- ❌ Don't use bright/saturated colors beyond the gold-black-ivory palette — any added color breaks the regal tone

---

## Motion

Fine dining demands **subtle, deliberate** motion — nothing should feel rushed or playful. Every transition should feel like a maître d' guiding you to your table: smooth, confident, unhurried.

**Motion Level:** Subtle to Moderate

**Durations:**
```
fast:    200ms   → button hover, link underline
normal:  400ms   → card reveal, image fade
slow:    700ms   → hero entrance, section transitions
gold-shimmer: 2000ms → looping shimmer on dividers (subtle, optional)
```

**Easings:**
```css
--ease-refined:  cubic-bezier(0.4, 0.0, 0.2, 1)    /* standard fade/slide */
--ease-out-soft: cubic-bezier(0.16, 1, 0.3, 1)      /* hero reveal */
```

**Hover Patterns:**
```
Buttons:        background shifts #D4AF37 → #FFD700, gold glow box-shadow (200ms)
Outline Buttons: fill transition transparent → #D4AF37 (250ms ease-refined)
Menu Items:     subtle color shift on item name to #FFD700 (200ms)
Images:         scale(1.03) with overflow:hidden container (500ms ease-out-soft)
Nav Links:      underline grows left-to-right, gold (200ms)
```

**Scroll Patterns:**
```
Section reveal:   fadeInUp — translateY(24px)→(0) + opacity 0→1, 700ms ease-out-soft
Hero parallax:    background image translateY at 0.3x scroll speed
Menu categories:  fade-in one at a time, 100ms stagger
Ornamental dividers: width animates 0%→100% on scroll into view, 600ms
```

**Signature Brand Animation — "Gold Reveal":**
```css
/* Logo or heading reveal with gold underline draw */
@keyframes gold-draw {
  from { width: 0; }
  to   { width: 100%; }
}
.gold-underline::after {
  content: '';
  display: block;
  height: 1px;
  background: #D4AF37;
  animation: gold-draw 800ms cubic-bezier(0.4,0,0.2,1) forwards;
}
```

---

## Brand Voice Design Notes

*(Supplementary section for copy/content alignment with visual system)*

- **Tone:** Premium, warm, intentional, masculine. "Every texture chosen with intent. Every detail built with soul." — design-led, never loud.
- **Tagline:** "Every texture chosen with intent. Every detail built with soul."
- **Rating:** 4.6★ (1,097 reviews) — a strong trust signal, should be prominently displayed
- **Location identity:** Mango, Jamshedpur — Dimna Road, near old check post
- **Cuisine breadth:** Multi-cuisine — Chinese Veg/Non-Veg, Continental appetizers, Soups, Tandoor — position as a versatile fine-dining destination, not single-cuisine
- **Service highlights from reviews:** Ambience, "Instagrammable," good for celebrations (birthdays/anniversaries), reasonable pricing for the experience tier
- **Logo Story:** Sikh turban + "सिंह SAAB" + beard = a strong, masculine, heritage-rooted personal brand identity — the "Saab" (sir/gentleman) framing should echo in hospitality copy (gracious host energy)