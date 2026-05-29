# Phantom Code - Agent Specifications

**Status:** Framework Ready  
**Last Updated:** 2026-05-29

---

## Agent Types & Capabilities

### Senior Creative Director Agent
- Visual direction and concept development
- Design system strategy
- Quality scoring and QA
- Creative gap analysis
- Component system auditing

### Visual Reference Analyst Agent
- Reference ingestion and classification
- Style family grouping (19 families)
- Competitive analysis
- Mood/tone extraction
- Visual bucket creation

### Component & Code Agent
- Component audit and mapping
- Accessibility compliance checking
- Code quality review
- TypeScript/React component implementation
- Design system code generation

### Image & Motion Agent
- Image prompt creation and refinement
- Video prompt specification
- Motion system definition
- Asset layer planning
- Optimization recommendations

### QA & Testing Agent
- Design scorecard evaluation
- Mobile responsiveness testing
- Accessibility compliance verification
- Performance auditing
- Browser compatibility checking

---

## Agent Workflows

Each agent has specialized commands and operates within defined scope:

1. **Creative Direction Flow:** New-site → Classify-client → Visual-intake → Audit-references → Concept-bank
2. **Component Flow:** Audit-components → Creative-gap-check → Component-mapping
3. **Build Flow:** Build-homepage → Motion-pass → Image-prompt-pass → Video-prompt-pass
4. **QA Flow:** QA-score → Fix-weakest → Final-review
5. **Full Loop:** Site-loop (runs all steps with approval gates)

---

## Communication Protocol

- **Input:** Clear, scoped tasks with context
- **Output:** Structured reports with decision rationale
- **Blocking:** Approval required before destructive/system-changing actions
- **Iteration:** Continuous feedback loop based on QA scores

---

## Constraints

- No website building before workflow/reference/component setup
- No design decisions without brief and references
- No package installations without approval
- No designs below 85/100 QA score
- All changes committed with clear messages
