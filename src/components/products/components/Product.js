import React from 'react'
import { Card, CardContent, CardMedia, Rating, Typography } from '@mui/material'

export const Product = ({ data }) => {
  const {title, image, color, price, rating} = data
  const imgUrl = image || '/sneakers-default.png'

  const cardStyles = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 600,
    height: '100%',
    borderRadius: '15px',
    // transition: '0.3s',
    // opacity: '0',
  }

  return (
    <Card sx={{ ...cardStyles }}>
      <CardMedia
        component="img"
        alt={title}
        height="240"
        image={imgUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div" data-testid={'title'}>
          {title}
        </Typography>
        {/*<Typography variant="caption" color="text.secondary">*/}
          {/*{description}*/}
        {/*</Typography>*/}
      </CardContent>
      <CardContent sx={{display: 'flex', flexDirection: 'column', marginTop: 'auto'}}>
        <Typography
          variant={"h5"}
          color="text.primary"
          data-testid={'price'}
        >
          ${price}
        </Typography>
        <Rating
          value={rating}
          readOnly
          sx={{color: '#555'}}
        />
        <Typography variant="body2" color="text.primary" mt={2} >
          Color: <Typography component="span" color={"text.secondary"} sx={{textTransform: 'capitalize'}} data-testid={'color'}>{color}</Typography>
        </Typography>
      </CardContent>
    </Card>
  )
}