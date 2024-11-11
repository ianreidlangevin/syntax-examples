/**
--------------------------------------------------------------------------
  @class Countdown
  @description To update with onMount
--------------------------------------------------------------------------
*/
import htmx from "htmx.org";

// draft code

export class Countdown {
  constructor(el, { timerSelector = "[data-countdown-timer]" } = {}) {
    this.el = el;
    this.countdownRef = el.querySelector(timerSelector);

    if (!this.countdownRef) return;

    this.timeout = parseInt(this.countdownRef.textContent, 10);
    this.interval = null;
  }

  init() {
    const tick = () => {
      this.timeout--;
      if (this.timeout === 0) {
        htmx.trigger(this.el, "countdownEnd");
        clearInterval(this.interval); // to me : maybe use the stop method ?
        return;
      }
      this.countdownRef.textContent = this.timeout;
    };

    this.interval = setInterval(tick, 1000);
    this.countdownRef.textContent = this.timeout;
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null; // Clear reference for safety
    }
  }
}