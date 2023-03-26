import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { Product } from './Product'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/productsSlice'

const ProductsList = () => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.products?.products)
  const filters = useSelector(state => state.filters.filters)

  // const [filteredProducts, setFilteredProducts] = useState(products)
  // console.log('products', products)
  // console.log('filteredProducts', filteredProducts)

  // useEffect(
  //   () => {
  //     setFilteredProducts(products)
  //   },
  //   [products]
  // )

  // useEffect(
  //   () => {
  //     if (filters?.categories?.length) {
  //       setFilteredProducts(products.filter(product => filters.categories.includes(product?.category)))
  //     }
  //     else {
  //       setFilteredProducts(products)
  //     }
  //     // const filtered = filteredProducts.
  //   },
  //   [products, filters]
  // )

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const isPassesFilters = product => {
    if (filters?.categories?.length && !filters.categories.includes(product?.category)) {
      return false
    }
    if (filters?.price?.min && product.price < filters.price.min) {
      return false
    }
    if (filters?.price?.max && product.price > filters.price.max) {
      return false
    }
    return true
  }

  return (
    <Grid container spacing={3}>
      {products.map((item, index) => (
      // {filteredProducts.map((item, index) => (
        <>
          {/*{!(filters.categories.length && !filters.categories.includes(item?.category))*/}
          {/*?*/}
          {/*  {((item.price > filters?.price?.min) && (item.price < filters?.price?.max))*/}
          {/*    ?*/}
          {/*    <Grid item xs={4} key={index}>*/}
          {/*      <Product data={item}/>*/}
          {/*    </Grid>*/}
          {/*    : null*/}
          {/*  }*/}
          {/*  : null*/}
          {/*}*/}
          {isPassesFilters(item)
            ?
            <Grid item xs={4} key={index}>
              <Product data={item}/>
            </Grid>
            : null
          }
        </>
      ))}
    </Grid>
  )
}

export default ProductsList