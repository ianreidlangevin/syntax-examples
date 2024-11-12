# Data attributes naming conventions

This documentation outlines the naming conventions for data attributes used in the refactor. These conventions ensure consistency, maintainability, and clarity when working with our JS components.

---

## Quick reference table

| Attribute                                  | Purpose                                                   |
|:-------------------------------------------|:----------------------------------------------------------|
| `data-fx-component="{component}"`     | Identifies the component.                                 |
| `data-fx-{component}-ref="{element}"`           | Identifies specific elements related to the component.        |
| `data-fx-{component}-target="{id}"`   | Creates link between a ref and an instance of the component.            |
| `data-fx-{component}-id="{id}"`       | Uniquely identifies a component instance.                 |
| `data-fx-{component}-state="{state}"` | Indicates a given state of the component for styling. |

---

## Naming Conventions

#### 1. `data-fx-component="{component}"`

Used to identify a specific component on the page.

```html
  <div data-fx-component="countdown">
    <!-- Countdown content -->
  </div>
```

#### 2. `data-fx-{component}-ref="{element}"`

Used to reference a specific element related to a component. Identifies key parts of the component (e.g. button, trigger, content element).

```html
<div data-fx-component="clipboard">
  <button data-fx-clipboard-ref="copy">Copy</button>
  <div data-fx-clipboard-ref="content">Text to copy</div>
</div>
```

#### 3. `data-fx-{component}-target="{identifier}"`

Links an element (ref) to a specific instance of the component. Mostly used for actions (e.g. opening, closing).

```html
<button data-fx-modal-ref="open" data-fx-modal-target="modal-1">
  Open Modal
</button>

<dialog data-fx-component="modal" data-fx-modal-id="modal-1">
  Modal Content
  <button data-fx-modal-ref="close">Close</button>
</dialog>
```

#### 4. `data-fx-{component}-id="{identifier}"`

Used in combination with the previous attribute (target) to identify a specific instance of a component.

```html
<dialog data-fx-component="modal" data-fx-modal-id="modal-1">
  Modal Content
</dialog>
```

#### 5. `data-fx-{component}-state="{state}"`

Represents the state of a component. Used to apply conditional styles or behaviors based on the component’s state.

```html
<div data-fx-component="clipboard" data-fx-clipboard-state="copied">
  <!-- Styles triggered by "copied" state -->
</div>
```

---

## Usage (WIP)

We use onmount to initialize all instances of a component, (to do: mention dynamically added, etc.)

```javascript
import onmount from "onmount";
import { Countdown } from "./countdown.js";

onmount("[data-fx-component='countdown']", function () {
  new Countdown(this).init();
});
```

To-Do: Evaluate whether we should auto-init components when possible (within the component itself). This might not be ideal, as it could prevent us from adding methods to a component and executing them in index.js.