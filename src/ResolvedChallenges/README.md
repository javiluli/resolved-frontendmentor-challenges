# Estructura de carpetas de cada challenge

```bash
/
│   index.jsx
│   README.md
│   styles.css
│
├───components
├───design
├───images
└───theme
        index.jsx
```

## index.jsx

Contiene los componentes principales junto a otros elementos como estilos CSS, theme, componente de envoltura principal con `ThemeProvider` y el componente principal de un **Challenge**.

Estructura del `index.jsx`.

```jsx
// CSS and MUI theme
import './styles.css'
import theme from './theme'

// Componente final del challenge completado
import ChallengeComponent from './components/...'

// Componente externo al challenge (ver en /src/components/MainChallengeContainer)
import MainChallengeContainer from '@/components/MainChallengeContainer'

const Index = () => {
  return (
    <MainChallengeContainer theme={theme}>
      <ChallengeComponent />
    </MainChallengeContainer>
  )
}

export default Index
```

## README.md

Contiene el título del challenge completado y una imagen principal como previsual.

## styles.css

Contiene fichero `.CSS` que implementa el tipo de fuente/tipografias.

## components

Contiene todos los componentes que forman el **Challenge**, dentro una carpeta con el nombre que haga referencia al **Challenge** y dentro de la misma, un `index.jsx` que hará de componente principal.

## design

Contiene las imágenes del **Challenge** con los diseños para los distintos tamaños responsives.

La imagen llamada `desktop-preview.jpg` será la utilizada en los `README.md` del mismo directorio.

```md
# Frontend Mentor - [Nombre del challenge]

![Design preview for...](./design/desktop-preview.jpg)
```

## images

Contiene ficheros `.png`, `.jpg` y `.svg` para usar en el **Challenge**. Para los iconos se usará la librería que proporciona [MUI](https://mui.com/material-ui/material-icons/).

## theme

Contiene un fichero `index.jsx` cambiando el tema predefinido de [MUI](<[https://](https://mui.com/material-ui/customization/default-theme/)>), como los colores principales, fuentes, estilos de componentes.

```jsx
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    background: {
      paper: '#fff',
      default: '#fff',
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Outfit',
        },
      },
    },
  },
})

export default theme
```
