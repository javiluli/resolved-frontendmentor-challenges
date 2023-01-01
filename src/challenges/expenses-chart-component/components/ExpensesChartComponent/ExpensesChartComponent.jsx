import MuiStack from '@mui/material/Stack'

import { Body } from './Body'
import { Header } from './Header'

const ExpensesChartComponent = () => {
  return (
    <MuiStack spacing={2} sx={{ width: { xs: 360, md: 400 }, mx: 2, my: 4 }}>
      <Header />
      <Body />
    </MuiStack>
  )
}

export default ExpensesChartComponent
