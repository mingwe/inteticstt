import { SET_SORT } from '../actions/types'
import { DESC } from '../../helpers/sort'

const initialState = {
  type: DESC
}

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT:
      return {
        ...state,
        type: action.payload
      }
    default:
      return state
  }
};

export default sortReducer
