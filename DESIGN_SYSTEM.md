# Finaxi Design System Documentation

> Complete design specification for the Finaxi Angular application including colors, typography, spacing, components, and visual effects.

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Border Radius](#border-radius)
6. [Components](#components)
7. [Opacity Scale](#opacity-scale)
8. [Blur Effects](#blur-effects)
9. [Animations](#animations)
10. [Background System](#background-system)
11. [Design Patterns](#design-patterns)

---

## Design Philosophy

Finaxi embraces a **dark, premium aesthetic** with minimalist design principles:

- **Dark-first design**: Deep background with subtle light accents
- **Glassmorphism**: Translucent surfaces with backdrop blur
- **Subtle depth**: Low-contrast borders and layered transparency
- **Calm interactions**: Smooth hover states and gentle animations
- **Clean hierarchy**: Deliberate use of opacity to establish visual priority

---

## Color Palette

### Primary Background

- **Main Background**: `#05060a`
  - Used as the root app background
  - Creates a near-black canvas for content

### White-based System

All interface elements use **white with varying opacity levels** to create depth and hierarchy:

```css
/* Text Colors */
white           /* Headers, primary text */
white/85        /* Input text, active text */
white/80        /* Secondary interactive text */
white/75        /* Icon colors, category labels */
white/70        /* Navigation text, labels, icons */
white/65        /* Icon states */
white/60        /* Body text, descriptions */
white/55        /* Muted labels, secondary info */
white/50        /* Tertiary text, subtle labels */
white/45        /* Footer text, least important info */
white/40        /* Decorative elements */
white/35        /* Placeholder text */
white/20        /* Large decorative text/numbers */

/* UI Element Colors */
white/15        /* Borders (tertiary) */
white/12        /* Borders (secondary) */
white/10        /* Primary borders, dividers */
white/8         /* Background blur effects */
white/[0.05]    /* Hover states (backgrounds) */
white/[0.04]    /* Interactive element backgrounds */
white/[0.03]    /* Card/panel backgrounds */

/* Special Effects */
white/10        /* Glow effects, blur orbs */
```

### Accent Colors

- **Error/Validation**: `red-500`, `red-700`
  - Used for form validation errors
  - Error messages and alerts

### Gradient System

```css
/* Radial Gradients */
radial-gradient(ellipse_at_top, rgba(255,255,255,0.10), transparent_55%)

/* Grid Pattern */
linear-gradient(to_right, rgba(255,255,255,0.06)_1px, transparent_1px)
linear-gradient(to_bottom, rgba(255,255,255,0.06)_1px, transparent_1px)
```

---

## Typography

### Font Family

- **Primary**: System font stack via Tailwind defaults
  - Clean, readable, and performant

### Font Sizes

```css
text-xs      /* 0.75rem - 12px - Labels, captions, metadata */
text-sm      /* 0.875rem - 14px - Body text, buttons, navigation */
text-base    /* 1rem - 16px - Standard body text */
text-lg      /* 1.125rem - 18px - Emphasized data points */
text-xl      /* 1.25rem - 20px */
text-2xl     /* 1.5rem - 24px - Section headers */
text-3xl     /* 1.875rem - 30px - Page headers */
text-4xl     /* 2.25rem - 36px - Hero headings, decorative numbers */
text-5xl     /* 3rem - 48px - Large hero headings */
```

### Font Weights

```css
font-normal      /* 400 - Default body text */
font-semibold    /* 600 - Headers, labels, emphasis */
font-bold        /* 700 - Decorative numbers */
```

### Text Styles

```css
/* Tracking */
tracking-tight     /* Headlines, hero text */
tracking-wider     /* Uppercase labels */

/* Leading */
leading-none       /* Compact logo text */
leading-relaxed    /* Comfortable body text */
leading-[1.05]     /* Tight hero headings */

/* Transform */
uppercase          /* Section labels */
```

---

## Spacing & Layout

### Container System

```css
max-w-6xl         /* Main content wrapper (1152px) */
max-w-2xl         /* Text content max-width */
max-w-xl          /* Narrow text blocks */
min-h-screen      /* Full viewport height */
```

### Padding Scale

```css
p-4    /* 1rem - 16px - Standard mobile padding */
p-6    /* 1.5rem - 24px - Card padding, sections */
p-8    /* 2rem - 32px - Large sections */

px-3   /* Horizontal: small buttons, pills */
px-4   /* Horizontal: standard buttons, inputs */
px-5   /* Horizontal: prominent CTAs */

py-1   /* Vertical: pills, badges */
py-2   /* Vertical: small buttons */
py-2.5 /* Vertical: standard buttons */
py-3   /* Vertical: large buttons, inputs */
py-10  /* Vertical: footer sections */
py-12  /* Vertical: sections (mobile) */
py-14  /* Vertical: sections (mobile) */
py-16  /* Vertical: sections (desktop) */
py-20  /* Vertical: hero section (desktop) */
```

### Gap Scale

```css
gap-2   /* 0.5rem - 8px - Tight groupings */
gap-3   /* 0.75rem - 12px - Related items */
gap-4   /* 1rem - 16px - Standard spacing */
gap-6   /* 1.5rem - 24px - Section spacing */
gap-8   /* 2rem - 32px - Large spacing */
```

### Margin Scale

```css
mt-1    /* 0.25rem - 4px */
mt-2    /* 0.5rem - 8px */
mt-3    /* 0.75rem - 12px */
mt-4    /* 1rem - 16px */
mt-5    /* 1.25rem - 20px */
mt-6    /* 1.5rem - 24px */
mt-8    /* 2rem - 32px */
```

---

## Border Radius

```css
rounded-xl      /* 0.75rem - 12px - Buttons, small cards */
rounded-2xl     /* 1rem - 16px - Inputs, buttons, cards */
rounded-3xl     /* 1.5rem - 24px - Large cards, sections */
rounded-full    /* Pills, badges, progress bars */
```

---

## Components

### Buttons

#### Primary Button (CTA)

```html
class="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm
font-semibold text-black hover:bg-white/90"
```

#### Secondary Button

```html
class="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15
bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white/80 hover:bg-white/[0.05]"
```

#### Navigation Button

```html
class="rounded-xl px-3 py-2 text-sm text-white/70 hover:bg-white/[0.04] hover:text-white"
```

#### Icon Button

```html
class="grid h-8 w-8 place-items-center rounded-xl border border-white/10 bg-white/[0.03]
hover:bg-white/[0.05]"
```

### Cards

#### Standard Card

```html
class="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
```

#### Nested Card

```html
class="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
```

### Forms

#### Input Container

```html
class="mt-2 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2"
```

#### Input Field

```html
class="w-full bg-transparent text-sm text-white/85 placeholder:text-white/35 focus:outline-none"
```

#### Label

```html
class="text-xs font-semibold text-white/70"
```

#### Error Message

```html
class="mt-1 block text-xs text-red-500"
```

### Pill Component

```html
class="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1
text-xs text-white/70"
```

### Progress Bar

#### Container

```html
class="mt-2 h-2 rounded-full bg-white/10"
```

#### Fill

```html
class="h-2 rounded-full bg-white/50"
```

### Navigation Header

```html
class="sticky top-0 z-30 border-b border-white/10 bg-[#05060a]/70 backdrop-blur-xl"
```

### Footer

```html
class="border-t border-white/10"
```

---

## Opacity Scale

### Text Opacity Hierarchy

- **100%**: Primary headings, critical information
- **85%**: Active input text, user-entered content
- **80%**: Interactive secondary text
- **75%**: Icons, category labels
- **70%**: Navigation, form labels
- **60%**: Body text, descriptions
- **50%**: Tertiary labels, subtle information
- **45%**: Footer text, least prominent text
- **35%**: Placeholder text

### Background Opacity

- **white/[0.05]**: Hover states
- **white/[0.04]**: Pills, small interactive backgrounds
- **white/[0.03]**: Cards, panels, input backgrounds

### Border Opacity

- **white/15**: Secondary borders
- **white/12**: Alternative border weight
- **white/10**: Primary border color

---

## Blur Effects

### Backdrop Blur

```css
backdrop-blur-xl    /* Navigation header glassmorphism */
```

### Blur Utilities

```css
blur-[120px]    /* Large background orb (top) */
blur-[140px]    /* Large background orb (bottom) */
```

---

## Animations

### Fade Up Animation

```css
/* CSS Keyframe */
@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Usage Class */
.fade-up-animation {
  animation: fadeUp 0.55s ease-out forwards;
}

/* Initial State */
opacity-0 translate-y-4
```

**Usage**: Applied to hero section for graceful content entrance

### Transitions

```css
transition              /* Default smooth transitions */
group-open:rotate-45    /* FAQ accordion icon rotation */
```

---

## Background System

The app uses a sophisticated multi-layer background system:

### Layer 1: Solid Background

```css
bg-[#05060a]   /* Deep dark base */
```

### Layer 2: Blur Orbs

```html
<!-- Top orb -->
<div
  class="absolute -top-40 left-1/2 h-[540px] w-[540px] 
            -translate-x-1/2 rounded-full bg-white/10 blur-[120px]"
></div>

<!-- Bottom orb -->
<div
  class="absolute -bottom-48 right-[-120px] h-[520px] w-[520px] 
            rounded-full bg-white/8 blur-[140px]"
></div>
```

### Layer 3: Radial Gradient

```html
<div
  class="absolute inset-0 
            bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_55%)]"
></div>
```

### Layer 4: Grid Pattern

```html
<div
  class="absolute inset-0 opacity-50 
            bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),
                linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] 
            [background-size:64px_64px]"
></div>
```

### Container Wrapper

```html
<div class="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
  <!-- All background layers -->
</div>
```

---

## Design Patterns

### Z-Index Layering

```css
z-10    /* Main content layer */
z-30    /* Sticky navigation */
```

### Responsive Grid Patterns

```css
grid gap-4 md:grid-cols-3           /* Feature grid */
grid gap-4 md:grid-cols-2           /* FAQ grid */
grid gap-8 md:grid-cols-[1.15fr_0.85fr]  /* Hero asymmetric */
grid gap-3 md:grid-cols-3           /* Stats grid */
grid cols-2 gap-3                   /* Two-column stats */
```

### Flexbox Patterns

```css
flex items-center gap-3             /* Logo + text */
flex items-center justify-between   /* Header layout */
flex flex-col gap-3 sm:flex-row     /* Responsive button groups */
flex flex-wrap items-center gap-2   /* Footer navigation */
```

### Common Utility Combinations

#### Centered Container

```html
class="mx-auto max-w-6xl px-4"
```

#### Icon Container

```html
class="grid h-8 w-8 place-items-center rounded-xl border border-white/10 bg-white/[0.04]"
```

#### Logo Container

```html
class="flex h-12 w-12 items-center justify-center"
```

#### Section Label

```html
class="text-xs font-semibold uppercase tracking-wider text-white/50"
```

---

## Brand Identity

### Logo

- **Name**: finaxi
- **Tagline**: "Budgeting + transactions"
- **Alternative**: "Portfolio finance tracker"
- **Size**: 12x12 grid container
- **File**: `assets/finaxi-logo.png`

### Voice & Tone

- **Calm**: "Budgeting that feels calm—even when life isn't."
- **Honest**: "Keep it honest: no 'connect 12 banks' fantasy."
- **Practical**: "A simple loop that ships"
- **Trustworthy**: "The app earns trust by being boring—in a good way."

---

## Accessibility Considerations

1. **Focus States**: All inputs have `focus:outline-none` with visible focus indicators via borders
2. **ARIA Labels**: Password toggle buttons include `aria-label` attributes
3. **Semantic HTML**: Proper use of `<header>`, `<footer>`, `<section>`, `<nav>`
4. **Decorative Elements**: Background orbs marked with `aria-hidden`
5. **Color Contrast**: White text on dark backgrounds ensures readability
6. **Interactive Elements**: All buttons and links have hover states

---

## File Structure

```
src/
├── app/
│   ├── app.css                     (Empty - no custom CSS)
│   ├── app.html                    (Root: bg-[#05060a], text-white)
│   ├── features/
│   │   ├── auth/authpage/          (Auth form UI)
│   │   ├── dashboard/              (Minimal dashboard)
│   │   ├── landing/
│   │   │   ├── navbar/             (Sticky header with glassmorphism)
│   │   │   ├── hero/               (Hero with fade-up animation)
│   │   │   ├── features/           (Feature grid)
│   │   │   ├── how-it-works/       (Process section + FAQ)
│   │   │   └── footer/             (Footer navigation)
│   │   └── components/
│   │       └── pill/               (Reusable badge component)
│   └── utils/
│       └── background/             (Multi-layer background system)
└── styles.css                      (@import "tailwindcss")
```

---

## Quick Reference: Common Classes

### Text

- Heading: `text-2xl font-semibold tracking-tight`
- Body: `text-sm leading-relaxed text-white/60`
- Label: `text-xs font-semibold text-white/70`
- Section Label: `text-xs font-semibold uppercase tracking-wider text-white/50`

### Interactive

- Primary Button: `rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90`
- Secondary Button: `rounded-2xl border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white/80 hover:bg-white/[0.05]`

### Layout

- Container: `mx-auto max-w-6xl px-4`
- Card: `rounded-3xl border border-white/10 bg-white/[0.03] p-6`

---

## Notes

- **Framework**: Angular with standalone components
- **CSS**: Tailwind CSS v4 (imported in `styles.css`)
- **No custom CSS**: All styling via Tailwind utility classes
- **Icons**: Lucide Angular for UI icons
- **State**: Angular signals for reactive state
