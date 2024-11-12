# Reveal component

A lightweight component to toggle its own data-state attribute.

## Features

- Toggles `data-fx-reveal-state="visible"` on the component itself
- Allows to manage visibility or other state-based styles declaratively

## Template

```html
<div data-fx-component="reveal">
  <button data-fx-reveal-ref="trigger">Trigger element</button>
  <div class="content">Content to reveal.</div>
</div>
```

## Initialization

```javascript
import { Reveal } from './components/reveal';

onmount("[data-fx-component='reveal']", function () {
  new Reveal(this);
});
```


## Example CSS

```css

.content {
  display: none;
}

[data-fx-reveal-state="visible"] .content {
  display: flex;
}
```


## Attributes:

| Attribute                         | Description                                                   |
|:----------------------------------|:--------------------------------------------------------------|
| `data-fx-component="reveal"`      | Identifies the reveal component.                              |
| `data-fx-reveal-ref="trigger"`    | Identifies the button or element that triggers the toggle.     |
| `data-fx-reveal-state="visible"`  | The data-attribute added to the component to represent its state. |