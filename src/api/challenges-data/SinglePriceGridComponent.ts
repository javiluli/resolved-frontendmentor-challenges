// Types
// Links for images
import desktopDesign from '@/challenges/single-price-grid-component/assets/design/desktop-design.jpg'
import desktopPreview from '@/challenges/single-price-grid-component/assets/design/desktop-preview.jpg'
import mobileDesign from '@/challenges/single-price-grid-component/assets/design/mobile-design.jpg'
// Constants
import { CSS, GH_REPOSITORY, HTML, NEWBIE, URL_BASE_PREVIEW } from '@/constant'
import { CHALLENGE_SLUG } from '@/constant/challenges-slug'
import { Challenge } from '@/types'

export const SinglePriceGridComponent: Challenge = {
  id: '15',
  slug: CHALLENGE_SLUG.SINGLE_PRICE_GRID_COMPONENT,
  title: 'Single price grid component',
  description:
    'In this challenge, you will build out the pricing component to the designs provided. This is perfect for beginners and people who want to complete a smaller challenge.',
  difficulty: NEWBIE,
  languages: [HTML, CSS],
  images: {
    desktopPreview,
    desktopDesign,
    mobileDesign,
  },
  links: {
    livePreview: `${URL_BASE_PREVIEW}/${CHALLENGE_SLUG.SINGLE_PRICE_GRID_COMPONENT}`,
    sourceCode: `${GH_REPOSITORY}/${CHALLENGE_SLUG.SINGLE_PRICE_GRID_COMPONENT}`,
  },
  frontendMentor: {
    tryChallenge: 'https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc',
    solution: 'https://www.frontendmentor.io/solutions/single-price-grid-component-wqzYhETg04',
  },
}
