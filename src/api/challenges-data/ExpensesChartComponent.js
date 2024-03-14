import { JUNIOR } from '@@constant/challenge-difficulty.js'
import { CSS, HTML, JS } from '@@constant/challenge-languages.js'
import { NO_INIT } from '@@constant/challenge-test-state.js'
import { EXPENSES_CHART_COMPONENT } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, GH_REPOSITORY_FOLDER_DESIGN_IMAGES, URL_BASE_PREVIEW } from '@@constant/urls.js'

export const ExpensesChartComponent = {
  id: EXPENSES_CHART_COMPONENT,
  title: 'Expenses chart component',
  description:
    "In this challenge, you'll create a bar chart component from scratch. We provide a local JSON file, so you can add the chart data dynamically if you choose.",
  difficulty: JUNIOR,
  languages: [HTML, CSS, JS],
  images: {
    desktop_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${EXPENSES_CHART_COMPONENT}/design/desktop-design.jpg`,
    desktop_preview: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${EXPENSES_CHART_COMPONENT}/design/desktop-preview.jpg`,
    mobile_design: `${GH_REPOSITORY_FOLDER_DESIGN_IMAGES}/${EXPENSES_CHART_COMPONENT}/design/mobile-design.jpg`,
  },
  live_preview: `${URL_BASE_PREVIEW}/${EXPENSES_CHART_COMPONENT}`,
  source_code: `${GH_REPOSITORY}/${EXPENSES_CHART_COMPONENT}`,
  codesandbox: 'https://codesandbox.io/s/expenses-chart-component-e30ehu',
  try_challenge: 'https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt',
  solution: 'https://www.frontendmentor.io/solutions/expenses-chart-component-cLzHSD7asY',
  test_state: NO_INIT,
}
