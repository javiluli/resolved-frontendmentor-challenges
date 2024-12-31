// Types
// Links for images
import desktopDesign from '@/challenges/interactive-rating-component/assets/design/desktop-design.jpg'
import desktopPreview from '@/challenges/interactive-rating-component/assets/design/desktop-preview.jpg'
import mobileDesign from '@/challenges/interactive-rating-component/assets/design/mobile-design.jpg'
// Constants
import { CSS, GH_REPOSITORY, HTML, JS, NEWBIE, URL_BASE_PREVIEW } from '@/constant'
import { CHALLENGE_SLUG } from '@/constant/challenges-slug'
import { Challenge } from '@/types'

export const InteractiveRatingComponent: Challenge = {
  id: '3',
  slug: CHALLENGE_SLUG.INTERACTIVE_RATING_COMPONENT,
  title: 'Interactive rating component',
  description:
    'This is a nice, small project to practice handling user interactions and updating the DOM. Perfect for anyone who has learned the basics of JavaScript!',
  difficulty: NEWBIE,
  languages: [HTML, CSS, JS],
  images: {
    desktopPreview,
    desktopDesign,
    mobileDesign,
  },
  links: {
    livePreview: `${URL_BASE_PREVIEW}/${CHALLENGE_SLUG.INTERACTIVE_RATING_COMPONENT}`,
    sourceCode: `${GH_REPOSITORY}/${CHALLENGE_SLUG.INTERACTIVE_RATING_COMPONENT}`,
  },
  frontendMentor: {
    tryChallenge: 'https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI',
    solution: 'https://www.frontendmentor.io/solutions/interactive-rating-component-pMXCKoDsXU',
  },
}
