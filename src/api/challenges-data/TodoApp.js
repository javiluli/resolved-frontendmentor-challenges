import { INTERMEDIATE } from '@@constant/challenge-difficulty.js'
import { CSS, HTML, JS } from '@@constant/challenge-languages.js'
import { NO_INIT } from '@@constant/challenge-test-state.js'
import { TODO_APP } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, URL_BASE_PREVIEW } from '@@constant/urls.js'

import desktopDesign from '@@challenges/todo-app/assets/design/desktop-design-light.jpg'
import desktopPreview from '@@challenges/todo-app/assets/design/desktop-preview.jpg'
import mobileDesign from '@@challenges/todo-app/assets/design/mobile-design-light.jpg'

export const TodoApp = {
  id: TODO_APP,
  title: 'Todo app',
  description:
    'The classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop reordering for anyone wanting an extra test.',
  difficulty: INTERMEDIATE,
  languages: [HTML, CSS, JS],
  images: {
    desktop_design: desktopDesign,
    desktop_preview: desktopPreview,
    mobile_design: mobileDesign,
  },
  live_preview: `${URL_BASE_PREVIEW}/${TODO_APP}`,
  source_code: `${GH_REPOSITORY}/${TODO_APP}`,
  codesandbox: '',
  try_challenge: 'https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW',
  solution: 'https://www.frontendmentor.io/solutions/todo-app-xXQlQRnv0i',
  test_state: NO_INIT,
}
