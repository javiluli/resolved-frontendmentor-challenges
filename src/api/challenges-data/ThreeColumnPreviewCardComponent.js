import { NEWBIE } from '@@constant/challenge-difficulty.js'
import { CSS, HTML } from '@@constant/challenge-languages.js'
import { NO_NEED } from '@@constant/challenge-test-state.js'
import { THREE_COLUMN_PREVIEW_CARD_COMPONENT } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, GH_REPOSITORY_FOLDER_DESIGN_IMAGES, URL_BASE_PREVIEW } from '@@constant/urls.js'

export const ThreeColumnPreviewCardComponent = {
  id: THREE_COLUMN_PREVIEW_CARD_COMPONENT,
  title: '3-column preview card component',
  description:
    "This challenge is perfect if you're just getting started. The shift between the layouts will be a nice test if you're new to building responsive projects.",
  difficulty: NEWBIE,
  languages: [HTML, CSS],
  images: {
    desktop_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${THREE_COLUMN_PREVIEW_CARD_COMPONENT}/design/desktop-design.jpg`,
    desktop_preview: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${THREE_COLUMN_PREVIEW_CARD_COMPONENT}/design/desktop-preview.jpg`,
    mobile_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${THREE_COLUMN_PREVIEW_CARD_COMPONENT}/design/mobile-design.jpg`,
  },
  live_preview: `${URL_BASE_PREVIEW}/${THREE_COLUMN_PREVIEW_CARD_COMPONENT}`,
  source_code: `${GH_REPOSITORY}/${THREE_COLUMN_PREVIEW_CARD_COMPONENT}`,
  codesandbox: 'https://codesandbox.io/s/3-column-preview-card-component-9kd1cz',
  try_challenge: 'https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-',
  solution: 'https://www.frontendmentor.io/solutions/3column-preview-card-component-nYGCE8N2Uf',
  test_state: NO_NEED,
}
