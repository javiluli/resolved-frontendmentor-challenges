// Types
// Links for images
import desktopDesign from '@/challenges/todo-app/assets/design/desktop-design-light.jpg'
import desktopPreview from '@/challenges/todo-app/assets/design/desktop-preview.jpg'
import mobileDesign from '@/challenges/todo-app/assets/design/mobile-design-light.jpg'
// Constants
import { CSS, GH_REPOSITORY, HTML, INTERMEDIATE, JS, URL_BASE_PREVIEW } from '@/constant'
import { CHALLENGE_SLUG } from '@/constant/challenges-slug'
import { Challenge } from '@/types'

export const TodoApp: Challenge = {
  id: '26',
  slug: CHALLENGE_SLUG.TODO_APP,
  title: 'Todo app',
  description:
    'The classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop reordering for anyone wanting an extra test.',
  difficulty: INTERMEDIATE,
  languages: [HTML, CSS, JS],
  images: {
    desktopPreview,
    desktopDesign,
    mobileDesign,
  },
  links: {
    livePreview: `${URL_BASE_PREVIEW}/${CHALLENGE_SLUG.TODO_APP}`,
    sourceCode: `${GH_REPOSITORY}/${CHALLENGE_SLUG.TODO_APP}`,
  },
  frontendMentor: {
    tryChallenge: 'https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW',
    solution: 'https://www.frontendmentor.io/solutions/todo-app-xXQlQRnv0i',
  },
}
