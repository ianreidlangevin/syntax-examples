/**
--------------------------------------------------------------------------
  @class Clipboard
  @description A reusable utility to handle copy to clipboard functionality.
--------------------------------------------------------------------------
*/

export class Clipboard {
  constructor(el, { toggleDuration = 2000 } = {}) {
    this.el = el;
    this.toggleDuration = toggleDuration;

    // Identify the button and text to copy within the component (el)
    this.copyButton = this.el.querySelector("[data-fx-clipboard-ref='copy']");
    this.copyContent = this.el.querySelector(
      "[data-fx-clipboard-ref='content']"
    );

    if (!this.copyButton || !this.copyContent) {
      // necessary ?
      console.warn("Clipboard component is missing required elements.");
      return;
    }
  }

  /**
   * @method init
   */
  init() {
    this.copyButton.addEventListener("click", (event) => {
      event.stopPropagation();
      this.copyCode();
    });
  }

  /**
   * @method copyCode
   * @description Copy using the native clipboard function
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
   * @description Adds an attribute to the component for styling
   */
  toggleState() {
    this.el.setAttribute("data-fx-clipboard-state", "copied");

    setTimeout(() => {
      this.el.removeAttribute("data-fx-clipboard-state");
    }, this.toggleDuration);
  }
}
