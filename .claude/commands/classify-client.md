# /classify-client

## Purpose
Determine the right professional/creative split for the client type, which informs all design decisions.

## What It Does
1. Reads client brief
2. Analyzes client type
3. Applies design split rules
4. Explains the split rationale
5. Updates DESIGN_BRIEF.md with classification

## What It Reads
- DESIGN_BRIEF.md

## What It Updates
- DESIGN_BRIEF.md (adds client classification section)

## Classification Rules

### Business / Company
- **70% professional / 30% creative**
- Credibility comes first
- Creativity supports trust
- Examples: SaaS, agencies, consultancies, fintech
- Focus: Authority, expertise, proven results

### Artist / Small Creative Individual
- **30% professional / 70% creative**
- Expression comes first
- Structure supports identity
- Examples: Photographers, designers, musicians, illustrators
- Focus: Vision, uniqueness, personality

### Art Institution / Gallery / Museum
- **40% professional / 60% creative**
- Cultural credibility + visual originality must both be strong
- Examples: Museums, galleries, cultural centers, heritage organizations
- Focus: Authority + innovation balance

### Hybrid (Custom)
- Mix based on specific situation
- Document why the split makes sense
- Example: Creative agency = 50/50 (needs both)

## Output Format

```
CLIENT CLASSIFICATION

Type: [Business/Artist/Institution/Hybrid]

Professional/Creative Split: XX% / YY%

Rationale: [Explain why this split fits]

Design Implications:
- Typography emphasis: [e.g., "readable and strong"]
- Visual approach: [e.g., "minimal with signature accents"]
- Motion approach: [e.g., "purposeful, not decorative"]
- Risk factors: [e.g., "avoid seeming cold"]
```

## Examples

**SaaS Company:**
Type: Business
Split: 70/30
Rationale: Enterprise audiences need trust and credibility first. Creativity shows sophistication in execution, not wild expression.

**Fine Artist Portfolio:**
Type: Artist
Split: 30/70
Rationale: Portfolio exists to showcase creative work. Professional structure (navigation, clarity) supports but doesn't dominate the vision.

**Museum Website:**
Type: Institution
Split: 40/60
Rationale: Must establish cultural authority while pushing visual/conceptual boundaries to feel forward-thinking.

## Do Not Do
- Do not reverse the split based on preference
- Do not ignore the client type
- Do not apply same split to every project
