/**
--------------------------------------------------------------------------
  @class Countdown
  @description TODO ian
--------------------------------------------------------------------------
*/
import htmx from "htmx.org";

export class Countdown {
  constructor(el, { timerSelector = "[data-fx-countdown-ref='timer']" } = {}) {
    this.el = el;
    this.timer = el.querySelector(timerSelector);

    if (!this.timer) return; // warn in console ?

    this.timeout = parseInt(this.timer.textContent, 10);
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
      this.timer.textContent = this.timeout;
    };

    this.interval = setInterval(tick, 1000);
    this.timer.textContent = this.timeout;
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null; // Clear reference for safety
    }
  }
}