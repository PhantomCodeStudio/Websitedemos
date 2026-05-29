# /site-loop

**Purpose:** Run the complete 20-step Phantom Code workflow in sequence with approval gates

**When to use:** Start-to-finish project execution

---

## Full Workflow (20 Steps)

This command orchestrates the complete project workflow with approval gates between major phases.

### Phase 1: Strategy & Analysis (Steps 1-4)
```
Step 1: /new-site
→ Answer strategy questions
→ Document client brief

Step 2: /classify-client
→ Determine professional/creative split
→ Define design approach

Step 3: /visual-intake
→ Review all visual references
→ Document mood and direction

Step 4: /audit-references
→ Classify references into style families
→ Group into visual buckets
[APPROVAL GATE: Continue with references?]
```

### Phase 2: Concept Development (Steps 5-8)
```
Step 5: /concept-bank
→ Generate 20 distinct concepts
→ Document each fully

Step 6: /concept-filter
→ Evaluate against criteria
→ Reduce to top 5-7 concepts
[APPROVAL GATE: Continue with these concepts?]

Step 7: /concept-remix
→ Combine strongest elements
→ Create 3-4 hybrid concepts

Step 8: /concept-select
→ Choose main direction + backup
→ Lock visual direction
[APPROVAL GATE: Lock this direction?]
```

### Phase 3: System Definition (Steps 9-12)
```
Step 9: Build DESIGN_SYSTEM.md
→ Typography system
→ Color system
→ Spacing system
→ Component list

Step 10: Build MOTION_SYSTEM.md
→ Animation language
→ Transition standards
→ Micro-interaction patterns

Step 11: /audit-components
→ Classify all existing components
→ Decide use/adapt/build

Step 12: /creative-gap-check
→ Identify missing tools/components
→ Plan gap solutions
[APPROVAL GATE: OK to proceed with build?]
```

### Phase 4: Asset Planning (Steps 13-15)
```
Step 13: /image-prompt-pass
→ Create detailed still image prompts
→ Document all visual requirements

Step 14: /video-prompt-pass
→ Create detailed video prompts
→ Document motion specifications

Step 15: /image-layer-pass
→ Plan image composition
→ Plan mobile crops
→ Plan optimization
[APPROVAL GATE: Ready to generate assets?]
```

### Phase 5: Build & Implementation (Steps 16-19)
```
Step 16: /build-homepage
→ Phase 1: Foundation (header, hero)
→ Phase 2: Core content (sections)
→ Phase 3: Supporting (footer, etc.)
→ Phase 4: Motion pass (animations)
→ Phase 5: Images (optimized)
→ Phase 6: Mobile & polish (responsive)

Step 17: /motion-pass
→ Ensure smooth animations
→ Add purpose to each motion
→ Performance optimization

Step 18: /mobile-pass
→ Complete responsive testing
→ Touch optimization
→ Mobile performance

Step 19: /qa-score
→ Full quality scorecard evaluation
→ Score each category (0-100)
→ Identify lowest scoring areas
[APPROVAL GATE: Score 85+?]
```

### Phase 6: Quality & Launch (Step 20)
```
Step 20: Complete launch checklist
→ If score < 85: /fix-weakest
→ Re-score after fixes
→ Repeat until 85+

Final: /save-learnings
→ Document all insights
→ Update learning files
→ Team sign-off
[FINAL APPROVAL: Ready to launch?]
```

---

## Approval Gates

Between each major phase, pause for user approval:

1. After visual reference audit → OK to proceed with concepts?
2. After concept selection → Lock this visual direction?
3. After gap analysis → OK to build with this plan?
4. After asset prompts → Ready to generate assets?
5. After QA scoring → Score 85+? (if not, run /fix-weakest loop)
6. Final → Ready to launch?

---

## Timeline

Phase 1 (Strategy): 1-2 days
Phase 2 (Concepts): 2-3 days
Phase 3 (Systems): 2-3 days
Phase 4 (Assets): 1-2 days
Phase 5 (Build): 5-7 days
Phase 6 (QA): 1-2 days

**Total: 12-20 days**

---

## Deliverable

Production-ready website with:
- Locked visual direction
- Complete design system
- All components built/adapted
- All assets generated and optimized
- Mobile fully responsive
- Quality score 85+
- Accessibility compliant
- Performance optimized
- Ready for launch

All learnings documented.
