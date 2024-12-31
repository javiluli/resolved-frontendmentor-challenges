import { useEffect, useState } from 'react'

import MuiBox from '@mui/material/Box'
import MuiButton from '@mui/material/Button'
import MuiPaper from '@mui/material/Paper'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'

import BillSection from './BillSection/BillSection'
import NumberOfPeopleSection from './NumberOfPeopleSection/NumberOfPeopleSection'
import SelectTipSection from './SelectTipSection/SelectTipSection'
import SymmaryTip from './SymmaryTip/SelectTipSection'

const TipCalculatorApp = () => {
  const [bill, setBill] = useState('')
  const [tip, setTip] = useState('')
  const [customTip, setCustomTip] = useState('')
  const [people, setPeople] = useState('')
  const [tipAmount, setTipAmount] = useState('0.00')
  const [total, setTotal] = useState('0.00')

  const handleReset = () => {
    setBill('')
    setTip('')
    setCustomTip('')
    setPeople('')
    setTipAmount('0.00')
    setTotal('0.00')
  }

  useEffect(() => {
    if (tip && people) {
      const tipAmount = (bill * (tip / 100)) / people
      setTipAmount(tipAmount.toFixed(2))

      const total = bill / people + tipAmount
      setTotal(total.toFixed(2))
    }
  }, [bill, tip, people])

  return (
    <MuiBox sx={{ m: { xs: 0, md: 4 } }}>
      <MuiStack justifyContent="center" sx={{ mb: 8 }}>
        <MuiTypography variant="h6" textAlign="center" sx={{ letterSpacing: 8 }}>
          SPLI
        </MuiTypography>
        <MuiTypography variant="h6" textAlign="center" sx={{ letterSpacing: 8 }}>
          TTER
        </MuiTypography>
      </MuiStack>

      <MuiPaper component="form" elevation={1} sx={{ maxWidth: 800, padding: 4, borderRadius: 4 }}>
        <MuiStack direction={{ xs: 'column', md: 'row' }} spacing={4}>
          <MuiStack spacing={3} sx={{ width: '100%' }}>
            <BillSection bill={bill} onSetBill={setBill} />

            <SelectTipSection tip={tip} onSetTip={setTip} customTip={customTip} onSetCustomTip={setCustomTip} />

            <NumberOfPeopleSection people={people} onSetPeople={setPeople} />
          </MuiStack>

          <MuiStack spacing={3} justifyContent="space-between" sx={{ p: 4, width: '100%', bgcolor: 'primary.dark', borderRadius: 3 }}>
            <SymmaryTip tipAmount={tipAmount} total={total} />

            <MuiBox>
              <MuiButton
                type="reset"
                variant="contained"
                fullWidth
                disabled={!bill && !tip && !people}
                sx={{ color: 'primary.dark', bgcolor: 'primary.main' }}
                onClick={handleReset}
              >
                Reset
              </MuiButton>
            </MuiBox>
          </MuiStack>
        </MuiStack>
      </MuiPaper>
    </MuiBox>
  )
}

export default TipCalculatorApp
