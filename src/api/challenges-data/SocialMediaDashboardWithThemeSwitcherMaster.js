import { JUNIOR } from '@@constant/challenge-difficulty.js'
import { CSS, HTML, JS } from '@@constant/challenge-languages.js'
import { NO_NEED } from '@@constant/challenge-test-state.js'
import { SOCIAL_MEDIA_DASHBOARD_WITH_THEME_SWITCHER_MASTER } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, GH_REPOSITORY_FOLDER_DESIGN_IMAGES, URL_BASE_PREVIEW } from '@@constant/urls.js'

export const SocialMediaDashboardWithThemeSwitcherMaster = {
  id: SOCIAL_MEDIA_DASHBOARD_WITH_THEME_SWITCHER_MASTER,
  title: 'Social media dashboard with theme switcher',
  description:
    'This challenge will be a perfect chance to practice your Grid skills. The color theme switcher also adds a nice additional test.',
  difficulty: JUNIOR,
  languages: [HTML, CSS, JS],
  images: {
    desktop_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${SOCIAL_MEDIA_DASHBOARD_WITH_THEME_SWITCHER_MASTER}/design/desktop-design.jpg`,
    desktop_preview: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${SOCIAL_MEDIA_DASHBOARD_WITH_THEME_SWITCHER_MASTER}/design/desktop-preview.jpg`,
    mobile_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${SOCIAL_MEDIA_DASHBOARD_WITH_THEME_SWITCHER_MASTER}/design/mobile-design.jpg`,
  },
  live_preview: `${URL_BASE_PREVIEW}/${SOCIAL_MEDIA_DASHBOARD_WITH_THEME_SWITCHER_MASTER}`,
  source_code: `${GH_REPOSITORY}/${SOCIAL_MEDIA_DASHBOARD_WITH_THEME_SWITCHER_MASTER}`,
  codesandbox: 'https://codesandbox.io/s/social-media-dashboard-with-theme-switcher-j5vne0',
  try_challenge: 'https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H',
  solution: 'https://www.frontendmentor.io/solutions/social-media-dashboard-with-theme-switcher-NBoExQGMDt',
  test_state: NO_NEED,
}
