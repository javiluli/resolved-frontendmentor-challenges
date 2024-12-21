import { Box, Button, Container, Typography } from '@mui/material'
import React, { ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  tieneError: boolean
  mensajeError: string
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { tieneError: false, mensajeError: '' }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { tieneError: true, mensajeError: error.message }
  }

  componentDidCatch(error: Error) {
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
