import { NEWBIE } from '@@constant/challenge-difficulty.js'
import { CSS, HTML } from '@@constant/challenge-languages.js'
import { NO_NEED } from '@@constant/challenge-test-state.js'
import { STATS_PREVIEW_CARD_COMPONENT } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, GH_REPOSITORY_FOLDER_DESIGN_IMAGES, URL_BASE_PREVIEW } from '@@constant/urls.js'

export const StatsPreviewCardComponent = {
  id: STATS_PREVIEW_CARD_COMPONENT,
  title: 'Stats preview card component',
  description:
    "This is a great small challenge to help get you used to building to a design. There's no JS in this project, so you'll be able to focus on your HTML & CSS skills.",
  difficulty: NEWBIE,
  languages: [HTML, CSS],
  images: {
    desktop_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${STATS_PREVIEW_CARD_COMPONENT}/design/desktop-design.jpg`,
    desktop_preview: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${STATS_PREVIEW_CARD_COMPONENT}/design/desktop-preview.jpg`,
    mobile_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${STATS_PREVIEW_CARD_COMPONENT}/design/mobile-design.jpg`,
  },
  live_preview: `${URL_BASE_PREVIEW}/${STATS_PREVIEW_CARD_COMPONENT}`,
  source_code: `${GH_REPOSITORY}/${STATS_PREVIEW_CARD_COMPONENT}`,
  codesandbox: 'https://codesandbox.io/s/stats-preview-card-component-zyb50y',
  try_challenge: 'https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62',
  solution: 'https://www.frontendmentor.io/solutions/stats-preview-card-component-zWZi0ZcXBd',
  test_state: NO_NEED,
}
