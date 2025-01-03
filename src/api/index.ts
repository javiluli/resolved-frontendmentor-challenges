import { Challenge, ChallengeSlug } from '@/types'

import {
  AdviceGeneratorApp,
  AgeCalculatorApp,
  ArticlePreviewComponent,
  BaseApparelComingSoonPage,
  CalculatorApp,
  ExpensesChartComponent,
  FAQAccordionCard,
  FourCardFeatureSection,
  HuddleLandingPageWithASingleIntroductorySection,
  InteractiveRatingComponent,
  IntroComponentWithSignUpForm,
  NftPreviewCardComponent,
  OrderSummaryComponent,
  PingSingleColumnComingSoonPage,
  ProductPreviewCardComponent,
  ProfileCardComponent,
  QrCodeComponent,
  RestCountriesApiWithColorThemeSwitcher,
  SinglePriceGridComponent,
  SocialMediaDashboardWithThemeSwitcherMaster,
  SocialProofSection,
  StatsPreviewCardComponent,
  TestimonialsGridSection,
  ThreeColumnPreviewCardComponent,
  TimeTrackingDashboard,
  TipCalculatorApp,
  TodoApp,
} from './challenges-data'

const challengesData: Record<ChallengeSlug, Challenge> = {
  'qr-code-component': { ...QrCodeComponent },
  'product-preview-card-component': { ...ProductPreviewCardComponent },
  'interactive-rating-component': { ...InteractiveRatingComponent },
  'nft-preview-card-component': { ...NftPreviewCardComponent },
  'order-summary-component': { ...OrderSummaryComponent },
  'stats-preview-card-component': { ...StatsPreviewCardComponent },
  'three-column-preview-card-component': { ...ThreeColumnPreviewCardComponent },
  'profile-card-component': { ...ProfileCardComponent },
  'faq-accordion-card': { ...FAQAccordionCard },
  'social-proof-section': { ...SocialProofSection },
  'article-preview-component': { ...ArticlePreviewComponent },
  'four-card-feature-section': { ...FourCardFeatureSection },
  'base-apparel-coming-soon-page': { ...BaseApparelComingSoonPage },
  'intro-component-with-sign-up-form': { ...IntroComponentWithSignUpForm },
  'single-price-grid-component': { ...SinglePriceGridComponent },
  'ping-single-column-coming-soon-page': { ...PingSingleColumnComingSoonPage },
  'huddle-landing-page-with-a-single-introductory-section': { ...HuddleLandingPageWithASingleIntroductorySection },
  'advice-generator-app': { ...AdviceGeneratorApp },
  'expenses-chart-component': { ...ExpensesChartComponent },
  'tip-calculator-app': { ...TipCalculatorApp },
  'testimonials-grid-section': { ...TestimonialsGridSection },
  'social-media-dashboard-with-theme-switcher-master': { ...SocialMediaDashboardWithThemeSwitcherMaster },
  'time-tracking-dashboard': { ...TimeTrackingDashboard },
  'age-calculator-app': { ...AgeCalculatorApp },
  'calculator-app': { ...CalculatorApp },
  'todo-app': { ...TodoApp },
  'rest-countries-api-with-color-theme-switcher': { ...RestCountriesApiWithColorThemeSwitcher },
}

export const challenges = Object.values(challengesData)
