import { JUNIOR } from '@@constant/challenge-difficulty.js'
import { CSS, HTML, JS } from '@@constant/challenge-languages.js'
import { IN_PROGRESS } from '@@constant/challenge-test-state.js'
import { AGE_CALCULATOR_APP } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, GH_REPOSITORY_FOLDER_DESIGN_IMAGES, URL_BASE_PREVIEW } from '@@constant/urls.js'

export const AgeCalculatorApp = {
  id: AGE_CALCULATOR_APP,
  title: 'Age calculator app',
  description:
    'This challenge is designed to sharpen your JavaScript and form validation skills. Working with dates in JavaScript can be tricky, so this will be a nice test!',
  difficulty: JUNIOR,
  languages: [HTML, CSS, JS],
  images: {
    desktop_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${AGE_CALCULATOR_APP}/design/desktop-design.jpg`,
    desktop_preview: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${AGE_CALCULATOR_APP}/design/desktop-preview.jpg`,
    mobile_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${AGE_CALCULATOR_APP}/design/mobile-design.jpg`,
  },
  live_preview: `${URL_BASE_PREVIEW}/${AGE_CALCULATOR_APP}`,
  source_code: `${GH_REPOSITORY}/${AGE_CALCULATOR_APP}`,
  codesandbox: 'https://codesandbox.io/s/age-calculator-app-4vtzgw',
  try_challenge: 'https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q',
  solution: 'https://www.frontendmentor.io/solutions/age-calculator-app-OWuaGlvZm6',
  test_state: IN_PROGRESS,
}
