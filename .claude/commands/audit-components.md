# /audit-components

**Purpose:** Systematically classify all existing components in the codebase

**When to use:** After visual direction is locked; before deciding what to build

---

## Workflow

1. **Inventory existing components**
   - List all components in src/components/
   - Note file structure and naming
   - Check for utilities, hooks, contexts

2. **Classify each component**
   - **Use:** Exactly matches direction, high quality
   - **Adapt:** Close match, needs small tweaks
   - **Ignore:** Wrong for this project, low quality
   - **Broken:** Doesn't work correctly
   - **Too Generic:** No personality, SaaS cliché
   - **Too Heavy:** Over-engineered for purpose
   - **Wrong for Brand:** Good component, wrong client
   - **Needs Dependency:** Broken due to missing package
   - **Poor Implementation:** Logic issues, performance problems

3. **Document in COMPONENT_AUDIT.md**
   - Component name
   - Current quality (1-10)
   - Classification reason
   - Required changes if adapting
   - Required tech stack
   - Accessibility status

4. **Create mapping plan**
   - Which components for each section
   - Adapt vs build decision
   - Dependencies and conflicts
   - Styling strategy
   - Motion integration

---

## Questions to Ask

- Does this match the visual direction?
- Is the code clean and maintainable?
- Does it handle responsive design?
- Are there accessibility issues?
- Does it need TypeScript improvements?
- Is performance acceptable?
- Does it conflict with chosen libraries?
- Can it be adapted or does it need replacing?

---

## Deliverable

Update COMPONENT_AUDIT.md with complete inventory and classifications.

Update COMPONENT_MAPPING.md with build plan.

Ask before deleting components or installing new dependencies.
