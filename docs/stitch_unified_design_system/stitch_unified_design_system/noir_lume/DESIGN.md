---
name: Noir Lume
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#cfc6af'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#98907b'
  outline-variant: '#4c4635'
  surface-tint: '#e7c443'
  primary: '#ffedba'
  on-primary: '#3b2f00'
  primary-container: '#f3cf4d'
  on-primary-container: '#6c5800'
  inverse-primary: '#715c00'
  secondary: '#d2c888'
  on-secondary: '#373101'
  secondary-container: '#514a17'
  on-secondary-container: '#c4b97c'
  tertiary: '#d4f3ff'
  on-tertiary: '#003642'
  tertiary-container: '#79dfff'
  on-tertiary-container: '#006278'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe17c'
  primary-fixed-dim: '#e7c443'
  on-primary-fixed: '#231b00'
  on-primary-fixed-variant: '#564500'
  secondary-fixed: '#efe4a2'
  secondary-fixed-dim: '#d2c888'
  on-secondary-fixed: '#201c00'
  on-secondary-fixed-variant: '#4e4715'
  tertiary-fixed: '#b4ebff'
  tertiary-fixed-dim: '#6dd4f3'
  on-tertiary-fixed: '#001f27'
  on-tertiary-fixed-variant: '#004e5f'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

This design system is defined by a sense of **Noir Excellence**—a high-contrast, premium aesthetic that pairs deep, absolute blacks with luminous gold accents. The brand personality is authoritative, sophisticated, and precise, targeting a high-end audience in luxury, finance, or horology.

The visual style merges **Minimalism** with **Glassmorphism**. We utilize heavy whitespace (or rather, "blackspace") to allow the vibrant gold typography and elements to breathe. The emotional response should be one of exclusivity and quiet power. UI elements are rendered with extreme precision, utilizing thin strokes and subtle glows to simulate a digital craftsmanship that feels both timeless and futuristic.

## Colors

The palette is built upon a foundation of absolute black (`#000000`) to provide the highest possible contrast for the luminous gold accents. 

*   **Primary Gold (#f3cf4d):** Used for primary actions, active states, and structural accents. It provides a warm, saturated core to the interface.
*   **Accent Gold (#FFF3B0):** Reserved for "glow" states, highlights, and micro-interactions. This color acts as a light source within the UI, appearing as a higher-intensity reflection of the primary gold.
*   **Surface Hierarchy:** We avoid mid-tone greys. Surfaces are tiered using deep charcoals to maintain the "Noir" atmosphere without sacrificing depth.

## Typography

The typographic scale creates an editorial rhythm. **Bodoni Moda** is used for large displays and headlines; its high-contrast serifs evoke a classical luxury feel. For functional text, **Hanken Grotesk** provides a sharp, contemporary counterpoint that ensures legibility and technical precision.

All labels should utilize increased letter spacing and uppercase styling to mimic the engravings found on luxury goods. Headlines should be set with tight leading to maintain a cohesive visual block against the dark background.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy to maintain an intentional, gallery-like composition. 

*   **Desktop:** A 12-column grid with generous 64px side margins. Content is often centered or offset to create asymmetrical interest.
*   **Mobile:** A 4-column grid with 20px margins.
*   **Rhythm:** Spacing follows a strict 8px base unit. Component internal padding should be generous to reinforce the minimalist brand values. Avoid crowding elements; the black background is a structural component of the design, not just empty space.

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Luminescent Glows** rather than traditional shadows.

1.  **Level 0 (Background):** Pure `#000000`.
2.  **Level 1 (Cards/Sections):** `#121212` with a 1px subtle border of `#222222`.
3.  **Level 2 (Popovers/Modals):** `#1A1A1A` with a delicate golden outer glow (`#f3cf4d` at 10% opacity).

Instead of drop shadows, use "Bloom" effects. High-priority elements (like active buttons) should have a soft, diffused gold glow behind them to simulate a back-lit interface. Glassmorphism is applied to floating navigation bars using a 20px backdrop blur and 10% white tint.

## Shapes

The shape language is **Soft** but disciplined. We use a base radius of `0.25rem` (4px) to provide a hint of approachability while maintaining a sharp, architectural edge.

*   **Large Containers:** Use `rounded-lg` (8px) for cards and modals.
*   **Inputs/Buttons:** Stick to the base 4px radius. 
*   **Interactive Elements:** Avoid pills or circles unless used for iconography or profile avatars. The rectangularity reinforces the professional and structured nature of the design system.

## Components

*   **Buttons:** Primary buttons use a solid `#f3cf4d` background with black text. Secondary buttons are ghost-style with a 1px gold border and `#FFF3B0` text.
*   **Input Fields:** Bottom-border only by default. On focus, the border transitions to `#f3cf4d` with a subtle `2px` bloom effect.
*   **Chips:** Small, rectangular, with a dark grey background (`#1A1A1A`) and gold labels. 
*   **Cards:** Use minimal styling—no shadows. Depth is achieved via a subtle background color shift to `#121212` and a thin `1px` border that catches the light on hover.
*   **Indicators:** Use the Accent Gold (`#FFF3B0`) for small status dots or selection markers to ensure they "pop" against the dark UI.