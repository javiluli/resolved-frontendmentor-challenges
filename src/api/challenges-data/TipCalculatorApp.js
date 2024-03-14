import { JUNIOR } from '@@constant/challenge-difficulty.js'
import { CSS, HTML, JS } from '@@constant/challenge-languages.js'
import { NO_INIT } from '@@constant/challenge-test-state.js'
import { TIP_CALCULATOR_APP } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, GH_REPOSITORY_FOLDER_DESIGN_IMAGES, URL_BASE_PREVIEW } from '@@constant/urls.js'

export const TipCalculatorApp = {
  id: TIP_CALCULATOR_APP,
  title: 'Tip calculator app',
  description:
    'This small app is perfect for anyone starting to get to grips with JavaScript. The calculator functionality will be a nice test!',
  difficulty: JUNIOR,
  languages: [HTML, CSS, JS],
  images: {
    desktop_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${TIP_CALCULATOR_APP}/design/desktop-design.jpg`,
    desktop_preview: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${TIP_CALCULATOR_APP}/design/desktop-preview.jpg`,
    mobile_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${TIP_CALCULATOR_APP}/design/mobile-design.jpg`,
  },
  live_preview: `${URL_BASE_PREVIEW}/${TIP_CALCULATOR_APP}`,
  source_code: `${GH_REPOSITORY}/${TIP_CALCULATOR_APP}`,
  codesandbox: 'https://codesandbox.io/s/tip-calculator-app-m3787n',
  try_challenge: 'https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX',
  solution: 'https://www.frontendmentor.io/solutions/tip-calculator-app-iMdttbN_Gn',
  test_state: NO_INIT,
}
