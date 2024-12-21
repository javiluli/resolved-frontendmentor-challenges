// Types
import { Challenge } from '@/types'
// Constants
import { CSS, GH_REPOSITORY, HTML, JS, JUNIOR, URL_BASE_PREVIEW } from '@/constant'
import { CHALLENGE_SLUG } from '@/constant/challenges-slug'
// Links for images
import desktopDesign from '@/challenges/time-tracking-dashboard/assets/design/desktop-design.jpg'
import desktopPreview from '@/challenges/time-tracking-dashboard/assets/design/desktop-preview.jpg'
import mobileDesign from '@/challenges/time-tracking-dashboard/assets/design/mobile-design.jpg'

export const TimeTrackingDashboard: Challenge = {
  id: '23',
  slug: CHALLENGE_SLUG.TIME_TRACKING_DASHBOARD,
  title: 'Time tracking dashboard',
  description:
    'A perfect opportunity to practice your CSS Grid skills. For anyone wanting to take it up a notch, we provide a JSON data file to practice working with data.',
  difficulty: JUNIOR,
  languages: [HTML, CSS, JS],
  images: {
    desktopPreview,
    desktopDesign,
    mobileDesign,
  },
  links: {
    livePreview: `${URL_BASE_PREVIEW}/${CHALLENGE_SLUG.TIME_TRACKING_DASHBOARD}`,
    sourceCode: `${GH_REPOSITORY}/${CHALLENGE_SLUG.TIME_TRACKING_DASHBOARD}`,
  },
  frontendMentor: {
    tryChallenge: 'https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw',
    solution: 'https://www.frontendmentor.io/solutions/time-tracking-dashboard-V70uZ_-dsV',
  },
}
