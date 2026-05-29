# /qa-score

## Purpose
Score the website design out of 100 using a strict quality scorecard. Identifies weakest areas for improvement.

## What It Reads
- Built website/homepage
- DESIGN_BRIEF.md (goals, success metrics)
- SELECTED_CONCEPT.md (concept to evaluate against)
- DESIGN_SYSTEM.md (standards)

## Scoring Categories (100 points total)

### 1. Originality /15
- Does it feel original or generic?
- Could competitors replicate this?
- Does it own a unique visual direction?
- Is the concept clearly expressed?

### 2. Client Fit /15
- Matches brief and goals?
- Correct professional/creative split?
- Solves stated problem?
- Matches target audience?

### 3. Visual Hierarchy /15
- Is the most important content most prominent?
- Is navigation clear?
- Is the path to action obvious?
- Is scanning logical?

### 4. Typography /10
- Typefaces support concept?
- Hierarchy is clear and intentional?
- Readability is good?
- Spacing and sizing feel right?

### 5. Motion Quality /10
- Does motion serve purpose?
- Does it feel smooth and intentional?
- Does it enhance UX or distract?
- Does it respect reduced-motion preference?

### 6. Mobile Quality /10
- Responsive layout works?
- Touch targets are appropriate?
- Typography scales well?
- No content lost on mobile?

### 7. Image/Art Direction /10
- Images align with visual concept?
- Quality is consistent?
- Cropping is thoughtful?
- Treatment is original?

### 8. Performance /5
- Page loads acceptably?
- No janky animations?
- Images are optimized?
- No unnecessary assets?

### 9. Accessibility /5
- Proper semantic HTML?
- ARIA attributes correct?
- Color contrast adequate?
- Keyboard navigation works?

### 10. Conversion Clarity /5
- Primary action is clear?
- CTA text is compelling?
- Form fields are intuitive?
- Success path is obvious?

## Scoring Rules

- **15/15 = Perfect** — Could not be better
- **12-14/15 = Strong** — Minor improvements possible
- **9-11/15 = Solid** — Clear strengths, some weaknesses
- **6-8/15 = Adequate** — Works but has notable issues
- **0-5/15 = Weak** — Needs significant work

## Output Format

```
## QUALITY SCORECARD

**Total Score: XX/100**

**Grade:** A (85+), B (75-84), C (65-74), D (55-64), F (below 55)

---

### 1. Originality: X/15
**Analysis:** [Assessment]
**Strengths:** [What works]
**Weaknesses:** [What needs work]

### 2. Client Fit: X/15
**Analysis:** [Assessment]
**Strengths:** [What works]
**Weaknesses:** [What needs work]

[... continue for all 10 categories ...]

---

## Summary

**Strongest Category:** [Category] at X/15
**Weakest Category:** [Category] at X/15

**Critical Issues (score < 6):**
- [Issue 1]
- [Issue 2]

**Major Issues (score 6-8):**
- [Issue 1]
- [Issue 2]

**Nice-to-Have Improvements (score 9+):**
- [Issue 1]

---

## Verdict

Score: XX/100

If score ≥ 85: Ready for final review
If score < 85: Must fix weakest areas before launch

Next step: `/fix-weakest` or `/final-review`
```

## Completion Threshold

- **Business sites:** Professional trust must be 8/15+
- **Creative sites:** Originality must be 8/15+
- **All sites:** Must score 85+

## Do Not Do
- Do not be lenient with scoring
- Do not score higher because "it's good for the time available"
- Do not ignore obvious weaknesses
- Do not adjust standards for different clients
