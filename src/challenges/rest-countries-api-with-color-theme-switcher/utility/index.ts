/**
 * Agrega comas para separar los miles en un número entero.
 * @param {number} numero - El número entero al que se le agregarán comas.
 * @returns {string} - El número con comas para separar los miles.
 */
export function agregarComas(numero: number): string {
  // Convertir el número a una cadena de texto y dividirlo en grupos de tres desde el final
  const partes = numero
    .toString()
    .split('')
    .reverse()
    .join('')
    .match(/.{1,3}/g)

  // Unir las partes con comas y revertir el orden
  return partes ? partes.join(',').split('').reverse().join('') : ''
}
