import { INTERMEDIATE } from '@@constant/challenge-difficulty.js'
import { CSS, HTML, JS } from '@@constant/challenge-languages.js'
import { IN_PROGRESS } from '@@constant/challenge-test-state.js'
import { CALCULATOR_APP } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, URL_BASE_PREVIEW } from '@@constant/urls.js'

import desktopDesign from '@@challenges/calculator-app/assets/design/desktop-design-theme-1.jpg'
import desktopPreview from '@@challenges/calculator-app/assets/design/desktop-preview.jpg'
import mobileDesign from '@@challenges/calculator-app/assets/design/mobile-design-theme-1.jpg'

export const CalculatorApp = {
  id: CALCULATOR_APP,
  title: 'Calculator app',
  description:
    "This calculator app will be a great test of your CSS and JS skills especially. If you're wanting to practice using Grid, this challenge will be perfect for you!",
  difficulty: INTERMEDIATE,
  languages: [HTML, CSS, JS],
  images: {
    desktop_design: desktopDesign,
    desktop_preview: desktopPreview,
    mobile_design: mobileDesign,
  },
  live_preview: `${URL_BASE_PREVIEW}/${CALCULATOR_APP}`,
  source_code: `${GH_REPOSITORY}/${CALCULATOR_APP}`,
  codesandbox: 'https://codesandbox.io/s/calculator-app-ncjn3v',
  try_challenge: 'https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29',
  solution: 'https://www.frontendmentor.io/solutions/calculator-app-0JVhYaDOct',
  test_state: IN_PROGRESS,
}
