const initialState = {
  fetchedColors: [],
  colors: [],
  price: null,
  error: {
    hasError: false,
    message: null
  }
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload
      }
    case 'SET_FILTER':
      return {
        ...state,
        // filter: state.filter + 1,
        filter: action.payload
      };
    case 'SET_COLORS_LIST':
      return {
        ...state,
        fetchedColors: action.payload
      }
    case 'TOGGLE_FILTER_COLOR':
      return {
        ...state,
        colors: state.colors.includes(action.payload) ? state.colors.filter(i => i !== action.payload) : [...state.colors, action.payload]
      }
    case 'CLEAR_FILTER':
      return {
        ...state,
        // filter: state.filter - 1,
        filter: null
      };
    default:
      return state
  }
};

export default filterReducer
