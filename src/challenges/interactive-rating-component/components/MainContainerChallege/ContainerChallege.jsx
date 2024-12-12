import MuiStack from '@mui/material/Stack'

const ContainerChallege = ({ children }) => {
  return (
    <MuiStack
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: '100vh',
        backgroundColor: 'background.default',
      }}
    >
      {children}
    </MuiStack>
  )
}

export default ContainerChallege
