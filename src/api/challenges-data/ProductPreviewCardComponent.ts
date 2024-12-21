// Types
import { Challenge } from '@/types'
// Constants
import { CSS, GH_REPOSITORY, HTML, NEWBIE, URL_BASE_PREVIEW } from '@/constant'
import { CHALLENGE_SLUG } from '@/constant/challenges-slug'
// Links for images
import desktopDesign from '@/challenges/product-preview-card-component/assets/design/desktop-design.jpg'
import desktopPreview from '@/challenges/product-preview-card-component/assets/design/desktop-preview.jpg'
import mobileDesign from '@/challenges/product-preview-card-component/assets/design/mobile-design.jpg'

export const ProductPreviewCardComponent: Challenge = {
  id: '2',
  slug: CHALLENGE_SLUG.PRODUCT_PREVIEW_CARD_COMPONENT,
  title: 'Product preview card component',
  description: 'This HTML & CSS-only challenge will be perfect for anyone starting to build responsive projects.',
  difficulty: NEWBIE,
  languages: [HTML, CSS],
  images: {
    desktopPreview,
    desktopDesign,
    mobileDesign,
  },
  links: {
    livePreview: `${URL_BASE_PREVIEW}/${CHALLENGE_SLUG.PRODUCT_PREVIEW_CARD_COMPONENT}`,
    sourceCode: `${GH_REPOSITORY}/${CHALLENGE_SLUG.PRODUCT_PREVIEW_CARD_COMPONENT}`,
  },
  frontendMentor: {
    tryChallenge: 'https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa',
    solution: 'https://www.frontendmentor.io/solutions/product-preview-card-component-o-yrShdyiW',
  },
}
