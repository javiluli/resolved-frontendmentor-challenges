import { NEWBIE } from '@@constant/challenge-difficulty.js'
import { CSS, HTML } from '@@constant/challenge-languages.js'
import { NO_NEED } from '@@constant/challenge-test-state.js'
import { HUDDLE_LANDING_PAGE_WITH_A_SINGLE_INTRODUCTORY_SECTION } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, GH_REPOSITORY_FOLDER_DESIGN_IMAGES, URL_BASE_PREVIEW } from '@@constant/urls.js'

export const HuddleLandingPageWithASingleIntroductorySection = {
  id: HUDDLE_LANDING_PAGE_WITH_A_SINGLE_INTRODUCTORY_SECTION,
  title: 'Huddle landing page with a single introductory section',
  description: 'A perfect challenge for beginners, this project will get you working with a two column layout.',
  difficulty: NEWBIE,
  languages: [HTML, CSS],
  images: {
    desktop_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${HUDDLE_LANDING_PAGE_WITH_A_SINGLE_INTRODUCTORY_SECTION}/design/desktop-design.jpg`,
    desktop_preview: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${HUDDLE_LANDING_PAGE_WITH_A_SINGLE_INTRODUCTORY_SECTION}/design/desktop-preview.jpg`,
    mobile_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${HUDDLE_LANDING_PAGE_WITH_A_SINGLE_INTRODUCTORY_SECTION}/design/mobile-design.jpg`,
  },
  live_preview: `${URL_BASE_PREVIEW}/${HUDDLE_LANDING_PAGE_WITH_A_SINGLE_INTRODUCTORY_SECTION}`,
  source_code: `${GH_REPOSITORY}/${HUDDLE_LANDING_PAGE_WITH_A_SINGLE_INTRODUCTORY_SECTION}`,
  codesandbox: 'https://codesandbox.io/s/huddle-landing-page-with-a-single-introductory-section-v3gmdb',
  try_challenge: 'https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0',
  solution: 'https://www.frontendmentor.io/solutions/huddle-landing-page-with-a-single-introductory-section-AbFllpYPzv',
  test_state: NO_NEED,
}
