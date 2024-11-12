# Countdown component

A reusable countdown timer component.

## Features

- Counts down from a specified number of seconds.
- Triggers the countdownEnd event when the timer reaches 0.
- Automatically swaps content via HTMX when countdownEnd is triggered.

## Template

```html
<div
  data-fx-component="countdown"
  data-hx-get="{{ url }}"
  data-hx-trigger="countdownEnd"
  data-hx-swap="outerHTML"
>
  Resend in <span data-fx-countdown-ref="timer">{{ countdown }}</span> seconds
</div>
```

## Initialization

```javascript
import { Countdown } from './components/countdown';

onmount("[data-fx-component='countdown']", function () {
  new Countdown(this);
});
```

## Attributes:

| Attribute                         | Description                                  | Default       |
|:----------------------------------|:---------------------------------------------|:--------------|
| `data-fx-component="countdown"`    | Identifies the countdown component. | N/A           |
| `data-fx-countdown-ref="timer"` | Identifies the element displaying the countdown timer.                   | N/A           |