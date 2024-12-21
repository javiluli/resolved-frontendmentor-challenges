// Types
import { Challenge } from '@/types'
// Constants
import { CSS, GH_REPOSITORY, HTML, JS, JUNIOR, URL_BASE_PREVIEW } from '@/constant'
import { CHALLENGE_SLUG } from '@/constant/challenges-slug'
// Links for images
import desktopDesign from '@/challenges/expenses-chart-component/assets/design/desktop-design.jpg'
import desktopPreview from '@/challenges/expenses-chart-component/assets/design/desktop-preview.jpg'
import mobileDesign from '@/challenges/expenses-chart-component/assets/design/mobile-design.jpg'

export const ExpensesChartComponent: Challenge = {
  id: '19',
  slug: CHALLENGE_SLUG.EXPENSES_CHART_COMPONENT,
  title: 'Expenses chart component',
  description:
    "In this challenge, you'll create a bar chart component from scratch. We provide a local JSON file, so you can add the chart data dynamically if you choose.",
  difficulty: JUNIOR,
  languages: [HTML, CSS, JS],
  images: {
    desktopPreview,
    desktopDesign,
    mobileDesign,
  },
  links: {
    livePreview: `${URL_BASE_PREVIEW}/${CHALLENGE_SLUG.EXPENSES_CHART_COMPONENT}`,
    sourceCode: `${GH_REPOSITORY}/${CHALLENGE_SLUG.EXPENSES_CHART_COMPONENT}`,
  },
  frontendMentor: {
    tryChallenge: 'https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt',
    solution: 'https://www.frontendmentor.io/solutions/expenses-chart-component-cLzHSD7asY',
  },
}
