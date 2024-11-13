/**
--------------------------------------------------------------------------
  @class PhoneMask (draft)
  @description Lightweight component to format phone numbers with dashes
  @note Return 1-999-999-9999 or 999-999-9999 like in the new application form
--------------------------------------------------------------------------
*/
import { logDebug } from "../helpers/debug";

export class PhoneMask {
  constructor(el) {
    this.el = el;
    if (this.el.tagName !== "INPUT") {
      logDebug("PhoneMask requires an input element.", { el });
      return;
    }
    this.init();
  }

  /**
   * @method init
   */
  init() {
    this.el.addEventListener("input", (event) => {
      if (event.inputType === "deleteContentBackward") return; // Skip formatting if the user is deleting
      const input = event.target;
      const rawValue = input.value.replace(/\D/g, ""); // Remove any non-numeric characters
      const trimmedValue = this.trimToMaxLength(rawValue);
      input.value = this.formatPhoneNumber(trimmedValue);
    });
  }

  /**
   * @method formatPhoneNumber
   * @param {string} rawValue
   * @returns {string} - Formatted phone number.
   */
  formatPhoneNumber(rawValue) {
    if (rawValue.startsWith("1")) {
      const strippedValue = rawValue.slice(1);
      return `1-${this.dashFormat(strippedValue)}`;
    }
    return this.dashFormat(rawValue);
  }

  /**
   * @method dashFormat
   * @description Formats the digits with dashes.
   * @param {string} value
   * @returns {string} - Formatted phone number (with dashes)
   */
  dashFormat(value) {
    if (value.length <= 3) {
      return value; // Return first digits as is
    } else if (value.length <= 6) {
      return `${value.slice(0, 3)}-${value.slice(3)}`; // Dash after 3 digits
    } else {
      return `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6)}`; // Full
    }
  }

  /**
   * @method trimToMaxLength
   * @desc - Draft, maybe move it in init directly. TBD
   */
  trimToMaxLength(value) {
    const maxLength = value.startsWith("1") ? 11 : 10; // Country code adds 1 digit
    return value.slice(0, maxLength);
  }
}