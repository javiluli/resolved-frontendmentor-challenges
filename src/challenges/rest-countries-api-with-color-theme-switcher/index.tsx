import './assets/css/fonts.css'

import { ChallengeApp } from './challenge-app'
import { ContextControllerProvider } from './context'

function ChallengeIndex() {
  return (
    <ContextControllerProvider>
      <ChallengeApp />
    </ContextControllerProvider>
  )
}

export default ChallengeIndex
