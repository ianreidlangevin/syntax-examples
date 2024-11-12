# Clipboard component

A reusable utility to handle copy-to-clipboard functionality.

## Features

- Binds a button to the copy-to-clipboard functionality.
- Adds a temporary `data-fx-clipboard-state="copied"` attribute to the component for styling.
- Configurable duration using the `data-fx-clipboard-duration` attribute.

## Template

```html
<div data-fx-component="clipboard">
  <button data-fx-clipboard-ref="copy">
    <div data-fx-clipboard-ref="content">{{ setup_key }}</div>
  </button>
</div>
```

## Initialization

```javascript
import { Clipboard } from './components/clipboard';

onmount("[data-fx-component='clipboard']", function () {
  new Clipboard(this);
});
```

## Attributes:

| Attribute                         | Description                                  | Default       |
|:----------------------------------|:---------------------------------------------|:--------------|
| `data-fx-component="clipboard"`    | Identifies the clipboard component. | N/A           |
| `data-fx-clipboard-ref="copy"`    | Identifies the button triggering the copy action. | N/A           |
| `data-fx-clipboard-ref="content"` | Text element to copy.                        | N/A           |
| `data-fx-clipboard-duration`      | Duration of the "copied" state in milliseconds. | `2000`        |