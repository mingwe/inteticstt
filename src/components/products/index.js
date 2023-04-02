import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductsList } from './components/ProductsList'
import { getProducts } from '../../redux/actions/products'

export const Products = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products?.items)
  const filters = useSelector(state => state.filter)
  const sort = useSelector(state => state.sort)

  useEffect(() => {
      dispatch(getProducts(sort, filters))
    },
    [dispatch, filters, sort]
  )

  return (
    <ProductsList products={products}/>
  )
}