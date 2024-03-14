import { NEWBIE } from '@@constant/challenge-difficulty.js'
import { CSS, HTML, JS } from '@@constant/challenge-languages.js'
import { NO_INIT } from '@@constant/challenge-test-state.js'
import { PING_SINGLE_COLUMN_COMING_SOON_PAGE } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, GH_REPOSITORY_FOLDER_DESIGN_IMAGES, URL_BASE_PREVIEW } from '@@constant/urls.js'

export const PingSingleColumnComingSoonPage = {
  id: PING_SINGLE_COLUMN_COMING_SOON_PAGE,
  title: 'Ping single column coming soon page',
  description: 'This challenge is great for beginners and offers a chance to practice basic client-side form validation.',
  difficulty: NEWBIE,
  languages: [HTML, CSS, JS],
  images: {
    desktop_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${PING_SINGLE_COLUMN_COMING_SOON_PAGE}/design/desktop-design.jpg`,
    desktop_preview: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${PING_SINGLE_COLUMN_COMING_SOON_PAGE}/design/desktop-preview.jpg`,
    mobile_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${PING_SINGLE_COLUMN_COMING_SOON_PAGE}/design/mobile-design.jpg`,
  },
  live_preview: `${URL_BASE_PREVIEW}/${PING_SINGLE_COLUMN_COMING_SOON_PAGE}`,
  source_code: `${GH_REPOSITORY}/${PING_SINGLE_COLUMN_COMING_SOON_PAGE}`,
  codesandbox: 'https://codesandbox.io/s/ping-single-column-coming-soon-page-mmgkiv',
  try_challenge: 'https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da',
  solution: 'https://www.frontendmentor.io/solutions/ping-single-column-coming-soon-page-sIycp6lX6Q',
  test_state: NO_INIT,
}
