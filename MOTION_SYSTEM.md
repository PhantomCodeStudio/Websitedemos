# Motion System

**Status:** Pending design direction  
**Last Updated:** 2026-05-29

---

## Purpose

This document defines the motion language, animation principles, and transition standards for the website. It ensures all motion serves the design direction and feels cohesive.

---

## Motion Philosophy

### Guiding Principles

- All motion serves a purpose: (guidance / feedback / delight / none)
- Motion should feel: (natural / mechanical / playful / etc.)
- Motion respects: (user preferences / performance / accessibility)

### Motion Constraints
(What types of motion NOT to use)

---

## Scroll Transitions

### Timing
- Default duration: (milliseconds)
- Fast transitions: (milliseconds)
- Slow transitions: (milliseconds)

### Easing Curves
- Standard ease: (cubic-bezier values)
- Entrance ease: (cubic-bezier values)
- Exit ease: (cubic-bezier values)

### Effects
- **Fade in:** (opacity from 0 to 1)
- **Scale up:** (transform: scale)
- **Slide in:** (transform: translate)
- **Skew/distort:** (transform: skew)

### Distance
- Small movement: (pixels)
- Medium movement: (pixels)
- Large movement: (pixels)

### Trigger Points
- Trigger on element: (enter viewport / specific scroll position / other)
- Duration of animation: (how long it animates)

---

## Hover States

### Timing
- Standard hover: (milliseconds)
- Quick feedback: (milliseconds)

### Easing
- Hover enter: (cubic-bezier values)
- Hover exit: (cubic-bezier values)

### Effects
- **Scale:** (transform: scale percentage)
- **Color shift:** (color change description)
- **Glow/shadow:** (shadow or filter effects)
- **Rotation:** (transform: rotate degrees)

### Intensity Levels
- Subtle: (quiet, minimal change)
- Moderate: (noticeable, clear feedback)
- Strong: (dramatic, attention-getting)

### Disabled States
(How hover behaves when disabled)

---

## Page Transitions

### Timing
- Standard page transition: (milliseconds)
- Fast navigation: (milliseconds)
- Slow cinematic: (milliseconds)

### Easing
- Page enter: (cubic-bezier values)
- Page exit: (cubic-bezier values)

### Effects
- **Fade:** (opacity transition)
- **Slide:** (horizontal or vertical translate)
- **Dissolve:** (fade with slight scale)
- **Reveal:** (content pushes in)

### Direction
- Left-to-right
- Right-to-left
- Top-to-bottom
- Bottom-to-top
- Diagonal
- Zoom

### Next page readiness
(Do we wait for animation to finish or load page simultaneously)

---

## Micro-interactions

### Button clicks
- Duration: (milliseconds)
- Effect: (scale / glow / ripple / other)
- Purpose: (feedback)

### Form interactions
- Input focus: (animation)
- Validation feedback: (animation)
- Submission: (animation)

### Menu interactions
- Open menu: (animation)
- Close menu: (animation)
- Navigation click: (animation)

### Toast/notification
- Enter animation: (animation)
- Exit animation: (animation)

---

## Performance Considerations

### GPU Acceleration
- Properties to animate: (transform, opacity only)
- Properties NOT to animate: (width, height, layout properties)

### Reduced Motion Preference
```
@media (prefers-reduced-motion: reduce) {
  /* Simplified animations */
}
```

### Debouncing / Throttling
(How to prevent animation overload)

### Mobile Performance
(Simplified animations for mobile)

---

## Animation Framework

### Technology Choice
- CSS Animations: (for simple transitions)
- CSS Transitions: (for property changes)
- GSAP: (for complex sequences)
- Motion: (for component animations)
- Lenis: (for scroll smoothing)
- Custom JS: (for unique interactions)

### Framework Integration
(How animations connect to the framework)

### Performance Monitoring
(Tools to measure animation performance)

---

## Accessibility

### Respecting Motion Preferences
- Support prefers-reduced-motion
- Provide non-motion alternatives

### Focus States
- Keyboard navigation animation
- Focus indicators

### Semantic Motion
(Motion that communicates, not distracts)

---

## Motion Token System

### Durations
```
--motion-fast: 100ms
--motion-normal: 300ms
--motion-slow: 500ms
```

### Easing
```
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)
--ease-entrance: cubic-bezier(0, 0, 0.2, 1)
--ease-exit: cubic-bezier(0.4, 0, 1, 1)
```

### Distances
```
--distance-small: 8px
--distance-medium: 16px
--distance-large: 32px
```

---

## Motion Testing

### What to Test
- Animation smoothness (60fps)
- Animation clarity (can user understand it)
- Animation purpose (does it serve function)
- Mobile performance (reduced animations)
- Accessibility (motion preferences respected)

### Tools
(Lighthouse, DevTools, accessibility checkers)

---

## Motion Patterns Library

### Pattern: (Name)
- **Use case:** (where this motion is used)
- **Duration:** (milliseconds)
- **Easing:** (curve)
- **CSS/Code:** (implementation)

---

## Status

Motion language defined: ✗
Easing curves chosen: ✗
Frameworks selected: ✗
Tokens created: ✗
Ready for implementation: ✗
