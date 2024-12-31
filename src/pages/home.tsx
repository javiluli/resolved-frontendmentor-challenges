import challenges from '@/api'
import { ChallengeCard } from '@/components/ui/challenge-card'
import { Header } from '@/components/ui/header'

import MuiBox from '@mui/material/Box'
import MuiContainer from '@mui/material/Container'
import MuiDivider from '@mui/material/Divider'

const challensDataArray = Object.values(challenges)

export const HomePage = () => {
  return (
    <>
      <MuiContainer>
        <Header />
      </MuiContainer>
      <MuiDivider />

      <MuiBox
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
            xl: 'repeat(4, 1fr)',
          },
          gap: 6,
          px: 4,
          py: 2,
          pb: 6,
          margin: '0 auto',
        }}
      >
        {challensDataArray.map((item, index) => (
          <ChallengeCard key={index} id={item.slug} image={item.images.desktopPreview} title={item.title} difficulty={item.difficulty} />
        ))}
      </MuiBox>
    </>
  )
}
