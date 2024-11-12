/**
--------------------------------------------------------------------------
  JavaScript imports and initialization for the Account Settings area.
--------------------------------------------------------------------------
*/

// SCSS
import "../scss/index.scss";

// JavaScript
import IMask from "imask";
import onmount from "onmount";
import { Countdown } from "../../shared/js/components/countdown.js";
import { Modal } from "../../shared/js/components/modal.js";
import { Clipboard } from "../../shared/js/components/clipboard.js";
import { Reveal } from "../../shared/js/components/reveal.js";

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


// Input Mask for SMS Phone Number (2fa)
const smsPhoneNumber = document.querySelector("#id_cellphone");
if (smsPhoneNumber) {
  IMask(smsPhoneNumber, {
    mask: "(000) 000-0000",
  });
}
