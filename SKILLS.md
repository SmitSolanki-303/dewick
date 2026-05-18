---
name: vence-frontend-system
description: Frontend implementation standards for Vence using Next.js, Tailwind CSS, and Framer Motion.
---

# Vence Frontend Skills

## Purpose

Defines reusable frontend implementation standards, motion architecture, layout systems, styling behavior, and interaction patterns for the Vence interface system.

---

# Framework Standards

## Primary Stack

Required:
- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion

Preferred:
- React Server Components
- Server-first rendering
- Shared animation variants

---

# Styling Standards

## Tailwind CSS

Must use:
- utility-first styling
- semantic layout composition
- reusable utility patterns

Preferred:
```tsx
className="rounded-2xl border border-white/10 bg-zinc-900/50"
```

Avoid:
```tsx
style={{ borderRadius: "17px" }}
```

---

# Responsive Standards

Preferred responsive structure:
```tsx
px-4 md:px-6 lg:px-8
```

Preferred section spacing:
```tsx
py-16 md:py-20 lg:py-28
```

Preferred containers:
```tsx
max-w-7xl mx-auto
```

---

# Typography Standards

## Font

Required:
```tsx
font-family: Inter
```

---

## Heading Standards

Preferred:
```tsx
text-6xl md:text-7xl
font-semibold
tracking-tight
```

---

## Body Text Standards

Preferred:
```tsx
text-base
text-zinc-400
leading-relaxed
```

---

# Color Standards

Preferred:
```tsx
bg-black
bg-zinc-950
text-white
text-zinc-400
border-white/10
```

Avoid:
- bright gradients
- neon colors
- inconsistent accents

---

# Border Standards

Preferred:
```tsx
border border-white/10
```

Hover:
```tsx
hover:border-white/20
```

---

# Radius Standards

Preferred:
```tsx
rounded-lg
rounded-xl
rounded-2xl
rounded-full
```

Avoid:
- inconsistent custom radius values

---

# Shadow Standards

Preferred:
```tsx
shadow-[0_10px_40px_rgba(0,0,0,0.35)]
```

Avoid:
- colored glow shadows
- oversized blur shadows

---

# Framer Motion Standards

## Motion Philosophy

Animations must feel:
- smooth
- subtle
- fast
- layered

Animations must avoid:
- bounce
- excessive spring physics
- distracting movement

---

# Motion Timing

Preferred:
```ts
duration: 0.5
ease: [0.22, 1, 0.36, 1]
```

---

# Preferred Motion Variants

Required reusable variants:
```ts
fadeUp
fadeIn
staggerContainer
scaleIn
slideLeft
slideRight
blurReveal
```

---

# Scroll Reveal Pattern

Preferred:
```ts
initial: {
  opacity: 0,
  y: 24
}

animate: {
  opacity: 1,
  y: 0
}
```

---

# Hover Interaction Standards

Cards should:
- translate upward slightly
- brighten border opacity
- preserve readable content

Buttons should:
- scale slightly
- preserve contrast
- animate smoothly

---

# Glassmorphism Standards

Allowed:
```tsx
backdrop-blur-xl
bg-white/[0.03]
```

Avoid:
- strong transparency
- unreadable surfaces
- excessive blur

---

# Accessibility Standards

Must support:
- keyboard navigation
- semantic HTML
- WCAG AA contrast
- reduced motion preferences
- visible focus indicators

Required focus styles:
```tsx
focus-visible:ring-2
focus-visible:ring-white
```

---

# Component Standards

Components must:
- remain reusable
- support responsive layouts
- support dark mode
- support long-content handling
- preserve accessibility

---

# Interactive Component Standards

Interactive components must define:
- default state
- hover state
- focus-visible state
- active state
- disabled state
- loading state

---

# Layout Standards

Preferred structure:
```txt
/components
/animations
/hooks
/lib
/styles
```

---

# Performance Standards

Must:
- optimize animations
- lazy-load heavy sections
- avoid layout shift
- preserve rendering performance

Avoid:
- animating width heavily
- animating height aggressively
- excessive client-side rendering

---

# Overflow Handling Standards

Must:
- prevent horizontal overflow
- preserve readable content width
- support multiline wrapping
- preserve layout consistency

---

# Empty State Standards

Empty states should:
- preserve spacing rhythm
- use muted styling
- provide descriptive guidance
- avoid large visual gaps

---

# Code Quality Standards

Must:
- preserve readable structure
- separate concerns cleanly
- extract reusable utilities
- avoid duplicated patterns

Preferred:
```tsx
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24
  },
  visible: {
    opacity: 1,
    y: 0
  }
}
```

---

# Design Consistency Rules

Must preserve:
- spacing rhythm
- typography hierarchy
- animation consistency
- surface layering
- border consistency
- interaction quality

Must avoid:
- visual drift
- inconsistent spacing
- mixed animation styles
- random component patterns