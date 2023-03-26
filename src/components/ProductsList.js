import React, { useEffect, useState } from 'react'
import { Alert, CircularProgress, Grid } from '@mui/material'
import { Product } from './Product'
import { useDispatch, useSelector } from 'react-redux'
import { applyFilters, getProducts } from '../redux/productsSlice'
import { STATUS_ERROR, STATUS_IDLE, STATUS_LOADING } from '../helpers/status';
import { Loader } from './Loader';

const ProductsList = () => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.products?.products)
  const productsFiltered = useSelector(state => state.products?.productsFiltered)
  const status = useSelector(state => state.products.status)
  const errorMsg = useSelector(state => status.error)

  useEffect(() => {
      dispatch(getProducts())
    },
    [dispatch]
  )

  useEffect(
    () => {
      dispatch(applyFilters())
    },
    [products]
  )

  return (
    <Grid container spacing={2}>
      {status === STATUS_LOADING &&
        <Loader/>
      }
      {status === STATUS_IDLE &&
        productsFiltered.map((item, index) => (
          <Grid item xs={4} key={index}>
            <Product data={item}/>
          </Grid>
        ))
      }
      {status === STATUS_ERROR &&
        <Alert severity={'error'}>{errorMsg}</Alert>
      }
    </Grid>
  )
}

export default ProductsList