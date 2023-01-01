import MuiBox from '@mui/material/Box'
import MuiButton from '@mui/material/Button'
import MuiGrid from '@mui/material/Grid'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'

const BaseApparelComingSoonPage = () => {
  return (
    <MuiBox sx={{ backgroundColor: 'background.primary' }}>
      <MuiStack justifyContent="center" sx={{ p: 4 }}>
        <MuiGrid container sx={{ margin: '0 auto', minWidth: 250, maxWidth: 650, borderRadius: '1em', overflow: 'hidden' }}>
          <MuiGrid item xs={12}>
            <MuiBox sx={{ p: 5, backgroundColor: 'background.paper' }}>
              <MuiTypography variant="h5" component="h1" color="custom.cyan.main" sx={{ mb: 2, fontWeight: 700 }} gutterBottom>
                Join our community
              </MuiTypography>

              <MuiTypography component="h2" color="custom.lime.main" sx={{ fontWeight: 700 }} gutterBottom>
                30-day, hassle-free money back guarantee
              </MuiTypography>

              <MuiTypography variant="subtitle2" color="text.primary">
                Gain access to our full library of tutorials along with expert code reviews.
              </MuiTypography>
              <MuiTypography variant="subtitle2" color="text.primary">
                Perfect for any developers who are serious about honing their skills.
              </MuiTypography>
            </MuiBox>
          </MuiGrid>

          <MuiGrid item xs={12} md={6}>
            <MuiBox sx={{ height: '100%', p: 5, backgroundColor: 'custom.cyan.main' }}>
              <MuiTypography variant="h6" component="h2" color="text.secondary" sx={{ mb: 2, fontWeight: 700 }}>
                Monthly Subscription
              </MuiTypography>

              <MuiStack direction="row" justifyContent="flex-start" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                <MuiTypography variant="h3" color="text.secondary">
                  &#36;29
                </MuiTypography>
                <MuiTypography color="text.disabled">per month</MuiTypography>
              </MuiStack>

              <MuiTypography color="text.secondary" sx={{ mb: 2 }} gutterBottom>
                Full access for less than <span>&#36;</span>1 a day
              </MuiTypography>

              <MuiButton variant="contained" size="large" fullWidth>
                Sign Up
              </MuiButton>
            </MuiBox>
          </MuiGrid>

          <MuiGrid item xs={12} md={6}>
            <MuiBox sx={{ height: '100%', p: 5, backgroundColor: 'custom.cyan.light' }}>
              <MuiTypography variant="h6" component="h2" color="text.secondary" sx={{ mb: 2, fontWeight: 700 }}>
                Why Us
              </MuiTypography>

              <MuiTypography variant="body2" color="text.disabled">
                Tutorials by industry experts
              </MuiTypography>
              <MuiTypography variant="body2" color="text.disabled">
                Peer &amp; expert code review
              </MuiTypography>
              <MuiTypography variant="body2" color="text.disabled">
                Coding exercises
              </MuiTypography>
              <MuiTypography variant="body2" color="text.disabled">
                Access to our GitHub repos
              </MuiTypography>
              <MuiTypography variant="body2" color="text.disabled">
                Community forum
              </MuiTypography>
              <MuiTypography variant="body2" color="text.disabled">
                Flashcard decks
              </MuiTypography>
              <MuiTypography variant="body2" color="text.disabled">
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
