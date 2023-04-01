import ProductsService from '../../api/shop/ProductsService'
import { setError } from './error'
import { CLEAR_PRODUCTS, SET_PRODUCTS } from './types'
import { setLoading } from './loader'

// export const setProducts = (products) => {
//   return {
//     type: SET_PRODUCTS,
//     payload: products,
//   };
// };

export const clearProducts = () => {
  return {
    type: CLEAR_PRODUCTS,
  };
};


export const getProducts = (sort, filters) => {
  return dispatch => {
    dispatch(setLoading(true))
    return ProductsService.getProducts(sort, filters)
      .then(response => {
          dispatch({
            type: SET_PRODUCTS,
            payload: response.data,
          })
          dispatch(setLoading(false))
        },
        error => {
          dispatch(setError(true, error.message))
          dispatch(setLoading(false))
        }
      )
  }
}