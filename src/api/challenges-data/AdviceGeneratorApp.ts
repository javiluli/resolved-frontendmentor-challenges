// Types
import { Challenge } from '@/types'
// Constants
import { API, CSS, GH_REPOSITORY, HTML, JS, JUNIOR, URL_BASE_PREVIEW } from '@/constant'
import { CHALLENGE_SLUG } from '@/constant/challenges-slug'
// Links for images
import desktopDesign from '@/challenges/advice-generator-app/assets/design/desktop-design.jpg'
import desktopPreview from '@/challenges/advice-generator-app/assets/design/desktop-preview.jpg'
import mobileDesign from '@/challenges/advice-generator-app/assets/design/mobile-design.jpg'

export const AdviceGeneratorApp: Challenge = {
  id: '18',
  slug: CHALLENGE_SLUG.ADVICE_GENERATOR_APP,
  title: 'Advice generator app',
  description:
    "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
  difficulty: JUNIOR,
  languages: [HTML, CSS, JS, API],
  images: {
    desktopPreview,
    desktopDesign,
    mobileDesign,
  },
  links: {
    livePreview: `${URL_BASE_PREVIEW}/${CHALLENGE_SLUG.ADVICE_GENERATOR_APP}`,
    sourceCode: `${GH_REPOSITORY}/${CHALLENGE_SLUG.ADVICE_GENERATOR_APP}`,
  },
  frontendMentor: {
    tryChallenge: 'https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db',
    solution: 'https://www.frontendmentor.io/solutions/advice-generator-app-EjsrPJtwZo',
  },
}
