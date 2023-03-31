import FiltersService from '../../api/shop/FiltersService';
import { setError } from './error';

export const setFilter = (filters) => {
  return {
    type: 'SET_FILTER',
    payload: filters
  }
}

export const toggleFilterColor = (color) => {
  return {
    type: 'TOGGLE_FILTER_COLOR',
    payload: color
  }
}

// export const setColorsList = (list) => {
//   return {
//     type: 'SET_COLORS_LIST',
//     payload: list
//   }
// }

export const clearFilter = () => {
  return {
    type: 'CLEAR_FILTER',
  }
}


//async
export const getColors = () => {
  return dispatch => {
    FiltersService.getColorsList()
      .then(response => {
          dispatch({
            type: 'SET_COLORS_LIST',
            payload: response.data,
          })
        },
        error => dispatch(setError(true, error))
      )
  }
}