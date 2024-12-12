import { JUNIOR } from '@@constant/challenge-difficulty.js'
import { CSS, HTML, JS } from '@@constant/challenge-languages.js'
import { NO_INIT } from '@@constant/challenge-test-state.js'
import { TIP_CALCULATOR_APP } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, URL_BASE_PREVIEW } from '@@constant/urls.js'

import desktopDesign from '@@challenges/tip-calculator-app/assets/design/desktop-design-empty.jpg'
import desktopPreview from '@@challenges/tip-calculator-app/assets/design/desktop-preview.jpg'
import mobileDesign from '@@challenges/tip-calculator-app/assets/design/mobile-design.jpg'

export const TipCalculatorApp = {
  id: TIP_CALCULATOR_APP,
  title: 'Tip calculator app',
  description:
    'This small app is perfect for anyone starting to get to grips with JavaScript. The calculator functionality will be a nice test!',
  difficulty: JUNIOR,
  languages: [HTML, CSS, JS],
  images: {
    desktop_design: desktopDesign,
    desktop_preview: desktopPreview,
    mobile_design: mobileDesign,
  },
  live_preview: `${URL_BASE_PREVIEW}/${TIP_CALCULATOR_APP}`,
  source_code: `${GH_REPOSITORY}/${TIP_CALCULATOR_APP}`,
  codesandbox: 'https://codesandbox.io/s/tip-calculator-app-m3787n',
  try_challenge: 'https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX',
  solution: 'https://www.frontendmentor.io/solutions/tip-calculator-app-iMdttbN_Gn',
  test_state: NO_INIT,
}
