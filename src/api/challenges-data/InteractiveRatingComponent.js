import { NEWBIE } from '@@constant/challenge-difficulty.js'
import { CSS, HTML, JS } from '@@constant/challenge-languages.js'
import { TEST_FINISHED } from '@@constant/challenge-test-state.js'
import { INTERACTIVE_RATING_COMPONENT } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, GH_REPOSITORY_FOLDER_DESIGN_IMAGES, URL_BASE_PREVIEW } from '@@constant/urls.js'

export const InteractiveRatingComponent = {
  id: INTERACTIVE_RATING_COMPONENT,
  title: 'Interactive rating component',
  description:
    'This is a nice, small project to practice handling user interactions and updating the DOM. Perfect for anyone who has learned the basics of JavaScript!',
  difficulty: NEWBIE,
  languages: [HTML, CSS, JS],
  images: {
    desktop_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${INTERACTIVE_RATING_COMPONENT}/design/desktop-design.jpg`,
    desktop_preview: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${INTERACTIVE_RATING_COMPONENT}/design/desktop-preview.jpg`,
    mobile_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${INTERACTIVE_RATING_COMPONENT}/design/mobile-design.jpg`,
  },
  live_preview: `${URL_BASE_PREVIEW}/${INTERACTIVE_RATING_COMPONENT}`,
  source_code: `${GH_REPOSITORY}/${INTERACTIVE_RATING_COMPONENT}`,
  codesandbox: 'https://codesandbox.io/s/interactive-rating-component-65wjv7',
  try_challenge: 'https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI',
  solution: 'https://www.frontendmentor.io/solutions/interactive-rating-component-pMXCKoDsXU',
  test_state: TEST_FINISHED,
}
