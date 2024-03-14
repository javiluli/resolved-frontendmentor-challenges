import { JUNIOR } from '@@constant/challenge-difficulty.js'
import { CSS, HTML, JS } from '@@constant/challenge-languages.js'
import { NO_NEED } from '@@constant/challenge-test-state.js'
import { TIME_TRACKING_DASHBOARD } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, GH_REPOSITORY_FOLDER_DESIGN_IMAGES, URL_BASE_PREVIEW } from '@@constant/urls.js'

export const TimeTrackingDashboard = {
  id: TIME_TRACKING_DASHBOARD,
  title: 'Time tracking dashboard',
  description:
    'A perfect opportunity to practice your CSS Grid skills. For anyone wanting to take it up a notch, we provide a JSON data file to practice working with data.',
  difficulty: JUNIOR,
  languages: [HTML, CSS, JS],
  images: {
    desktop_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${TIME_TRACKING_DASHBOARD}/design/desktop-design.jpg`,
    desktop_preview: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${TIME_TRACKING_DASHBOARD}/design/desktop-preview.jpg`,
    mobile_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${TIME_TRACKING_DASHBOARD}/design/mobile-design.jpg`,
  },
  live_preview: `${URL_BASE_PREVIEW}/${TIME_TRACKING_DASHBOARD}`,
  source_code: `${GH_REPOSITORY}/${TIME_TRACKING_DASHBOARD}`,
  codesandbox: 'https://codesandbox.io/s/time-tracking-dashboard-j0e0cn',
  try_challenge: 'https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw',
  solution: 'https://www.frontendmentor.io/solutions/time-tracking-dashboard-V70uZ_-dsV',
  test_state: NO_NEED,
}
