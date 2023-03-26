import React, { useEffect } from 'react'
import { Product } from './Product'
// import { products } from '../mock'
import { Grid, Paper } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/productsSlice'
import ProductsList from './ProductsList';

export const Main = () => {

  return (
    <div>
      main
      <Paper>
        <ProductsList/>
      </Paper>
    </div>
  )
}