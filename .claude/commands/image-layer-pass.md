# /image-layer-pass

**Purpose:** Plan image composition, segmentation, and masking for depth, motion, and mobile optimization

**When to use:** After image prompts finalized, before image generation

---

## Workflow

1. **Review image generation prompts**
   - Pull all prompts from IMAGE_PROMPT_BANK.md
   - Identify complex compositions
   - Note depth requirements
   - Flag animation requirements

2. **Plan layer strategy**
   For each image, define:
   - Foreground elements (what layer)
   - Midground elements (what layer)
   - Background elements (what layer)
   - Depth approach (how to create depth)
   - Motion requirements (what might move)
   - Masking needs (what parts need isolation)

3. **Mobile cropping strategy**
   - How to reframe for mobile
   - What to keep in frame
   - What can be cropped
   - Aspect ratio adjustments
   - Safe zones for text overlays

4. **Generate full-resolution**
   - Don't upscale bad images
   - Generate at target resolution
   - Generate multiple variations if needed
   - Plan for WebP/AVIF conversion

5. **Document layer plan**
   - Image name
   - Layer breakdown
   - Crop variations (desktop, tablet, mobile)
   - Masking specifications
   - File format specifications
   - Optimization settings

---

## Layer Planning Questions

- What are the key foreground/midground/background elements?
- How should depth be suggested?
- Are there animated overlays?
- Can we isolate specific elements for motion?
- How will this crop for mobile?
- What's the safe zone for text?
- What resolution do we need?
- Should we generate variations?

---

## Optimization Strategy

- Generate at 2x resolution, downscale for better quality
- Create WebP versions (smaller file size)
- Create AVIF versions (best compression)
- Plan mobile crops (wider aspect ratio for mobile)
- Optimize file sizes before integration

---

## Deliverable

Complete layer planning for all images, with crop variations and optimization specs ready for integration.

Images ready to be imported as WebP/AVIF with proper mobile handling.
