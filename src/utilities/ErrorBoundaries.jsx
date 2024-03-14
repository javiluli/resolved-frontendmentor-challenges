/* eslint-disable react/prop-types */
import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tieneError: false, mensajeError: '' }
  }

  static getDerivedStateFromError(error) {
    // Método 1
    return { tieneError: true, mensajeError: error.message }
  }

  componentDidCatch(error) {
    // Método 2
    // Ambos sirven por igual
    console.log('Component did catch:', error.message)
  }

  render() {
    if (this.state.tieneError) {
      return (
        <Container>
          <Box>
            <Typography variant="h3" color="text.primary" gutterBottom>
              Hubo un error:
            </Typography>
            <Typography color="text.primary" gutterBottom>
              {this.state.mensajeError}
            </Typography>

            <Button variant="contained" sx={{ my: 2, bgcolor: '#467dff' }} onClick={() => (window.location.href = '/')}>
              Volver al inicio
            </Button>
          </Box>
        </Container>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
