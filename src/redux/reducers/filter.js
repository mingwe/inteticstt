import {
  CLEAR_FILTER,
  SET_COLORS_LIST,
  SET_PRICE_MAX,
  SET_PRICE_MIN,
  SET_SEARCH_QUERY,
  TOGGLE_FILTER_COLOR
} from '../actions/types';

const initialState = {
  fetchedColors: [],
  colors: [],
  price: {
    min: null,
    max: null
  },
  search: null
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
    case SET_PRICE_MIN:
      return {
        ...state,
        price: {
          ...state.price,
          min: action.payload
        }
      }
    case SET_PRICE_MAX:
      return {
        ...state,
        price: {
          ...state.price,
          max: action.payload
        }
      }
    case SET_SEARCH_QUERY:
      return {
        ...state,
        search: action.payload || ''
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
