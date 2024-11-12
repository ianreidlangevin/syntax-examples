/**
--------------------------------------------------------------------------
  @class Countdown
  @description A reusable countdown timer component.
--------------------------------------------------------------------------
*/

import htmx from "htmx.org";
import { logDebug } from "../helpers/debug";

export class Countdown {
  constructor(el, { timerSelector = "[data-fx-countdown-ref='timer']" } = {}) {
    this.el = el;
    this.timer = el.querySelector(timerSelector);

    if (!this.timer) {
      logDebug("Timer element not found in Countdown component.", { el });
      return;
    }

    this.timeout = parseInt(this.timer.textContent, 10) || 0; // Fallback to 0 if invalid
    this.interval = null;

    this.init();
  }

  /**
   * @method init
   * @description Initialize the countdown timer.
   */
  init() {
    const tick = () => {
      this.timeout--;
      if (this.timeout === 0) {
        htmx.trigger(this.el, "countdownEnd");
        this.stop();
        return;
      }
      this.timer.textContent = this.timeout;
    };

    this.interval = setInterval(tick, 1000);
    this.timer.textContent = this.timeout;
  }

  /**
   * @method stop
   * @description Stops the countdown timer and clears the interval.
   */
  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null; // Clear reference for safety
    }
  }
}
