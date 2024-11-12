# Modal component

A reusable modal component tied to native `<dialog>` elements.

## Features

- Supports opening and closing modals with dedicated buttons.
- Optional outside click behavior to close the modal.

## Template

```html
<dialog
  data-fx-component="modal"
  data-fx-modal-id="modal-example"
  data-fx-modal-close-outside="true"
  role="dialog"
>
  <div>
    <p>Modal content goes here.</p>
    <button data-fx-modal-ref="close">Close</button>
  </div>
</dialog>

<!-- Button to open the modal -->
<button data-fx-modal-ref="open" data-fx-modal-target="modal-example">Open Modal</button>
```

## Initialization

```javascript
import { Modal } from './components/modal';

onmount("[data-fx-component='modal']", function () {
  new Modal(this);
});
```

## Attributes:

| Attribute                             | Description                                                                 | Default |
|:--------------------------------------|:----------------------------------------------------------------------------|:--------|
| `data-fx-component="modal"`           | Identifies the modal component.                                             | N/A     |
| `data-fx-modal-id="{id}"`             | Uniquely identifies a modal instance, used to link open and close buttons.  | N/A     |
| `data-fx-modal-ref="open"`            | Identifies the button used to open the modal.                               | N/A     |
| `data-fx-modal-ref="close"`           | Identifies the button inside the modal used to close it.                    | N/A     |
| `data-fx-modal-target="{id}"`         | Specifies the `data-fx-modal-id` of the modal that the button opens.        | N/A     |
| `data-fx-modal-close-outside="true"`  | Enables closing the modal when clicking outside its content.                | `true`  |