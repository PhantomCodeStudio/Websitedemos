# Accessibility Guidelines

This document outlines the accessibility principles and standards that guide all components in the Accessible Component System.

## WCAG 2.1 Compliance

All components are built to meet **WCAG 2.1 Level AA** standards:

- **Perceivable** — Information must be perceivable to users
- **Operable** — Components must be operable via keyboard and other input methods
- **Understandable** — Content and interfaces must be understandable
- **Robust** — Code must work across browsers, assistive technologies, and devices

## Core Principles

### 1. Semantic HTML

Always use the correct HTML elements for their intended purpose:

```html
<!-- ✓ Good: Semantic button -->
<button>Click me</button>

<!-- ✗ Bad: Div styled as button -->
<div onclick="action()">Click me</div>

<!-- ✓ Good: Semantic form input -->
<input type="email" placeholder="Email" />

<!-- ✗ Bad: Contenteditable div -->
<div contenteditable="true"></div>
```

### 2. ARIA (Accessible Rich Internet Applications)

Use ARIA attributes to enhance semantics when HTML alone isn't sufficient:

```html
<!-- Add role for custom components -->
<div role="menubar">...</div>

<!-- Add state information -->
<button aria-pressed="false" aria-label="Toggle menu">Menu</button>

<!-- Connect labels to inputs -->
<label for="name">Name</label>
<input id="name" />

<!-- Provide descriptions for complex UI -->
<button aria-describedby="help-text">Help</button>
<p id="help-text">This explains what the button does</p>
```

### 3. Keyboard Navigation

All interactive components must be keyboard accessible:

```html
<!-- Form inputs are naturally keyboard accessible -->
<input type="text" />

<!-- Buttons work with Enter and Space -->
<button>Click</button>

<!-- Use tabindex carefully (usually -1 for focus management) -->
<div tabindex="-1" id="focus-target"></div>

<!-- Don't override natural keyboard behavior -->
<!-- ✗ Bad -->
<button onclick="doSomething()" onkeydown="e => doSomething()">
```

### 4. Focus Management

Clear focus indicators are essential for keyboard users:

```css
/* ✓ Good: Clear focus indicator */
button:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

/* ✗ Bad: Hidden focus indicator */
button:focus {
  outline: none;
}

/* ✗ Bad: Insufficient contrast */
button:focus {
  outline: 1px solid #cccccc;
}
```

### 5. Color Contrast

Text and interactive elements must have sufficient contrast:

- **Normal text (< 18pt):** 4.5:1 contrast ratio
- **Large text (≥ 18pt):** 3:1 contrast ratio
- **UI components & borders:** 3:1 contrast ratio

```css
/* ✓ Good: High contrast */
color: #000000;
background-color: #ffffff;
/* Contrast ratio: 21:1 */

/* ✗ Bad: Insufficient contrast */
color: #777777;
background-color: #ffffff;
/* Contrast ratio: 4.47:1 */
```

### 6. Text Alternatives

Provide text alternatives for all non-text content:

```html
<!-- Images -->
<img src="logo.png" alt="Company Logo" />

<!-- Icons as buttons -->
<button aria-label="Close menu">
  <svg aria-hidden="true">...</svg>
</button>

<!-- Decorative elements hidden from screen readers -->
<div aria-hidden="true" class="decorative-line"></div>
```

### 7. Form Accessibility

Forms are critical accessibility features:

```html
<!-- ✓ Good: Properly associated labels -->
<div class="form-group">
  <label for="email">Email Address</label>
  <input id="email" type="email" required />
</div>

<!-- ✓ Good: Error messages with aria-describedby -->
<input 
  aria-describedby="email-error"
  aria-invalid="true"
/>
<span id="email-error" role="alert">Invalid email format</span>

<!-- ✓ Good: Required fields indicated -->
<label for="name">
  Name <span aria-label="required">*</span>
</label>
<input id="name" required />

<!-- ✓ Good: Grouped inputs with fieldset -->
<fieldset>
  <legend>Choose a preference</legend>
  <!-- radio buttons or checkboxes -->
</fieldset>
```

