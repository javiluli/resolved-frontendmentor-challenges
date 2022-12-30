import MuiCircularProgress from '@mui/material/CircularProgress'
import MuiStack from '@mui/material/Stack'
import { Suspense, lazy } from 'react'
import { useParams } from 'react-router-dom'

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

const Challenge = () => {
  const { id } = useParams()
  const LazyComponent = lazy(() => import(`../../ResolvedChallenges/${id}/index.jsx`))

  return (
    <Suspense fallback={<ContainerCircularProgress />}>
      <LazyComponent />
    </Suspense>
  )
}

export default Challenge
