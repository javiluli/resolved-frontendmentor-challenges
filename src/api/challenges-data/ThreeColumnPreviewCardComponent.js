import { NEWBIE } from '@@constant/challenge-difficulty.js'
import { CSS, HTML } from '@@constant/challenge-languages.js'
import { NO_NEED } from '@@constant/challenge-test-state.js'
import { THREE_COLUMN_PREVIEW_CARD_COMPONENT } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, URL_BASE_PREVIEW } from '@@constant/urls.js'

import desktopDesign from '@@challenges/three-column-preview-card-component/assets/design/desktop-design.jpg'
import desktopPreview from '@@challenges/three-column-preview-card-component/assets/design/desktop-preview.jpg'
import mobileDesign from '@@challenges/three-column-preview-card-component/assets/design/mobile-design.jpg'

export const ThreeColumnPreviewCardComponent = {
  id: THREE_COLUMN_PREVIEW_CARD_COMPONENT,
  title: '3-column preview card component',
  description:
    "This challenge is perfect if you're just getting started. The shift between the layouts will be a nice test if you're new to building responsive projects.",
  difficulty: NEWBIE,
  languages: [HTML, CSS],
  images: {
    desktop_design: desktopDesign,
    desktop_preview: desktopPreview,
    mobile_design: mobileDesign,
  },
  live_preview: `${URL_BASE_PREVIEW}/${THREE_COLUMN_PREVIEW_CARD_COMPONENT}`,
  source_code: `${GH_REPOSITORY}/${THREE_COLUMN_PREVIEW_CARD_COMPONENT}`,
  codesandbox: 'https://codesandbox.io/s/3-column-preview-card-component-9kd1cz',
  try_challenge: 'https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-',
  solution: 'https://www.frontendmentor.io/solutions/3column-preview-card-component-nYGCE8N2Uf',
  test_state: NO_NEED,
}
