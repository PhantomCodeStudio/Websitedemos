# /image-prompt-pass

## Purpose
Create detailed, high-quality prompts for all needed still images, organized in a prompt bank for future use.

## What It Reads
- Built website (identifies image needs)
- SELECTED_CONCEPT.md (visual concept)
- VISUAL_BUCKETS.md (image treatment direction)
- DESIGN_SYSTEM.md (color, mood, style)
- IMAGE_PROMPT_BANK.md (existing prompts)

## What It Updates
- IMAGE_PROMPT_BANK.md (adds new prompts)
- prompts/image/ (saves prompt files)

## Prompt Audit Process

1. **List all image placements**
   - Hero images
   - Section images
   - Background images
   - Accent graphics
   - Illustrations
   - Icons/symbols

2. **Identify missing or weak images**
   - What needs replacing?
   - What needs improving?
   - What needs creating fresh?

3. **Categorize by visual family**
   - Which visual style should it match?
   - What mood/energy?
   - What color temperature?

## Prompt Format (Use for All Images)

```
## Asset Name: [Name]

**Section:** [Where on site]
**Visual Family:** [Style family]
**Purpose:** [What this image communicates]
**Aspect Ratio:** [e.g., 16:9, 1:1, 4:3]

---

### STILL IMAGE PROMPT

[Detailed visual description]

**Negative Prompt:**
[What to explicitly avoid]

**Lighting:** [Natural/studio/dramatic/ambient]
**Material/Texture:** [Qualities of surfaces]
**Camera/Composition:** [Perspective, framing]
**Color Palette:** [Primary colors, mood]
**Style Restraint:** [Photography/illustration/abstract level]

**Website Use:** [Where/how used]
**Mobile Crop Notes:** [Important elements to preserve]
**Filename Suggestion:** [e.g., hero-tech-circuit.jpg]

---

### IMAGE TREATMENT (if needed)

**Inpainting:** [Parts to fill/modify]
**Outpainting:** [Extend beyond edges]
**Upscaling:** [Increase resolution]
**Layering:** [Separate foreground/background]
**Optimization:** [Format/compression]

---

### VARIATIONS NEEDED

- [Variation 1 description]
- [Variation 2 description]
- [Aspect ratio variant 1]
```

## Prompt Quality Checklist

For each prompt ensure:
- [ ] Specific visual descriptors (not generic)
- [ ] Matches selected concept
- [ ] Matches visual family
- [ ] Color palette is clear
- [ ] Mood is clear
- [ ] Avoids clichés
- [ ] Practical for execution
- [ ] Mobile crop considered
- [ ] Negative prompt addresses brand risks
- [ ] Photography/illustration level is specified

## Common Image Needs by Section

**Hero:** Large, impactful, sets mood
**Intro/About:** Establishes credibility
**Services/Work:** Shows what you do
**Case Studies:** Proves results
**Team/People:** Humanizes brand
**Pattern/Texture:** Visual system support
**Icons/Accents:** Functional + decorative

## Do Not Do
- Do not use generic AI terms (no "professional", "modern", "clean")
- Do not be vague about composition
- Do not forget aspect ratio
- Do not ignore brand voice in descriptions
- Do not skip mobile crop consideration
- Do not use clichéd descriptions
- Do not assume standard lighting

## Output

**IMAGE_PROMPT_BANK.md** with:
- All needed image prompts
- Organized by section
- Color palette included
- Mobile variants noted
- Organized by visual family

Ready for: Image generation or photographer brief
