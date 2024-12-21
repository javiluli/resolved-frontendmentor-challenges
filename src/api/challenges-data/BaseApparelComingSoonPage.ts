// Types
import { Challenge } from '@/types'
// Constants
import { CSS, GH_REPOSITORY, HTML, JS, NEWBIE, URL_BASE_PREVIEW } from '@/constant'
import { CHALLENGE_SLUG } from '@/constant/challenges-slug'
// Links for images
import desktopDesign from '@/challenges/base-apparel-coming-soon-page/assets/design/desktop-design.jpg'
import desktopPreview from '@/challenges/base-apparel-coming-soon-page/assets/design/desktop-preview.jpg'
import mobileDesign from '@/challenges/base-apparel-coming-soon-page/assets/design/mobile-design.jpg'

export const BaseApparelComingSoonPage: Challenge = {
  id: '13',
  slug: CHALLENGE_SLUG.BASE_APPAREL_COMING_SOON_PAGE,
  title: 'Base Apparel coming soon page',
  description:
    "This layout looks simple enough, but there are some interesting details to it that will test your CSS skills. You'll also get to practice basic form validation.",
  difficulty: NEWBIE,
  languages: [HTML, CSS, JS],
  images: {
    desktopPreview,
    desktopDesign,
    mobileDesign,
  },
  links: {
    livePreview: `${URL_BASE_PREVIEW}/${CHALLENGE_SLUG.BASE_APPAREL_COMING_SOON_PAGE}`,
    sourceCode: `${GH_REPOSITORY}/${CHALLENGE_SLUG.BASE_APPAREL_COMING_SOON_PAGE}`,
  },
  frontendMentor: {
    tryChallenge: 'https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0',
    solution: 'https://www.frontendmentor.io/solutions/base-apparel-coming-soon-page-z1Qs4JhKYW',
  },
}
