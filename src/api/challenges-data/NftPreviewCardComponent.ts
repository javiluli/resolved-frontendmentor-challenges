// Types
import { Challenge } from '@/types'
// Constants
import { CSS, GH_REPOSITORY, HTML, NEWBIE, URL_BASE_PREVIEW } from '@/constant'
import { CHALLENGE_SLUG } from '@/constant/challenges-slug'
// Links for images
import desktopDesign from '@/challenges/nft-preview-card-component/assets/design/desktop-design.jpg'
import desktopPreview from '@/challenges/nft-preview-card-component/assets/design/desktop-preview.jpg'
import mobileDesign from '@/challenges/nft-preview-card-component/assets/design/mobile-design.jpg'

export const NftPreviewCardComponent: Challenge = {
  id: '4',
  slug: CHALLENGE_SLUG.NFT_PREVIEW_CARD_COMPONENT,
  title: 'NFT preview card component',
  description:
    'This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with.',
  difficulty: NEWBIE,
  languages: [HTML, CSS],
  images: {
    desktopPreview,
    desktopDesign,
    mobileDesign,
  },
  links: {
    livePreview: `${URL_BASE_PREVIEW}/${CHALLENGE_SLUG.NFT_PREVIEW_CARD_COMPONENT}`,
    sourceCode: `${GH_REPOSITORY}/${CHALLENGE_SLUG.NFT_PREVIEW_CARD_COMPONENT}`,
  },
  frontendMentor: {
    tryChallenge: 'https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U',
    solution: 'https://www.frontendmentor.io/solutions/nft-preview-card-component-nEcLjRkVAA',
  },
}
