// MUI
import MuiBox from '@mui/material/Box'
import MuiMasonry from '@mui/lab/Masonry'
import MuiContainer from '@mui/system/Container'
import MuiStack from '@mui/material/Stack'
// Components
import Header from '@/components/Header'
import Card from '@/components/Card'
import Title from '@/components/Title'
// Data API
import challens from '@/api/data'

const Home = () => {
  return (
    <MuiBox>
      <Header />
      <MuiContainer sx={{ padding: '4em 1em 1em', backgroundColor: 'background.default' }} component="main">
        <MuiStack spacing={6}>
          <Title />

          <MuiBox sx={{ display: 'flex', justifyContent: 'center' }} component="section">
            <MuiMasonry columns={{ xs: 1, md: 2, lg: 3 }} spacing={{ xs: 1, md: 3, lg: 4 }}>
              {challens.map(({ id, title, descripcion, img }) => (
                <Card key={id} title={title} descripcion={descripcion} img={img} url={`/challenge/${id}`} />
              ))}
            </MuiMasonry>
          </MuiBox>
        </MuiStack>
      </MuiContainer>
    </MuiBox>
  )
}

export default Home
