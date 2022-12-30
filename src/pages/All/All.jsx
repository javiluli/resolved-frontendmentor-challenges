import MuiBox from '@mui/material/Box'
import MuiCircularProgress from '@mui/material/CircularProgress'
import MuiStack from '@mui/material/Stack'
import { Suspense } from 'react'
import { lazily } from 'react-lazily'

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
  const {
    QRCodeComponent,
    ProductPreviewCardComponent,
    InteractiveRatingComponent,
    NTFPreviewCardComponent,
    OrderSummaryComponent,
    StatsPreviewCardComponent,
    ThreeColumnPreviewCardComponent,
    ProfileCardComponent,
    FAQAccordionCard,
    SocialProofSection,
    ArticlePreviewComponent,
    FourCardFeatureSection,
    BaseApparelComingSoonPage,
    IntroComponentWithSignUpForm,
    SinglePriceGridComponent,
    PingSingleColumnComingSoonPage,
    HuddleLandingPageWithASingleIntroductorySection,
    AdviceGeneratorApp,
  } = lazily(() => import('../../ResolvedChallenges'))

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
        <NTFPreviewCardComponent />
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
    </MuiBox>
  )
}

export default All
