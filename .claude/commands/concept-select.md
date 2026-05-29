# /concept-select

## Purpose
Choose the final website concept: 1 main direction + 1 backup + 1 borrowed feature from another concept.

## What It Reads
- FILTERED_CONCEPTS.md (5-8 viable concepts)
- DESIGN_BRIEF.md (client type, goals)
- VISUAL_BUCKETS.md (visual direction)
- DO_NOT_REPEAT.md (what not to repeat)

## What It Updates
- Creates SELECTED_CONCEPT.md
- Updates DESIGN_DIRECTION.md with final direction
- Creates IMPLEMENTATION_PLAN.md starter

## Selection Process

### Step 1: Rank Viable Concepts
Score each filtered concept on:
- Client fit (0-10)
- Originality (0-10)
- Feasibility (0-10)
- Professional/creative balance (0-10)
- Visual strength (0-10)

Find the top 3 candidates.

### Step 2: Choose Main Concept
Select the concept that:
- Best fits client brief
- Has highest client fit score
- Feels most appropriate for professional/creative split
- Is most executable
- Most original while still professional enough

### Step 3: Choose Backup Concept
Select concept that:
- Is closest in spirit to main
- Could work if main doesn't develop well
- Different approach but same goal
- Good fallback if client feedback shifts direction

### Step 4: Identify Borrowed Feature
From the other filtered concepts:
- Find one strong unique element
- Could be: interaction pattern, motion idea, color treatment, typography approach, layout innovation
- Should enhance main concept without conflicting
- Is signature element from another concept

## Output Format

### SELECTED_CONCEPT.md

```
## Primary Concept: [Concept Name]

[Full concept description from CONCEPT_BANK.md]

**Why This Concept:**
- [Client fit reason]
- [Originality reason]
- [Brief alignment reason]
- [Professional/creative balance reason]

**Visual System:**
- Core style: [Style family]
- Typography: [Font strategy]
- Colors: [Palette]
- Motion: [Animation language]

**Key Components Needed:**
- [List]

**Tools/Packages Required:**
- [List]

**Success Looks Like:**
- [Concrete visual outcome]
- [User experience outcome]
- [Business outcome]

---

## Backup Concept: [Concept Name]

[Short description]

**When to use this instead:**
- [Client feedback signal 1]
- [Client feedback signal 2]
- [Problem with main concept]

---

## Borrowed Feature: [Feature Name]

**Source:** [Which concept]

**What it is:** [Description]

**Where it goes:** [Which section/interaction]

**Why it strengthens the main concept:** [Reasoning]

**Risk:** [Any conflicts to watch]

---

## Direction Locked

Status: LOCKED FOR BUILD
Ready for: Design system definition and homepage build

Next command: `/build-homepage`
```

## Do Not Do
- Do not choose based on personal taste over client fit
- Do not lock a weak concept just to move forward
- Do not choose backup that's too different from main
- Do not borrow a feature that conflicts with main concept

## After Selection
Once concept is locked:
1. Cannot change direction without revisiting this decision
2. All design decisions must serve the chosen concept
3. Check every major element against concept
4. Use as north star for all decisions
