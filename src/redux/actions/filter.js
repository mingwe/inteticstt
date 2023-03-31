import FiltersService from '../../api/shop/FiltersService';

export const setFilter = (filters) => {
  return {
    type: 'SET_FILTER',
    payload: filters
  }
}

export const setError = (isActive, error) => { // can be used to unset error if its fixed and apply custom messages in future
  return {
    type: 'SET_ERROR',
    payload: {
      isActive: isActive,
      message: 'an error occured'
    }
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