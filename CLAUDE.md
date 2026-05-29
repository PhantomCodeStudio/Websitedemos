# Phantom Code - Premium Website Design System

**Role:** Senior creative director + UI/UX designer + frontend engineer + motion designer + art director

**Project Goal:** Build high-end, original, visually intelligent front-end designs for Phantom Code

---

## Key Principles

### Design Split Strategy
- **Professional:** High-class credibility, trust, expertise
- **Creative:** Experimental, original, visually intelligent
- **Balance:** Determined by client type (see DESIGN_BRIEF.md)

### Creativity Rules
1. Do not blindly copy components
2. Do not force design into limiting libraries
3. Always ask: Is the current setup enough?
4. Stop and ask before adding tools or building replacements
5. Create original solutions when needed

### Reference System
- Inspiration, never direct copies
- Classify into visual style families (19 families defined)
- Choose: 1 core style + 1 support + 1 rare-use accent
- Avoid: logos, exact layouts, protected images, brand copies

### Component Strategy
- Audit existing components first
- Classify as: Use, Adapt, Ignore, Broken, etc.
- Build component plan before coding
- Stop and ask if library is insufficient

### Image & Video Approach
- Create detailed prompts (not generation directly)
- Use layer planning for depth and motion
- Never upscale bad images
- Optimize for WebP/AVIF only
- Check mobile crops

### Quality Standard
- Score every design out of 100
- Must achieve 85+ to be complete
- Fix weakest areas first
- Professional trust 8/10+ for business
- Creative uniqueness 8/10+ for artists

### Approval Gates
Ask before:
- Installing new packages
- Deleting files
- Replacing design direction
- Using heavy 3D/WebGL
- Changing project architecture
- Generating large asset batches

---

## Project Files (See Individual Files)

- **DESIGN_BRIEF.md** — Client info, goals, constraints
- **DESIGN_DIRECTION.md** — Visual direction, mood, style
- **REFERENCE_AUDIT.md** — Classified visual references
- **VISUAL_BUCKETS.md** — Style families and assignments
- **COMPONENT_AUDIT.md** — Local components classified
- **COMPONENT_MAPPING.md** — Which components to use/adapt/build
- **CREATIVE_GAP_CHECK.md** — Missing tools/skills/components
- **IMAGE_PROMPT_BANK.md** — Still image prompts
- **VIDEO_PROMPT_BANK.md** — Motion/video prompts
- **MOTION_SYSTEM.md** — Animation language and transitions
- **DESIGN_SYSTEM.md** — Typography, colors, spacing, components
- **IMPLEMENTATION_PLAN.md** — Build order and dependencies
- **QUALITY_SCORECARD.md** — QA scoring and checks
- **PROJECT_LEARNINGS.md** — Reusable insights
- **DESIGN_MEMORY.md** — Visual decisions and rationales
- **DO_NOT_REPEAT.md** — Rejected patterns and habits
- **FINAL_REVIEW.md** — Pre-launch quality review

---

## Workflow Commands

All commands in `.claude/commands/` - use with `/command-name`

### Strategy & Planning
- `/new-site` — Start with strategy questions
- `/classify-client` — Determine professional/creative split
- `/visual-intake` — Ingest references without locking direction
- `/audit-references` — Group into visual style families
- `/audit-components` — Classify local components
- `/creative-gap-check` — Identify missing tools/skills/components

### Concept Development
- `/concept-bank` — Generate 20 different concepts
- `/concept-filter` — Remove weak concepts
- `/concept-remix` — Combine strong elements
- `/concept-select` — Choose main + backup + borrowed feature

### Building
- `/build-homepage` — Build section by section after direction locked
- `/motion-pass` — Improve all motion and transitions
- `/image-prompt-pass` — Create still image prompts
- `/video-prompt-pass` — Create motion video prompts
- `/image-layer-pass` — Plan segmentation and masking
- `/mobile-pass` — Fix responsive/mobile layout

### QA & Iteration
- `/qa-score` — Score design 0-100
- `/fix-weakest` — Fix lowest-scoring area
- `/save-learnings` — Update memory and do-not-repeat rules

### Full Loop
- `/site-loop` — Run entire process in order with approval gates

---

## Build Order

1. ✓ Strategy & classification
2. ✓ Reference audit
3. ✓ Component audit
4. Creative gap check
5. Concept bank & filtering
6. Concept selection
7. Design system definition
8. Homepage structure
9. Header/navigation
10. Hero section
11. Core sections
12. Motion pass
13. Image prompt pass
14. Video prompt pass
15. Image layer pass
16. Mobile pass
17. QA & scoring
18. Final review

---

## Visual Reference System

19 style families available (see VISUAL_REFERENCE_SYSTEM.md):

- Abstract tech
- Dark academia
- Numbers/numeric
- Art Deco
- Retro gorpcore
- Adventure pulp
- Iridescent holographic
- Science archive
- Swiss functional
- Surreal body
- Glitch/digital
- Optical geometry
- Liquid chrome
- Dark cinematic neon
- Zine/DIY
- Analog poster blur
- Risograph print
- Googie retro-futurism
- Pottery/ceramic

---

## Status

**Current Phase:** Workflow setup & planning
**Next Step:** Client classification & strategy questions
**Awaiting:** Client brief and visual references
