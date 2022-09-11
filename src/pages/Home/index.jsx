// MUI
import MuiMasonry from '@mui/lab/Masonry'
import MuiBox from '@mui/material/Box'
import MuiStack from '@mui/material/Stack'
import MuiContainer from '@mui/system/Container'
// Components
import Card from '@/components/Card'
import Header from '@/components/Header'
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
            <MuiMasonry columns={{ sm: 1, md: 2, lg: 3 }} spacing={2}>
              {challens.map(({ id, title, subtitle, img, languages, difficulty }) => (
                <Card
                  key={id}
                  title={title}
                  subtitle={subtitle}
                  img={img}
                  url={`/challenge/${id}`}
                  languages={languages}
                  difficulty={difficulty}
                />
              ))}
            </MuiMasonry>
          </MuiBox>
        </MuiStack>
      </MuiContainer>
    </MuiBox>
  )
}

export default Home
