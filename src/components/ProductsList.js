import React from 'react'
import { Grid } from '@mui/material'
import { Product } from './Product'

export const ProductsList = ({products}) => (
  <>
    {products ?
      products.map((item, index) => (
        <Grid item xs={4} key={index}>
          <Product data={item}/>
        </Grid>
      ))
      :
      <Grid item xs={12}>
        <p>No products found</p>
      </Grid>
    }
  </>
)