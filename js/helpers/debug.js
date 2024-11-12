/**
 * @function logDebug
 * @description Logs a message to the console only in development mode.
 * @param {string} message - The message to log.
 * @param {...any} args - Additional arguments to log (optional).
 */
export function logDebug(message, ...args) {
  if (process.env.NODE_ENV === "development") {
    console.error(`[FinX-DEBUG]: ${message}`, ...args);
  }
}
