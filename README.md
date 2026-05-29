# Accessible Component System

A modern, accessible component system built with semantic HTML, ARIA attributes, keyboard navigation, and smooth animations. Inspired by shadcn-ui, magicui, and motion-primitives.

## Features

- **Accessible First** — WCAG 2.1 AA compliant components with semantic HTML
- **Keyboard Navigation** — Full keyboard support with focus management
- **Motion & Animation** — Smooth, performant transitions and animations
- **Copy-Paste Ready** — Self-contained components you can copy directly
- **No Dependencies** — Pure HTML, CSS, and vanilla JavaScript
- **Dark Mode Support** — Built-in dark mode styling

## Getting Started

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd Websitedemos

# No build step required - use components directly
```

### Using Components

Each component is self-contained and can be copied directly into your project:

```html
<!-- Example: Button component -->
<button class="btn btn-primary" aria-label="Submit form">
  Click me
</button>
```

See [COMPONENTS.md](./docs/COMPONENTS.md) for detailed component documentation.

## Documentation

- **[Components](./docs/COMPONENTS.md)** — Complete component reference
- **[Accessibility](./docs/ACCESSIBILITY.md)** — Accessibility guidelines and WCAG compliance
- **[Animation & Motion](./docs/ANIMATION.md)** — Motion primitives and animation guidelines
- **[Keyboard Navigation](./docs/KEYBOARD_NAVIGATION.md)** — Keyboard support and focus management

## Components

### Available Components

- Button — Primary, secondary, and icon buttons
- Form Elements — Inputs, selects, checkboxes, radio buttons
- Modals — Accessible dialog and modal patterns
- Dropdowns — Menu and dropdown patterns with keyboard support
- Cards — Content cards with animation support
- Tabs — Tab navigation with keyboard shortcuts
- Alerts — Alert boxes with accessibility features
- Loading States — Spinners and skeleton screens with aria-busy

## Accessibility

All components are built with accessibility at the core:

- **Semantic HTML** — Using proper HTML elements (`button`, `input`, `label`, etc.)
- **ARIA Attributes** — Proper roles, states, and properties
- **Keyboard Navigation** — Full keyboard support with logical tab order
- **Focus Management** — Clear focus indicators and focus trapping where needed
- **Color Contrast** — WCAG AA compliant contrast ratios
- **Screen Reader Support** — Proper labeling and announcements

See [ACCESSIBILITY.md](./docs/ACCESSIBILITY.md) for details.

## Animation & Motion

Components support smooth, accessible animations:

- **Reduced Motion Support** — Respects `prefers-reduced-motion` preference
- **CSS Transitions** — Smooth state changes
- **Entrance Animations** — Elegant component appear animations
- **Interactive Feedback** — Visual feedback on user actions
- **Performance** — GPU-accelerated animations using `transform` and `opacity`

See [ANIMATION.md](./docs/ANIMATION.md) for motion primitives and examples.

## Project Structure

```
Websitedemos/
├── components/           # Component source code
│   ├── Button.html
│   ├── Input.html
│   ├── Modal.html
│   └── ...
├── docs/                # Documentation
│   ├── COMPONENTS.md
│   ├── ACCESSIBILITY.md
│   ├── ANIMATION.md
│   └── KEYBOARD_NAVIGATION.md
├── examples/            # Usage examples
│   ├── button-demo.html
│   ├── form-demo.html
│   └── ...
└── README.md
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

Contributions are welcome! Please ensure:

1. Components follow accessibility guidelines
2. Keyboard navigation is fully supported
3. ARIA attributes are properly applied
4. Animations respect `prefers-reduced-motion`
5. Code is properly documented

## License

MIT
