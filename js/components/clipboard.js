/**
--------------------------------------------------------------------------
  @class Clipboard
  @description A reusable utility to handle copy-to-clipboard functionality.
--------------------------------------------------------------------------
*/

import { logDebug } from "../helpers/debug";
import { parseNumber } from "../helpers/parsers";

export class Clipboard {
  constructor(el) {
    this.el = el;
    this.toggleDuration = parseNumber(
      el.getAttribute("data-fx-clipboard-duration"),
      2000
    );
    this.copyButton = this.el.querySelector("[data-fx-clipboard-ref='trigger']");
    this.copyContent = this.el.querySelector("[data-fx-clipboard-ref='content']");

    if (!this.copyButton || !this.copyContent) {
      logDebug("Clipboard component is missing required elements.", { el });
      return;
    }

    this.init();
  }

  /**
   * @method init
   * @description Initialize the copy to clipboard.
   */
  init() {
    this.copyButton.addEventListener("click", (event) => {
      event.stopPropagation();
      this.copyCode();
    });
  }

  /**
   * @method copyCode
   * @description Copies text to the clipboard.
   */
  async copyCode() {
    try {
      await navigator.clipboard.writeText(this.copyContent.innerText);
      this.toggleState();
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error);
    }
  }

  /**
   * @method toggleState
   * @description Sets data-fx-clipboard-state="copied" for styling.
   */
  toggleState() {
    this.el.setAttribute("data-fx-clipboard-state", "copied");
    setTimeout(() => {
      this.el.removeAttribute("data-fx-clipboard-state");
    }, this.toggleDuration);
  }
}
