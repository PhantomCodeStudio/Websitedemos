# Video Prompt Bank

**Status:** Pending video/motion requirements  
**Last Updated:** 2026-05-29

---

## Purpose

This document contains detailed prompts for all video, animation, and motion graphics needed for the website. It covers both AI-generated video and motion design briefs.

---

## Video Format Template

For each video, include:

- Asset name
- Section
- Visual family
- Purpose
- Duration
- Aspect ratio
- Video prompt
- Motion behavior
- Camera movement
- Loop behavior
- Texture/lighting
- What should stay still
- What should move
- What to avoid
- Filename suggestion

---

## Hero Video (if applicable)

### Video 1: (Name)

**Asset name:** hero-motion-bg  
**Section:** Hero  
**Visual family:** (From VISUAL_BUCKETS.md)  
**Purpose:** (Background motion, attention, storytelling)  
**Duration:** (seconds)  
**Aspect ratio:** (16:9, 4:3, 1:1, etc.)

**Video prompt:**
(Detailed prompt for generation or motion brief)

**Motion behavior:** (How the elements move - smooth, rhythmic, kinetic, etc.)  
**Camera movement:** (Pan, zoom, rotate, none)  
**Loop behavior:** (Seamless loop, fade transition, stop and reset)  
**Texture/lighting:** (Evolution of texture or lighting over time)

**What should stay still:** (Elements that must be static)  
**What should move:** (Elements with motion)  
**What to avoid:** (Visual artifacts, distracting motion)

**Website use:** (How video is embedded, timing)  
**Filename suggestion:** hero-motion-bg-16x9.mp4

---

## Scroll Transition Videos

### Scroll Animation: (Section)

**Asset name:** scroll-section-name  
**Purpose:** (What triggers this motion)  
**Duration:** (milliseconds of animation)  
**Direction:** (Vertical / Horizontal / Custom)

**Motion prompt:**
(Description of what happens as user scrolls)

**Easing curve:** (Linear / Ease-in / Ease-out / Cubic-bezier)  
**Start position:** (Initial state)  
**End position:** (Final state)  
**Parallax offset:** (If using parallax)

---

## Hover State Videos

### Hover animation: (Component)

**Asset name:** hover-component-name  
**Component:** (Which element)  
**Trigger:** (On hover / On click / On scroll)  
**Duration:** (milliseconds)

**Motion language:**
(What the motion communicates - invitation, response, feedback)

**Animation phases:**
1. Rest state: (initial appearance)
2. Hover state: (activated appearance)
3. Return: (how it goes back)

---

## Page Transition Videos

### Page transition: (Page A → Page B)

**Asset name:** transition-page-a-to-b  
**From page:** (Page name)  
**To page:** (Page name)  
**Duration:** (milliseconds)

**Motion concept:**
(How the old content leaves and new content enters)

**Easing:** (Timing curve)  
**Direction:** (Fade / Slide / Zoom / Rotate / Custom)

---

## Motion Language Standards

### Scroll Transitions
- **Timing:** (milliseconds)
- **Easing:** (curve type)
- **Effect:** (fade, scale, translate, skew, etc.)
- **Distance:** (How far elements move)

### Hover States
- **Timing:** (milliseconds)
- **Easing:** (curve type)
- **Effect:** (scale, color, glow, etc.)
- **Intensity:** (Subtle, moderate, strong)

### Page Transitions
- **Timing:** (milliseconds)
- **Easing:** (curve type)
- **Effect:** (fade, slide, dissolve, etc.)
- **Direction:** (Horizontal, vertical, diagonal)

---

## Micro-interaction Motions

### Interaction: (Name)

**Trigger:** (What causes this)  
**Element:** (What moves)  
**Duration:** (milliseconds)  
**Purpose:** (Feedback / Delight / Guidance)

**Motion behavior:**
(How it animates)

---

## Video Generation Workflow

### Software to Use
(Runwayml / Pika / Other / Custom CSS/JS)

### Refinement Process
1. Generate initial video
2. Adjust timing
3. Add transitions
4. Composite with overlays
5. Optimize for web

### Quality Standards
- Resolution: (minimum pixels)
- Format: (MP4 WebM)
- File size: (target kb)
- Frame rate: (24fps, 30fps, 60fps)
- Codec: (H.264, VP9)

---

## Motion Library Setup

### Animation Framework
(CSS Animations / GSAP / Motion / Framer / Custom)

### Easing Functions
(Define reusable easing curves for consistency)

### Motion Tokens
(Define standard durations, delays, distances)

---

## Asset Organization

### Directory Structure
```
prompts/
├── video/
│   ├── hero/
│   ├── sections/
│   ├── transitions/
│   └── interactions/
└── motion/
    ├── scroll/
    ├── hover/
    └── page-transitions/
```

### Naming Convention
(prefix-section-type-number.mp4)

### Metadata Tracking
(Where to document source, generation params, usage)

---

## Performance Considerations

### Video File Sizes
- Hero background: (target kb)
- Section videos: (target kb)
- Animations: (CSS/JS, no video)

### Fallbacks
(What happens if video doesn't load)

### Mobile Strategy
(Reduced complexity for mobile devices)

---

## Status Tracker

| Video/Motion | Status | Script | Generated | Integrated | Tested |
|--------------|--------|--------|-----------|------------|--------|
| | ⃟ Plan | ⃟ | ⃟ | ⃟ | ⃟ |

---

## Next Steps

Video requirements finalized: ✗
Prompts written: ✗
Ready for production: ✗
