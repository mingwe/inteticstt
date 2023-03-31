import ProductsService from '../../api/shop/ProductsService';
import { setError } from './error';

export const setProducts = (products) => {
  return {
    type: 'SET_PRODUCTS',
    payload: products,
  };
};

export const clearProducts = () => {
  return {
    type: 'CLEAR_PRODUCTS',
  };
};


export const getProducts = (sort, filters) => {
  console.log('sort ', sort)
  console.log('filters ', filters)
  return dispatch => {
    ProductsService.getProducts(sort, filters)
      .then(response => {
          dispatch({
            type: 'SET_PRODUCTS',
            payload: response.data,
          })
        },
        error => dispatch(setError(true, error))
      )
  }
}