### 8. Reduced Motion

Respect user's `prefers-reduced-motion` preference:

```css
/* ✓ Good: Animations respect preference */
@media (prefers-reduced-motion: no-preference) {
  button {
    transition: background-color 0.2s ease;
  }
}

/* Without the media query, default to no animation */
button {
  /* No animation by default */
}
```

### 9. Screen Reader Support

Ensure content is properly announced:

```html
<!-- Live regions for dynamic content updates -->
<div aria-live="polite" aria-atomic="true">
  Items added: 5
</div>

<!-- Hide decorative elements -->
<span aria-hidden="true">→</span>

<!-- Screen reader only text -->
<span class="sr-only">Loading results...</span>

<!-- Proper role announcements -->
<div role="alert">Error: Please try again</div>
<div role="status">Ready for input</div>
```

### 10. Skip Links

Provide a skip link to main content:

```html
<a href="#main-content" class="skip-link">Skip to main content</a>

<nav><!-- Navigation --></nav>
<main id="main-content"><!-- Main content --></main>
```

```css
.skip-link {
  position: absolute;
  left: -999px;
  z-index: 999;
}

.skip-link:focus {
  left: 0;
  top: 0;
  /* Make visible on focus */
}
```

## ARIA Roles

Common ARIA roles used in components:

| Role | Purpose |
|------|---------|
| `button` | Clickable element |
| `dialog` | Modal dialog |
| `menubar` | Menu bar |
| `menu` | Menu list |
| `menuitem` | Menu item |
| `tablist` | Tab container |
| `tab` | Individual tab |
| `tabpanel` | Tab content panel |
| `alert` | Alert notification |
| `status` | Status message |
| `region` | Significant section |

## ARIA States

Important ARIA state attributes:

| Attribute | Values | Use Case |
|-----------|--------|----------|
| `aria-pressed` | true, false, mixed | Toggle buttons |
| `aria-expanded` | true, false | Expandable sections |
| `aria-hidden` | true, false | Hide from screen readers |
| `aria-selected` | true, false | Tab/menu item selection |
| `aria-checked` | true, false, mixed | Checkboxes/radios |
| `aria-disabled` | true, false | Disabled state |
| `aria-invalid` | true, false | Form validation |
| `aria-busy` | true, false | Loading states |

## Testing for Accessibility

### Manual Testing

1. **Keyboard Navigation** — Tab through all interactive elements
2. **Screen Reader** — Test with NVDA, JAWS, or VoiceOver
3. **Color Contrast** — Use tools like WCAG Color Contrast Checker
4. **Focus Indicators** — Ensure visible focus on all interactive elements
5. **Zoom** — Test at 200% zoom level

### Automated Testing

```bash
# Axe DevTools (Browser extension)
# WAVE (Browser extension)
# Lighthouse (Built into Chrome DevTools)
# pa11y (Command-line tool)
```

## Accessibility Checklist

- [ ] Semantic HTML used throughout
- [ ] ARIA attributes properly applied
- [ ] All interactive elements keyboard accessible
- [ ] Clear focus indicators visible
- [ ] Color contrast meets WCAG AA
- [ ] Text alternatives for images
- [ ] Forms properly labeled
- [ ] `prefers-reduced-motion` respected
- [ ] Screen reader tested
- [ ] Mobile/touch friendly

## Resources

- [WebAIM](https://webaim.org/) — Web accessibility articles and resources
- [W3C WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) — Official WCAG 2.1 reference
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility) — MDN accessibility guide
- [A11ycasts](https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9Xc-RgEzwLvePng7V) — Accessibility video series
- [Deque University](https://dequeuniversity.com/) — Accessibility training

## Questions?

If you have accessibility questions or find an issue in a component, please file an issue with details about the accessibility concern.
