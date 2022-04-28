/**
 * Prints a warning in the console if it exists.
 *
 * @param message The warning message.
 */
export const warning = (message: string) => {
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.warn(message)
  }
}
