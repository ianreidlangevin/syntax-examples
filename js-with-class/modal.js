/**
--------------------------------------------------------------------------
  @class Modal
  @description A reusable modal component tied to native `<dialog>` elements.
--------------------------------------------------------------------------
*/

export class Modal {
  constructor(el, { closeOnClickOutside = true } = {}) {
    this.el = el;
    this.closeOnClickOutside = closeOnClickOutside;

    // I add the 2 data attr if we choose to add the data-fx-modal-target to another elem (e.g. close button))
    this.openButton = document.querySelector(
      `[data-fx-modal-ref='open'][data-fx-modal-target='${this.el.dataset.fxModalId}']`
    );

    // return/warn if no open button? Maybe if we can have a modal without an open button, e.g. a modal that is opened on load?

    // TBD, do we add data-fx-modal-target as well on this button or it's always inside the modal?
    this.closeButton = this.el.querySelector("[data-fx-modal-ref='close']");
  }

  /**
   * @method init
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

    // Close modal when clicking outside of it (if enabled)
    if (this.closeOnClickOutside) {
      this.el.addEventListener("click", (event) => {
        if (event.target.tagName === "DIALOG") {
          this.el.close();
        }
      });
    }
  }
}
