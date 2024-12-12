import { JUNIOR } from '@@constant/challenge-difficulty.js'
import { API, CSS, HTML, JS } from '@@constant/challenge-languages.js'
import { NO_INIT } from '@@constant/challenge-test-state.js'
import { ADVICE_GENERATOR_APP } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, URL_BASE_PREVIEW } from '@@constant/urls.js'

import desktopDesign from '@@challenges/advice-generator-app/assets/design/desktop-design.jpg'
import desktopPreview from '@@challenges/advice-generator-app/assets/design/desktop-preview.jpg'
import mobileDesign from '@@challenges/advice-generator-app/assets/design/mobile-design.jpg'

export const AdviceGeneratorApp = {
  id: ADVICE_GENERATOR_APP,
  title: 'Advice generator app',
  description:
    "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
  difficulty: JUNIOR,
  languages: [HTML, CSS, JS, API],
  images: {
    desktop_design: desktopDesign,
    desktop_preview: desktopPreview,
    mobile_design: mobileDesign,
  },
  live_preview: `${URL_BASE_PREVIEW}/${ADVICE_GENERATOR_APP}`,
  source_code: `${GH_REPOSITORY}/${ADVICE_GENERATOR_APP}`,
  codesandbox: 'https://codesandbox.io/s/advice-generator-app-5xcr0d',
  try_challenge: 'https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db',
  solution: 'https://www.frontendmentor.io/solutions/advice-generator-app-EjsrPJtwZo',
  test_state: NO_INIT,
}
