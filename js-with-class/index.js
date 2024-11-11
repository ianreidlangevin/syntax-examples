

import onmount from "onmount";
import { Countdown } from "../../shared/js/components/countdown.js";

// Global event listeners for onmount
document.addEventListener("DOMContentLoaded", () => onmount());
document.addEventListener("htmx:afterSwap", () => onmount());


// Example if we auto init in the class
onmount("[data-component='countdown']", function() {
  new Countdown(this);
});

// Example if we have to init the class
onmount("[data-component='countdown']", function() {
  const countDown = new Countdown(this)
  countDown.init();
  // Example of running another class method - not supposed to be used in that context:
  countDown.stop()
});