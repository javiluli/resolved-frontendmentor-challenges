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

      {/* <MuiContainer>
        <div>
          <Button
            id="basic-button"
            variant="contained"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Dashboard
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <FormGroup>
              <MenuItem disabled>
                <Typography sx={{ fontStyle: 'italic' }}>Difficulty</Typography>
              </MenuItem>
              <MenuItem>
                <FormControlLabel control={<Checkbox />} label="NEWBIE" />
              </MenuItem>
              <MenuItem>
                <FormControlLabel control={<Checkbox />} label="JUNIOR" />
              </MenuItem>
              <MenuItem>
                <FormControlLabel control={<Checkbox />} label="INTERMEDIATE" />
              </MenuItem>
              <MenuItem>
                <FormControlLabel control={<Checkbox />} label="ADVANCED" />
              </MenuItem>
            </FormGroup>
          </Menu>
        </div>
      </MuiContainer> */}

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
