# /fix-weakest

**Purpose:** Identify and systematically improve the lowest-scoring category in the quality scorecard

**When to use:** After scoring with /qa-score if score is below 85

---

## Workflow

1. **Run quality scorecard** (or reference existing scores)
   - Use /qa-score command to evaluate all 10 categories
   - Or review scores already in QUALITY_SCORECARD.md
   - Identify lowest score

2. **Analyze lowest category**
   - Current score and target score
   - What's missing vs. what's excellent
   - Assessment questions for that category
   - Specific weak points

3. **Define improvement plan**
   - Priority fixes (highest impact first)
   - Estimated effort for each fix
   - Build vs. redesign decision
   - Timeline estimate

4. **Implement improvements**
   - Execute the priority fixes
   - Re-test after each major fix
   - Document what changed
   - Verify impact

5. **Re-score that category**
   - Use same assessment criteria
   - Be honest about score
   - Check if score improved enough
   - If still below target, repeat process

6. **Continue until 85+**
   - If still below 85, identify new weakest category
   - Repeat fix process
   - Loop until total score 85+

---

## Example Lowest Categories & Fixes

**If Originality is lowest (score 5/15):**
- Identify what feels generic
- Add unique visual choices
- Strengthen interaction concepts
- Create distinctive details
- Break from pattern library

**If Mobile Quality is lowest (score 4/10):**
- Fix responsive layout breaks
- Optimize touch targets
- Improve mobile image handling
- Speed up mobile load
- Test on real devices

**If Accessibility is lowest (score 2/5):**
- Fix color contrast issues
- Improve keyboard navigation
- Add visible focus states
- Enhance form labels
- Test with screen readers

**If Motion Quality is lowest (score 3/10):**
- Remove jank/stuttering
- Add purpose to each motion
- Improve easing curves
- Reduce motion overuse
- Performance optimization

---

## Quality Target

Each category must contribute to total 85+.

No category can drag down overall quality.

Fix weakest first, always.

---

## Deliverable

Quality score improved to 85+ with all categories strengthened.

No single category is significantly weaker than others.

Ready for launch approval.
