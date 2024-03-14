import { NEWBIE } from '@@constant/challenge-difficulty.js'
import { CSS, HTML } from '@@constant/challenge-languages.js'
import { NO_NEED } from '@@constant/challenge-test-state.js'
import { PROFILE_CARD_COMPONENT } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, GH_REPOSITORY_FOLDER_DESIGN_IMAGES, URL_BASE_PREVIEW } from '@@constant/urls.js'

export const ProfileCardComponent = {
  id: PROFILE_CARD_COMPONENT,
  title: 'Profile card component',
  description:
    "This is a perfect challenge to test your layout skills. The card layout doesn't shift, so it's also great for those that haven't dived into responsive websites yet!",
  difficulty: NEWBIE,
  languages: [HTML, CSS],
  images: {
    desktop_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${PROFILE_CARD_COMPONENT}/design/desktop-design.jpg`,
    desktop_preview: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${PROFILE_CARD_COMPONENT}/design/desktop-preview.jpg`,
    mobile_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${PROFILE_CARD_COMPONENT}/design/mobile-design.jpg`,
  },
  live_preview: `${URL_BASE_PREVIEW}/${PROFILE_CARD_COMPONENT}`,
  source_code: `${GH_REPOSITORY}/${PROFILE_CARD_COMPONENT}`,
  codesandbox: 'https://codesandbox.io/s/profile-card-component-61q7uf',
  try_challenge: 'https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ',
  solution: 'https://www.frontendmentor.io/solutions/profile-card-component-OGEgRZRIWD',
  test_state: NO_NEED,
}
