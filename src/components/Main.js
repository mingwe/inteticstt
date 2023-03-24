import React from 'react'
import { Product } from './Product'
import { products } from '../mock'
import { Grid, Paper } from '@mui/material';

export const Main = () => {
  return (
    <div>
      main
      <Paper>
        <Grid container spacing={2}>
          {products.map((item, index) => (
            <Grid item xs={4} key={index}>
              <Product data={item}/>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  )
}