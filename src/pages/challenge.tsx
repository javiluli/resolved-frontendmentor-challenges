import { Suspense, lazy } from 'react'
import { useParams } from 'react-router-dom'

import MuiCircularProgress from '@mui/material/CircularProgress'
import MuiStack from '@mui/material/Stack'

import { CHALLENGE_SLUG } from '@/constant/challenges-slug'
import ErrorBoundary from '@/utils/ErrorBoundaries'

export const ChallengePage = () => {
  const { challengeSlug } = useParams()

  let LazyComponent
  if (CHALLENGE_SLUG.REST_COUNTRIES_API_WITH_COLOR_THEME_SWITCHER === challengeSlug) {
    LazyComponent = lazy(() => import(`../challenges/${challengeSlug}/index.tsx`))
  } else {
    LazyComponent = lazy(() => import(`../challenges/${challengeSlug}/index.jsx`))
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<ContainerLoading />}>
        <LazyComponent />
      </Suspense>
    </ErrorBoundary>
  )
}

const ContainerLoading = () => {
  return (
    <MuiStack
      id="container-loading"
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: '100vh',
      }}
    >
      <MuiCircularProgress sx={{ color: 'text.primary' }} />
    </MuiStack>
  )
}
