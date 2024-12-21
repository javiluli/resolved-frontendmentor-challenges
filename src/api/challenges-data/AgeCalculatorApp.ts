// Types
import { Challenge } from '@/types'
// Constants
import { CSS, GH_REPOSITORY, HTML, JS, JUNIOR, URL_BASE_PREVIEW } from '@/constant'
import { CHALLENGE_SLUG } from '@/constant/challenges-slug'
// Links for images
import desktopDesign from '@/challenges/age-calculator-app/assets/design/desktop-design.jpg'
import desktopPreview from '@/challenges/age-calculator-app/assets/design/desktop-preview.jpg'
import mobileDesign from '@/challenges/age-calculator-app/assets/design/mobile-design.jpg'

export const AgeCalculatorApp: Challenge = {
  id: '24',
  slug: CHALLENGE_SLUG.AGE_CALCULATOR_APP,
  title: 'Age calculator app',
  description:
    'This challenge is designed to sharpen your JavaScript and form validation skills. Working with dates in JavaScript can be tricky, so this will be a nice test!',
  difficulty: JUNIOR,
  languages: [HTML, CSS, JS],
  images: {
    desktopPreview,
    desktopDesign,
    mobileDesign,
  },
  links: {
    livePreview: `${URL_BASE_PREVIEW}/${CHALLENGE_SLUG.AGE_CALCULATOR_APP}`,
    sourceCode: `${GH_REPOSITORY}/${CHALLENGE_SLUG.AGE_CALCULATOR_APP}`,
  },
  frontendMentor: {
    tryChallenge: 'https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q',
    solution: 'https://www.frontendmentor.io/solutions/age-calculator-app-OWuaGlvZm6',
  },
}
