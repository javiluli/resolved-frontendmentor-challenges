// Types
import { Challenge } from '@/types'
// Constants
import { CSS, GH_REPOSITORY, HTML, NEWBIE, URL_BASE_PREVIEW } from '@/constant'
import { CHALLENGE_SLUG } from '@/constant/challenges-slug'
// Links for images
import desktopDesign from '@/challenges/three-column-preview-card-component/assets/design/desktop-design.jpg'
import desktopPreview from '@/challenges/three-column-preview-card-component/assets/design/desktop-preview.jpg'
import mobileDesign from '@/challenges/three-column-preview-card-component/assets/design/mobile-design.jpg'

export const ThreeColumnPreviewCardComponent: Challenge = {
  id: '7',
  slug: CHALLENGE_SLUG.THREE_COLUMN_PREVIEW_CARD_COMPONENT,
  title: '3-column preview card component',
  description:
    "This challenge is perfect if you're just getting started. The shift between the layouts will be a nice test if you're new to building responsive projects.",
  difficulty: NEWBIE,
  languages: [HTML, CSS],
  images: {
    desktopPreview,
    desktopDesign,
    mobileDesign,
  },
  links: {
    livePreview: `${URL_BASE_PREVIEW}/${CHALLENGE_SLUG.THREE_COLUMN_PREVIEW_CARD_COMPONENT}`,
    sourceCode: `${GH_REPOSITORY}/${CHALLENGE_SLUG.THREE_COLUMN_PREVIEW_CARD_COMPONENT}`,
  },
  frontendMentor: {
    tryChallenge: 'https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-',
    solution: 'https://www.frontendmentor.io/solutions/3column-preview-card-component-nYGCE8N2Uf',
  },
}
