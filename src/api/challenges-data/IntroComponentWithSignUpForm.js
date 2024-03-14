import { NEWBIE } from '@@constant/challenge-difficulty.js'
import { CSS, HTML, JS } from '@@constant/challenge-languages.js'
import { NO_INIT } from '@@constant/challenge-test-state.js'
import { INTRO_COMPONENT_WITH_SIGN_UP_FORM } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, GH_REPOSITORY_FOLDER_DESIGN_IMAGES, URL_BASE_PREVIEW } from '@@constant/urls.js'

export const IntroComponentWithSignUpForm = {
  id: INTRO_COMPONENT_WITH_SIGN_UP_FORM,
  title: 'Intro component with sign-up form',
  description: 'Practice building out a sign-up form complete with client-side validation using JavaScript.',
  difficulty: NEWBIE,
  languages: [HTML, CSS, JS],
  images: {
    desktop_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${INTRO_COMPONENT_WITH_SIGN_UP_FORM}/design/desktop-design.jpg`,
    desktop_preview: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${INTRO_COMPONENT_WITH_SIGN_UP_FORM}/design/desktop-preview.jpg`,
    mobile_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${INTRO_COMPONENT_WITH_SIGN_UP_FORM}/design/mobile-design.jpg`,
  },
  live_preview: `${URL_BASE_PREVIEW}/${INTRO_COMPONENT_WITH_SIGN_UP_FORM}`,
  source_code: `${GH_REPOSITORY}/${INTRO_COMPONENT_WITH_SIGN_UP_FORM}`,
  codesandbox: 'https://codesandbox.io/s/intro-component-with-sign-up-form-n446il',
  try_challenge: 'https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1',
  solution: 'https://www.frontendmentor.io/solutions/intro-component-with-signup-form-hFVxI4wvEl',
  test_state: NO_INIT,
}
