/**
--------------------------------------------------------------------------
  @class Modal
  @description A reusable modal component tied to native `<dialog>` elements.
--------------------------------------------------------------------------
*/
import { parseBoolean } from "../helpers/parsers";
import { logDebug } from "../helpers/debug";

export class Modal {
  constructor(el) {
    this.el = el;

    this.closeOnClickOutside = parseBoolean(
      el.getAttribute("data-fx-modal-close-outside"),
      true
    );

    this.openButton = document.querySelector(
      `[data-fx-modal-ref='open'][data-fx-modal-target='${this.el.dataset.fxModalId}']`
    );

    // Log in dev, but no return since a modal could be open on page load for any reason
    if (!this.openButton) {
      logDebug("No open button found for a modal component.", { el });
    }

    this.closeButton = this.el.querySelector("[data-fx-modal-ref='close']");

    this.init();
  }

  /**
   * @method init
   * @description Initialize the modal component.
   */
  init() {
    if (this.openButton) {
      this.openButton.addEventListener("click", () => {
        this.el.showModal();
      });
    }

    if (this.closeButton) {
      this.closeButton.addEventListener("click", () => {
        this.el.close();
      });
    }

    if (this.closeOnClickOutside) {
      this.el.addEventListener("click", (event) => {
        if (event.target.tagName === "DIALOG") {
          this.el.close();
        }
      });
    }
  }
}
