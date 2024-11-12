import onmount from "onmount";
import { Countdown } from "../../shared/js/components/countdown.js";
import { Modal } from "../../shared/js/components/modal.js";
import { Clipboard } from "../../shared/js/utils/clipboard.js";


// global event listeners for onmount
document.addEventListener("DOMContentLoaded", () => onmount());
document.addEventListener("htmx:afterSwap", () => onmount());

// Usage example
onmount("[data-fx-component='countdown']", function () {
  new Countdown(this).init();
});

onmount("[data-fx-component='modal']", function () {
  new Modal(this).init();
});

onmount("[data-fx-component='clipboard']", function () {
  new Clipboard(this).init();
});
