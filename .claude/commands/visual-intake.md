# /visual-intake

## Purpose
Ingest visual references and style examples WITHOUT locking the design direction. Stay in open intake mode while references are being added.

## What It Does
1. Accepts screenshots, images, moodboards, Pinterest links
2. Downloads/stores images in reference/visual-cues/
3. Logs each reference with source and notes
4. Classifies into style families
5. Keeps intake open until user says "I'm done"

## What It Reads
- REFERENCE_AUDIT.md (if starting, empty otherwise)
- reference/visual-cues/ (current images)

## What It Updates
- REFERENCE_AUDIT.md
- reference/visual-cues/ (stores images)

## Process

When references are added:
1. Ask: "What draws you to this? What should I notice?"
2. Store with descriptive filename
3. Classify into visual style family (see VISUAL_REFERENCE_SYSTEM.md)
4. Log mood, colors, typography, motion, interaction ideas
5. Note what NOT to copy (logos, exact layouts, protected elements)

## Visual Style Families

Reference options:
- Abstract tech
- Dark academia
- Numbers/numeric typography
- Art Deco
- Retro gorpcore
- Adventure pulp
- Iridescent holographic
- Science archive
- Swiss functional
- Surreal body
- Glitch/digital fragmentation
- Optical geometry
- Liquid chrome
- Dark cinematic neon
- Zine/DIY editorial
- Analog poster blur
- Risograph print culture
- Googie retro-futurism
- Pottery/ceramic

## Reference Classification

For each reference, record:
- Source (website, Pinterest, Google, local)
- Visual family
- Mood
- Color behavior
- Typography approach
- Texture/material
- Motion/interaction ideas
- Image treatment
- Layout rhythm
- What to copy (mood, spacing, type attitude)
- What NOT to copy (logo, exact layout, protected images)

## Do Not Do
- Do not finalize art direction
- Do not lock on first reference
- Do not dismiss references
- Do not assume the style is set
- Do not say "I'm done" until user confirms

## Signal
When user says "I'm done" or "that's enough references", proceed to `/audit-references` to finalize style families.
