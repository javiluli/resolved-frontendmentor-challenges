import * as challengesData from './challenges-data'

import { ChallengeSlug } from '@/constant/challenges-slug'
import { Challenge } from '@/types'

const challenges: Record<ChallengeSlug, Challenge> = {
  'qr-code-component': { ...challengesData.QrCodeComponent },
  'product-preview-card-component': { ...challengesData.ProductPreviewCardComponent },
  'interactive-rating-component': { ...challengesData.InteractiveRatingComponent },
  'nft-preview-card-component': { ...challengesData.NftPreviewCardComponent },
  'order-summary-component': { ...challengesData.OrderSummaryComponent },
  'stats-preview-card-component': { ...challengesData.StatsPreviewCardComponent },
  'three-column-preview-card-component': { ...challengesData.ThreeColumnPreviewCardComponent },
  'profile-card-component': { ...challengesData.ProfileCardComponent },
  'faq-accordion-card': { ...challengesData.FAQAccordionCard },
  'social-proof-section': { ...challengesData.SocialProofSection },
  'article-preview-component': { ...challengesData.ArticlePreviewComponent },
  'four-card-feature-section': { ...challengesData.FourCardFeatureSection },
  'base-apparel-coming-soon-page': { ...challengesData.BaseApparelComingSoonPage },
  'intro-component-with-sign-up-form': { ...challengesData.IntroComponentWithSignUpForm },
  'single-price-grid-component': { ...challengesData.SinglePriceGridComponent },
  'ping-single-column-coming-soon-page': { ...challengesData.PingSingleColumnComingSoonPage },
  'huddle-landing-page-with-a-single-introductory-section': { ...challengesData.HuddleLandingPageWithASingleIntroductorySection },
  'advice-generator-app': { ...challengesData.AdviceGeneratorApp },
  'expenses-chart-component': { ...challengesData.ExpensesChartComponent },
  'tip-calculator-app': { ...challengesData.TipCalculatorApp },
  'testimonials-grid-section': { ...challengesData.TestimonialsGridSection },
  'social-media-dashboard-with-theme-switcher-master': { ...challengesData.SocialMediaDashboardWithThemeSwitcherMaster },
  'time-tracking-dashboard': { ...challengesData.TimeTrackingDashboard },
  'age-calculator-app': { ...challengesData.AgeCalculatorApp },
  'calculator-app': { ...challengesData.CalculatorApp },
  'todo-app': { ...challengesData.TodoApp },
}

export default challenges
