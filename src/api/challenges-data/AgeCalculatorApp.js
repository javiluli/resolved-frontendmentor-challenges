import { JUNIOR } from '@@constant/challenge-difficulty.js'
import { CSS, HTML, JS } from '@@constant/challenge-languages.js'
import { IN_PROGRESS } from '@@constant/challenge-test-state.js'
import { AGE_CALCULATOR_APP } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, URL_BASE_PREVIEW } from '@@constant/urls.js'

import desktopDesign from '@@challenges/age-calculator-app/assets/design/desktop-design.jpg'
import desktopPreview from '@@challenges/age-calculator-app/assets/design/desktop-preview.jpg'
import mobileDesign from '@@challenges/age-calculator-app/assets/design/mobile-design.jpg'

export const AgeCalculatorApp = {
  id: AGE_CALCULATOR_APP,
  title: 'Age calculator app',
  description:
    'This challenge is designed to sharpen your JavaScript and form validation skills. Working with dates in JavaScript can be tricky, so this will be a nice test!',
  difficulty: JUNIOR,
  languages: [HTML, CSS, JS],
  images: {
    desktop_design: desktopDesign,
    desktop_preview: desktopPreview,
    mobile_design: mobileDesign,
  },
  live_preview: `${URL_BASE_PREVIEW}/${AGE_CALCULATOR_APP}`,
  source_code: `${GH_REPOSITORY}/${AGE_CALCULATOR_APP}`,
  codesandbox: 'https://codesandbox.io/s/age-calculator-app-4vtzgw',
  try_challenge: 'https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q',
  solution: 'https://www.frontendmentor.io/solutions/age-calculator-app-OWuaGlvZm6',
  test_state: IN_PROGRESS,
}
