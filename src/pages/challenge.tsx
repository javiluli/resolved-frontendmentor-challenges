import { Suspense, lazy } from 'react'
import { useParams } from 'react-router'

import MuiCircularProgress from '@mui/material/CircularProgress'
import MuiStack from '@mui/material/Stack'

import ErrorBoundary from '@/utils/ErrorBoundaries'

export const ChallengePage = () => {
  const { challengeSlug } = useParams()

  const LazyComponent = lazy(() => import(`../challenges/${challengeSlug}/index.jsx`))

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
