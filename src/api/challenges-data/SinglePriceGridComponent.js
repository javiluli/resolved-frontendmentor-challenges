import { NEWBIE } from '@@constant/challenge-difficulty.js'
import { CSS, HTML } from '@@constant/challenge-languages.js'
import { NO_NEED } from '@@constant/challenge-test-state.js'
import { SINGLE_PRICE_GRID_COMPONENT } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, URL_BASE_PREVIEW } from '@@constant/urls.js'

import desktopDesign from '@@challenges/single-price-grid-component/assets/design/desktop-design.jpg'
import desktopPreview from '@@challenges/single-price-grid-component/assets/design/desktop-preview.jpg'
import mobileDesign from '@@challenges/single-price-grid-component/assets/design/mobile-design.jpg'

export const SinglePriceGridComponent = {
  id: SINGLE_PRICE_GRID_COMPONENT,
  title: 'Single price grid component',
  description:
    'In this challenge, you will build out the pricing component to the designs provided. This is perfect for beginners and people who want to complete a smaller challenge.',
  difficulty: NEWBIE,
  languages: [HTML, CSS],
  images: {
    desktop_design: desktopDesign,
    desktop_preview: desktopPreview,
    mobile_design: mobileDesign,
  },
  live_preview: `${URL_BASE_PREVIEW}/${SINGLE_PRICE_GRID_COMPONENT}`,
  source_code: `${GH_REPOSITORY}/${SINGLE_PRICE_GRID_COMPONENT}`,
  codesandbox: 'https://codesandbox.io/s/single-price-grid-component-v2pdlx',
  try_challenge: 'https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc',
  solution: 'https://www.frontendmentor.io/solutions/single-price-grid-component-wqzYhETg04',
  test_state: NO_NEED,
}
