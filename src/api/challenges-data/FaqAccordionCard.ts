// Types
import { Challenge } from '@/types'
// Constants
import { CSS, GH_REPOSITORY, HTML, JS, NEWBIE, URL_BASE_PREVIEW } from '@/constant'
import { CHALLENGE_SLUG } from '@/constant/challenges-slug'
// Links for images
import desktopDesign from '@/challenges/faq-accordion-card/assets/design/desktop-design.jpg'
import desktopPreview from '@/challenges/faq-accordion-card/assets/design/desktop-preview.jpg'
import mobileDesign from '@/challenges/faq-accordion-card/assets/design/mobile-design.jpg'

export const FAQAccordionCard: Challenge = {
  id: '9',
  slug: CHALLENGE_SLUG.FAQ_ACCORDION_CARD,
  title: 'FAQ accordion card',
  description:
    "In this challenge, you'll be building out an FAQ accordion. This is an extremely common front-end pattern, so it's a great opportunity to get some practice in!",
  difficulty: NEWBIE,
  languages: [HTML, CSS, JS],
  images: {
    desktopPreview,
    desktopDesign,
    mobileDesign,
  },
  links: {
    livePreview: `${URL_BASE_PREVIEW}/${CHALLENGE_SLUG.FAQ_ACCORDION_CARD}`,
    sourceCode: `${GH_REPOSITORY}/${CHALLENGE_SLUG.FAQ_ACCORDION_CARD}`,
  },
  frontendMentor: {
    tryChallenge: 'https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam',
    solution: 'https://www.frontendmentor.io/solutions/faq-accordion-card-PBkVPesRW1',
  },
}
