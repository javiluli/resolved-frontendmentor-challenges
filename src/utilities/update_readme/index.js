import { promises as fs } from 'fs'

import challens from '../../api/index.js'
import { PLACEHOLDERS } from './const.js'
import { getChallengesList } from './service.js'

// Generacion de cada fila de la "challenges list"
const generateChallengesList = ({ title, source_code, live_preview, try_challenge }, index) =>
  `| ${index + 1} | ${title} | [Code](${source_code}) | [Live](${live_preview}) | [Reto](${try_challenge}) |
  `

/**
 * Funcion pinciapl.
 */
;(async () => {
  const [template, challengesList] = await Promise.all([
    fs.readFile('./src/utilities/update_readme/README.md.tpl', { encoding: 'utf-8' }),
    getChallengesList(challens),
  ])

  // Crea todas las filas de la tabla
  const elementChallengesList = challengesList.map(generateChallengesList).join('')

  // reemplaza los 'PLACEHOLDERS' por los datos obtenidos
  const newReadme = template.replace(PLACEHOLDERS.CHALLENGES_LIST, elementChallengesList)

  await fs.writeFile('README.md', newReadme)
})()
