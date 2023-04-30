import MuiBox from '@mui/material/Box'
import MuiContainer from '@mui/material/Container'
import MuiDivider from '@mui/material/Divider'
import MuiGrid from '@mui/material/Grid'
import MuiIconButton from '@mui/material/IconButton'
import MuiInputLabel from '@mui/material/InputLabel'
import MuiPaper from '@mui/material/Paper'
import MuiStack from '@mui/material/Stack'
import SvgIcon from '@mui/material/SvgIcon'
import MuiTextField from '@mui/material/TextField'
import MuiTypography from '@mui/material/Typography'
import React, { useState } from 'react'

import { LAST_MONTH_NUMBER_FROM_YEAR, notBlankRegex, numberWithBlankRegex } from '../../constants'
import colors from '../../themes/theme/base/colors'
import { addZeros, isValidDay, isWithinValidDateRange, validateDate } from '../../utilities'

const { error } = colors

const ERROR_MESSAGE = {
  FIELD_IS_REQUIRED: 'This field is required',
  MOST_BE_PAST: 'Must be in the past',
  VALID_MONTH: 'Must be a valid month',
  VALID_DAY: 'Must be a valid day',
}

function ArrowIcon(props) {
  return (
    <SvgIcon viewBox="0 0 46 44" {...props}>
      <g fill="none" stroke="#FFF" strokeWidth="3">
        <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
      </g>
    </SvgIcon>
  )
}

const INITIAL_STATE_DATE = {
  day: '',
  month: '',
  year: '',
}

const INITIAL_STATE_CALCULATED_DATE = {
  days: '- -',
  months: '- -',
  years: '- -',
}

