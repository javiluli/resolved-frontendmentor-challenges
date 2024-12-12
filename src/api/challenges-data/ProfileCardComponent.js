import { NEWBIE } from '@@constant/challenge-difficulty.js'
import { CSS, HTML } from '@@constant/challenge-languages.js'
import { NO_NEED } from '@@constant/challenge-test-state.js'
import { PROFILE_CARD_COMPONENT } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, URL_BASE_PREVIEW } from '@@constant/urls.js'

import desktopDesign from '@@challenges/profile-card-component/assets/design/desktop-design.jpg'
import desktopPreview from '@@challenges/profile-card-component/assets/design/desktop-preview.jpg'
import mobileDesign from '@@challenges/profile-card-component/assets/design/mobile-design.jpg'

export const ProfileCardComponent = {
  id: PROFILE_CARD_COMPONENT,
  title: 'Profile card component',
  description:
    "This is a perfect challenge to test your layout skills. The card layout doesn't shift, so it's also great for those that haven't dived into responsive websites yet!",
  difficulty: NEWBIE,
  languages: [HTML, CSS],
  images: {
    desktop_design: desktopDesign,
    desktop_preview: desktopPreview,
    mobile_design: mobileDesign,
  },
  live_preview: `${URL_BASE_PREVIEW}/${PROFILE_CARD_COMPONENT}`,
  source_code: `${GH_REPOSITORY}/${PROFILE_CARD_COMPONENT}`,
  codesandbox: 'https://codesandbox.io/s/profile-card-component-61q7uf',
  try_challenge: 'https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ',
  solution: 'https://www.frontendmentor.io/solutions/profile-card-component-OGEgRZRIWD',
  test_state: NO_NEED,
}
