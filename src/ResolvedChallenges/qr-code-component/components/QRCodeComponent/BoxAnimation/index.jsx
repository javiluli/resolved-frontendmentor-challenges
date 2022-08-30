import { Box as MuiBox } from '@mui/material'
import PropTypes from 'prop-types'
import { keyframes } from '@mui/material'

const animation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
`

const BoxAnimation = ({ top, left, width, height, time }) => {
  return (
    <MuiBox
      sx={{
        position: 'absolute',
        top: top,
        left: left,
        width: width,
        height: height,
        backgroundColor: 'primary.light',
        borderRadius: '100%',
        animation: `${animation} ${time}s ease-in infinite`,
      }}
    />
  )
}

export default BoxAnimation

BoxAnimation.propTypes = {
  /**
   * Distancia del elemento respecto al 'top' (valor medido en px)
   */
  top: PropTypes.number,
  /**
   * Distancia del elemento respecto al 'left' (valor medido en px)
   */
  left: PropTypes.number,
  /**
   * Tamaño de ancho del elemento (valor medido en px)
   */
  width: PropTypes.number,
  /**
   * Tamaño de alto del elemento (valor medido en px)
   */
  height: PropTypes.number,
  /**
   * Tiempo de la animacion (valor medido en segundos)
   */
  time: PropTypes.number.isRequired,
}

BoxAnimation.defaultProps = {
  top: 0,
  left: 0,
  width: 100,
  height: 100,
  time: 1,
}
