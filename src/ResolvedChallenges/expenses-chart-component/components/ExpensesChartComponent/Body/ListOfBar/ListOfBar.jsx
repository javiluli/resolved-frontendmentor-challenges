import MuiStack from '@mui/material/Stack'

import { Bar } from './Bar'

const rngExpen = () => (Math.random() * 100 + 1 + Math.random()).toFixed(2)

const Weekdays = [
  {
    day: 'mon',
    expen: rngExpen(),
  },
  {
    day: 'tue',
    expen: rngExpen(),
  },
  {
    day: 'wed',
    expen: rngExpen(),
  },
  {
    day: 'thu',
    expen: rngExpen(),
  },
  {
    day: 'fri',
    expen: rngExpen(),
  },
  {
    day: 'sat',
    expen: rngExpen(),
  },
  {
    day: 'sun',
    expen: rngExpen(),
  },
]

const ListOfBar = () => {
  const maxExpen = Math.max(...Weekdays.map((expen) => expen.expen)).toString()

  return (
    <MuiStack direction="row" spacing={0} justifyContent="space-between" sx={{ height: 170 }}>
      {Weekdays.map(({ day, expen }) => (
        <Bar key={day} weekday={day} expen={expen} maxExpense={maxExpen} />
      ))}
    </MuiStack>
  )
}

export default ListOfBar
