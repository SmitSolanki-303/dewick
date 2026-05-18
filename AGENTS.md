# Vence AI Agent Rules

## Purpose

This file defines operational rules for AI agents generating frontend components, layouts, animations, and UI systems for the Vence platform.

Agents must prioritize:
- consistency
- accessibility
- performance
- responsive design
- clean architecture
- reusable patterns

---

# Core Technology Stack

Agents must use:
- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion

Agents must not introduce:
- styled-components
- CSS modules
- Bootstrap
- Material UI
- inline CSS styling

---

# General Development Rules

Agents must:
- generate production-ready code
- generate responsive layouts
- preserve accessibility
- maintain clean component architecture
- use semantic HTML
- preserve design consistency

Agents must avoid:
- deeply nested JSX
- duplicated logic
- inconsistent class naming
- large monolithic components

---

# Tailwind CSS Rules

Agents must:
- use utility-first styling
- preserve spacing consistency
- preserve typography hierarchy
- use semantic layout patterns

Agents must avoid:
- excessive arbitrary values
- random spacing systems
- inconsistent border radius usage

Preferred:
```tsx
className="rounded-2xl border border-white/10"
```

Avoid:
```tsx
className="rounded-[17px] border-[#343434]"
```

---

# Framer Motion Rules

Agents must:
- use transform-based animation
- use opacity transitions
- use shared easing curves
- preserve motion consistency

Preferred easing:
```ts
ease: [0.22, 1, 0.36, 1]
```

---

# Animation Standards

Preferred animations:
- fade up
- stagger reveal
- scale in
- blur reveal
- hover lift

Agents must avoid:
- bounce effects
- elastic spring animations
- spinning sections
- exaggerated parallax

---

# Motion Performance Rules

Agents must:
- animate transform properties
- animate opacity
- preserve rendering performance

Agents must avoid:
- animating width excessively
- animating height aggressively
- expensive repaint-heavy effects

---

# Component Architecture Rules

Components must:
- remain reusable
- support responsive layouts
- support dark mode
- preserve accessibility
- support long-content handling

Each interactive component must define:
- default state
- hover state
- focus-visible state
- active state
- disabled state
- loading state

---

# Accessibility Rules

Agents must:
- preserve semantic HTML
- support keyboard navigation
- preserve visible focus indicators
- maintain accessible contrast

Interactive elements must:
- support Enter key
- support Space key where appropriate
- preserve touch accessibility

---

# Responsive Design Rules

Agents must:
- design mobile-first
- preserve spacing consistency
- reduce motion intensity on mobile
- preserve readable typography

Desktop layouts should:
- use grid-based alignment
- preserve visual rhythm
- avoid excessive empty space

---

# Layout Rules

Preferred layout system:
```tsx
max-w-7xl mx-auto px-4 md:px-6 lg:px-8
```

Preferred spacing rhythm:
```tsx
py-16 md:py-20 lg:py-28
```

---

# Typography Rules

Agents must:
- use Inter font
- preserve heading hierarchy
- preserve muted secondary text
- maintain readable line length

Agents must avoid:
- oversized paragraphs
- inconsistent font weights
- excessive font variation

---

# Code Quality Rules

Agents must:
- create modular components
- extract reusable motion variants
- separate logic from presentation
- preserve readable code structure

Preferred structure:
```txt
/components
/animations
/lib
/hooks
/styles
```

---

# Naming Conventions

Components:
```txt
HeroSection.tsx
Navbar.tsx
FeatureCard.tsx
```

Motion:
```txt
motionVariants.ts
fadeUp.ts
```

Hooks:
```txt
useScrollReveal.ts
```

---

# State Management Rules

Agents should:
- prefer local state when possible
- minimize unnecessary global state
- avoid overengineering

---

# Loading State Rules

Loading states must:
- preserve layout stability
- avoid layout shift
- use subtle skeleton styling
- preserve spacing rhythm

---

# Overflow Handling Rules

Agents must:
- prevent horizontal overflow
- preserve readable content width
- support text wrapping
- preserve card integrity

---

# Design Consistency Rules

Agents must preserve:
- spacing rhythm
- motion consistency
- border consistency
- typography hierarchy
- interaction behavior

Agents must never:
- invent new design languages
- introduce inconsistent colors
- use random animation systems
- mix unrelated UI styles

---

# Final Output Requirements

Generated code must:
- be production-ready
- be accessible
- be responsive
- follow design system rules
- support animation
- support long-content handling
- preserve performance