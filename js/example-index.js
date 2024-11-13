/**
--------------------------------------------------------------------------
  JavaScript imports and initialization for the Account Settings area.
--------------------------------------------------------------------------
*/

// SCSS
import "../scss/index.scss";

// JavaScript
import onmount from "onmount";
import { Countdown } from "../../shared/js/components/countdown.js";
import { Modal } from "../../shared/js/components/modal.js";
import { Clipboard } from "../../shared/js/components/clipboard.js";
import { Reveal } from "../../shared/js/components/reveal.js";
import { PhoneMask } from "../../shared/js/masks/phone.js";

// global event listeners for onmount
document.addEventListener("DOMContentLoaded", () => onmount());
document.addEventListener("htmx:afterSwap", () => onmount());

// Components initialization
onmount("[data-fx-component='countdown']", function () {
  new Countdown(this);
});

onmount("[data-fx-component='modal']", function () {
  new Modal(this);
});

onmount("[data-fx-component='clipboard']", function () {
  new Clipboard(this);
});

onmount("[data-fx-component='reveal']", function () {
  new Reveal(this);
});

onmount("[data-fx-mask='phone']", function () {
  new PhoneMask(this);
});
