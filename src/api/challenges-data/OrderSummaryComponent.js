import { NEWBIE } from '@@constant/challenge-difficulty.js'
import { CSS, HTML } from '@@constant/challenge-languages.js'
import { NO_NEED } from '@@constant/challenge-test-state.js'
import { ORDER_SUMMARY_COMPONENT } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, URL_BASE_PREVIEW } from '@@constant/urls.js'

import desktopDesign from '@@challenges/order-summary-component/assets/design/desktop-design.jpg'
import desktopPreview from '@@challenges/order-summary-component/assets/design/desktop-preview.jpg'
import mobileDesign from '@@challenges/order-summary-component/assets/design/mobile-design.jpg'

export const OrderSummaryComponent = {
  id: ORDER_SUMMARY_COMPONENT,
  title: 'Order summary component',
  description: 'A perfect project for newbies who are starting to build confidence with layouts!',
  difficulty: NEWBIE,
  languages: [HTML, CSS],
  images: {
    desktop_design: desktopDesign,
    desktop_preview: desktopPreview,
    mobile_design: mobileDesign,
  },
  live_preview: `${URL_BASE_PREVIEW}/${ORDER_SUMMARY_COMPONENT}`,
  source_code: `${GH_REPOSITORY}/${ORDER_SUMMARY_COMPONENT}`,
  codesandbox: 'https://codesandbox.io/s/order-summary-component-grfw35',
  try_challenge: 'https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj',
  solution: 'https://www.frontendmentor.io/solutions/order-summary-component-9l521TJWQ9',
  test_state: NO_NEED,
}
