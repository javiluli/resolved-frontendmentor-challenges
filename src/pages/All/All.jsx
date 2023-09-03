import MuiBox from '@mui/material/Box';
import MuiCircularProgress from '@mui/material/CircularProgress'
import MuiStack from '@mui/material/Stack'
import { Suspense, lazy } from 'react'

const QRCodeComponent = lazy(() => import('@/challenges/qr-code-component'))
const ProductPreviewCardComponent = lazy(() => import('@/challenges/product-preview-card-component'))
const InteractiveRatingComponent = lazy(() => import('@/challenges/interactive-rating-component'))
const NFTPreviewCardComponent = lazy(() => import('@/challenges/nft-preview-card-component'))
const OrderSummaryComponent = lazy(() => import('@/challenges/order-summary-component'))
const StatsPreviewCardComponent = lazy(() => import('@/challenges/stats-preview-card-component'))
const ThreeColumnPreviewCardComponent = lazy(() => import('@/challenges/three-column-preview-card-component'))
const ProfileCardComponent = lazy(() => import('@/challenges/profile-card-component'))
const FAQAccordionCard = lazy(() => import('@/challenges/faq-accordion-card'))
const SocialProofSection = lazy(() => import('@/challenges/social-proof-section'))
const ArticlePreviewComponent = lazy(() => import('@/challenges/article-preview-component'))
const FourCardFeatureSection = lazy(() => import('@/challenges/four-card-feature-section'))
const BaseApparelComingSoonPage = lazy(() => import('@/challenges/base-apparel-coming-soon-page'))
const IntroComponentWithSignUpForm = lazy(() => import('@/challenges/intro-component-with-sign-up-form'))
const SinglePriceGridComponent = lazy(() => import('@/challenges/single-price-grid-component'))
const PingSingleColumnComingSoonPage = lazy(() => import('@/challenges/ping-single-column-coming-soon-page'))
const HuddleLandingPageWithASingleIntroductorySection = lazy(() =>
  import('@/challenges/huddle-landing-page-with-a-single-introductory-section')
)
const AdviceGeneratorApp = lazy(() => import('@/challenges/advice-generator-app'))
const ExpensesChartComponent = lazy(() => import('@/challenges/expenses-chart-component'))
const TipCalculatorApp = lazy(() => import('@/challenges/tip-calculator-app'))
const TestimonialsGridSection = lazy(() => import('@/challenges/testimonials-grid-section'))
const SocialMediaDashboardWithThemeSwitcherMaster = lazy(() => import('@/challenges/social-media-dashboard-with-theme-switcher-master'))
const TimeTrackingDashboard = lazy(() => import('@/challenges/time-tracking-dashboard'))
const AgeCalculatorApp = lazy(() => import('@/challenges/age-calculator-app'))
const CalculatorApp = lazy(() => import('@/challenges/calculator-app'))

const ContainerCircularProgress = () => {
  return (
    <MuiStack
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: '100vh',
      }}
    >
      <MuiCircularProgress />
    </MuiStack>
  )
}

const All = () => {
  return (
    <MuiBox>
      <Suspense fallback={<ContainerCircularProgress />}>
        <QRCodeComponent />
      </Suspense>

      <Suspense fallback={<ContainerCircularProgress />}>
        <ProductPreviewCardComponent />
      </Suspense>

      <Suspense fallback={<ContainerCircularProgress />}>
        <InteractiveRatingComponent />
      </Suspense>

      <Suspense fallback={<ContainerCircularProgress />}>
        <NFTPreviewCardComponent />
      </Suspense>

      <Suspense fallback={<ContainerCircularProgress />}>
        <OrderSummaryComponent />
      </Suspense>

      <Suspense fallback={<ContainerCircularProgress />}>
        <StatsPreviewCardComponent />
      </Suspense>

      <Suspense fallback={<ContainerCircularProgress />}>
        <ThreeColumnPreviewCardComponent />
      </Suspense>

      <Suspense fallback={<ContainerCircularProgress />}>
        <ProfileCardComponent />
      </Suspense>

      <Suspense fallback={<ContainerCircularProgress />}>
        <FAQAccordionCard />
      </Suspense>

      <Suspense fallback={<ContainerCircularProgress />}>
        <SocialProofSection />
      </Suspense>

      <Suspense fallback={<ContainerCircularProgress />}>
        <ArticlePreviewComponent />
      </Suspense>

      <Suspense fallback={<ContainerCircularProgress />}>
        <FourCardFeatureSection />
      </Suspense>

      <Suspense fallback={<ContainerCircularProgress />}>
        <BaseApparelComingSoonPage />
      </Suspense>

      <Suspense fallback={<ContainerCircularProgress />}>
        <IntroComponentWithSignUpForm />
      </Suspense>

      <Suspense fallback={<ContainerCircularProgress />}>
        <SinglePriceGridComponent />
      </Suspense>

      <Suspense fallback={<ContainerCircularProgress />}>
        <PingSingleColumnComingSoonPage />
      </Suspense>

      <Suspense fallback={<ContainerCircularProgress />}>
        <HuddleLandingPageWithASingleIntroductorySection />
      </Suspense>

      <Suspense fallback={<ContainerCircularProgress />}>
        <AdviceGeneratorApp />
      </Suspense>

      <Suspense fallback={<ContainerCircularProgress />}>
        <ExpensesChartComponent />
      </Suspense>

      <Suspense fallback={<ContainerCircularProgress />}>
        <TipCalculatorApp />
      </Suspense>

      <Suspense fallback={<ContainerCircularProgress />}>
        <TestimonialsGridSection />
      </Suspense>

      <Suspense fallback={<ContainerCircularProgress />}>
        <SocialMediaDashboardWithThemeSwitcherMaster />
      </Suspense>

      <Suspense fallback={<ContainerCircularProgress />}>
        <TimeTrackingDashboard />
      </Suspense>

      <Suspense fallback={<ContainerCircularProgress />}>
        <AgeCalculatorApp />
      </Suspense>

      <Suspense fallback={<ContainerCircularProgress />}>
        <CalculatorApp />
      </Suspense>
    </MuiBox>
  )
}

export default All