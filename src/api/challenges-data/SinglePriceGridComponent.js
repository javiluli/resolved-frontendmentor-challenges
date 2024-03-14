import { NEWBIE } from '@@constant/challenge-difficulty.js'
import { CSS, HTML } from '@@constant/challenge-languages.js'
import { NO_NEED } from '@@constant/challenge-test-state.js'
import { SINGLE_PRICE_GRID_COMPONENT } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, GH_REPOSITORY_FOLDER_DESIGN_IMAGES, URL_BASE_PREVIEW } from '@@constant/urls.js'

export const SinglePriceGridComponent = {
  id: SINGLE_PRICE_GRID_COMPONENT,
  title: 'Single price grid component',
  description:
    'In this challenge, you will build out the pricing component to the designs provided. This is perfect for beginners and people who want to complete a smaller challenge.',
  difficulty: NEWBIE,
  languages: [HTML, CSS],
  images: {
    desktop_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${SINGLE_PRICE_GRID_COMPONENT}/design/desktop-design.jpg`,
    desktop_preview: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${SINGLE_PRICE_GRID_COMPONENT}/design/desktop-preview.jpg`,
    mobile_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${SINGLE_PRICE_GRID_COMPONENT}/design/mobile-design.jpg`,
  },
  live_preview: `${URL_BASE_PREVIEW}/${SINGLE_PRICE_GRID_COMPONENT}`,
  source_code: `${GH_REPOSITORY}/${SINGLE_PRICE_GRID_COMPONENT}`,
  codesandbox: 'https://codesandbox.io/s/single-price-grid-component-v2pdlx',
  try_challenge: 'https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc',
  solution: 'https://www.frontendmentor.io/solutions/single-price-grid-component-wqzYhETg04',
  test_state: NO_NEED,
}
