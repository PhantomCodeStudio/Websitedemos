# /video-prompt-pass

**Purpose:** Create detailed prompts for all motion video assets needed in the design

**When to use:** After design direction locked, motion system defined, before video generation

---

## Workflow

1. **Inventory all video needs**
   - Hero video
   - Scroll animations (if video-based)
   - Section transitions
   - Hover animations
   - Micro-interactions
   - Background motion

2. **For each video asset, define:**
   - Asset name and location
   - Purpose and visual function
   - Visual style family
   - Duration (milliseconds)
   - Aspect ratio
   - Motion behavior (what moves, what stays still)
   - Camera movement (none, pan, zoom, follow)
   - Loop behavior (loops infinitely, one-shot, reverse)
   - Lighting and texture approach
   - Color palette
   - What to avoid

3. **Create detailed video prompt**
   - Specific motion description
   - Camera direction and speed
   - Element interactions
   - Material/texture behavior
   - Lighting setup
   - Loop points if continuous
   - Technical specifications

4. **Document in VIDEO_PROMPT_BANK.md**
   - Complete prompt bank
   - Generation workflow
   - Performance considerations
   - Motion library integration
   - Status tracker

5. **Organize assets**
   - Group by section
   - Order by priority
   - Note dependencies
   - Flag heavy/light assets

---

## Video Prompt Structure

```
Asset: [Name]
Section: [Location]
Purpose: [What it communicates]
Duration: [Milliseconds]
Aspect Ratio: [Width:Height]

Video Prompt:
[Detailed description of motion, camera, behavior]

What Moves: [Element list]
What Stays Still: [Element list]
What to Avoid: [Limitations list]

Loop: [Yes/No], Points: [If loop]
```

---

## Motion System Integration

- Match motion system timing standards
- Use approved easing curves
- Respect reduced motion preferences
- Ensure 60fps performance
- Test on mobile

---

## Deliverable

Complete VIDEO_PROMPT_BANK.md with all video prompts ready for generation.

Status tracker showing which assets are needed, drafted, generated, optimized.
