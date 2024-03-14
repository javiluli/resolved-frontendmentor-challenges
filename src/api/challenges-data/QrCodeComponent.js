import { NEWBIE } from '@@constant/challenge-difficulty.js'
import { CSS, HTML } from '@@constant/challenge-languages.js'
import { NO_NEED } from '@@constant/challenge-test-state.js'
import { QR_CODE_COMPONENT } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, GH_REPOSITORY_FOLDER_DESIGN_IMAGES, URL_BASE_PREVIEW } from '@@constant/urls.js'

export const QrCodeComponent = {
  id: QR_CODE_COMPONENT,
  title: 'QR code component',
  description:
    "A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
  difficulty: NEWBIE,
  languages: [HTML, CSS],
  images: {
    desktop_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${QR_CODE_COMPONENT}/design/desktop-design.jpg`,
    desktop_preview: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${QR_CODE_COMPONENT}/design/desktop-preview.jpg`,
    mobile_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${QR_CODE_COMPONENT}/design/mobile-design.jpg`,
  },
  live_preview: `${URL_BASE_PREVIEW}/${QR_CODE_COMPONENT}`,
  source_code: `${GH_REPOSITORY}/${QR_CODE_COMPONENT}`,
  codesandbox: 'https://codesandbox.io/s/qr-code-component-wefu2n',
  try_challenge: 'https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H',
  solution: 'https://www.frontendmentor.io/solutions/qr-code-component-cwv9rkFAiN',
  test_state: NO_NEED,
}
