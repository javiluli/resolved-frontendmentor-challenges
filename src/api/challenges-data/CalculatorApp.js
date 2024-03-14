import { INTERMEDIATE } from '@@constant/challenge-difficulty.js'
import { CSS, HTML, JS } from '@@constant/challenge-languages.js'
import { IN_PROGRESS } from '@@constant/challenge-test-state.js'
import { CALCULATOR_APP } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, GH_REPOSITORY_FOLDER_DESIGN_IMAGES, URL_BASE_PREVIEW } from '@@constant/urls.js'

export const CalculatorApp = {
  id: CALCULATOR_APP,
  title: 'Calculator app',
  description:
    "This calculator app will be a great test of your CSS and JS skills especially. If you're wanting to practice using Grid, this challenge will be perfect for you!",
  difficulty: INTERMEDIATE,
  languages: [HTML, CSS, JS],
  images: {
    desktop_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${CALCULATOR_APP}/design/desktop-design.jpg`,
    desktop_preview: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${CALCULATOR_APP}/design/desktop-preview.jpg`,
    mobile_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${CALCULATOR_APP}/design/mobile-design.jpg`,
  },
  live_preview: `${URL_BASE_PREVIEW}/${CALCULATOR_APP}`,
  source_code: `${GH_REPOSITORY}/${CALCULATOR_APP}`,
  codesandbox: 'https://codesandbox.io/s/calculator-app-ncjn3v',
  try_challenge: 'https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29',
  solution: 'https://www.frontendmentor.io/solutions/calculator-app-0JVhYaDOct',
  test_state: IN_PROGRESS,
}
