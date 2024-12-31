// Types
// Links for images
import desktopDesign from '@/challenges/stats-preview-card-component/assets/design/desktop-design.jpg'
import desktopPreview from '@/challenges/stats-preview-card-component/assets/design/desktop-preview.jpg'
import mobileDesign from '@/challenges/stats-preview-card-component/assets/design/mobile-design.jpg'
// Constants
import { CSS, GH_REPOSITORY, HTML, NEWBIE, URL_BASE_PREVIEW } from '@/constant'
import { CHALLENGE_SLUG } from '@/constant/challenges-slug'
import { Challenge } from '@/types'

export const StatsPreviewCardComponent: Challenge = {
  id: '6',
  slug: CHALLENGE_SLUG.STATS_PREVIEW_CARD_COMPONENT,
  title: 'Stats preview card component',
  description:
    "This is a great small challenge to help get you used to building to a design. There's no JS in this project, so you'll be able to focus on your HTML & CSS skills.",
  difficulty: NEWBIE,
  languages: [HTML, CSS],
  images: {
    desktopPreview,
    desktopDesign,
    mobileDesign,
  },
  links: {
    livePreview: `${URL_BASE_PREVIEW}/${CHALLENGE_SLUG.STATS_PREVIEW_CARD_COMPONENT}`,
    sourceCode: `${GH_REPOSITORY}/${CHALLENGE_SLUG.STATS_PREVIEW_CARD_COMPONENT}`,
  },
  frontendMentor: {
    tryChallenge: 'https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62',
    solution: 'https://www.frontendmentor.io/solutions/stats-preview-card-component-zWZi0ZcXBd',
  },
}
