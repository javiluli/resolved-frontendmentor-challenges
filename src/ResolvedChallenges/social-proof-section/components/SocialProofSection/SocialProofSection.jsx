// MUI
import { styled, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MuiBox from '@mui/material/Box'
import MuiGrid from '@mui/material/Grid'
import MuiContainer from '@mui/material/Container'
// Components
import HeaderSection from './HeaderSection'
import StatsSection from './StatsSection'
import CommentsSection from './CommentsSection'
// Images
import imgColton from '../../images/image-colton.jpg'
import imgIrene from '../../images/image-irene.jpg'
import imgAnne from '../../images/image-anne.jpg'

const dataStats = [
  {
    text: 'Rated 5 Stars in Reviews',
  },
  {
    text: 'Rated 5 Stars in Report Guru',
  },
  {
    text: 'Rated 5 Stars in BestTech',
  },
]

const dataComments = [
  {
    avatar: imgColton,
    name: 'Colton Smith',
    comment:
      'We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!',
  },
  {
    avatar: imgIrene,
    name: 'Irene Roberts',
    comment:
      'Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.',
  },
  {
    avatar: imgAnne,
    name: 'Anne Wallace',
    comment:
      'Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!',
  },
]

const MuiBoxFlexGrow = styled(MuiBox)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('lg')]: {
    flexGrow: 0,
  },
}))

const SocialProofSection = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <MuiContainer sx={{ padding: '4em 2em' }}>
      <MuiGrid container spacing={4}>
        <MuiGrid item xs={12} lg={3}>
          <HeaderSection />
        </MuiGrid>

        <MuiGrid container item xs={12} lg={8}>
          <MuiBoxFlexGrow>
            <MuiGrid container direction="column" item spacing={2} sx={{ alignItems: matches ? 'flex-end' : '' }}>
              {dataStats.map(({ text }, index) => (
                <MuiGrid
                  item
                  xs
                  sx={{
                    marginRight: matches ? `-${index * 50}px` : '',
                  }}
                >
                  <StatsSection text={text} />
                </MuiGrid>
              ))}
            </MuiGrid>
          </MuiBoxFlexGrow>
        </MuiGrid>

        <MuiGrid container item xs={12} spacing={2}>
          {dataComments.map(({ avatar, name, comment }, index) => (
            <MuiGrid item xs={12} lg={4} sx={{ marginTop: matches ? `${index * 20}px` : '' }}>
              <CommentsSection avatar={avatar} name={name} comment={comment} />
            </MuiGrid>
          ))}
        </MuiGrid>
      </MuiGrid>
    </MuiContainer>
  )
}

export default SocialProofSection
