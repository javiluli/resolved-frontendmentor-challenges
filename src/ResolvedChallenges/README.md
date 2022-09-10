# Estructura de carpetas de cada challenge

```bash
/
│   index.jsx
│   README.md
│   styles.css
│
├───components
│   │   index.jsx
│   │
│   └───ChallenName
│           index.jsx
│           ChallenName.jsx
│
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

// Componente nombrado del challenge completado
import { ChallengeComponent } from './components'

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

Contiene fichero `.CSS` que implementa el tipo de fuente/tipografías desde [Google Fonts](https://fonts.google.com/)

## components

Esta carpeta contiene 2 elementos principales.

1. Una carpeta principal con el nombre del **Challenge**. Esta carpeta a su vez contiene.

   - Un fichero, con el mismo nombre de la carpeta que lo contiene, con el código del **Challenge**.
   - Un fichero `index.jsx` con el siguiente código, el cual exporta de forma nombrada el componente con el `export default`, el fichero con código del **Challenge**.

   ```jsx
   export { default as ChallengeName } from './ChallengeName'
   ```

   > Tambien puede contener otras carpetas con otros componentes, funciones, etc.

2. Un fichero `index.jsx` con el siguiente código, el cual exporta la carpeta del **Challenge**.

   ```jsx
   export * from './ChallengeName'
   ```

## design

Contiene las imágenes del **Challenge** con los diseños para los distintos tamaños "responsives".

La imagen llamada `desktop-preview.jpg` será la utilizada en los `README.md` del mismo directorio.

```md
# Frontend Mentor - [Nombre del challenge]

![Design preview for...](./design/desktop-preview.jpg)
```

## images

Contiene ficheros `.png`, `.jpg` y `.svg` para usar en el **Challenge**. Para los iconos se utilizará la librería que proporciona [MUI](https://mui.com/material-ui/material-icons/).

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
          fontFamily: 'Roboto',
        },
      },
    },
  },
})

export default theme
```
