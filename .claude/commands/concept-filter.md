# /concept-filter

## Purpose
Remove weak, generic, risky, or unsuitable concepts from the bank of 20, filtering down to 5-8 viable options.

## What It Reads
- CONCEPT_BANK.md (20 concepts)
- DESIGN_BRIEF.md (client type, goals, constraints)
- DO_NOT_REPEAT.md (patterns to avoid)

## What It Updates
- CONCEPT_BANK.md (marks filtered concepts)
- Creates FILTERED_CONCEPTS.md

## Filtering Criteria

### Remove if:
- Generic startup layout (centered hero + features)
- Uses only random AI gradients
- Contradicts client brief
- Violates DO_NOT_REPEAT rules
- Requires unavailable technology
- Impossible within timeline/budget
- Uses protected/trademarked visual elements
- Too experimental for client type (risk vs reward mismatch)
- Aesthetically incompatible with brand

### Keep if:
- Fits professional/creative split
- Solves stated problem
- Unique enough to stand out
- Executable within constraints
- Pushes boundaries appropriately
- Has clear visual identity
- Supports client goals
- Could be the "best version" of an idea

## Filtering Process

1. **Quick reject pass**
   - Remove obviously generic or unsuitable (5-10 removed)

2. **Risk assessment**
   - Keep risky if reward justifies it
   - Reject risky if low upside

3. **Feasibility check**
   - Can this be built well?
   - Do we have tools/components?
   - Time/budget fit?

4. **Client fit check**
   - Does this align with brief?
   - Does it convert?
   - Does it match professional/creative split?

5. **Uniqueness audit**
   - Is this original?
   - Does it differentiate?
   - Could a competitor do this?

## Output Format

```
## Concept [#]: [Name]

**Status:** KEEP / REJECT

**Reasoning:** [Why kept or rejected]

**Strengths:** [What works]

**Weaknesses:** [What doesn't]

**Risk Level:** Low / Medium / High

**Feasibility:** Yes / Maybe / No

**Client Fit:** Strong / Medium / Weak
```

## Do Not Do
- Do not keep concepts just because they're different
- Do not reject based on taste alone
- Do not remove risky concepts without considering upside
- Do not filter based on personal preference over client fit

## Output
FILTERED_CONCEPTS.md with 5-8 viable concepts ready for remix and selection.
