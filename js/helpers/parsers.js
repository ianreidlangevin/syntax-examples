/**
 * @function parseBoolean
 * @description Parses a value into a boolean, supporting "true"/"false", "1"/"0" and 1/0.
 * @param {string | number | null} value - The value to parse.
 * @param {boolean} fallback - The fallback value if the value is missing or invalid.
 * @returns {boolean} - Parsed boolean value.
 */
export function parseBoolean(value, fallback = true) {
  if (value === "true" || value === 1 || value === "1") return true;
  if (value === "false" || value === 0 || value === "0") return false;
  return fallback;
}

/**
 * @function parseNumber
 * @description Parses a value into a number with a fallback if invalid or not defined.
 * @param {string | null} value - The value to parse.
 * @param {number} fallback - The fallback value if the value is missing or invalid.
 * @returns {number} - Parsed number or the fallback.
 */
export function parseNumber(value, fallback = 0) {
  if (value === null || value === "") {
    return fallback;
  }

  const parsed = Number(value);
  return isNaN(parsed) ? fallback : parsed;
}
