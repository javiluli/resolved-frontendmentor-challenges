import MuiIconButton from '@mui/material/IconButton'
import MuiStack from '@mui/material/Stack'

import GitHubIcon from '@mui/icons-material/GitHub'

import { Title } from '@/components/ui/title'

export const Header = () => {
  return (
    <MuiStack direction="row" justifyContent="space-between" component="header" sx={{ py: 1 }}>
      <Title>Resolved frontendmentor.io challenges</Title>
      <MuiStack direction="row" spacing={1}>
        <MuiIconButton aria-label="github">
          <GitHubIcon />
        </MuiIconButton>
      </MuiStack>
    </MuiStack>
  )
}