const AgeCalculatorApp = () => {
  const [date, setDate] = useState(INITIAL_STATE_DATE)
  const [dateNow, setDateNow] = useState(new Date())
  const [calculatedDate, setCalculatedDate] = useState(INITIAL_STATE_CALCULATED_DATE)

  // Errores
  const [errorDate, setErrorDate] = useState(false)
  const [errorDay, setErrorDay] = useState(null)
  const [errorMonth, setErrorMonth] = useState(null)
  const [errorYear, setErrorYear] = useState(null)

  const handleChange = (e) => {
    if (numberWithBlankRegex.test(e.target.value)) {
      setDate({
        ...date,
        [e.target.name]: e.target.value.trim(),
      })
    }
  }

  const restartErrors = () => {
    setErrorDate(false)
    setErrorYear(null)
    setErrorMonth(null)
    setErrorDay(null)
  }

  const validateDayFromDate = () => {
    const { day, month, year } = date
    const userDateEntered = `${addZeros(year, 4)}-${addZeros(month, 2)}-${addZeros(day, 2)}`

    // day number required
    if (notBlankRegex.test(day)) {
      setErrorDay(ERROR_MESSAGE.FIELD_IS_REQUIRED)
      return false
    }

    // valid day number
    if (!isValidDay(day) || (isValidDay(day) && isWithinValidDateRange(month, year, dateNow) && !validateDate(userDateEntered))) {
      setErrorDay(ERROR_MESSAGE.VALID_DAY)
      return false
    }

    return true
  }

  const validateMonthFromDate = () => {
    const { month } = date

    // month required
    if (notBlankRegex.test(month)) {
      setErrorMonth(ERROR_MESSAGE.FIELD_IS_REQUIRED)
      return false
    }
    // valid month number (1-12)
    if ((month < 1 || month > LAST_MONTH_NUMBER_FROM_YEAR) && !notBlankRegex.test(month)) {
      setErrorMonth(ERROR_MESSAGE.VALID_MONTH)
      return false
    }
    return true
  }

  const validateYearFromDate = () => {
    const { year } = date

    // year required
    if (notBlankRegex.test(year)) {
      setErrorYear(ERROR_MESSAGE.FIELD_IS_REQUIRED)
      return false
    }
    // year validate
    if (year > dateNow.getFullYear()) {
      setErrorYear(ERROR_MESSAGE.MOST_BE_PAST)
      return false
    }
    return true
  }

  const validateDateEntered = (year, month, day) => {
    const validDay = validateDayFromDate()
    const validMonth = validateMonthFromDate()
    const validYear = validateYearFromDate()

    if (notBlankRegex.test(year) || notBlankRegex.test(month) || notBlankRegex.test(day)) {
      setErrorDate(true)
    }

    return validDay && validMonth && validYear
  }

  const handleCalculator = () => {
    restartErrors()
    const { year, month, day } = date

    if (validateDateEntered(year, month, day)) {
      if (year && month && day) {
        const dateFromUser = new Date(`${addZeros(year, 4)}-${month}-${day}`)

        const msPorDia = 86400000 // Número de milisegundos en un día
        const diferenciaMs = Math.abs(dateNow - dateFromUser) // Diferencia en milisegundos
        const days = Math.floor(diferenciaMs / msPorDia) // Diferencia en días

        // Calcular la diferencia en meses y años
        const years = Math.floor(days / 365)
        const months = Math.floor((days % 365) / 30)
        const diasRestantes = days - years * 365 - months * 30

        setCalculatedDate({
          days: diasRestantes,
          months: months,
          years: years,
        })
      }
    } else {
      setCalculatedDate(INITIAL_STATE_CALCULATED_DATE)
    }
  }

  return (
    <MuiContainer sx={{ my: 4, minWidth: 375, maxWidth: { mobile: 'tablet', desktop: 'desktop' } }}>
      <MuiStack direction="row" justifyContent="center">
        <MuiPaper elevation={1} sx={{ width: '100%', maxWidth: 600, p: 4, borderRadius: 5, borderBottomRightRadius: 120 }}>
          <MuiStack spacing={3}>
            {/* INIT INPUTS */}
            <MuiBox sx={{ flexGrow: 1 }}>
              <MuiGrid container spacing={2}>
                <MuiGrid item mobile={4} desktop={3}>
                  <MuiBox>
                    <MuiInputLabel htmlFor="day" sx={{ color: errorDay || errorDate ? error.main : '' }}>
                      DAY
                    </MuiInputLabel>
                    <MuiTextField
                      id="day"
                      name="day"
                      value={date.day}
                      placeholder="DD"
                      onChange={handleChange}
                      helperText={errorDay}
                      error={!!errorDay || !!errorDate}
                    />
                  </MuiBox>
                </MuiGrid>

                <MuiGrid item mobile={4} desktop={3}>
                  <MuiBox>
                    <MuiInputLabel htmlFor="month" sx={{ color: errorMonth || errorDate ? error.main : '' }}>
                      MONTH
                    </MuiInputLabel>
                    <MuiTextField
                      id="month"
                      name="month"
                      placeholder="MM"
                      value={date.month}
                      onChange={handleChange}
                      helperText={errorMonth}
                      error={!!errorMonth || !!errorDate}
                    />
                  </MuiBox>
                </MuiGrid>

                <MuiGrid item mobile={4} desktop={3}>
                  <MuiBox>
                    <MuiInputLabel htmlFor="year" sx={{ color: errorYear || errorDate ? error.main : '' }}>
                      YEAR
                    </MuiInputLabel>
                    <MuiTextField
                      id="year"
                      name="year"
                      placeholder="YYYY"
                      value={date.year}
                      onChange={handleChange}
                      helperText={errorYear}
                      error={!!errorYear || !!errorDate}
                    />
                  </MuiBox>
                </MuiGrid>
              </MuiGrid>
            </MuiBox>
            {/* FIN INPUTS */}

            {/* INIT DVIDER AND ICON BUTTON */}
            <MuiStack direction="row" justifyContent="center" alignItems="center" sx={{ position: 'relative' }}>
              <MuiDivider
                sx={{
                  position: { mobile: 'absolute', desktop: 'relative' },
                  width: { mobile: '100%', desktop: 'inherit' },
                  flexGrow: 1,
                }}
              />
              <MuiIconButton id="button" size="large" onClick={handleCalculator} sx={{ bgcolor: 'primary.main', p: 2 }}>
                <ArrowIcon />
              </MuiIconButton>
            </MuiStack>
            {/* FIN DVIDER AND ICON BUTTON */}

            {/* INIT YYYY/MM/DD */}
            <MuiBox sx={{ flexGrow: 1 }}>
              <MuiBox>
                <MuiTypography variant="h2" component="span" color="primary">
                  {`${calculatedDate.years} `}
                </MuiTypography>
                <MuiTypography variant="h2" component="span">
                  years
                </MuiTypography>
              </MuiBox>
              <MuiBox>
                <MuiTypography variant="h2" component="span" color="primary">
                  {`${calculatedDate.months} `}
                </MuiTypography>
                <MuiTypography variant="h2" component="span">
                  months
                </MuiTypography>
              </MuiBox>
              <MuiBox>
                <MuiTypography variant="h2" component="span" color="primary">
                  {`${calculatedDate.days} `}
                </MuiTypography>
                <MuiTypography variant="h2" component="span">
                  days
                </MuiTypography>
              </MuiBox>
            </MuiBox>
            {/* FIN YYYY/MM/DD */}
          </MuiStack>
        </MuiPaper>
      </MuiStack>
    </MuiContainer>
  )
}

export default AgeCalculatorApp
