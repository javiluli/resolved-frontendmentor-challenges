import { alpha } from '@mui/material'
import MuiBox from '@mui/material/Box'
import MuiStack from '@mui/material/Stack'
import MuiTooltip from '@mui/material/Tooltip'
import MuiTypography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import PropTypes from 'prop-types'

const Bar = ({ weekday, expen, maxExpense }) => {
  const theme = useTheme()

  const ColorCondition = {
    NORMAL: maxExpense !== expen ? 'primary.main' : 'secondary.main',
    ALPHA: maxExpense !== expen ? alpha(theme.palette.primary.main, 0.65) : alpha(theme.palette.secondary.main, 0.65),
  }

  return (
    <MuiStack justifyContent="flex-end" sx={{ py: 1, backgroundColor: 'background.main' }}>
      <MuiStack spacing={1} justifyContent="center" alignItems="center" sx={{ position: 'relative' }}>
        <MuiTooltip title={`$${expen}`} placement="top">
          <MuiBox
            sx={{
              width: { xs: 35, md: 40 },
              height: `${expen}px`,
              minHeight: 5,
              maxHeight: 100,
              backgroundColor: ColorCondition.NORMAL,
              borderRadius: 1,
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: ColorCondition.ALPHA,
              },
            }}
          />
        </MuiTooltip>

        <MuiTypography variant="caption" color="custom.brown.main" sx={{ fontWeight: 700 }} gutterBottom>
          {weekday}
        </MuiTypography>
      </MuiStack>
    </MuiStack>
  )
}

export default Bar

Bar.propTypes = {
  /**
   * Distancia del elemento respecto al 'top' (valor medido en px)
   */
  weekday: PropTypes.string,
  /**
   * Cantidad del gasto (u otro numerico)
   */
  expen: PropTypes.string,
  /**
   * Cantidad mas alta
   */
  maxExpense: PropTypes.string,
}
