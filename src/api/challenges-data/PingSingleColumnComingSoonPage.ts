// Types
// Links for images
import desktopDesign from '@/challenges/ping-single-column-coming-soon-page/assets/design/desktop-design.jpg'
import desktopPreview from '@/challenges/ping-single-column-coming-soon-page/assets/design/desktop-preview.jpg'
import mobileDesign from '@/challenges/ping-single-column-coming-soon-page/assets/design/mobile-design.jpg'
// Constants
import { CSS, GH_REPOSITORY, HTML, JS, NEWBIE, URL_BASE_PREVIEW } from '@/constant'
import { CHALLENGE_SLUG } from '@/constant/challenges-slug'
import { Challenge } from '@/types'

export const PingSingleColumnComingSoonPage: Challenge = {
  id: '16',
  slug: CHALLENGE_SLUG.PING_SINGLE_COLUMN_COMING_SOON_PAGE,
  title: 'Ping single column coming soon page',
  description: 'This challenge is great for beginners and offers a chance to practice basic client-side form validation.',
  difficulty: NEWBIE,
  languages: [HTML, CSS, JS],
  images: {
    desktopPreview,
    desktopDesign,
    mobileDesign,
  },
  links: {
    livePreview: `${URL_BASE_PREVIEW}/${CHALLENGE_SLUG.PING_SINGLE_COLUMN_COMING_SOON_PAGE}`,
    sourceCode: `${GH_REPOSITORY}/${CHALLENGE_SLUG.PING_SINGLE_COLUMN_COMING_SOON_PAGE}`,
  },
  frontendMentor: {
    tryChallenge: 'https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da',
    solution: 'https://www.frontendmentor.io/solutions/ping-single-column-coming-soon-page-sIycp6lX6Q',
  },
}
