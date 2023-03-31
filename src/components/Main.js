import React, { useEffect } from 'react'
import { Alert, Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { STATUS_ERROR, STATUS_IDLE, STATUS_LOADING } from '../helpers/status'
import { Loader } from './Loader'
import { ProductsList } from './ProductsList'
import { getProducts } from '../redux/actions/products';
import { TempComp } from './TempComp';

export const Main = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products?.items)
  // const productsFiltered = useSelector(state => state.products?.productsFiltered)
  // const status = useSelector(state => state.products.status)
  // const errorMsg = useSelector(state => state.products.error)
  const filters = useSelector(state => state.filter)

  useEffect(() => {
      dispatch(getProducts('asc', filters))
    },
    [dispatch, filters]
  )

  // useEffect(
  //   () => {
  //     dispatch(applyFilters())
  //   },
  //   [products]
  // )

  return (
    <Grid container spacing={2}>
      <TempComp/>
      {/*{status === STATUS_LOADING &&*/}
      {/*  <Loader/>*/}
      {/*}*/}
      {/*{status === STATUS_IDLE &&*/}
        <ProductsList products={products}/>
      {/*}*/}
      {/*{status === STATUS_ERROR &&*/}
      {/*  <Alert severity={'error'}>{errorMsg}</Alert>*/}
      {/*}*/}
    </Grid>
  )
}