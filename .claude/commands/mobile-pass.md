# /mobile-pass

**Purpose:** Ensure complete mobile responsiveness, touch interactions, and mobile-specific optimizations

**When to use:** After core sections built; before final QA

---

## Workflow

1. **Responsive layout testing**
   - Test at 320px (smallest phone)
   - Test at 375px (iPhone SE)
   - Test at 768px (tablet)
   - Test at 1024px (iPad)
   - Test at 1920px (desktop)
   - Fix layout breaks at each breakpoint

2. **Typography responsiveness**
   - Font sizes scale appropriately
   - Line heights remain readable
   - Line length stays in 45-75 characters
   - Heading hierarchy maintained
   - All breakpoints covered in CSS

3. **Touch interaction optimization**
   - All touch targets 44px minimum
   - Spacing between targets adequate
   - Tap zones don't overlap
   - Gesture alternatives to hover
   - Touch feedback visible

4. **Image optimization for mobile**
   - Images load mobile-optimized
   - Aspect ratios preserved correctly
   - No horizontal scroll
   - Mobile crops applied properly
   - File sizes appropriate

5. **Navigation mobile-specific**
   - Mobile menu functional
   - Touch targets appropriately sized
   - Keyboard accessible
   - Focus states visible
   - No overflow or cutoff

6. **Performance on mobile**
   - Lighthouse mobile score 90+
   - Fast load on 4G
   - Smooth scroll (60fps)
   - No jank on interactions
   - Battery-efficient animations

7. **Accessibility on mobile**
   - Screen reader compatible
   - Keyboard navigation works
   - Color contrast sufficient
   - Focus indicators visible
   - Motion preference respected

---

## Mobile Testing Checklist

- [ ] Responsive at all breakpoints (320-1920px)
- [ ] Touch targets minimum 44px
- [ ] Typography scales correctly
- [ ] Images optimized and cropped
- [ ] Navigation mobile-friendly
- [ ] Forms touch-friendly
- [ ] No horizontal scroll
- [ ] Lighthouse mobile 90+
- [ ] Accessible at all sizes
- [ ] Fast on 4G networks
- [ ] Smooth interactions
- [ ] All content reachable

---

## Deliverable

Mobile-fully-responsive website with touch-optimized interactions and fast mobile performance.

Lighthouse mobile score 90+.

Accessible and usable on all devices 320px and up.
