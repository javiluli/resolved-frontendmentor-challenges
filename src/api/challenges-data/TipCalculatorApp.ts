// Types
import { Challenge } from '@/types'
// Constants
import { CSS, GH_REPOSITORY, HTML, JS, JUNIOR, URL_BASE_PREVIEW } from '@/constant'
import { CHALLENGE_SLUG } from '@/constant/challenges-slug'
// Links for images
import desktopDesign from '@/challenges/tip-calculator-app/assets/design/desktop-design-empty.jpg'
import desktopPreview from '@/challenges/tip-calculator-app/assets/design/desktop-preview.jpg'
import mobileDesign from '@/challenges/tip-calculator-app/assets/design/mobile-design.jpg'

export const TipCalculatorApp: Challenge = {
  id: '20',
  slug: CHALLENGE_SLUG.TIP_CALCULATOR_APP,
  title: 'Tip calculator app',
  description:
    'This small app is perfect for anyone starting to get to grips with JavaScript. The calculator functionality will be a nice test!',
  difficulty: JUNIOR,
  languages: [HTML, CSS, JS],
  images: {
    desktopPreview,
    desktopDesign,
    mobileDesign,
  },
  links: {
    livePreview: `${URL_BASE_PREVIEW}/${CHALLENGE_SLUG.TIP_CALCULATOR_APP}`,
    sourceCode: `${GH_REPOSITORY}/${CHALLENGE_SLUG.TIP_CALCULATOR_APP}`,
  },
  frontendMentor: {
    tryChallenge: 'https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX',
    solution: 'https://www.frontendmentor.io/solutions/tip-calculator-app-iMdttbN_Gn',
  },
}
