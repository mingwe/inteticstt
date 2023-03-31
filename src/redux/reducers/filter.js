import { CLEAR_FILTER, SET_COLORS_LIST, TOGGLE_FILTER_COLOR } from '../actions/types';

const initialState = {
  fetchedColors: [],
  colors: [],
  price: {
    min: null,
    max: null
  },
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLORS_LIST:
      return {
        ...state,
        fetchedColors: action.payload
      }
    case TOGGLE_FILTER_COLOR:
      return {
        ...state,
        colors: state.colors.includes(action.payload) ? state.colors.filter(i => i !== action.payload) : [...state.colors, action.payload]
      }
    case CLEAR_FILTER:
      return {
        ...state,
        filter: null
      };
    default:
      return state
  }
};

export default filterReducer
