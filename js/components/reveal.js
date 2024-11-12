/**
--------------------------------------------------------------------------
  @class Reveal
  @description A lightweight component to toggle its own data-state attribute
--------------------------------------------------------------------------
*/

import { logDebug } from "../helpers/debug";

export class Reveal {
  constructor(el) {
    this.el = el;
    this.revealButton = this.el.querySelector("[data-fx-reveal-ref='trigger']");

    if (!this.revealButton) {
      logDebug("Button is not found for this reveal component.", { el });
      return;
    }

    this.init();
  }

  /**
   * @method init
   * @description Initializes the toggle visibility functionality.
   */
  init() {
    this.revealButton.addEventListener("click", () => this.toggleState());
  }

  /**
   * @method toggleState
   * @description Toggle the data-fx-toggler-state on revealButton click
   */
  toggleState() {
    this.el.hasAttribute("data-fx-reveal-state")
      ? this.el.removeAttribute("data-fx-reveal-state")
      : this.el.setAttribute("data-fx-reveal-state", "visible");
  }
}
