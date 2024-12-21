// Types
import { Challenge } from '@/types'
// Constants
import { CSS, GH_REPOSITORY, HTML, NEWBIE, URL_BASE_PREVIEW } from '@/constant'
import { CHALLENGE_SLUG } from '@/constant/challenges-slug'
// Links for images
import desktopDesign from '@/challenges/qr-code-component/assets/design/desktop-design.jpg'
import desktopPreview from '@/challenges/qr-code-component/assets/design/desktop-preview.jpg'
import mobileDesign from '@/challenges/qr-code-component/assets/design/mobile-design.jpg'

export const QrCodeComponent: Challenge = {
  id: '1',
  slug: CHALLENGE_SLUG.QR_CODE_COMPONENT,
  title: 'QR Code Component',
  description:
    "A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
  difficulty: NEWBIE,
  languages: [HTML, CSS],
  images: {
    desktopPreview,
    desktopDesign,
    mobileDesign,
  },
  links: {
    livePreview: `${URL_BASE_PREVIEW}/${CHALLENGE_SLUG.QR_CODE_COMPONENT}`,
    sourceCode: `${GH_REPOSITORY}/${CHALLENGE_SLUG.QR_CODE_COMPONENT}`,
  },
  frontendMentor: {
    tryChallenge: 'https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H',
    solution: 'https://www.frontendmentor.io/solutions/qr-code-component-abc123',
  },
}
