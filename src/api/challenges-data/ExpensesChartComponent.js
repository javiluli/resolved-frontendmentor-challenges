import { JUNIOR } from '@@constant/challenge-difficulty.js'
import { CSS, HTML, JS } from '@@constant/challenge-languages.js'
import { NO_INIT } from '@@constant/challenge-test-state.js'
import { EXPENSES_CHART_COMPONENT } from '@@constant/challenges-id.js'
import { GH_REPOSITORY, URL_BASE_PREVIEW } from '@@constant/urls.js'

import desktopDesign from '@@challenges/expenses-chart-component/assets/design/desktop-design.jpg'
import desktopPreview from '@@challenges/expenses-chart-component/assets/design/desktop-preview.jpg'
import mobileDesign from '@@challenges/expenses-chart-component/assets/design/mobile-design.jpg'

export const ExpensesChartComponent = {
  id: EXPENSES_CHART_COMPONENT,
  title: 'Expenses chart component',
  description:
    "In this challenge, you'll create a bar chart component from scratch. We provide a local JSON file, so you can add the chart data dynamically if you choose.",
  difficulty: JUNIOR,
  languages: [HTML, CSS, JS],
  images: {
    desktop_design: desktopDesign,
    desktop_preview: desktopPreview,
    mobile_design: mobileDesign,
  },
  live_preview: `${URL_BASE_PREVIEW}/${EXPENSES_CHART_COMPONENT}`,
  source_code: `${GH_REPOSITORY}/${EXPENSES_CHART_COMPONENT}`,
  codesandbox: 'https://codesandbox.io/s/expenses-chart-component-e30ehu',
  try_challenge: 'https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt',
  solution: 'https://www.frontendmentor.io/solutions/expenses-chart-component-cLzHSD7asY',
  test_state: NO_INIT,
}
