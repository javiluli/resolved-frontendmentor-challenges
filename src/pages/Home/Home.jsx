import Challens from '@/api/data'
import Card from '@/components/Card'
import Title from '@/components/Title'
import MuiMasonry from '@mui/lab/Masonry'
import MuiBox from '@mui/material/Box'
import MuiButton from '@mui/material/Button'
import MuiStack from '@mui/material/Stack'
import MuiContainer from '@mui/system/Container'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <MuiBox>
      <MuiContainer sx={{ padding: '4em 1em 1em', backgroundColor: 'background.default' }} component="main">
        <MuiStack spacing={6}>
          <Title />

          <Link to={'all'} style={{ textDecoration: 'none' }}>
            <MuiButton variant="contained" disableElevation>
              All
            </MuiButton>
          </Link>

          <MuiBox sx={{ display: 'flex', justifyContent: 'center' }} component="section">
            <MuiMasonry columns={{ sm: 2, md: 2, lg: 3 }} spacing={2}>
              {Challens.map((challen) => (
                <Card key={challen.id} data={challen} />
              ))}
            </MuiMasonry>
          </MuiBox>
        </MuiStack>
      </MuiContainer>
    </MuiBox>
  )
}

export default Home
