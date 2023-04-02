import React, { useEffect, useRef } from 'react'
import { Grid } from '@mui/material'
import { Product } from './Product'
import autoAnimate from '@formkit/auto-animate'

export const ProductsList = ({products}) => {

  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      autoAnimate(ref.current);
    }
  }, [products])

  return (
    <Grid container spacing={2} ref={ref}>
      {products && products.length ?
        products.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Product data={item}/>
          </Grid>
        ))
        :
        <Grid item xs={12}>
          <p>No products found</p>
        </Grid>
      }
    </Grid>
  )
}