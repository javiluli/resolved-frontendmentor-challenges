// Types
// Links for images
import desktopDesign from '@/challenges/calculator-app/assets/design/desktop-design-theme-1.jpg'
import desktopPreview from '@/challenges/calculator-app/assets/design/desktop-preview.jpg'
import mobileDesign from '@/challenges/calculator-app/assets/design/mobile-design-theme-1.jpg'
// Constants
import { CSS, GH_REPOSITORY, HTML, INTERMEDIATE, JS, URL_BASE_PREVIEW } from '@/constant'
import { CHALLENGE_SLUG } from '@/constant/challenges-slug'
import { Challenge } from '@/types'

export const CalculatorApp: Challenge = {
  id: '25',
  slug: CHALLENGE_SLUG.CALCULATOR_APP,
  title: 'Calculator app',
  description:
    "This calculator app will be a great test of your CSS and JS skills especially. If you're wanting to practice using Grid, this challenge will be perfect for you!",
  difficulty: INTERMEDIATE,
  languages: [HTML, CSS, JS],
  images: {
    desktopPreview,
    desktopDesign,
    mobileDesign,
  },
  links: {
    livePreview: `${URL_BASE_PREVIEW}/${CHALLENGE_SLUG.CALCULATOR_APP}`,
    sourceCode: `${GH_REPOSITORY}/${CHALLENGE_SLUG.CALCULATOR_APP}`,
  },
  frontendMentor: {
    tryChallenge: 'https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29',
    solution: 'https://www.frontendmentor.io/solutions/calculator-app-0JVhYaDOct',
  },
}
