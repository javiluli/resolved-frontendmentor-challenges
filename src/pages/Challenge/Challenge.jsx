import ErrorBoundary from '@@utilities/ErrorBoundaries'
import MuiCircularProgress from '@mui/material/CircularProgress'
import MuiStack from '@mui/material/Stack'
import { Suspense, lazy } from 'react'
import { Redirect, useRoute } from 'wouter'
import Challens from '../../api'

const Challenge = () => {
  const [match, params] = useRoute('/c/:id')

  if (match) {
    const { id } = params

    if (Challens.find((c) => c.id === id)) {
      const LazyComponent = lazy(() => import(`../../challenges/${id}/index.jsx`))

      return (
        <ErrorBoundary>
          <Suspense fallback={<ContainerCircularProgress />}>
            <LazyComponent />
          </Suspense>
        </ErrorBoundary>
      )
    } else {
      return <Redirect to="/error" replace />
    }
  }
}

export default Challenge

const ContainerCircularProgress = () => {
  return (
    <MuiStack
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
