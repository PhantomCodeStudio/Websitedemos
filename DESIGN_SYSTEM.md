# Design System

**Status:** Pending design direction finalization  
**Last Updated:** 2026-05-29

---

## Purpose

This document defines the complete design system: typography, color, spacing, components, and visual standards. It's the reference for implementation consistency.

---

## Typography System

### Display Font

**Font family:** (e.g., "Playfair Display", "GT Sectra")  
**Font file:** (path)  
**Weights:** (400, 600, 700, 900)  
**Sizes:** (16px → 72px scale)  
**Line height:** (1.1 → 1.3)  
**Letter spacing:** (tracking)

**Usage:**
- Page titles
- Section headlines
- Feature headers
- Emphasis text

**Rationale:**
(Why this font, how it communicates)

---

### Body Font

**Font family:** (e.g., "Inter", "SF Pro Display")  
**Font file:** (path)  
**Weights:** (400, 500, 600)  
**Sizes:** (14px → 18px)  
**Line height:** (1.5 → 1.6)  
**Letter spacing:** (none or tracking)

**Usage:**
- Paragraph text
- Body copy
- Lists
- Navigation labels

**Rationale:**
(Why this font, readability considerations)

---

### Accent / Special Font

**Font family:** (e.g., "IBM Plex Mono", "Courier Prime")  
**Font file:** (path)  
**Weights:** (400, 600)  
**Sizes:** (12px → 16px)  
**Usage:** (Code, labels, special emphasis)

---

### Heading Scale

| Level | Size | Weight | Line Height | Letter Spacing |
|-------|------|--------|-------------|----------------|
| H1 | 72px | 700 | 1.1 | -1px |
| H2 | 56px | 700 | 1.2 | 0px |
| H3 | 42px | 600 | 1.2 | 0px |
| H4 | 32px | 600 | 1.3 | 0px |
| H5 | 24px | 600 | 1.4 | 0px |
| H6 | 18px | 600 | 1.5 | 0px |

---

## Color System

### Primary Palette

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Primary 1 | #000000 | 0,0,0 | Headlines, primary CTAs |
| Primary 2 | #FFFFFF | 255,255,255 | Backgrounds, text on dark |
| Primary 3 | #000000 | 0,0,0 | Accents, highlights |

---

### Secondary Palette

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Secondary 1 | #000000 | 0,0,0 | Secondary actions |
| Secondary 2 | #000000 | 0,0,0 | Hover states |

---

### Neutral Palette

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| White | #FFFFFF | 255,255,255 | Backgrounds, text on dark |
| Light Gray | #F5F5F5 | 245,245,245 | Subtle backgrounds |
| Medium Gray | #CCCCCC | 204,204,204 | Borders, dividers |
| Dark Gray | #666666 | 102,102,102 | Secondary text |
| Black | #000000 | 0,0,0 | Primary text, headlines |

---

### Semantic Colors

| Use | Color | Purpose |
|-----|-------|---------|
| Success | #00A651 | Positive feedback |
| Warning | #FFA500 | Caution |
| Error | #FF4444 | Error states |
| Info | #0066CC | Informational |

---

## Spacing System

### Base Unit
1 unit = 8px

### Spacing Scale

| Size | Value | Usage |
|------|-------|-------|
| XS | 4px | Micro-spacing |
| SM | 8px | Tight spacing |
| MD | 16px | Standard spacing |
| LG | 24px | Generous spacing |
| XL | 32px | Large gaps |
| 2XL | 48px | Section spacing |
| 3XL | 64px | Major section spacing |

---

## Components Included

### Buttons
- Primary button
- Secondary button
- Tertiary button
- Disabled state
- Loading state

### Forms
- Text input
- Textarea
- Select dropdown
- Checkbox
- Radio button

### Navigation
- Header navigation
- Footer navigation
- Breadcrumbs

### Cards
- Feature card
- Service card
- Project card

### Modals
- Standard modal
- Alert modal

---

## Grid System

### Desktop
- Columns: (12 or 16)
- Gutter: (16px or 24px)
- Margin: (32px or 48px)
- Max width: (1200px or 1440px)

### Tablet
- Columns: (8)
- Gutter: (16px)
- Margin: (24px)

### Mobile
- Columns: (4)
- Gutter: (12px)
- Margin: (16px)

---

## Visual Standards

### Border Radius

| Type | Value | Usage |
|------|-------|-------|
| None | 0px | Cards, containers |
| Small | 4px | Buttons, inputs |
| Medium | 8px | Cards, dropdowns |
| Large | 16px | Feature blocks |
| Full | 50% | Avatars, badges |

---

### Shadows

| Level | CSS |
|-------|-----|
| Subtle | 0 1px 3px rgba(0,0,0,0.1) |
| Medium | 0 4px 6px rgba(0,0,0,0.1) |
| Strong | 0 10px 20px rgba(0,0,0,0.15) |

---

### Opacity / Transparency

| Use | Value |
|-----|-------|
| Hover state | 80% |
| Disabled state | 50% |
| Subtle overlay | 20% |
| Moderate overlay | 40% |
| Dark overlay | 60% |

---

## Responsive Breakpoints

| Name | Width | Usage |
|------|-------|-------|
| Mobile | 320px | Small phones |
| Tablet | 768px | Tablets, large phones |
| Desktop | 1024px | Desktop browsers |
| Large Desktop | 1440px | Large screens |

---

## Accessibility Standards

### Color Contrast
- Text: 4.5:1 (AA standard)
- Large text: 3:1 (AA standard)

### Focus States
- Visible focus ring: 2px solid
- Focus color: (specify)

### Motion
- Respect prefers-reduced-motion
- Provide keyboard alternatives

---

## Implementation

### CSS Architecture
- Tailwind CSS with custom config
- CSS custom properties (variables)
- Utility classes

### Component Structure
(How components use the design system)

### File Organization
(Where design tokens are stored)

---

## Status

Typography system finalized: ✗
Color palette approved: ✗
Spacing system documented: ✗
Components mapped: ✗
Responsive breakpoints set: ✗
Ready for implementation: ✗
