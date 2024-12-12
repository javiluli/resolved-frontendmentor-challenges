# Estructura de carpetas de un challenge

```bash
/
│   index.jsx
│   App.jsx
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
│       ChallegeContainer.jsx
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
export { default } from './App'
```

Estructura del `App.jsx`.

```jsx
import '@@challenges/qr-code-component/assets/css/fonts.css'

import { Card } from '@@challenges/qr-code-component/components'
import { ChallegeContainer } from '@@challenges/qr-code-component/layouts'
import { ThemeProvider } from '@mui/material'
import { theme } from '@@challenges/qr-code-component/themes'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChallegeContainer>
        <Card />
      </ChallegeContainer>
    </ThemeProvider>
  )
}

export default App
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

| 1. Modelo de caja      | 2. Tipografía            | 3. Color y fondo             | 4. Efectos               |
| ---------------------- | ------------------------ | ---------------------------- | ------------------------ |
| **1.1.** display       | **2.1.** font-family     | **3.1.** color               | **4.1.** box-shadow      |
| **1.2.** box-sizing    | **2.2.** font-size       | **3.2.** background-color    | **4.2.** text-shadow     |
| **1.3.** width         | **2.3.** font-weight     | **3.3.** background-image    | **4.3.** transition      |
| **1.4.** height        | **2.4.** font-style      | **3.4.** background-position | **4.4.** transform       |
| **1.5.** margin        | **2.5.** line-height     | **3.5.** background-size     | **4.5.** scroll-behavior |
| **1.6.** padding       | **2.6.** text-align      | **3.6.** background-repeat   |                          |
| **1.7.** border        | **2.7.** text-transform  | **3.7.** border-color        |                          |
| **1.8.** border-radius | **2.8.** letter-spacing  | **3.8.** border-style        |                          |
|                        | **2.9.** text-decoration |                              |                          |
