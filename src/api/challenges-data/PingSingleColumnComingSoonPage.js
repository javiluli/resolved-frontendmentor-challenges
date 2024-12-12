import { NEWBIE } from '@@constant/challenge-difficulty.js'
import { CSS, HTML, JS } from '@@constant/challenge-languages.js'
import { NO_INIT } from '@@constant/challenge-test-state.js'
import { PING_SINGLE_COLUMN_COMING_SOON_PAGE } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, URL_BASE_PREVIEW } from '@@constant/urls.js'

import desktopDesign from '@@challenges/ping-single-column-coming-soon-page/assets/design/desktop-design.jpg'
import desktopPreview from '@@challenges/ping-single-column-coming-soon-page/assets/design/desktop-preview.jpg'
import mobileDesign from '@@challenges/ping-single-column-coming-soon-page/assets/design/mobile-design.jpg'

export const PingSingleColumnComingSoonPage = {
  id: PING_SINGLE_COLUMN_COMING_SOON_PAGE,
  title: 'Ping single column coming soon page',
  description: 'This challenge is great for beginners and offers a chance to practice basic client-side form validation.',
  difficulty: NEWBIE,
  languages: [HTML, CSS, JS],
  images: {
    desktop_design: desktopDesign,
    desktop_preview: desktopPreview,
    mobile_design: mobileDesign,
  },
  live_preview: `${URL_BASE_PREVIEW}/${PING_SINGLE_COLUMN_COMING_SOON_PAGE}`,
  source_code: `${GH_REPOSITORY}/${PING_SINGLE_COLUMN_COMING_SOON_PAGE}`,
  codesandbox: 'https://codesandbox.io/s/ping-single-column-coming-soon-page-mmgkiv',
  try_challenge: 'https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da',
  solution: 'https://www.frontendmentor.io/solutions/ping-single-column-coming-soon-page-sIycp6lX6Q',
  test_state: NO_INIT,
}
