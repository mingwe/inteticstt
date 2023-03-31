import React, { useEffect } from 'react'
import { Alert, Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { STATUS_ERROR, STATUS_IDLE, STATUS_LOADING } from '../../helpers/status'
import { Loader } from '../utils/Loader'
import { ProductsList } from './components/ProductsList'
import { getProducts } from '../../redux/actions/products';

export const Products = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products?.items)
  // const status = useSelector(state => state.products.status)
  // const errorMsg = useSelector(state => state.products.error)
  const filters = useSelector(state => state.filter)
  const sort = useSelector(state => state.sort)

  useEffect(() => {
      dispatch(getProducts(sort, filters))
    },
    [dispatch, filters, sort]
  )

  return (
    <Grid container spacing={2}>
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