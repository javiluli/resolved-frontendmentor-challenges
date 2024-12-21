// Types
import { Challenge } from '@/types'
// Constants
import { CSS, GH_REPOSITORY, HTML, NEWBIE, URL_BASE_PREVIEW } from '@/constant'
import { CHALLENGE_SLUG } from '@/constant/challenges-slug'
// Links for images
import desktopDesign from '@/challenges/social-proof-section/assets/design/desktop-design.jpg'
import desktopPreview from '@/challenges/social-proof-section/assets/design/desktop-preview.jpg'
import mobileDesign from '@/challenges/social-proof-section/assets/design/mobile-design.jpg'

export const SocialProofSection: Challenge = {
  id: '10',
  slug: CHALLENGE_SLUG.SOCIAL_PROOF_SECTION,
  title: 'Social proof section',
  description:
    "This project will test your layout skills. If you're starting to get confident with Flexbox or Grid, this will provide a nice challenge!",
  difficulty: NEWBIE,
  languages: [HTML, CSS],
  images: {
    desktopPreview,
    desktopDesign,
    mobileDesign,
  },
  links: {
    livePreview: `${URL_BASE_PREVIEW}/${CHALLENGE_SLUG.SOCIAL_PROOF_SECTION}`,
    sourceCode: `${GH_REPOSITORY}/${CHALLENGE_SLUG.SOCIAL_PROOF_SECTION}`,
  },
  frontendMentor: {
    tryChallenge: 'https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA',
    solution: 'https://www.frontendmentor.io/solutions/social-proof-section-60RpGfBk_d',
  },
}
