import { promises as fs } from 'fs'

import * as challenges from '../../api/challenges-data/index.js'
import { PLACEHOLDERS } from './const.js'
import { getChallengesList } from './service.js'

// Generacion de cada fila de la "challenges list"
const generateTableSecctionChallengs = ({ id, title, source_code, live_preview, test_state }, index) =>
  `| ${index + 1} | [${title}][${id}__challenge] | [:link:][${source_code}__code] | [:link:][${live_preview}__live] | ${test_state} |`

// Generacion de cada fila de la "challenges list"
const generateSuperlinks = ({ id, title, source_code, live_preview, try_challenge }, index) =>
  `<!-- ${index} - ${title} -->
   [${id}__code]: ${source_code}
   [${id}__live]: ${live_preview}
   [${id}__challenge]: ${try_challenge}`

/**
 * Funcion pinciapl.
 */
;(async () => {
  const [template, challengesListNewbie] = await Promise.all([
    fs.readFile('./src/utilities/update_readme/README.md.tpl', { encoding: 'utf-8' }),
    getChallengesList(challenges),
  ])

  // Crea todas las filas de la tabla
  const elementChallengesListNewbie = `${tableSecctionChallengs}${challengesListNewbie.map(generateTableSecctionChallengs).join('')}`

  // const elementChallengesListJunior = `${tableSecctionChallengsJunior}${challengesListJunior.map(generateTableSecctionChallengs).join('')}`

  // const elementChallengesListIntermediate = `${tableSecctionChallengsIntermediate}${challengesListIntermediate
  //   .map(generateTableSecctionChallengs)
  //   .join('')}`

  // reemplaza los 'PLACEHOLDERS' por los datos obtenidos
  const newReadme = template.replace(PLACEHOLDERS.CHALLENGES_LIST_NEWBIE, elementChallengesListNewbie)

  await fs.writeFile('README.md', newReadme)
})()

const tableSecctionChallengs = `

| Nº | Challenge | Source code | Live preview | Unit test |
| -- | --------- | ----------- | ------------ | --------- |
`

const tableSecctionChallengsJunior = `
## Difficulty Junior

| Nº | Challenge name | Source code | Live preview | Try challenge | Unit test |
| -- | -------------- | ----------- | ------------ | ------------- | --------- |
`

const tableSecctionChallengsIntermediate = `
## Difficulty Intermediate

| Nº | Challenge name | Source code | Live preview | Try challenge | Unit test |
| -- | -------------- | ----------- | ------------ | ------------- | --------- |
`
