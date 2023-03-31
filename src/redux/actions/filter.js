import FiltersService from '../../api/shop/FiltersService'
import { setError } from './error'
import { CLEAR_FILTER, SET_COLORS_LIST, TOGGLE_FILTER_COLOR } from './types'

export const toggleFilterColor = (color) => {
  return {
    type: TOGGLE_FILTER_COLOR,
    payload: color
  }
}
export const clearFilter = () => {
  return {
    type: CLEAR_FILTER,
  }
}


//async
export const getColors = () => {
  return dispatch => {
    FiltersService.getColorsList()
      .then(response => {
          dispatch({
            type: SET_COLORS_LIST,
            payload: response.data,
          })
        },
        error => dispatch(setError(true, error))
      )
  }
}