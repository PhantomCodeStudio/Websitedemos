# /creative-gap-check

**Purpose:** Identify missing tools, skills, components, and capabilities needed for the chosen design direction

**When to use:** After visual direction is locked; before build planning

---

## Workflow

1. **Audit current toolkit**
   - Check package.json for existing libraries
   - List CSS/animation tools available
   - Review component library state
   - Assess image/video generation setup
   - Check testing framework

2. **Check against direction requirements**
   - Motion system: Can we build it with current tools?
   - Image generation: Do we have the right AI tools?
   - Components: Are all needed components available?
   - Styling: Is our CSS approach appropriate?
   - Performance: Can we hit target metrics?

3. **Identify gaps**
   - Missing packages (GSAP, Lenis, Framer Motion, etc.)
   - Missing components (form system, modal, tooltip, etc.)
   - Missing skills (WebGL, complex animation, etc.)
   - Missing workflows (image optimization, video editing, etc.)
   - Architecture limitations (Next.js limitations, etc.)

4. **Assess each gap**
   - Can we build it ourselves?
   - Should we install a package?
   - Should we adapt existing code?
   - What's the complexity level?
   - What are the risks?

5. **Document in CREATIVE_GAP_CHECK.md**
   - Gap description
   - Current state
   - Needed state
   - Build vs Buy decision
   - Difficulty rating
   - Timeline estimate
   - Risk assessment

---

## Approval Gates

Ask user before:
- Installing major new packages
- Changing project architecture
- Replacing design direction
- Using heavy 3D/WebGL
- Generating large asset batches

---

## Deliverable

Update CREATIVE_GAP_CHECK.md with complete analysis.

Get approval for any significant package installations or architecture changes.

Build dependency list for Phase 1 of implementation.
