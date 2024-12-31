import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import DragIndicatorSharpIcon from '@mui/icons-material/DragIndicatorSharp'
import { Box, FormControlLabel, IconButton, Paper, Stack, SvgIcon, Typography, createSvgIcon } from '@mui/material'

import useHover from '../../hooks/useHover'
import CCCheckboxRoot from '../custom/CCCheckbox'

function TodoItem({ Todo }) {
  const [hoverRef, isHovered] = useHover()

  const { id, todoText, isCompleted } = Todo

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: id,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <Paper style={style} ref={setNodeRef} {...attributes} sx={{ cursor: 'pointer' }}>
      <Box ref={hoverRef} {...listeners}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ py: 1, paddingRight: 1 }}>
          <FormControlLabel
            control={
              <CCCheckboxRoot
                key={id}
                defaultChecked={isCompleted}
                checkedIcon={<IconCheck />}
                color="primary"
                onChange={() => handleChangeCompleted(id)}
              />
            }
            label={
              <Typography
                component={!isCompleted ? 'span' : 'del'}
                sx={{ color: !isCompleted ? 'text.primary' : 'text.disabled', lineHeight: 0 }}
              >
                {todoText}
              </Typography>
            }
            inputProps={{
              'aria-label': 'Checkbox A',
            }}
            sx={{ paddingX: 2, paddingY: 1, margin: 0 }}
          />

          <IconButton aria-label="delete">
            <CrossIcon sx={{ display: isHovered ? 'block' : 'none' }} />
          </IconButton>
        </Stack>
      </Box>
    </Paper>
  )
}

export default TodoItem

// or with custom SVG
const IconCheck = createSvgIcon(
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9">
    <path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6" />
  </svg>,
  'Check',
)

function CrossIcon(props) {
  return (
    <SvgIcon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
        <path
          fill="#494C6B"
          fill-rule="evenodd"
          d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
        />
      </svg>
    </SvgIcon>
  )
}
