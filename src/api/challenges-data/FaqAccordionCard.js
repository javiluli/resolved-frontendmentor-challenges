import { NEWBIE } from '@@constant/challenge-difficulty.js'
import { CSS, HTML, JS } from '@@constant/challenge-languages.js'
import { NO_INIT } from '@@constant/challenge-test-state.js'
import { FAQ_ACCORDION_CARD } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, URL_BASE_PREVIEW } from '@@constant/urls.js'

import desktopDesign from '@@challenges/faq-accordion-card/assets/design/desktop-design.jpg'
import desktopPreview from '@@challenges/faq-accordion-card/assets/design/desktop-preview.jpg'
import mobileDesign from '@@challenges/faq-accordion-card/assets/design/mobile-design.jpg'

export const FaqAccordionCard = {
  id: FAQ_ACCORDION_CARD,
  title: 'FAQ accordion card',
  description:
    "In this challenge, you'll be building out an FAQ accordion. This is an extremely common front-end pattern, so it's a great opportunity to get some practice in!",
  difficulty: NEWBIE,
  languages: [HTML, CSS, JS],
  images: {
    desktop_design: desktopDesign,
    desktop_preview: desktopPreview,
    mobile_design: mobileDesign,
  },
  live_preview: `${URL_BASE_PREVIEW}/${FAQ_ACCORDION_CARD}`,
  source_code: `${GH_REPOSITORY}/${FAQ_ACCORDION_CARD}`,
  codesandbox: 'https://codesandbox.io/s/faq-accordion-card-n9xj0b',
  try_challenge: 'https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam',
  solution: 'https://www.frontendmentor.io/solutions/faq-accordion-card-PBkVPesRW1',
  test_state: NO_INIT,
}
