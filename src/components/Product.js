import React from 'react'
import { Box, Card, CardActions, CardContent, CardMedia, Rating, Typography } from '@mui/material'

export const Product = ({ data }) => {
  const {title, description, image, category, price, rating} = data
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', maxWidth: 600, height: '100%', borderRadius: '15px' }}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          {title}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {/*{description}*/}
        </Typography>
      </CardContent>
      <CardContent sx={{display: 'flex', flexDirection: 'column', marginTop: 'auto'}}>
        <Typography
          variant={"h5"}
          color="text.primary"
        >
          ${price}
        </Typography>
        <Rating
          value={rating?.rate}
          readOnly
          sx={{color: '#555'}}
        />
        <Typography variant="body2" color="text.primary" mt={2}>
          Category: <Typography component="span" color={"text.secondary"}>{category}</Typography>
        </Typography>
        {/*<Typography variant="body2" color="text.secondary">*/}
        {/*  <b>Rating: </b> {rating?.rate}*/}
        {/*</Typography>*/}
      </CardContent>
      {/*<CardActions sx={{marginTop: 'auto'}}>*/}
      {/*  card actions*/}
      {/*</CardActions>*/}
    </Card>
  )
}