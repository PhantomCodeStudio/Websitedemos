# Component Reference

Complete documentation for all available components in the Accessible Component System.

## Button

A fundamental button component with multiple variants and states.

### Basic Usage

```html
<button class="btn btn-primary">
  Click me
</button>
```

### Variants

```html
<!-- Primary button -->
<button class="btn btn-primary">Primary</button>

<!-- Secondary button -->
<button class="btn btn-secondary">Secondary</button>

<!-- Danger button -->
<button class="btn btn-danger">Delete</button>

<!-- Disabled state -->
<button class="btn btn-primary" disabled>Disabled</button>

<!-- Loading state -->
<button class="btn btn-primary" aria-busy="true" disabled>
  <span aria-hidden="true" class="spinner"></span>
  Loading...
</button>

<!-- Icon button -->
<button class="btn btn-icon" aria-label="Close menu">
  <svg aria-hidden="true">...</svg>
</button>
```

### Props

- `disabled` — Disables the button
- `aria-label` — Accessible label for icon buttons
- `aria-busy` — Indicates loading state
- `aria-pressed` — For toggle buttons

### Accessibility

- Semantic `<button>` element
- Keyboard accessible (Enter, Space)
- Clear focus indicator
- Proper labeling with `aria-label` for icons
- Loading states with `aria-busy`

---

## Form Elements

### Text Input

```html
<div class="form-group">
  <label for="name">Name</label>
  <input 
    type="text" 
    id="name" 
    class="input"
    placeholder="Enter your name"
    required
  />
</div>
```

### Select

```html
<div class="form-group">
  <label for="country">Country</label>
  <select id="country" class="select" required>
    <option value="">Select a country</option>
    <option value="us">United States</option>
    <option value="ca">Canada</option>
  </select>
</div>
```

### Checkbox

```html
<div class="form-group">
  <input 
    type="checkbox" 
    id="agree" 
    class="checkbox"
  />
  <label for="agree">I agree to the terms</label>
</div>
```

### Radio Button

```html
<fieldset class="form-group">
  <legend>Choose an option</legend>
  <div class="radio-group">
    <input 
      type="radio" 
      id="option1" 
      name="options" 
      class="radio"
      value="1"
    />
    <label for="option1">Option 1</label>
  </div>
  <div class="radio-group">
    <input 
      type="radio" 
      id="option2" 
      name="options" 
      class="radio"
      value="2"
    />
    <label for="option2">Option 2</label>
  </div>
</fieldset>
```

### Accessibility

- Associated labels with `for` attribute
- Proper `id` attributes for connection
- `required` attribute for validation
- `fieldset` and `legend` for grouped inputs
- Error messages with `aria-describedby`

---

## Modal / Dialog

An accessible modal dialog component.

```html
<div id="modal" class="modal" role="dialog" aria-labelledby="modal-title" aria-modal="true">
  <div class="modal-content">
    <h2 id="modal-title">Confirm Action</h2>
    <p>Are you sure you want to proceed?</p>
    <div class="modal-actions">
      <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="confirm()">Confirm</button>
    </div>
    <button 
      class="btn btn-icon modal-close" 
      onclick="closeModal()"
      aria-label="Close dialog"
    >
      ×
    </button>
  </div>
</div>

<div id="modal-backdrop" class="modal-backdrop" onclick="closeModal()"></div>
```

### JavaScript (Focus Management)

```javascript
function openModal() {
  const modal = document.getElementById('modal');
  const previousFocus = document.activeElement;
  
  modal.style.display = 'block';
  modal.querySelector('.btn-primary').focus();
  
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
```

### Accessibility

- Proper `role="dialog"` and `aria-modal="true"`
- Focus trap inside modal
- Close on Escape key
- Clear title with `aria-labelledby`
- Backdrop click to close

---

## Dropdown Menu

An accessible dropdown menu component.

```html
<div class="dropdown">
  <button 
    class="btn btn-secondary dropdown-trigger"
    aria-haspopup="true"
    aria-expanded="false"
  >
    Menu
    <svg aria-hidden="true" class="icon">...</svg>
  </button>
  
  <ul class="dropdown-menu" role="menu">
    <li role="none">
      <a href="#" role="menuitem">Edit</a>
    </li>
    <li role="none">
      <a href="#" role="menuitem">Delete</a>
    </li>
    <li role="separator"></li>
    <li role="none">
      <a href="#" role="menuitem">Settings</a>
    </li>
  </ul>
</div>
```

### Keyboard Navigation

- Arrow Up/Down — Navigate menu items
- Enter/Space — Activate item
- Escape — Close menu
- Tab — Close menu and move focus

---

## Tabs

Accessible tab navigation component.

```html
<div class="tabs">
  <div class="tab-list" role="tablist">
    <button 
      class="tab-trigger" 
      role="tab" 
      aria-selected="true" 
      aria-controls="panel-1"
      id="tab-1"
    >
      Tab 1
    </button>
    <button 
      class="tab-trigger" 
      role="tab" 
      aria-selected="false" 
      aria-controls="panel-2"
      id="tab-2"
    >
      Tab 2
    </button>
  </div>
  
  <div 
    class="tab-content" 
    id="panel-1" 
    role="tabpanel" 
    aria-labelledby="tab-1"
  >
    Content 1
  </div>
  
  <div 
    class="tab-content" 
    id="panel-2" 
    role="tabpanel" 
    aria-labelledby="tab-2"
    hidden
  >
    Content 2
  </div>
</div>
```

### Keyboard Navigation

- Arrow Left/Right — Navigate between tabs
- Home — Go to first tab
- End — Go to last tab
- Enter/Space — Activate tab

---

## Alert

An accessible alert component for notifications.

```html
<!-- Success alert -->
<div class="alert alert-success" role="alert">
  ✓ Operation completed successfully
</div>

<!-- Warning alert -->
<div class="alert alert-warning" role="alert">
  ⚠ Please review before continuing
</div>

<!-- Error alert -->
<div class="alert alert-error" role="alert">
  ✕ An error occurred. Please try again.
</div>

<!-- Info alert -->
<div class="alert alert-info" role="status">
  ℹ New information available
</div>
```

### Accessibility

- Proper `role="alert"` or `role="status"`
- Clear status indication with icons
- High contrast colors
- Color + text for accessibility (not color alone)

---

## Loading State / Skeleton

Accessible loading indicators and skeleton screens.

```html
<!-- Spinner -->
<div class="spinner" aria-busy="true" aria-live="polite">
  <span class="sr-only">Loading...</span>
</div>

<!-- Skeleton (placeholder) -->
<div class="skeleton" aria-hidden="true" style="width: 200px; height: 20px;"></div>

<!-- Skeleton text lines -->
<div class="skeleton-text">
  <div style="height: 20px; margin-bottom: 8px;"></div>
  <div style="height: 20px; margin-bottom: 8px;"></div>
  <div style="height: 20px; width: 80%;"></div>
</div>
```

### Accessibility

- `aria-busy="true"` for active loading
- Screen reader text with `.sr-only`
- `aria-hidden="true"` for placeholder skeletons
- Clear loading indicators

---

## Card

A content card component.

```html
<article class="card">
  <img src="image.jpg" alt="Card image" class="card-image" />
  <div class="card-content">
    <h3 class="card-title">Card Title</h3>
    <p class="card-description">Card description text</p>
    <button class="btn btn-primary">Action</button>
  </div>
</article>
```

### Semantic Markup

- Use `<article>` for standalone content
- Proper heading hierarchy
- Descriptive image alt text
- Interactive elements with proper roles

---

## Usage Examples

See the `examples/` directory for complete working examples of all components.
