import { NEWBIE } from '@@constant/challenge-difficulty.js'
import { CSS, HTML } from '@@constant/challenge-languages.js'
import { NO_NEED } from '@@constant/challenge-test-state.js'
import { PRODUCT_PREVIEW_CARD_COMPONENT } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, GH_REPOSITORY_FOLDER_DESIGN_IMAGES, URL_BASE_PREVIEW } from '@@constant/urls.js'

export const ProductPreviewCardComponent = {
  id: PRODUCT_PREVIEW_CARD_COMPONENT,
  title: 'Product preview card component',
  description: 'This HTML & CSS-only challenge will be perfect for anyone starting to build responsive projects.',
  difficulty: NEWBIE,
  languages: [HTML, CSS],
  images: {
    desktop_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${PRODUCT_PREVIEW_CARD_COMPONENT}/design/desktop-design.jpg`,
    desktop_preview: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${PRODUCT_PREVIEW_CARD_COMPONENT}/design/desktop-preview.jpg`,
    mobile_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${PRODUCT_PREVIEW_CARD_COMPONENT}/design/mobile-design.jpg`,
  },
  live_preview: `${URL_BASE_PREVIEW}/${PRODUCT_PREVIEW_CARD_COMPONENT}`,
  source_code: `${GH_REPOSITORY}/${PRODUCT_PREVIEW_CARD_COMPONENT}`,
  codesandbox: 'https://codesandbox.io/s/product-preview-card-component-w920pf',
  try_challenge: 'https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa',
  solution: 'https://www.frontendmentor.io/solutions/product-preview-card-component-o-yrShdyiW',
  test_state: NO_NEED,
}
