// Types
// Links for images
import desktopDesign from '@/challenges/testimonials-grid-section/assets/design/desktop-design.jpg'
import desktopPreview from '@/challenges/testimonials-grid-section/assets/design/desktop-preview.jpg'
import mobileDesign from '@/challenges/testimonials-grid-section/assets/design/mobile-design.jpg'
// Constants
import { CSS, GH_REPOSITORY, HTML, JUNIOR, URL_BASE_PREVIEW } from '@/constant'
import { CHALLENGE_SLUG } from '@/constant/challenges-slug'
import { Challenge } from '@/types'

export const TestimonialsGridSection: Challenge = {
  id: '21',
  slug: CHALLENGE_SLUG.TESTIMONIALS_GRID_SECTION,
  title: 'Testimonials grid section',
  description:
    "This challenge will be perfect practice for anyone wanting to test their CSS Grid skills. Grid is such a powerful addition to CSS, so it's worth getting to grips with it!",
  difficulty: JUNIOR,
  languages: [HTML, CSS],
  images: {
    desktopPreview,
    desktopDesign,
    mobileDesign,
  },
  links: {
    livePreview: `${URL_BASE_PREVIEW}/${CHALLENGE_SLUG.TESTIMONIALS_GRID_SECTION}`,
    sourceCode: `${GH_REPOSITORY}/${CHALLENGE_SLUG.TESTIMONIALS_GRID_SECTION}`,
  },
  frontendMentor: {
    tryChallenge: 'https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7',
    solution: 'https://www.frontendmentor.io/solutions/testimonials-grid-section-iAjaE4qFnF',
  },
}
