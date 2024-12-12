import { NEWBIE } from '@@constant/challenge-difficulty.js'
import { CSS, HTML, JS } from '@@constant/challenge-languages.js'
import { NO_INIT } from '@@constant/challenge-test-state.js'
import { INTRO_COMPONENT_WITH_SIGN_UP_FORM } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, URL_BASE_PREVIEW } from '@@constant/urls.js'

import desktopDesign from '@@challenges/intro-component-with-sign-up-form/assets/design/desktop-design.jpg'
import desktopPreview from '@@challenges/intro-component-with-sign-up-form/assets/design/desktop-preview.jpg'
import mobileDesign from '@@challenges/intro-component-with-sign-up-form/assets/design/mobile-design.jpg'

export const IntroComponentWithSignUpForm = {
  id: INTRO_COMPONENT_WITH_SIGN_UP_FORM,
  title: 'Intro component with sign-up form',
  description: 'Practice building out a sign-up form complete with client-side validation using JavaScript.',
  difficulty: NEWBIE,
  languages: [HTML, CSS, JS],
  images: {
    desktop_design: desktopDesign,
    desktop_preview: desktopPreview,
    mobile_design: mobileDesign,
  },
  live_preview: `${URL_BASE_PREVIEW}/${INTRO_COMPONENT_WITH_SIGN_UP_FORM}`,
  source_code: `${GH_REPOSITORY}/${INTRO_COMPONENT_WITH_SIGN_UP_FORM}`,
  codesandbox: 'https://codesandbox.io/s/intro-component-with-sign-up-form-n446il',
  try_challenge: 'https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1',
  solution: 'https://www.frontendmentor.io/solutions/intro-component-with-signup-form-hFVxI4wvEl',
  test_state: NO_INIT,
}
