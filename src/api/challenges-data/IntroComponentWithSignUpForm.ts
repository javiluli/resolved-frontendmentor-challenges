// Types
// Links for images
import desktopDesign from '@/challenges/intro-component-with-sign-up-form/assets/design/desktop-design.jpg'
import desktopPreview from '@/challenges/intro-component-with-sign-up-form/assets/design/desktop-preview.jpg'
import mobileDesign from '@/challenges/intro-component-with-sign-up-form/assets/design/mobile-design.jpg'
// Constants
import { CSS, GH_REPOSITORY, HTML, JS, NEWBIE, URL_BASE_PREVIEW } from '@/constant'
import { CHALLENGE_SLUG } from '@/constant/challenges-slug'
import { Challenge } from '@/types'

export const IntroComponentWithSignUpForm: Challenge = {
  id: '14',
  slug: CHALLENGE_SLUG.INTRO_COMPONENT_WITH_SIGN_UP_FORM,
  title: 'Intro component with sign-up form',
  description: 'Practice building out a sign-up form complete with client-side validation using JavaScript.',
  difficulty: NEWBIE,
  languages: [HTML, CSS, JS],
  images: {
    desktopPreview,
    desktopDesign,
    mobileDesign,
  },
  links: {
    livePreview: `${URL_BASE_PREVIEW}/${CHALLENGE_SLUG.INTRO_COMPONENT_WITH_SIGN_UP_FORM}`,
    sourceCode: `${GH_REPOSITORY}/${CHALLENGE_SLUG.INTRO_COMPONENT_WITH_SIGN_UP_FORM}`,
  },
  frontendMentor: {
    tryChallenge: 'https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1',
    solution: 'https://www.frontendmentor.io/solutions/intro-component-with-signup-form-hFVxI4wvEl',
  },
}
