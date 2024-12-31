// Types
// Links for images
import desktopDesign from '@/challenges/social-media-dashboard-with-theme-switcher-master/assets/design/desktop-design-dark.jpg'
import desktopPreview from '@/challenges/social-media-dashboard-with-theme-switcher-master/assets/design/desktop-preview.jpg'
import mobileDesign from '@/challenges/social-media-dashboard-with-theme-switcher-master/assets/design/mobile-design-dark.jpg'
// Constants
import { CSS, GH_REPOSITORY, HTML, JS, JUNIOR, URL_BASE_PREVIEW } from '@/constant'
import { CHALLENGE_SLUG } from '@/constant/challenges-slug'
import { Challenge } from '@/types'

export const SocialMediaDashboardWithThemeSwitcherMaster: Challenge = {
  id: '22',
  slug: CHALLENGE_SLUG.SOCIAL_MEDIA_DASHBOARD_WITH_THEME_SWITCHER_MASTER,
  title: 'Social media dashboard with theme switcher',
  description:
    'This challenge will be a perfect chance to practice your Grid skills. The color theme switcher also adds a nice additional test.',
  difficulty: JUNIOR,
  languages: [HTML, CSS, JS],
  images: {
    desktopPreview,
    desktopDesign,
    mobileDesign,
  },
  links: {
    livePreview: `${URL_BASE_PREVIEW}/${CHALLENGE_SLUG.SOCIAL_MEDIA_DASHBOARD_WITH_THEME_SWITCHER_MASTER}`,
    sourceCode: `${GH_REPOSITORY}/${CHALLENGE_SLUG.SOCIAL_MEDIA_DASHBOARD_WITH_THEME_SWITCHER_MASTER}`,
  },
  frontendMentor: {
    tryChallenge: 'https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H',
    solution: 'https://www.frontendmentor.io/solutions/social-media-dashboard-with-theme-switcher-NBoExQGMDt',
  },
}
