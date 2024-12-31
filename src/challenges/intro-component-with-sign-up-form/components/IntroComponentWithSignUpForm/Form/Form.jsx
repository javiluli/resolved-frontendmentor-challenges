import { zodResolver } from '@hookform/resolvers/zod'
import { object, string } from 'zod'

import { useForm } from 'react-hook-form'

import MuiErrorIcon from '@mui/icons-material/ErrorRounded'
import MuiBox from '@mui/material/Box'
import MuiButton from '@mui/material/Button'
import MuiInputAdornment from '@mui/material/InputAdornment'
import MuiPaper from '@mui/material/Paper'
import MuiStack from '@mui/material/Stack'
import MuiTextField from '@mui/material/TextField'
import MuiTypography from '@mui/material/Typography'

const registerSchema = object({
  'first-name': string().min(1, 'First name cannot be empty'),
  'last-name': string().min(1, 'Last name cannot be empty'),
  'email-address': string().min(1, 'Last name cannot be empty').email('Looks like this in not an email'),
  password: string().min(1, 'Password cannot be empty'),
})

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(registerSchema),
  })

  const onSubmitHandler = (values) => {}

  return (
    <MuiPaper
      elevation={1}
      sx={{
        width: '100%',
        padding: '1.5em',
        backgroundColor: 'common.white',
        borderRadius: '1em',
      }}
    >
      <MuiStack spacing={2}>
        <MuiTextField
          required
          placeholder={!errors['first-name'] ? 'First name' : ''}
          error={!!errors['first-name']}
          helperText={errors['first-name'] ? errors['first-name'].message : ''}
          InputProps={{
            style: { color: errors['first-name'] ? 'hsl(0, 100%, 74%)' : '' },
            endAdornment: (
              <MuiInputAdornment position="end">{errors['first-name'] && <MuiErrorIcon sx={{ color: 'error.main' }} />}</MuiInputAdornment>
            ),
          }}
          sx={{ color: 'error.main' }}
          {...register('first-name')}
          fullWidth
        />

        <MuiTextField
          required
          placeholder={!errors['last-name'] ? 'Last name' : ''}
          error={!!errors['last-name']}
          helperText={errors['last-name'] ? errors['last-name'].message : ''}
          InputProps={{
            style: { color: errors['last-name'] ? 'hsl(0, 100%, 74%)' : '' },
            endAdornment: (
              <MuiInputAdornment position="end">{errors['last-name'] && <MuiErrorIcon sx={{ color: 'error.main' }} />}</MuiInputAdornment>
            ),
          }}
          sx={{ color: 'error.main' }}
          {...register('last-name')}
          fullWidth
        />

        <MuiTextField
          required
          placeholder={!errors['email-address'] ? 'Email address' : ''}
          error={!!errors['email-address']}
          helperText={errors['email-address'] ? errors['email-address'].message : ''}
          InputProps={{
            style: { color: errors['email-address'] ? 'hsl(0, 100%, 74%)' : '' },
            endAdornment: (
              <MuiInputAdornment position="end">
                {errors['email-address'] && <MuiErrorIcon sx={{ color: 'error.main' }} />}
              </MuiInputAdornment>
            ),
          }}
          sx={{ color: 'error.main' }}
          {...register('email-address')}
          fullWidth
        />

        <MuiTextField
          required
          placeholder={!errors['password'] ? 'Password' : ''}
          error={!!errors['password']}
          helperText={errors['password'] ? errors['password'].message : ''}
          InputProps={{
            style: { color: errors['password'] ? 'hsl(0, 100%, 74%)' : '' },
            endAdornment: (
              <MuiInputAdornment position="end">{errors['password'] && <MuiErrorIcon sx={{ color: 'error.main' }} />}</MuiInputAdornment>
            ),
          }}
          sx={{ color: 'error.main' }}
          {...register('password')}
          fullWidth
        />

        <MuiButton variant="contained" sx={{ padding: '0.75em', color: 'text.primary' }} onClick={handleSubmit(onSubmitHandler)}>
          Claim your free trial
        </MuiButton>

        <MuiBox sx={{ px: 2 }}>
          <MuiTypography color="hsl(246, 25%, 77%)" align="center" sx={{ fontSize: '0.65rem', fontWeight: 500 }}>
            By clicking the button, you are agreeing to our
            <MuiTypography variant="inherit" color="background.default" component="span" sx={{ marginLeft: '0.25em', fontWeight: 600 }}>
              Terms and Services
            </MuiTypography>
          </MuiTypography>
        </MuiBox>
      </MuiStack>
    </MuiPaper>
  )
}

export default Form
