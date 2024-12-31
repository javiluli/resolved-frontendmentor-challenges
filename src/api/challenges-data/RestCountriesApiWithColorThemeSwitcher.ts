import desktopDesign from '@/challenges/rest-countries-api-with-color-theme-switcher/assets/design/desktop-design-home-light.jpg'
import desktopPreview from '@/challenges/rest-countries-api-with-color-theme-switcher/assets/design/desktop-preview.jpg'
import mobileDesign from '@/challenges/rest-countries-api-with-color-theme-switcher/assets/design/mobile-design-home-light.jpg'
import { ADVANCED, API, CSS, GH_REPOSITORY, HTML, JS, URL_BASE_PREVIEW } from '@/constant'
import { CHALLENGE_SLUG } from '@/constant/challenges-slug'
import { Challenge } from '@/types'

export const RestCountriesApiWithColorThemeSwitcher: Challenge = {
  id: '27',
  slug: CHALLENGE_SLUG.REST_COUNTRIES_API_WITH_COLOR_THEME_SWITCHER,
  title: 'REST Countries API with color theme switcher',
  description:
    "If you're wanting to test your JavaScript skills this is the challenge for you. Use whichever JS framework you prefer and pull data from the REST Countries API.",
  difficulty: ADVANCED,
  languages: [HTML, CSS, JS, API],
  images: {
    desktopPreview,
    desktopDesign,
    mobileDesign,
  },
  links: {
    livePreview: `${URL_BASE_PREVIEW}/${CHALLENGE_SLUG.REST_COUNTRIES_API_WITH_COLOR_THEME_SWITCHER}`,
    sourceCode: `${GH_REPOSITORY}/${CHALLENGE_SLUG.REST_COUNTRIES_API_WITH_COLOR_THEME_SWITCHER}`,
  },
  frontendMentor: {
    tryChallenge: 'https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca',
    solution: 'https://www.frontendmentor.io/solutions/rest-countries-api-with-color-theme-switcher-ew1nc6Yd25',
  },
}
