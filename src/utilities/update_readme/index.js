import { promises as fs } from 'fs'

import Difficulty from '../../api/data/Difficulty.js'
import challens from '../../api/index.js'

import { PLACEHOLDERS } from './const.js'
import { getChallengesList } from './service.js'

// Generacion de cada fila de la "challenges list"
const generateTableSecctionChallengs = ({ title, source_code, live_preview, try_challenge, test_state }, index) =>
  `| ${index + 1} | ${title} | [:link:](${source_code})  | [:link:](${live_preview}) | [:link:](${try_challenge}) | ${test_state} |
`

const challengensNewbie = challens.filter((c) => c.difficulty.level === Difficulty.NEWBIE.level)
const challengensJunior = challens.filter((c) => c.difficulty.level === Difficulty.JUNIOR.level)
const challengensIntermediate = challens.filter((c) => c.difficulty.level === Difficulty.INTERMEDIATE.level)

/**
 * Funcion pinciapl.
 */
;(async () => {
  const [template, challengesListNewbie, challengesListJunior, challengesListIntermediate] = await Promise.all([
    fs.readFile('./src/utilities/update_readme/README.md.tpl', { encoding: 'utf-8' }),
    getChallengesList(challengensNewbie),
    getChallengesList(challengensJunior),
    getChallengesList(challengensIntermediate),
  ])

  // Crea todas las filas de la tabla
  const elementChallengesListNewbie = `${tableSecctionChallengsNewbie}${challengesListNewbie.map(generateTableSecctionChallengs).join('')}`

  const elementChallengesListJunior = `${tableSecctionChallengsJunior}${challengesListJunior.map(generateTableSecctionChallengs).join('')}`

  const elementChallengesListIntermediate = `${tableSecctionChallengsIntermediate}${challengesListIntermediate
    .map(generateTableSecctionChallengs)
    .join('')}`

  // reemplaza los 'PLACEHOLDERS' por los datos obtenidos
  const newReadme = template
    .replace(PLACEHOLDERS.CHALLENGES_LIST_NEWBIE, elementChallengesListNewbie)
    .replace(PLACEHOLDERS.CHALLENGES_LIST_JUNIOR, elementChallengesListJunior)
    .replace(PLACEHOLDERS.CHALLENGES_LIST_INTERMEDIATE, elementChallengesListIntermediate)

  await fs.writeFile('README.md', newReadme)
})()

const tableSecctionChallengsNewbie = `
## Difficulty Newbie

| Nº | Challenge name | Source code | Live preview | Try challenge | Unit test |
| -- | -------------- | ----------- | ------------ | ------------- | --------- |
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
