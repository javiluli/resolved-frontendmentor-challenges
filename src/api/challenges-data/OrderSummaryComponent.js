import { NEWBIE } from '@@constant/challenge-difficulty.js'
import { CSS, HTML } from '@@constant/challenge-languages.js'
import { NO_NEED } from '@@constant/challenge-test-state.js'
import { ORDER_SUMMARY_COMPONENT } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, GH_REPOSITORY_FOLDER_DESIGN_IMAGES, URL_BASE_PREVIEW } from '@@constant/urls.js'

export const OrderSummaryComponent = {
  id: ORDER_SUMMARY_COMPONENT,
  title: 'Order summary component',
  description: 'A perfect project for newbies who are starting to build confidence with layouts!',
  difficulty: NEWBIE,
  languages: [HTML, CSS],
  images: {
    desktop_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${ORDER_SUMMARY_COMPONENT}/design/desktop-design.jpg`,
    desktop_preview: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${ORDER_SUMMARY_COMPONENT}/design/desktop-preview.jpg`,
    mobile_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${ORDER_SUMMARY_COMPONENT}/design/mobile-design.jpg`,
  },
  live_preview: `${URL_BASE_PREVIEW}/${ORDER_SUMMARY_COMPONENT}`,
  source_code: `${GH_REPOSITORY}/${ORDER_SUMMARY_COMPONENT}`,
  codesandbox: 'https://codesandbox.io/s/order-summary-component-grfw35',
  try_challenge: 'https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj',
  solution: 'https://www.frontendmentor.io/solutions/order-summary-component-9l521TJWQ9',
  test_state: NO_NEED,
}
