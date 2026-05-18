# Vence Design System

## Purpose

This document defines the visual styling, motion behavior, interaction patterns, responsive layout structure, and UI consistency rules for the Vence frontend system.

The system is optimized for:
- Next.js
- Tailwind CSS
- Framer Motion
- Dark-first interfaces
- Modern documentation platforms
- High-performance UI rendering

---

# Design Philosophy

The interface must feel:
- minimal
- structured
- technical
- modern
- premium
- motion-driven
- highly readable

The system must prioritize:
- clarity over decoration
- consistency over uniqueness
- spacing rhythm over visual noise
- subtle motion over aggressive animation

---

# Core Visual Identity

## Visual Characteristics

The interface must use:
- dark surfaces
- soft layered backgrounds
- subtle borders
- muted secondary text
- glassmorphism-inspired overlays
- minimal gradients
- soft shadows
- smooth motion transitions

The interface must avoid:
- neon glow effects
- heavy gradients
- exaggerated shadows
- overly colorful accents
- cluttered spacing
- inconsistent typography

---

# Layout System

## Container Widths

```ts
container.default = "max-w-7xl"
container.content = "max-w-5xl"
container.narrow = "max-w-3xl"
```

---

## Responsive Padding

```ts
desktop = "px-8"
tablet = "px-6"
mobile = "px-4"
```

---

## Section Spacing

```ts
desktop = "py-28"
tablet = "py-20"
mobile = "py-16"
```

---

## Grid System

```ts
desktop = "grid-cols-12"
tablet = "grid-cols-6"
mobile = "grid-cols-1"
```

---

# Typography System

## Font Family

```ts
font.primary = "Inter"
```

---

## Typography Hierarchy

### Hero Heading

```ts
text = "text-6xl md:text-7xl"
weight = "font-semibold"
tracking = "tracking-tight"
lineHeight = "leading-[1]"
```

---

### Section Heading

```ts
text = "text-3xl md:text-4xl"
weight = "font-semibold"
tracking = "tracking-tight"
```

---

### Card Title

```ts
text = "text-xl"
weight = "font-medium"
```

---

### Body Text

```ts
text = "text-base"
color = "text-zinc-400"
lineHeight = "leading-relaxed"
```

---

### Muted Text

```ts
text = "text-sm"
color = "text-zinc-500"
```

---

### Labels

```ts
text = "text-xs"
tracking = "tracking-[0.12em]"
transform = "uppercase"
```

---

# Color System

## Semantic Colors

```ts
background.primary = "bg-black"
background.secondary = "bg-zinc-950"

surface.primary = "bg-zinc-900/50"
surface.secondary = "bg-zinc-900"
surface.glass = "bg-white/[0.03]"

text.primary = "text-white"
text.secondary = "text-zinc-400"
text.muted = "text-zinc-500"

border.primary = "border-white/10"
border.hover = "border-white/20"

accent.primary = "text-blue-500"
accent.surface = "bg-blue-500"
```

---

# Radius System

```ts
radius.sm = "rounded-lg"
radius.md = "rounded-xl"
radius.lg = "rounded-2xl"
radius.full = "rounded-full"
```

---

# Shadow System

## Shadows Must Remain Soft

```ts
shadow.card = "shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
shadow.hover = "shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
```

The interface must avoid:
- colored shadows
- large glows
- harsh contrast shadows

---

# Border System

## Borders Must Be Subtle

```ts
border.default = "border border-white/10"
border.hover = "border-white/20"
```

The interface must avoid:
- thick borders
- bright borders
- inconsistent border opacity

---

# Motion System

## Motion Philosophy

Animations must feel:
- smooth
- subtle
- responsive
- layered
- opacity-driven
- transform-based

Animations must never feel:
- bouncy
- exaggerated
- distracting
- slow

---

# Motion Timing

```ts
instant = 0.2
fast = 0.3
normal = 0.5
slow = 0.8
```

---

