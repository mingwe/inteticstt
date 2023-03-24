import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export const Product = ({data}) => {
  // const title = 'Sneakers'
  // const description = 'Made of resin and glue'
  // const image = '/static/images/cards/contemplative-reptile.jpg'
  // const color = 'Black'
  // const price = '$100'
  // const rating = '4.5'
  // console.log('data', data)
  const {title, description, image, color, price, rating} = data
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="description" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p><b>Color: </b> {color}</p>
          <p><b>Price: </b> ${price}</p>
          <p><b>Rating: </b> {rating}</p>
        </Typography>
      </CardContent>
    </Card>
  )
}