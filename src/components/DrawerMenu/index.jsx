import { useState } from 'react'
import { Link } from 'react-router-dom'
import MuiBox from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import MuiIconButton from '@mui/material/IconButton'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import Typography from '@mui/material/Typography'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'

import challens from '@/api/data'

const DrawerMenu = () => {
  const [state, setState] = useState({ left: false })
  const [open, setOpen] = useState(true)

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const handleClick = () => {
    setOpen(!open)
  }

  const list = () => (
    <MuiBox sx={{ minWidth: 300, padding: '0.25em 0.5em', margin: '0.15em 0.25em ' }} role="presentation">
      <MenuList>
        <MenuItem
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '5px',
          }}
          onClick={handleClick}
        >
          <Typography variant="body2" color="text.primary" sx={{ fontSize: '0.875rem' }}>
            Challenges Newbie
          </Typography>
          {open ? <ExpandLess sx={{ color: 'primary.main' }} /> : <ExpandMore sx={{ color: 'primary.main' }} />}
        </MenuItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          {challens.map(({ id, title }) => (
            <Link to={`/challenge/${id}`} key={id} style={{ width: '100%', textDecoration: 'none' }}>
              <MenuItem sx={{ borderRadius: '5px' }} onClick={toggleDrawer('left', false)} onKeyDown={toggleDrawer('left', false)}>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem', lineHeight: 1.25 }}>
                  {title}
                </Typography>
              </MenuItem>
            </Link>
          ))}
        </Collapse>
      </MenuList>
    </MuiBox>
  )

  return (
    <MuiBox>
      <MuiIconButton aria-label="menu" color="primary" onClick={toggleDrawer('left', true)}>
        <MenuRoundedIcon />
      </MuiIconButton>

      <Drawer
        anchor={'left'}
        open={state['left']}
        onClose={toggleDrawer('left', false)}
        PaperProps={{
          sx: {
            backgroundColor: 'background.default',
          },
        }}
      >
        {list()}
      </Drawer>
    </MuiBox>
  )
}

export default DrawerMenu
