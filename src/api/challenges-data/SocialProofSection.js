import { NEWBIE } from '@@constant/challenge-difficulty.js'
import { CSS, HTML } from '@@constant/challenge-languages.js'
import { NO_NEED } from '@@constant/challenge-test-state.js'
import { SOCIAL_PROOF_SECTION } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, GH_REPOSITORY_FOLDER_DESIGN_IMAGES, URL_BASE_PREVIEW } from '@@constant/urls.js'

export const SocialProofSection = {
  id: SOCIAL_PROOF_SECTION,
  title: 'Social proof section',
  description:
    "This project will test your layout skills. If you're starting to get confident with Flexbox or Grid, this will provide a nice challenge!",
  difficulty: NEWBIE,
  languages: [HTML, CSS],
  images: {
    desktop_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${SOCIAL_PROOF_SECTION}/design/desktop-design.jpg`,
    desktop_preview: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${SOCIAL_PROOF_SECTION}/design/desktop-preview.jpg`,
    mobile_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${SOCIAL_PROOF_SECTION}/design/mobile-design.jpg`,
  },
  live_preview: `${URL_BASE_PREVIEW}/${SOCIAL_PROOF_SECTION}`,
  source_code: `${GH_REPOSITORY}/${SOCIAL_PROOF_SECTION}`,
  codesandbox: 'https://codesandbox.io/s/social-proof-section-44hk0o',
  try_challenge: 'https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA',
  solution: 'https://www.frontendmentor.io/solutions/social-proof-section-60RpGfBk_d',
  test_state: NO_NEED,
}
