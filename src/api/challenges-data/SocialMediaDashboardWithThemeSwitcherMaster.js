import { JUNIOR } from '@@constant/challenge-difficulty.js'
import { CSS, HTML, JS } from '@@constant/challenge-languages.js'
import { NO_NEED } from '@@constant/challenge-test-state.js'
import { SOCIAL_MEDIA_DASHBOARD_WITH_THEME_SWITCHER_MASTER } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, URL_BASE_PREVIEW } from '@@constant/urls.js'

import desktopDesign from '@@challenges/social-media-dashboard-with-theme-switcher-master/assets/design/desktop-design-dark.jpg'
import desktopPreview from '@@challenges/social-media-dashboard-with-theme-switcher-master/assets/design/desktop-preview.jpg'
import mobileDesign from '@@challenges/social-media-dashboard-with-theme-switcher-master/assets/design/mobile-design-dark.jpg'

export const SocialMediaDashboardWithThemeSwitcherMaster = {
  id: SOCIAL_MEDIA_DASHBOARD_WITH_THEME_SWITCHER_MASTER,
  title: 'Social media dashboard with theme switcher',
  description:
    'This challenge will be a perfect chance to practice your Grid skills. The color theme switcher also adds a nice additional test.',
  difficulty: JUNIOR,
  languages: [HTML, CSS, JS],
  images: {
    desktop_design: desktopDesign,
    desktop_preview: desktopPreview,
    mobile_design: mobileDesign,
  },
  live_preview: `${URL_BASE_PREVIEW}/${SOCIAL_MEDIA_DASHBOARD_WITH_THEME_SWITCHER_MASTER}`,
  source_code: `${GH_REPOSITORY}/${SOCIAL_MEDIA_DASHBOARD_WITH_THEME_SWITCHER_MASTER}`,
  codesandbox: 'https://codesandbox.io/s/social-media-dashboard-with-theme-switcher-j5vne0',
  try_challenge: 'https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H',
  solution: 'https://www.frontendmentor.io/solutions/social-media-dashboard-with-theme-switcher-NBoExQGMDt',
  test_state: NO_NEED,
}