# Easing Curve

```ts
ease = [0.22, 1, 0.36, 1]
```

---

# Hover Interactions

## Card Hover

Cards must:
- translate upward slightly
- brighten border opacity
- increase surface contrast
- preserve readable content

```ts
hover = {
  y: -4,
  transition: 0.3
}
```

---

## Button Hover

Buttons must:
- slightly scale
- animate opacity
- preserve accessibility contrast

```ts
hover = {
  scale: 1.02
}
```

---

# Scroll Reveal Pattern

## Standard Entrance Animation

```ts
initial = {
  opacity: 0,
  y: 24
}

animate = {
  opacity: 1,
  y: 0
}
```

---

# Animation Rules

The interface should use:
- staggered reveals
- fade transitions
- subtle scale effects
- blur reveals
- smooth opacity layering

The interface must avoid:
- bounce effects
- rotating animations
- spinning loaders for large sections
- aggressive parallax

---

# Glassmorphism Rules

Glass effects must:
- remain subtle
- preserve readability
- use low opacity overlays
- use soft backdrop blur

Allowed:
```ts
backdrop-blur-xl
bg-white/[0.03]
```

Avoid:
- strong transparency
- excessive blur
- unreadable overlays

---

# Navigation Design

Navbar must:
- remain sticky
- preserve visibility during scroll
- use backdrop blur
- use subtle bottom border

```ts
height = "h-18"
background = "bg-black/70"
blur = "backdrop-blur-xl"
border = "border-white/10"
```

---

# Card Design Rules

Cards must:
- use layered surfaces
- use subtle borders
- preserve spacing consistency
- support hover interaction

```ts
padding = "p-6"
radius = "rounded-2xl"
border = "border border-white/10"
```

---

# Button Design Rules

## Primary Buttons

Must:
- use solid high-contrast surfaces
- maintain visible hover state
- maintain accessible focus state

Preferred:
```ts
bg-white text-black
```

---

## Secondary Buttons

Must:
- use transparent surfaces
- use subtle borders
- preserve readability

Preferred:
```ts
bg-transparent border border-white/10
```

---

# Responsive Behavior

## Mobile Rules

Mobile layouts must:
- reduce spacing density
- reduce motion distance
- avoid heavy blur
- stack layouts vertically
- preserve readable tap targets

---

## Tablet Rules

Tablet layouts should:
- preserve content hierarchy
- reduce section spacing slightly
- maintain grid consistency

---

# Accessibility Rules

The interface must:
- support keyboard navigation
- preserve visible focus indicators
- maintain WCAG AA contrast
- support reduced motion preferences
- preserve semantic HTML structure

---

## Focus States

Interactive elements must use:

```ts
focus-visible:ring-2
focus-visible:ring-white
```

Focus states must remain visible in:
- dark backgrounds
- glass surfaces
- hover states

---

# Overflow Handling

The interface must:
- prevent horizontal overflow
- preserve readable line length
- wrap long text safely
- maintain layout consistency

Long content must:
- truncate safely where required
- wrap inside cards
- preserve spacing rhythm

---

# Empty States

Empty states should:
- use muted styling
- preserve layout spacing
- provide descriptive guidance
- avoid large empty areas

---

# Performance Rules

Animations must:
- use transform properties
- use opacity transitions
- avoid layout thrashing

The interface must avoid:
- animating width excessively
- animating height aggressively
- expensive layered blur stacks

---

# Prohibited Patterns

Do not use:
- random spacing values
- inconsistent border radius
- multiple animation curves
- arbitrary typography sizes
- heavy gradients
- oversized shadows
- low-contrast text
- inaccessible hover-only interactions

---

# Design Quality Checklist

Before shipping:
- spacing must follow token system
- typography must follow hierarchy
- motion must use approved easing
- hover states must exist
- focus states must remain visible
- responsive layouts must be tested
- long content must remain readable
- animations must remain performant
- accessibility must be preserved