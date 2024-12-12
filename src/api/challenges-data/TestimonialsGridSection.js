import { JUNIOR } from '@@constant/challenge-difficulty.js'
import { CSS, HTML } from '@@constant/challenge-languages.js'
import { NO_NEED } from '@@constant/challenge-test-state.js'
import { TESTIMONIALS_GRID_SECTION } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, URL_BASE_PREVIEW } from '@@constant/urls.js'

import desktopDesign from '@@challenges/testimonials-grid-section/assets/design/desktop-design.jpg'
import desktopPreview from '@@challenges/testimonials-grid-section/assets/design/desktop-preview.jpg'
import mobileDesign from '@@challenges/testimonials-grid-section/assets/design/mobile-design.jpg'

export const TestimonialsGridSection = {
  id: TESTIMONIALS_GRID_SECTION,
  title: 'Testimonials grid section',
  description:
    "This challenge will be perfect practice for anyone wanting to test their CSS Grid skills. Grid is such a powerful addition to CSS, so it's worth getting to grips with it!",
  difficulty: JUNIOR,
  languages: [HTML, CSS],
  images: {
    desktop_design: desktopDesign,
    desktop_preview: desktopPreview,
    mobile_design: mobileDesign,
  },
  live_preview: `${URL_BASE_PREVIEW}/${TESTIMONIALS_GRID_SECTION}`,
  source_code: `${GH_REPOSITORY}/${TESTIMONIALS_GRID_SECTION}`,
  codesandbox: 'https://codesandbox.io/s/testimonials-grid-section-b6rqqn',
  try_challenge: 'https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7',
  solution: 'https://www.frontendmentor.io/solutions/testimonials-grid-section-iAjaE4qFnF',
  test_state: NO_NEED,
}
