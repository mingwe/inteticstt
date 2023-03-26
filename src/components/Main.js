import React, { useEffect } from 'react'
import { Alert, Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { applyFilters, getProducts } from '../redux/productsSlice'
import { STATUS_ERROR, STATUS_IDLE, STATUS_LOADING } from '../helpers/status'
import { Loader } from './Loader'
import { ProductsList } from './ProductsList'

export const Main = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products?.products)
  const productsFiltered = useSelector(state => state.products?.productsFiltered)
  const status = useSelector(state => state.products.status)
  const errorMsg = useSelector(state => state.products.error)

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
        <ProductsList products={productsFiltered}/>
      }
      {status === STATUS_ERROR &&
        <Alert severity={'error'}>{errorMsg}</Alert>
      }
    </Grid>
  )
}