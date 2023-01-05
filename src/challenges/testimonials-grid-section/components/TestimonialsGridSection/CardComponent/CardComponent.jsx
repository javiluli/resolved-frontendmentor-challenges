import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const CardComponent = ({ avatar, name, bgColor, titile, bodyText, colorText }) => {
  return (
    <Card
      sx={{
        p: 2,
        height: 'inherit',
        bgcolor: bgColor,
        borderRadius: 3,
        '&:hover': {
          boxShadow: '5px 5px 10px 0px rgba(17, 12, 46, 0.3)',
        },
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ mr: 1 }} aria-label="recipe">
            <CardMedia component="img" image={avatar} alt={name} />
          </Avatar>
        }
        title={name}
        subheader={
          <Typography variant="body2" component="span" color={colorText}>
            Verified Graduate
          </Typography>
        }
        sx={{ px: 2, py: 1, color: colorText }}
      />
      <CardContent sx={{ p: 2 }}>
        <Stack spacing={1}>
          <Typography variant="h5" component="h1" color={colorText} sx={{ lineHeight: '1.75rem' }}>
            {titile}
          </Typography>

          <Typography variant="body1" color={colorText} sx={{ opacity: 0.6 }}>
            {bodyText}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default CardComponent
