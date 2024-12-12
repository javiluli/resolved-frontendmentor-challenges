import { NEWBIE } from '@@constant/challenge-difficulty.js'
import { CSS, HTML } from '@@constant/challenge-languages.js'
import { NO_NEED } from '@@constant/challenge-test-state.js'
import { QR_CODE_COMPONENT } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, URL_BASE_PREVIEW } from '@@constant/urls.js'

import desktopDesign from '@@challenges/qr-code-component/assets/design/desktop-design.jpg'
import desktopPreview from '@@challenges/qr-code-component/assets/design/desktop-preview.jpg'
import mobileDesign from '@@challenges/qr-code-component/assets/design/mobile-design.jpg'

export const QrCodeComponent = {
  id: QR_CODE_COMPONENT,
  title: 'QR code component',
  description:
    "A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
  difficulty: NEWBIE,
  languages: [HTML, CSS],
  images: {
    desktop_design: desktopDesign,
    desktop_preview: desktopPreview,
    mobile_design: mobileDesign,
  },
  live_preview: `${URL_BASE_PREVIEW}/${QR_CODE_COMPONENT}`,
  source_code: `${GH_REPOSITORY}/${QR_CODE_COMPONENT}`,
  codesandbox: 'https://codesandbox.io/s/qr-code-component-wefu2n',
  try_challenge: 'https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H',
  solution: 'https://www.frontendmentor.io/solutions/qr-code-component-cwv9rkFAiN',
  test_state: NO_NEED,
}
