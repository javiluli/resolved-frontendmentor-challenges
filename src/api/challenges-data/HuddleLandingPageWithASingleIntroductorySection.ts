// Types
import { Challenge } from '@/types'
// Constants
import { CSS, GH_REPOSITORY, HTML, NEWBIE, URL_BASE_PREVIEW } from '@/constant'
import { CHALLENGE_SLUG } from '@/constant/challenges-slug'
// Links for images
import desktopDesign from '@/challenges/huddle-landing-page-with-a-single-introductory-section/assets/design/desktop-design.jpg'
import desktopPreview from '@/challenges/huddle-landing-page-with-a-single-introductory-section/assets/design/desktop-preview.jpg'
import mobileDesign from '@/challenges/huddle-landing-page-with-a-single-introductory-section/assets/design/mobile-design.jpg'

export const HuddleLandingPageWithASingleIntroductorySection: Challenge = {
  id: '17',
  slug: CHALLENGE_SLUG.HUDDLE_LANDING_PAGE_WITH_A_SINGLE_INTRODUCTORY_SECTION,
  title: 'Huddle landing page with a single introductory section',
  description: 'A perfect challenge for beginners, this project will get you working with a two column layout.',
  difficulty: NEWBIE,
  languages: [HTML, CSS],
  images: {
    desktopPreview,
    desktopDesign,
    mobileDesign,
  },
  links: {
    livePreview: `${URL_BASE_PREVIEW}/${CHALLENGE_SLUG.HUDDLE_LANDING_PAGE_WITH_A_SINGLE_INTRODUCTORY_SECTION}`,
    sourceCode: `${GH_REPOSITORY}/${CHALLENGE_SLUG.HUDDLE_LANDING_PAGE_WITH_A_SINGLE_INTRODUCTORY_SECTION}`,
  },
  frontendMentor: {
    tryChallenge: 'https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0',
    solution: 'https://www.frontendmentor.io/solutions/huddle-landing-page-with-a-single-introductory-section-AbFllpYPzv',
  },
}
