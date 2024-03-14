import { INTERMEDIATE } from '@@constant/challenge-difficulty.js'
import { CSS, HTML, JS } from '@@constant/challenge-languages.js'
import { NO_INIT } from '@@constant/challenge-test-state.js'
import { TODO_APP } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, GH_REPOSITORY_FOLDER_DESIGN_IMAGES, URL_BASE_PREVIEW } from '@@constant/urls.js'

export const TodoApp = {
  id: TODO_APP,
  title: 'Todo app',
  description:
    'The classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop reordering for anyone wanting an extra test.',
  difficulty: INTERMEDIATE,
  languages: [HTML, CSS, JS],
  images: {
    desktop_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${TODO_APP}/design/desktop-design.jpg`,
    desktop_preview: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${TODO_APP}/design/desktop-preview.jpg`,
    mobile_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${TODO_APP}/design/mobile-design.jpg`,
  },
  live_preview: `${URL_BASE_PREVIEW}/${TODO_APP}`,
  source_code: `${GH_REPOSITORY}/${TODO_APP}`,
  codesandbox: '',
  try_challenge: 'https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW',
  solution: 'https://www.frontendmentor.io/solutions/todo-app-xXQlQRnv0i',
  test_state: NO_INIT,
}
