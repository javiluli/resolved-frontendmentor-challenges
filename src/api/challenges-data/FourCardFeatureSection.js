import { NEWBIE } from '@@constant/challenge-difficulty.js'
import { CSS, HTML } from '@@constant/challenge-languages.js'
import { NO_NEED } from '@@constant/challenge-test-state.js'
import { FOUR_CARD_FEATURE_SECTION } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, GH_REPOSITORY_FOLDER_DESIGN_IMAGES, URL_BASE_PREVIEW } from '@@constant/urls.js'

export const FourCardFeatureSection = {
  id: FOUR_CARD_FEATURE_SECTION,
  title: 'Four card feature section',
  description: 'A nice layout-based challenge for beginners. This will test anyone who is new to multi-column and responsive layouts.',
  difficulty: NEWBIE,
  languages: [HTML, CSS],
  images: {
    desktop_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${FOUR_CARD_FEATURE_SECTION}/design/desktop-design.jpg`,
    desktop_preview: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${FOUR_CARD_FEATURE_SECTION}/design/desktop-preview.jpg`,
    mobile_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${FOUR_CARD_FEATURE_SECTION}/design/mobile-design.jpg`,
  },
  live_preview: `${URL_BASE_PREVIEW}/${FOUR_CARD_FEATURE_SECTION}`,
  source_code: `${GH_REPOSITORY}/${FOUR_CARD_FEATURE_SECTION}`,
  codesandbox: 'https://codesandbox.io/s/four-card-feature-section-fu4600',
  try_challenge: 'https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK',
  solution: 'https://www.frontendmentor.io/solutions/four-card-feature-section-lMUT30jERe',
  test_state: NO_NEED,
}
