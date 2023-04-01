import { SET_ERROR } from '../actions/types'

const initialState = {
  hasError: false,
  message: null
}

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        hasError: action.payload?.isActive ?? true,
        message: action.payload?.message || 'an error occured'
      }
    default:
      return state
  }
}

export default errorReducer
