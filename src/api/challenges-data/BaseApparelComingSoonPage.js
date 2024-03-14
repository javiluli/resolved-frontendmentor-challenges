import { NEWBIE } from '@@constant/challenge-difficulty.js'
import { CSS, HTML, JS } from '@@constant/challenge-languages.js'
import { TEST_FINISHED } from '@@constant/challenge-test-state.js'
import { BASE_APPAREL_COMING_SOON_PAGE } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, GH_REPOSITORY_FOLDER_DESIGN_IMAGES, URL_BASE_PREVIEW } from '@@constant/urls.js'

export const BaseApparelComingSoonPage = {
  id: BASE_APPAREL_COMING_SOON_PAGE,
  title: 'Base Apparel coming soon page',
  description:
    "This layout looks simple enough, but there are some interesting details to it that will test your CSS skills. You'll also get to practice basic form validation.",
  difficulty: NEWBIE,
  languages: [HTML, CSS, JS],
  images: {
    desktop_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${BASE_APPAREL_COMING_SOON_PAGE}/design/desktop-design.jpg`,
    desktop_preview: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${BASE_APPAREL_COMING_SOON_PAGE}/design/desktop-preview.jpg`,
    mobile_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${BASE_APPAREL_COMING_SOON_PAGE}/design/mobile-design.jpg`,
  },
  live_preview: `${URL_BASE_PREVIEW}/${BASE_APPAREL_COMING_SOON_PAGE}`,
  source_code: `${GH_REPOSITORY}/${BASE_APPAREL_COMING_SOON_PAGE}`,
  codesandbox: 'https://codesandbox.io/s/base-apparel-coming-soon-page-uu7st8',
  try_challenge: 'https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0',
  solution: 'https://www.frontendmentor.io/solutions/base-apparel-coming-soon-page-z1Qs4JhKYW',
  test_state: TEST_FINISHED,
}
