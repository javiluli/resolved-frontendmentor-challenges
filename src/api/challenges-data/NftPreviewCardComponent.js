import { NEWBIE } from '@@constant/challenge-difficulty.js'
import { CSS, HTML } from '@@constant/challenge-languages.js'
import { NO_NEED } from '@@constant/challenge-test-state.js'
import { NFT_PREVIEW_CARD_COMPONENT } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, GH_REPOSITORY_FOLDER_DESIGN_IMAGES, URL_BASE_PREVIEW } from '@@constant/urls.js'

export const NftPreviewCardComponent = {
  id: NFT_PREVIEW_CARD_COMPONENT,
  title: 'NFT preview card component',
  description:
    'This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with.',
  difficulty: NEWBIE,
  languages: [HTML, CSS],
  images: {
    desktop_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${NFT_PREVIEW_CARD_COMPONENT}/design/desktop-design.jpg`,
    desktop_preview: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${NFT_PREVIEW_CARD_COMPONENT}/design/desktop-preview.jpg`,
    mobile_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${NFT_PREVIEW_CARD_COMPONENT}/design/mobile-design.jpg`,
  },
  live_preview: `${URL_BASE_PREVIEW}/${NFT_PREVIEW_CARD_COMPONENT}`,
  source_code: `${GH_REPOSITORY}/${NFT_PREVIEW_CARD_COMPONENT}`,
  codesandbox: 'https://codesandbox.io/s/nft-preview-card-component-sq8cm6',
  try_challenge: 'https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U',
  solution: 'https://www.frontendmentor.io/solutions/nft-preview-card-component-nEcLjRkVAA',
  test_state: NO_NEED,
}
