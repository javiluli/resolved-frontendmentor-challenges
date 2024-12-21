/**
 * Converts an HSL color string to HSLA.
 *
 * @param {string} hsl - The HSL color string (e.g., "hsl(0, 0%, 30%)").
 * @param {number} alpha - The alpha value (opacity) between 0 and 1.
 * @returns {string} The HSLA color string.
 */
interface HslaFunction {
  (hsl: string, alpha: number): string
}

const hsla: HslaFunction = (hsl, alpha) => {
  // Extract the H, S, and L values from the HSL string
  const match = hsl.match(/\d+/g)
  if (!match) {
    throw new Error('Invalid HSL color string')
  }
  const [h, s, l] = match.map(Number)

  // Return the HSLA string
  return `hsla(${h}, ${s}%, ${l}%, ${alpha})`
}

export default hsla
