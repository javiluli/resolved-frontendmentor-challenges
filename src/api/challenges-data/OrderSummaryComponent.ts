// Types
import { Challenge } from '@/types'
// Constants
import { CSS, GH_REPOSITORY, HTML, NEWBIE, URL_BASE_PREVIEW } from '@/constant'
import { CHALLENGE_SLUG } from '@/constant/challenges-slug'
// Links for images
import desktopDesign from '@/challenges/order-summary-component/assets/design/desktop-design.jpg'
import desktopPreview from '@/challenges/order-summary-component/assets/design/desktop-preview.jpg'
import mobileDesign from '@/challenges/order-summary-component/assets/design/mobile-design.jpg'

export const OrderSummaryComponent: Challenge = {
  id: '5',
  slug: CHALLENGE_SLUG.ORDER_SUMMARY_COMPONENT,
  title: 'Order summary component',
  description: 'A perfect project for newbies who are starting to build confidence with layouts!',
  difficulty: NEWBIE,
  languages: [HTML, CSS],
  images: {
    desktopPreview,
    desktopDesign,
    mobileDesign,
  },
  links: {
    livePreview: `${URL_BASE_PREVIEW}/${CHALLENGE_SLUG.ORDER_SUMMARY_COMPONENT}`,
    sourceCode: `${GH_REPOSITORY}/${CHALLENGE_SLUG.ORDER_SUMMARY_COMPONENT}`,
  },
  frontendMentor: {
    tryChallenge: 'https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj',
    solution: 'https://www.frontendmentor.io/solutions/order-summary-component-9l521TJWQ9',
  },
}
