import MuiFacebookIcon from '@mui/icons-material/Facebook'
import MuiInstagramIcon from '@mui/icons-material/Instagram'
import MuiTwitterIcon from '@mui/icons-material/Twitter'
import MuiIconButton from '@mui/material/IconButton'
import MuiStack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const Footer = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <MuiStack direction="row" justifyContent={matches ? 'flex-end' : 'center'} spacing={2}>
      <MuiIconButton aria-label="Facebook">
        <MuiFacebookIcon fontSize="small" />
      </MuiIconButton>

      <MuiIconButton aria-label="Twitter">
        <MuiTwitterIcon fontSize="small" />
      </MuiIconButton>

      <MuiIconButton aria-label="Instagram">
        <MuiInstagramIcon fontSize="small" />
      </MuiIconButton>
    </MuiStack>
  )
}

export default Footer
