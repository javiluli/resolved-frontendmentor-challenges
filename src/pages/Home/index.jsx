// MUI
import { Box as MuiBox } from '@mui/material'
import MuiMasonry from '@mui/lab/Masonry'
import MuiContainer from '@mui/system/Container'
import MuiStack from '@mui/material/Stack'
// Components
import Title from '@/components/Title'

const Home = () => {
  return (
    <MuiContainer sx={{ p: '4em 1em 1em', backgroundColor: 'background.default' }} component="main">
      <MuiStack spacing={6}>
        <Title />

        <MuiBox sx={{ display: 'flex', justifyContent: 'center' }} component="section">
          <MuiMasonry columns={{ xs: 1, md: 2, lg: 3 }} spacing={{ xs: 1, md: 3, lg: 4 }}></MuiMasonry>
        </MuiBox>
      </MuiStack>
    </MuiContainer>
  )
}

export default Home
