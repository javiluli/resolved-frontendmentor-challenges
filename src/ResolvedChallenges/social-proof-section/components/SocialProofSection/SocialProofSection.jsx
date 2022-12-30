import MuiBox from '@mui/material/Box'
import MuiContainer from '@mui/material/Container'
import MuiGrid from '@mui/material/Grid'
import MuiStack from '@mui/material/Stack'
import { styled, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import imgBgPatternBottomDesktop from '../../assets/images/bg-pattern-bottom-desktop.svg'
import imgBgPatternTopDesktop from '../../assets/images/bg-pattern-top-desktop.svg'
import imgAnne from '../../assets/images/image-anne.jpg'
import imgColton from '../../assets/images/image-colton.jpg'
import imgIrene from '../../assets/images/image-irene.jpg'
import { CommentsSection } from './CommentsSection'
import { HeaderSection } from './HeaderSection'
import { StatsSection } from './StatsSection'

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
  const matches = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <MuiStack
      justifyContent="center"
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      <MuiContainer sx={{ padding: '4em 2em' }}>
        {!matches ? (
          <MuiBox
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '584px',
              height: '362px',
              backgroundImage: `url(${imgBgPatternTopDesktop})`,
              backgroundRepeat: 'no-repeat',
            }}
          />
        ) : null}

        {!matches ? (
          <MuiBox
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: '1085px',
              height: '673px',
              backgroundImage: `url(${imgBgPatternBottomDesktop})`,
              backgroundRepeat: 'no-repeat',
            }}
          />
        ) : null}

        <MuiGrid container spacing={4}>
          <MuiGrid item xs={12} lg={6}>
            <HeaderSection />
          </MuiGrid>

          <MuiGrid container item xs={12} lg={6}>
            <MuiBoxFlexGrow>
              <MuiGrid container direction="column" item spacing={2}>
                {dataStats.map(({ text }, index) => (
                  <MuiGrid item key={index} sx={{ marginLeft: matches ? '' : `${index * 50}px` }}>
                    <StatsSection text={text} />
                  </MuiGrid>
                ))}
              </MuiGrid>
            </MuiBoxFlexGrow>
          </MuiGrid>

          <MuiGrid container item xs={12} spacing={2} sx={{ marginTop: '4em' }}>
            {dataComments.map(({ avatar, name, comment }, index) => (
              <MuiGrid item key={index} xs={12} lg={4} sx={{ marginTop: matches ? '' : `${index * 30}px` }}>
                <CommentsSection avatar={avatar} name={name} comment={comment} />
              </MuiGrid>
            ))}
          </MuiGrid>
        </MuiGrid>
      </MuiContainer>
    </MuiStack>
  )
}

export default SocialProofSection
