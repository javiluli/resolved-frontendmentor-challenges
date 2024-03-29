# Estructura de carpetas de un challenge

```bash
/
│   index.jsx
│   README.md
│
├───assets
│   ├───css
│   │       fonts.css
│   │
│   ├───design
│   │       desktop-preview.jpg
│   │
│   └───images
│
├───components
│   │   index.js
│   │
│   └───[ComponentName]
│           index.js
│           [ComponentName].jsx
│
├───layout
│       challege-container.jsx
│       index.js
│
└───themes
    │   index.js
    │
    └───theme
        │   index.js
        │
        ├───base
        │
        ├───components
        │
        └───functions
```

> [!NOTE]
> Los nombre entre llaves `[]` son nombres guis, estos cambian seguna sea necesarios en el desarrollo.

## Fichero index.jsx

Contiene los componentes principales junto a otros elementos como estilos CSS, theme, componente de envoltura principal con `ThemeProvider` y el componente principal de un **Challenge**.

Fichero principal que contiene:

- Tipografias en un fichero `fonts.css`
- _ThemeProvider_ para incluir el tema customizado con colores, tamaños, etc, de **Material-UI**
- Tema customizado de **Material-UI** en el fichero `theme.js`
- LLamada al componente encapsulado del **Challenge** completado

> Los textos entre corchetes "[]" son texto de guia, estos se deben cambiar para las referencias correctas

Estructura del `index.jsx`.

```jsx
import { ThemeProvider } from '@mui/material'
import MuiStack from '@mui/material/Stack'

import './assets/css/fonts.css'
import { [ComponentName] } from './components'
import theme from './themes/theme'

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <MuiStack
        justifyContent="center"
        alignItems="center"
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.default',
        }}
      >
        [<ComponentName />]
      </MuiStack>
    </ThemeProvider>
  )
}

export default Index

```

## Fichero README.md

Contiene el título del challenge completado y una imagen principal como previsual.

## Carpeta components

Esta carpeta contiene 2 elementos principales.

1. Una carpeta principal con el nombre del **Challenge**. Esta carpeta a su vez contiene.

   - Un fichero, con el mismo nombre de la carpeta que lo contiene, con el código del **Challenge**.
   - Un fichero `index.jsx` con el siguiente código, el cual exporta de forma nombrada el componente con el `export default`, el fichero con código del **Challenge**.

   ```jsx
   export { default as [ComponentName] } from './[ComponentName]'
   ```

   > Tambien puede contener otras carpetas con otros componentes, funciones, etc.

2. Un fichero `index.jsx` con el siguiente código, el cual exporta la carpeta del **Challenge**.

   ```jsx
   export * from './[ComponentName]'
   ```

---

## Carpeta assets

Contiene carpetas y ficheros para el desarrollo de componentes

### Carpeta css

Contiene fichero `fonts.css` que implementa el tipo de fuente/tipografías desde [Google Fonts](https://fonts.google.com/)

### Subcarpeta images

Contiene ficheros `.png`, `.jpg` y `.svg` para usar en el **Challenge**. Para los iconos se utilizará la librería que proporciona [MUI](https://mui.com/material-ui/material-icons/).

---

## Subcarpeta design

Contiene las imágenes del **Challenge** con los diseños para los distintos tamaños "responsives".

La imagen llamada `desktop-preview.jpg` será la utilizada en los `README.md` del mismo directorio.

```md
# Frontend Mentor - [ChallengeName]

![Design preview for...](./design/desktop-preview.jpg)
```

---

## Carpeta themes

Contiene un fichero `theme.jsx` cambiando el tema predefinido de [MUI](<[https://](https://mui.com/material-ui/customization/default-theme/)>), como los colores principales, fuentes, estilos de componentes.

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

1. Modelo de caja

   - display
   - box-sizing
   - width
   - height
   - margin
   - padding
   - border
   - border-radius

2. Tipografía

   - font-family
   - font-size
   - font-weight
   - font-style
   - line-height
   - text-align
   - text-transform
   - letter-spacing
   - text-decoration

3. Color y fondo

   - color
   - background-color
   - background-image
   - background-position
   - background-size
   - background-repeat
   - border-color
   - border-style

4. Efectos
   - box-shadow
   - text-shadow
   - transition
   - transform
   - scroll-behavior
