# /motion-pass

## Purpose
Add, improve, and refine all motion and animation to match the motion language defined in the design system.

## What It Reads
- Built website
- MOTION_SYSTEM.md (motion language defined)
- SELECTED_CONCEPT.md (concept motion requirements)
- DESIGN_SYSTEM.md (animation standards)

## What It Updates
- Website component motion
- Updates MOTION_SYSTEM.md with final animations
- Documents motion decisions in DESIGN_MEMORY.md

## Motion Elements to Address

### 1. Page Transitions
- How do pages enter?
- How do pages exit?
- Is timing consistent?
- Does it match concept?

### 2. Scroll Behavior
- Do elements animate on scroll?
- Is parallax used? (if concept calls for it)
- Are reveals well-timed?
- Does motion respect scroll direction?

### 3. Hover States
- Do interactive elements provide feedback?
- Is timing snappy or deliberate?
- Do hover animations enhance UX?
- Are they consistent?

### 4. Click/Tap Feedback
- Do buttons have press feedback?
- Do forms give submission feedback?
- Is loading state animated?
- Is success state clear?

### 5. Menu/Navigation
- Does menu slide, fade, or explode in?
- Does submenu animation make sense?
- Is close animation the reverse?
- Does it feel responsive?

### 6. Modal/Overlay
- How does modal appear?
- Does backdrop fade in?
- Does modal have entrance animation?
- Does close animation feel like opposite?

### 7. Form Interactions
- Do fields animate on focus?
- Does error state transition smoothly?
- Is validation feedback clear?
- Is submission satisfying?

### 8. Content Reveals
- Do headings fade or slide in?
- Do images appear gradually?
- Is timing staggered or simultaneous?
- Does reveal timing match scroll speed?

## Motion Language Rules

Check against MOTION_SYSTEM.md:

- **Timing:** Does it match defined speed (fast/medium/slow)?
- **Easing:** Does it use defined easing (ease-in/ease-out/custom)?
- **Distance:** Are movements proportional?
- **Intentionality:** Does the motion serve a purpose?
- **Consistency:** Does every instance follow the same rules?
- **Reduced Motion:** Are all animations optional for users with `prefers-reduced-motion`?

## Pass Process

1. **Audit existing motion**
   - What animations exist?
   - What feels right?
   - What feels wrong?

2. **Identify missing animations**
   - Where should motion enhance UX?
   - Where is it missing?
   - What would improve the concept?

3. **Implement/improve animations**
   - Add missing motion
   - Adjust timing/easing
   - Test smooth playback
   - Verify accessibility

4. **Test across devices**
   - Desktop smooth?
   - Mobile smooth?
   - No janky frame drops?
   - CPU performance okay?

## Output Format

```
## MOTION PASS COMPLETE

**Overall Motion Quality:** X/10

**Animations Added:** [List]
**Animations Improved:** [List]
**Animations Removed:** [List]

**Motion Language Compliance:**
- Timing ✓/✗
- Easing ✓/✗
- Consistency ✓/✗
- Purpose ✓/✗
- Accessibility ✓/✗

**Performance:** Smooth / Has Issues

**Updated:** MOTION_SYSTEM.md with final animation specs
```

## Do Not Do
- Do not add motion just because you can
- Do not use different easing for similar animations
- Do not make motion too fast to follow
- Do not break reduced-motion support
- Do not add animations that are distracting
- Do not forget mobile performance implications
