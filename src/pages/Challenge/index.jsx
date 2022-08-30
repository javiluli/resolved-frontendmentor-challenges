import { Suspense, lazy } from 'react'
import { useParams } from 'react-router-dom'

const Challenge = () => {
  const { id } = useParams()
  const LazyComponent = lazy(() => import(`../../ResolvedChallenges/${id}/index.jsx`))

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  )
}

export default Challenge
