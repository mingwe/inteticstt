import ProductsService from '../../api/shop/ProductsService'
import { setError } from './error'
import { CLEAR_PRODUCTS, SET_PRODUCTS } from './types'

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
    ProductsService.getProducts(sort, filters)
      .then(response => {
          dispatch({
            type: SET_PRODUCTS,
            payload: response.data,
          })
        },
        error => dispatch(setError(true, error))
      )
  }
}