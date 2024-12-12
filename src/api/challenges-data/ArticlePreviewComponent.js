import { NEWBIE } from '@@constant/challenge-difficulty.js'
import { CSS, HTML, JS } from '@@constant/challenge-languages.js'
import { NO_INIT } from '@@constant/challenge-test-state.js'
import { ARTICLE_PREVIEW_COMPONENT } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, URL_BASE_PREVIEW } from '@@constant/urls.js'

import desktopDesign from '@@challenges/article-preview-component/assets/design/desktop-design.jpg'
import desktopPreview from '@@challenges/article-preview-component/assets/design/desktop-preview.jpg'
import mobileDesign from '@@challenges/article-preview-component/assets/design/mobile-design.jpg'

export const ArticlePreviewComponent = {
  id: ARTICLE_PREVIEW_COMPONENT,
  title: 'Article preview component',
  description:
    "Practice your layout skills with this article preview component. There's lots of fun to be had playing around with animations for the sharing icons as well.",
  difficulty: NEWBIE,
  languages: [HTML, CSS, JS],
  images: {
    desktop_design: desktopDesign,
    desktop_preview: desktopPreview,
    mobile_design: mobileDesign,
  },
  live_preview: `${URL_BASE_PREVIEW}/${ARTICLE_PREVIEW_COMPONENT}`,
  source_code: `${GH_REPOSITORY}/${ARTICLE_PREVIEW_COMPONENT}`,
  codesandbox: 'https://codesandbox.io/s/article-preview-component-qsqvj0',
  try_challenge: 'https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT',
  solution: 'https://www.frontendmentor.io/solutions/article-preview-component-d3_gdzxc4h',
  test_state: NO_INIT,
}
