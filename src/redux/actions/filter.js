import FiltersService from '../../api/shop/FiltersService'
import { setError } from './error'
import {
  CLEAR_FILTER,
  SET_COLORS_LIST,
  SET_PRICE_MAX,
  SET_PRICE_MIN,
  SET_SEARCH_QUERY,
  TOGGLE_FILTER_COLOR
} from './types'
import { setLoading } from './loader'

export const toggleFilterColor = (color) => (
  {
    type: TOGGLE_FILTER_COLOR,
    payload: color
  }
)
export const clearFilter = () => (
  {
    type: CLEAR_FILTER,
  }
)
export const setPriceMin = price => (
  {
    type: SET_PRICE_MIN,
    payload: price
  }
)

export const setPriceMax = price => (
  {
    type: SET_PRICE_MAX,
    payload: price
  }
)

export const setSearchQuery = q => (
  {
    type: SET_SEARCH_QUERY,
    payload: q
  }
)

//async
export const getColors = () => {
  return dispatch => {
    dispatch(setLoading(true))
    return FiltersService.getColorsList()
      .then(response => {
          dispatch({
            type: SET_COLORS_LIST,
            payload: response.data,
          })
          dispatch(setLoading(false))
        },
        error => {
          dispatch(setError(true, error.message))
        },
      )
  }
}