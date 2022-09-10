// MUI
import MuiBox from '@mui/material/Box'
import MuiGrid from '@mui/material/Grid'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'
import MuiButton from '@mui/material/Button'
// MUI Hooks
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const BaseApparelComingSoonPage = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <MuiBox
      sx={{
        minWidth: '100%',
        height: matches ? '100vh' : 'auto',
        backgroundColor: 'background.primary',
      }}
    >
      <MuiStack sx={{ px: 4, height: matches ? '100%' : 'auto' }} justifyContent="center">
        <MuiGrid sx={{ margin: '0 auto', width: '100%', maxWidth: 700, borderRadius: 3, overflow: 'hidden' }} container>
          <MuiGrid item xs={12} md={12}>
            <MuiBox
              sx={{
                width: '100%',
                p: 5,
                m: '0 auto',
                backgroundColor: 'background.paper',
              }}
            >
              <MuiTypography
                sx={{ mb: 2, fontWeight: 700 }}
                variant="h1"
                component="h1"
                color="text.primary"
                gutterBottom
              >
                Join our community
              </MuiTypography>

              <MuiTypography
                sx={{ fontWeight: 700 }}
                variant="subtitle1"
                component="h2"
                color="text.secondary"
                gutterBottom
              >
                30-day, hassle-free money back guarantee
              </MuiTypography>

              <MuiTypography variant="body1" color="common.black" gutterBottom>
                Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers
                who are serious about honing their skills.
              </MuiTypography>
            </MuiBox>
          </MuiGrid>

          <MuiGrid item xs={12} md={6}>
            <MuiBox
              sx={{
                width: '100%',
                height: '100%',
                p: 5,
                m: '0 auto',
                backgroundColor: 'hsl(179, 62%, 43%)',
              }}
            >
              <MuiTypography
                sx={{ mb: 2, fontWeight: 700 }}
                variant="h2"
                component="h2"
                color="common.white"
                gutterBottom
              >
                Monthly Subscription
              </MuiTypography>

              <MuiStack sx={{ mb: 1 }} direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                <MuiTypography sx={{ fontSize: '2.5rem' }} component="span" color="common.white">
                  &#36;29
                </MuiTypography>
                <MuiTypography sx={{ color: 'hsla(0, 0%, 100%, 0.6)' }} variant="body1" component="span">
                  per month
                </MuiTypography>
              </MuiStack>

              <MuiTypography sx={{ mb: 2 }} variant="body1" color="common.white" gutterBottom>
                Full access for less than <span>&#36;</span> 1 a day
              </MuiTypography>

              <MuiButton variant="contained" size="large" fullWidth>
                Sign Up
              </MuiButton>
            </MuiBox>
          </MuiGrid>

          <MuiGrid item xs={12} md={6}>
            <MuiBox
              sx={{
                width: '100%',
                height: '100%',
                p: 5,
                m: '0 auto',
                backgroundColor: 'hsl(179, 47%, 52%)',
              }}
            >
              <MuiTypography sx={{ mb: 2, fontWeight: 700 }} variant="h2" component="h2" color="common.white">
                Why Us
              </MuiTypography>

              <MuiTypography variant="caption" color="common.white" display="block">
                Tutorials by industry experts
              </MuiTypography>
              <MuiTypography variant="caption" color="common.white" display="block">
                Peer &amp; expert code review
              </MuiTypography>
              <MuiTypography variant="caption" color="common.white" display="block">
                Coding exercises
              </MuiTypography>
              <MuiTypography variant="caption" color="common.white" display="block">
                Access to our GitHub repos
              </MuiTypography>
              <MuiTypography variant="caption" color="common.white" display="block">
                Community forum
              </MuiTypography>
              <MuiTypography variant="caption" color="common.white" display="block">
                Flashcard decks
              </MuiTypography>
              <MuiTypography variant="caption" color="common.white" display="block">
                New videos every week
              </MuiTypography>
            </MuiBox>
          </MuiGrid>
        </MuiGrid>
      </MuiStack>
    </MuiBox>
  )
}

export default BaseApparelComingSoonPage
