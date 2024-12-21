// Types
import { Challenge } from '@/types'
// Constants
import { CSS, GH_REPOSITORY, HTML, NEWBIE, URL_BASE_PREVIEW } from '@/constant'
import { CHALLENGE_SLUG } from '@/constant/challenges-slug'
// Links for images
import desktopDesign from '@/challenges/four-card-feature-section/assets/design/desktop-design.jpg'
import desktopPreview from '@/challenges/four-card-feature-section/assets/design/desktop-preview.jpg'
import mobileDesign from '@/challenges/four-card-feature-section/assets/design/mobile-design.jpg'

export const FourCardFeatureSection: Challenge = {
  id: '12',
  slug: CHALLENGE_SLUG.FOUR_CARD_FEATURE_SECTION,
  title: 'Four card feature section',
  description: 'A nice layout-based challenge for beginners. This will test anyone who is new to multi-column and responsive layouts.',
  difficulty: NEWBIE,
  languages: [HTML, CSS],
  images: {
    desktopPreview,
    desktopDesign,
    mobileDesign,
  },
  links: {
    livePreview: `${URL_BASE_PREVIEW}/${CHALLENGE_SLUG.FOUR_CARD_FEATURE_SECTION}`,
    sourceCode: `${GH_REPOSITORY}/${CHALLENGE_SLUG.FOUR_CARD_FEATURE_SECTION}`,
  },
  frontendMentor: {
    tryChallenge: 'https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK',
    solution: 'https://www.frontendmentor.io/solutions/four-card-feature-section-lMUT30jERe',
  },
}
