import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import {
  Button,
  Container,
  FormGroup,
  IconButton,
  InputBase,
  Stack,
  SvgIcon,
  ThemeProvider,
  Typography,
  createSvgIcon,
} from '@mui/material'
import MuiBox from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import MuiStack from '@mui/material/Stack'
import { useState } from 'react'
import bgDesktopLight from './assets/images/bg-desktop-light.jpg'
import TodoItem from './components/TodoItem/TodoItem'
import { MockTodos } from './mocks/todos'
import { theme } from './themes'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'

const label = { inputProps: { 'aria-label': 'Checkbox create a new todo' } }

function App() {
  const [todos, setTodos] = useState([...MockTodos])
  const [todosFilter, setTodosFilter] = useState([...MockTodos])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTodo = {
      id: e.timeStamp,
      todoText: e.target['new-todo-title'].value,
      isCompleted: e.target['new-todo-idCompleted'].checked,
    }

    setTodos([...todos, newTodo])
    setTodosFilter([...todos, newTodo])

    e.target['new-todo-title'].value = ''
  }

  const handleChangeCompleted = (id) => {
    const todo = [...todos].find((element) => element.id === id)

    if (todo) {
      todo.isCompleted = !todo.isCompleted
      setTodos([...todos])
      setTodosFilter([...todosFilter])
    }
  }

  const getAllTodos = () => {
    setTodosFilter([...todos])
  }

  const getActiveTodos = () => {
    const result = todos.filter((todo) => !todo.isCompleted)
    setTodosFilter([...result])
  }

  const getCompletedTodos = () => {
    const result = todos.filter((todo) => todo.isCompleted)
    setTodosFilter([...result])
  }

  const handleClearCompleted = () => {
    const result = todos.filter((todo) => !todo.isCompleted)
    setTodos([...result])
    setTodosFilter([...result])
  }

  const handleDragEnd = (event) => {
    const { active, over } = event

    setTodosFilter((todosFilter) => {
      const oldIndex = todosFilter.findIndex((todo) => todo.id === active.id)
      const newIndex = todosFilter.findIndex((todo) => todo.id === over.id)

      return arrayMove(todosFilter, oldIndex, newIndex)
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <MuiStack sx={{ paddingY: 9, minHeight: '100vh', bgcolor: 'background.default' }}>
        <MuiBox
          component="img"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1,
          }}
          alt="Icon sun"
          src={bgDesktopLight}
        />

        <Container sx={{ width: '100%', zIndex: 10 }}>
          <Stack sx={{ maxWidth: 600, margin: '0 auto' }} spacing={6}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="h3" component="h1" sx={{ fontWeight: 700, letterSpacing: 12 }}>
                TODO
              </Typography>

              <IconButton aria-label="sun">
                <MoonIcon />
              </IconButton>
            </Stack>
            <Stack spacing={4}>
              <Stack sx={{ paddingX: 2, paddingY: 1, bgcolor: 'background.paper', borderRadius: 1 }}>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                  <FormGroup>
                    <MuiBox>
                      <Checkbox {...label} name="new-todo-idCompleted" checkedIcon={<IconCheck />} />
                      <InputBase
                        name="new-todo-title"
                        placeholder="Create a new todo..."
                        inputProps={{ 'aria-label': 'create a new todo' }}
                      />
                    </MuiBox>
                  </FormGroup>
                </form>
              </Stack>

              <Stack sx={{ bgcolor: 'background.paper', borderRadius: 1 }}>
                {todosFilter.length > 0 ? (
                  <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd} modifiers={[restrictToVerticalAxis]}>
                    <FormGroup>
                      <SortableContext items={todosFilter} strategy={verticalListSortingStrategy}>
                        {todosFilter.map((todo) => (
                          <TodoItem key={todo.id} Todo={todo} />
                        ))}
                      </SortableContext>
                    </FormGroup>
                  </DndContext>
                ) : (
                  <Stack direction="row" justifyContent="center" alignItems="center" spacing={1} sx={{ py: 3 }}>
                    <InfoOutlinedIcon color="primary" fontSize="large" />
                    <Typography variant="h5" color="primary">
                      There are no pending tasks
                    </Typography>
                  </Stack>
                )}

                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ paddingX: 3, paddingY: 2 }}>
                  <Typography variant="caption">{todos.length} items left</Typography>

                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Button variant="text" size="small" color="primary" onClick={getAllTodos}>
                      All
                    </Button>
                    <Button variant="text" size="small" onClick={getActiveTodos}>
                      Active
                    </Button>
                    <Button variant="text" size="small" onClick={getCompletedTodos}>
                      Completed
                    </Button>
                  </Stack>

                  <Button variant="text" size="small" onClick={handleClearCompleted}>
                    Clear completed
                  </Button>
                </Stack>
              </Stack>
            </Stack>

            <Typography variant="body" align="center">
              Drag and drop to reorder list
            </Typography>
          </Stack>
        </Container>
      </MuiStack>
    </ThemeProvider>
  )
}

export default App

function SunIcon(props) {
  return (
    <SvgIcon {...props}>
      <path
        fill="#FFF"
        fill-rule="evenodd"
        d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
      />
    </SvgIcon>
  )
}

function MoonIcon(props) {
  return (
    <SvgIcon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
        <path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6" />
      </svg>
    </SvgIcon>
  )
}

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
