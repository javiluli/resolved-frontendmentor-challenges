// Types
// Links for images
import desktopDesign from '@/challenges/article-preview-component/assets/design/desktop-design.jpg'
import desktopPreview from '@/challenges/article-preview-component/assets/design/desktop-preview.jpg'
import mobileDesign from '@/challenges/article-preview-component/assets/design/mobile-design.jpg'
// Constants
import { CSS, GH_REPOSITORY, HTML, JS, NEWBIE, URL_BASE_PREVIEW } from '@/constant'
import { CHALLENGE_SLUG } from '@/constant/challenges-slug'
import { Challenge } from '@/types'

export const ArticlePreviewComponent: Challenge = {
  id: '11',
  slug: CHALLENGE_SLUG.ARTICLE_PREVIEW_COMPONENT,
  title: 'Article preview component',
  description:
    "Practice your layout skills with this article preview component. There's lots of fun to be had playing around with animations for the sharing icons as well.",
  difficulty: NEWBIE,
  languages: [HTML, CSS, JS],
  images: {
    desktopPreview,
    desktopDesign,
    mobileDesign,
  },
  links: {
    livePreview: `${URL_BASE_PREVIEW}/${CHALLENGE_SLUG.ARTICLE_PREVIEW_COMPONENT}`,
    sourceCode: `${GH_REPOSITORY}/${CHALLENGE_SLUG.ARTICLE_PREVIEW_COMPONENT}`,
  },
  frontendMentor: {
    tryChallenge: 'https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT',
    solution: 'https://www.frontendmentor.io/solutions/article-preview-component-d3_gdzxc4h',
  },
}
