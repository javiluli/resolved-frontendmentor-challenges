import { JUNIOR } from '@@constant/challenge-difficulty.js'
import { CSS, HTML, JS } from '@@constant/challenge-languages.js'
import { NO_NEED } from '@@constant/challenge-test-state.js'
import { TIME_TRACKING_DASHBOARD } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, URL_BASE_PREVIEW } from '@@constant/urls.js'

import desktopDesign from '@@challenges/time-tracking-dashboard/assets/design/desktop-design.jpg'
import desktopPreview from '@@challenges/time-tracking-dashboard/assets/design/desktop-preview.jpg'
import mobileDesign from '@@challenges/time-tracking-dashboard/assets/design/mobile-design.jpg'

export const TimeTrackingDashboard = {
  id: TIME_TRACKING_DASHBOARD,
  title: 'Time tracking dashboard',
  description:
    'A perfect opportunity to practice your CSS Grid skills. For anyone wanting to take it up a notch, we provide a JSON data file to practice working with data.',
  difficulty: JUNIOR,
  languages: [HTML, CSS, JS],
  images: {
    desktop_design: desktopDesign,
    desktop_preview: desktopPreview,
    mobile_design: mobileDesign,
  },
  live_preview: `${URL_BASE_PREVIEW}/${TIME_TRACKING_DASHBOARD}`,
  source_code: `${GH_REPOSITORY}/${TIME_TRACKING_DASHBOARD}`,
  codesandbox: 'https://codesandbox.io/s/time-tracking-dashboard-j0e0cn',
  try_challenge: 'https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw',
  solution: 'https://www.frontendmentor.io/solutions/time-tracking-dashboard-V70uZ_-dsV',
  test_state: NO_NEED,
}
