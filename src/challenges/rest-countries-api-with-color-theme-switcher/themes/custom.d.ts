import '@mui/material/styles'

declare module '@mui/material/styles' {
  // Sobrescribe los puntos de interrupción predeterminados
  interface BreakpointOverrides {
    xs: false
    sm: false
    md: false
    lg: false
    xl: false
    mobile: true
    desktop: true
  }

  // Define variantes personalizadas de tipografía
  interface TypographyVariants {
    size: {
      md: string
    }
    weight: {
      light: number
      medium: number
      bold: number
    }
  }

  // Define opciones opcionales para las variantes de tipografía
  interface TypographyVariantsOptions {
    size?: {
      md?: string
    }
    weight?: {
      light?: number
      medium?: number
      bold?: number
    }
  }
}

declare module '@mui/material/Typography' {
  // Sobrescribe las variantes de propiedades de tipografía para incluir las variantes personalizadas
  interface TypographyPropsVariantOverrides {
    size: true
    weight: true
  }
}
