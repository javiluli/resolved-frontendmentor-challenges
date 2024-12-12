import { NEWBIE } from '@@constant/challenge-difficulty.js'
import { CSS, HTML, JS } from '@@constant/challenge-languages.js'
import { TEST_FINISHED } from '@@constant/challenge-test-state.js'
import { INTERACTIVE_RATING_COMPONENT } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, URL_BASE_PREVIEW } from '@@constant/urls.js'

import desktopDesign from '@@challenges/interactive-rating-component/assets/design/desktop-design.jpg'
import desktopPreview from '@@challenges/interactive-rating-component/assets/design/desktop-preview.jpg'
import mobileDesign from '@@challenges/interactive-rating-component/assets/design/mobile-design.jpg'

export const InteractiveRatingComponent = {
  id: INTERACTIVE_RATING_COMPONENT,
  title: 'Interactive rating component',
  description:
    'This is a nice, small project to practice handling user interactions and updating the DOM. Perfect for anyone who has learned the basics of JavaScript!',
  difficulty: NEWBIE,
  languages: [HTML, CSS, JS],
  images: {
    desktop_design: desktopDesign,
    desktop_preview: desktopPreview,
    mobile_design: mobileDesign,
  },
  live_preview: `${URL_BASE_PREVIEW}/${INTERACTIVE_RATING_COMPONENT}`,
  source_code: `${GH_REPOSITORY}/${INTERACTIVE_RATING_COMPONENT}`,
  codesandbox: 'https://codesandbox.io/s/interactive-rating-component-65wjv7',
  try_challenge: 'https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI',
  solution: 'https://www.frontendmentor.io/solutions/interactive-rating-component-pMXCKoDsXU',
  test_state: TEST_FINISHED,
}
